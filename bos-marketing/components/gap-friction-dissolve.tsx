"use client";

import type { CSSProperties } from "react";
import { useEffect, useRef, useState } from "react";
import { usePrefersReducedMotion } from "@/components/use-prefers-reduced-motion";

type FrictionNode = {
  id: string;
  label: string;
  desc: string;
  x: number;
  y: number;
  r: number;
  rx: number;
  ry: number;
  phase: number;
  tone: "hot" | "magenta" | "cyan";
};

const NODES: FrictionNode[] = [
  { id: "f1", label: "Fragmented tools", desc: "Every handoff loses fidelity  -  context dies at the boundary.", x: 11, y: 24, r: 15, rx: 1.05, ry: 0.88, phase: 0.2, tone: "hot" },
  { id: "f2", label: "Workflow drift", desc: "Builders and operators rebuild the same bridges weekly.", x: 84, y: 52, r: 10, rx: 1.0, ry: 1.0, phase: 3.0, tone: "hot" },
  { id: "f3", label: "Invisible work", desc: "The real effort never lands where leadership looks.", x: 48, y: 62, r: 12, rx: 1.2, ry: 0.95, phase: 2.4, tone: "cyan" },
  { id: "f4", label: "Agent sprawl", desc: "Clever demos without a spine become another inbox.", x: 72, y: 18, r: 13, rx: 0.92, ry: 1.1, phase: 1.1, tone: "magenta" },
  { id: "f5", label: "Permission fog", desc: "Who can act  -  safely  -  is unclear when systems disagree.", x: 28, y: 48, r: 11, rx: 0.78, ry: 1.15, phase: 0.6, tone: "magenta" },
  { id: "f6", label: "Metric theater", desc: "Dashboards celebrate activity while outcomes slip.", x: 58, y: 35, r: 10, rx: 1.1, ry: 0.9, phase: 1.8, tone: "magenta" },
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

const toneBorder: Record<FrictionNode["tone"], string> = {
  hot: "border-[rgba(254,55,94,0.35)]",
  magenta: "border-[rgba(218,52,241,0.35)]",
  cyan: "border-[rgba(4,209,224,0.35)]",
};

type Props = {
  cleared: ReadonlySet<string>;
  onClear: (id: string) => void;
};

export function GapFrictionDissolve({ cleared, onClear }: Props) {
  const reduced = usePrefersReducedMotion();
  const shiftRefs = useRef<Map<string, HTMLDivElement | null>>(new Map());
  const [activeCards, setActiveCards] = useState<ReadonlySet<string>>(() => new Set());
  const activeCardsRef = useRef(activeCards);
  const [everClicked, setEverClicked] = useState<ReadonlySet<string>>(() => new Set());
  const [topCardId, setTopCardId] = useState<string | null>(null);

  useEffect(() => {
    activeCardsRef.current = activeCards;
  }, [activeCards]);

  useEffect(() => {
    if (reduced) return;
    let cancelled = false;
    const t0 = performance.now();

    const tick = () => {
      if (cancelled) return;
      const t = (performance.now() - t0) / 1000;
      for (const n of NODES) {
        if (activeCardsRef.current.has(n.id)) continue; // freeze when popup open
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

  const allClicked = everClicked.size === NODES.length;

  const handleNodeClick = (id: string) => {
    setEverClicked((prev) => {
      if (prev.has(id)) return prev;
      const next = new Set(prev);
      next.add(id);
      return next;
    });
    setTopCardId(id);
    setActiveCards((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  };

  const handleDismiss = (id: string) => {
    onClear(id);
    setActiveCards((prev) => {
      const next = new Set(prev);
      next.delete(id);
      return next;
    });
  };

  const handleClose = (id: string) => {
    setActiveCards((prev) => {
      const next = new Set(prev);
      next.delete(id);
      return next;
    });
  };

  return (
    <div
      className="panel-vignette relative w-full flex-1 overflow-hidden rounded-2xl border border-white/10 shadow-[0_40px_120px_rgba(0,0,0,0.55)]"
      role="img"
      aria-label="Interactive visualization of operational friction. Click each glowing node to reveal its card."
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
          Click the nodes to reveal each source of drag.
        </p>
      </div>

      <div className="absolute inset-x-0 bottom-0 top-10 sm:top-0 z-[3]">
        {NODES.map((n) => {
          const gone = cleared.has(n.id);
          const isActive = activeCards.has(n.id);

          // Popup positioning: flip above/below based on y, anchor left/right based on x
          const popupAbove = n.y > 40;
          const popupRight = n.x < 50;

          return (
            <div
              key={n.id}
              className="absolute -translate-x-1/2 -translate-y-1/2"
              style={{ left: `${n.x}%`, top: `${n.y}%` }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Expanded hit zone */}
              <div
                className="absolute -translate-x-1/2 -translate-y-1/2 cursor-pointer rounded-full"
                style={{
                  left: "50%",
                  top: "50%",
                  width: `${n.r * 6}px`,
                  height: `${n.r * 6}px`,
                }}
                onClick={() => handleNodeClick(n.id)}
                aria-label={`Reveal: ${n.label}`}
              />

              <div
                ref={(el) => {
                  shiftRefs.current.set(n.id, el);
                }}
                className={[
                  "group/node flex flex-col items-center transition duration-500 ease-out will-change-transform",
                  isActive ? "grayscale saturate-0 opacity-30" : "",
                ].join(" ")}
              >
                <button
                  type="button"
                  onClick={() => handleNodeClick(n.id)}
                  className="relative flex h-[var(--sz)] w-[var(--sz)] cursor-pointer items-center justify-center rounded-full border-2 bg-black/25 outline-none transition hover:scale-110 focus-visible:ring-2 focus-visible:ring-[var(--orchid)] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0a0a0a] md:scale-[1.08]"
                  style={
                    {
                      "--sz": `${Math.round(n.r * 2.4)}px`,
                      borderColor: toneRing[n.tone],
                      boxShadow: `0 0 32px ${toneGlow[n.tone]}, inset 0 0 18px rgba(0,0,0,0.5)`,
                    } as CSSProperties
                  }
                  aria-pressed={isActive}
                  aria-label={`Reveal: ${n.label}`}
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
              </div>

              {/* Popup card */}
              {isActive && (
                <div
                  className={[
                    "absolute w-56 pointer-events-auto",
                    n.id === topCardId ? "z-[30]" : "z-[10]",
                    popupAbove ? "bottom-[calc(100%+0.75rem)]" : "top-[calc(100%+0.75rem)]",
                    popupRight ? "left-0 -translate-x-[10%]" : "right-0 translate-x-[10%]",
                  ].join(" ")}
                  style={{
                    animation: "frictionCardIn 0.22s cubic-bezier(0.34,1.56,0.64,1) both",
                  }}
                  onClick={(e) => e.stopPropagation()}
                >
                  <div
                    className={[
                      "relative rounded-xl border bg-[#0e0e18]/95 p-4 shadow-[0_16px_48px_rgba(0,0,0,0.7)] backdrop-blur-md",
                      toneBorder[n.tone],
                    ].join(" ")}
                  >
                    {/* pointer arrow */}
                    <span
                      className={[
                        "absolute h-2.5 w-2.5 rotate-45 border bg-[#0e0e18]",
                        toneBorder[n.tone],
                        popupAbove
                          ? "bottom-[-6px] border-t-0 border-l-0"
                          : "top-[-6px] border-b-0 border-r-0",
                        popupRight ? "left-6" : "right-6",
                      ].join(" ")}
                      aria-hidden
                    />
                    <div className="flex items-start justify-between gap-2">
                      <span
                        className={[
                          "h-1.5 w-1.5 mt-1 shrink-0 rounded-full shadow-[0_0_8px_currentColor]",
                          n.tone === "hot"
                            ? "bg-[var(--hot)]"
                            : n.tone === "magenta"
                            ? "bg-[var(--magenta)]"
                            : "bg-[var(--cyan)]",
                        ].join(" ")}
                        aria-hidden
                      />
                      <div className="flex-1 min-w-0">
                        <p className="font-[family-name:var(--font-sans)] text-[13px] font-semibold leading-snug text-white">
                          {n.label}
                        </p>
                        <p className="mt-1 font-[family-name:var(--font-sans)] text-[11px] leading-relaxed text-white/55">
                          {n.desc}
                        </p>
                      </div>
                      <button
                        type="button"
                        onClick={() => handleClose(n.id)}
                        className="shrink-0 rounded p-0.5 text-white/30 hover:text-white/70 transition"
                        aria-label="Close"
                      >
                        <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden>
                          <path d="M1 1l10 10M11 1L1 11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                        </svg>
                      </button>
                    </div>
                    <button
                      type="button"
                      onClick={() => handleDismiss(n.id)}
                      className={[
                        "mt-3 w-full rounded-lg py-1.5 text-[11px] font-semibold uppercase tracking-[0.12em] transition",
                        n.tone === "hot"
                          ? "bg-[rgba(254,55,94,0.12)] text-[var(--hot)] hover:bg-[rgba(254,55,94,0.22)]"
                          : n.tone === "magenta"
                          ? "bg-[rgba(218,52,241,0.12)] text-[var(--magenta)] hover:bg-[rgba(218,52,241,0.22)]"
                          : "bg-[rgba(4,209,224,0.12)] text-[var(--cyan)] hover:bg-[rgba(4,209,224,0.22)]",
                      ].join(" ")}
                    >
                      Dismiss
                    </button>
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>

      <p className="pointer-events-none absolute bottom-5 left-0 right-0 z-[2] text-center font-[family-name:var(--font-ui)] text-[9px] font-semibold uppercase tracking-[0.22em] text-white/28 md:bottom-7 md:text-[10px]">
        {reduced ? "Tap a node to reveal it" : "Click each node to reveal the drag"}
      </p>

      {allClicked && (
        <div
          className="pointer-events-none absolute inset-x-0 bottom-14 z-[20] flex justify-center px-4 md:bottom-16"
          style={{ animation: "clearedBannerIn 0.45s cubic-bezier(0.34,1.56,0.64,1) both" }}
        >
          <div className="flex items-center gap-3 rounded-full border border-[var(--cyan)]/35 bg-[#050e1a]/90 px-5 py-3 shadow-[0_0_40px_rgba(4,209,224,0.25),0_8px_32px_rgba(0,0,0,0.6)] backdrop-blur-md">
            <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[var(--cyan)]/15">
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden>
                <path d="M2 6.5l2.8 2.8L10 3.5" stroke="var(--cyan)" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </span>
            <span className="font-[family-name:var(--font-display)] text-sm font-semibold tracking-wide text-[var(--cyan)]">
              Operational weight cleared
            </span>
          </div>
        </div>
      )}

      <style>{`
        @keyframes frictionCardIn {
          from { opacity: 0; transform: scale(0.88) translateY(6px); }
          to   { opacity: 1; transform: scale(1) translateY(0); }
        }
        @keyframes clearedBannerIn {
          from { opacity: 0; transform: translateY(16px) scale(0.92); }
          to   { opacity: 1; transform: translateY(0) scale(1); }
        }
      `}</style>
    </div>
  );
}
