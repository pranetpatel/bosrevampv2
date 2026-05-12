import Link from "next/link";
import { MotionClipReveal, MotionReveal } from "@/components/motion-reveal";

export function FinalCtaSection() {
  return (
    <section
      id="close"
      className="chapter-rule-top section-grain relative z-[1] overflow-hidden bg-[var(--surface-dark)] px-6 py-32 md:px-14"
    >
      {/* Centered orchid glow */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(26,83,253,0.12),transparent_60%)]" />

      <MotionReveal className="relative mx-auto max-w-3xl text-center">
        <p className="font-[family-name:var(--font-ui)] text-[10px] font-bold uppercase tracking-[0.26em] text-white/35">
          The future isn&apos;t more software
        </p>
        <h2 className="mt-8 font-[family-name:var(--font-display)] text-[clamp(2.5rem,6vw,5.5rem)] font-semibold leading-[1.04] tracking-tight text-white">
          <MotionClipReveal delay={0.1} as="span">One system that</MotionClipReveal>
          <MotionClipReveal delay={0.22} as="span">runs everything.</MotionClipReveal>
        </h2>
        <p className="mx-auto mt-8 max-w-lg font-[family-name:var(--font-display)] text-xl font-semibold leading-[1.15] text-white/60 md:text-2xl">
          Run your business on BOS
        </p>
        <div className="mt-12 flex flex-wrap justify-center gap-4">
          <Link
            href="/demo"
            className="group relative inline-flex overflow-hidden rounded-full bg-[var(--orchid)] px-10 py-4 font-[family-name:var(--font-ui)] text-sm font-bold text-white shadow-[0_12px_40px_var(--purple-glow)] transition duration-300 hover:-translate-y-0.5 hover:shadow-[0_16px_56px_var(--purple-glow)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--cyan)]"
          >
            {/* Shimmer sweep on hover */}
            <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/15 to-transparent transition-transform duration-500 group-hover:translate-x-full" aria-hidden />
            <span className="relative">Get started</span>
          </Link>
          <Link
            href="/mba"
            className="inline-flex rounded-full border border-white/20 bg-white/[0.04] px-10 py-4 font-[family-name:var(--font-ui)] text-sm font-semibold text-white/80 backdrop-blur-sm transition duration-300 hover:border-white/35 hover:bg-white/[0.08] hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--orchid)]"
          >
            Explore BOS MBA
          </Link>
        </div>
      </MotionReveal>
    </section>
  );
}
