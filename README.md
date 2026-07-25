# NorthPeak Digital

A responsive one-page marketing site for a fictional web development agency, built for the **Digital Heroes Internship — Web Development Task Kit (Task A & B)**.

**Live site:** [add your deployed URL here]
**Repo:** [add your GitHub repo URL here]

---

## Overview

NorthPeak Digital is built with plain HTML5, CSS3, and vanilla JavaScript — no frameworks, no page builders, no external UI libraries. The goal was a fast, accessible, fully responsive site that a real agency could actually use.

## Sections

- **Hero** — headline, subheadline, primary/secondary CTAs, animated stat counters
- **Services** — 6-card grid (Web Development, UI/UX, Shopify/E-commerce, Full-Stack, SEO, Speed/Accessibility Audits)
- **Testimonials** — client results
- **Pricing** — 3 tiers
- **Contact** — form with full client-side validation
- **Footer** — nav, service links, and the required Digital Heroes credit line

## Tech Stack

| Layer | Choice |
|---|---|
| Markup | Semantic HTML5 (`header`, `nav`, `main`, `section`, `article`, `footer`) |
| Styling | Vanilla CSS3 — custom properties, Grid/Flexbox, no framework |
| Behavior | Vanilla JS, no dependencies |
| Icons | Inline SVG |
| Hosting | Vercel / Netlify / GitHub Pages (free tier) |

## Features

**Responsive design** — tested and built for 360px, 768px, and 1440px breakpoints, with a mobile hamburger nav.

**Form validation** (`js/validation.js`) — real-time client-side checks on name, email, service selection, and message length, with:
- Inline error messages per field
- `aria-invalid`, `aria-describedby`, and `role="alert"` for screen readers
- A success banner on valid submit

**Interactions** (`js/app.js`) — mobile nav toggle, scroll-aware header shadow, animated stat counters on the hero.

**Accessibility** — WCAG-conscious contrast ratios, labeled form fields, visible focus states, 48px+ touch targets, logical heading hierarchy (single `h1` → `h2` → `h3`).

**Performance** — zero runtime dependencies, SVG assets instead of raster images, scripts loaded at end of body, passive scroll listeners, GPU-friendly transforms for the mobile nav.

## Project Structure

```
NorthPeak-Digital/
├── index.html
├── css/
│   └── styles.css
├── js/
│   ├── app.js          # nav, scroll effects, stat counters
│   └── validation.js   # contact form validation
├── assets/
│   ├── logo.svg
│   └── favicon.svg
├── CHANGELOG.md         # Task B: Lighthouse optimization log
├── LOOM_SCRIPT.md        # Task B: walkthrough script
└── README.md
```

## Running Locally

No build step required.

```bash
git clone [your-repo-url]
cd NorthPeak-Digital
# open index.html directly, or serve it:
npx serve .
```

## Lighthouse Optimization (Task B)

See [`CHANGELOG.md`](./CHANGELOG.md) for the full breakdown of performance and accessibility optimizations, with before/after reasoning for each change.

## AI Usage Disclosure

Built with AI assistance (Claude) for scaffolding HTML structure, CSS patterns, and validation logic. I directed the architecture, wrote and revised the copy, made the layout/design decisions, and tested and adjusted the responsive breakpoints and accessibility behavior myself.

---
Built for the Digital Heroes Internship Web Development task. Not a real company.
