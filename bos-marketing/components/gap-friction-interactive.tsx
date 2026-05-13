"use client";

import { MotionStagger, MotionStaggerItem } from "@/components/motion-reveal";
import { frictionLabels } from "@/lib/legacy-parity-content";

type Props = {
  cleared: ReadonlySet<string>;
  onToggle: (id: string) => void;
  compact?: boolean;
};

/** Friction cards in a wrapped grid — connected to the operational weight canvas above. */
export function GapFrictionInteractive({ cleared, onToggle, compact = false }: Props) {
  return (
    <div
      className="relative w-full"
      role="region"
      aria-label="Friction cards — click to mark each source of drag as resolved"
    >
      <MotionStagger className="grid w-full grid-cols-2 gap-2 sm:gap-2.5 md:grid-cols-3 md:gap-3 pb-2 pt-1">
        {frictionLabels.map((f) => {
          const isCleared = cleared.has(f.id);
          return (
            <MotionStaggerItem key={f.id} className="min-w-0">
              <button
                type="button"
                onClick={() => onToggle(f.id)}
                className={[
                  "flex h-full w-full flex-col border border-white/10 bg-[var(--surface-raised)] text-left transition hover:bg-white/[0.04] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--orchid)]",
                  compact
                    ? "gap-2.5 rounded-xl p-3.5 shadow-[0_16px_48px_rgba(0,0,0,0.3)] sm:p-4"
                    : "min-h-[min(400px,52vh)] gap-4 rounded-2xl p-6 shadow-[0_24px_80px_rgba(0,0,0,0.35)]",
                  isCleared ? "opacity-90" : "",
                ].join(" ")}
              >
                <span
                  className={`h-1.5 w-1.5 shrink-0 rounded-full transition ${
                    isCleared
                      ? "bg-[var(--orchid)] shadow-[0_0_10px_rgba(26,83,253,0.7)]"
                      : "bg-[var(--hot)] shadow-[0_0_8px_rgba(254,55,94,0.55)]"
                  }`}
                  aria-hidden
                />
                <span className="min-w-0">
                  <span
                    className={[
                      "block font-[family-name:var(--font-sans)] font-semibold text-white",
                      compact ? "text-xs leading-snug sm:text-[13px]" : "text-sm",
                    ].join(" ")}
                  >
                    {f.title}
                  </span>
                  <span
                    className={[
                      "mt-1.5 block font-[family-name:var(--font-sans)] leading-snug text-white/45",
                      compact ? "text-[11px] sm:text-xs" : "text-xs leading-relaxed",
                    ].join(" ")}
                  >
                    {f.desc}
                  </span>
                </span>
              </button>
            </MotionStaggerItem>
          );
        })}
      </MotionStagger>
    </div>
  );
}
