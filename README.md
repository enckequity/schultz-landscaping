# Schultz Landscaping and Concrete LLC — Website

Production-ready website for Schultz Landscaping and Concrete LLC, a landscaping and concrete contractor based in Centerburg, Ohio.

## Tech Stack

- **Framework:** Next.js 16 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS v4
- **Animations:** Framer Motion
- **Icons:** Lucide React
- **Fonts:** Bitter (headings) + Nunito Sans (body) via Google Fonts

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## How to Update Content

All company-specific data lives in one file:

```
/lib/constants.ts
```

Edit this file to update:
- Company name, phone, email, address
- Services list (title, description, icon)
- Testimonials
- FAQ questions and answers
- Service areas
- Image URLs
- Business hours

Save, commit, and push. The site auto-deploys in ~60 seconds.

## How to Update Images

Replace image URLs in `/lib/constants.ts` under the `IMAGES` object. For local images, place files in `/public/images/` and reference them as `/images/filename.jpg`.

## Deployment

Push to the `main` branch on GitHub. Vercel auto-deploys on every push.

## Project Structure

```
/app              — Pages and layouts
/components
  /ui             — Reusable UI primitives
  /sections       — Page sections (Hero, Services, etc.)
  /layout         — Header, Footer
/lib
  /constants.ts   — All company data
  /utils.ts       — Helper functions
/public           — Static assets, robots.txt, sitemap.xml
```

## Brand Guide

See `brand-guide.md` in the project root for colors, typography, and voice guidelines.
