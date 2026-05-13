import { MotionStagger, MotionStaggerItem } from "@/components/motion-reveal";

const pillars = [
  {
    label: "AI Agents",
    headline: "Move.",
    body: "Autonomous agents handle execution so you handle direction.",
  },
  {
    label: "Teams",
    headline: "Align.",
    body: "Everyone works from one system. No chasing. No re-explaining.",
  },
  {
    label: "Work",
    headline: "Progresses.",
    body: "Without complexity. Without overhead. Just momentum.",
  },
] as const;

const card =
  "relative z-0 h-full rounded-2xl border border-transparent bg-transparent p-6 transition-[transform,box-shadow,background-color,border-color,opacity] duration-300 ease-[var(--ease)] motion-reduce:transition-none md:p-8 " +
  "group-hover/pillars:[&:not(:hover)]:scale-[0.98] group-hover/pillars:[&:not(:hover)]:opacity-40 " +
  "hover:z-10 hover:-translate-y-2 hover:scale-[1.02] hover:border-white/12 hover:bg-[var(--surface-raised)] hover:shadow-[0_22px_50px_-18px_rgba(0,0,0,0.85)] motion-reduce:hover:translate-y-0 motion-reduce:hover:scale-100";

export function ChapterFlowPillarsSection() {
  return (
    <section
      aria-label="How execution, alignment, and momentum fit together"
      className="relative z-[1] overflow-x-clip overflow-y-visible bg-black px-6 py-20 md:px-14 md:py-24"
    >
      <div className="mx-auto max-w-6xl">
        <MotionStagger className="group/pillars grid gap-6 md:grid-cols-3 md:gap-4">
          {pillars.map((p) => (
            <MotionStaggerItem key={p.label} className="min-h-0">
              <div className={card}>
                <p className="font-[family-name:var(--font-ui)] text-[10px] font-bold uppercase tracking-[0.26em] text-white/52">
                  {p.label}
                </p>
                <h3 className="mt-4 font-[family-name:var(--font-display)] text-[clamp(1.75rem,4vw,2.75rem)] font-semibold leading-[1.08] tracking-tight text-[var(--foreground)]">
                  {p.headline}
                </h3>
                <p className="mt-4 max-w-sm font-[family-name:var(--font-ui)] text-sm leading-relaxed text-white/72 md:text-[0.9375rem]">
                  {p.body}
                </p>
              </div>
            </MotionStaggerItem>
          ))}
        </MotionStagger>
      </div>
    </section>
  );
}
