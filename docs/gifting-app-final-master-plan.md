# Gifting E-Commerce Platform — Final Master Plan

This is the locked plan. Stack decision is final based on: real client project, small team available, multi-seller marketplace as the long-term goal. No more architecture switching from here — build against this.

---

## 1. Final stack (locked)

| Layer | Technology |
|---|---|
| Web | Next.js + TypeScript + Tailwind CSS + React Query |
| Mobile | React Native + Expo + TypeScript (iOS + Android from one codebase) |
| Admin | Next.js + TypeScript (separate app, same API) |
| Backend | Node.js + NestJS + TypeScript, REST `/api/v1` |
| Database | PostgreSQL (RDS or Aurora PostgreSQL) |
| Cache | Redis (ElastiCache) |
| Search | PostgreSQL full-text initially → OpenSearch once catalog/traffic grows |
| Media storage | S3 (private, presigned uploads) |
| CDN | CloudFront |
| Background jobs | SQS + worker processes (email, SMS, push, image processing, search indexing) |
| Auth | Cognito (or self-managed JWT + refresh tokens if the team prefers — decide before Phase 5) |
| Payments | Razorpay (webhook-verified) |
| Notifications | FCM (push), SMS, WhatsApp Business API, email |
| Maps/serviceability | Mapbox |
| Security | AWS WAF, Secrets Manager, KMS, IAM, private VPC |
| Monitoring | CloudWatch + OpenTelemetry |
| Deployment | Docker → ECR → ECS Fargate, GitHub Actions CI/CD |
| Architecture style | Modular monolith (NOT microservices) — split out only what actually becomes a bottleneck later |

---

## 1a. Navigation & catalog taxonomy (locked)

Top-level nav, in order: **Wedding, Occasions, Anniversary, Hampers, Personalised, Lifestyle.** Wedding is the primary, highest-priority category — built and populated first.

**Wedding uses two independent, crossing taxonomies, not a nested category tree:**
- `culture_tags[]` — Hindu, Muslim, Christian, Sikh, South Indian, Bengali, Punjabi, Gujarati, Rajasthani, etc.
- `state_tags[]` — Maharashtra, Punjab, Rajasthan, Gujarat, Tamil Nadu, West Bengal, Kerala, UP, etc.

A single product (e.g. a Punjabi Sikh wedding hamper sold in Maharashtra) can carry both a culture tag and a state tag simultaneously. Model these as tag arrays/filters on the product, not as separate category branches — otherwise the same product has to be duplicated across branches to be findable both ways.

**Wedding combos introduce a second product type beyond standard gifts:**
- `product_type`: `gift` | `furniture` | `electrical`
- Furniture/electrical products need type-specific fields (dimensions, weight, warranty period, installation required) that gift products don't — these live on a type-specific extension table or JSONB column, not bolted onto the core `products` table.
- Furniture/electrical items get a `delivery_class`: `standard_gift` (same-day/midnight eligible) vs `bulky_item` (standard delivery only, longer lead time). The serviceability engine must check `delivery_class` before ever offering same-day/midnight on a bulky item.

---

## 2. Architecture overview

```
CUSTOMER
   │
   ├── Web (Next.js)
   └── Mobile (React Native + Expo)
        │
        ▼
   CloudFront → WAF → API Gateway / ALB
        │
        ▼
      NestJS API (modular monolith)
        │
   ┌────┼─────┬────────┬─────────┐
   ▼    ▼     ▼        ▼         ▼
PostgreSQL Redis  Search   S3 (media)   SQS
   │               │        │            │
   │               │     CloudFront   Workers:
   │               │                  email / SMS / push /
   │               │                  image processing /
   │               │                  search indexing
```

Admin app talks to the same NestJS API, with role-based access control gating what it can do.

---

## 3. Feature scope (prioritized — build in this order)

### P0 — required for launch
- **Wedding catalog first** — culture-wise and state-wise tagging fully populated before other categories (Occasions, Anniversary, Hampers, Personalised, Lifestyle) get the same depth of content
- **Wedding combos** — furniture and electrical combo products alongside gift hampers, using the `product_type` and `delivery_class` model above
- **Serviceability engine** — pincode + product + date → delivery options (same-day, midnight, standard) with fees, respecting `delivery_class` so bulky items never get offered same-day/midnight. This is the category's #1 competitive lever; treat it as core, not a checkout add-on.
- **Search** — fast, typo-tolerant, filterable by category/occasion/price/rating/personalized
- **Mobile-first web + native app**, both fast (Core Web Vitals compliant)
- **Guest checkout + one-page checkout**
- **Payments** — UPI, cards, net banking, wallets via Razorpay; webhook-only verification
- **Personalization** — name/message/photo per product, attached to the `order_item` (never the product) so past orders stay accurate if the product changes later
- **Verified reviews** — only unlockable after `order_item` status = `DELIVERED`
- **Trust/security signals** — SSL, secure payment badges, visible support contact, real policies (privacy, terms, refund) — required for Razorpay approval too
- **Homepage CMS** — admin-editable sections (hero, category grid, carousels, offers) without code deploys

### P1 — right after launch
- Midnight/same-day delivery as a selectable, separately-priced checkout option
- Occasion-based smart search / "Gift Finder" (recipient + occasion + budget → ranked results, rules-based first, AI later)
- WhatsApp order-status notifications (not a checkout dependency)
- Wishlist + recently viewed
- Open Graph metadata on every product/category page (critical — gift links get shared on WhatsApp/Instagram constantly)

### P2 — once there's real traffic
- International shipping (currency, customs, international carriers — meaningfully more complex, don't let it block Indian launch)
- Multi-seller marketplace (seller onboarding, commission, settlement, payouts) — `seller_id` is already in the schema from day one so this doesn't require a rebuild
- AI-assisted gift recommendations
- OpenSearch migration if Postgres search hits its limits
- Redis-backed caching expansion, loyalty/rewards, multi-language

---

## 4. Database structure (by domain)

```
AUTH: users, user_sessions, roles
SELLERS: sellers, seller_locations
CATALOG: products, product_images, product_videos, categories,
         product_categories, product_attributes, product_variants,
         product_culture_tags, product_state_tags,
         product_furniture_details, product_electrical_details
INVENTORY: inventory, inventory_reservations, inventory_movements
CUSTOMER: addresses, wishlist, recently_viewed
CART: carts, cart_items
CHECKOUT: coupons, coupon_usage, delivery_options
ORDERS: orders, order_items, order_status_history, order_addresses
PAYMENTS: payments, payment_transactions, payment_webhook_events
DELIVERY: deliveries, delivery_slots, serviceability_rules, delivery_status_history
REVIEWS: reviews, review_media
PERSONALIZATION: personalization_templates, personalization_options
   (personalization_data lives on order_items, not products)
CMS: homepage_sections, banners, promotional_campaigns
NOTIFICATIONS: notifications, notification_preferences
ANALYTICS: events
```

Key modeling rules to hold the line on:
- **Inventory uses available/reserved/sold counters** with reservation expiry (~10 min) to prevent overselling without permanently locking stock on abandoned checkouts.
- **Cart prices are recalculated server-side at checkout**, never trusted from the frontend.
- **Every important admin action writes an audit record** (actor, action, entity, old/new value, timestamp).

---

## 5. API surface (`/api/v1`)

```
/auth  /users
/products  /categories  /search
/home  /banners
/cart  /wishlist
/addresses  /serviceability  /delivery
/checkout  /coupons
/orders  /payments
/reviews
/personalization
/recommendations
/notifications
/media
/admin
```

Web, mobile, and admin all consume this one API — no duplicated business logic per frontend, ever.

---

## 6. Security (non-negotiable before launch)

- Database and internal services stay private (VPC) — customer never talks to them directly, only through CloudFront → WAF → API
- S3 is private; all customer-facing media goes through CloudFront, never a raw bucket URL
- Payment confirmation only via server-side Razorpay webhook verification — never trust a frontend "success" callback
- Secrets (DB creds, API keys, JWT signing key) live in Secrets Manager, never in code or frontend
- Admin gets MFA + RBAC (roles: SUPER_ADMIN, ADMIN, CATALOG_MANAGER, ORDER_MANAGER, SUPPORT, CONTENT_MANAGER) plus the audit log above
- Automated PostgreSQL backups with point-in-time recovery; S3 versioning + lifecycle policies
- Separate Dev / Staging / Production environments — nothing untested touches production data

## 7. Monitoring (so you find out before the client does)

Track: API latency, 4xx/5xx rates, DB CPU/connections, Redis health, SQS queue depth, payment failure rate, checkout failure rate, image-processing failures, order-creation failures. Alert on payment failure rate crossing a threshold — that one directly costs revenue.

---

## 8. Build order

```
01 Monorepo setup
02 AWS environments (dev/staging/prod)
03 PostgreSQL schema
04 NestJS module architecture
05 Authentication
06 Users & roles
07 Seller model (single seller for now, seller_id present)
08 Categories
09 Products
10 S3 media + presigned uploads
11 Image processing pipeline (thumb/card/product/zoom)
12 Admin product management
13 Homepage CMS
14 Product listing (web + mobile)
15 Product detail (web + mobile)
16 Search (Postgres full-text first)
17 Addresses
18 Serviceability engine
19 Cart
20 Personalization (attached to order_item)
21 Checkout flow
22 Razorpay integration (webhook-verified)
23 Orders
24 Inventory reservation logic
25 Delivery status tracking
26 Notifications (email/SMS/push/WhatsApp)
27 Reviews (order-gated, with media)
28 Wishlist
29 Analytics events
30 Performance pass (Core Web Vitals, image optimization, caching)
31 Security audit
32 Production launch
```

**Post-launch roadmap:** measure real traffic → find actual bottlenecks → Redis expansion → OpenSearch (if needed) → Gift Finder → WhatsApp deepening → international shipping → multi-seller marketplace → AI recommendations.

---

## The rule that protects this plan from regret
Every frontend (web, mobile, admin) talks to the same NestJS API — never separate business logic per platform. Every launch-blocking item in Section 3 (P0) gets built and tested before any P1/P2 feature starts. If that discipline holds, this plan doesn't need another rewrite.
