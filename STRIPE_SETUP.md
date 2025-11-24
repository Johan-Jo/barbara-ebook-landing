# Stripe Setup Guide

This guide will walk you through setting up Stripe for the e-book landing page.

## Step 1: Create a Stripe Account

1. Go to [https://stripe.com](https://stripe.com)
2. Click "Sign up" and create an account
3. Complete the onboarding process

## Step 2: Get Your API Keys

1. Go to the [Stripe Dashboard](https://dashboard.stripe.com)
2. Click on **Developers** → **API keys**
3. You'll see two keys:
   - **Publishable key** (starts with `pk_test_` for test mode, `pk_live_` for live mode)
   - **Secret key** (starts with `sk_test_` for test mode, `sk_live_` for live mode)

⚠️ **Important**: Start with **Test mode** to test payments without charging real money.

## Step 3: Create a Product and Price

1. In Stripe Dashboard, go to **Products** → **Add product**
2. Fill in:
   - **Name**: "Aprenda a Decorar em Dois Passos"
   - **Description**: (optional) Description of the e-book
   - **Pricing**: 
     - Set the price (e.g., R$ 49,90 or your desired price)
     - Choose currency (BRL for Brazilian Real)
     - Select "One time" payment
3. Click **Save product**
4. **Copy the Price ID** (starts with `price_...`) - you'll need this!

## Step 4: Set Up Webhook (for Production)

Webhooks allow Stripe to notify your app when a payment is completed.

### For Local Development (using Stripe CLI):

1. Install Stripe CLI: [https://stripe.com/docs/stripe-cli](https://stripe.com/docs/stripe-cli)
2. Login: `stripe login`
3. Forward webhooks to your local server:
   ```bash
   stripe listen --forward-to localhost:3000/api/stripe/webhook
   ```
4. Copy the webhook signing secret (starts with `whsec_...`)

### For Production (Vercel):

1. In Stripe Dashboard, go to **Developers** → **Webhooks**
2. Click **Add endpoint**
3. Enter your endpoint URL:
   ```
   https://your-domain.com/api/stripe/webhook
   ```
4. Select events to listen to:
   - `checkout.session.completed`
5. Click **Add endpoint**
6. **Copy the Signing secret** (starts with `whsec_...`)

## Step 5: Configure Environment Variables

### Local Development (.env.local)

Create a file named `.env.local` in the root of your project:

```env
# Stripe API Keys
STRIPE_SECRET_KEY=sk_test_...
STRIPE_PUBLIC_KEY=pk_test_...

# Stripe Product Configuration
STRIPE_PRICE_ID_EBOOK=price_...

# URLs (for local development)
STRIPE_SUCCESS_URL=http://localhost:3000/ebook/acesso
STRIPE_CANCEL_URL=http://localhost:3000/checkout/cancelado

# Webhook Secret (from Stripe CLI or Dashboard)
STRIPE_WEBHOOK_SECRET_EBOOK=whsec_...
```

### Production (Vercel)

1. Go to your Vercel project dashboard
2. Navigate to **Settings** → **Environment Variables**
3. Add each variable:
   - `STRIPE_SECRET_KEY` (use `sk_live_...` for production)
   - `STRIPE_PUBLIC_KEY` (use `pk_live_...` for production)
   - `STRIPE_PRICE_ID_EBOOK` (your price ID)
   - `STRIPE_SUCCESS_URL` (e.g., `https://your-domain.com/ebook/acesso`)
   - `STRIPE_CANCEL_URL` (e.g., `https://your-domain.com/checkout/cancelado`)
   - `STRIPE_WEBHOOK_SECRET_EBOOK` (from webhook endpoint)

## Step 6: Test the Integration

1. Start your development server:
   ```bash
   npm run dev
   ```

2. Test a payment:
   - Use Stripe test card: `4242 4242 4242 4242`
   - Any future expiry date
   - Any 3-digit CVC
   - Any ZIP code

3. Check the webhook:
   - In Stripe Dashboard → **Developers** → **Webhooks** → **Events**
   - You should see `checkout.session.completed` events

## Step 7: Go Live

When ready for real payments:

1. **Switch to Live Mode** in Stripe Dashboard (toggle in top right)
2. **Create a live product and price** (repeat Step 3)
3. **Update environment variables** in Vercel with live keys
4. **Set up production webhook** (repeat Step 4)
5. **Test with a real card** (use a small amount first!)

## Troubleshooting

### "Stripe não configurado" error
- Check that `.env.local` exists and has all required variables
- Restart your dev server after adding environment variables

### Webhook not working
- Verify the webhook URL is correct
- Check that `STRIPE_WEBHOOK_SECRET_EBOOK` matches your webhook endpoint
- For local dev, make sure Stripe CLI is running

### Payment not completing
- Check browser console for errors
- Verify `STRIPE_SUCCESS_URL` and `STRIPE_CANCEL_URL` are correct
- Ensure the price ID exists in your Stripe account

## Security Notes

- ⚠️ **Never commit** `.env.local` to git (it's already in `.gitignore`)
- ⚠️ **Never share** your secret keys publicly
- ⚠️ Always use **test mode** keys for development
- ⚠️ Switch to **live mode** only when ready for production

## Support

- Stripe Documentation: [https://stripe.com/docs](https://stripe.com/docs)
- Stripe Support: [https://support.stripe.com](https://support.stripe.com)

