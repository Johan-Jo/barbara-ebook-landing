import { NextRequest, NextResponse } from "next/server";
import { getStripe } from "@/lib/stripe";

export async function POST(request: NextRequest) {
  try {
    // Check if Stripe is configured
    if (!process.env.STRIPE_SECRET_KEY) {
      return NextResponse.json(
        { error: "Stripe não configurado" },
        { status: 503 }
      );
    }

    const priceId = process.env.STRIPE_PRICE_ID_EBOOK;
    const successUrl = process.env.STRIPE_SUCCESS_URL;
    const cancelUrl = process.env.STRIPE_CANCEL_URL;

    if (!priceId || !successUrl || !cancelUrl) {
      console.error("Missing required Stripe environment variables");
      return NextResponse.json(
        { error: "Configuração de pagamento incompleta" },
        { status: 500 }
      );
    }

    const stripe = getStripe();
    const session = await stripe.checkout.sessions.create({
      mode: "payment",
      line_items: [
        {
          price: priceId,
          quantity: 1,
        },
      ],
      success_url: `${successUrl}?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: cancelUrl,
      billing_address_collection: "auto",
      allow_promotion_codes: true,
      payment_method_types: ["card", "pix"],
      payment_method_options: {
        pix: {
          expires_after_seconds: 86400, // PIX expires after 1 day (86400 seconds) if not paid
        },
      },
    });

    if (!session.url) {
      throw new Error("Failed to create checkout session URL");
    }

    return NextResponse.json({ url: session.url });
  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : "Unknown error";
    const errorStack = error instanceof Error ? error.stack : undefined;
    
    console.error("========== CHECKOUT ERROR ==========");
    console.error("Error message:", errorMessage);
    console.error("Error stack:", errorStack);
    console.error("Full error object:", error);
    console.error("====================================");
    
    return NextResponse.json(
      { 
        error: "Erro ao processar pagamento. Tente novamente.",
        details: errorMessage,
        stack: process.env.NODE_ENV === "development" ? errorStack : undefined
      },
      { status: 500 }
    );
  }
}

