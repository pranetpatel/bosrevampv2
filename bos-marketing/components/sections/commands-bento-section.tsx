"use client";

import { MotionReveal, MotionStagger, MotionStaggerItem } from "@/components/motion-reveal";
import { usePrefersReducedMotion } from "@/components/use-prefers-reduced-motion";
import { commandCards } from "@/lib/legacy-parity-content";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

/** Tailwind col spans for `lg:grid-cols-12` — matches legacy bento rhythm */
const CARD_LG_SPAN = [
  "lg:col-span-7",
  "lg:col-span-5",
  "lg:col-span-4",
  "lg:col-span-4",
  "lg:col-span-4",
  "lg:col-span-4",
  "lg:col-span-8",
  "lg:col-span-4",
] as const;

function SparkCanvas({ active }: { active: boolean }) {
  const ref = useRef<HTMLCanvasElement>(null);
  const reduced = usePrefersReducedMotion();

  useEffect(() => {
    if (reduced || !active) return;
    const c = ref.current;
    if (!c) return;
    const ctx = c.getContext("2d");
    if (!ctx) return;
    let raf = 0;
    let cancelled = false;
    let t = 0;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);

    const draw = () => {
      if (cancelled) return;
      const w = c.clientWidth;
      const h = c.clientHeight;
      if (w < 2 || h < 2) {
        raf = requestAnimationFrame(draw);
        return;
      }
      c.width = w * dpr;
      c.height = h * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      ctx.clearRect(0, 0, w, h);
      t += 0.02;
      for (let i = 0; i < 18; i++) {
        const x = (w * (0.15 + 0.7 * Math.sin(t * 0.7 + i * 0.4) * 0.5 + i * 0.05)) % w;
        const y = (h * (0.2 + 0.6 * Math.cos(t * 0.5 + i * 0.3))) % h;
        ctx.fillStyle = `rgba(26,83,253,${0.04 + (i % 5) * 0.02})`;
        ctx.beginPath();
        ctx.arc(x, y, 1.2 + (i % 3), 0, Math.PI * 2);
        ctx.fill();
      }
      raf = requestAnimationFrame(draw);
    };
    raf = requestAnimationFrame(draw);
    return () => {
      cancelled = true;
      cancelAnimationFrame(raf);
    };
  }, [active, reduced]);

  if (reduced) return null;
  return <canvas ref={ref} className="pointer-events-none absolute inset-0 opacity-50" aria-hidden />;
}

function BentoCard({
  card,
  spanClass,
}: {
  card: (typeof commandCards)[number];
  spanClass: string;
}) {
  const rootRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = rootRef.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([e]) => {
        setVisible(e.isIntersecting);
      },
      { rootMargin: "48px", threshold: 0.1 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <MotionStaggerItem className={spanClass}>
      <div
        ref={rootRef}
        className="relative min-h-[220px] overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] p-7 transition hover:border-[var(--orchid)]/35 hover:shadow-[0_8px_60px_rgba(26,83,253,0.12)]"
      >
        <SparkCanvas active={visible} />
        <div className="relative z-[1] flex min-h-[200px] flex-col">
          <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl border border-[var(--orchid)]/25 bg-[var(--orchid)]/10">
            <span className="text-xs font-bold text-[var(--cyan)]" aria-hidden>
              ◆
            </span>
          </div>
          <p className="font-[family-name:var(--font-ui)] text-[10px] font-bold uppercase tracking-[0.2em] text-[var(--magenta)]">
            {card.label}
          </p>
          <h3 className="mt-2 font-[family-name:var(--font-display)] text-xl font-semibold text-white">
            {card.title}
          </h3>
          <p className="mt-2 font-[family-name:var(--font-sans)] text-sm leading-relaxed text-white/55">
            {card.desc}
          </p>
          {card.terminal ? (
            <div className="mt-4 rounded-lg border border-white/10 bg-black/40 p-3 font-mono text-[11px] leading-relaxed">
              {card.terminal.map((line) => (
                <div key={line.out}>
                  <span className="text-[var(--cyan)]">{line.prompt}</span>{" "}
                  <span className="text-white/50">{line.out}</span>
                </div>
              ))}
            </div>
          ) : null}
          {card.metrics ? (
            <div className="mt-4 flex flex-wrap gap-6">
              {card.metrics.map((m) => (
                <div key={m.val}>
                  <p className="font-[family-name:var(--font-display)] text-2xl font-semibold text-[var(--cyan)]">
                    {m.val}
                  </p>
                  <p className="text-[10px] font-semibold uppercase tracking-[0.12em] text-white/40">
                    {m.sub}
                  </p>
                </div>
              ))}
            </div>
          ) : null}
          {card.live ? (
            <p className="mt-4 flex items-center gap-2 font-[family-name:var(--font-ui)] text-[10px] font-bold uppercase tracking-[0.14em] text-[var(--orchid)]">
              <span className="inline-block h-1.5 w-1.5 animate-pulse rounded-full bg-[var(--orchid)]" />
              {card.live}
            </p>
          ) : null}
        </div>
      </div>
    </MotionStaggerItem>
  );
}

export function CommandsBentoSection() {
  return (
    <section
      id="commands"
      className="chapter-rule-top section-grain relative z-[1] bg-[var(--surface-dark)] px-6 py-24 md:px-14 md:py-32"
    >
      <div className="mx-auto max-w-6xl">
        <MotionReveal>
          <p className="flex items-center gap-3 font-[family-name:var(--font-ui)] text-[10px] font-bold uppercase tracking-[0.24em] text-[var(--cyan)]">
            <span className="h-px w-5 bg-[var(--cyan)]/80" aria-hidden />
            Commands
          </p>
          <h2 className="mt-5 max-w-3xl font-[family-name:var(--font-display)] text-[clamp(2rem,4.5vw,3.5rem)] font-semibold leading-[1.08] tracking-tight text-white">
            One layer.{" "}
            <em className="not-italic bg-gradient-to-r from-[var(--magenta)] to-[var(--cyan)] bg-clip-text text-transparent">
              Every surface executes.
            </em>
          </h2>
          <p className="mt-6 max-w-md font-[family-name:var(--font-sans)] text-base leading-relaxed text-white/55">
            Chat, projects, data, agents, and integrations — composed into shipped outcomes instead
            of another dashboard.
          </p>
          <p className="mt-6">
            <Link
              href="/product#modules"
              className="font-[family-name:var(--font-ui)] text-xs font-bold uppercase tracking-[0.14em] text-[var(--orchid)] hover:text-[var(--cyan)]"
            >
              See all modules →
            </Link>
          </p>
        </MotionReveal>

        <MotionStagger className="mt-14 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-12 lg:gap-4">
          {commandCards.map((card, i) => (
            <BentoCard key={card.moduleKey} card={card} spanClass={CARD_LG_SPAN[i] ?? "lg:col-span-6"} />
          ))}
        </MotionStagger>
      </div>
    </section>
  );
}
