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

## Key Features
- Sticky header with transparent-to-solid scroll transition
- Full-viewport hero with entrance animations
- Property carousel with drag/swipe/autoplay
- Property listing page with search + multi-filter
- Property detail page with image gallery (thumbnails + fullscreen viewer)
- Favorites system (localStorage)
- Responsive across mobile/tablet/desktop
- Accessible (semantic HTML, ARIA labels, keyboard nav, focus states)
