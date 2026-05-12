import { MotionClipReveal, MotionReveal, MotionStagger, MotionStaggerItem } from "@/components/motion-reveal";

const cards = [
  { tag: "Lean teams", hed: "More leverage per person" },
  { tag: "Fast operators", hed: "Decisions at thought-speed" },
  { tag: "Modern businesses", hed: "One layer — every function" },
];

export function ChapterAudienceSection() {
  return (
    <section
      id="tribe"
      className="chapter-rule-top section-grain relative z-[1] overflow-hidden bg-[var(--surface-dark)] px-6 py-28 md:px-14"
    >
      {/* Ambient light blobs */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_50%_0%,rgba(26,83,253,0.18),transparent_52%)]" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_80%_85%,rgba(218,52,241,0.1),transparent_45%)]" />

      <div className="relative mx-auto max-w-6xl">
        <MotionReveal>
          <h2 className="font-[family-name:var(--font-display)] text-[clamp(2.5rem,6vw,5rem)] font-semibold leading-[1.04] tracking-tight text-white">
            <MotionClipReveal delay={0.05} as="span">Who runs</MotionClipReveal>
            <MotionClipReveal delay={0.18} as="span">
              on <span className="bg-gradient-to-r from-[var(--orchid)] to-[var(--cyan)] bg-clip-text text-transparent">BOS</span>
            </MotionClipReveal>
          </h2>
          <p className="mt-6 max-w-sm font-[family-name:var(--font-ui)] text-base leading-relaxed text-white/55">
            Teams that need execution — not another dashboard.
          </p>
        </MotionReveal>
        <MotionStagger className="audience-scroll mt-14 flex gap-6 overflow-x-auto pb-4 pt-2 md:gap-8">
          {cards.map((c) => (
            <MotionStaggerItem key={c.tag}>
              <article className="group min-w-[270px] shrink-0 rounded-2xl border border-white/10 bg-white/[0.05] p-9 backdrop-blur-md transition duration-300 hover:border-[var(--orchid)]/30 hover:bg-[var(--orchid)]/[0.08] md:min-w-[310px]">
                <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-[var(--cyan)]">
                  {c.tag}
                </p>
                <h3 className="mt-6 font-[family-name:var(--font-display)] text-xl font-semibold leading-[1.1] text-white md:text-2xl">
                  {c.hed}
                </h3>
              </article>
            </MotionStaggerItem>
          ))}
        </MotionStagger>
      </div>
    </section>
  );
}
