// Beweging die ademt: parallax in de hero, secties die rustig infaden,
// en de wortellijn die met het scrollen meegroeit.

const rustig = window.matchMedia('(prefers-reduced-motion: reduce)');

/* ---------- Infaden ---------- */
const groeiers = document.querySelectorAll<HTMLElement>('[data-groei]');
if (rustig.matches || !('IntersectionObserver' in window)) {
  groeiers.forEach((el) => el.classList.add('is-zichtbaar'));
} else {
  const io = new IntersectionObserver(
    (items) => items.forEach((i) => {
      if (i.isIntersecting) { i.target.classList.add('is-zichtbaar'); io.unobserve(i.target); }
    }),
    { rootMargin: '0px 0px -12% 0px', threshold: 0.08 }
  );
  groeiers.forEach((el) => io.observe(el));
}

/* ---------- Parallax ---------- */
const lagen = Array.from(document.querySelectorAll<HTMLElement>('[data-parallax]'));

/* ---------- Wortellijn ---------- */
const svg = document.querySelector<SVGSVGElement>('[data-wortellijn]');
const NS = 'http://www.w3.org/2000/svg';
let hoofd: SVGPathElement | null = null;
let totaal = 0;
let meet: { l: number; y: number }[] = [];
let knopen: { el: SVGGElement; y: number }[] = [];
let zijtakken: { el: SVGPathElement; y: number; len: number }[] = [];

function rnd(seed: number) {
  let a = seed;
  return () => ((a = (a * 16807) % 2147483647) / 2147483647);
}

function bouwLijn() {
  if (!svg) return;
  const host = svg.parentElement!;
  const breedte = host.clientWidth;
  const hoogte = host.offsetHeight;
  svg.setAttribute('viewBox', `0 0 ${breedte} ${hoogte}`);
  svg.setAttribute('width', String(breedte));
  svg.setAttribute('height', String(hoogte));
  svg.replaceChildren();

  const hostTop = host.getBoundingClientRect().top + window.scrollY;
  const punten = Array.from(host.querySelectorAll<HTMLElement>('[data-knoop]')).map((el) => {
    const r = el.getBoundingClientRect();
    const top = r.top + window.scrollY - hostTop;
    // de lijn ontspringt in de bodem van de hero, in de mist
    const y = el.dataset.knoop === 'start' ? top + r.height - 70 : top + Math.min(140, r.height * 0.18);
    return { y, licht: el.dataset.knoop === 'licht' };
  });
  if (punten.length < 2) return;

  // eindpunt: de voet van het kiemplantje in de open plek
  const eindEl = host.querySelector<SVGElement>('[data-wortel-einde]');
  let einde: { x: number; y: number } | null = null;
  if (eindEl) {
    const er = eindEl.getBoundingClientRect();
    einde = { x: er.left + er.width / 2, y: er.top + window.scrollY - hostTop + er.height * 0.86 };
    // de lijn blijft tot in de open plek langs de rand, en buigt pas daar naar het kiempje,
    // zodat hij nergens door de tekst van eerdere secties snijdt
    const laatste = punten[punten.length - 1];
    laatste.y = Math.min(laatste.y, einde.y - 170);
  }

  const mobiel = breedte < 768;
  const containerBreedte = Math.min(breedte, 1216);
  const goot = (breedte - containerBreedte) / 2;
  const basisX = mobiel ? 7 : Math.max(26, goot * 0.5 + 10);
  const zwaai = mobiel ? 2 : Math.min(22, goot * 0.25 + 8);

  // gradient: limoen op donker, diep jungle op licht
  const defs = document.createElementNS(NS, 'defs');
  const grad = document.createElementNS(NS, 'linearGradient');
  grad.id = 'wortel-kleur';
  grad.setAttribute('gradientUnits', 'userSpaceOnUse');
  grad.setAttribute('x1', '0'); grad.setAttribute('x2', '0');
  grad.setAttribute('y1', '0'); grad.setAttribute('y2', String(hoogte));
  const eersteLicht = punten.find((p) => p.licht)?.y ?? hoogte;
  const startY = punten[0].y;
  const stops: [number, string, number][] = [
    [0, '#e8c27a', 0],
    [Math.max(0, (startY - 10) / hoogte), '#e8c27a', 0],
    [Math.min(1, (startY + 220) / hoogte), '#e8c27a', 1],
    [Math.max(0, (eersteLicht - 260) / hoogte), '#e8c27a', 1],
    [Math.min(1, (eersteLicht - 40) / hoogte), '#a0763a', 1],
    [1, '#7d5a2c', 1],
  ];
  stops.forEach(([o, c, a]) => {
    const s = document.createElementNS(NS, 'stop');
    s.setAttribute('offset', String(o)); s.setAttribute('stop-color', c); s.setAttribute('stop-opacity', String(a));
    grad.appendChild(s);
  });
  defs.appendChild(grad);
  svg.appendChild(defs);

  const r = rnd(7);
  let d = `M${basisX} ${startY}`;
  let px = basisX, py = startY;
  punten.slice(1).forEach((p, j) => {
    const i = j + 1;
    const x = basisX + (i % 2 ? zwaai : -zwaai * 0.4);
    const dy = p.y - py;
    d += ` C${px + zwaai * (r() - 0.3)} ${py + dy * 0.35} ${x - zwaai * (r() - 0.5)} ${p.y - dy * 0.35} ${x} ${p.y}`;
    px = x; py = p.y;
  });
  if (einde) {
    // de wortel buigt de open plek in en wordt het kiemplantje
    const dy = einde.y - py;
    d += ` C${px} ${py + dy * 0.75} ${einde.x - (einde.x - px) * 0.35} ${einde.y + 40} ${einde.x} ${einde.y}`;
  }

  hoofd = document.createElementNS(NS, 'path');
  hoofd.setAttribute('d', d);
  hoofd.setAttribute('fill', 'none');
  hoofd.setAttribute('stroke', 'url(#wortel-kleur)');
  hoofd.setAttribute('stroke-width', breedte < 768 ? '1.1' : '1.3');
  hoofd.setAttribute('stroke-linecap', 'round');
  hoofd.setAttribute('opacity', '0.5');
  svg.appendChild(hoofd);
  totaal = hoofd.getTotalLength();
  meet = [];
  for (let l = 0; l <= totaal; l += 12) meet.push({ l, y: hoofd.getPointAtLength(l).y });
  hoofd.style.strokeDasharray = `${totaal}`;

  // fijne zijworteltjes en myceliumdraden
  zijtakken = [];
  const aantal = 0; // rustig: alleen de hoofdlijn
  for (let k = 1; k < aantal; k++) {
    const l = (k / aantal) * totaal + (r() - 0.5) * 40;
    const pt = hoofd.getPointAtLength(l);
    const kant = r() < 0.75 ? 1 : -1;
    const lengte = mobiel ? 6 + r() * 8 : 30 + r() * 70;
    let zd = `M${pt.x} ${pt.y}`;
    let zx = pt.x, zy = pt.y, a = kant > 0 ? 0.6 + r() * 0.5 : Math.PI - 0.8;
    for (let s = 0; s < 5; s++) {
      a += (r() - 0.5) * 0.6;
      zx += Math.cos(a) * lengte / 5; zy += Math.sin(a) * lengte / 5;
      zd += ` L${zx.toFixed(1)} ${zy.toFixed(1)}`;
    }
    const tak = document.createElementNS(NS, 'path');
    tak.setAttribute('d', zd);
    tak.setAttribute('fill', 'none');
    tak.setAttribute('stroke', 'url(#wortel-kleur)');
    tak.setAttribute('stroke-width', '0.9');
    tak.setAttribute('stroke-linecap', 'round');
    tak.setAttribute('opacity', '0.5');
    svg.appendChild(tak);
    const tl = tak.getTotalLength();
    tak.style.strokeDasharray = `${tl}`;
    tak.style.strokeDashoffset = `${tl}`;
    zijtakken.push({ el: tak, y: pt.y, len: tl });
  }

  // knooppunten bij elke sectie
  knopen = punten.map((p, i) => {
    const g = document.createElementNS(NS, 'g');
    g.setAttribute('class', 'wortel-knoop');
    const x = basisX + (i % 2 ? zwaai : -zwaai * 0.4);
    g.innerHTML = `<circle cx="${x}" cy="${p.y}" r="2.6" fill="${p.licht ? '#a0763a' : '#e8c27a'}" opacity=".8"/>`;
    svg.appendChild(g);
    return { el: g, y: p.y };
  });

  teken();
}

function lengteBijY(y: number) {
  if (!meet.length) return 0;
  let lo = 0, hi = meet.length - 1;
  while (lo < hi) {
    const mid = (lo + hi) >> 1;
    if (meet[mid].y < y) lo = mid + 1; else hi = mid;
  }
  return meet[lo].l;
}

function teken() {
  const y = window.scrollY;
  if (!rustig.matches) {
    lagen.forEach((laag) => {
      const f = Number(laag.dataset.parallax);
      if (y < window.innerHeight * 1.2) laag.style.transform = `translate3d(0, ${y * f}px, 0)`;
    });
  }
  if (!hoofd || !svg) return;
  const hostTop = svg.parentElement!.getBoundingClientRect().top + y;
  const doelY = rustig.matches ? Infinity : y + window.innerHeight * 0.72 - hostTop;
  const l = rustig.matches ? totaal : lengteBijY(doelY);
  hoofd.style.strokeDashoffset = `${Math.max(0, totaal - l)}`;
  zijtakken.forEach((t) => {
    const voortgang = rustig.matches ? 1 : Math.min(1, Math.max(0, (doelY - t.y) / 160));
    t.el.style.strokeDashoffset = `${t.len * (1 - voortgang)}`;
  });
  knopen.forEach((k) => k.el.classList.toggle('is-bereikt', rustig.matches || doelY >= k.y));
}

let wacht = false;
const opScroll = () => {
  if (wacht) return;
  wacht = true;
  requestAnimationFrame(() => { teken(); wacht = false; });
};

if (svg) {
  const start = () => bouwLijn();
  if (document.fonts?.ready) document.fonts.ready.then(start); else start();
  let rt: number | undefined;
  new ResizeObserver(() => { clearTimeout(rt); rt = window.setTimeout(bouwLijn, 150); }).observe(svg.parentElement!);
  rustig.addEventListener('change', bouwLijn);
}
window.addEventListener('scroll', opScroll, { passive: true });
teken();
