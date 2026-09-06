# apps/api — Backend (NestJS)

This folder is intentionally empty except for this file. Scaffold it with:

```bash
cd apps/api
npx @nestjs/cli new . --package-manager npm --skip-git
```

Recommended module folders once scaffolded (matches the master plan's domain breakdown):

```
src/
  auth/
  users/
  sellers/
  products/
  categories/
  search/
  homepage/
  cart/
  wishlist/
  addresses/
  serviceability/
  inventory/
  orders/
  payments/
  delivery/
  reviews/
  coupons/
  personalization/
  recommendations/
  notifications/
  media/
  admin/
```

Build order (per the master plan): **auth first** — every other module depends on knowing who the user is.

Add PostgreSQL via `@nestjs/typeorm` or Prisma (team's choice) once auth is working.
