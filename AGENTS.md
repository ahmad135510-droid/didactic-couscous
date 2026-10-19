# Mosque Website — Base44 Dev Environment

## Stack
- React 18 + Vite 6 + Tailwind CSS 3
- Persian RTL website for mosque info & activities
- No backend, no database — static frontend

## Setup
- `docker compose -f docker-compose.base44.yml up -d --build`
- App runs on port 3000 (Vite dev server, live reload enabled)
- Dependencies install on container startup via `npm install`
- `node_modules` is a named volume (not bind-mounted from host)

## Structure
- `src/App.jsx` — main app, composes all sections
- `src/components/` — Navbar, Hero, About, PrayerTimes, Activities, Events, Contact, Footer
- Prayer times are static placeholders — replace with a real API if needed

## Verify
- `curl http://localhost:3000/` should return the HTML shell
- Browser at port 3000 shows the mosque website
