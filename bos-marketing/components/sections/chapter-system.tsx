import { ChapterMediaPanel } from "@/components/chapter-media-panel";
import { MotionClipReveal, MotionReveal, MotionStagger, MotionStaggerItem } from "@/components/motion-reveal";
import { SITE_MEDIA } from "@/lib/site-media";

const pillars = [
  { title: "Work", tag: "Execution in one thread" },
  { title: "Data", tag: "Living context" },
  { title: "Teams", tag: "Humans + agents" },
  { title: "Agents", tag: "Actions, not tips" },
];

export function ChapterSystemSection() {
  return (
    <section
      id="system"
      className="chapter-rule-top section-grain relative z-[1] border-t border-white/8 bg-[var(--surface-dark)] px-6 py-28 md:px-14"
    >
      <div className="mx-auto max-w-6xl space-y-14">
        <MotionReveal>
          <ChapterMediaPanel
            src={SITE_MEDIA.chapterSystem}
            alt="One orchestration layer connecting work, data, teams, and agents — abstract glass and light."
            variant="edge-fade"
            aspectClassName="aspect-[16/9] md:aspect-[21/8]"
          />
        </MotionReveal>
        <div>
          <MotionReveal>
            <p className="text-center font-[family-name:var(--font-ui)] text-[10px] font-bold uppercase tracking-[0.26em] text-white/40">
              What BOS is
            </p>
            <h2 className="mt-5 text-center font-[family-name:var(--font-display)] text-[clamp(2.25rem,5vw,4rem)] font-semibold leading-[1.06] tracking-tight text-white">
              <MotionClipReveal delay={0.1} as="span">
                Business Orchestration
              </MotionClipReveal>
              <MotionClipReveal delay={0.22} as="span">
                System
              </MotionClipReveal>
            </h2>
            <p className="mx-auto mt-6 max-w-md text-center font-[family-name:var(--font-ui)] text-base leading-relaxed text-white/55 md:text-lg">
              Work, data, teams, agents — one layer that executes.
            </p>
          </MotionReveal>
          <MotionStagger className="mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {pillars.map((p) => (
              <MotionStaggerItem key={p.title}>
                <div className="group flex h-full flex-col rounded-2xl border border-white/8 bg-white/[0.03] px-7 py-9 transition duration-300 hover:border-[var(--orchid)]/40 hover:bg-[var(--orchid)]/[0.06]">
                  <span className="font-[family-name:var(--font-display)] text-4xl font-semibold leading-[1.05] tracking-wide text-white/45 transition duration-300 group-hover:text-white/70 md:text-5xl">
                    {p.title}
                  </span>
                  <span className="mt-5 font-[family-name:var(--font-ui)] text-xs font-semibold uppercase tracking-[0.14em] text-white/40 transition duration-300 group-hover:text-white/60">
                    {p.tag}
                  </span>
                </div>
              </MotionStaggerItem>
            ))}
          </MotionStagger>
        </div>
      </div>
    </section>
  );
}
