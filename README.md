# Tulas International School (TIS) — Homepage Redesign

A modern, animated redesign of the Tulas International School homepage focusing on
high conversion, fluid animations, and mobile-first responsiveness.

## 🚀 Live Demo
- **GitHub Pages (primary):** [harisaibhaskar.github.io/tis-homepage-redesign](https://harisaibhaskar.github.io/tis-homepage-redesign/) — auto-deploys on every push via GitHub Actions
- **Render:** [tis-homepage-redesign.onrender.com](https://tis-homepage-redesign.onrender.com)
- **Repository:** [HariSaiBhaskar/tis-homepage-redesign](https://github.com/HariSaiBhaskar/tis-homepage-redesign)

## Tech Stack

- **Framework:** React 19 + Vite 8 (TypeScript, strict mode)
- **Styling:** Tailwind CSS v4 (CSS-variable design tokens for runtime theming)
- **Animations:** Framer Motion 14 (springs, scroll-linked motion, `whileInView`)
- **Icons:** Lucide React
- **Deployment:** Vercel / Netlify / GitHub Pages (static build, zero config)

## Standout Features Implemented

All four standout features from the brief are implemented:

1. **Custom Cursor** — a dot + trailing ring driven by Framer Motion springs
   (`useMotionValue` + `useSpring`, transform-only updates for 60 FPS). The ring
   scales up when hovering any interactive element (`a`, `button`,
   `[data-cursor="hover"]`) and is fully disabled on touch devices via
   `matchMedia('(pointer: coarse)')`.
   → `src/components/animation/CustomCursor.tsx`
2. **Scroll-Triggered Reveals** — every section animates in with
   `whileInView` + `viewport={{ once: true }}`, entrance durations kept between
   0.3s–0.6s with staggered children variants.
   → `src/components/animation/Reveal.tsx`
3. **Animated Dark/Light Theme Switcher** — CSS custom properties power both
   palettes; the toggle animates Sun/Moon with Framer Motion, persists the
   choice in `localStorage`, respects `prefers-color-scheme` on first visit,
   and an inline script in `index.html` prevents flash-of-wrong-theme.
   → `src/components/animation/ThemeToggle.tsx`, `src/hooks/useTheme.ts`
4. **Scroll Progress Bar** — a fixed top bar bound to `useScroll()` smoothed
   with `useSpring()`.
   → `src/components/animation/ScrollProgress.tsx`

Bonus: infinite scrolling photo band, animated count-up statistics,
scroll-spy navigation underline, back-to-top button, FAQ accordion, campus
life gallery, and an admissions form with success state.

## Getting Started Locally

1. **Clone the repository:**
```bash
git clone https://github.com/HariSaiBhaskar/tis-homepage-redesign.git
cd tis-homepage-redesign
```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Run the development server:**
   ```bash
   npm run dev
   ```

4. Open http://localhost:5173 in your browser.

## Scripts

| Command           | Description                              |
| ----------------- | ---------------------------------------- |
| `npm run dev`     | Start the Vite dev server                |
| `npm run build`   | Type-check (`tsc -b`) + production build |
| `npm run preview` | Serve the production build locally       |
| `npm run lint`    | Run oxlint                               |

## Component Architecture

```
src/
├── components/
│   ├── animation/        # CustomCursor, ScrollProgress, Reveal, ThemeToggle, BackToTop, CountUp
│   ├── layout/           # Navbar (scroll-spy), MobileNav, Footer
│   ├── sections/         # Hero, PhotoBand, Stats, About, Programs, Facilities,
│   │                       # CampusLife, Testimonials, FAQ, Admission
│   └── ui/               # Button, AnchorButton, Badge, SectionHeading
├── data/                 # nav items, contact info, programs, facilities, testimonials, FAQs
├── hooks/                # useTheme, useScrollProgress, useCountUp, useMediaQuery
├── lib/                  # cn() class-name helper
├── styles/               # global.css — Tailwind v4 + CSS-variable design tokens (light/dark)
├── App.tsx               # Page composition wrapped in MotionConfig
└── main.tsx              # React entry point
```

### Design decisions

- **Semantic HTML** — `<header>`, `<main>`, `<section>`, `<footer>`, `<nav>`,
  `<figure>`/`<blockquote>`/`<figcaption>`, one `<h1>`, labelled form controls,
  `aria-expanded` on the accordion, `aria-current` on nav links.
- **Performance** — scroll listeners are `{ passive: true }`, cursor motion uses
  transforms only, `IntersectionObserver` powers scroll-spy and count-ups, and
  `MotionConfig reducedMotion="user"` respects OS reduced-motion settings.
- **Responsive** — mobile-first breakpoints at 375px, 768px, and 1280px+;
  custom cursor and decorative visuals degrade gracefully on coarse pointers.

## Deployment

The project builds to a static `dist/` folder and uses **relative asset
paths** (`base: './'`), so it runs identically on any static host — root
domain or project subpath.

- **GitHub Pages (automated):** this repo includes a GitHub Actions
  workflow (`.github/workflows/deploy.yml`). Enable it once:
  repo → **Settings** → **Pages** → Source: **GitHub Actions** → Save.
  Every push to `main` then auto-deploys to
  `https://harisaibhaskar.github.io/tis-homepage-redesign/`.
- **Netlify (instant):** drag the `dist/` folder to
  **app.netlify.com/drop** for a one-click live URL, or use
  **New site from Git** to connect this repo (build command
  `npm run build`, publish directory `dist`).
- **Vercel:** import the repository — the framework is detected
  automatically.
- **Render:** connect the repo as a Static Site (build command
  `npm run build`, publish directory `dist`, instance type Free).

## Brand Identity Retained

Primary school palette (deep indigo + gold accent), CBSE-focused copy, and the
Tulas International School name and crest from tis.edu.in. All photography is
self-hosted under `public/images/photos/` (12 professional campus/classroom/
sports shots) — zero external asset dependencies, so the page never shows a
broken image.
