import { gsap } from 'gsap';

const NS = 'http://www.w3.org/2000/svg';

/**
 * Pipe network definitions — coordinate space: 1440 × 900.
 * Each entry has an SVG path `d`, bend-point junctions, tween timing.
 */
const PIPES = [
  // ── Horizontal pipes with 90° bends ────────────────────────────────────
  {
    d: 'M-10,68 H342 V130 H762 V68 H1450',
    junctions: [[342, 68], [342, 130], [762, 130], [762, 68]],
    duration: 16,
    delay: 0,
  },
  {
    d: 'M-10,192 H514 V245 H982 V192 H1450',
    junctions: [[514, 192], [514, 245], [982, 245], [982, 192]],
    duration: 13,
    delay: 1.4,
  },
  {
    d: 'M-10,318 H196 V372 H636 V318 H1450',
    junctions: [[196, 318], [196, 372], [636, 372], [636, 318]],
    duration: 17,
    delay: 0.6,
  },
  {
    d: 'M-10,448 H718 V492 H1450',
    junctions: [[718, 448], [718, 492]],
    duration: 14,
    delay: 2.5,
  },
  {
    d: 'M-10,558 H374 V605 H816 V558 H1450',
    junctions: [[374, 558], [374, 605], [816, 605], [816, 558]],
    duration: 15,
    delay: 0.9,
  },
  {
    d: 'M-10,685 H252 V732 H1450',
    junctions: [[252, 685], [252, 732]],
    duration: 11,
    delay: 0.2,
  },
  // ── Vertical connectors (enter from top / exit at bottom) ───────────────
  {
    d: 'M152,-10 V68',
    junctions: [[152, 68]],
    duration: 4,
    delay: 1.8,
  },
  {
    d: 'M1082,-10 V192',
    junctions: [[1082, 192]],
    duration: 6,
    delay: 3.1,
  },
  {
    d: 'M514,245 V492',
    junctions: [],
    duration: 8,
    delay: 2.2,
  },
  {
    d: 'M252,732 V910',
    junctions: [],
    duration: 5,
    delay: 1.0,
  },
];

// ─── SVG helpers ────────────────────────────────────────────────────────────

function mkEl(tag) {
  return document.createElementNS(NS, tag);
}

function mkPath(d, extras = {}) {
  const p = mkEl('path');
  p.setAttribute('d', d);
  p.setAttribute('fill', 'none');
  // Keep strokeWidth visually constant regardless of SVG scaling
  p.setAttribute('vector-effect', 'non-scaling-stroke');
  Object.entries(extras).forEach(([k, v]) => p.setAttribute(k, String(v)));
  return p;
}

function mkCircle(cx, cy) {
  const c = mkEl('circle');
  c.setAttribute('cx', cx);
  c.setAttribute('cy', cy);
  c.setAttribute('r', '3');
  c.setAttribute('fill', '#38BDF8');
  c.setAttribute('opacity', '0.12');
  c.setAttribute('vector-effect', 'non-scaling-stroke');
  return c;
}

// ─── Public API ──────────────────────────────────────────────────────────────

/**
 * Injects an animated SVG pipe network into `container` and returns a cleanup fn.
 * Call the returned fn to stop all tweens and remove the SVG (e.g. on unmount).
 *
 * @param {HTMLElement} container — absolutely-positioned element behind hero content
 * @returns {() => void} cleanup
 */
export function initPipeBackground(container) {
  const svg = mkEl('svg');
  svg.setAttribute('viewBox', '0 0 1440 900');
  svg.setAttribute('preserveAspectRatio', 'none');
  svg.setAttribute('xmlns', NS);
  Object.assign(svg.style, {
    position: 'absolute',
    inset: '0',
    width: '100%',
    height: '100%',
  });

  // ── Build static structure + collect flow paths ─────────────────────────
  const flowPaths = PIPES.map(({ d, junctions }) => {
    // Structural line (ghost pipe)
    svg.appendChild(
      mkPath(d, { stroke: '#38BDF8', 'stroke-width': '1.5', opacity: '0.07' })
    );

    // Junction dots at 90° bends
    junctions.forEach(([cx, cy]) => svg.appendChild(mkCircle(cx, cy)));

    // Animated flow line — dashes travel along this path
    const flowPath = mkPath(d, {
      stroke: '#7DD3FC',
      'stroke-width': '2',
      opacity: '0.1',
    });
    svg.appendChild(flowPath);
    return flowPath;
  });

  // Attach to DOM before measuring path lengths
  container.appendChild(svg);

  // ── Animate — skipped when user prefers reduced motion ──────────────────
  const mm = gsap.matchMedia();

  mm.add('(prefers-reduced-motion: no-preference)', () => {
    PIPES.forEach(({ duration, delay }, i) => {
      const path = flowPaths[i];
      const len = path.getTotalLength();
      const dash = 16;
      // Gap chosen so ≈ 4-6 dashes are visible along each pipe at once
      const gap = Math.max(60, len / 6);

      gsap.set(path, {
        strokeDasharray: `${dash} ${gap}`,
        strokeDashoffset: 0,
      });

      // Animate dashoffset to -(len + one full dash+gap cycle) so the
      // loop is seamless: repeat: -1 with ease: "none" = constant speed
      gsap.to(path, {
        strokeDashoffset: -(len + dash + gap),
        duration,
        ease: 'none',
        repeat: -1,
        delay,
      });
    });
  });

  // ── Cleanup ──────────────────────────────────────────────────────────────
  return () => {
    mm.revert();
    svg.remove();
  };
}
