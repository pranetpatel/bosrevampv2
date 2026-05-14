"use client";

import { usePrefersReducedMotion } from "@/components/use-prefers-reduced-motion";
import { useEffect, useRef } from "react";

// ── Cursor arrow outline (tip at origin) ──────────────────────────────────
const S = 1.8;
const CURSOR_VERTS: [number, number][] = [
  [0,      0      ],
  [0,      20 * S ],
  [4 * S,  15 * S ],
  [6 * S,  23 * S ],
  [9 * S,  23 * S ],
  [7 * S,  15 * S ],
  [12 * S, 15 * S ],
];

function sampleOutline(verts: [number, number][], count: number): [number, number][] {
  const closed: [number, number][] = [...verts, verts[0]];
  type Seg = { len: number; p0: [number, number]; p1: [number, number] };
  const segs: Seg[] = [];
  let total = 0;
  for (let i = 0; i < closed.length - 1; i++) {
    const dx = closed[i + 1][0] - closed[i][0];
    const dy = closed[i + 1][1] - closed[i][1];
    const len = Math.sqrt(dx * dx + dy * dy);
    segs.push({ len, p0: closed[i], p1: closed[i + 1] });
    total += len;
  }
  const step = total / count;
  const pts: [number, number][] = [];
  let dist = 0;
  let si = 0;
  for (let i = 0; i < count; i++) {
    while (si < segs.length - 1 && dist > segs[si].len) { dist -= segs[si].len; si++; }
    const t = segs[si].len > 0 ? Math.min(dist / segs[si].len, 1) : 0;
    pts.push([
      segs[si].p0[0] + (segs[si].p1[0] - segs[si].p0[0]) * t,
      segs[si].p0[1] + (segs[si].p1[1] - segs[si].p0[1]) * t,
    ]);
    dist += step;
  }
  return pts;
}

const SHAPE_N = 7;   // only a few particles snap into cursor shape
const SHAPE_PTS = sampleOutline(CURSOR_VERTS, SHAPE_N);
const IDLE_MS = 1400;
const N = 45;
const AVOID_PAD = 28; // px buffer around content elements

// Selectors for elements particles should avoid
const CONTENT_SEL = "h1,h2,h3,h4,h5,h6,p,img,video,button,a,input,figure,span[class],div[class*='badge'],div[class*='card'],div[class*='chip'],li";

interface Rect { x: number; y: number; w: number; h: number }
interface Particle {
  x: number; y: number;
  vx: number; vy: number;
  r: number; alpha: number;
  phase: number; freq: number;
  tx: number | null; ty: number | null;
}

export function MouseParticleField() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouseRef = useRef({ x: -9999, y: -9999 });
  const idleTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const forming = useRef(false);
  const rectsRef = useRef<Rect[]>([]);
  const reduced = usePrefersReducedMotion();

  useEffect(() => {
    if (reduced) return;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    let raf = 0;
    let cancelled = false;
    let w = window.innerWidth;
    let h = window.innerHeight;

    const resize = () => {
      w = window.innerWidth;
      h = window.innerHeight;
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };
    resize();

    // Build viewport-relative rects of content elements to avoid
    const refreshRects = () => {
      const rects: Rect[] = [];
      for (const el of document.querySelectorAll<HTMLElement>(CONTENT_SEL)) {
        const r = el.getBoundingClientRect();
        if (r.width < 10 || r.height < 6) continue;
        if (r.bottom < -60 || r.top > h + 60) continue;
        rects.push({
          x: r.left   - AVOID_PAD,
          y: r.top    - AVOID_PAD,
          w: r.width  + AVOID_PAD * 2,
          h: r.height + AVOID_PAD * 2,
        });
      }
      rectsRef.current = rects;
    };

    refreshRects();
    const rectInterval = setInterval(refreshRects, 300);

    const particles: Particle[] = Array.from({ length: N }, () => ({
      x: Math.random() * w,
      y: Math.random() * h,
      vx: (Math.random() - 0.5) * 0.12,
      vy: (Math.random() - 0.5) * 0.12,
      r: 1.6 + Math.random() * 1.6,
      alpha: 0.14 + Math.random() * 0.16,
      phase: Math.random() * Math.PI * 2,
      freq: 0.0003 + Math.random() * 0.0008,
      tx: null,
      ty: null,
    }));

    const clearTargets = () => {
      for (const p of particles) { p.tx = null; p.ty = null; }
      forming.current = false;
    };

    const assignShape = () => {
      const { x: mx, y: my } = mouseRef.current;
      if (mx < 0) return;
      const byDist = [...particles].sort((a, b) =>
        (a.x - mx) ** 2 + (a.y - my) ** 2 - ((b.x - mx) ** 2 + (b.y - my) ** 2)
      );
      for (const p of particles) { p.tx = null; p.ty = null; }
      for (let i = 0; i < SHAPE_N; i++) {
        byDist[i].tx = mx + SHAPE_PTS[i][0];
        byDist[i].ty = my + SHAPE_PTS[i][1];
      }
      forming.current = true;
    };

    let t = 0;
    const draw = () => {
      if (cancelled) return;
      if (document.visibilityState !== "visible") { raf = requestAnimationFrame(draw); return; }
      t++;
      ctx.clearRect(0, 0, w, h);

      const rects = rectsRef.current;

      // Faint connection lines between nearby particles
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const pi = particles[i];
          const pj = particles[j];
          const dx = pi.x - pj.x;
          const dy = pi.y - pj.y;
          const d2 = dx * dx + dy * dy;
          if (d2 < 90 * 90) {
            const a = (1 - Math.sqrt(d2) / 90) * 0.07;
            ctx.beginPath();
            ctx.moveTo(pi.x, pi.y);
            ctx.lineTo(pj.x, pj.y);
            ctx.strokeStyle = `rgba(210,220,255,${a})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }
      }

      for (const p of particles) {
        if (p.tx !== null && p.ty !== null) {
          const dx = p.tx - p.x;
          const dy = p.ty - p.y;
          p.vx += dx * 0.012;
          p.vy += dy * 0.012;
          p.vx *= 0.91;
          p.vy *= 0.91;
        } else {
          // Sinusoidal drift
          p.vx += Math.sin(t * p.freq + p.phase) * 0.0008;
          p.vy += Math.cos(t * p.freq * 1.3 + p.phase) * 0.0008;

          // Repel from content element rects
          for (const rect of rects) {
            const inX = p.x > rect.x && p.x < rect.x + rect.w;
            const inY = p.y > rect.y && p.y < rect.y + rect.h;
            if (inX && inY) {
              const dL = p.x - rect.x;
              const dR = rect.x + rect.w - p.x;
              const dT = p.y - rect.y;
              const dB = rect.y + rect.h - p.y;
              const m = Math.min(dL, dR, dT, dB);
              if (m === dL) p.vx -= 0.25;
              else if (m === dR) p.vx += 0.25;
              else if (m === dT) p.vy -= 0.25;
              else p.vy += 0.25;
            }
          }

          p.vx *= 0.982;
          p.vy *= 0.982;
          const spd = Math.sqrt(p.vx * p.vx + p.vy * p.vy);
          if (spd > 0.5) { p.vx = (p.vx / spd) * 0.5; p.vy = (p.vy / spd) * 0.5; }

          if (p.x < -10) p.x = w + 10;
          if (p.x > w + 10) p.x = -10;
          if (p.y < -10) p.y = h + 10;
          if (p.y > h + 10) p.y = -10;
        }

        p.x += p.vx;
        p.y += p.vy;

        const inShape = p.tx !== null;
        const a = inShape ? Math.min(p.alpha + 0.3, 0.75) : p.alpha;
        const r = inShape ? p.r * 1.3 : p.r;
        ctx.beginPath();
        ctx.arc(p.x, p.y, r, 0, Math.PI * 2);
        ctx.fillStyle = inShape
          ? `rgba(220,230,255,${a})`
          : `rgba(200,210,255,${a})`;
        ctx.fill();
      }

      raf = requestAnimationFrame(draw);
    };

    const onMove = (e: MouseEvent) => {
      mouseRef.current = { x: e.clientX, y: e.clientY };
      if (forming.current) clearTargets();
      if (idleTimer.current) clearTimeout(idleTimer.current);
      idleTimer.current = setTimeout(assignShape, IDLE_MS);
    };
    const onLeave = () => {
      mouseRef.current = { x: -9999, y: -9999 };
      if (idleTimer.current) clearTimeout(idleTimer.current);
      clearTargets();
    };

    window.addEventListener("mousemove", onMove, { passive: true });
    window.addEventListener("mouseleave", onLeave);
    window.addEventListener("resize", resize, { passive: true });
    raf = requestAnimationFrame(draw);

    return () => {
      cancelled = true;
      cancelAnimationFrame(raf);
      clearInterval(rectInterval);
      if (idleTimer.current) clearTimeout(idleTimer.current);
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseleave", onLeave);
      window.removeEventListener("resize", resize);
    };
  }, [reduced]);

  if (reduced) return null;

  return (
    <canvas
      ref={canvasRef}
      className="pointer-events-none fixed inset-0 z-[3]"
      aria-hidden
    />
  );
}
