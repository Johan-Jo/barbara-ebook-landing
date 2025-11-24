import type Stripe from "stripe";

export type { Stripe };

export interface CheckoutResponse {
  url: string;
}

export interface Order {
  stripe_session_id: string;
  email: string;
  status: string;
  amount: number;
  created_at: string;
}

