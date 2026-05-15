"use client";

import { useRef, useEffect } from "react";
import { audienceCards, trustBadges } from "@/lib/legacy-parity-content";

const BADGE_ICONS: Record<string, React.ReactNode> = {
  "Encryption in transit": (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden>
      <rect x="2.5" y="6" width="9" height="6.5" rx="1.5" stroke="currentColor" strokeWidth="1.2" />
      <path d="M4.5 6V4.5a2.5 2.5 0 0 1 5 0V6" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
      <circle cx="7" cy="9.25" r="1" fill="currentColor" />
    </svg>
  ),
  "Tenant isolation": (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden>
      <rect x="1.5" y="8.5" width="11" height="3" rx="1" stroke="currentColor" strokeWidth="1.2" />
      <rect x="3" y="5" width="8" height="3" rx="1" stroke="currentColor" strokeWidth="1.2" />
      <rect x="4.5" y="1.5" width="5" height="3" rx="1" stroke="currentColor" strokeWidth="1.2" />
    </svg>
  ),
  "Audit-friendly trails": (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden>
      <rect x="2" y="1.5" width="10" height="11" rx="1.5" stroke="currentColor" strokeWidth="1.2" />
      <line x1="4.5" y1="5" x2="9.5" y2="5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
      <line x1="4.5" y1="7.5" x2="9.5" y2="7.5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
      <line x1="4.5" y1="10" x2="7.5" y2="10" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
    </svg>
  ),
  "Role-based access": (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden>
      <circle cx="5.5" cy="5" r="2.5" stroke="currentColor" strokeWidth="1.2" />
      <path d="M1.5 12.5c0-2.21 1.79-4 4-4s4 1.79 4 4" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
      <circle cx="10.5" cy="7" r="1.5" stroke="currentColor" strokeWidth="1.1" />
      <line x1="10.5" y1="8.5" x2="10.5" y2="10" stroke="currentColor" strokeWidth="1.1" strokeLinecap="round" />
      <line x1="9.5" y1="10" x2="11.5" y2="10" stroke="currentColor" strokeWidth="1.1" strokeLinecap="round" />
    </svg>
  ),
  "Human approvals": (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden>
      <circle cx="7" cy="7" r="5.5" stroke="currentColor" strokeWidth="1.2" />
      <path d="M4.5 7l1.8 1.8L9.5 5" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
  "Agent guardrails": (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden>
      <path d="M7 1.5L2 3.5v4c0 2.5 2.2 4.7 5 5.5 2.8-.8 5-3 5-5.5v-4L7 1.5z" stroke="currentColor" strokeWidth="1.2" strokeLinejoin="round" />
      <path d="M4.5 7l1.8 1.8L9.5 5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
  "SOC2-ready posture": (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden>
      <circle cx="7" cy="7" r="5.5" stroke="currentColor" strokeWidth="1.2" />
      <path d="M5 7l1.5 1.5L9.5 5" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M7 1.5v1M7 11.5v1M1.5 7h1M11.5 7h1" stroke="currentColor" strokeWidth="1.1" strokeLinecap="round" />
    </svg>
  ),
  "EU data options": (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden>
      <circle cx="7" cy="7" r="5.5" stroke="currentColor" strokeWidth="1.2" />
      <ellipse cx="7" cy="7" rx="2.5" ry="5.5" stroke="currentColor" strokeWidth="1.1" />
      <line x1="1.5" y1="7" x2="12.5" y2="7" stroke="currentColor" strokeWidth="1.1" strokeLinecap="round" />
      <line x1="2.5" y1="4.5" x2="11.5" y2="4.5" stroke="currentColor" strokeWidth="1" strokeLinecap="round" />
      <line x1="2.5" y1="9.5" x2="11.5" y2="9.5" stroke="currentColor" strokeWidth="1" strokeLinecap="round" />
    </svg>
  ),
};

export function ChapterAudienceSection() {
  const trackRef = useRef<HTMLDivElement>(null);
  const isDragging = useRef(false);
  const startX = useRef(0);
  const scrollLeft = useRef(0);
  const velocity = useRef(0);
  const lastX = useRef(0);
  const rafRef = useRef<number | null>(null);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    // Jump to the middle copy so we can scroll in both directions infinitely
    const initMiddle = () => {
      track.scrollLeft = track.scrollWidth / 3;
    };
    initMiddle();

    // Seamlessly wrap scroll position when approaching either edge
    function wrapScroll() {
      const oneSet = track!.scrollWidth / 3;
      if (track!.scrollLeft < oneSet * 0.15) {
        track!.scrollLeft += oneSet;
      } else if (track!.scrollLeft > oneSet * 1.85) {
        track!.scrollLeft -= oneSet;
      }
    }

    function onPointerDown(e: PointerEvent) {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      isDragging.current = true;
      startX.current = e.clientX;
      lastX.current = e.clientX;
      scrollLeft.current = track!.scrollLeft;
      velocity.current = 0;
      track!.setPointerCapture(e.pointerId);
      track!.style.cursor = "grabbing";
    }

    function onPointerMove(e: PointerEvent) {
      if (!isDragging.current) return;
      const dx = e.clientX - startX.current;
      velocity.current = e.clientX - lastX.current;
      lastX.current = e.clientX;
      track!.scrollLeft = scrollLeft.current - dx;
      wrapScroll();
    }

    function onPointerUp() {
      if (!isDragging.current) return;
      isDragging.current = false;
      track!.style.cursor = "grab";
      let v = -velocity.current * 2;
      function momentum() {
        if (Math.abs(v) < 0.5) return;
        track!.scrollLeft += v;
        wrapScroll();
        v *= 0.92;
        rafRef.current = requestAnimationFrame(momentum);
      }
      momentum();
    }

    track.addEventListener("pointerdown", onPointerDown);
    track.addEventListener("pointermove", onPointerMove);
    track.addEventListener("pointerup", onPointerUp);
    track.addEventListener("pointercancel", onPointerUp);

    return () => {
      track.removeEventListener("pointerdown", onPointerDown);
      track.removeEventListener("pointermove", onPointerMove);
      track.removeEventListener("pointerup", onPointerUp);
      track.removeEventListener("pointercancel", onPointerUp);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  return (
    <section
      id="tribe"
      className="chapter-rule-top section-grain relative z-[1] bg-[var(--surface-dark)] pb-20 pt-10 md:pb-28 md:pt-16"
      aria-label="Who runs on BOS"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_50%_0%,rgba(26,83,253,0.18),transparent_52%)]" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_80%_85%,rgba(218,52,241,0.1),transparent_45%)]" />

      {/* Centered heading */}
      <div className="relative mx-auto max-w-3xl px-6 text-center">
        <h2 className="font-[family-name:var(--font-display)] text-[clamp(2.5rem,6vw,5rem)] font-semibold leading-[1.04] tracking-tight text-white">
          The next generation{" "}
          <span className="bg-gradient-to-r from-[var(--magenta)] via-[var(--orchid)] to-[var(--cyan)] bg-clip-text text-transparent italic">
            of companies.
          </span>
        </h2>
        <p className="mt-5 font-[family-name:var(--font-ui)] text-base leading-relaxed text-white/55">
          Lean teams. Fast operators. Modern businesses that need speed, clarity, and execution
          &mdash; not another dashboard.
        </p>
      </div>

      {/* Horizontally draggable card track */}
      <div
        ref={trackRef}
        data-cursor="drag"
        className="relative mt-12 flex cursor-grab select-none gap-4 overflow-x-auto px-6 pb-4 md:px-14"
        style={{ scrollbarWidth: "none" }}
      >
        {[0, 1, 2].flatMap((copy) =>
          audienceCards.map((c, i) => (
            <article
              key={`${copy}-${i}`}
              aria-hidden={copy !== 1}
              className={`flex w-[clamp(190px,17vw,240px)] shrink-0 flex-col rounded-xl border p-5 backdrop-blur-md transition duration-300 ${
                c.featured
                  ? "border-[var(--orchid)]/40 bg-[var(--orchid)]/[0.08] hover:border-[var(--cyan)]/45"
                  : "border-white/10 bg-white/[0.05] hover:border-[var(--orchid)]/30 hover:bg-[var(--orchid)]/[0.08]"
              }`}
            >
              <p className="text-[9px] font-bold uppercase tracking-[0.18em] text-[var(--cyan)]">
                {c.tag}
              </p>
              <h3 className="mt-3 font-[family-name:var(--font-display)] text-base font-semibold leading-[1.15] text-white">
                {c.hed}
              </h3>
              <p className="mt-2 font-[family-name:var(--font-sans)] text-[12px] leading-relaxed text-white/50">
                {c.txt}
              </p>
              <div className="mt-auto pt-5 flex items-baseline gap-1.5">
                <span className="font-[family-name:var(--font-display)] text-2xl font-semibold text-[var(--orchid)]">
                  {c.metricN}
                </span>
                <span className="text-[10px] font-medium uppercase tracking-[0.12em] text-white/35">
                  {c.metricL}
                </span>
              </div>
              <div className="mt-2 h-[3px] overflow-hidden rounded-full bg-white/10" aria-hidden>
                <div
                  className="h-full rounded-full bg-gradient-to-r from-[var(--magenta)] via-[var(--orchid)] to-[var(--cyan)]"
                  style={{ width: `${c.barPct}%` }}
                />
              </div>
              <p className="mt-2 font-[family-name:var(--font-sans)] text-[10px] italic text-white/30">
                {c.before}
              </p>
            </article>
          ))
        )}
      </div>

      {/* Trust badges */}
      <div className="relative mx-auto mt-14 max-w-6xl border-t border-white/10 px-6 pt-10 md:px-14">
        <p className="mb-6 text-center font-[family-name:var(--font-ui)] text-[10px] font-bold uppercase tracking-[0.22em] text-white/35">
          Enterprise-grade security, built in from day one.
        </p>
        <div className="flex items-center justify-center divide-x divide-white/10">
          {trustBadges.map((b) => (
            <span
              key={b.label}
              className="inline-flex items-center gap-1.5 px-3 text-[10px] text-white/45 md:px-4 md:text-[11px]"
            >
              <span className="text-white/35 flex items-center" aria-hidden>
                {BADGE_ICONS[b.label] ?? b.icon}
              </span>
              {b.label}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
