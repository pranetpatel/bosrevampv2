"use client";

import {
  stripIconsHomeCapabilityMarquee,
  type StripIconEntry,
} from "@/components/icons/bos-strip-icons";
import { usePrefersReducedMotion } from "@/components/use-prefers-reduced-motion";

/** Tile fills — vivid squircles on white (same rhythm as earlier mockup). */
const TILE_BG_BY_KEY: Record<string, string> = {
  "vibe-design": "#7C3AED",
  communicate: "#16A34A",
  brainstorm: "#CA8A04",
  research: "#2563EB",
  build: "#3F3F46",
  "ai-agents": "#2563EB",
  avatars: "#DB2777",
  analytics: "#0D9488",
  integrations: "#EA580C",
  workflows: "#65A30D",
  people: "#0EA5E9",
  compliance: "#22C55E",
  automation: "#EAB308",
  goals: "#DC2626",
};

function tileBg(entry: StripIconEntry) {
  return TILE_BG_BY_KEY[entry.key] ?? "#52525B";
}

function MarqueeIconItem({
  entry,
  showTitle,
}: {
  entry: StripIconEntry;
  showTitle?: boolean;
}) {
  const Graphic = entry.brandIcon ?? entry.Icon;
  const useBrand = Boolean(entry.brandIcon);

  return (
    <div className="flex w-[5.25rem] shrink-0 flex-col items-center gap-2 text-center md:w-[6rem]">
      <div
        className="flex h-12 w-12 items-center justify-center rounded-2xl shadow-[0_4px_14px_rgba(0,0,0,0.1)] md:h-14 md:w-14"
        style={{ backgroundColor: tileBg(entry) }}
        {...(showTitle ? { title: entry.label } : {})}
      >
        {useBrand ? (
          <Graphic className="h-6 w-6 shrink-0 md:h-7 md:w-7" aria-hidden />
        ) : (
          <Graphic className="h-6 w-6 shrink-0 text-white md:h-7 md:w-7" aria-hidden />
        )}
      </div>
      <span className="font-[family-name:var(--font-ui)] text-[9px] font-semibold leading-tight tracking-[0.04em] text-neutral-600 md:text-[10px]">
        {entry.word}
      </span>
    </div>
  );
}

export function HomeIconMarquee() {
  const reduced = usePrefersReducedMotion();
  const items = stripIconsHomeCapabilityMarquee;

  const segmentClass =
    "flex shrink-0 items-start gap-7 pr-7 md:gap-10 md:pr-10";

  const row = (
    <div className={segmentClass}>
      {items.map((entry) => (
        <MarqueeIconItem key={entry.key} entry={entry} showTitle />
      ))}
    </div>
  );

  if (reduced) {
    return (
      <div className="relative w-full overflow-x-auto pb-1 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
        <div className="mx-auto flex w-max justify-center px-4">{row}</div>
      </div>
    );
  }

  const durationSec = Math.min(72, Math.max(24, items.length * 2.4));

  return (
    <div className="relative overflow-hidden">
      <div
        className="pointer-events-none absolute inset-y-0 left-0 z-[1] w-12 bg-gradient-to-r from-white to-transparent md:w-20"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-y-0 right-0 z-[1] w-12 bg-gradient-to-l from-white to-transparent md:w-20"
        aria-hidden
      />
      <div
        className="flex w-max animate-marquee will-change-transform hover:[animation-play-state:paused]"
        style={{ animationDuration: `${durationSec}s` }}
      >
        {row}
        <div className={segmentClass} aria-hidden>
          {items.map((entry) => (
            <MarqueeIconItem key={`dup-${entry.key}`} entry={entry} />
          ))}
        </div>
      </div>
    </div>
  );
}
