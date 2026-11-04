// Botanische SVG-paden, deterministisch gegenereerd (zelfde seed = zelfde vorm).

export function rng(seed: number) {
  let a = seed >>> 0;
  return () => {
    a = (a + 0x6d2b79f5) >>> 0;
    let t = a;
    t = Math.imul(t ^ (t >>> 15), t | 1);
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

const f = (n: number) => Math.round(n * 10) / 10;

type Pt = [number, number];
const poly = (pts: Pt[]) => 'M' + pts.map(([x, y]) => `${f(x)} ${f(y)}`).join('L') + 'Z';

function rotate([x, y]: Pt, a: number): Pt {
  const c = Math.cos(a), s = Math.sin(a);
  return [x * c - y * s, x * s + y * c];
}

/** Bladrand: rij overlappende bladpunten langs de bovenkant van een sectie. */
export function leafEdge(seed: number, width = 1440, height = 110, density = 34): string {
  const r = rng(seed);
  let d = `M0 ${height}L0 ${f(height * 0.72)}L${width} ${f(height * 0.72)}L${width} ${height}Z`;
  for (let i = 0; i < density; i++) {
    const bx = (i / (density - 1)) * width + (r() - 0.5) * 50;
    const w = 150 + r() * 160;
    const h = height * (0.35 + r() * 0.45);
    const lean = (r() - 0.5) * w * 0.6;
    const tx = bx + lean;
    const ty = height - h;
    const y0 = height * 0.86;
    // breed, bol blad dat in een zachte punt eindigt
    d += `M${f(bx - w * 0.12)} ${f(y0)}C${f(bx - w * 0.75)} ${f(y0 - h * 0.35)} ${f(tx - w * 0.45)} ${f(ty + h * 0.12)} ${f(tx)} ${f(ty)}`;
    d += `C${f(tx + w * 0.45)} ${f(ty + h * 0.12)} ${f(bx + w * 0.75)} ${f(y0 - h * 0.35)} ${f(bx + w * 0.12)} ${f(y0)}Z`;
  }
  return d;
}

/** Varenblad: hoofdnerf met afnemende blaadjes. Lokaal: basis (0,0), top richting -y. */
export function fern(seed: number, length = 400, bend = 0.25, pinnae = 22): { blade: string; rib: string } {
  const r = rng(seed);
  const pts: Pt[] = [];
  const at = (t: number): Pt => [Math.sin(t * Math.PI * 0.9) * length * bend * t, -length * t];
  let blade = '';
  for (let i = 1; i <= pinnae; i++) {
    const t = i / (pinnae + 1);
    const [px, py] = at(t);
    const [nx, ny] = at(Math.min(1, t + 0.01));
    const ang = Math.atan2(ny - py, nx - px);
    const size = length * 0.24 * Math.sin(Math.PI * Math.pow(t, 0.8)) * (0.9 + r() * 0.2);
    const w = size * 0.2;
    for (const side of [-1, 1]) {
      const a = ang + side * (Math.PI / 2 - 0.55);
      const tip: Pt = [px + Math.cos(a) * size, py + Math.sin(a) * size];
      const mid: Pt = [px + Math.cos(a) * size * 0.5, py + Math.sin(a) * size * 0.5];
      const off = rotate([0, w], a);
      blade += `M${f(px)} ${f(py)}Q${f(mid[0] + off[0])} ${f(mid[1] + off[1])} ${f(tip[0])} ${f(tip[1])}Q${f(mid[0] - off[0])} ${f(mid[1] - off[1])} ${f(px)} ${f(py)}Z`;
    }
  }
  for (let i = 0; i <= 30; i++) pts.push(at(i / 30));
  const rib = 'M' + pts.map(([x, y]) => `${f(x)} ${f(y)}`).join('L');
  return { blade, rib };
}

/** Monsterablad met inkepingen en gaatjes. Lokaal: steelaanzet (0,0), top op (0,-L). */
export function monstera(seed: number, L = 300, W = 0.42, slits = 6): { leaf: string; veins: string } {
  const r = rng(seed);
  const halfW = L * W;
  const side = (dir: 1 | -1): Pt[] => {
    const out: Pt[] = [[0, 0], [dir * halfW * 0.42, L * 0.09], [dir * halfW * 0.85, L * 0.02]];
    const cuts = new Set<number>();
    for (let k = 0; k < slits; k++) cuts.add(Math.round((0.16 + (k / slits) * 0.72) * 60));
    for (let i = 3; i <= 60; i++) {
      const t = i / 60;
      const x = dir * halfW * Math.pow(Math.sin(Math.PI * Math.min(1, t * 0.92 + 0.08)), 0.7) * (1 - 0.25 * t);
      const y = -L * t;
      out.push([x, y]);
      if (cuts.has(i)) {
        const depth = 0.25 + r() * 0.2;
        out.push([x * depth, y - L * 0.035]);
        out.push([x * depth, y - L * 0.045]);
      }
    }
    out.push([0, -L]);
    return out;
  };
  const right = side(1);
  const left = side(-1).reverse();
  let leaf = poly([...right, ...left]);
  // gaatjes langs de nerf
  for (let k = 0; k < 4; k++) {
    const t = 0.25 + k * 0.15;
    for (const dir of [-1, 1]) {
      const cx = dir * halfW * 0.16;
      const cy = -L * (t + 0.03 * dir);
      const rx = L * 0.012, ry = L * 0.03;
      leaf += `M${f(cx - rx)} ${f(cy)}a${f(rx)} ${f(ry)} 0 1 0 ${f(rx * 2)} 0a${f(rx)} ${f(ry)} 0 1 0 ${f(-rx * 2)} 0Z`;
    }
  }
  let veins = `M0 0L0 ${f(-L * 0.97)}`;
  for (let k = 0; k < slits + 1; k++) {
    const t = 0.12 + (k / (slits + 1)) * 0.78;
    for (const dir of [-1, 1]) {
      veins += `M0 ${f(-L * t)}Q${f(dir * halfW * 0.3)} ${f(-L * (t + 0.04))} ${f(dir * halfW * 0.6)} ${f(-L * (t + 0.03))}`;
    }
  }
  return { leaf, veins };
}

/** Eenvoudig hartvormig blaadje rond (0,0) naar -y. */
export function smallLeaf(size: number): string {
  const s = size;
  return `M0 0C${f(-s * 0.55)} ${f(-s * 0.25)} ${f(-s * 0.45)} ${f(-s * 0.85)} 0 ${f(-s)}C${f(s * 0.45)} ${f(-s * 0.85)} ${f(s * 0.55)} ${f(-s * 0.25)} 0 0Z`;
}

/** Hangende liaan met blaadjes. Begint op (x,0), hangt naar beneden. */
export function liana(seed: number, x: number, length: number, sway = 40): { vine: string; leaves: string } {
  const r = rng(seed);
  const pts: Pt[] = [];
  const phase = r() * Math.PI * 2;
  for (let i = 0; i <= 40; i++) {
    const t = i / 40;
    pts.push([x + Math.sin(phase + t * 4.2) * sway * t, length * t]);
  }
  const vine = 'M' + pts.map(([a, b]) => `${f(a)} ${f(b)}`).join('L');
  let leaves = '';
  for (let i = 4; i < 40; i += 3 + Math.floor(r() * 3)) {
    const [px, py] = pts[i];
    const dir = i % 2 ? 1 : -1;
    const ang = dir * (0.9 + r() * 0.6);
    const s = 14 + r() * 16;
    const leafPts = smallLeaf(s);
    leaves += `<path transform="translate(${f(px)} ${f(py)}) rotate(${f((ang * 180) / Math.PI + 180)})" d="${leafPts}"/>`;
  }
  return { vine, leaves };
}

/** Vertakkende wortels/myceliumdraden vanaf (x,y) naar beneden. Retourneert één pad (stroke). */
export function roots(seed: number, x: number, y: number, len: number, depth = 4, spread = 0.7): string {
  const r = rng(seed);
  let d = '';
  const grow = (x0: number, y0: number, ang: number, l: number, lvl: number) => {
    const steps = 6;
    let cx = x0, cy = y0, a = ang;
    d += `M${f(cx)} ${f(cy)}`;
    for (let i = 0; i < steps; i++) {
      a += (r() - 0.5) * 0.5;
      cx += Math.cos(a) * (l / steps);
      cy += Math.sin(a) * (l / steps);
      d += `L${f(cx)} ${f(cy)}`;
      if (lvl > 0 && r() < 0.35) {
        grow(cx, cy, a + (r() < 0.5 ? -1 : 1) * spread * (0.6 + r() * 0.6), l * 0.55, lvl - 1);
        d += `M${f(cx)} ${f(cy)}`;
      }
    }
  };
  grow(x, y, Math.PI / 2, len, depth);
  return d;
}
