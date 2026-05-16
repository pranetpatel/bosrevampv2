"use client";

import { usePrefersReducedMotion } from "@/components/use-prefers-reduced-motion";
import { useEffect, useRef } from "react";

const NODE_COUNT   = 28;
const SHAPE_N      = 5;      // nodes that form the polygon
const CONNECT_DIST = 90;
const SHAPE_STR    = 0.002;  // very slow float toward target
const DRIFT_STR    = 0.0008;
const FRICTION     = 0.97;
const MAX_SPEED    = 0.9;
const IDLE_MS      = 500;
const WRAP_PAD     = 320;    // nodes wrap at this distance off-screen, keeping them invisible

interface Node {
  x: number; y: number;
  vx: number; vy: number;
  r: number;
  alpha: number;
  phase: number;
  freq: number;
  shapeIdx: number | null;
  tx: number | null;
  ty: number | null;
}

// Generate SHAPE_N irregular polygon vertices around (cx, cy)
function polygonTargets(cx: number, cy: number, count: number): [number, number][] {
  const baseR = 28 + Math.random() * 36; // 28 - 64 px
  const pts: [number, number][] = [];
  for (let i = 0; i < count; i++) {
    const angle = (i / count) * Math.PI * 2 - Math.PI / 2
                + (Math.random() - 0.5) * (0.9 / count) * Math.PI * 2;
    const r = baseR * (0.55 + Math.random() * 0.9);
    pts.push([cx + Math.cos(angle) * r, cy + Math.sin(angle) * r]);
  }
  return pts;
}

export function AmbientSiteCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouseRef  = useRef({ x: -9999, y: -9999 });
  const movingRef = useRef(false);
  const reduced   = usePrefersReducedMotion();

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
    let t = 0;
    let idleTimer: ReturnType<typeof setTimeout> | null = null;

    const resize = () => {
      w = window.innerWidth; h = window.innerHeight;
      canvas.width = w * dpr; canvas.height = h * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };
    resize();

    // Nodes start scattered including well off-screen
    const nodes: Node[] = Array.from({ length: NODE_COUNT }, () => ({
      x:        (Math.random() - 0.1) * (w + WRAP_PAD * 2) - WRAP_PAD,
      y:        (Math.random() - 0.1) * (h + WRAP_PAD * 2) - WRAP_PAD,
      vx:       (Math.random() - 0.5) * 0.5,
      vy:       (Math.random() - 0.5) * 0.5,
      r:        1.2 + Math.random() * 1.6,
      alpha:    0.18 + Math.random() * 0.2,
      phase:    Math.random() * Math.PI * 2,
      freq:     0.0001 + Math.random() * 0.0003,
      shapeIdx: null,
      tx:       null,
      ty:       null,
    }));

    const clearShape = () => {
      for (const n of nodes) {
        n.shapeIdx = null; n.tx = null; n.ty = null;
      }
    };

    const assignShape = () => {
      const { x: mx, y: my } = mouseRef.current;
      if (mx < -1000) return;
      clearShape();
      const targets = polygonTargets(mx, my, SHAPE_N);
      // Closest SHAPE_N nodes (even if off-screen  -  they'll float in)
      const sorted = [...nodes].sort((a, b) =>
        (a.x-mx)**2+(a.y-my)**2 - ((b.x-mx)**2+(b.y-my)**2)
      );
      for (let i = 0; i < SHAPE_N; i++) {
        sorted[i].shapeIdx = i;
        sorted[i].tx = targets[i][0];
        sorted[i].ty = targets[i][1];
      }
    };

    const draw = () => {
      if (cancelled) return;
      if (document.visibilityState !== "visible") { raf = requestAnimationFrame(draw); return; }
      t++;
      ctx.clearRect(0, 0, w, h);

      const mx  = mouseRef.current.x;
      const my  = mouseRef.current.y;

      for (const n of nodes) {
        if (n.shapeIdx !== null && n.tx !== null && n.ty !== null) {
          // Float slowly toward polygon vertex
          n.vx += (n.tx - n.x) * SHAPE_STR;
          n.vy += (n.ty - n.y) * SHAPE_STR;
          const dd = Math.hypot(n.tx - n.x, n.ty - n.y);
          if (dd < 2) { n.vx += (Math.random()-0.5)*0.02; n.vy += (Math.random()-0.5)*0.02; }
        } else {
          // Gentle sinusoidal drift
          n.vx += Math.sin(t * n.freq + n.phase) * DRIFT_STR;
          n.vy += Math.cos(t * n.freq * 1.3 + n.phase) * DRIFT_STR;

          // Wrap far off-screen so they stay invisible
          const pad = WRAP_PAD;
          if (n.x < -pad) n.x = w + pad;
          else if (n.x > w + pad) n.x = -pad;
          if (n.y < -pad) n.y = h + pad;
          else if (n.y > h + pad) n.y = -pad;
        }

        n.vx *= FRICTION; n.vy *= FRICTION;
        const spd = Math.hypot(n.vx, n.vy);
        if (spd > MAX_SPEED) { n.vx = (n.vx/spd)*MAX_SPEED; n.vy = (n.vy/spd)*MAX_SPEED; }
        n.x += n.vx; n.y += n.vy;
      }

      // Draw all nodes currently on-screen (shape nodes + any drifting through)
      const visible = nodes.filter(n => n.x > -20 && n.x < w+20 && n.y > -20 && n.y < h+20);

      // Lines between nearby visible nodes
      ctx.lineWidth = 0.6;
      for (let i = 0; i < visible.length; i++) {
        for (let j = i + 1; j < visible.length; j++) {
          const a = visible[i], b = visible[j];
          const d = Math.hypot(a.x-b.x, a.y-b.y);
          if (d < CONNECT_DIST) {
            ctx.beginPath(); ctx.moveTo(a.x, a.y); ctx.lineTo(b.x, b.y);
            ctx.strokeStyle = `rgba(255,255,255,${((1 - d/CONNECT_DIST)*0.18).toFixed(3)})`;
            ctx.stroke();
          }
        }
      }

      // Dots  -  shape nodes slightly brighter
      for (const n of visible) {
        const inShape = n.shapeIdx !== null;
        ctx.beginPath();
        ctx.arc(n.x, n.y, inShape ? n.r * 1.3 : n.r, 0, Math.PI*2);
        ctx.fillStyle = `rgba(255,255,255,${(inShape ? Math.min(n.alpha+0.35, 0.75) : n.alpha).toFixed(3)})`;
        ctx.fill();
      }

      raf = requestAnimationFrame(draw);
    };

    const onMove = (e: MouseEvent) => {
      mouseRef.current = { x: e.clientX, y: e.clientY };
      movingRef.current = true;
      clearShape();
      if (idleTimer) clearTimeout(idleTimer);
      idleTimer = setTimeout(() => {
        movingRef.current = false;
        assignShape();
      }, IDLE_MS);
    };

    const onLeave = () => {
      mouseRef.current = { x: -9999, y: -9999 };
      movingRef.current = false;
      clearShape();
      if (idleTimer) clearTimeout(idleTimer);
    };

    window.addEventListener("mousemove", onMove,  { passive: true });
    window.addEventListener("mouseleave", onLeave);
    window.addEventListener("resize", resize,     { passive: true });
    raf = requestAnimationFrame(draw);

    return () => {
      cancelled = true;
      cancelAnimationFrame(raf);
      if (idleTimer) clearTimeout(idleTimer);
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseleave", onLeave);
      window.removeEventListener("resize", resize);
    };
  }, [reduced]);

  if (reduced) return null;

  return (
    <canvas
      ref={canvasRef}
      className="pointer-events-none fixed inset-0 z-[195]"
      aria-hidden
    />
  );
}
