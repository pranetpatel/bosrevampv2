"use client";

import { usePrefersReducedMotion } from "@/components/use-prefers-reduced-motion";
import { useEffect, useRef } from "react";

/**
 * Subtle orbiting ring + sparks behind the primary CTA (legacy button canvas vibe).
 */
export function CtaOrbitCanvas() {
  const ref = useRef<HTMLCanvasElement>(null);
  const reduced = usePrefersReducedMotion();

  useEffect(() => {
    if (reduced) return;
    const c = ref.current;
    if (!c) return;
    const ctx = c.getContext("2d");
    if (!ctx) return;
    let raf = 0;
    let t = 0;
    let cancelled = false;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    /** Avoid GPU/browser failures from oversized backing stores. */
    const MAX_BACKING = 4096;
    let lastBw = 0;
    let lastBh = 0;

    const draw = () => {
      if (cancelled) return;
      const w = Math.floor(c.clientWidth);
      const h = Math.floor(c.clientHeight);
      if (w < 8 || h < 8) {
        raf = requestAnimationFrame(draw);
        return;
      }
      let bw = Math.max(1, Math.floor(w * dpr));
      let bh = Math.max(1, Math.floor(h * dpr));
      bw = Math.min(bw, MAX_BACKING);
      bh = Math.min(bh, MAX_BACKING);
      // Resizing every frame reallocates the draw target and can throw InvalidStateError.
      if (bw !== lastBw || bh !== lastBh) {
        lastBw = bw;
        lastBh = bh;
        c.width = bw;
        c.height = bh;
      }
      const sx = bw / w;
      const sy = bh / h;
      try {
        ctx.setTransform(sx, 0, 0, sy, 0, 0);
        ctx.clearRect(0, 0, w, h);
      } catch {
        raf = requestAnimationFrame(draw);
        return;
      }
      t += 0.04;
      const cx = w / 2;
      const cy = h / 2;
      const r = Math.min(w, h) * 0.42;
      ctx.strokeStyle = "rgba(26,83,253,0.25)";
      ctx.lineWidth = 1;
      ctx.beginPath();
      ctx.arc(cx, cy, r, t * 0.4, t * 0.4 + Math.PI * 1.25);
      ctx.stroke();
      ctx.strokeStyle = "rgba(218,52,241,0.2)";
      ctx.beginPath();
      ctx.arc(cx, cy, r * 0.72, -t * 0.5, -t * 0.5 + Math.PI * 1.1);
      ctx.stroke();
      for (let i = 0; i < 10; i++) {
        const a = t * 0.8 + (i / 10) * Math.PI * 2;
        const rr = r * (0.55 + 0.08 * Math.sin(t + i));
        const x = cx + Math.cos(a) * rr;
        const y = cy + Math.sin(a) * rr;
        ctx.fillStyle = `rgba(4,209,224,${0.15 + (i % 3) * 0.06})`;
        ctx.beginPath();
        ctx.arc(x, y, 1.5, 0, Math.PI * 2);
        ctx.fill();
      }
      raf = requestAnimationFrame(draw);
    };
    raf = requestAnimationFrame(draw);
    return () => {
      cancelled = true;
      cancelAnimationFrame(raf);
    };
  }, [reduced]);

  if (reduced) return null;
  return (
    <canvas
      ref={ref}
      className="pointer-events-none absolute -inset-8 -z-10 opacity-90"
      aria-hidden
    />
  );
}
