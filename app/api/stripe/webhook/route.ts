import { NextRequest, NextResponse } from "next/server";
import { stripe } from "@/lib/stripe";
import { savePaidOrderFromSession } from "@/lib/orders";
import Stripe from "stripe";

export const runtime = "nodejs";

export async function POST(request: NextRequest) {
  const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET_EBOOK;

  if (!webhookSecret) {
    console.error("STRIPE_WEBHOOK_SECRET_EBOOK is not set");
    return NextResponse.json(
      { error: "Webhook secret not configured" },
      { status: 500 }
    );
  }

  try {
    // Read raw body as text (required for signature validation)
    const body = await request.text();
    const signature = request.headers.get("stripe-signature");

    if (!signature) {
      return NextResponse.json(
        { error: "Missing stripe-signature header" },
        { status: 400 }
      );
    }

    // Verify webhook signature
    let event: Stripe.Event;
    try {
      event = stripe.webhooks.constructEvent(body, signature, webhookSecret);
    } catch (err) {
      const error = err as Error;
      console.error("Webhook signature verification failed:", error.message);
      return NextResponse.json(
        { error: "Invalid signature" },
        { status: 400 }
      );
    }

    // Handle the event
    if (event.type === "checkout.session.completed") {
      const session = event.data.object as Stripe.Checkout.Session;

      try {
        await savePaidOrderFromSession(session);
        console.log(`Processed checkout.session.completed for session: ${session.id}`);
      } catch (error) {
        console.error("Error saving order:", error);
        // Still return 200 to prevent Stripe from retrying
        // Log the error for manual investigation
      }
    } else {
      console.log(`Unhandled event type: ${event.type}`);
    }

    // Return 200 to acknowledge receipt
    return NextResponse.json({ received: true });
  } catch (error) {
    console.error("Webhook error:", error);
    return NextResponse.json(
      { error: "Webhook processing failed" },
      { status: 500 }
    );
  }
}

