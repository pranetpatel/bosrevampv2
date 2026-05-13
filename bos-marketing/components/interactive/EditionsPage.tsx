"use client";

import Link from "next/link";
import { MotionReveal } from "@/components/motion-reveal";
import { AgentExecutionPanel } from "@/components/interactive/AgentExecutionPanel";
import type { ExecutionScenario } from "@/components/interactive/AgentExecutionPanel";
import type { PricingCard, PricingChapter } from "@/lib/constants";

type EditionsPageProps = {
  eyebrow: string;
  title: string;
  intro: string;
  orbMode: "collapse" | "full";
  ctaLabel: string;
  ctaHref: string;
  chapters: readonly PricingChapter[];
  cards: readonly PricingCard[];
  scenario: ExecutionScenario;
};

function OrbCollapse({ tall = false }: { tall?: boolean }) {
  return (
    <div
      className={`relative mx-auto mt-10 max-w-3xl overflow-hidden rounded-3xl border border-white/10 ${tall ? "h-48 md:h-72" : "h-40 md:h-52"}`}
      aria-hidden
    >
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_100%,rgba(26,83,253,0.45),transparent_55%),radial-gradient(ellipse_60%_50%_at_20%_30%,rgba(218,52,241,0.25),transparent_50%),radial-gradient(ellipse_50%_40%_at_80%_25%,rgba(4,209,224,0.2),transparent_50%)]" />
      <div className="absolute inset-0 opacity-[0.07] [background-image:linear-gradient(rgba(255,255,255,0.9)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.9)_1px,transparent_1px)] [background-size:24px_24px]" />
    </div>
  );
}

export default function EditionsPage({
  eyebrow,
  title,
  intro,
  orbMode,
  ctaLabel,
  ctaHref,
  chapters,
  cards,
  scenario,
}: EditionsPageProps) {
  return (
    <div className="text-[var(--foreground)]">
      <div className="mx-auto max-w-6xl px-6 pb-6 pt-6 md:px-8 md:pt-8">
        <MotionReveal>
          <p className="font-[family-name:var(--font-ui)] text-[11px] font-bold uppercase tracking-[0.22em] text-white/45">
            {eyebrow}
          </p>
          <h1 className="mt-4 max-w-3xl font-[family-name:var(--font-display)] text-[clamp(2rem,4.5vw,3.25rem)] font-semibold leading-[1.15] tracking-tight text-white">
            {title}
          </h1>
          <p className="mt-6 max-w-2xl font-[family-name:var(--font-sans)] text-lg leading-relaxed text-white/65">
            {intro}
          </p>
          <Link
            href={ctaHref}
            className="mt-8 inline-flex rounded-full bg-[var(--orchid)] px-8 py-3 font-[family-name:var(--font-ui)] text-sm font-bold text-white shadow-[0_0_28px_rgba(26,83,253,0.35)] transition hover:-translate-y-px hover:shadow-[0_0_40px_rgba(26,83,253,0.5)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--cyan)]"
          >
            {ctaLabel}
          </Link>
        </MotionReveal>
        <OrbCollapse tall={orbMode === "full"} />
      </div>

      <div className="mx-auto max-w-6xl px-6 py-12 md:px-8">
        <MotionReveal>
          <h2 className="font-[family-name:var(--font-display)] text-xl font-semibold text-white md:text-2xl">
            Editions
          </h2>
          <p className="mt-2 max-w-xl font-[family-name:var(--font-sans)] text-sm text-white/55">
            Pick the layer that matches how much of the stack you want BOS to run first.
          </p>
        </MotionReveal>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {cards.map((card, i) => (
            <MotionReveal key={card.id} delay={i * 0.06}>
              <article
                className={`flex h-full flex-col rounded-2xl border p-6 ${
                  card.highlighted
                    ? "border-[var(--cyan)]/50 bg-gradient-to-b from-[var(--cyan)]/10 to-transparent shadow-[0_0_40px_rgba(4,209,224,0.12)]"
                    : "border-white/10 bg-white/[0.03]"
                }`}
              >
                <h3 className="font-[family-name:var(--font-display)] text-lg font-semibold text-white">
                  {card.name}
                </h3>
                <p className="mt-2 font-[family-name:var(--font-ui)] text-sm font-bold text-[var(--cyan)]">
                  {card.priceLine}
                </p>
                <p className="mt-3 flex-1 font-[family-name:var(--font-sans)] text-sm text-white/60">
                  {card.blurb}
                </p>
                <ul className="mt-6 space-y-2 border-t border-white/10 pt-4 font-[family-name:var(--font-sans)] text-sm text-white/70">
                  {card.features.map((f) => (
                    <li key={f} className="flex gap-2">
                      <span className="text-[var(--magenta)]">→</span>
                      {f}
                    </li>
                  ))}
                </ul>
              </article>
            </MotionReveal>
          ))}
        </div>
      </div>

      <div className="border-t border-white/10 bg-[var(--surface-raised)]/30">
        <div className="mx-auto max-w-6xl space-y-16 px-6 py-16 md:px-8">
          {chapters.map((ch, i) => (
            <MotionReveal key={ch.id} delay={i * 0.05}>
              <section aria-labelledby={`ch-${ch.id}`}>
                <h2
                  id={`ch-${ch.id}`}
                  className="font-[family-name:var(--font-display)] text-xl font-semibold text-white md:text-2xl"
                >
                  {ch.title}
                </h2>
                <p className="mt-4 max-w-3xl font-[family-name:var(--font-sans)] leading-relaxed text-white/65">
                  {ch.body}
                </p>
                {ch.bullets && ch.bullets.length > 0 ? (
                  <ul className="mt-6 space-y-2 font-[family-name:var(--font-sans)] text-sm text-white/70">
                    {ch.bullets.map((b) => (
                      <li key={b} className="flex gap-2">
                        <span className="text-[var(--orchid)]">●</span>
                        {b}
                      </li>
                    ))}
                  </ul>
                ) : null}
              </section>
            </MotionReveal>
          ))}
        </div>
      </div>

      <div className="mx-auto max-w-6xl px-6 py-16 md:px-8">
        <MotionReveal>
          <h2 className="font-[family-name:var(--font-display)] text-xl font-semibold text-white md:text-2xl">
            Stack calculator
          </h2>
          <p className="mt-2 max-w-xl font-[family-name:var(--font-sans)] text-sm text-white/55">
            Same flow your team uses to sanity-check consolidation — modeled as a live audit.
          </p>
        </MotionReveal>
        <div className="mt-10">
          <AgentExecutionPanel scenario={scenario} />
        </div>
      </div>
    </div>
  );
}
