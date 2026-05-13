import { InnerPageShell } from "@/components/inner-page-shell";
import { MotionSection } from "@/components/motion-section";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects",
  description: "Case studies — from fragmented stacks to orchestrated execution on BOS.",
};

const cases = [
  {
    title: "Eight tools → work made simple",
    goal: "Slow follow-ups, scattered systems, no execution visibility.",
    did: "Replaced the stack with BOS — agents for outreach, follow-ups, and coordination with integrations into one execution layer.",
    result: "Faster responses, higher conversion, fewer tools. Agents execute and teams stay aligned.",
  },
  {
    title: "AI sales agent",
    goal: "Inconsistent follow-ups, pipeline drift, manual outreach.",
    did: "Deployed a Sales Agent in BOS — capture, personalized outreach, multi-touch follow-ups, live CRM updates.",
    result: "Instant, consistent follow-ups; higher engagement and conversion without adding headcount.",
  },
  {
    title: "Operations orchestration",
    goal: "Fragmented ops, delayed tasks, no visibility into execution.",
    did: "BOS with Operations Agents — task routing, cross-team sync, real-time visibility while humans stay in control.",
    result: "Fewer bottlenecks, better alignment, predictable execution with less manual coordination.",
  },
];

export default function ProjectsPage() {
  return (
    <InnerPageShell>
      <main className="bg-[var(--background)] px-6 pb-24 pt-28 text-[var(--foreground)] md:px-14">
        <div className="mx-auto max-w-4xl">
          <MotionSection>
            <h1 className="font-[family-name:var(--font-display)] text-[clamp(2rem,4vw,3.25rem)] font-semibold leading-[1.15] tracking-tight text-white">
              Projects
            </h1>
            <p className="mt-6 max-w-2xl font-[family-name:var(--font-sans)] text-lg text-white/65">
              Real moves from fragmented execution to a single orchestration layer.
            </p>
          </MotionSection>
          <div className="mt-16 space-y-12">
            {cases.map((c, i) => (
              <MotionSection key={c.title} delay={i * 0.06}>
                <article className="rounded-2xl border border-white/10 bg-white/[0.03] p-8">
                  <h2 className="font-[family-name:var(--font-display)] text-xl font-semibold text-white">
                    {c.title}
                  </h2>
                  <p className="mt-4 text-[11px] font-bold uppercase tracking-[0.18em] text-white/40">
                    Client goal
                  </p>
                  <p className="mt-2 font-[family-name:var(--font-sans)] text-white/70">{c.goal}</p>
                  <p className="mt-6 text-[11px] font-bold uppercase tracking-[0.18em] text-white/40">
                    What we did
                  </p>
                  <p className="mt-2 font-[family-name:var(--font-sans)] text-white/70">{c.did}</p>
                  <p className="mt-6 text-[11px] font-bold uppercase tracking-[0.18em] text-[var(--cyan)]">
                    Results
                  </p>
                  <p className="mt-2 font-[family-name:var(--font-sans)] text-white/85">{c.result}</p>
                </article>
              </MotionSection>
            ))}
          </div>
        </div>
      </main>
    </InnerPageShell>
  );
}
