"use client";

import { useCallback, useEffect, useRef, useState } from "react";

const CHAPTERS = [
  { id: "welcome", label: "Welcome" },
  { id: "tension", label: "Gap" },
  { id: "system", label: "System" },
  { id: "flow", label: "Flow" },
  { id: "conviction", label: "Why" },
  { id: "manifesto", label: "Tenets" },
  { id: "tribe", label: "Who" },
  { id: "close", label: "Start" },
] as const;

export function ChapterNav() {
  const [active, setActive] = useState<string>("welcome");
  const railRef = useRef<HTMLDivElement>(null);
  const dotRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const [fillPct, setFillPct] = useState(0);

  const activeIndex = CHAPTERS.findIndex((c) => c.id === active);

  const updateActive = useCallback(() => {
    const focusY = window.innerHeight * 0.38;
    let best: (typeof CHAPTERS)[number]["id"] = CHAPTERS[0].id;
    let bestDist = Infinity;

    for (const c of CHAPTERS) {
      const el = document.getElementById(c.id);
      if (!el) continue;
      const r = el.getBoundingClientRect();
      if (r.bottom < 80 || r.top > window.innerHeight - 80) continue;
      const mid = r.top + r.height / 2;
      const d = Math.abs(mid - focusY);
      if (d < bestDist) {
        bestDist = d;
        best = c.id;
      }
    }
    setActive(best);
  }, []);

  // Compute fill % from first dot to active dot within the rail
  useEffect(() => {
    const rail = railRef.current;
    const activeDot = dotRefs.current[activeIndex];
    if (!rail || !activeDot) return;

    const railRect = rail.getBoundingClientRect();
    const dotRect = activeDot.getBoundingClientRect();
    const dotCenter = dotRect.top + dotRect.height / 2 - railRect.top;
    setFillPct((dotCenter / railRect.height) * 100);
  }, [activeIndex]);

  useEffect(() => {
    const raf = requestAnimationFrame(() => updateActive());
    window.addEventListener("scroll", updateActive, { passive: true });
    window.addEventListener("resize", updateActive, { passive: true });
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("scroll", updateActive);
      window.removeEventListener("resize", updateActive);
    };
  }, [updateActive]);

  return (
    <nav
      className="pointer-events-none fixed right-5 top-1/2 z-[190] hidden -translate-y-1/2 flex-col items-end gap-2 lg:flex"
      aria-label="On this page"
    >
      {/* Track + fill line */}
      <div
        ref={railRef}
        className="pointer-events-none absolute right-[3px] top-0 h-full w-px -translate-x-1/2"
        aria-hidden
      >
        {/* Track */}
        <div className="absolute inset-0 bg-white/10" />
        {/* Fill */}
        <div
          className="absolute left-0 top-0 w-full bg-gradient-to-b from-[var(--orchid)] to-[var(--magenta)] transition-all duration-500 ease-out"
          style={{ height: `${fillPct}%` }}
        />
      </div>

      {CHAPTERS.map((c, i) => {
        const isOn = active === c.id;
        return (
          <button
            key={c.id}
            ref={(el) => { dotRefs.current[i] = el; }}
            type="button"
            className="pointer-events-auto group flex items-center gap-2.5 rounded-sm text-right focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--cyan)]"
            onClick={() => {
              document.getElementById(c.id)?.scrollIntoView({ behavior: "smooth" });
            }}
            aria-current={isOn ? "location" : undefined}
          >
            {/* Label */}
            <span
              className={`max-w-[7rem] font-[family-name:var(--font-ui)] text-[9px] font-semibold uppercase tracking-[0.18em] transition-all duration-300 ${
                isOn
                  ? "text-white opacity-100"
                  : "text-white/35 opacity-0 group-hover:opacity-70"
              }`}
            >
              {c.label}
            </span>

            {/* Dot */}
            <span
              className={`relative flex h-2 w-2 shrink-0 items-center justify-center rounded-full border transition-all duration-300 ${
                isOn
                  ? "scale-125 border-[var(--orchid)] bg-[var(--orchid)]"
                  : "border-white/20 bg-transparent group-hover:border-[var(--orchid)]/50 group-hover:bg-[var(--orchid)]/20"
              }`}
              aria-hidden
            >
              {/* Active glow ring */}
              {isOn && (
                <span className="absolute inset-0 -m-1.5 animate-[ping_2.2s_ease-out_infinite] rounded-full bg-[var(--orchid)]/25" />
              )}
            </span>
          </button>
        );
      })}
    </nav>
  );
}
