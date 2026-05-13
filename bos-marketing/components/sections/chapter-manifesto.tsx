import { MotionClipReveal, MotionReveal, MotionStagger, MotionStaggerItem } from "@/components/motion-reveal";

const principles = [
  { n: "01", hed: "The bottleneck is plumbing.", sub: "Not people." },
  { n: "02", hed: "AI executes — not advises.", sub: "Shipped changes." },
  { n: "03", hed: "Intent beats instruction.", sub: "Outcomes first." },
  { n: "04", hed: "Speed is the moat.", sub: "Unified ops layer." },
];

export function ChapterManifestoSection() {
  return (
    <section
      id="manifesto"
      className="chapter-rule-top section-grain relative z-[1] bg-[var(--surface-raised)] px-6 py-28 md:px-14"
    >
      <div className="mx-auto max-w-6xl">
        <MotionReveal>
          <p className="font-[family-name:var(--font-ui)] text-[10px] font-bold uppercase tracking-[0.26em] text-white/52">
            Principles
          </p>
          <h2 className="mt-5 max-w-xl font-[family-name:var(--font-display)] text-[clamp(2.25rem,5vw,4rem)] font-semibold leading-[1.06] tracking-tight text-white">
            <MotionClipReveal delay={0.1} as="span">What we</MotionClipReveal>
            <MotionClipReveal delay={0.2} as="span">believe.</MotionClipReveal>
          </h2>
        </MotionReveal>
        <MotionStagger className="mt-16 grid gap-5 md:grid-cols-2">
          {principles.map((t) => (
            <MotionStaggerItem key={t.n}>
              <article className="group flex h-full flex-col rounded-2xl border border-white/8 bg-white/[0.03] p-10 transition duration-300 hover:border-[var(--orchid)]/30 hover:bg-[var(--orchid)]/[0.05] hover:shadow-[0_8px_40px_rgba(26,83,253,0.12)]">
                <span className="font-[family-name:var(--font-display)] text-sm font-semibold text-white/50 transition duration-300 group-hover:text-white/75">
                  {t.n}
                </span>
                <h3 className="mt-6 font-[family-name:var(--font-display)] text-[1.55rem] font-semibold leading-[1.1] text-white md:text-[1.75rem]">
                  {t.hed}
                </h3>
                <p className="mt-3 font-[family-name:var(--font-ui)] text-sm font-semibold uppercase tracking-[0.16em] text-[var(--magenta)]">
                  {t.sub}
                </p>
              </article>
            </MotionStaggerItem>
          ))}
        </MotionStagger>
      </div>
    </section>
  );
}
