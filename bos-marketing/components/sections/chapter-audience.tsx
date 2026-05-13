"use client";

import { MotionReveal } from "@/components/motion-reveal";
import { usePrefersReducedMotion } from "@/components/use-prefers-reduced-motion";
import { gsap, registerScrollTrigger, ScrollTrigger } from "@/lib/gsap-client";
import { audienceCards, trustBadges } from "@/lib/legacy-parity-content";
import { useEffect, useLayoutEffect, useRef, useState } from "react";

function TrustPosturePanel() {
  return (
    <div className="flex h-full w-[min(86vw,640px)] shrink-0 flex-col justify-center px-6 md:w-[min(80vw,720px)] md:px-12">
      <p className="font-[family-name:var(--font-ui)] text-[10px] font-bold uppercase tracking-[0.22em] text-[var(--cyan)]">
        Trust posture
      </p>
      <h3 className="mt-4 font-[family-name:var(--font-display)] text-[clamp(1.75rem,3.6vw,2.5rem)] font-semibold leading-[1.08] tracking-tight text-white">
        Built for teams that can&rsquo;t afford to wing it.
      </h3>
      <p className="mt-4 max-w-md font-[family-name:var(--font-ui)] text-sm leading-relaxed text-white/55">
        Guardrails, isolation, and audit trails baked into the orchestration spine &mdash; not
        bolted on later.
      </p>
      <ul className="mt-8 grid grid-cols-2 gap-3">
        {trustBadges.map((b) => (
          <li
            key={b.label}
            className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-xs font-medium text-white/55"
          >
            <span className="text-[var(--cyan)]" aria-hidden>
              {b.icon}
            </span>
            {b.label}
          </li>
        ))}
      </ul>
    </div>
  );
}

export function ChapterAudienceSection() {
  const reduced = usePrefersReducedMotion();
  const triggerRef = useRef<HTMLElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<(HTMLElement | null)[]>([]);
  const [inView, setInView] = useState<Record<number, boolean>>({});

  useEffect(() => {
    if (reduced) {
      setInView(Object.fromEntries(audienceCards.map((_, i) => [i, true])));
      return;
    }
    const obs = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          const idx = cardRefs.current.indexOf(e.target as HTMLElement);
          if (idx >= 0) {
            setInView((prev) => ({ ...prev, [idx]: e.isIntersecting }));
          }
        }
      },
      { threshold: 0.35, rootMargin: "0px 0px -10% 0px" },
    );
    const t = window.setTimeout(() => {
      for (const el of cardRefs.current) {
        if (el) obs.observe(el);
      }
    }, 0);
    return () => {
      window.clearTimeout(t);
      obs.disconnect();
    };
  }, [reduced]);

  useLayoutEffect(() => {
    if (reduced) return;
    registerScrollTrigger();
    const trigger = triggerRef.current;
    const track = trackRef.current;
    if (!trigger || !track) return;

    const ctx = gsap.context(() => {
      gsap.to(track, {
        x: () => -(track.scrollWidth - trigger.clientWidth),
        ease: "none",
        scrollTrigger: {
          trigger,
          start: "top top",
          end: () => `+=${Math.max(track.scrollWidth - trigger.clientWidth, 1)}`,
          pin: true,
          scrub: 1,
          anticipatePin: 1,
          invalidateOnRefresh: true,
        },
      });
    }, trigger);

    const onLoad = () => ScrollTrigger.refresh();
    window.addEventListener("load", onLoad);
    void document.fonts.ready.then(() => ScrollTrigger.refresh());

    return () => {
      window.removeEventListener("load", onLoad);
      ctx.revert();
    };
  }, [reduced]);

  if (reduced) {
    return (
      <section
        id="tribe"
        className="chapter-rule-top section-grain relative z-[1] overflow-hidden bg-[var(--surface-dark)] px-6 py-28 md:px-14"
      >
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_50%_0%,rgba(26,83,253,0.18),transparent_52%)]" />
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_80%_85%,rgba(218,52,241,0.1),transparent_45%)]" />

        <div className="relative mx-auto max-w-6xl">
          <h2 className="font-[family-name:var(--font-display)] text-[clamp(2.5rem,6vw,5rem)] font-semibold leading-[1.04] tracking-tight text-white">
            Who runs{" "}
            <span className="bg-gradient-to-r from-[var(--orchid)] to-[var(--cyan)] bg-clip-text text-transparent">
              on BOS
            </span>
          </h2>
          <p className="mt-6 max-w-lg font-[family-name:var(--font-ui)] text-base leading-relaxed text-white/55">
            Teams that need execution &mdash; not another dashboard. Metrics below are illustrative
            of the orchestration story, not guarantees.
          </p>

          <div className="audience-scroll mt-14 flex gap-6 overflow-x-auto pb-4 pt-2 md:gap-8">
            {audienceCards.map((c, i) => (
              <AudienceCardArticle
                key={c.tag}
                card={c}
                index={i}
                inView={inView[i] ?? true}
                setRef={(el) => {
                  cardRefs.current[i] = el;
                }}
                variant="stacked"
              />
            ))}
          </div>

          <div className="mt-16 border-t border-white/10 pt-10">
            <p className="mb-6 text-center font-[family-name:var(--font-ui)] text-[10px] font-bold uppercase tracking-[0.22em] text-white/35">
              Trust posture
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
        </div>
      </section>
    );
  }

  return (
    <section
      ref={triggerRef}
      id="tribe"
      className="chapter-rule-top section-grain relative z-[1] overflow-hidden bg-[var(--surface-dark)]"
      aria-label="Who runs on BOS"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_50%_0%,rgba(26,83,253,0.18),transparent_52%)]" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_80%_85%,rgba(218,52,241,0.1),transparent_45%)]" />

      <div className="relative flex h-[100dvh] w-full items-center overflow-hidden">
        <div
          ref={trackRef}
          data-horizontal-track
          className="flex h-full w-max items-center gap-6 pl-6 pr-[20vw] will-change-transform md:gap-10 md:pl-14"
        >
          <MotionReveal className="flex h-full w-[min(90vw,560px)] shrink-0 flex-col justify-center md:w-[min(70vw,640px)]">
            <p className="font-[family-name:var(--font-ui)] text-[10px] font-bold uppercase tracking-[0.22em] text-[var(--cyan)]">
              Chapter &mdash; Audience
            </p>
            <h2 className="mt-4 font-[family-name:var(--font-display)] text-[clamp(2.5rem,6vw,5rem)] font-semibold leading-[1.04] tracking-tight text-white">
              Who runs{" "}
              <span className="bg-gradient-to-r from-[var(--orchid)] to-[var(--cyan)] bg-clip-text text-transparent">
                on BOS
              </span>
            </h2>
            <p className="mt-6 max-w-md font-[family-name:var(--font-ui)] text-base leading-relaxed text-white/55">
              Teams that need execution &mdash; not another dashboard. Metrics below are
              illustrative of the orchestration story, not guarantees.
            </p>
            <p className="mt-8 inline-flex items-center gap-2 font-[family-name:var(--font-ui)] text-[11px] font-medium uppercase tracking-[0.22em] text-white/35">
              <span aria-hidden>&rarr;</span>
              Scroll to explore
            </p>
          </MotionReveal>

          {audienceCards.map((c, i) => (
            <AudienceCardArticle
              key={c.tag}
              card={c}
              index={i}
              inView={inView[i] ?? false}
              setRef={(el) => {
                cardRefs.current[i] = el;
              }}
              variant="panel"
            />
          ))}

          <TrustPosturePanel />
        </div>
      </div>
    </section>
  );
}

type AudienceCard = (typeof audienceCards)[number];

function AudienceCardArticle({
  card,
  index,
  inView,
  setRef,
  variant,
}: {
  card: AudienceCard;
  index: number;
  inView: boolean;
  setRef: (el: HTMLElement | null) => void;
  variant: "panel" | "stacked";
}) {
  const isPanel = variant === "panel";
  return (
    <article
      ref={setRef}
      data-card-index={index}
      className={`${
        isPanel
          ? "flex h-[min(78vh,560px)] w-[min(86vw,360px)] shrink-0 flex-col justify-center rounded-2xl border p-9 backdrop-blur-md md:w-[360px] md:p-10"
          : "group min-w-[280px] shrink-0 rounded-2xl border p-9 backdrop-blur-md md:min-w-[300px]"
      } transition duration-300 ${
        card.featured
          ? "border-[var(--orchid)]/40 bg-[var(--orchid)]/[0.08] hover:border-[var(--cyan)]/45"
          : "border-white/10 bg-white/[0.05] hover:border-[var(--orchid)]/30 hover:bg-[var(--orchid)]/[0.08]"
      }`}
    >
      <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-[var(--cyan)]">
        {card.tag}
      </p>
      <h3 className="mt-6 font-[family-name:var(--font-display)] text-xl font-semibold leading-[1.1] text-white md:text-2xl">
        {card.hed}
      </h3>
      <p className="mt-3 font-[family-name:var(--font-sans)] text-sm leading-relaxed text-white/50">
        {card.txt}
      </p>
      <div className="mt-6 flex items-baseline gap-2">
        <span className="font-[family-name:var(--font-display)] text-3xl font-semibold text-[var(--orchid)]">
          {card.metricN}
        </span>
        <span className="text-[11px] font-medium uppercase tracking-[0.12em] text-white/35">
          {card.metricL}
        </span>
      </div>
      <div
        className="mt-3 h-1 overflow-hidden rounded-full bg-white/10"
        role="presentation"
        aria-hidden
      >
        <div
          className="h-full rounded-full bg-gradient-to-r from-[var(--magenta)] via-[var(--orchid)] to-[var(--cyan)] transition-[width] duration-[1400ms] ease-out"
          style={{
            width: inView ? `${card.barPct}%` : "0%",
          }}
        />
      </div>
      <p className="mt-3 font-[family-name:var(--font-sans)] text-[11px] italic text-white/30">
        {card.before}
      </p>
    </article>
  );
}
