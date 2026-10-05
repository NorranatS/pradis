# Pradis (ประดิษฐ์): brand website

A website for a family handcraft brand: hand-knitted bags and accessories, and custom t-shirts crafted with Thai local materials (e.g. silk). The brand name is **not final**. "Pradis / ประดิษฐ์" is the working name.

## What the site is

- A **museum-style showcase**: visitors browse products and the maker's story. **No cart or checkout.**
- Visitors contact the maker directly by phone, email, Instagram or Facebook page.
- **Bilingual Thai + English**, with a language toggle on every page.
- Only the developer (the maker's child) edits the site, so content can live in files in the repo.

## Feel

Thai, heart-warming, cute but elegant. Rooted in Thai local craft. Must NOT look like a generic AI or SaaS template.

## Rules

- Never use AI-generated images as product photos. Current dummies are recolours of Mom's real bags plus drawn placeholders (marked `dummy: yes`).
- Thai typography is first-class: choose Thai fonts deliberately and pair them with the English fonts. Check line-height and wrapping for Thai text.
- Keep the brand name, contacts and colours in one config spot, because the name will change.
- No off-the-shelf UI-kit look (glow gradients, bento grids, generic SaaS heroes). Restyle any borrowed component.
- Read `references/` (images + notes) before making design decisions.
- Confirm the plan with the user before installing packages or scaffolding.

## Plan

The agreed site plan, user journey and build order are in `SITE-PLAN.md`. Follow it. Design direction: `mockups/4b-journal-luxe.html` (4+).

## Folders

- `references/`: design inspiration (`liked/`, `thai/`, `avoid/`) with notes
- `brand/`: name, palette, fonts, logo
- `content/`: story, contact and product copy (TH + EN)
- `mockups/`: 5 static HTML style directions (served by the `mockups` config in `.claude/launch.json`, port 4321). `references/BRIEF.md` is the design brief.
- `site/`: the website (Astro 7, static). Dev server: `site` config in `.claude/launch.json` (port 4322). Build: `npm --prefix site run build`.
  - `src/config/site.ts`: brand name, contacts and links (the one place to change them)
  - `src/i18n/index.ts`: all UI strings plus colour, material, category and status labels (TH/EN). Thai at `/`, English at `/en/`
  - `src/content/products/*.json`: generated from `content/products.csv` by `npm --prefix site run products`. Don't hand-edit; edit the CSV.
  - `src/styles/global.css`: tokens and the layer system (under-sheets 1 < thread 2 < content sheets 3 < holes 4)
- `content/products.csv`: product spreadsheet (source of truth); photos go in `content/product-photos/`
