// The yarn thread: a smooth curve through [data-thread] anchors inside a .stitched root.
// It sits between the under-sheets and the content sheets, so it never crosses text,
// and leaves a small stitch hole wherever it passes into or out of a sheet.
const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;

export function stitch(root: HTMLElement) {
  const tSvg = root.querySelector<SVGSVGElement>('.thread-layer svg')!;
  const hSvg = root.querySelector<SVGSVGElement>('.holes-layer svg')!;
  const paths = [...tSvg.querySelectorAll<SVGPathElement>('path')];
  const holes = hSvg.querySelector<SVGGElement>('g')!;
  let H = 0;

  function pos(el: HTMLElement) {
    let x = 0, y = 0, e: HTMLElement | null = el;
    while (e && e !== root) { x += e.offsetLeft; y += e.offsetTop; e = e.offsetParent as HTMLElement | null; }
    return { x, y, w: el.offsetWidth, h: el.offsetHeight };
  }

  function build() {
    const narrow = innerWidth < 760;
    const W = root.offsetWidth; H = root.offsetHeight;
    [tSvg, hSvg].forEach((s) => s.setAttribute('viewBox', `0 0 ${W} ${H}`));
    const pts: [number, number][] = [[W * 0.5, -10]];
    root.querySelectorAll<HTMLElement>('[data-thread]').forEach((el) => {
      const p = pos(el);
      // On phones the cards fill the width, so the thread keeps to the margins and weaves behind the cards' edges
      const x = Number(el.dataset.thread);
      const px = narrow ? (x < 50 ? 2.2 : 97.8) : x;
      pts.push([(W * px) / 100, p.y + p.h * Number(el.dataset.ty ?? 0.5)]);
    });
    pts.push([W * 0.5, H + 10]);
    let d = `M${pts[0][0]} ${pts[0][1]}`;
    for (let i = 0; i < pts.length - 1; i++) {
      const p0 = pts[i - 1] || pts[i], p1 = pts[i], p2 = pts[i + 1], p3 = pts[i + 2] || p2, k = 6;
      d += ` C${p1[0] + (p2[0] - p0[0]) / k} ${p1[1] + (p2[1] - p0[1]) / k} ${p2[0] - (p3[0] - p1[0]) / k} ${p2[1] - (p3[1] - p1[1]) / k} ${p2[0]} ${p2[1]}`;
    }
    paths.forEach((p) => p.setAttribute('d', d));

    const rects = [...root.querySelectorAll<HTMLElement>('.sheet.top, .panel.top, .swatch .cloth')].map(pos);
    const base = paths[0];
    const len = base.getTotalLength();
    let prev: number | null = null, out = '';
    for (let s = 0; s <= len; s += 3) {
      const pt = base.getPointAtLength(s);
      let inside = -1;
      for (let r = 0; r < rects.length; r++) {
        const q = rects[r];
        if (pt.x > q.x + 4 && pt.x < q.x + q.w - 4 && pt.y > q.y + 4 && pt.y < q.y + q.h - 4) { inside = r; break; }
      }
      if (prev !== null && inside !== prev) {
        out += `<ellipse cx="${pt.x.toFixed(1)}" cy="${pt.y.toFixed(1)}" rx="4.2" ry="3.4" fill="#2A2420" opacity=".55"/>` +
          `<ellipse cx="${pt.x.toFixed(1)}" cy="${(pt.y + 1.4).toFixed(1)}" rx="4.6" ry="3.6" fill="none" stroke="#fff" stroke-opacity=".6"/>`;
      }
      prev = inside;
    }
    holes.innerHTML = out;
    draw();
  }

  function draw() {
    if (!H) return;
    const top = root.getBoundingClientRect().top;
    const reach = reduce ? H : Math.max(0, Math.min(H, innerHeight * 0.8 - top));
    const clip = `inset(0 0 ${H - reach}px 0)`;
    tSvg.style.clipPath = clip;
    hSvg.style.clipPath = clip;
  }

  let tick = false;
  addEventListener('scroll', () => { if (tick) return; tick = true; requestAnimationFrame(() => { draw(); tick = false; }); }, { passive: true });
  addEventListener('resize', build);
  addEventListener('load', build);
  document.fonts?.ready.then(build);
  // rebuild once reveals finish moving things
  setTimeout(build, 1200);
  build();
}
