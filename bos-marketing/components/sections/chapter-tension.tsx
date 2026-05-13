import { GapFrictionDissolve } from "@/components/gap-friction-dissolve";
import { MotionClipReveal, MotionReveal } from "@/components/motion-reveal";

export function ChapterTensionSection() {
  return (
    <section
      id="tension"
      className="chapter-rule-top section-grain relative z-[1] flex min-h-0 flex-1 flex-col bg-[var(--surface-dark)] px-6 pb-8 pt-8 md:px-14 md:pb-12 md:pt-10"
    >
      <div className="mx-auto flex min-h-0 w-full max-w-6xl flex-1 flex-col space-y-6 md:space-y-8">
        <MotionReveal>
          <GapFrictionDissolve />
        </MotionReveal>
        <MotionReveal delay={0.08}>
          <div className="min-h-0 shrink overflow-hidden rounded-[2rem] border border-white/8 bg-gradient-to-br from-[#0a1528] via-[#140a24] to-[#0a0a0a] shadow-[0_32px_100px_rgba(0,0,0,0.5)]">
            <div className="relative px-6 py-10 md:px-12 md:py-16">
              <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_70%_25%,rgba(218,52,241,0.13),transparent_55%)]" />
              <p className="font-[family-name:var(--font-ui)] text-[10px] font-bold uppercase tracking-[0.28em] text-[var(--cyan)] drop-shadow-[0_1px_8px_rgba(0,0,0,0.9)]">
                The gap
              </p>
              <h2 className="mt-4 font-[family-name:var(--font-display)] text-[clamp(2.25rem,5.5vw,4.75rem)] font-semibold leading-[1.06] tracking-tight">
                <MotionClipReveal delay={0.12}>
                  <span className="bg-gradient-to-r from-[var(--magenta)] via-[var(--orchid)] to-[var(--cyan)] bg-clip-text text-transparent">
                    Your business isn&apos;t broken.
                  </span>
                </MotionClipReveal>
                <MotionClipReveal delay={0.24}>
                  <span className="text-white">Your system is.</span>
                </MotionClipReveal>
              </h2>
              <div className="mt-8 grid gap-4 md:mt-10 md:grid-cols-2 md:gap-6">
                <MotionReveal delay={0.14}>
                  <div className="rounded-2xl border border-white/8 bg-white/[0.04] px-7 py-8 backdrop-blur-sm">
                    <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-white/55">
                      Old world
                    </p>
                    <p className="mt-3 font-[family-name:var(--font-display)] text-2xl font-semibold leading-[1.12] text-white/85 md:text-3xl">
                      You manage software
                    </p>
                  </div>
                </MotionReveal>
                <MotionReveal delay={0.22}>
                  <div className="rounded-2xl border border-[var(--orchid)]/35 bg-[var(--orchid)]/[0.1] px-7 py-8 shadow-[0_8px_40px_rgba(26,83,253,0.2)]">
                    <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-[var(--cyan)]">
                      New world
                    </p>
                    <p className="mt-3 font-[family-name:var(--font-display)] text-2xl font-semibold leading-[1.12] text-white md:text-3xl">
                      Your system runs the business
                    </p>
                  </div>
                </MotionReveal>
              </div>
            </div>
          </div>
        </MotionReveal>
      </div>
    </section>
  );
}
