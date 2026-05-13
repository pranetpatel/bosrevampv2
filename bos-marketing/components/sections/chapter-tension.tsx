import { ChapterMediaPanel } from "@/components/chapter-media-panel";
import { MotionClipReveal, MotionReveal } from "@/components/motion-reveal";
import { SITE_MEDIA } from "@/lib/site-media";

const friction = ["Fragmented tools", "Coordination overhead", "Blind spots"];

export function ChapterTensionSection() {
  return (
    <section
      id="tension"
      className="chapter-rule-top section-grain relative z-[1] bg-[var(--surface-dark)] px-6 pb-24 pt-12 md:px-14"
    >
      <div className="mx-auto max-w-6xl space-y-10">
        <MotionReveal>
          <ChapterMediaPanel
            src={SITE_MEDIA.chapterGap}
            alt="Fragmented operations and coordination overhead — cinematic abstract treatment."
            variant="edge-fade"
            aspectClassName="aspect-[16/9] md:aspect-[21/8]"
            priority={false}
          />
        </MotionReveal>
        <MotionReveal delay={0.08}>
          <div className="overflow-hidden rounded-[2rem] border border-white/8 bg-gradient-to-br from-[#0a1528] via-[#140a24] to-[#0a0a0a] shadow-[0_32px_100px_rgba(0,0,0,0.5)]">
            <div className="relative px-8 py-16 md:px-14 md:py-24">
              <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_70%_25%,rgba(218,52,241,0.13),transparent_55%)]" />
              <p className="font-[family-name:var(--font-ui)] text-[10px] font-bold uppercase tracking-[0.28em] text-[var(--cyan)] drop-shadow-[0_1px_8px_rgba(0,0,0,0.9)]">
                The gap
              </p>
              <h2 className="mt-5 font-[family-name:var(--font-display)] text-[clamp(2.25rem,5.5vw,4.75rem)] font-semibold leading-[1.06] tracking-tight">
                <MotionClipReveal delay={0.12}>
                  <span className="bg-gradient-to-r from-[var(--magenta)] via-[var(--orchid)] to-[var(--cyan)] bg-clip-text text-transparent">
                    Your business isn&apos;t broken.
                  </span>
                </MotionClipReveal>
                <MotionClipReveal delay={0.24}>
                  <span className="text-white">Your system is.</span>
                </MotionClipReveal>
              </h2>
              <div className="mt-14 grid gap-5 md:grid-cols-2 md:gap-8">
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
              <ul className="mt-12 flex flex-wrap gap-x-10 gap-y-4 font-[family-name:var(--font-ui)] text-sm font-medium text-white/55">
                {friction.map((b) => (
                  <li key={b} className="flex items-center gap-2.5">
                    <span className="h-px w-4 shrink-0 bg-[var(--cyan)]/60" aria-hidden />
                    {b}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </MotionReveal>
      </div>
    </section>
  );
}
