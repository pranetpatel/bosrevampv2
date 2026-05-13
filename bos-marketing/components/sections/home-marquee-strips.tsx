"use client";

import type { StripAccent, StripIconEntry } from "@/components/icons/bos-strip-icons";
import { stripIconsHomeMarquee } from "@/components/icons/bos-strip-icons";
import { usePrefersReducedMotion } from "@/components/use-prefers-reduced-motion";

const ACCENT: Record<
  StripAccent,
  { chipBorder: string; icon: string; label: string; hoverGlow: string }
> = {
  orchid: {
    chipBorder: "border-[var(--orchid)]/38",
    icon: "text-[var(--orchid)]",
    label: "text-[var(--orchid)]",
    hoverGlow: "hover:shadow-[0_0_36px_rgba(26,83,253,0.42)]",
  },
  magenta: {
    chipBorder: "border-[var(--magenta)]/38",
    icon: "text-[var(--magenta)]",
    label: "text-[var(--magenta)]",
    hoverGlow: "hover:shadow-[0_0_34px_rgba(218,52,241,0.38)]",
  },
  cyan: {
    chipBorder: "border-[var(--cyan)]/38",
    icon: "text-[var(--cyan)]",
    label: "text-[var(--cyan)]",
    hoverGlow: "hover:shadow-[0_0_34px_rgba(4,209,224,0.36)]",
  },
  hot: {
    chipBorder: "border-[var(--hot)]/38",
    icon: "text-[var(--hot)]",
    label: "text-[var(--hot)]",
    hoverGlow: "hover:shadow-[0_0_32px_rgba(254,55,94,0.34)]",
  },
};

function IconTile({ entry }: { entry: StripIconEntry }) {
  const { Icon, label, word, accent, brandIcon: Brand } = entry;
  const a = ACCENT[accent];
  const TileIcon = Brand ?? Icon;
  return (
    <div title={label} className="flex w-[4.75rem] shrink-0 flex-col items-center gap-1.5 md:w-[5.25rem]">
      <span
        className={`relative flex h-14 w-14 items-center justify-center rounded-2xl border bg-transparent transition duration-300 hover:scale-[1.06] hover:brightness-110 ${a.chipBorder} ${a.hoverGlow}`}
      >
        {Brand ? (
          <TileIcon className="h-7 w-7 shrink-0" aria-hidden />
        ) : (
          <Icon className={`h-7 w-7 ${a.icon}`} aria-hidden />
        )}
      </span>
      <span
        className={`max-w-full text-center font-[family-name:var(--font-ui)] text-[9px] font-bold uppercase leading-tight tracking-[0.14em] ${a.label} opacity-95`}
      >
        {word}
      </span>
      <span className="sr-only">{label}</span>
    </div>
  );
}

export type HomeMarqueeStripsProps = {
  entries?: StripIconEntry[];
  /** Chapter nav target; homepage uses `strips` for the integration row after Welcome. */
  sectionId?: string;
  /** `static` = centered / scroll row; `marquee` = animated strip. */
  mode?: "static" | "marquee";
  eyebrow?: string;
};

export function HomeMarqueeStrips({
  entries = stripIconsHomeMarquee,
  sectionId = "strips-marquee",
  mode = "marquee",
  eyebrow,
}: HomeMarqueeStripsProps) {
  const reduced = usePrefersReducedMotion();
  const doubled = [...entries, ...entries];
  const useMarquee = mode === "marquee" && !reduced;

  if (mode === "static" || reduced) {
    return (
      <section
        id={sectionId}
        className="relative z-[2] bg-gradient-to-b from-[#121212] via-[var(--surface-dark)] to-[var(--surface-dark)] pt-6 pb-[clamp(2.75rem,7vw,4.5rem)]"
      >
        {eyebrow ? (
          <p className="mb-4 px-6 text-center font-[family-name:var(--font-ui)] text-[10px] font-bold uppercase tracking-[0.2em] text-white/40">
            {eyebrow}
          </p>
        ) : null}
        <div
          className={
            mode === "static"
              ? "mx-auto flex max-w-6xl snap-x snap-mandatory gap-x-4 gap-y-5 overflow-x-auto px-6 pb-1 pt-1 [scrollbar-width:none] md:flex-wrap md:justify-center md:overflow-visible [&::-webkit-scrollbar]:hidden"
              : "mx-auto flex max-w-6xl flex-wrap justify-center gap-x-4 gap-y-5 px-6"
          }
        >
          {entries.map((entry) => (
            <IconTile key={entry.key} entry={entry} />
          ))}
        </div>
        <div
          className="pointer-events-none absolute inset-x-0 bottom-0 z-[1] h-[clamp(3rem,8vw,5rem)] bg-[linear-gradient(180deg,rgba(10,10,10,0)_0%,rgba(10,10,10,0.35)_38%,var(--surface-dark)_78%,var(--surface-dark)_100%)]"
          aria-hidden
        />
      </section>
    );
  }

  return (
    <section
      id={sectionId}
      className="relative z-[2] bg-gradient-to-b from-[#121212] via-[var(--surface-dark)] to-[var(--surface-dark)] pb-[clamp(2.75rem,7vw,4.5rem)]"
    >
      {eyebrow ? (
        <p className="px-6 py-3 text-center font-[family-name:var(--font-ui)] text-[10px] font-bold uppercase tracking-[0.2em] text-white/45">
          {eyebrow}
        </p>
      ) : null}
      <div
        className="relative overflow-hidden bg-gradient-to-b from-[rgb(16_16_18_/_0.45)] via-[var(--surface-dark)] to-[#0a0a0a] py-6 [mask-image:linear-gradient(90deg,transparent,black_8%,black_92%,transparent)]"
        role="region"
        aria-label="BOS applications and connections"
      >
        <div
          className="pointer-events-none absolute inset-0 opacity-80"
          style={{
            background: `
              radial-gradient(ellipse 125% 85% at 20% 42%, rgba(26, 83, 253, 0.11) 0%, transparent 48%),
              radial-gradient(ellipse 115% 80% at 78% 38%, rgba(218, 52, 241, 0.09) 0%, transparent 46%),
              linear-gradient(180deg, rgba(255, 255, 255, 0.03) 0%, transparent 28%, transparent 55%, #0a0a0a 92%, #0a0a0a 100%),
              linear-gradient(90deg, transparent 0%, rgba(255, 255, 255, 0.015) 50%, transparent 100%)
            `,
          }}
          aria-hidden
        />
        <div
          className={`relative z-[1] flex w-max items-end gap-4 px-4 pb-1 pt-1 md:gap-6 ${useMarquee ? "animate-marquee motion-reduce:animate-none motion-reduce:flex-wrap motion-reduce:justify-center" : ""}`}
        >
          {doubled.map((entry, i) => (
            <IconTile key={`${entry.key}-${i}`} entry={entry} />
          ))}
        </div>
      </div>
      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 z-[3] h-[clamp(3rem,8vw,5rem)] bg-[linear-gradient(180deg,rgba(10,10,10,0)_0%,rgba(10,10,10,0.35)_38%,var(--surface-dark)_78%,var(--surface-dark)_100%)]"
        aria-hidden
      />
    </section>
  );
}
