# Arihant Infra — Premium Real Estate Website

A production-ready Next.js 14 real estate website for Arihant Infra, featuring luxury UI with dark royal blue + gold gradient styling.

## Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Styling:** Tailwind CSS v3
- **Animations:** Framer Motion
- **Forms:** React Hook Form with validation
- **Database:** Firebase Firestore (for leads)
- **Images:** next/image (optimized)
- **Fonts:** Playfair Display (headings) + Manrope (body)

## Pages

| Route | Description |
|-------|-------------|
| `/` | Home page — hero, about, amenities, all 4 projects, contact |
| `/projects` | Projects listing grid — ongoing + completed |
| `/projects/[slug]` | Project detail — gallery, amenities, sticky form, map |

## Quick Start

```bash
# 1. Install dependencies
npm install

# 2. Set up environment variables
cp .env.example .env.local
# Edit .env.local with your Firebase config

# 3. Start development server
npm run dev

# 4. Open browser
open http://localhost:3000
```

## Firebase Setup (Optional)

Leads are saved to Firebase Firestore. If not configured, the form still shows success (leads are logged to console as fallback).

1. Go to [Firebase Console](https://console.firebase.google.com/)
2. Create a new project
3. Add a Web App
4. Copy the config into `.env.local`
5. Create a Firestore database in test mode
6. The `leads` collection is created automatically on first submission

## Folder Structure

```
arihant-infra/
├── app/
│   ├── layout.tsx          # Root layout (Navbar, Footer, FloatingButtons)
│   ├── page.tsx            # Home page
│   ├── not-found.tsx       # 404 page
│   ├── globals.css         # Global styles
│   └── projects/
│       ├── page.tsx        # Projects listing
│       ├── loading.tsx     # Loading skeleton
│       └── [slug]/
│           ├── page.tsx    # Project detail (SSG)
│           ├── ProjectDetailClient.tsx  # Client component
│           └── loading.tsx
├── components/
│   ├── Navbar.tsx          # Sticky navigation
│   ├── Footer.tsx          # Site footer
│   ├── ProjectCard.tsx     # Reusable project card (normal + featured)
│   ├── ContactForm.tsx     # Form with validation + Firebase
│   ├── FloatingButtons.tsx # WhatsApp + Call floating CTAs
│   ├── AnimatedSection.tsx # Framer Motion scroll reveal wrapper
│   └── home/
│       ├── HeroSection.tsx # Animated hero with particles
│       ├── MarqueeStrip.tsx
│       └── StatsSection.tsx
├── data/
│   └── projects.json       # All project data
├── lib/
│   └── firebase.ts         # Firebase client init
├── .env.example
├── next.config.mjs
├── tailwind.config.ts
└── tsconfig.json
```

## Adding a New Project

Edit `data/projects.json` and add a new object following the existing schema:

```json
{
  "slug": "my-new-project",
  "title": "My New Project",
  "subtitle": "Tagline here",
  "status": "ongoing",
  "type": "Residential",
  "location": "Palghar, Maharashtra",
  "address": "Full address here",
  "rera": "RERA number",
  "shortDescription": "One-line summary",
  "description": "Full description...",
  "image": "https://...",
  "gallery": ["https://...", "https://..."],
  "amenities": [{ "icon": "gem", "title": "Feature", "desc": "Description" }],
  "highlights": ["Feature 1", "Feature 2"],
  "configurations": [{ "type": "2BHK", "carpet": "700 sq.ft", "price": "On Request" }],
  "mapEmbed": "https://www.google.com/maps/embed?...",
  "architect": "Name",
  "legalAdvisor": "Name",
  "completionYear": "2026",
  "totalFloors": 8,
  "featured": false
}
```

## Production Build

```bash
npm run build
npm start
```

## SEO Features

- Dynamic metadata (title + description) per project
- Open Graph + Twitter Card tags
- `generateStaticParams` for SSG on all project pages
- next/image for optimized images
- Semantic HTML throughout

## License

© 2024 Arihant Infra. All rights reserved.
