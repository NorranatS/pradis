// Turn content/products.csv (one row per product) into site/src/content/products/*.json.
// Photos: put them in content/product-photos/ and write the file name in the "images" column.
// Run from the repo root or site/:  npm --prefix site run products
import { readFileSync, writeFileSync, existsSync, copyFileSync, readdirSync, rmSync, mkdirSync } from 'node:fs';
import { dirname, join, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const siteDir = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const repo = resolve(siteDir, '..');
const csvPath = join(repo, 'content', 'products.csv');
const photoDir = join(repo, 'content', 'product-photos');
const outDir = join(siteDir, 'src', 'content', 'products');
const imgDir = join(outDir, 'images');

const LINES = ['knit', 'craft'];
const TYPES = ['hat', 'shoulder-bag', 'phone-bag', 'coaster', 'tee', 'handbag', 'purse', 'other'];
const STATUSES = ['ready', 'made-to-order', 'coming-soon'];

function parseCsv(text) {
  const rows = []; let row = [], cell = '', q = false;
  for (let i = 0; i < text.length; i++) {
    const c = text[i];
    if (q) {
      if (c === '"' && text[i + 1] === '"') { cell += '"'; i++; }
      else if (c === '"') q = false;
      else cell += c;
    } else if (c === '"') q = true;
    else if (c === ',') { row.push(cell); cell = ''; }
    else if (c === '\n' || c === '\r') {
      if (c === '\r' && text[i + 1] === '\n') i++;
      row.push(cell); cell = '';
      if (row.some((v) => v.trim() !== '')) rows.push(row);
      row = [];
    } else cell += c;
  }
  row.push(cell);
  if (row.some((v) => v.trim() !== '')) rows.push(row);
  return rows;
}

const list = (v) => (v || '').split('|').map((s) => s.trim()).filter(Boolean);
const slugify = (s) => s.toLowerCase().normalize('NFKD').replace(/[^\w\s-]/g, '').trim().replace(/[\s_]+/g, '-');

const text = readFileSync(csvPath, 'utf8').replace(/^﻿/, '');
const [header, ...rows] = parseCsv(text);
const cols = header.map((h) => h.trim());
const errors = [];
const products = rows.map((r, i) => {
  const get = (k) => (r[cols.indexOf(k)] ?? '').trim();
  const line = i + 2;
  const name_en = get('name_en');
  const p = {
    no: Number(get('no')) || i + 1,
    slug: get('slug') || slugify(name_en),
    name: { th: get('name_th'), en: name_en },
    line: get('line'),
    type: get('type') || 'other',
    priceFrom: Number(get('price_from').replace(/[^\d.]/g, '')),
    materials: list(get('materials')),
    technique: { th: get('technique_th') || 'โครเชต์', en: get('technique_en') || 'Crochet' },
    hours: Number(get('hours')) || 0,
    size: get('size'),
    colours: list(get('colours')),
    status: get('status') || 'made-to-order',
    featured: /^(yes|y|true|1|ใช่)$/i.test(get('featured')),
    images: list(get('images')).map((f) => `./images/${f}`),
    story: { th: get('story_th'), en: get('story_en') },
    added: get('added') || new Date().toISOString().slice(0, 10),
    dummy: /^(yes|y|true|1)$/i.test(get('dummy')),
  };
  if (!p.name.th || !p.name.en) errors.push(`row ${line}: name_th and name_en are required`);
  if (!LINES.includes(p.line)) errors.push(`row ${line}: line must be knit (ประดิษฐ์ถัก) or craft (ประดิษฐ์คราฟท์)`);
  if (!TYPES.includes(p.type)) errors.push(`row ${line}: type must be one of ${TYPES.join(', ')}`);
  if (!STATUSES.includes(p.status)) errors.push(`row ${line}: status must be one of ${STATUSES.join(', ')}`);
  if (!p.priceFrom) errors.push(`row ${line}: price_from is missing`);
  if (!p.images.length) errors.push(`row ${line}: at least one image is required`);
  for (const img of list(get('images'))) {
    if (!existsSync(join(photoDir, img)) && !existsSync(join(imgDir, img))) errors.push(`row ${line}: image "${img}" not found in content/product-photos/`);
  }
  return p;
});

const slugs = new Set();
for (const p of products) { if (slugs.has(p.slug)) errors.push(`duplicate slug "${p.slug}"`); slugs.add(p.slug); }
if (errors.length) { console.error('Nothing was changed. Please fix:\n  ' + errors.join('\n  ')); process.exit(1); }

mkdirSync(imgDir, { recursive: true });
for (const f of readdirSync(outDir)) if (f.endsWith('.json')) rmSync(join(outDir, f));
for (const p of products) {
  for (const img of p.images) {
    const name = img.replace('./images/', '');
    if (existsSync(join(photoDir, name))) copyFileSync(join(photoDir, name), join(imgDir, name));
  }
  writeFileSync(join(outDir, `${p.slug}.json`), JSON.stringify(p, null, 2) + '\n');
}
console.log(`Imported ${products.length} products into site/src/content/products/`);
