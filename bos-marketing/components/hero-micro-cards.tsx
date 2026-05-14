"use client";

const PILLS = [
  "No tool sprawl",
  "No AI slop",
  "No technical limitations",
  "No multiple charges",
] as const;

/** Mockup-style pill row under hero subcopy. */
export function HeroMicroCards() {
  return (
    <div className="flex w-full max-w-[min(100%,52rem)] flex-wrap justify-center gap-2 px-1 sm:gap-3">
      {PILLS.map((label) => (
        <span
          key={label}
          className="inline-flex items-center rounded-lg border border-white/14 bg-black/35 px-3 py-2 font-[family-name:var(--font-ui)] text-[10px] font-semibold uppercase tracking-[0.14em] text-white/72 shadow-[inset_0_1px_0_rgba(255,255,255,0.06)] backdrop-blur-sm sm:px-4 sm:text-[11px] sm:tracking-[0.16em]"
        >
          {label}
        </span>
      ))}
    </div>
  );
}
