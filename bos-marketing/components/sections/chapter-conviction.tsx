import { ChapterMediaPanel } from "@/components/chapter-media-panel";
import { MotionClipReveal, MotionReveal } from "@/components/motion-reveal";
import { SITE_MEDIA } from "@/lib/site-media";

const noMore = ["Tool switching", "Workflow theatre", "Manual coordination"];
const instead = ["Faster execution", "Clear visibility", "Real control"];

export function ChapterConvictionSection() {
  return (
    <section
      id="conviction"
      className="chapter-rule-top section-grain relative z-[1] bg-[var(--surface-dark)] px-6 py-28 md:px-14"
    >
      <div className="mx-auto max-w-6xl">
        <MotionReveal>
          <p className="font-[family-name:var(--font-ui)] text-[10px] font-bold uppercase tracking-[0.26em] text-white/52">
            Why it matters
          </p>
          <h2 className="mt-5 max-w-3xl font-[family-name:var(--font-display)] text-[clamp(2.25rem,5vw,4rem)] font-semibold leading-[1.06] tracking-tight text-white">
            <MotionClipReveal delay={0.1} as="span">Strip the</MotionClipReveal>
            <MotionClipReveal delay={0.22} as="span">coordination tax.</MotionClipReveal>
          </h2>
        </MotionReveal>
        <div className="mt-16 grid gap-12 md:grid-cols-2 md:gap-20">
          <MotionReveal delay={0.06}>
            <p className="text-[10px] font-bold uppercase tracking-[0.24em] text-white/55">
              Less
            </p>
            <ul className="mt-6 space-y-5 font-[family-name:var(--font-display)] text-xl font-semibold leading-[1.1] text-white/70 md:text-2xl">
              {noMore.map((x) => (
                <li key={x} className="flex gap-3">
                  <span className="mt-1 shrink-0 text-white/50" aria-hidden> - </span>
                  {x}
                </li>
              ))}
            </ul>
          </MotionReveal>
          <MotionReveal delay={0.14}>
            <p className="text-[10px] font-bold uppercase tracking-[0.24em] text-[var(--cyan)]">
              More
            </p>
            <ul className="mt-6 space-y-5 font-[family-name:var(--font-display)] text-xl font-semibold leading-[1.1] text-white md:text-2xl">
              {instead.map((x) => (
                <li key={x} className="flex gap-3">
                  <span className="mt-1 shrink-0 text-[var(--cyan)]" aria-hidden>✓</span>
                  {x}
                </li>
              ))}
            </ul>
          </MotionReveal>
        </div>
        <MotionReveal delay={0.1} className="mt-16">
          <ChapterMediaPanel
            src={SITE_MEDIA.chapterVelocity}
            alt="Execution at speed  -  operators move from intent to shipped outcomes without coordination drag."
            variant="edge-fade"
            aspectClassName="aspect-[16/9] md:aspect-[21/8]"
          />
        </MotionReveal>
        <MotionReveal delay={0.14}>
          <div className="mx-auto mt-20 max-w-3xl border-t border-white/8 pt-14 text-center">
            <p className="font-[family-name:var(--font-ui)] text-[10px] font-bold uppercase tracking-[0.26em] text-white/52">
              Built for
            </p>
            <p className="mt-6 font-[family-name:var(--font-display)] text-[clamp(1.5rem,3.5vw,2.5rem)] font-semibold leading-[1.1] tracking-tight text-white">
              Builders. Operators. Lean teams  - {" "}
              <span className="text-white/50">not enterprise wallpaper.</span>
            </p>
          </div>
        </MotionReveal>
      </div>
    </section>
  );
}
