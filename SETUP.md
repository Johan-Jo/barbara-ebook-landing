# Setup Instructions

## Quick Start

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Create `.env.local` file** (copy from `.env.local.example` if it exists, or create manually):
   ```
   STRIPE_SECRET_KEY=sk_test_...
   STRIPE_PUBLIC_KEY=pk_test_...
   STRIPE_PRICE_ID_EBOOK=price_...
   STRIPE_SUCCESS_URL=http://localhost:3000/ebook/acesso
   STRIPE_CANCEL_URL=http://localhost:3000/checkout/cancelado
   STRIPE_WEBHOOK_SECRET_EBOOK=whsec_...
   ```

3. **Copy PDF to public folder:**
   - Ensure `EBOOK BARBARA MARQUES.pdf` is copied to `public/ebooks/barbara-aprenda-a-decorar.pdf`

4. **Run development server:**
   ```bash
   npm run dev
   ```

## Stripe Setup

### 1. Create Product in Stripe Dashboard
- Go to Products → Add product
- Set name, description, and price
- Copy the Price ID to `STRIPE_PRICE_ID_EBOOK`

### 2. Configure Webhook
- Go to Developers → Webhooks → Add endpoint
- URL: `https://your-domain.com/api/stripe/webhook`
- Select event: `checkout.session.completed`
- Copy signing secret to `STRIPE_WEBHOOK_SECRET_EBOOK`

### 3. For Local Testing
Use Stripe CLI:
```bash
stripe listen --forward-to localhost:3000/api/stripe/webhook
```
Use the webhook secret provided by the CLI in your `.env.local`

## Project Structure

- `app/page.tsx` - Main landing page
- `app/api/checkout/route.ts` - Creates Stripe checkout session
- `app/api/stripe/webhook/route.ts` - Handles Stripe webhooks
- `app/ebook/acesso/page.tsx` - Gated access page (after payment)
- `app/checkout/cancelado/page.tsx` - Cancellation page
- `components/` - All landing page sections
- `lib/stripe.ts` - Stripe client
- `lib/orders.ts` - Order storage (file-based)
- `hooks/useCheckout.ts` - Checkout handler hook

## Features Implemented

✅ Next.js 15 with App Router
✅ TypeScript with strict mode
✅ Tailwind CSS with brand colors
✅ All landing page sections
✅ Stripe Checkout integration
✅ Webhook handler for payment confirmation
✅ Gated access page with session validation
✅ File-based order storage
✅ SEO metadata
✅ Accessibility features (ARIA, focus states)
✅ Responsive design




