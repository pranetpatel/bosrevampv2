"use client";

import type { CSSProperties } from "react";
import { useEffect, useRef } from "react";
import { usePrefersReducedMotion } from "@/components/use-prefers-reduced-motion";

type FrictionNode = {
  id: string;
  label: string;
  sub?: string;
  x: number;
  y: number;
  r: number;
  rx: number;
  ry: number;
  phase: number;
  tone: "hot" | "magenta" | "cyan";
};

const NODES: FrictionNode[] = [
  { id: "f1", label: "Fragmented tools", sub: "Lost context", x: 11, y: 24, r: 15, rx: 1.05, ry: 0.88, phase: 0.2, tone: "hot" },
  { id: "f2", label: "Workflow drift", sub: "Same bridges weekly", x: 84, y: 52, r: 10, rx: 1.0, ry: 1.0, phase: 3.0, tone: "hot" },
  { id: "f3", label: "Invisible work", sub: "Never surfaces to leadership", x: 48, y: 62, r: 12, rx: 1.2, ry: 0.95, phase: 2.4, tone: "cyan" },
  { id: "f4", label: "Agent sprawl", sub: "Demos without a spine", x: 72, y: 18, r: 13, rx: 0.92, ry: 1.1, phase: 1.1, tone: "magenta" },
  { id: "f5", label: "Permission fog", sub: "Who can act is unclear", x: 28, y: 48, r: 11, rx: 0.78, ry: 1.15, phase: 0.6, tone: "magenta" },
  { id: "f6", label: "Metric theater", sub: "Activity hides outcomes", x: 58, y: 35, r: 10, rx: 1.1, ry: 0.9, phase: 1.8, tone: "magenta" },
];

const toneRing: Record<FrictionNode["tone"], string> = {
  hot: "rgba(254, 55, 94, 0.75)",
  magenta: "rgba(218, 52, 241, 0.75)",
  cyan: "rgba(4, 209, 224, 0.75)",
};

const toneGlow: Record<FrictionNode["tone"], string> = {
  hot: "rgba(254, 55, 94, 0.45)",
  magenta: "rgba(218, 52, 241, 0.4)",
  cyan: "rgba(4, 209, 224, 0.4)",
};

const toneLabel: Record<FrictionNode["tone"], string> = {
  hot: "text-[var(--hot)]",
  magenta: "text-[var(--magenta)]",
  cyan: "text-[var(--cyan)]",
};

type Props = {
  cleared: ReadonlySet<string>;
  onClear: (id: string) => void;
};

export function GapFrictionDissolve({ cleared, onClear }: Props) {
  const reduced = usePrefersReducedMotion();
  const shiftRefs = useRef<Map<string, HTMLDivElement | null>>(new Map());
  const clearedRef = useRef(cleared);

  useEffect(() => {
    clearedRef.current = cleared;
  }, [cleared]);

  useEffect(() => {
    if (reduced) return;
    let cancelled = false;
    const t0 = performance.now();

    const tick = () => {
      if (cancelled) return;
      const t = (performance.now() - t0) / 1000;
      for (const n of NODES) {
        if (clearedRef.current.has(n.id)) continue;
        const el = shiftRefs.current.get(n.id);
        if (!el) continue;
        const ox = Math.sin(t * n.rx + n.phase) * 22;
        const oy = Math.cos(t * n.ry + n.phase * 0.9) * 16;
        el.style.transform = `translate(${ox}px, ${oy}px)`;
      }
      requestAnimationFrame(tick);
    };

    requestAnimationFrame(tick);
    return () => {
      cancelled = true;
    };
  }, [reduced]);

  const remaining = NODES.length - cleared.size;

  return (
    <div
      className="panel-vignette relative aspect-[16/10] w-full shrink-0 overflow-hidden rounded-2xl border border-white/10 shadow-[0_40px_120px_rgba(0,0,0,0.55)] min-h-[min(52vh,640px)] md:aspect-auto md:min-h-[min(56svh,720px)] md:max-h-[min(78svh,820px)]"
      role="img"
      aria-label="Interactive visualization of operational friction. Click each glowing node to dissolve it."
    >
      <div
        className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_38%,rgba(26,83,253,0.14),transparent_58%),linear-gradient(165deg,#0a1528_0%,#140a24_42%,#0a0a0a_100%)]"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.35]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 20% 30%, rgba(255,255,255,0.04) 0, transparent 1px), radial-gradient(circle at 78% 22%, rgba(255,255,255,0.035) 0, transparent 1px)",
          backgroundSize: "120px 120px, 90px 90px",
        }}
        aria-hidden
      />
      <svg className="pointer-events-none absolute inset-0 h-full w-full opacity-[0.14]" aria-hidden>
        <line x1="12%" y1="78%" x2="88%" y2="22%" stroke="url(#gapL1)" strokeWidth="0.5" />
        <line x1="22%" y1="18%" x2="70%" y2="70%" stroke="url(#gapL1)" strokeWidth="0.5" />
        <defs>
          <linearGradient id="gapL1" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#1a53fd" stopOpacity="0" />
            <stop offset="50%" stopColor="#da34f1" stopOpacity="0.5" />
            <stop offset="100%" stopColor="#04d1e0" stopOpacity="0" />
          </linearGradient>
        </defs>
      </svg>

      <div className="pointer-events-none absolute left-0 right-0 top-4 z-[2] flex flex-col items-center px-6 text-center md:top-10">
        <p className="max-w-xl bg-gradient-to-r from-[var(--magenta)] via-[var(--orchid)] to-[var(--cyan)] bg-clip-text font-[family-name:var(--font-display)] text-[clamp(1.1rem,3.5vw,2.25rem)] font-semibold leading-tight tracking-tight text-transparent">
          Operational weight
        </p>
        <p className="mt-2 hidden sm:block max-w-md font-[family-name:var(--font-sans)] text-sm leading-snug text-white/48 md:text-base">
          Clear each source of drag — click the nodes or the cards below.
        </p>
      </div>

      <div className="absolute inset-x-0 bottom-0 top-10 sm:top-0 z-[3]">
        {NODES.map((n) => {
          const gone = cleared.has(n.id);
          return (
            <div
              key={n.id}
              className={[
                "absolute -translate-x-1/2 -translate-y-1/2",
                gone ? "pointer-events-none" : "cursor-crosshair",
              ].join(" ")}
              style={{ left: `${n.x}%`, top: `${n.y}%` }}
              onClick={() => {
                if (!gone) onClear(n.id);
              }}
            >
              <div
                ref={(el) => {
                  shiftRefs.current.set(n.id, el);
                }}
                className={[
                  "group/node flex flex-col items-center transition duration-500 ease-out will-change-transform",
                  gone ? "pointer-events-none scale-50 opacity-0 blur-sm" : "opacity-100",
                ].join(" ")}
              >
                <button
                  type="button"
                  onClick={() => onClear(n.id)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") {
                      e.preventDefault();
                      onClear(n.id);
                    }
                  }}
                  className="relative flex h-[var(--sz)] w-[var(--sz)] cursor-pointer items-center justify-center rounded-full border-2 bg-black/25 shadow-[0_0_28px_var(--glow)] outline-none transition hover:scale-110 focus-visible:ring-2 focus-visible:ring-[var(--orchid)] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0a0a0a] md:scale-[1.08]"
                  style={
                    {
                      "--sz": `${Math.round(n.r * 2.4)}px`,
                      borderColor: toneRing[n.tone],
                      boxShadow: `0 0 32px ${toneGlow[n.tone]}, inset 0 0 18px rgba(0,0,0,0.5)`,
                    } as CSSProperties
                  }
                  aria-pressed={gone}
                  aria-label={
                    n.sub ? `Dissolve: ${n.label}. ${n.sub}` : `Dissolve: ${n.label}`
                  }
                >
                  <span
                    className="absolute inset-2 rounded-full opacity-80 group-hover/node:opacity-100"
                    style={{
                      background: `radial-gradient(circle at 35% 30%, ${toneGlow[n.tone]}, transparent 65%)`,
                    }}
                    aria-hidden
                  />
                </button>
                <span
                  className={[
                    "mt-2 max-w-[11rem] text-center font-[family-name:var(--font-ui)] text-[10px] font-semibold uppercase leading-tight tracking-[0.14em] md:max-w-[13rem] md:text-[11px]",
                    toneLabel[n.tone],
                  ].join(" ")}
                >
                  {n.label}
                </span>
                {n.sub ? (
                  <span
                    className={[
                      "mt-0.5 max-w-[11rem] text-center font-[family-name:var(--font-ui)] text-[9px] font-medium uppercase tracking-[0.12em] text-white/42 transition-opacity duration-200 md:max-w-[13rem]",
                      reduced
                        ? "opacity-100"
                        : "opacity-100 max-md:opacity-100 md:opacity-0 md:group-hover/node:opacity-100 md:group-focus-within/node:opacity-100",
                    ].join(" ")}
                    aria-hidden
                  >
                    {n.sub}
                  </span>
                ) : null}
              </div>
            </div>
          );
        })}
      </div>

      <p className="pointer-events-none absolute bottom-5 left-0 right-0 z-[2] text-center font-[family-name:var(--font-ui)] text-[9px] font-semibold uppercase tracking-[0.22em] text-white/28 md:bottom-7 md:text-[10px]">
        {reduced ? "Tap a node to clear it" : "Click each node to dissolve it"}
      </p>

      {remaining === 0 ? (
        <p className="pointer-events-none absolute bottom-14 left-0 right-0 z-[2] text-center font-[family-name:var(--font-display)] text-sm font-semibold tracking-wide text-[var(--cyan)]/90 md:bottom-16 md:text-base">
          Operational weight cleared
        </p>
      ) : null}
    </div>
  );
}
