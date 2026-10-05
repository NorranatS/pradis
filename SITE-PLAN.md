# Pradis: site plan

Agreed 2026-10-05. Design direction: mockup **4+ Journal Luxe** (`mockups/4b-journal-luxe.html`).

## Decisions

- **Ordering channels:** LINE, Instagram DM, Facebook Messenger. No cart, no checkout.
- **Prices:** show a "from" price (e.g. "from ฿890").
- **3D level:** medium. Textured, layered background (indigo cloth, woven-pattern, paper) with depth on scroll; cards and bags tilt toward the cursor; the notebook cover opens in 3D on first scroll.
- **Catalogue:** 30+ products at launch, so the collection needs categories, filters and search.
- **Languages:** Thai (default) + English, with a toggle on every page.

## Visitors and goals

| Visitor | Arrives from | Goal | Path |
|---|---|---|---|
| Instagram/Facebook follower | A post or bio link | See that bag, then order | Product page → Order (1 tap) |
| Gift buyer | Search or a friend | Browse fast, compare colours and prices | Collection (filters) → quick view → Order |
| Story lover | Home | Learn about Mom and the materials | Home → Our story |

**Rule:** the Order button is never more than one tap away. On phones, a sticky bottom bar reads "ทักหาแม่" (Contact Mom).

## Site map

```
/                 Home: short (~5 screens)
  Hero            notebook cover (opens in 3D) + hero bag + [See all pieces] [Contact Mom]
  Shelf           one swipeable row of ~10 pieces + [See all 30+]
  Featured        one piece with callouts, hours, from-price, [Order this one]
  Story teaser    "๒๐ ชั่วโมง" moment → [Our story]
  How to order    3 steps + LINE / IG / FB buttons

/collection       Every piece on one page
  Search          live search by name, colour or material (TH + EN)
  Filters         category (bags · accessories · tees) · colour · material · availability (ready / made to order)
  Sort            newest · price
  Grid            2 columns on phone, 3–4 on desktop, compact cards (photo, name, from-price)
  Quick view      tap → pop-up with photos, colours, price, [Order]; the URL updates so it can be shared

/collection/[slug]  Product page (the link to share on social media)
  Gallery (+ 360° spin later), specimen callouts, materials, hours, size, colours, from-price
  [Order this one] → choose LINE / IG / FB, with a ready-made message naming the piece
  "You may also like" (3 pieces)

/story            Mom, the swatch book, the process (the long scroll lives here)
/order            How to order, making time, shipping, care, FAQ
```

## Order button behaviour

- **LINE Official Account:** opens a chat with the message pre-filled ("I'd like: Sage Market Tote, no. 01").
- **Instagram / Messenger:** opens the chat and copies the message to the clipboard, with a toast saying "Message copied, just paste". These apps don't reliably pre-fill text.

## Product data (one file per product)

`name` (th/en), `slug`, `category`, `priceFrom`, `materials`, `technique`, `hours`, `size`, `colours`, `status` (ready / made-to-order / coming-soon), `featured`, `images`, `story` (th/en), optional `callouts`.

Managing 30+ products: fill in a spreadsheet (one row per product) and convert it to the product files with a script.

## Build order

1. Scaffold Astro in `site/` (needs `npm install`; confirm first)
2. Design system from 4+: tokens, layers, thread, textured background, tilt
3. Collection page + product data model (most important with 30+ items)
4. Product page + order buttons
5. Home
6. Our story, How to order
7. Review, mobile pass, performance, then deploy

## Status (2026-10-05)

Built: steps 1–6 (all pages, TH/EN, collection search, filters, sort and quick view, product pages, order dialog, mobile order bar, 3D cover, tilt, layered thread, CSV importer). 32 dummy products.
Next: real photos and products, Mom's real story, final contacts, review pass, deploy.

## Still needed

- LINE: personal ID for now (`site/src/config/site.ts`). Could upgrade to an Official Account later for pre-filled messages.
- Real Instagram handle and Facebook page URL
- Product list (spreadsheet) and photos
- Final brand name (it's kept in one config file)
