# Horizon Properties — Real Estate Website

## Overview
A premium real estate website built with Vite + React, React Router, Tailwind CSS, Framer Motion, and Embla Carousel. The app is a client-side SPA with no backend — property data is stored in `src/data/properties.js` and structured for easy migration to a real API/database.

## Tech Stack
- **Framework:** Vite 5 + React 18
- **Routing:** React Router DOM v6
- **Styling:** Tailwind CSS v3 (custom theme with navy/gold/ivory palette)
- **Animations:** Framer Motion (hero entrance) + Intersection Observer (section fade-ups)
- **Carousel:** Embla Carousel (drag/swipe, autoplay, keyboard accessible)
- **Icons:** Lucide React
- **Fonts:** Inter (body) + Cormorant Garamond (display) via Google Fonts

## Development
```bash
docker compose -f docker-compose.base44.yml up -d --build
```
The dev server runs on port 5173 inside the container, mapped to host port 3000. Vite hot reload is active — edits appear live without rebuilding.

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
