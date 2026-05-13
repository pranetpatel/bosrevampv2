"use client";

import { MotionClipReveal, MotionReveal, MotionStagger, MotionStaggerItem } from "@/components/motion-reveal";
import { usePrefersReducedMotion } from "@/components/use-prefers-reduced-motion";
import { problemBridge, problemStats } from "@/lib/legacy-parity-content";
import { useEffect, useState } from "react";

export function ProblemBridgeStats() {
  const reduced = usePrefersReducedMotion();
  const [bridgeIn, setBridgeIn] = useState(reduced);

  useEffect(() => {
    if (reduced) return;
    const t = window.setTimeout(() => setBridgeIn(true), 200);
    return () => window.clearTimeout(t);
  }, [reduced]);

  return (
    <div className="mt-10 w-full space-y-0 md:mt-14">
      <div className="px-0 py-16 text-center md:py-24">
        <MotionReveal>
          <p
            className="font-[family-name:var(--font-display)] text-[clamp(1.35rem,3.8vw,3.75rem)] font-semibold leading-[1.08] tracking-tight text-white/85 transition-[clip-path] duration-1000"
            style={{
              clipPath: bridgeIn ? "inset(0 0 0% 0)" : "inset(0 0 100% 0)",
            }}
          >
            {problemBridge.line1}
          </p>
        </MotionReveal>
        <div className="mt-3 flex flex-wrap items-baseline justify-center gap-x-[clamp(0.45rem,1.4vw,1.6rem)] gap-y-1">
          {problemBridge.line2Words.map((w, i) => (
            <MotionClipReveal key={`${w}-${i}`} delay={0.08 + i * 0.06} as="span">
              <span
                className={`font-[family-name:var(--font-display)] text-[clamp(1.65rem,5vw,5.5rem)] font-semibold leading-[1.02] tracking-tight ${
                  w === "between."
                    ? "bg-gradient-to-r from-[var(--magenta)] via-[var(--orchid)] to-[var(--cyan)] bg-clip-text text-transparent"
                    : "text-white"
                }`}
              >
                {w}
              </span>
            </MotionClipReveal>
          ))}
        </div>
      </div>

      <MotionStagger className="grid grid-cols-1 overflow-hidden rounded-2xl border border-white/10 md:grid-cols-2 lg:grid-cols-4">
        {problemStats.map((s) => (
          <MotionStaggerItem key={s.label}>
            <div className="border-b border-white/10 bg-white/[0.03] px-8 py-10 transition-colors hover:bg-white/[0.05] md:border-b-0 md:border-r md:last:border-r-0 lg:border-b-0">
              <p className="font-[family-name:var(--font-display)] text-[clamp(2.5rem,5vw,3.5rem)] font-semibold leading-none text-white">
                {s.n}
              </p>
              <p className="mt-3 font-[family-name:var(--font-display)] text-base font-semibold text-white/90">
                {s.label}
              </p>
              <p className="mt-2 font-[family-name:var(--font-sans)] text-sm leading-relaxed text-white/50">
                {s.desc}
              </p>
            </div>
          </MotionStaggerItem>
        ))}
      </MotionStagger>
    </div>
  );
}
