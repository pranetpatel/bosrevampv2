"use client";

import { gsap, registerScrollTrigger } from "@/lib/gsap-client";
import { useLayoutEffect, useRef } from "react";

const CAPSULES = [
  {
    kicker: "Signal",
    title: "What matters, surfaced",
    body: "Noise drops away. Operators see the next move — not another dashboard.",
  },
  {
    kicker: "Coordination",
    title: "Work finds its path",
    body: "People, agents, and systems stay aligned without brittle workflow builders.",
  },
  {
    kicker: "Execution",
    title: "Outcomes over overhead",
    body: "The layer that runs the business — not the stack that slows it down.",
  },
] as const;

/**
 * Pinned vertical scene: layered cards peel apart as scroll advances (scrubbed).
 * Parallax on ambient layers for depth.
 */
export function CapsuleStackSection() {
  const rootRef = useRef<HTMLElement>(null);
  const blobARef = useRef<HTMLDivElement>(null);
  const blobBRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<(HTMLElement | null)[]>([]);

  useLayoutEffect(() => {
    const root = rootRef.current;
    if (!root) return;
    registerScrollTrigger();

    const cards = cardsRef.current.filter(Boolean) as HTMLElement[];
    const blobA = blobARef.current;
    const blobB = blobBRef.current;
    if (cards.length < 3) return;

    const ctx = gsap.context(() => {
      gsap.set(cards, { opacity: 1, y: 0, scale: 1, rotate: 0, transformOrigin: "50% 50%" });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: root,
          start: "top top",
          end: "+=240%",
          pin: true,
          scrub: 1,
          anticipatePin: 1,
          invalidateOnRefresh: true,
        },
      });

      tl.to(
        cards[0],
        { y: -150, scale: 0.88, rotate: -3, opacity: 0.28, ease: "power2.out" },
        0,
      );
      tl.to(
        cards[1],
        { y: -92, scale: 0.96, rotate: -1.1, opacity: 0.92, ease: "power2.out" },
        0.07,
      );
      tl.to(
        cards[2],
        { y: -32, scale: 1, rotate: 0, opacity: 1, zIndex: 36, ease: "expo.out" },
        0.14,
      );

      if (blobA) {
        gsap.fromTo(
          blobA,
          { yPercent: -6 },
          {
            yPercent: 14,
            ease: "none",
            scrollTrigger: {
              trigger: root,
              start: "top bottom",
              end: "bottom top",
              scrub: 1,
            },
          },
        );
      }
      if (blobB) {
        gsap.fromTo(
          blobB,
          { yPercent: 8 },
          {
            yPercent: -22,
            ease: "none",
            scrollTrigger: {
              trigger: root,
              start: "top bottom",
              end: "bottom top",
              scrub: 1,
            },
          },
        );
      }
    }, root);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={rootRef}
      id="stack"
      className="chapter-rule-top section-grain relative bg-[var(--surface-dark)]"
      style={{ height: "240vh" }}
    >
      {/* Avoid position:sticky inside a ScrollTrigger-pinned parent — it collapses layout. */}
      <div className="flex min-h-[100dvh] w-full flex-col justify-center px-5 py-16 md:px-10">
        <div className="relative mx-auto w-full max-w-lg">
          <div
            ref={blobARef}
            className="pointer-events-none absolute -left-1/4 top-1/4 h-72 w-72 rounded-full bg-[var(--orchid)]/20 blur-3xl will-change-transform"
            aria-hidden
          />
          <div
            ref={blobBRef}
            className="pointer-events-none absolute -right-1/3 bottom-0 h-80 w-80 rounded-full bg-[var(--magenta)]/15 blur-3xl will-change-transform"
            aria-hidden
          />

          <p className="relative z-[1] mb-14 max-w-xl font-[family-name:var(--font-display)] text-[clamp(1.75rem,4.5vw,2.75rem)] font-semibold leading-[1.12] tracking-tight text-white">
            Capsules of clarity — stacked, then released.
          </p>

          <div className="relative z-[2] mx-auto mt-4 h-[380px] w-full max-w-md md:h-[420px]">
            {CAPSULES.map((c, i) => (
              <article
                key={c.kicker}
                ref={(el) => {
                  cardsRef.current[i] = el;
                }}
                className="absolute left-1/2 top-0 w-[92%] max-w-md -translate-x-1/2 rounded-[1.75rem] border border-white/[0.1] bg-[#0c0c12]/90 p-7 shadow-[0_40px_120px_rgba(0,0,0,0.55)] backdrop-blur-xl will-change-transform md:p-8"
                style={{
                  top: 8 + i * 14,
                  zIndex: 10 + i,
                }}
              >
                <p className="font-[family-name:var(--font-ui)] text-[10px] font-bold uppercase tracking-[0.22em] text-[var(--cyan)]">
                  {c.kicker}
                </p>
                <h3 className="mt-3 font-[family-name:var(--font-display)] text-xl font-semibold text-white md:text-2xl">
                  {c.title}
                </h3>
                <p className="mt-3 font-[family-name:var(--font-sans)] text-sm leading-relaxed text-white/65 md:text-[0.95rem]">
                  {c.body}
                </p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
