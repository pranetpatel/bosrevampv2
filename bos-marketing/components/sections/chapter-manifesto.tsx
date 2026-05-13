"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import Link from "next/link";
import { useState, type KeyboardEvent } from "react";
import { MotionClipReveal, MotionReveal } from "@/components/motion-reveal";
import { manifestoHome } from "@/lib/legacy-parity-content";

const tiles = manifestoHome.tiles;

export function ChapterManifestoSection() {
  const [active, setActive] = useState(0);
  const reduced = useReducedMotion();
  const tile = tiles[active]!;

  const focusTab = (index: number) => {
    const n = tiles[index]?.num;
    if (!n) return;
    requestAnimationFrame(() => {
      document.getElementById(`manifesto-tab-${n}`)?.focus();
    });
  };

  const onTabListKeyDown = (e: KeyboardEvent<HTMLDivElement>) => {
    const t = e.target as HTMLElement;
    if (t.getAttribute("role") !== "tab") return;
    const from = Number.parseInt(t.dataset.tabIndex ?? "", 10);
    if (Number.isNaN(from)) return;

    let next = from;
    switch (e.key) {
      case "ArrowRight":
      case "ArrowDown":
        e.preventDefault();
        next = (from + 1) % tiles.length;
        break;
      case "ArrowLeft":
      case "ArrowUp":
        e.preventDefault();
        next = (from - 1 + tiles.length) % tiles.length;
        break;
      case "Home":
        e.preventDefault();
        next = 0;
        break;
      case "End":
        e.preventDefault();
        next = tiles.length - 1;
        break;
      default:
        return;
    }
    setActive(next);
    focusTab(next);
  };

  return (
    <section
      id="manifesto"
      className="chapter-rule-top section-grain relative z-[1] bg-[var(--surface-raised)] px-6 py-28 md:px-14"
    >
      <div className="mx-auto grid max-w-6xl gap-16 lg:grid-cols-2 lg:gap-24 lg:items-start">
        <MotionReveal className="lg:sticky lg:top-28">
          <p className="flex items-center gap-4 font-[family-name:var(--font-ui)] text-[10px] font-bold uppercase tracking-[0.22em] text-[var(--cyan)]">
            <span className="h-px w-9 bg-[var(--cyan)]/70" aria-hidden />
            {manifestoHome.eyebrow}
          </p>
          <h2 className="mt-6 font-[family-name:var(--font-display)] text-[clamp(2rem,4vw,3.25rem)] font-semibold leading-[1.06] tracking-tight text-white">
            <MotionClipReveal delay={0.06} as="span">
              We did not build{" "}
            </MotionClipReveal>
            <MotionClipReveal delay={0.14} as="span">
              another tool.
            </MotionClipReveal>
          </h2>
          <p className="mt-8 border-l-2 border-[var(--orchid)]/35 pl-5 font-[family-name:var(--font-sans)] text-sm leading-[1.85] text-white/45">
            {manifestoHome.thesis}
          </p>
          <blockquote className="mt-10 border-l-2 border-[var(--magenta)]/35 py-2 pl-5 font-[family-name:var(--font-display)] text-lg font-semibold italic leading-snug text-white/70 md:text-xl">
            {manifestoHome.quote}
          </blockquote>
          <p className="mt-4 pl-5 font-[family-name:var(--font-ui)] text-[10px] font-semibold uppercase tracking-[0.2em] text-white/35">
            {manifestoHome.attr}
          </p>
          <Link
            href="/manifesto"
            className="mt-10 inline-flex items-center gap-3 border border-white/15 px-5 py-3 font-[family-name:var(--font-ui)] text-[11px] font-bold uppercase tracking-[0.12em] text-white/80 transition hover:border-[var(--orchid)]/40 hover:text-white"
          >
            Read full manifesto
            <span className="text-[var(--orchid)]" aria-hidden>
              →
            </span>
          </Link>
        </MotionReveal>

        <div className="flex flex-col gap-5">
          <div
            role="tablist"
            aria-label="Principles"
            className="grid grid-cols-2 gap-2 sm:grid-cols-3 sm:gap-3"
            onKeyDown={onTabListKeyDown}
          >
            {tiles.map((t, i) => {
              const isOn = i === active;
              return (
                <button
                  key={t.num}
                  type="button"
                  role="tab"
                  id={`manifesto-tab-${t.num}`}
                  data-tab-index={i}
                  aria-selected={isOn}
                  aria-controls="manifesto-principle-panel"
                  tabIndex={isOn ? 0 : -1}
                  onClick={() => setActive(i)}
                  className={`group flex flex-col rounded-xl border p-3.5 text-left transition md:p-4 ${
                    isOn
                      ? "border-[var(--orchid)]/50 bg-[var(--orchid)]/[0.12] shadow-[0_0_0_1px_rgba(218,52,241,0.15)]"
                      : "border-white/10 bg-white/[0.04] hover:border-white/20 hover:bg-white/[0.07]"
                  }`}
                >
                  <span
                    className={`font-[family-name:var(--font-display)] text-xs font-semibold tabular-nums md:text-sm ${
                      isOn ? "text-[var(--orchid)]" : "text-[var(--orchid)]/50 group-hover:text-[var(--orchid)]/75"
                    }`}
                  >
                    {t.num}
                  </span>
                  <span className="mt-2 font-[family-name:var(--font-display)] text-[13px] font-semibold leading-snug text-white md:text-sm">
                    {t.hed}
                  </span>
                </button>
              );
            })}
          </div>

          <div
            id="manifesto-principle-panel"
            role="tabpanel"
            aria-labelledby={`manifesto-tab-${tile.num}`}
            className="overflow-hidden rounded-2xl border border-white/10 bg-[var(--surface-dark)]"
          >
            <AnimatePresence initial={false} mode="wait">
              <motion.div
                key={tile.num}
                initial={reduced ? false : { opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={reduced ? undefined : { opacity: 0, y: -6 }}
                transition={{ duration: reduced ? 0 : 0.22, ease: [0.16, 1, 0.3, 1] }}
              >
                <article className="p-8 md:grid md:grid-cols-[52px_1fr] md:gap-6 md:p-9">
                  <span className="font-[family-name:var(--font-display)] text-sm font-semibold text-[var(--orchid)]/60">
                    {tile.num}
                  </span>
                  <div>
                    <h3 className="font-[family-name:var(--font-display)] text-lg font-semibold leading-tight text-white md:text-xl">
                      {tile.hed}
                    </h3>
                    <p className="mt-3 font-[family-name:var(--font-sans)] text-sm leading-relaxed text-white/45">
                      {tile.txt}
                    </p>
                    {tile.statN ? (
                      <div className="mt-4 border-l-2 border-[var(--cyan)]/40 bg-[var(--cyan)]/[0.06] px-4 py-3">
                        <p className="font-[family-name:var(--font-display)] text-2xl font-semibold text-[var(--cyan)]">
                          {tile.statN}
                        </p>
                        <p className="mt-1 text-[11px] font-medium uppercase tracking-[0.1em] text-white/35">
                          {tile.statL}
                        </p>
                      </div>
                    ) : null}
                  </div>
                </article>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
