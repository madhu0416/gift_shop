# Giftly Web Design System

## Brand
- Primary: #D6336C
- Dark rose: #A61E4D
- Soft pink: #FDEEF2
- Soft blue: #EAF4FB
- Ink: #2B2130
- Muted: #7A6B72
- Border: #F1E4E8

## Layout
All desktop sections are full-width. The old max-width container approach has been removed. Small 16–24px gutters remain for readability, while hero and background sections extend edge-to-edge.

## Visual rhythm
White → soft pink → white → soft blue → white → cream → white.

## Image rules
- Hero: large lifestyle image
- Category discovery: circular photography
- Collection cards: large photography
- Product cards: square product photography
- Service features: inline SVG icons in soft circles
- Wedding: warm, premium, culturally relevant imagery

## Components
- Header
- Navigation
- Hero
- TrustStrip
- SectionHeading
- CircleRail
- ImageCardRail
- ProductGrid
- ProductCard
- FilterBar
- Footer
- MobileNav

## Wedding information architecture
Wedding remains a dedicated deep section. Homepage only gives a prominent spotlight entry. Wedding itself supports culture tags, state tags, wedding categories and combos.

## Product merchandising
The current UI uses demo product data. Replace the data module with API hooks when the NestJS product/catalog APIs are implemented. Keep the card and section interfaces unchanged so the backend can be introduced without redesigning the storefront.
