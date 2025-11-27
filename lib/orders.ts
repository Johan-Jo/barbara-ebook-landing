import { promises as fs } from "fs";
import path from "path";
import type Stripe from "stripe";

interface Order {
  stripe_session_id: string;
  email: string;
  status: string;
  amount: number;
  created_at: string;
}

const ORDERS_FILE = path.join(process.cwd(), "data", "orders.json");

/**
 * Ensures the data directory exists
 */
async function ensureDataDirectory(): Promise<void> {
  const dataDir = path.dirname(ORDERS_FILE);
  try {
    await fs.access(dataDir);
  } catch {
    await fs.mkdir(dataDir, { recursive: true });
  }
}

/**
 * Reads all orders from the JSON file
 */
export async function readOrders(): Promise<Order[]> {
  try {
    await ensureDataDirectory();
    const data = await fs.readFile(ORDERS_FILE, "utf-8");
    return JSON.parse(data) as Order[];
  } catch (error) {
    // File doesn't exist yet, return empty array
    if ((error as NodeJS.ErrnoException).code === "ENOENT") {
      return [];
    }
    throw error;
  }
}

/**
 * Writes orders to the JSON file
 */
async function writeOrders(orders: Order[]): Promise<void> {
  await ensureDataDirectory();
  await fs.writeFile(ORDERS_FILE, JSON.stringify(orders, null, 2), "utf-8");
}

/**
 * Saves a paid order from a Stripe checkout session.
 * Idempotent: won't create duplicates for the same session_id.
 */
export async function savePaidOrderFromSession(
  session: Stripe.Checkout.Session
): Promise<void> {
  if (!session.id) {
    throw new Error("Session ID is required");
  }

  const orders = await readOrders();

  // Check if order already exists (idempotent)
  const existingOrder = orders.find(
    (order) => order.stripe_session_id === session.id
  );

  if (existingOrder) {
    console.log(`Order ${session.id} already exists, skipping`);
    return;
  }

  const email =
    session.customer_email ||
    session.customer_details?.email ||
    "unknown@example.com";

  const newOrder: Order = {
    stripe_session_id: session.id,
    email,
    status: session.payment_status === "paid" ? "paid" : "pending",
    amount: session.amount_total || 0,
    created_at: new Date().toISOString(),
  };

  orders.push(newOrder);
  await writeOrders(orders);

  console.log(`Order saved: ${session.id} for ${email}`);
}




