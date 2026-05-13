import { InnerPageShell } from "@/components/inner-page-shell";
import { MotionSection } from "@/components/motion-section";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "BOS MBA",
  description:
    "Build a company inside BOS — live operating environment for modern builders.",
};

const weeks = [
  { n: "1", title: "Rebuild how you think", line: "Market, customer, offer, and execution model — clear." },
  { n: "2", title: "Deploy your company", line: "Workspace, pipeline, assets, and operating structure in BOS." },
  { n: "3", title: "Launch into the market", line: "Publish, reach out, test positioning — real signal." },
  { n: "4", title: "Run the business", line: "Leads, delivery, support, and decisions in real time." },
  { n: "5", title: "Optimize the system", line: "Bottlenecks, conversion, operations — tighten the loop." },
  { n: "6", title: "Prove it works", line: "What you built, what happened, what changed — shipped." },
];

export default function MbaPage() {
  return (
    <InnerPageShell>
      <main className="bg-[var(--background)] px-6 pb-24 pt-28 text-[var(--foreground)] md:px-14">
        <div className="mx-auto max-w-3xl">
          <MotionSection>
            <p className="font-[family-name:var(--font-sans)] text-[11px] font-bold uppercase tracking-[0.22em] text-white/45">
              MBA Program
            </p>
            <h1 className="mt-4 font-[family-name:var(--font-display)] text-[clamp(2.25rem,5vw,3.5rem)] font-semibold leading-[1.15] tracking-tight text-white">
              Build a company. Not a case study.
            </h1>
            <p className="mt-6 font-[family-name:var(--font-sans)] text-lg leading-relaxed text-white/65">
              The MBA for the AI era — live inside BOS. You do not study business; you build, run,
              and scale one in real time.
            </p>
            <p className="mt-4 font-[family-name:var(--font-sans)] text-sm text-white/45">
              6 weeks · Limited seats · Live inside BOS
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <span className="inline-flex rounded-full bg-[var(--orchid)] px-8 py-3 font-[family-name:var(--font-ui)] text-sm font-bold text-white">
                Apply (coming soon)
              </span>
              <Link
                href="/how-it-works"
                className="inline-flex rounded-full border border-white/25 bg-white/[0.06] px-8 py-3 font-[family-name:var(--font-ui)] text-sm font-semibold text-white backdrop-blur-sm transition hover:border-white/45"
              >
                How BOS Works
              </Link>
            </div>
          </MotionSection>

          <MotionSection className="mt-20" delay={0.05}>
            <h2 className="font-[family-name:var(--font-display)] text-2xl font-semibold text-white">
              Business changed. Education didn’t.
            </h2>
            <p className="mt-4 font-[family-name:var(--font-sans)] text-white/60">
              Frameworks trained people to analyze companies after the fact. Modern companies run
              on live systems, real-time decisions, and agents beside humans — BOS MBA closes the
              gap between learning and operating.
            </p>
          </MotionSection>

          <MotionSection className="mt-16" delay={0.08}>
            <h2 className="font-[family-name:var(--font-display)] text-xl font-semibold text-white">
              What BOS MBA is
            </h2>
            <p className="mt-4 font-[family-name:var(--font-sans)] text-white/60">
              Not a course or a certificate — a live business-building system delivered entirely
              inside BOS. Enter with an idea or company-in-progress; leave with a live workspace,
              pipeline, execution habits, and often real customers.
            </p>
          </MotionSection>

          <MotionSection className="mt-16" delay={0.1}>
            <h2 className="font-[family-name:var(--font-display)] text-xl font-semibold text-white">
              Traditional MBA vs BOS MBA
            </h2>
            <div className="mt-6 overflow-x-auto rounded-xl border border-white/10 text-sm">
              <table className="w-full min-w-[280px] border-collapse text-left">
                <thead>
                  <tr className="border-b border-white/10 bg-white/[0.06] font-[family-name:var(--font-ui)] text-[10px] uppercase tracking-[0.14em] text-white/70">
                    <th className="px-4 py-3">Traditional</th>
                    <th className="px-4 py-3 text-[var(--cyan)]">BOS MBA</th>
                  </tr>
                </thead>
                <tbody className="font-[family-name:var(--font-sans)] text-white/70">
                  {[
                    ["Study past companies", "Build a live company"],
                    ["Learn frameworks", "Build systems"],
                    ["Simulated decisions", "Real decisions"],
                    ["Classrooms", "BOS workspace + execution"],
                  ].map(([a, b]) => (
                    <tr key={a} className="border-t border-white/10">
                      <td className="px-4 py-3">{a}</td>
                      <td className="px-4 py-3 text-white/90">{b}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="mt-6 font-[family-name:var(--font-display)] text-lg text-white/90">
              MBA teaches how companies used to run. BOS MBA shows how they run now.
            </p>
          </MotionSection>

          <MotionSection className="mt-16" delay={0.12}>
            <h2 className="font-[family-name:var(--font-display)] text-xl font-semibold text-white">
              Six weeks
            </h2>
            <ul className="mt-8 space-y-6">
              {weeks.map((w) => (
                <li key={w.n} className="flex gap-4">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[var(--orchid)] text-sm font-bold text-white">
                    {w.n}
                  </span>
                  <div>
                    <p className="font-[family-name:var(--font-display)] text-lg font-semibold text-white">
                      {w.title}
                    </p>
                    <p className="mt-1 font-[family-name:var(--font-sans)] text-sm text-white/60">
                      {w.line}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </MotionSection>

          <MotionSection className="mt-16 rounded-2xl border border-white/10 bg-white/[0.04] p-8" delay={0.14}>
            <h2 className="font-[family-name:var(--font-display)] text-lg font-semibold text-white">
              Who it is for
            </h2>
            <p className="mt-4 font-[family-name:var(--font-sans)] text-sm text-white/65">
              Agency founders, consultants, operators becoming founders, and builders stuck in Slack
              chaos or tool sprawl — people ready to operate, not sit through theory.
            </p>
          </MotionSection>
        </div>
      </main>
    </InnerPageShell>
  );
}
