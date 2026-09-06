# Giftly — Full Premium Gifting Storefront

This package is the expanded presentation-layer build for the Giftly gifting platform.

## Visual direction

The storefront follows the supplied reference direction: full-width premium ecommerce layout, pink/soft-blue palette, large photography, rounded cards, circular image categories, feature strips, merchandising rails, wedding discovery, product cards and a rich footer.

The six locked primary navigation items remain:

- Wedding
- Occasions
- Anniversary
- Hampers
- Personalised
- Lifestyle

Wedding is a deep destination, not the homepage.

## Main homepage sections

1. Announcement bar
2. Header + search + delivery + account + wishlist + cart
3. Six-item primary navigation
4. Full-width gifting hero
5. Trust / service strip
6. Shop by category
7. Wedding Spotlight
8. Special Days
9. Best Sellers
10. Gifts For Everyone
11. Wedding Combos
12. Make It Personal
13. Trending Hampers
14. Anniversary Picks
15. Gifts for Every Feeling
16. The Luxe Edit
17. Freshly Added
18. Gift by Budget
19. Offers & Deals
20. Brand/SEO story
21. Full footer

## Wedding page

The wedding destination includes:

- Wedding hero
- Delivery/service panel
- Wedding events
- Wedding categories
- Shop for Bride/Groom/Couple/Parents/Family/Friends/Colleagues/Guests
- Budget bands
- Culture-wise weddings
- State-wise weddings
- Trending wedding gifts
- Personalised wedding gifts
- Premium wedding collection
- Curated wedding combos
- Trust/proof section

## Other storefront pages

The dynamic collection route covers:

- Gift Mall
- All Gifts
- Best Sellers
- New Arrivals
- Occasions
- Birthday
- Valentine's Day
- Raksha Bandhan
- Diwali
- Housewarming
- Congratulations
- Anniversary
- Hampers
- Personalised
- Lifestyle
- Flowers
- Cakes
- Plants
- Chocolates
- Gifts For Her
- Gifts For Him
- Gifts For Couples
- Corporate Gifting
- Offers
- Search
- Track Order
- Shipping
- Returns
- FAQ
- Account
- Cart
- Checkout

Dedicated product pages include gallery, wishlist, price, rating, delivery check, personalisation, quantity, cart/buy actions, assurances and related products.

## Images

The site has a local-first image system:

`/public/images/photos/<image-key>.jpg`

If a local image is not present, the browser tries the mapped Pexels URL and then a local SVG fallback.

### Download the image pack

Run this from the repository root on a machine with internet access:

```bash
npm run assets:download
```

The script downloads the selected Pexels images into `apps/web/public/images/photos/`.

The execution environment used to prepare this archive does not have outbound image-network access, so the image manifest/downloader and local SVG fallbacks are included instead of pretending binary photos were successfully embedded when they were not.

See:

- `apps/web/public/images/PHOTO-SOURCES.md`
- `docs/giftly-image-and-design-guidelines.md`

## Run

```bash
npm install
npm run assets:download
npm run dev:web
```

Open `http://localhost:3000`.

## Architecture

The backend architecture is intentionally untouched. This package expands the storefront presentation layer while preserving the locked API/database architecture from the master plan.
