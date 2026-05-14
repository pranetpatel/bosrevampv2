"use client";

import { usePrefersReducedMotion } from "@/components/use-prefers-reduced-motion";
import { useEffect, useRef } from "react";

export function AmbientSiteCanvas() {
  const ref = useRef<HTMLCanvasElement>(null);
  const mouseRef = useRef({ x: -1, y: -1 });
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

    let lerpX = -1;
    let lerpY = -1;

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

      if (lerpX < 0) { lerpX = w * 0.5; lerpY = h * 0.4; }

      const mx = mouseRef.current.x < 0 ? w * 0.5 : mouseRef.current.x;
      const my = mouseRef.current.y < 0 ? h * 0.4 : mouseRef.current.y;
      lerpX += (mx - lerpX) * 0.02;
      lerpY += (my - lerpY) * 0.02;

      // Primary orchid blob — slow drift
      const bx = w * (0.5 + 0.1 * Math.sin(t));
      const by = h * (0.35 + 0.06 * Math.cos(t * 0.7));
      const g1 = ctx.createRadialGradient(bx, by, 0, w * 0.5, h * 0.4, Math.max(w, h) * 0.6);
      g1.addColorStop(0, "rgba(26,83,253,0.18)");
      g1.addColorStop(0.4, "rgba(26,83,253,0.04)");
      g1.addColorStop(1, "rgba(10,10,10,0)");
      ctx.fillStyle = g1;
      ctx.fillRect(0, 0, w, h);

      // Cursor-following magenta glow
      if (mouseRef.current.x >= 0) {
        const g2 = ctx.createRadialGradient(lerpX, lerpY, 0, lerpX, lerpY, Math.max(w, h) * 0.3);
        g2.addColorStop(0, "rgba(218,52,241,0.14)");
        g2.addColorStop(0.5, "rgba(26,83,253,0.05)");
        g2.addColorStop(1, "rgba(10,10,10,0)");
        ctx.fillStyle = g2;
        ctx.fillRect(0, 0, w, h);
      }

      // Secondary wandering cyan
      const cx2 = w * (0.5 + 0.14 * Math.cos(t * 0.55 + 1.2));
      const cy2 = h * (0.65 + 0.08 * Math.sin(t * 0.8 + 2.4));
      const g3 = ctx.createRadialGradient(cx2, cy2, 0, cx2, cy2, Math.max(w, h) * 0.38);
      g3.addColorStop(0, "rgba(4,209,224,0.1)");
      g3.addColorStop(0.6, "rgba(4,209,224,0.02)");
      g3.addColorStop(1, "rgba(10,10,10,0)");
      ctx.fillStyle = g3;
      ctx.fillRect(0, 0, w, h);

      raf = requestAnimationFrame(draw);
    };

    const onMove = (e: MouseEvent) => { mouseRef.current = { x: e.clientX, y: e.clientY }; };
    const onLeave = () => { mouseRef.current = { x: -1, y: -1 }; };
    const onVis = () => { if (document.visibilityState === "visible") t = 0; };

    document.addEventListener("visibilitychange", onVis);
    window.addEventListener("mousemove", onMove, { passive: true });
    window.addEventListener("mouseleave", onLeave);
    raf = requestAnimationFrame(draw);

    return () => {
      cancelled = true;
      cancelAnimationFrame(raf);
      document.removeEventListener("visibilitychange", onVis);
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseleave", onLeave);
    };
  }, [reduced]);

  if (reduced) return null;

  return (
    <canvas
      ref={ref}
      className="pointer-events-none fixed inset-0 z-[0]"
      aria-hidden
    />
  );
}
