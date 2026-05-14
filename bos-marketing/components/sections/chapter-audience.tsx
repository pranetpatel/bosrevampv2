"use client";

import { useRef, useEffect } from "react";
import { audienceCards, trustBadges } from "@/lib/legacy-parity-content";

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
    }

    function onPointerUp() {
      if (!isDragging.current) return;
      isDragging.current = false;
      track!.style.cursor = "grab";
      let v = -velocity.current * 2;
      function momentum() {
        if (Math.abs(v) < 0.5) return;
        track!.scrollLeft += v;
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
      className="chapter-rule-top section-grain relative z-[1] bg-[var(--surface-dark)] py-20 md:py-28"
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
        className="relative mt-12 flex cursor-grab select-none gap-4 overflow-x-auto px-6 pb-4 md:px-14"
        style={{ scrollbarWidth: "none" }}
      >
        {audienceCards.map((c, i) => (
          <article
            key={c.tag}
            data-card-index={i}
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
        ))}
      </div>

      {/* Trust badges */}
      <div className="relative mx-auto mt-14 max-w-6xl border-t border-white/10 px-6 pt-10 md:px-14">
        <p className="mb-6 text-center font-[family-name:var(--font-ui)] text-[10px] font-bold uppercase tracking-[0.22em] text-white/35">
          Enterprise-grade security, built in from day one.
        </p>
        <div className="flex flex-wrap justify-center gap-3">
          {trustBadges.map((b) => (
            <span
              key={b.label}
              className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-xs text-white/50"
            >
              <span aria-hidden>{b.icon}</span>
              {b.label}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
