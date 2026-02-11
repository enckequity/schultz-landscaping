# Schultz Landscaping and Concrete LLC — Site Handoff

## What Was Built

A complete, production-ready single-page website for Schultz Landscaping and Concrete LLC. The site includes:

- Hero section with call-to-action
- Services grid (9 services)
- Stats/trust signals bar
- About section with trust badges
- Project gallery with lightbox
- Customer testimonials
- Full-page CTA section
- FAQ section (8 questions, schema-marked for Google rich snippets)
- Service areas section (18 towns across Knox/Delaware/Licking Counties)
- Responsive header with mobile menu
- Full footer with contact info, hours, and service links
- Custom 404 page
- Dynamic favicon

## SEO Features

- LocalBusiness schema markup (JSON-LD)
- FAQPage schema markup for rich snippets
- Optimized title tags and meta descriptions
- Open Graph and Twitter card tags
- robots.txt and sitemap.xml
- Semantic HTML throughout
- 800+ words of real, keyword-targeted content

## How to Update Content

Open `/lib/constants.ts` — all company info, services, testimonials, and contact details are here. Edit the file, save, commit, and push. The site auto-deploys in ~60 seconds.

## How to Update Images

Replace the Unsplash URLs in `/lib/constants.ts` under the `IMAGES` object with your own photo URLs, or place files in `/public/images/` and reference them as `/images/filename.jpg`.

## How to Add a Custom Domain

1. Go to vercel.com
2. Select the schultz-landscaping project
3. Go to Settings > Domains
4. Add your domain (e.g., schultzlandscaping.com)
5. Update your DNS records as Vercel instructs

## How to Add Google Analytics

1. Get your GA4 Measurement ID (starts with G-)
2. Open `/app/layout.tsx`
3. Find the commented-out Google Analytics section
4. Uncomment it and replace `G-XXXXXXXXXX` with your ID
5. Commit and push

## Brand Guide

See `brand-guide.md` in the project root.

## Running Locally

```bash
npm install
npm run dev
```

Open http://localhost:3000

## Support

Contact: [Your contact info here]
