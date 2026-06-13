import { NextRequest, NextResponse } from 'next/server';
import { createHmac, randomBytes } from 'crypto';

const TOKEN_RATE_LIMIT_MAX = 20;
const TOKEN_RATE_LIMIT_WINDOW_MS = 60 * 60 * 1000; // 1 hour per IP

// In-memory rate limit for token generation endpoint
const tokenIpRateMap = new Map<string, { count: number; resetAt: number }>();

function checkTokenRateLimit(ip: string): boolean {
  const now = Date.now();
  const entry = tokenIpRateMap.get(ip);
  if (!entry || now > entry.resetAt) {
    tokenIpRateMap.set(ip, { count: 1, resetAt: now + TOKEN_RATE_LIMIT_WINDOW_MS });
    return true;
  }
  if (entry.count >= TOKEN_RATE_LIMIT_MAX) return false;
  entry.count++;
  return true;
}

export async function GET(req: NextRequest) {
  const secret = process.env.CONTACT_FORM_SECRET;
  if (!secret) {
    return NextResponse.json({ error: 'Server configuration error' }, { status: 500 });
  }

  const ip =
    req.headers.get('x-forwarded-for')?.split(',')[0].trim() ||
    req.headers.get('x-real-ip') ||
    'unknown';

  if (!checkTokenRateLimit(ip)) {
    return NextResponse.json(
      { error: 'Too many requests. Please try again later.' },
      { status: 429 }
    );
  }

  const timestamp = Math.floor(Date.now() / 1000).toString();
  const nonce = randomBytes(16).toString('hex');
  const payload = `${timestamp}.${nonce}`;
  const hmac = createHmac('sha256', secret).update(payload).digest('hex');

  return NextResponse.json({ token: `${payload}.${hmac}` });
}
