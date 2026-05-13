import { BosOrbital } from "@/components/bos-orbital";
import { MotionClipReveal, MotionReveal } from "@/components/motion-reveal";

export function ChapterSystemSection() {
  return (
    <section
      id="system"
      className="chapter-rule-top section-grain relative z-[1] border-t border-white/8 bg-[var(--surface-dark)] px-6 py-28 md:px-14"
    >
      <div className="mx-auto max-w-6xl space-y-14">
        <MotionReveal>
          <p className="text-center font-[family-name:var(--font-ui)] text-[10px] font-bold uppercase tracking-[0.26em] text-white/52">
            What BOS is
          </p>
          <h2 className="mt-5 text-center font-[family-name:var(--font-display)] text-[clamp(2.25rem,5vw,4rem)] font-semibold leading-[1.06] tracking-tight text-white">
            <MotionClipReveal delay={0.1} as="span">
              One Platform.
            </MotionClipReveal>
            <MotionClipReveal delay={0.22} as="span">
              Six Systems.
            </MotionClipReveal>
          </h2>
        </MotionReveal>

        <MotionReveal delay={0.15}>
          <BosOrbital />
        </MotionReveal>

        <p className="text-center font-[family-name:var(--font-display)] text-[9px] font-semibold uppercase tracking-[0.22em] text-white/45">
          Hover · then click to explore
        </p>
      </div>
    </section>
  );
}
