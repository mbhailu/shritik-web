import { NextRequest, NextResponse } from 'next/server';
import { createHmac, timingSafeEqual } from 'crypto';
import nodemailer from 'nodemailer';

const TOKEN_TTL_SECONDS = 10 * 60; // token valid for 10 minutes
const RATE_LIMIT_MAX = 5;
const RATE_LIMIT_WINDOW_MS = 60 * 60 * 1000; // 1 hour per IP

// In-memory rate limit store (resets on cold start, acceptable for contact form)
const ipRateMap = new Map<string, { count: number; resetAt: number }>();

// Track consumed tokens to prevent replay attacks
const usedTokenSigs = new Map<string, number>(); // sig → expiry unix seconds

function checkRateLimit(ip: string): boolean {
  const now = Date.now();
  const entry = ipRateMap.get(ip);
  if (!entry || now > entry.resetAt) {
    ipRateMap.set(ip, { count: 1, resetAt: now + RATE_LIMIT_WINDOW_MS });
    return true;
  }
  if (entry.count >= RATE_LIMIT_MAX) return false;
  entry.count++;
  return true;
}

function verifyToken(token: string, secret: string): boolean {
  try {
    const parts = token.split('.');
    if (parts.length !== 3) return false;
    const [timestamp, nonce, providedHmac] = parts;

    // Verify HMAC signature with timing-safe comparison
    const expectedHex = createHmac('sha256', secret)
      .update(`${timestamp}.${nonce}`)
      .digest('hex');

    const expected = Buffer.from(expectedHex, 'hex');
    const provided = Buffer.from(providedHmac.length === expectedHex.length ? providedHmac : 'x'.repeat(expectedHex.length), 'hex');
    if (!timingSafeEqual(expected, provided)) return false;

    // Check timestamp freshness (reject future tokens with 30s clock skew tolerance)
    const now = Math.floor(Date.now() / 1000);
    const ts = parseInt(timestamp, 10);
    if (isNaN(ts) || ts > now + 30 || now - ts > TOKEN_TTL_SECONDS) return false;

    return true;
  } catch {
    return false;
  }
}

function isTokenReplayed(token: string): boolean {
  const parts = token.split('.');
  if (parts.length !== 3) return false;
  const [, , hmac] = parts;
  // Purge expired entries opportunistically
  const now = Math.floor(Date.now() / 1000);
  for (const [sig, exp] of usedTokenSigs.entries()) {
    if (now > exp) usedTokenSigs.delete(sig);
  }
  return usedTokenSigs.has(hmac);
}

function consumeToken(token: string): void {
  const parts = token.split('.');
  if (parts.length !== 3) return;
  const [timestamp, , hmac] = parts;
  const ts = parseInt(timestamp, 10);
  usedTokenSigs.set(hmac, isNaN(ts) ? 0 : ts + TOKEN_TTL_SECONDS);
}

function escapeHtml(str: string): string {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

// Strip null bytes and dangerous control characters; preserve newlines and tabs
function sanitize(str: string): string {
  return str.replace(/[\x00-\x08\x0B\x0C\x0E-\x1F\x7F]/g, '').trim();
}

const VALID_PRODUCTS = new Set([
  'Cashew Kernels (W-Grades)',
  'Cashew Kernels (Splits/Pieces)',
  'Dehydrated Onion',
  'Dehydrated Garlic',
  'Dehydrated Ginger',
  'Multiple Products',
  'Private Label Inquiry',
  'Other',
]);

const ALLOWED_ORIGINS = new Set(
  [
    'https://www.shritikllp.com',
    'https://shritikllp.com',
    process.env.NODE_ENV === 'development' ? 'http://localhost:3000' : null,
    process.env.NEXT_PUBLIC_SITE_URL ?? null,
  ].filter(Boolean) as string[]
);

function isCorsAllowed(origin: string | null): boolean {
  // No origin header = same-origin or server-to-server request
  if (!origin) return true;
  return ALLOWED_ORIGINS.has(origin);
}

export async function OPTIONS(req: NextRequest) {
  const origin = req.headers.get('origin');
  if (!isCorsAllowed(origin)) {
    return new NextResponse(null, { status: 403 });
  }
  return new NextResponse(null, {
    status: 204,
    headers: {
      'Access-Control-Allow-Origin': origin ?? '',
      'Access-Control-Allow-Methods': 'POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type',
      'Access-Control-Max-Age': '86400',
    },
  });
}

export async function POST(req: NextRequest) {
  const origin = req.headers.get('origin');
  if (!isCorsAllowed(origin)) {
    return NextResponse.json({ error: 'Forbidden' }, { status: 403 });
  }

  const secret = process.env.CONTACT_FORM_SECRET;
  const gmailUser = process.env.GMAIL_USER;
  const gmailPass = process.env.GMAIL_APP_PASSWORD;
  const recipient = process.env.RECIPIENT_EMAIL;

  if (!secret || !gmailUser || !gmailPass || !recipient) {
    console.error('Missing required environment variables for contact form');
    return NextResponse.json({ error: 'Server configuration error' }, { status: 500 });
  }

  if (!req.headers.get('content-type')?.includes('application/json')) {
    return NextResponse.json({ error: 'Invalid content type' }, { status: 415 });
  }

  // Rate limiting by IP
  const ip =
    req.headers.get('x-forwarded-for')?.split(',')[0].trim() ||
    req.headers.get('x-real-ip') ||
    'unknown';

  if (!checkRateLimit(ip)) {
    return NextResponse.json(
      { error: 'Too many requests. Please try again later.' },
      { status: 429 }
    );
  }

  let body: Record<string, unknown>;
  try {
    body = await req.json();
    if (typeof body !== 'object' || body === null) throw new Error();
  } catch {
    return NextResponse.json({ error: 'Invalid request body' }, { status: 400 });
  }

  const { token, name, company, country, email, phone, product, quantity, message } = body;

  // Verify anti-replay token
  if (typeof token !== 'string' || !verifyToken(token, secret)) {
    return NextResponse.json(
      { error: 'Form token invalid or expired. Please refresh and try again.' },
      { status: 403 }
    );
  }

  // Reject replayed tokens
  if (isTokenReplayed(token)) {
    return NextResponse.json(
      { error: 'Form token has already been used. Please refresh and try again.' },
      { status: 403 }
    );
  }

  // Server-side validation
  const errors: Record<string, string> = {};

  const str = (v: unknown) => (typeof v === 'string' ? v : '');

  if (!str(name).trim()) errors.name = 'Name is required';
  else if (str(name).length > 100) errors.name = 'Name must be under 100 characters';

  if (!str(company).trim()) errors.company = 'Company is required';
  else if (str(company).length > 200) errors.company = 'Company name must be under 200 characters';

  if (!str(country).trim()) errors.country = 'Country is required';
  else if (str(country).length > 100) errors.country = 'Country must be under 100 characters';

  if (!str(email).trim()) {
    errors.email = 'Email is required';
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(str(email)) || str(email).length > 254) {
    errors.email = 'Invalid email address';
  }

  if (!str(phone).trim()) errors.phone = 'Phone number is required';
  else if (str(phone).length > 50) errors.phone = 'Phone number must be under 50 characters';

  if (!str(product).trim() || !VALID_PRODUCTS.has(str(product))) {
    errors.product = 'Please select a valid product';
  }

  if (!str(message).trim()) errors.message = 'Message is required';
  else if (str(message).length > 5000) errors.message = 'Message must be under 5000 characters';

  if (str(quantity).length > 200) errors.quantity = 'Quantity must be under 200 characters';

  if (Object.keys(errors).length > 0) {
    return NextResponse.json({ errors }, { status: 422 });
  }

  // Mark token as consumed before sending to prevent double-submit race
  consumeToken(token);

  // Sanitize all fields
  const safe = {
    name: sanitize(str(name)),
    company: sanitize(str(company)),
    country: sanitize(str(country)),
    email: sanitize(str(email)),
    phone: sanitize(str(phone)),
    product: sanitize(str(product)),
    quantity: sanitize(str(quantity)),
    message: sanitize(str(message)),
    submittedAt: new Date().toUTCString(),
  };

  const htmlBody = `
    <!DOCTYPE html>
    <html lang="en">
    <head><meta charset="UTF-8"><title>Export Inquiry</title></head>
    <body style="font-family:Arial,sans-serif;max-width:640px;margin:0 auto;padding:24px;color:#111">
      <h2 style="color:#1a472a;border-bottom:2px solid #2d6a4f;padding-bottom:8px">
        New Export Inquiry — Shritik Enterprises
      </h2>
      <table style="width:100%;border-collapse:collapse;margin-top:16px">
        <tbody>
          ${[
            ['Full Name', escapeHtml(safe.name)],
            ['Company', escapeHtml(safe.company)],
            ['Country', escapeHtml(safe.country)],
            ['Email', `<a href="mailto:${escapeHtml(safe.email)}">${escapeHtml(safe.email)}</a>`],
            ['Phone / WhatsApp', escapeHtml(safe.phone)],
            ['Product of Interest', escapeHtml(safe.product)],
            ...(safe.quantity ? [['Quantity Required', escapeHtml(safe.quantity)]] : []),
          ]
            .map(
              ([label, value]) => `
            <tr>
              <td style="padding:10px 12px;background:#f0fdf4;font-weight:bold;width:180px;border:1px solid #d1fae5;vertical-align:top">
                ${label}
              </td>
              <td style="padding:10px 12px;border:1px solid #d1fae5;vertical-align:top">
                ${value}
              </td>
            </tr>`
            )
            .join('')}
          <tr>
            <td style="padding:10px 12px;background:#f0fdf4;font-weight:bold;border:1px solid #d1fae5;vertical-align:top">
              Message
            </td>
            <td style="padding:10px 12px;border:1px solid #d1fae5;white-space:pre-wrap;vertical-align:top">
              ${escapeHtml(safe.message)}
            </td>
          </tr>
        </tbody>
      </table>
      <p style="margin-top:20px;font-size:12px;color:#6b7280">
        Submitted: ${escapeHtml(safe.submittedAt)}
      </p>
    </body>
    </html>
  `;

  const textBody = [
    'New Export Inquiry — Shritik Enterprises',
    '='.repeat(48),
    `Full Name:          ${safe.name}`,
    `Company:            ${safe.company}`,
    `Country:            ${safe.country}`,
    `Email:              ${safe.email}`,
    `Phone / WhatsApp:   ${safe.phone}`,
    `Product:            ${safe.product}`,
    safe.quantity ? `Quantity Required:  ${safe.quantity}` : null,
    '',
    'Message:',
    safe.message,
    '',
    `Submitted: ${safe.submittedAt}`,
  ]
    .filter((line) => line !== null)
    .join('\n');

  try {
    const transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      port: 587,
      secure: false, // STARTTLS
      auth: { user: gmailUser, pass: gmailPass },
    });

    await transporter.sendMail({
      from: `"Shritik Enterprises Contact Form" <${gmailUser}>`,
      to: recipient,
      replyTo: safe.email,
      subject: `Export Inquiry: ${safe.product} — ${safe.company} (${safe.country})`,
      text: textBody,
      html: htmlBody,
    });

    return NextResponse.json({ success: true });
  } catch {
    console.error('Contact form: email delivery failed');
    return NextResponse.json(
      { error: 'Failed to send message. Please try again or email us directly.' },
      { status: 500 }
    );
  }
}
