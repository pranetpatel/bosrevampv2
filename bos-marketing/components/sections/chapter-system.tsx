import { BosOrbital } from "@/components/bos-orbital";
import { MotionClipReveal, MotionReveal } from "@/components/motion-reveal";

const MODULE_SURFACE_NAMES = [
  "AI Execution",
  "Workflow",
  "Team OPS",
  "Client Delivery",
  "Intelligence",
  "Communication",
  "Command View",
  "Integrations",
] as const;

export function ChapterSystemSection() {
  return (
    <section
      id="system"
      className="chapter-rule-top section-grain sticky top-0 z-[1] min-h-screen border-t border-white/8 bg-[var(--surface-dark)] px-6 py-28 md:px-14"
    >
      <div className="mx-auto max-w-6xl space-y-14">
        <MotionReveal>
          <p className="text-center font-[family-name:var(--font-ui)] text-[10px] font-bold uppercase tracking-[0.26em] text-white/52">
            What BOS is
          </p>
          <h2 className="mt-5 text-center font-[family-name:var(--font-display)] text-[clamp(2.25rem,5vw,4rem)] font-semibold leading-[1.06] tracking-tight text-white">
            <MotionClipReveal delay={0.1} as="span">
              you think it,
            </MotionClipReveal>{" "}
            <MotionClipReveal delay={0.2} as="span">
              BOS executes it
            </MotionClipReveal>
          </h2>
          <p
            className="mx-auto mt-8 max-w-4xl text-center font-[family-name:var(--font-ui)] text-[10px] font-bold uppercase leading-relaxed tracking-[0.18em] text-white/55 md:text-[11px] md:tracking-[0.2em]"
            aria-label="BOS product surfaces"
          >
            {MODULE_SURFACE_NAMES.map((name, i) => (
              <span key={name} className="inline-block">
                {i > 0 ? (
                  <span className="mx-2 text-white/25 md:mx-2.5" aria-hidden>
                    ·
                  </span>
                ) : null}
                {name}
              </span>
            ))}
          </p>
        </MotionReveal>

        <MotionReveal delay={0.15}>
          <BosOrbital />
        </MotionReveal>

        <p className="text-center font-[family-name:var(--font-display)] text-[9px] font-semibold uppercase tracking-[0.22em] text-white/45">
          Each card is a live slice of the product
        </p>
      </div>
    </section>
  );
}
