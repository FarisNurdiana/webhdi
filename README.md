# PT Hidro Dinamika Internasional — Corporate Website

Premium cinematic deep-tech website for **PT Hidro Dinamika Internasional
(HDI)** — Hydrogen & Silica Technology, Indonesia.

> FROM SILICA TO HYDROGEN. FROM MATTER TO ENERGY. FROM INDONESIA TO THE FUTURE.

## Stack

- **Next.js 15** (App Router) · **React 19** · **TypeScript** (strict)
- **Tailwind CSS 4** — design tokens in `app/globals.css` (`@theme`)
- **GSAP + ScrollTrigger** — scroll-driven sequences
- **Lenis** — smooth scrolling (auto-disabled under `prefers-reduced-motion`)
- **three.js** — hero WebGL scene (plain three, no wrapper, for a minimal
  dependency surface)
- **@fontsource-variable** Space Grotesk (display) + Inter (body) — fonts are
  self-hosted; no runtime Google Fonts dependency

```bash
npm install
npm run dev    # http://localhost:3000
npm run build  # production build
```

## Structure

```
app/                    routes (home, technology[/slug], applications,
                        programs, about, news, contact, sitemap, robots)
components/layout/      Navbar, Footer, PageHero
components/sections/    homepage chapters (Hero, Transformation, TechChapters,
                        Ecosystem, ApplicationsShowcase, Programs, AboutStrip,
                        NewsStrip, FinalCta)
components/visuals/     procedural technology visuals + TechnologyMedia mount
components/three/       WebGL hero scene
components/motion/      SmoothScroll (Lenis), Reveal (viewport entry)
components/ui/          Logo, Button, SectionHeader, ConceptualNote
data/                   ALL site content — single source of truth
hooks/, lib/            usePrefersReducedMotion, gsap registration
public/images/          drop official assets here (see its README)
```

## Content & identity rules (enforced in this codebase)

1. **Company identity is preserved exactly**: PT Hidro Dinamika Internasional.
2. **Official logo**: the navigation renders `public/images/logo.png`
   automatically once the official file is added. Until then a neutral
   typographic wordmark is shown. The logo must never be redrawn,
   reinterpreted or replaced. *(The original logo binary could not be
   downloaded from this build environment — the site was built network-
   restricted; add the file from company archives.)*
3. **No fabricated facts.** Every claim in `/data` traces to the official
   website (hidrodinamika.com) or published press coverage (Koran Jakarta,
   Warta Ekonomi, PLN Suku Cadang) — sources are linked in `data/news.ts`.
   No invented statistics, clients, certifications or specifications.
4. **Conceptual visuals are labeled.** No authentic product photography or 3D
   models exist in the repo yet, so every technology visual is an honest
   procedural representation (schematic SVG, particle systems, plasma canvas)
   marked with a "Conceptual representation" note. Swap in real media via
   `components/visuals/TechnologyMedia.tsx` without touching layout.

## Verified facts used (sources)

- Tagline "Hydrogen & Silica Technology"; contact email/phone — official site
- **Skid Hydrogen Generator** — modular packages for PLTD/industry/demos,
  tens to hundreds of kg H₂/day — official site
- **HydroSi** — Indonesian silica sand → active silicon, solid hydrogen
  carrier ("solid hydrogen battery"), safe/economical/island-shippable —
  official site
- **Plasmalysis (PlasmaArc)** — high-temperature plasma decomposes water
  vapor, urea, ammonia into hydrogen + derivatives — official site
  (`plasmalisis.php`)
- Vehicle conversion without full engine replacement; converted Daihatsu
  Terios; hydrogen stoves; genset hydrogen–diesel co-firing; Hydrogen Car
  Free Day Jakarta (Oct 2025); IFHE forum; Hydrogen Day 2025 — press coverage
  linked in `data/news.ts`
- Addresses: Office — Jl. Haji Nawi Raya No. 45, Gandaria Selatan, Cilandak,
  Jakarta Selatan 12420; Workshop — Kawasan Industri Deprimatera Blok C1A
  No. 1, Jalan Sapan No. 162 B, Tegalluar, Bojongsoang, Bandung, Jawa Barat
  40297 — provided by the company

## Performance & accessibility

- WebGL/canvas scenes: adaptive DPR (≤2, ≤1.5 mobile), paused offscreen and
  when the tab is hidden, disposed on unmount
- `prefers-reduced-motion`: smooth-scroll disabled, hero renders one static
  frame, the pinned transformation sequence degrades to an editorial list
- Semantic HTML, skip link, ARIA labels, visible focus states, keyboard-
  reachable ecosystem diagram (hover = focus)
- Metadata, Open Graph, JSON-LD Organization, `sitemap.xml`, `robots.txt`
