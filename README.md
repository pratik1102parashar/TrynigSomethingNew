# Nexus AI — Website

A modern AI platform landing page built with **Next.js 15 (App Router)** and **Tailwind CSS 4**, featuring rich scroll-based and entrance animations.

## Tech Stack

| Tool | Version | Purpose |
|------|---------|---------|
| Next.js | 15 (App Router) | React framework with SSR/SSG |
| Tailwind CSS | v4 | Utility-first styling |
| Framer Motion | v12 | Page transitions & entrance animations |
| GSAP | v3 | Scroll-triggered animations |
| TypeScript | v5 | Type safety |

## Fonts

- **Space Grotesk** (via Google Fonts) — Primary display/heading font. Closest free alternative to proprietary fonts typically used on modern AI sites.
- **Inter** (via Google Fonts) — Body and UI text.

## Site Sections

1. **Navigation** — Sticky header with blur-on-scroll, mobile hamburger menu, animated entrance
2. **Hero** — Particle canvas animation, animated headline with stagger, code snippet mockup, CTA buttons
3. **Features** — 6-card grid with entrance animations and gradient icon tiles
4. **Product / Use Cases** — 3 use-case cards with parallax scroll effect
5. **How It Works** — 4-step timeline with alternating layout and scroll animations
6. **Testimonials** — Carousel-style with animated transitions + stats row + logo wall
7. **Pricing** — 3-plan grid (Starter / Pro / Enterprise) with highlighted card
8. **CTA** — Full-width gradient call-to-action with pulse animation
9. **Footer** — 5-column layout with social links, status badge

## Setup & Development

### Prerequisites

- Node.js 18+
- npm 9+

### Install & Run

```bash
# Install dependencies
npm install

# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to see the site.

### Build for Production

```bash
npm run build
npm start
```

### Lint

```bash
npm run lint
```

## Animation Details

- **Entrance animations** — `framer-motion` `useInView` hook triggers `opacity + translateY` animations when sections scroll into the viewport
- **Staggered children** — Hero section uses `staggerChildren` for sequenced element reveals
- **Parallax** — Product section uses `useScroll` + `useTransform` for parallax depth effect
- **Particle network** — Hero canvas animation draws connected particles using `requestAnimationFrame`
- **Scroll indicator** — Animated bounce loop on hero scroll hint
- **Testimonial carousel** — `AnimatePresence` for smooth slide transitions

## Project Structure

```
app/
├── components/
│   ├── Navigation.tsx     # Sticky header with mobile menu
│   ├── Hero.tsx           # Particle hero with animated copy
│   ├── Features.tsx       # 6-feature grid
│   ├── Product.tsx        # Use-case cards with parallax
│   ├── HowItWorks.tsx     # 4-step timeline
│   ├── Testimonials.tsx   # Carousel + logos + stats
│   ├── Pricing.tsx        # Pricing plans
│   ├── CTA.tsx            # Call-to-action banner
│   └── Footer.tsx         # Site footer
├── globals.css            # Global styles + CSS variables
├── layout.tsx             # Root layout with fonts + metadata
└── page.tsx               # Main page (assembles all sections)
```

## Notes

- All placeholder content (statistics, testimonials, copy) approximates what would appear on the real site
- Proprietary media is replaced with CSS gradients, generated SVG icons, and canvas animations
- The site is fully responsive (mobile, tablet, desktop breakpoints)
