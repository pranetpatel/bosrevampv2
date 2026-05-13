"use client";

import { usePrefersReducedMotion } from "@/components/use-prefers-reduced-motion";
import { useEffect, useRef } from "react";

/**
 * Very subtle full-viewport ambient field (legacy bg-canvas spirit) — home only.
 */
export function AmbientSiteCanvas() {
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
    const dpr = Math.min(window.devicePixelRatio || 1, 1.5);

    const draw = () => {
      if (cancelled || document.visibilityState !== "visible") {
        raf = requestAnimationFrame(draw);
        return;
      }
      const w = window.innerWidth;
      const h = window.innerHeight;
      c.width = w * dpr;
      c.height = h * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      ctx.clearRect(0, 0, w, h);
      t += 0.003;
      const g = ctx.createRadialGradient(
        w * (0.5 + 0.08 * Math.sin(t)),
        h * (0.35 + 0.05 * Math.cos(t * 0.7)),
        0,
        w * 0.5,
        h * 0.4,
        Math.max(w, h) * 0.55,
      );
      g.addColorStop(0, "rgba(26,83,253,0.04)");
      g.addColorStop(0.45, "rgba(10,10,10,0)");
      g.addColorStop(1, "rgba(10,10,10,0)");
      ctx.fillStyle = g;
      ctx.fillRect(0, 0, w, h);
      raf = requestAnimationFrame(draw);
    };

    const onVis = () => {
      if (document.visibilityState === "visible") t = 0;
    };
    document.addEventListener("visibilitychange", onVis);
    raf = requestAnimationFrame(draw);
    return () => {
      cancelled = true;
      cancelAnimationFrame(raf);
      document.removeEventListener("visibilitychange", onVis);
    };
  }, [reduced]);

  if (reduced) return null;

  return (
    <canvas
      ref={ref}
      className="pointer-events-none fixed inset-0 z-[0] opacity-100"
      aria-hidden
    />
  );
}
