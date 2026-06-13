import { NextResponse } from 'next/server';
import { createHmac, randomBytes } from 'crypto';

export async function GET() {
  const secret = process.env.CONTACT_FORM_SECRET;
  if (!secret) {
    return NextResponse.json({ error: 'Server configuration error' }, { status: 500 });
  }

  const timestamp = Math.floor(Date.now() / 1000).toString();
  const nonce = randomBytes(16).toString('hex');
  const payload = `${timestamp}.${nonce}`;
  const hmac = createHmac('sha256', secret).update(payload).digest('hex');

  return NextResponse.json({ token: `${payload}.${hmac}` });
}
