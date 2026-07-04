# SilentPip Labs — launch checklist

Site is built. 3 things left before it's live and taking money.

## 1. Stripe (2 links needed)

1. Create a Stripe account if you don't have one: stripe.com
2. Dashboard → Payment Links → New
   - Phantom9er, $47, one-time
   - Setup Service, $147, one-time
3. Copy each link, paste over the placeholder in:
   - `products.html` → search `REPLACE_WITH_PHANTOM9ER_LINK`
   - `setup-service.html` → search `REPLACE_WITH_SETUP_SERVICE_LINK`

## 2. PayPal (2 links needed)

1. paypal.me → set up your PayPal.me link if you don't have one
2. Replace in the same two files:
   - `products.html` → search `REPLACE_ME/47`
   - `setup-service.html` → search `REPLACE_ME/147`

## 3. Deploy to Vercel + connect silentpiplabs.com

1. Push this folder to a GitHub repo
2. vercel.com → New Project → import that repo (no build settings needed, it's static HTML)
3. Vercel → Project → Settings → Domains → add `silentpiplabs.com`
4. Update your domain's DNS (wherever you bought it) to point at Vercel's nameservers/records — Vercel shows you exactly what to add

## Known limitations (fine for launch, fix later)

- **Delivery is manual.** When someone buys Phantom9er, Stripe/PayPal notify you — you email the EA file to the buyer. No automation yet.
- **Contact form and Slipstream waitlist use `mailto:`** — opens the visitor's email client instead of submitting silently. Works, but adds friction. Swap to Formspree or a Google Form later if signups feel low.
- **No logo yet** — site uses a text wordmark ("SilentPip Labs" with "Pip" in orange). Swap in a real logo image in the header whenever it's ready — no rebuild needed, just replace the `.logo` link content in each HTML file.
- **Booking is manual** — buyer pays, then emails back to schedule the setup session. Add Calendly later if you want it self-serve.

## File structure

```
index.html          home
products.html        Phantom9er + Slipstream
setup-service.html   $147 setup service
about.html
contact.html
css/style.css        dark orange/black theme
js/main.js           nav toggle, form handling
```
