import { NextResponse } from "next/server";

export async function GET() {
  const config = {
    hasSecretKey: !!process.env.STRIPE_SECRET_KEY,
    hasPublicKey: !!process.env.STRIPE_PUBLIC_KEY,
    hasPriceId: !!process.env.STRIPE_PRICE_ID_EBOOK,
    hasSuccessUrl: !!process.env.STRIPE_SUCCESS_URL,
    hasCancelUrl: !!process.env.STRIPE_CANCEL_URL,
    hasWebhookSecret: !!process.env.STRIPE_WEBHOOK_SECRET_EBOOK,
    priceId: process.env.STRIPE_PRICE_ID_EBOOK,
    successUrl: process.env.STRIPE_SUCCESS_URL,
    cancelUrl: process.env.STRIPE_CANCEL_URL,
    secretKeyPrefix: process.env.STRIPE_SECRET_KEY?.substring(0, 7) || "missing",
  };

  return NextResponse.json(config, { status: 200 });
}


