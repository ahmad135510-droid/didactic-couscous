# Horizon Properties — Real Estate Website

## Overview
A premium, Persian-language (RTL) real estate website built with Vite + React, React Router, Tailwind CSS, Framer Motion, and Embla Carousel. The app is a client-side SPA with no backend — property data is stored in `src/data/properties.js` and structured for easy migration to a real API/database.

## Tech Stack
- **Framework:** Vite 5 + React 18
- **Routing:** React Router DOM v6
- **Styling:** Tailwind CSS v3 (custom theme with navy/gold/ivory palette)
- **Animations:** Framer Motion (hero entrance) + Intersection Observer (section fade-ups)
- **Carousel:** Embla Carousel (drag/swipe, autoplay, keyboard accessible)
- **Icons:** Lucide React
- **Fonts:** Vazirmatn (body/UI) + Markazi Text (display headlines) via Google Fonts

## Development
```bash
docker compose -f docker-compose.base44.yml up -d --build
```
The dev server runs on port 5173 inside the container, mapped to host port 3000. Vite hot reload is active — edits appear live without rebuilding.

The compose `web.command` installs with `npm install --no-audit --no-fund` and then `exec`s `./node_modules/.bin/vite` directly rather than going through `npx`: the install output stays clean (no audit/funding report) and a container restart no longer prints npm's noisy `command failed / SIGTERM` banner. Keep that shape when editing the service.

## Project Structure
```
src/
  components/    Reusable UI (Header, Footer, PropertyCard, PropertyCarousel, ImageGallery, etc.)
  sections/      Homepage sections (Hero, WhoWeAre, FeaturedProperties, Services, Team, CTA)
  pages/         Route pages (Home, Properties, PropertyDetail, About, Services, Team, Contact)
  data/          Property, team, and services data
  context/       FavoritesContext (localStorage-backed)
  hooks/         useScrollAnimation (Intersection Observer)
```

## Design System
- **Navy:** `#0A192F` — primary text, buttons, dark sections
- **Gold:** `#C5A059` — accents, labels, icons, borders
- **Ivory:** `#FAF9F6` — main background
- **Warm Gray:** `#F8F9FA` — alternating section background

## Language & direction (site is Persian, RTL)
`index.html` sets `<html lang="fa" dir="rtl">`, and the document is Persian-only — new copy must be written in Persian.

- **Typography:** `font-sans` = Vazirmatn (all UI/body), `font-serif` = Markazi Text (`.section-title`, hero `h1`, stat numbers). **Never add letter-spacing/tracking to Persian text** — it visually breaks the joined letters of the script; the `text-hero`/`text-section` sizes in `tailwind.config.js` already carry `letter-spacing: 0` plus the extra leading Persian needs.
- **Directional styles use logical utilities** (`start-*`/`end-*`, `ms-*`/`me-*`, `ps-*`/`pe-*`), never `left`/`right`/`ml`/`mr`/`pl`/`pr`, so overlays and badges stay mirrored correctly (e.g. a card's type badge is `start-4` = top-right, its favourite button `end-4` = top-left).
- **Arrows point the RTL way:** "go forward" is `ArrowLeft` with `group-hover:-translate-x-1`; gallery/carousel "previous" sits at `start-*` with a `ChevronRight`, "next" at `end-*` with `ChevronLeft`, and the fullscreen arrow keys follow physical travel (left = next). Embla reads the direction from the container, so the carousel mirrors on its own.
- **Numbers:** import from `src/utils/format.js` — `faNumber` (Persian digits + separators), `faArea`/`sqm` (the data stores `sqft`; Persian listings read square metres), `faDigits`, `faYear` (Jalali year for the footer). Counters read «۱ از ۵», never `1 / 5`.
- **Keep Latin text LTR:** phone numbers, e-mail addresses and the `HORIZON PROPERTIES` wordmark live in `dir="ltr"` spans (bidi would otherwise mirror their brackets). The wordmark is deliberately not translated.

## Hero video (scroll-scrubbed)
The homepage hero is a **paused** video whose timeline is driven by scroll — it is never played and never looped.
- `src/sections/Hero.jsx` — 300vh section with a `sticky top-0` 100vh viewport; ~200vh of scroll traverses the clip.
- `src/hooks/useScrollScrubVideo.js` — the engine: passive scroll listener only records the target progress, `requestAnimationFrame` eases the playhead towards it, and `video.currentTime` is written only when the visible frame would actually change (half a frame at 24fps). The loop parks itself when the playhead settles.
- `src/components/HeroVideo.jsx` — source selection, reveal when the clip can really be scrubbed, and the fallback.
- `public/hero/` — `hero-desktop.mp4` (~4.6MB), `hero-mobile.mp4` (~1.4MB, served at <=768px or with `saveData`), `hero-poster.jpg` (first frame; also the `poster` attribute, so the reveal is invisible).

**The clips are re-encodes.** The supplied master had exactly **one keyframe** for the whole 9s, so every seek decoded from frame 0 and scrubbing stuttered badly. Never drop a new master straight into `public/hero/`; re-encode it first (`-g 8 -keyint_min 8 -sc_threshold 0 -bf 0 -pix_fmt yuv420p -movflags +faststart -an`); the full command and the preferred characteristics are documented at the top of `src/hooks/useScrollScrubVideo.js`.

Degraded paths (both verified):
- `prefers-reduced-motion: reduce` → still poster frame, no pinned section, the video is not even downloaded.
- Video fails to load → original Unsplash hero photograph, normal 100vh hero, no pinned scroll.

How to check it: load `/`, confirm the video is `paused`, scroll slowly/fast/reverse and watch `video.currentTime` track `progress * duration` (exactly `duration` at the end of the pin) and hold still when scrolling stops.

## Key Features
- Sticky header with transparent-to-solid scroll transition
- Full-viewport hero with entrance animations
- Property carousel with drag/swipe/autoplay
- Property listing page with search + multi-filter
- Property detail page with image gallery (thumbnails + fullscreen viewer)
- Favorites system (localStorage)
- Responsive across mobile/tablet/desktop
- Accessible (semantic HTML, ARIA labels, keyboard nav, focus states)
