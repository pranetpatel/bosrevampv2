import Link from "next/link";
import { FlowShowcaseVideo } from "@/components/flow-showcase-video";
import { MotionClipReveal, MotionReveal, MotionStagger, MotionStaggerItem } from "@/components/motion-reveal";

const steps = [
  { title: "You state outcomes", line: "Plain intent — not ticket soup." },
  { title: "BOS orchestrates", line: "Agents ship real changes." },
  { title: "You stay sovereign", line: "Visibility without theater." },
];

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
        <MotionStagger className="mt-16 grid gap-8 md:grid-cols-3">
          {steps.map((s, idx) => (
            <MotionStaggerItem key={s.title}>
              <div className="relative border-l border-[var(--orchid)]/30 pl-8 md:pl-10">
                <span className="absolute -left-[11px] top-0 flex h-[22px] w-[22px] items-center justify-center rounded-full bg-[var(--orchid)] font-[family-name:var(--font-ui)] text-[11px] font-bold text-white md:-left-[13px] md:h-7 md:w-7 md:text-xs">
                  {idx + 1}
                </span>
                <h3 className="font-[family-name:var(--font-display)] text-xl font-semibold leading-[1.1] text-white md:text-2xl">
                  {s.title}
                </h3>
                <p className="mt-2.5 font-[family-name:var(--font-ui)] text-sm leading-relaxed text-white/72">
                  {s.line}
                </p>
              </div>
            </MotionStaggerItem>
          ))}
        </MotionStagger>
      </div>
    </section>
  );
}
