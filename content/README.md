# Content

## Products: `products.csv`

One row per product. Open it in Excel, Numbers or Google Sheets (export as CSV again when you're done). Right now it holds **41 dummy products**; replace them with the real ones.

| Column | What to write | Example |
|---|---|---|
| `no` | Product number, shown as ๐๑, ๐๒… | `1` |
| `slug` | Web address name (English, dashes). Leave empty to make it from `name_en` | `sage-market-tote` |
| `name_th` / `name_en` | Name in Thai / English | `กระเป๋าตลาดสีเซจ` / `Sage Market Tote` |
| `line` | `knit` (ประดิษฐ์ถัก) or `craft` (ประดิษฐ์คราฟท์) | `knit` |
| `type` | `hat`, `shoulder-bag`, `phone-bag`, `coaster`, `tee`, `handbag`, `purse`, `other` | `hat` |
| `price_from` | Starting price in baht | `1290` |
| `materials` | Separate with `\|` : `yarn` (ไหมพรม), `soft-rope` (เชือกฟอกนิ่ม), `local-cloth` (ผ้าพื้นเมือง), `indigo-cloth`, `thai-silk`, `cotton` | `soft-rope\|indigo-cloth` |
| `technique_th` / `technique_en` | Optional; defaults to crochet | `โครเชต์` |
| `hours` | Hours to make | `16` |
| `size` | Free text | `38 × 32 cm` |
| `colours` | Separate with `\|` : sage, rose, indigo, mustard, terracotta, lilac, cream, sky, blush, apricot, olive, chocolate, navy, mint, sunflower | `sage` |
| `status` | `ready`, `made-to-order` or `coming-soon` | `ready` |
| `featured` | `yes` to show it first on the homepage shelf | `yes` |
| `images` | Photo file names in `content/product-photos/`, separated by `\|` (first one is the main photo) | `sage-tote-1.png` |
| `story_th` / `story_en` | One or two sentences | |
| `added` | Date (YYYY-MM-DD), used for "newest" sorting | `2026-10-05` |
| `dummy` | `yes` for placeholder rows; leave empty for real products | |

A new colour or material name also needs a label in `site/src/i18n/index.ts`.

**Photos:** use a plain background, natural light and no hands, so the bag can be cut out cleanly. PNG with a transparent background looks best.

**Apply the changes:**

```bash
npm --prefix site run products
```

If something is wrong (a missing name, an unknown status, a photo not found), the script lists the problems and changes nothing.

## Other files

- `story.md`: Mom's real story (Thai + English). It will replace the placeholder text on the Our story page.
- `products/_template.md`: an older notes template; the CSV is now the source of truth.
