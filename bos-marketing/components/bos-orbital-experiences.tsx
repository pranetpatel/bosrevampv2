"use client";

/**
 * Legacy “Work Made Simple” use-case card motion (see `legacy/BOS — Work Made Simple.htm`:
 * `.uc-canvas`, `.mini-term`, `.mini-bar`, `.metric-row`, gold tokens). Visuals aim for 1:1
 * parity with those cards — static fallbacks when `prefers-reduced-motion`.
 */

import { usePrefersReducedMotion } from "@/components/use-prefers-reduced-motion";
import { useEffect, useId, useRef, type ReactNode } from "react";

/** Pulled from legacy :root / .cmd-eyebrow */
const LEGACY = {
  goldLight: "#C9A84C",
  gold: "#A67C00",
  goldPale: "#E2C47A",
  textMuted: "#666260",
  textSoft: "#A8A49C",
  cream: "#F0EEE8",
  borderGold: "rgba(166,124,0,0.22)",
  surface: "rgba(240,238,232,0.04)",
  purple: "#DA34F1",
  cyan: "#04D1E0",
} as const;

export type LegacyOrbitalModuleId =
  | "ai-execution"
  | "workflow"
  | "team-ops"
  | "client-delivery"
  | "intelligence"
  | "communication"
  | "command-view"
  | "integrations";

export function BosOrbitalExperience({
  moduleId,
  accentColor,
}: {
  moduleId: LegacyOrbitalModuleId;
  accentColor: string;
}) {
  const reduced = usePrefersReducedMotion();

  switch (moduleId) {
    case "ai-execution":
      return <ExperienceAiExecution reduced={reduced} />;
    case "workflow":
      return <ExperienceWorkflow reduced={reduced} />;
    case "team-ops":
      return <ExperienceTeamOps reduced={reduced} />;
    case "client-delivery":
      return <ExperienceClientDelivery reduced={reduced} />;
    case "intelligence":
      return <ExperienceIntelligence reduced={reduced} />;
    case "communication":
      return <ExperienceCommunication reduced={reduced} />;
    case "command-view":
      return <ExperienceCommandView accentColor={accentColor} reduced={reduced} />;
    case "integrations":
      return <ExperienceIntegrations reduced={reduced} />;
    default:
      return null;
  }
}

/** Matches `.uc-canvas` — full-bleed feel, dimmed like legacy (opacity ~0.45 behind copy). */
function VizPanel({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <div
      className={`relative mt-5 overflow-hidden rounded-[20px] border bg-black/35 ${className}`}
      style={{ borderColor: LEGACY.borderGold }}
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_70%_55%_at_50%_0%,rgba(166,124,0,0.08),transparent_65%)]" />
      <div className="relative opacity-[0.92]">{children}</div>
    </div>
  );
}

function MiniTerm({ lines }: { lines: { prompt: string; out: string }[] }) {
  return (
    <div
      className="rounded-lg border px-4 py-3.5 font-mono text-[12px] leading-[1.9]"
      style={{
        background: "rgba(0,0,0,0.3)",
        borderColor: LEGACY.borderGold,
        color: LEGACY.textSoft,
      }}
    >
      {lines.map((line) => (
        <div key={line.out} className="mini-term-line">
          <span className="mr-1.5" style={{ color: LEGACY.goldLight }}>
            {line.prompt}
          </span>
          <span style={{ color: LEGACY.textSoft }}>{line.out}</span>
        </div>
      ))}
    </div>
  );
}

function ExperienceAiExecution({ reduced }: { reduced: boolean }) {
  const ref = useRef<HTMLCanvasElement>(null);

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
    const n = 36;

    const draw = () => {
      if (cancelled) return;
      const w = c.clientWidth;
      const h = c.clientHeight;
      if (w < 8) {
        raf = requestAnimationFrame(draw);
        return;
      }
      c.width = w * dpr;
      c.height = h * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      ctx.clearRect(0, 0, w, h);
      t += 0.028;
      const x0 = w * 0.06;
      const x1 = w * 0.94;
      const midY = h * 0.48;
      const travel = (t * 1.1) % 1;

      // faint baseline
      ctx.strokeStyle = "rgba(4,209,224,0.12)";
      ctx.lineWidth = 1;
      ctx.beginPath();
      ctx.moveTo(x0, midY);
      ctx.lineTo(x1, midY);
      ctx.stroke();

      for (let i = 0; i < n; i++) {
        const u = i / (n - 1);
        const x = x0 + (x1 - x0) * u;
        const wave = Math.sin(t * 0.9 + u * 5) * (h * 0.06);
        const y = midY + wave * (0.35 + 0.65 * Math.sin(u * Math.PI));
        const dist = Math.abs(u - travel);
        const hot = Math.exp(-dist * dist * 90);
        const r = 1.4 + hot * 2.8 + 0.35 * Math.sin(t * 2 + i * 0.4);

        ctx.beginPath();
        ctx.arc(x, y, r + hot * 1.2, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(4,209,224,${0.08 + hot * 0.35})`;
        ctx.fill();

        ctx.beginPath();
        ctx.arc(x, y, r * 0.45, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(240,238,232,${0.15 + hot * 0.75})`;
        ctx.fill();

        if (i > 0) {
          const u0 = (i - 1) / (n - 1);
          const xPrev = x0 + (x1 - x0) * u0;
          const wave0 = Math.sin(t * 0.9 + u0 * 5) * (h * 0.06);
          const yPrev = midY + wave0 * (0.35 + 0.65 * Math.sin(u0 * Math.PI));
          ctx.strokeStyle = `rgba(4,209,224,${0.04 + 0.06 * (1 - dist)})`;
          ctx.lineWidth = 0.85;
          ctx.beginPath();
          ctx.moveTo(xPrev, yPrev);
          ctx.lineTo(x, y);
          ctx.stroke();
        }
      }
      raf = requestAnimationFrame(draw);
    };
    raf = requestAnimationFrame(draw);
    return () => {
      cancelled = true;
      cancelAnimationFrame(raf);
    };
  }, [reduced]);

  return (
    <div className="mt-5 space-y-4">
      <VizPanel className="h-[88px]">
        {reduced ? (
          <div className="flex h-[88px] items-center justify-center gap-1" aria-hidden>
            {Array.from({ length: 20 }).map((_, i) => (
              <span
                key={i}
                className="h-1 w-1 rounded-full"
                style={{
                  background: LEGACY.cyan,
                  opacity: 0.15 + (i % 6) * 0.08,
                  transform: `translateY(${Math.sin(i * 0.5) * 3}px)`,
                }}
              />
            ))}
          </div>
        ) : (
          <canvas ref={ref} className="h-[88px] w-full" aria-hidden />
        )}
      </VizPanel>
      <MiniTerm
        lines={[
          { prompt: ">", out: '"Launch the Q3 campaign."' },
          { prompt: "→", out: "Briefing created · Team notified · Timeline set · Assets queued" },
        ]}
      />
    </div>
  );
}

function roundRectPath(ctx: CanvasRenderingContext2D, x: number, y: number, w: number, h: number, r: number) {
  const rr = Math.min(r, w / 2, h / 2);
  ctx.beginPath();
  ctx.moveTo(x + rr, y);
  ctx.lineTo(x + w - rr, y);
  ctx.quadraticCurveTo(x + w, y, x + w, y + rr);
  ctx.lineTo(x + w, y + h - rr);
  ctx.quadraticCurveTo(x + w, y + h, x + w - rr, y + h);
  ctx.lineTo(x + rr, y + h);
  ctx.quadraticCurveTo(x, y + h, x, y + h - rr);
  ctx.lineTo(x, y + rr);
  ctx.quadraticCurveTo(x, y, x + rr, y);
  ctx.closePath();
}

function ExperienceWorkflow({ reduced }: { reduced: boolean }) {
  const ref = useRef<HTMLCanvasElement>(null);

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
    const steps = 4;
    const boxW = 96;
    const boxH = 34;
    const gap = 22;

    const draw = () => {
      if (cancelled) return;
      const w = c.clientWidth;
      const h = c.clientHeight;
      if (w < 8) {
        raf = requestAnimationFrame(draw);
        return;
      }
      c.width = w * dpr;
      c.height = h * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      ctx.clearRect(0, 0, w, h);
      t += 0.022;
      const cx = w * 0.5;
      const totalH = steps * boxH + (steps - 1) * gap;
      let y0 = (h - totalH) * 0.5;

      const centers: { x: number; y: number }[] = [];
      for (let s = 0; s < steps; s++) {
        const x = cx - boxW / 2;
        const y = y0 + s * (boxH + gap);
        centers.push({ x: cx, y: y + boxH / 2 });
        ctx.strokeStyle = "rgba(240,238,232,0.1)";
        ctx.lineWidth = 1;
        roundRectPath(ctx, x, y, boxW, boxH, 6);
        ctx.stroke();
        const pulse = 0.5 + 0.5 * Math.sin(t * 1.8 + s * 0.9);
        ctx.fillStyle = `rgba(218,52,241,${0.03 + pulse * 0.06})`;
        roundRectPath(ctx, x + 1, y + 1, boxW - 2, boxH - 2, 5);
        ctx.fill();
        const nodePulse = 0.55 + 0.45 * Math.sin(t * 2.2 + s * 1.1);
        ctx.beginPath();
        ctx.arc(cx, y + boxH / 2, 4 + nodePulse * 1.5, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(218,52,241,${0.25 + nodePulse * 0.45})`;
        ctx.shadowColor = LEGACY.purple;
        ctx.shadowBlur = 12 * nodePulse;
        ctx.fill();
        ctx.shadowBlur = 0;
        if (s < steps - 1) {
          ctx.strokeStyle = "rgba(218,52,241,0.18)";
          ctx.setLineDash([3, 5]);
          ctx.beginPath();
          ctx.moveTo(cx, y + boxH);
          ctx.lineTo(cx, y + boxH + gap);
          ctx.stroke();
          ctx.setLineDash([]);
        }
      }

      // traveling packet along spine
      const prog = (t * 0.22) % 1;
      const seg = prog * (steps - 1);
      const i0 = Math.floor(seg);
      const f = seg - i0;
      if (i0 < steps - 1) {
        const a = centers[i0];
        const b = centers[i0 + 1];
        const ox = a.x;
        const oy = a.y + f * (b.y - a.y);
        ctx.beginPath();
        ctx.arc(ox, oy, 5.5, 0, Math.PI * 2);
        const g = ctx.createRadialGradient(ox, oy, 0, ox, oy, 14);
        g.addColorStop(0, "rgba(255,255,255,0.95)");
        g.addColorStop(0.35, "rgba(218,52,241,0.55)");
        g.addColorStop(1, "transparent");
        ctx.fillStyle = g;
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

  return (
    <div className="mt-5">
      <VizPanel className="h-[220px]">
        {reduced ? (
          <div className="flex h-[220px] flex-col items-center justify-center gap-3 py-6" aria-hidden>
            {[0, 1, 2, 3].map((s) => (
              <div key={s} className="flex flex-col items-center">
                <div
                  className="h-8 w-24 rounded-md border"
                  style={{ borderColor: LEGACY.borderGold, background: LEGACY.surface }}
                />
                {s < 3 ? <div className="h-4 w-px bg-white/15" /> : null}
              </div>
            ))}
          </div>
        ) : (
          <canvas ref={ref} className="h-[220px] w-full" aria-hidden />
        )}
      </VizPanel>
      <p
        className="mt-3 font-[family-name:var(--font-ui)] text-[10px] font-bold uppercase tracking-[0.2em]"
        style={{ color: LEGACY.goldLight }}
      >
        · 3 workflows running
      </p>
    </div>
  );
}

function ExperienceTeamOps({ reduced }: { reduced: boolean }) {
  const ref = useRef<HTMLCanvasElement>(null);

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
    const palette = ["#10D988", "#FF8C42", "#E2C47A", "#04D1E0"];
    const orbs = Array.from({ length: 16 }, (_, i) => ({
      x: 0.15 + Math.random() * 0.7,
      y: 0.15 + Math.random() * 0.7,
      vx: (Math.random() - 0.5) * 0.12,
      vy: (Math.random() - 0.5) * 0.12,
      c: palette[i % palette.length],
      rBase: 2.5 + Math.random() * 3,
      phase: Math.random() * Math.PI * 2,
    }));

    const draw = () => {
      if (cancelled) return;
      const w = c.clientWidth;
      const h = c.clientHeight;
      if (w < 8) {
        raf = requestAnimationFrame(draw);
        return;
      }
      c.width = w * dpr;
      c.height = h * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      ctx.clearRect(0, 0, w, h);
      t += 0.018;
      for (const o of orbs) {
        o.x += o.vx * 0.01;
        o.y += o.vy * 0.01;
        if (o.x < 0.08 || o.x > 0.92) o.vx *= -1;
        if (o.y < 0.08 || o.y > 0.92) o.vy *= -1;
        const px = o.x * w;
        const py = o.y * h;
        const pulse = 0.5 + 0.5 * Math.sin(t * 1.6 + o.phase);
        const rad = o.rBase * (0.75 + pulse * 0.55);
        const g = ctx.createRadialGradient(px, py, 0, px, py, rad * 3);
        g.addColorStop(0, `${o.c}${Math.floor(180 + pulse * 75).toString(16).padStart(2, "0")}`);
        g.addColorStop(0.4, `${o.c}55`);
        g.addColorStop(1, "transparent");
        ctx.fillStyle = g;
        ctx.beginPath();
        ctx.arc(px, py, rad * 3, 0, Math.PI * 2);
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

  return (
    <div className="mt-5">
      <VizPanel className="h-[130px]">
        {reduced ? (
          <div className="flex h-[130px] flex-wrap content-center justify-center gap-4 p-4 opacity-60" aria-hidden>
            {["#10D988", "#FF8C42", "#E2C47A"].map((col) => (
              <span key={col} className="h-3 w-3 rounded-full blur-[1px]" style={{ background: col, boxShadow: `0 0 14px ${col}` }} />
            ))}
          </div>
        ) : (
          <canvas ref={ref} className="h-[130px] w-full" aria-hidden />
        )}
      </VizPanel>
      <div className="mt-4 flex flex-wrap gap-10">
        <div>
          <p className="font-[family-name:var(--font-display)] text-[28px] font-extrabold leading-none" style={{ color: LEGACY.goldLight }}>
            ↓68%
          </p>
          <p className="mt-1 font-[family-name:var(--font-sans)] text-[11px] font-medium" style={{ color: LEGACY.textMuted }}>
            Status meetings
          </p>
        </div>
        <div>
          <p className="font-[family-name:var(--font-display)] text-[28px] font-extrabold leading-none" style={{ color: LEGACY.goldLight }}>
            ↑3×
          </p>
          <p className="mt-1 font-[family-name:var(--font-sans)] text-[11px] font-medium" style={{ color: LEGACY.textMuted }}>
            Response speed
          </p>
        </div>
      </div>
    </div>
  );
}

function ExperienceClientDelivery({ reduced }: { reduced: boolean }) {
  const uid = useId().replace(/:/g, "");
  const arcId = `arc-teal-${uid}`;

  return (
    <div className="mt-5 space-y-4">
      <VizPanel className="h-[100px]">
        <svg className="h-[100px] w-full" viewBox="0 0 280 80" preserveAspectRatio="xMidYMid meet" aria-hidden>
          <defs>
            <linearGradient id={arcId} x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor={LEGACY.cyan} stopOpacity="0.15" />
              <stop offset="50%" stopColor={LEGACY.cyan} stopOpacity="0.85" />
              <stop offset="100%" stopColor={LEGACY.cyan} stopOpacity="0.2" />
            </linearGradient>
          </defs>
          {Array.from({ length: 14 }).map((_, i) => {
            const a = Math.PI * 0.85 + (i / 13) * Math.PI * 0.3;
            const r = 108;
            const cx = 140;
            const cy = 118;
            const x = cx + Math.cos(a) * r;
            const y = cy + Math.sin(a) * r * 0.42;
            return (
              <circle key={i} cx={x} cy={y} r={1.8} fill={`url(#${arcId})`} opacity={0.25 + (i / 13) * 0.55}>
                {!reduced ? (
                  <animate attributeName="opacity" values="0.2;1;0.2" dur="2.8s" repeatCount="indefinite" begin={`${i * 0.12}s`} />
                ) : null}
              </circle>
            );
          })}
        </svg>
      </VizPanel>
      <div className="space-y-4">
        <div>
          <div className="mb-2 flex justify-between font-[family-name:var(--font-sans)] text-[11px] font-semibold" style={{ color: LEGACY.textMuted }}>
            <span>Campaign launch</span>
            <span style={{ color: LEGACY.goldLight }}>82%</span>
          </div>
          <div className="h-[3px] overflow-hidden rounded-sm" style={{ background: "rgba(240,238,232,0.1)" }}>
            <div
              className="h-full rounded-sm"
              style={{
                width: reduced ? "82%" : undefined,
                background: `linear-gradient(90deg,${LEGACY.gold},${LEGACY.goldLight})`,
                animation: reduced ? undefined : `fillBarClientA-${uid} 2s cubic-bezier(0.16,1,0.3,1) forwards`,
              }}
            />
          </div>
        </div>
        <div>
          <div className="mb-2 flex justify-between font-[family-name:var(--font-sans)] text-[11px] font-semibold" style={{ color: LEGACY.textMuted }}>
            <span>Brand refresh</span>
            <span style={{ color: LEGACY.goldLight }}>54%</span>
          </div>
          <div className="h-[3px] overflow-hidden rounded-sm" style={{ background: "rgba(240,238,232,0.1)" }}>
            <div
              className="h-full rounded-sm"
              style={{
                width: reduced ? "54%" : undefined,
                background: `linear-gradient(90deg,#5B3800,${LEGACY.goldLight})`,
                animation: reduced ? undefined : `fillBarClientB-${uid} 2s cubic-bezier(0.16,1,0.3,1) 0.15s forwards`,
              }}
            />
          </div>
        </div>
      </div>
      <style>{`
        @keyframes fillBarClientA-${uid} { from { width: 0; } to { width: 82%; } }
        @keyframes fillBarClientB-${uid} { from { width: 0; } to { width: 54%; } }
      `}</style>
    </div>
  );
}

function ExperienceIntelligence({ reduced }: { reduced: boolean }) {
  const uid = useId().replace(/:/g, "");
  const gradId = `intel-${uid}`;
  const pathD = "M 10 86 L 48 68 L 92 52 L 128 36 L 168 22 L 210 12 L 252 6";

  return (
    <div className="mt-5">
      <VizPanel className="h-[128px]">
        <svg className="h-[128px] w-full" viewBox="0 0 260 100" preserveAspectRatio="xMidYMid meet" aria-hidden>
          <defs>
            <linearGradient id={gradId} x1="0%" y1="100%" x2="100%" y2="0%">
              <stop offset="0%" stopColor={LEGACY.gold} stopOpacity="0.35" />
              <stop offset="100%" stopColor={LEGACY.goldLight} stopOpacity="0.95" />
            </linearGradient>
            <filter id={`glow-${uid}`} x="-40%" y="-40%" width="180%" height="180%">
              <feGaussianBlur stdDeviation="1.4" result="b" />
              <feMerge>
                <feMergeNode in="b" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>
          <path
            d={pathD}
            fill="none"
            stroke={`url(#${gradId})`}
            strokeWidth="1.75"
            strokeLinecap="round"
            strokeLinejoin="round"
            filter={`url(#glow-${uid})`}
            strokeDasharray={reduced ? "400" : "340"}
            strokeDashoffset={reduced ? "0" : "340"}
            className={reduced ? undefined : `bos-intel-line-${uid}`}
          />
          {[
            [10, 86],
            [48, 68],
            [92, 52],
            [128, 36],
            [168, 22],
            [210, 12],
            [252, 6],
          ].map(([cx, cy], i) => (
            <circle key={i} cx={cx} cy={cy} r="3.2" fill={LEGACY.goldLight} opacity="0.85" filter={`url(#glow-${uid})`}>
              {!reduced ? (
                <animate attributeName="opacity" values="0.35;1;0.35" dur="2.6s" repeatCount="indefinite" begin={`${i * 0.22}s`} />
              ) : null}
            </circle>
          ))}
        </svg>
      </VizPanel>
      <p className="mt-3 font-[family-name:var(--font-display)] text-[28px] font-extrabold leading-none" style={{ color: LEGACY.goldLight }}>
        94%{" "}
        <span className="text-[13px] font-semibold" style={{ color: LEGACY.textMuted }}>
          forecast accuracy
        </span>
      </p>
      <style>{`
        @keyframes bosIntelLine-${uid} { from { stroke-dashoffset: 340; } to { stroke-dashoffset: 0; } }
        .bos-intel-line-${uid} { animation: bosIntelLine-${uid} 2.4s cubic-bezier(0.16, 1, 0.3, 1) forwards; }
      `}</style>
    </div>
  );
}

function ExperienceCommunication({ reduced }: { reduced: boolean }) {
  const ref = useRef<HTMLCanvasElement>(null);

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
    const blobs = Array.from({ length: 26 }, (_, i) => ({
      x: 0.5 + (Math.random() - 0.5) * 0.55,
      y: 0.5 + (Math.random() - 0.5) * 0.5,
      vx: (Math.random() - 0.5) * 0.1,
      vy: (Math.random() - 0.5) * 0.1,
      col: i % 3 === 0 ? "#6B5EFF" : i % 3 === 1 ? "#3CD3FE" : "#A78BFA",
      sz: 1.8 + Math.random() * 2.8,
    }));

    const draw = () => {
      if (cancelled) return;
      const w = c.clientWidth;
      const h = c.clientHeight;
      if (w < 8) {
        raf = requestAnimationFrame(draw);
        return;
      }
      c.width = w * dpr;
      c.height = h * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      ctx.clearRect(0, 0, w, h);
      t += 0.02;
      const cx = w * 0.5;
      const cy = h * 0.5;
      for (let i = 0; i < blobs.length; i++) {
        const a = blobs[i];
        a.x += a.vx * 0.008 + Math.sin(t * 0.4 + i) * 0.0006;
        a.y += a.vy * 0.008 + Math.cos(t * 0.35 + i) * 0.0006;
        if (a.x < 0.12 || a.x > 0.88) a.vx *= -1;
        if (a.y < 0.12 || a.y > 0.88) a.vy *= -1;
        const px = a.x * w;
        const py = a.y * h;
        for (let j = i + 1; j < blobs.length; j++) {
          const b = blobs[j];
          const dx = (a.x - b.x) * w;
          const dy = (a.y - b.y) * h;
          const dist = Math.hypot(dx, dy);
          if (dist < 52) {
            ctx.strokeStyle = `rgba(124,58,237,${0.04 * (1 - dist / 52)})`;
            ctx.lineWidth = 0.6;
            ctx.beginPath();
            ctx.moveTo(px, py);
            ctx.lineTo(b.x * w, b.y * h);
            ctx.stroke();
          }
        }
        const pulse = 0.45 + 0.55 * Math.sin(t * 1.8 + i * 0.5);
        const g = ctx.createRadialGradient(px, py, 0, px, py, a.sz * 4);
        g.addColorStop(0, `${a.col}${Math.floor(140 + pulse * 115).toString(16).padStart(2, "0")}`);
        g.addColorStop(1, "transparent");
        ctx.fillStyle = g;
        ctx.beginPath();
        ctx.arc(px, py, a.sz * 3.2, 0, Math.PI * 2);
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

  return (
    <div className="mt-5">
      <VizPanel className="h-[140px]">
        {reduced ? (
          <div className="flex h-[140px] flex-wrap content-center justify-center gap-2 p-6 opacity-55" aria-hidden>
            {Array.from({ length: 12 }).map((_, i) => (
              <span
                key={i}
                className="rounded-full"
                style={{
                  width: 4 + (i % 4),
                  height: 4 + (i % 4),
                  background: i % 2 ? "#3CD3FE" : "#6B5EFF",
                  opacity: 0.4 + (i % 5) * 0.1,
                }}
              />
            ))}
          </div>
        ) : (
          <canvas ref={ref} className="h-[140px] w-full" aria-hidden />
        )}
      </VizPanel>
      <div className="mt-3 inline-flex items-center gap-2 font-[family-name:var(--font-ui)] text-[10px] font-bold uppercase tracking-[0.2em]" style={{ color: LEGACY.goldLight }}>
        <span
          className="inline-block h-1.5 w-1.5 rounded-full"
          style={{
            background: LEGACY.goldLight,
            animation: reduced ? undefined : "commBlink 1.5s ease-in-out infinite",
          }}
        />
        · 12 active threads
      </div>
      <style>{`
        @keyframes commBlink { 0%, 100% { opacity: 0.35; } 50% { opacity: 1; } }
      `}</style>
    </div>
  );
}

// ─── Command View tuning knobs ───────────────────────────────────────────────
const CV_SWEEP_RPM = 6;
const CV_WEDGE_DEG = 45;
const CV_BLIP_HIT_DEG = 8;
const CV_GRID_STEP = 18;
const CV_ARC_COUNT = 5;
const CV_SPOKE_COUNT = 11;
// Stable blip layout [normRadius 0–1, normAngle 0–1 across PI span]
const CV_BLIPS: ReadonlyArray<readonly [number, number]> = [
  [0.25, 0.12], [0.45, 0.08], [0.55, 0.22], [0.38, 0.35],
  [0.50, 0.15], [0.30, 0.52], [0.58, 0.60], [0.42, 0.75],
  [0.68, 0.42], [0.22, 0.65], [0.62, 0.70], [0.44, 0.88],
  [0.56, 0.48], [0.28, 0.80], [0.58, 0.85],
];

function ExperienceCommandView({
  // accentColor ignored per spec – sweep locked to #2E5BFF
  reduced,
}: {
  accentColor: string;
  reduced: boolean;
}) {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const c = ref.current;
    if (!c) return;
    const ctx = c.getContext("2d");
    if (!ctx) return;
    let raf = 0;
    let cancelled = false;
    let lastTs = 0;
    // Start sweep midway so it's immediately visible
    let sweepAngle = Math.PI * 1.3;
    const WEDGE_RAD = (CV_WEDGE_DEG * Math.PI) / 180;
    const HIT_RAD = (CV_BLIP_HIT_DEG * Math.PI) / 180;
    // rad/s constant rotation
    const SWEEP_SPEED = (CV_SWEEP_RPM / 60) * Math.PI * 2;
    const blipDecay = new Float32Array(CV_BLIPS.length);
    const dpr = Math.min(window.devicePixelRatio || 1, 2);

    const draw = (ts: number) => {
      if (cancelled) return;
      const dt = reduced ? 0 : Math.min((ts - (lastTs || ts)) / 1000, 0.05);
      lastTs = ts;

      const w = c.clientWidth;
      const h = c.clientHeight;
      if (w < 8) { raf = requestAnimationFrame(draw); return; }
      c.width = w * dpr;
      c.height = h * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      ctx.clearRect(0, 0, w, h);

      if (!reduced) {
        sweepAngle += SWEEP_SPEED * dt;
        // Stay on upper semicircle [PI, 2PI): after 2PI wrap to PI + remainder
        while (sweepAngle >= Math.PI * 2) sweepAngle -= Math.PI;
        while (sweepAngle < Math.PI) sweepAngle += Math.PI;
      }

      // Origin bottom-center inside the canvas so the full sweep reads in-frame
      const cx = w * 0.5;
      const cy = h - 6;
      const R = Math.min(w * 0.48, cy - 10);

      // 1 ── Background grid (very subtle, instrument-panel feel)
      ctx.strokeStyle = "#141414";
      ctx.lineWidth = 0.75;
      for (let gx = 0; gx < w; gx += CV_GRID_STEP) {
        ctx.beginPath(); ctx.moveTo(gx, 0); ctx.lineTo(gx, h); ctx.stroke();
      }
      for (let gy = 0; gy < h; gy += CV_GRID_STEP) {
        ctx.beginPath(); ctx.moveTo(0, gy); ctx.lineTo(w, gy); ctx.stroke();
      }

      // 2 ── Concentric semicircular arcs (PI → 2*PI, opening upward)
      ctx.lineWidth = 0.75;
      for (let ri = 1; ri <= CV_ARC_COUNT; ri++) {
        const r = (R * ri) / CV_ARC_COUNT;
        ctx.beginPath();
        ctx.arc(cx, cy, r, Math.PI, Math.PI * 2, false);
        ctx.strokeStyle = ri === CV_ARC_COUNT ? "#252525" : "#1C1C1C";
        ctx.stroke();
      }

      // 3 ── Radial spokes from origin
      ctx.strokeStyle = "#1A1A1A";
      ctx.lineWidth = 0.75;
      for (let k = 0; k <= CV_SPOKE_COUNT; k++) {
        const ang = Math.PI + (k / CV_SPOKE_COUNT) * Math.PI;
        ctx.beginPath();
        ctx.moveTo(cx, cy);
        ctx.lineTo(cx + Math.cos(ang) * R, cy + Math.sin(ang) * R);
        ctx.stroke();
      }

      // 4 ── Precompute blip canvas positions
      const blipX = new Float32Array(CV_BLIPS.length);
      const blipY = new Float32Array(CV_BLIPS.length);
      const blipAng = new Float32Array(CV_BLIPS.length);
      for (let i = 0; i < CV_BLIPS.length; i++) {
        const [nr, na] = CV_BLIPS[i];
        const ang = Math.PI + na * Math.PI;
        const r = nr * R;
        blipX[i] = cx + Math.cos(ang) * r;
        blipY[i] = cy + Math.sin(ang) * r;
        blipAng[i] = ang;
      }

      // 5 ── Sweep (animated only)
      if (!reduced) {
        // Trailing wedge: multi-slice for soft atmospheric fade
        const steps = 14;
        for (let i = 0; i < steps; i++) {
          const f0 = i / steps;
          const f1 = (i + 1) / steps;
          const a0 = Math.max(sweepAngle - f1 * WEDGE_RAD, Math.PI);
          const a1 = Math.min(sweepAngle - f0 * WEDGE_RAD, Math.PI * 2);
          if (a0 >= a1) continue;
          ctx.beginPath();
          ctx.moveTo(cx, cy);
          ctx.arc(cx, cy, R, a0, a1, false);
          ctx.closePath();
          ctx.fillStyle = `rgba(46,91,255,${(1 - f0) * 0.2})`;
          ctx.fill();
        }

        // Optional secondary echo wedge
        const echoOff = WEDGE_RAD * 0.55;
        const ea0 = Math.max(sweepAngle - WEDGE_RAD - echoOff, Math.PI);
        const ea1 = Math.min(sweepAngle - echoOff, Math.PI * 2);
        if (ea0 < ea1) {
          ctx.beginPath();
          ctx.moveTo(cx, cy);
          ctx.arc(cx, cy, R * 0.88, ea0, ea1, false);
          ctx.closePath();
          ctx.fillStyle = "rgba(46,91,255,0.04)";
          ctx.fill();
        }

        // Sweep arm – bright blue line
        ctx.beginPath();
        ctx.moveTo(cx, cy);
        ctx.lineTo(cx + Math.cos(sweepAngle) * R, cy + Math.sin(sweepAngle) * R);
        ctx.strokeStyle = "rgba(46,91,255,0.92)";
        ctx.lineWidth = 1.5;
        ctx.shadowColor = "#2E5BFF";
        ctx.shadowBlur = 10;
        ctx.stroke();
        ctx.shadowBlur = 0;

        // Blip hit-test + decay: retrigger every sweep pass; shortest angular gap
        for (let i = 0; i < CV_BLIPS.length; i++) {
          let ad = Math.abs(sweepAngle - blipAng[i]);
          if (ad > Math.PI) ad = 2 * Math.PI - ad;
          if (ad < HIT_RAD) blipDecay[i] = 1;
          blipDecay[i] = Math.max(0, blipDecay[i] - dt * 2.2);
        }
      }

      // 6 ── Blips
      for (let i = 0; i < CV_BLIPS.length; i++) {
        const d = reduced ? 0 : blipDecay[i];
        const bx = blipX[i];
        const by = blipY[i];

        if (d > 0.01 && !reduced) {
          // Radial glow halo on hit
          const g = ctx.createRadialGradient(bx, by, 0, bx, by, 14);
          g.addColorStop(0, `rgba(46,91,255,${d * 0.5})`);
          g.addColorStop(1, "transparent");
          ctx.fillStyle = g;
          ctx.beginPath();
          ctx.arc(bx, by, 14, 0, Math.PI * 2);
          ctx.fill();
        }

        ctx.beginPath();
        ctx.arc(bx, by, 1.8 + d * 1.6, 0, Math.PI * 2);
        ctx.fillStyle = d > 0.05 && !reduced
          ? `rgba(220,230,255,${0.35 + d * 0.6})`
          : "rgba(68,68,68,0.75)";
        ctx.fill();
      }

      raf = requestAnimationFrame(draw);
    };

    raf = requestAnimationFrame(draw);
    return () => { cancelled = true; cancelAnimationFrame(raf); };
  }, [reduced]);

  return (
    <div className="mt-5">
      <div
        className="relative overflow-hidden rounded-[18px]"
        style={{ background: "#0a0a0a", border: "1px solid #1f1f1f" }}
      >
        {reduced ? (
          <div
            className="flex h-[210px] items-end justify-center"
            style={{
              background:
                "radial-gradient(ellipse 80% 55% at 50% 100%, rgba(46,91,255,0.12), transparent 60%)",
            }}
            aria-hidden
          />
        ) : (
          <canvas ref={ref} className="block h-[210px] w-full" aria-hidden />
        )}
      </div>
    </div>
  );
}

// ─── Integrations tuning knobs ───────────────────────────────────────────────
const INT_NODE_COUNT = 24;
const INT_SPRING_K = 140;
const INT_DAMPING = 7.5;
const INT_NOISE_AMP = 10;
const INT_REPULSION = 320;
const INT_LINE_ALPHA = 0.34;
const INT_HUB_BREATHE = 0.035; // ±3.5% scale pulse

// Jewel-tone palette (saturated, not neon)
const INT_COLORS = [
  "#00BCD4", "#26C6DA", "#FF7043", "#FF8F00",
  "#AB47BC", "#7B1FA2", "#E91E63", "#F06292",
  "#4CAF50", "#66BB6A", "#5C6BC0", "#3F51B5",
  "#00E5FF", "#FF4081", "#FFCA28", "#FF6D00",
] as const;

type IntNode = {
  baseAng: number; baseRad: number; phase: number; driftRate: number;
  col: string; size: number; x: number; y: number; vx: number; vy: number;
};

function makeIntNodes(): IntNode[] {
  return Array.from({ length: INT_NODE_COUNT }, (_, i) => {
    // Golden-angle distribution for even angular spread
    const baseAng = (i * 2.399963) % (Math.PI * 2);
    const baseRad = Math.min(0.35 + ((i * 7) % 13) * 0.05, 0.82);
    return {
      baseAng,
      baseRad,
      phase: (i * 1.618) % (Math.PI * 2),
      driftRate: 0.15 + (i % 5) * 0.06,
      col: INT_COLORS[i % INT_COLORS.length],
      size: 2.2 + (i % 3) * 0.7,
      x: 0, y: 0, vx: 0, vy: 0,
    };
  });
}

function ExperienceIntegrations({ reduced }: { reduced: boolean }) {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const c = ref.current;
    if (!c) return;
    const ctx = c.getContext("2d");
    if (!ctx) return;
    let raf = 0;
    let cancelled = false;
    let lastTs = 0;
    let simTime = 0;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    const nodes = makeIntNodes();
    let initialized = false;

    const draw = (ts: number) => {
      if (cancelled) return;
      const dt = reduced ? 0 : Math.min((ts - (lastTs || ts)) / 1000, 0.05);
      lastTs = ts;
      simTime += dt;

      const w = c.clientWidth;
      const h = c.clientHeight;
      if (w < 8) { raf = requestAnimationFrame(draw); return; }
      c.width = w * dpr;
      c.height = h * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      ctx.clearRect(0, 0, w, h);

      const hubX = w * 0.5;
      const hubY = h * 0.5;
      const scale = Math.min(w, h) * 0.38;

      // Place nodes at base positions on first frame
      if (!initialized) {
        initialized = true;
        for (const n of nodes) {
          const r = n.baseRad * scale;
          n.x = hubX + Math.cos(n.baseAng) * r;
          n.y = hubY + Math.sin(n.baseAng) * r;
        }
      }

      // Spring physics (skip in reduced mode)
      if (!reduced && dt > 0) {
        for (let i = 0; i < nodes.length; i++) {
          const n = nodes[i];
          // Slowly drifting target position
          const tAng = n.baseAng + Math.sin(simTime * n.driftRate + n.phase) * 0.25;
          const tRad = n.baseRad * scale + Math.sin(simTime * n.driftRate * 0.7 + n.phase + 1) * INT_NOISE_AMP;
          const tx = hubX + Math.cos(tAng) * tRad;
          const ty = hubY + Math.sin(tAng) * tRad;

          // Spring toward target
          n.vx += (INT_SPRING_K * (tx - n.x) - INT_DAMPING * n.vx) * dt;
          n.vy += (INT_SPRING_K * (ty - n.y) - INT_DAMPING * n.vy) * dt;

          // Weak repulsion against nearby nodes only (trivial reject: d² check)
          for (let j = i + 1; j < nodes.length; j++) {
            const m = nodes[j];
            const dx = n.x - m.x;
            const dy = n.y - m.y;
            const d2 = dx * dx + dy * dy;
            const minD = 20;
            if (d2 < minD * minD && d2 > 0.01) {
              const inv = INT_REPULSION / (d2 * Math.sqrt(d2)) * dt;
              n.vx += dx * inv; n.vy += dy * inv;
              m.vx -= dx * inv; m.vy -= dy * inv;
            }
          }
        }

        const MAX_V = 80;
        for (const n of nodes) {
          n.x += n.vx * dt;
          n.y += n.vy * dt;
          const v2 = n.vx * n.vx + n.vy * n.vy;
          if (v2 > MAX_V * MAX_V) {
            const inv = MAX_V / Math.sqrt(v2);
            n.vx *= inv;
            n.vy *= inv;
          }
        }

        // Keep nodes in an annulus around hub (stable “orbit” without drifting off-canvas)
        const minR = scale * 0.22;
        const maxR = scale * 0.88;
        for (const n of nodes) {
          const dx = n.x - hubX;
          const dy = n.y - hubY;
          const dist = Math.hypot(dx, dy) || 1;
          if (dist < minR) {
            const k = minR / dist;
            n.x = hubX + dx * k;
            n.y = hubY + dy * k;
            n.vx *= 0.3;
            n.vy *= 0.3;
          } else if (dist > maxR) {
            const k = maxR / dist;
            n.x = hubX + dx * k;
            n.y = hubY + dy * k;
            n.vx *= 0.4;
            n.vy *= 0.4;
          }
        }
      }

      // Hub-to-node lines with line shimmer
      for (let i = 0; i < nodes.length; i++) {
        const n = nodes[i];
        const shimmer = reduced
          ? INT_LINE_ALPHA
          : INT_LINE_ALPHA + 0.08 * Math.sin(simTime * 1.2 + i * 0.7);
        ctx.beginPath();
        ctx.moveTo(hubX, hubY);
        ctx.lineTo(n.x, n.y);
        ctx.strokeStyle = `rgba(50,50,50,${shimmer})`;
        ctx.lineWidth = 0.7;
        ctx.stroke();
      }

      // Peripheral nodes
      for (let i = 0; i < nodes.length; i++) {
        const n = nodes[i];
        const pulse = reduced ? 0.7 : 0.6 + 0.4 * Math.sin(simTime * 1.8 + i * 0.6);
        ctx.beginPath();
        ctx.arc(n.x, n.y, n.size * pulse, 0, Math.PI * 2);
        ctx.fillStyle = n.col;
        ctx.globalAlpha = 0.72 + pulse * 0.2;
        ctx.fill();
        ctx.globalAlpha = 1;
      }

      // Central hub with breathing glow
      const breath = reduced ? 1 : 1 + INT_HUB_BREATHE * Math.sin(simTime * 0.9);
      const hubR = 5 * breath;
      const hg = ctx.createRadialGradient(hubX, hubY, 0, hubX, hubY, hubR * 3.5);
      hg.addColorStop(0, "rgba(255,255,255,0.9)");
      hg.addColorStop(0.4, "rgba(200,210,255,0.18)");
      hg.addColorStop(1, "transparent");
      ctx.fillStyle = hg;
      ctx.beginPath();
      ctx.arc(hubX, hubY, hubR * 3.5, 0, Math.PI * 2);
      ctx.fill();
      // Bright core dot
      ctx.beginPath();
      ctx.arc(hubX, hubY, 3, 0, Math.PI * 2);
      ctx.fillStyle = "#FFFFFF";
      ctx.fill();

      raf = requestAnimationFrame(draw);
    };

    raf = requestAnimationFrame(draw);
    return () => { cancelled = true; cancelAnimationFrame(raf); };
  }, [reduced]);

  return (
    <div className="mt-5">
      <div
        className="relative overflow-hidden rounded-[18px]"
        style={{ background: "#020202", border: `1px solid ${LEGACY.borderGold}` }}
      >
        {reduced ? (
          <div className="flex h-[220px] items-center justify-center opacity-55" aria-hidden>
            <div className="relative h-24 w-24 rounded-full" style={{ border: `1px solid ${LEGACY.borderGold}` }}>
              <span className="absolute left-1/2 top-1/2 h-2.5 w-2.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white" />
            </div>
          </div>
        ) : (
          <canvas ref={ref} className="block h-[220px] w-full" aria-hidden />
        )}
      </div>
      <div className="mt-4 flex gap-10">
        <div>
          <p
            className="font-[family-name:var(--font-display)] text-[30px] font-extrabold leading-none"
            style={{ color: LEGACY.goldLight }}
          >
            200+
          </p>
          <p
            className="mt-1.5 font-[family-name:var(--font-sans)] text-[10px] font-bold uppercase tracking-[0.2em]"
            style={{ color: LEGACY.textMuted }}
          >
            Integrations
          </p>
        </div>
        <div>
          <p
            className="font-[family-name:var(--font-display)] text-[30px] font-extrabold leading-none"
            style={{ color: LEGACY.goldLight }}
          >
            Day 1
          </p>
          <p
            className="mt-1.5 font-[family-name:var(--font-sans)] text-[10px] font-bold uppercase tracking-[0.18em]"
            style={{ color: LEGACY.textMuted }}
          >
            Time to Value
          </p>
        </div>
      </div>
    </div>
  );
}
