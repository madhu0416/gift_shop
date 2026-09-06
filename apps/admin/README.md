# apps/admin — Admin panel (Next.js, separate app, same API)

Scaffold the same way as apps/web:

```bash
cd apps/admin
npx create-next-app@latest . --typescript --tailwind --eslint --app --src-dir --import-alias "@/*"
```

This app talks to the same NestJS API as apps/web and apps/mobile — never duplicate business logic here.

First page to build: `/admin/login` with MFA, then `/admin/products` (see gifting-app-page-structure.md in docs/).
