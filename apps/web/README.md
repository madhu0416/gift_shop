# Giftly Customer Web

A runnable Next.js + TypeScript + Tailwind customer web foundation for the gifting platform. The homepage follows the approved visual direction: soft pink/blue palette, rounded premium cards, photography-led category circles, product cards, wedding spotlight, special days, personalised gifts, hampers, anniversary, new arrivals and offers.

## Run

From the repository root:

```bash
npm install
npm run dev:web
```

Open `http://localhost:3000`.

Production:

```bash
npm run build:web
npm run start:web
```

## Main routes

- `/` — complete homepage overview
- `/wedding` — deep wedding ecosystem
- `/wedding/combos` — wedding combo landing page
- Other linked collection paths are handled by the generic collection route until their dedicated page modules are implemented.

## Assets

All demo visuals are local SVG illustrations in `public/images`, so the demo does not depend on external image hosts. Replace them later with owned/licensed product photography while keeping the same image slots and aspect ratios.

## Architecture note

This update is presentation-layer focused. It does not migrate or replace the planned backend. The locked architecture remains Next.js web + React Native/Expo mobile + separate Next.js admin + NestJS REST API + PostgreSQL, with Redis/Search/AWS services added according to the project build order.
