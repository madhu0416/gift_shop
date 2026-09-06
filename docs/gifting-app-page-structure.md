# Full Page / Screen Structure — Web, Mobile, Admin

Every route below maps to a feature in the master plan. Web and mobile mirror each other in content (same API, same data) even though the UI code isn't shared.

---

## 1. Customer Web (Next.js)

```
/                                  Homepage (CMS-driven sections, Wedding featured first)
/wedding                           Wedding landing (primary category)
/wedding/culture/[culture]         Wedding by culture (e.g. /wedding/culture/punjabi)
/wedding/state/[state]             Wedding by state (e.g. /wedding/state/maharashtra)
/wedding/combos                    Wedding combos — furniture, electrical, hampers together
/wedding/combos/[slug]             Combo product detail
/occasions                         Occasions landing
/occasions/[occasion]              Occasion page (birthday, anniversary, etc.)
/anniversary                       Anniversary landing
/hampers                           Hampers landing
/personalised                      Personalised-gifts landing
/lifestyle                         Lifestyle landing
/gifts/[category]/[slug]           Standard product detail page
/search?q=                         Search results + filters (supports culture/state/product_type filters)

/cart                              Cart
/checkout                          Checkout (address → serviceability → delivery slot → coupon → payment)
/checkout/success                  Order confirmation
/checkout/failure                  Payment failed / retry

/account                           Account overview
/account/orders                    Order history
/account/orders/[id]               Order detail + tracking
/account/addresses                 Saved addresses
/account/wishlist                  Wishlist
/account/reviews                   My reviews (write/edit, only for delivered items)
/account/settings                  Profile, password, notification preferences

/login                             Login (email/OTP, Google Sign-In)
/register                          Register
/forgot-password                   Password reset

/track-order                       Guest order tracking (no login required)
/gift-finder                       "Find a gift" guided tool (recipient/occasion/budget)

/policies/privacy                  Privacy policy
/policies/terms                    Terms of service
/policies/refund                   Refund/return policy
/contact                           Contact / support
/about                             About us

/seller/[sellerSlug]                (P2 — multi-seller storefront, build when marketplace phase starts)
```

Notes:
- Category and product pages use ISR (Incremental Static Regeneration) — pre-rendered, revalidated on product change.
- Every product/category page needs Open Graph metadata (`generateMetadata`) — critical for WhatsApp/Instagram sharing.
- `/checkout` never requires login — guest checkout is P0.
- Wedding culture and state pages are both filtered views over the same product catalog (via `culture_tags`/`state_tags`), not separate content trees — a product can appear on both a culture page and a state page.
- Combo product pages (furniture/electrical) need a different detail layout than standard gifts — dimensions/warranty/installation info instead of personalization fields, and delivery-estimate copy reflecting `delivery_class: bulky_item` where relevant.

---

## 2. Mobile App (React Native + Expo) — screens

```
Onboarding
├── Splash
├── Onboarding carousel (first launch only)
└── Login / Register (email/OTP, Google Sign-In)

Home (tab)
├── Home feed (CMS-driven sections, Wedding featured first, same content as web homepage)
├── Wedding landing
│    ├── By culture
│    ├── By state
│    └── Combos (furniture/electrical/hampers)
├── Category list (Occasions, Anniversary, Hampers, Personalised, Lifestyle)
├── Category detail
└── Product detail
     ├── Personalization step (if enabled on product)
     ├── Combo detail view (dimensions/warranty/installation, if furniture or electrical)
     └── Add to cart

Search (tab)
├── Search results + filters
└── Gift Finder (guided flow)

Cart (tab)
├── Cart
└── Checkout
     ├── Address (add/select)
     ├── Serviceability + delivery slot picker
     ├── Coupon
     ├── Payment (Razorpay SDK)
     └── Order confirmation

Orders (tab)
├── Order list
├── Order detail + live tracking
└── Write a review (only on delivered items)

Account (tab)
├── Profile
├── Addresses
├── Wishlist
├── Notification preferences
└── Support / contact
```

Notes:
- Bottom tab bar: Home, Search, Cart, Orders, Account — matches how FNP/IGP structure their apps for fast access to the highest-traffic actions.
- Push notification permission prompt happens after first order, not on first launch (higher opt-in rate, less friction upfront).
- Same personalization component (name/photo/message) used in both web and app product detail screens — keep the field set identical since it's stored on `order_items` regardless of platform.

---

## 3. Admin Panel (Next.js, separate app, same API)

```
/admin/login                       Admin login (MFA)
/admin                             Dashboard (orders today, revenue, alerts)

/admin/products                    Product list
/admin/products/new                Create product
/admin/products/[id]                Edit product (images, variants, personalization options, pricing)
/admin/categories                  Category management
/admin/inventory                   Stock levels, reservations, low-stock alerts

/admin/homepage                    Homepage CMS — reorder/add/remove sections
/admin/banners                     Banner management
/admin/promotions                  Coupons & campaigns

/admin/orders                      Order list (filterable by status)
/admin/orders/[id]                 Order detail — status updates, assign delivery, refund
/admin/delivery                    Delivery slots & serviceability rules by pincode

/admin/customers                   Customer list
/admin/customers/[id]              Customer detail + order history

/admin/reviews                     Review moderation queue

/admin/sellers                     (P2 — seller management once marketplace phase starts)

/admin/staff                       Staff/role management (RBAC)
/admin/audit-log                   Audit trail of admin actions
/admin/settings                    General platform settings
```

Notes:
- Role-gated: CATALOG_MANAGER only sees products/categories/inventory; ORDER_MANAGER only sees orders/delivery; SUPPORT only sees customers/orders (read + limited actions); SUPER_ADMIN sees everything including audit log and staff management.
- Every write action here logs to `/admin/audit-log` automatically — not something admins toggle, it's mandatory logging in the backend.

---

## How this maps back to the build order
Sections 14–15 (product listing/detail) → Home/Category/Product pages above.
Section 18 (serviceability) → checkout delivery-slot step, both web and mobile.
Section 20 (personalization) → the personalization step on product detail.
Section 26 (notifications) → push permission flow + WhatsApp order updates.
Build the web and mobile version of each feature together, not platform-by-platform — this structure is the shared contract both should be built against.
