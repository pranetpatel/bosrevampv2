import Link from "next/link";
import { FlowShowcaseVideo } from "@/components/flow-showcase-video";
import { MotionClipReveal, MotionReveal } from "@/components/motion-reveal";

export function ChapterFlowSection() {
  return (
    <section
      id="flow"
      className="chapter-rule-top section-grain relative z-[1] bg-[var(--surface-raised)] px-6 py-28 md:px-14"
    >
      <div className="mx-auto max-w-6xl">
        <MotionReveal className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
          <div>
            <p className="font-[family-name:var(--font-ui)] text-[10px] font-bold uppercase tracking-[0.26em] text-white/52">
              How BOS Works
            </p>
            <h2 className="mt-5 font-[family-name:var(--font-display)] text-[clamp(2.25rem,5vw,4rem)] font-semibold leading-[1.06] tracking-tight text-white">
              <MotionClipReveal delay={0.1} as="span">you think it,</MotionClipReveal>{" "}
              <MotionClipReveal delay={0.2} as="span">BOS executes it</MotionClipReveal>
            </h2>
          </div>
          <Link
            href="/how-it-works"
            className="inline-flex w-fit items-center gap-2 font-[family-name:var(--font-ui)] text-sm font-semibold text-[var(--cyan)] transition hover:gap-3 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--orchid)]"
          >
            Full flow →
          </Link>
        </MotionReveal>
        <MotionReveal delay={0.1} className="mt-16">
          <FlowShowcaseVideo />
        </MotionReveal>
      </div>
    </section>
  );
}
