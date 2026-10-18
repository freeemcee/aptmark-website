# APTMARK. — Business & Digital Consulting

A static, responsive consultancy website ready to deploy on Vercel.

## Deploy with GitHub + Vercel
1. Create a new GitHub repository, e.g. `aptmark-website`.
2. Upload `index.html`, `styles.css`, `script.js` and the `assets` folder to the repository root.
3. In Vercel, choose **Add New > Project**, import the repository and deploy with default settings (Framework Preset: Other).
4. Once `aptmark.com.au` is purchased, add it under the project's **Settings > Domains**, then follow Vercel's DNS instructions at your registrar.

## IMPORTANT: Configure contact enquiries before launch
The form is intentionally **not** connected to a recipient yet; no email address was provided. Open `script.js` and set `BUSINESS_EMAIL` to an address you control. The form then opens the visitor's default email app with an enquiry prepared; the visitor must press Send. This is a lightweight interim approach, **not** a reliable server-side enquiry system. For production, use a verified form provider (e.g. Formspree) or a serverless endpoint, with spam protection and privacy information. Do not claim submissions are delivered until tested end-to-end.

## Content checks before launch
- The Westline Landscapes project is clearly labelled as a **fictional concept/demo**, not a paid client project.
- Pricing is AUD. Confirm GST registration and adjust tax-inclusive advertising if required.
- Verify scope, timelines, and the terms of the $500 introductory offer.
- Add an accurate privacy policy before collecting personal information through a hosted form.
- Ensure ASIC business name registration and ABN details are in order before trading as APTMARK.
- The included approved APTMARK logo image is at `assets/aptmark-logo.png`. The site currently uses a text wordmark for sharp responsive rendering. You can replace it with the image if desired.
- Google Fonts requires internet access; fallback fonts are provided.

## Files
- `index.html` — content and semantic markup
- `styles.css` — responsive design
- `script.js` — mobile navigation and mailto enquiry behaviour
- `assets/aptmark-logo.png` — approved brand concept image
- `assets/favicon.svg` — browser icon
