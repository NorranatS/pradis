// Site-wide behaviour: reveal, header state, 3D tilt, parallax scraps, pinked edges, order dialog.
const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
const finePointer = matchMedia('(hover: hover) and (pointer: fine)').matches;

/* Reveal on scroll */
const io = new IntersectionObserver(
  (entries) => entries.forEach((e) => { if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); } }),
  { threshold: 0.12, rootMargin: '0px 0px -40px 0px' },
);
export function observeReveals(root: ParentNode = document) {
  root.querySelectorAll('.reveal:not(.in)').forEach((el) => io.observe(el));
}
observeReveals();

/* Header: solid once you scroll */
const header = document.getElementById('site-header');
function headerState() { header?.classList.toggle('scrolled', scrollY > 40); }

/* Parallax scraps in the background */
const decos = [...document.querySelectorAll<HTMLElement>('[data-depth]')];
function parallax() {
  if (reduce || !finePointer) return; // no scroll-driven movement on touch devices
  for (const el of decos) {
    const r = el.getBoundingClientRect();
    const offset = (r.top + r.height / 2 - innerHeight / 2) * Number(el.dataset.depth);
    el.style.translate = `0 ${offset.toFixed(1)}px`;
  }
}

let ticking = false;
addEventListener('scroll', () => {
  if (ticking) return;
  ticking = true;
  requestAnimationFrame(() => { headerState(); parallax(); ticking = false; });
}, { passive: true });
headerState(); parallax();

/* 3D tilt toward the cursor */
export function bindTilt(root: ParentNode = document) {
  if (reduce || !finePointer) return;
  root.querySelectorAll<HTMLElement>('[data-tilt]:not([data-tilt-bound])').forEach((el) => {
    el.dataset.tiltBound = '';
    const max = Number(el.dataset.tilt) || 7;
    el.addEventListener('pointermove', (e) => {
      const r = el.getBoundingClientRect();
      const x = (e.clientX - r.left) / r.width - 0.5;
      const y = (e.clientY - r.top) / r.height - 0.5;
      el.classList.add('tilting');
      el.style.transform = `perspective(900px) rotateX(${(-y * max).toFixed(2)}deg) rotateY(${(x * max).toFixed(2)}deg) translateY(-6px)`;
      el.style.boxShadow = `${(-x * 24).toFixed(1)}px ${(30 - y * 10).toFixed(1)}px 50px -28px rgba(36,30,26,.6)`;
    });
    el.addEventListener('pointerleave', () => {
      el.classList.remove('tilting');
      el.style.transform = '';
      el.style.boxShadow = '';
    });
  });
}
bindTilt();

/* Pinked (zig-zag) fabric edges */
function pink(el: HTMLElement) {
  const w = el.offsetWidth, h = el.offsetHeight, t = 7, p: string[] = [];
  let n = Math.round(w / (t * 2));
  for (let i = 0; i <= n; i++) p.push(`${(w * i / n).toFixed(1)}px ${i % 2 ? t : 0}px`);
  n = Math.round(h / (t * 2));
  for (let i = 1; i <= n; i++) p.push(`${w - (i % 2 ? t : 0)}px ${(h * i / n).toFixed(1)}px`);
  n = Math.round(w / (t * 2));
  for (let i = n - 1; i >= 0; i--) p.push(`${(w * i / n).toFixed(1)}px ${h - (i % 2 ? t : 0)}px`);
  n = Math.round(h / (t * 2));
  for (let i = n - 1; i > 0; i--) p.push(`${i % 2 ? t : 0}px ${(h * i / n).toFixed(1)}px`);
  el.style.clipPath = `polygon(${p.join(',')})`;
}
const pinkAll = () => document.querySelectorAll<HTMLElement>('.pinked').forEach(pink);
addEventListener('resize', pinkAll);
pinkAll();

/* Toast */
const toastEl = document.querySelector<HTMLElement>('.toast');
let toastTimer = 0;
export function toast(text: string) {
  if (!toastEl) return;
  toastEl.textContent = text;
  toastEl.classList.add('show');
  clearTimeout(toastTimer);
  toastTimer = window.setTimeout(() => toastEl.classList.remove('show'), 2600);
}

/* Order dialog: any [data-order] opens it; data-order="Name (No. 01)" names the piece */
const dlg = document.getElementById('order-dialog') as HTMLDialogElement | null;
const msgEl = dlg?.querySelector<HTMLElement>('[data-msg]');
let message = '';

async function copy(text: string) {
  try { await navigator.clipboard.writeText(text); return true; } catch { return false; }
}

document.addEventListener('click', (e) => {
  const target = e.target as HTMLElement;
  const opener = target.closest<HTMLElement>('[data-order]');
  if (opener && dlg) {
    e.preventDefault();
    const piece = opener.dataset.order;
    message = piece ? `${dlg.dataset.msgPiece} ${piece}${dlg.dataset.msgEnd}` : dlg.dataset.msgGeneral || '';
    if (msgEl) msgEl.textContent = message;
    document.querySelectorAll<HTMLDialogElement>('dialog[open]').forEach((d) => d !== dlg && d.close());
    dlg.showModal();
    return;
  }
  if (target.closest('[data-channel]')) { copy(message).then((ok) => ok && toast(dlg?.dataset.copied || '')); return; }
  if (target.closest('[data-copy]')) { copy(message).then((ok) => ok && toast(dlg?.dataset.copied || '')); return; }
  const close = target.closest('[data-close]');
  if (close) { close.closest('dialog')?.close(); return; }
  if (target instanceof HTMLDialogElement) target.close(); // click on backdrop
});
