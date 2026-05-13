"use client";

import Image from "next/image";
import { usePrefersReducedMotion } from "@/components/use-prefers-reduced-motion";
import { SITE_MEDIA } from "@/lib/site-media";

const CARDS = [
  {
    title: "No dashboards",
    teaser: "Signal, not tiles",
    src: SITE_MEDIA.heroMicroDash,
    objectPosition: "44% 40%",
  },
  {
    title: "No workflow builders",
    teaser: "Intent in, execution out",
    src: SITE_MEDIA.heroMicroWorkflow,
    objectPosition: "52% 45%",
  },
  {
    title: "No tool sprawl",
    teaser: "One layer",
    src: SITE_MEDIA.heroMicroSprawl,
    objectPosition: "48% 42%",
  },
] as const;

export function HeroMicroCards() {
  const reduced = usePrefersReducedMotion();

  return (
    <div className="grid w-full max-w-[min(100%,52rem)] grid-cols-3 gap-1.5 px-1 sm:max-w-4xl sm:gap-2.5 md:gap-4">
      {CARDS.map((c) => (
        <article
          key={c.title}
          tabIndex={0}
          aria-label={`${c.title}. ${c.teaser}. ${reduced ? "Preview image shown." : "Hover or focus to reveal a product still."}`}
          className="group/card relative h-[6.75rem] min-h-0 min-w-0 overflow-hidden rounded-xl border border-white/18 bg-white/[0.07] outline-none backdrop-blur-md transition duration-300 hover:border-white/28 hover:bg-white/[0.11] focus-visible:ring-2 focus-visible:ring-[var(--cyan)] focus-visible:ring-offset-2 focus-visible:ring-offset-black/40 sm:h-[7.25rem] sm:rounded-2xl md:h-[7.5rem]"
        >
          <Image
            src={c.src}
            alt=""
            fill
            sizes="(max-width: 640px) 32vw, 200px"
            quality={88}
            className={[
              "pointer-events-none scale-[1.08] object-cover transition-[opacity,transform] duration-300 ease-out",
              reduced
                ? "opacity-[0.42]"
                : "opacity-0 group-hover/card:opacity-100 group-focus-within/card:opacity-100",
            ].join(" ")}
            style={{ objectPosition: c.objectPosition }}
            aria-hidden
          />
          <div
            className="pointer-events-none absolute inset-0 z-[1] bg-gradient-to-t from-black/92 via-black/48 to-black/22"
            aria-hidden
          />
          <div className="relative z-[2] flex h-full min-h-0 flex-col justify-end p-2.5 text-left sm:p-3 md:p-3.5">
            <span className="line-clamp-2 font-[family-name:var(--font-ui)] text-[8px] font-bold uppercase leading-tight tracking-[0.12em] text-[var(--cyan)]/90 sm:text-[9px] sm:tracking-[0.16em] md:text-[10px] md:tracking-[0.18em]">
              {c.teaser}
            </span>
            <p className="mt-1 flex items-start gap-1 font-[family-name:var(--font-ui)] text-[11px] font-semibold leading-snug text-white/95 sm:mt-1.5 sm:gap-1.5 sm:text-xs md:text-sm">
              <span className="mt-0.5 shrink-0 text-[9px] text-white/45 sm:text-[10px]" aria-hidden>
                ✕
              </span>
              <span className="min-w-0">{c.title}</span>
            </p>
          </div>
        </article>
      ))}
    </div>
  );
}
