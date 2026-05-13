import { InnerPageShell } from "@/components/inner-page-shell";
import { MotionSection } from "@/components/motion-section";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Compare",
  description: "BOS vs communication, CRM, work management, automation, and AI tools.",
};

const categories = [
  { name: "Communication", examples: "Slack, Teams, Chat", gap: "Fast messaging — no execution layer." },
  { name: "CRM", examples: "Salesforce, HubSpot", gap: "Pipeline visibility — heavy manual upkeep." },
  { name: "Work management", examples: "Asana, ClickUp, Jira", gap: "Tasks — detached from real conversations." },
  { name: "Automation", examples: "Zapier, Make", gap: "Connectors — rigid logic, brittle at scale." },
  { name: "AI tools", examples: "ChatGPT, copilots", gap: "Assistance — no accountable execution in workflows." },
];

const matrix = [
  ["Capability", "Stack", "BOS"],
  ["Communication", "Partial", "Yes"],
  ["Task execution", "Fragmented", "Yes"],
  ["Unified system", "No", "Yes"],
  ["Real-time context", "No", "Yes"],
];

export default function ComparePage() {
  return (
    <InnerPageShell>
      <main className="bg-[var(--background)] px-6 pb-24 pt-28 text-[var(--foreground)] md:px-14">
        <div className="mx-auto max-w-4xl">
          <MotionSection>
            <h1 className="font-[family-name:var(--font-display)] text-[clamp(2rem,4vw,3.25rem)] font-semibold leading-[1.15] tracking-tight text-white">
              Compare
            </h1>
            <p className="mt-6 font-[family-name:var(--font-sans)] text-lg text-white/65">
              Most teams stitch 3–6 categories together. BOS replaces the need to stitch — one
              continuous loop.
            </p>
          </MotionSection>

          <MotionSection className="mt-16" delay={0.05}>
            <h2 className="font-[family-name:var(--font-display)] text-xl font-semibold text-white">
              Where each layer stops
            </h2>
            <ul className="mt-8 space-y-6">
              {categories.map((c) => (
                <li
                  key={c.name}
                  className="rounded-xl border border-white/10 bg-white/[0.03] px-5 py-4"
                >
                  <p className="font-[family-name:var(--font-ui)] text-xs font-bold uppercase tracking-[0.14em] text-[var(--orchid)]">
                    {c.name}
                  </p>
                  <p className="mt-1 text-sm text-white/45">{c.examples}</p>
                  <p className="mt-3 font-[family-name:var(--font-sans)] text-sm text-white/70">{c.gap}</p>
                </li>
              ))}
            </ul>
          </MotionSection>

          <MotionSection className="mt-16" delay={0.1}>
            <h2 className="font-[family-name:var(--font-display)] text-xl font-semibold text-white">
              BOS vs stitched stack
            </h2>
            <div className="mt-6 overflow-x-auto rounded-xl border border-white/10">
              <table className="w-full min-w-[320px] border-collapse text-left text-sm">
                <tbody>
                  {matrix.map((row, ri) => (
                    <tr
                      key={row[0]}
                      className={ri === 0 ? "bg-white/[0.08] font-[family-name:var(--font-ui)] text-xs uppercase tracking-[0.12em] text-white/80" : "border-t border-white/10"}
                    >
                      {row.map((cell) => (
                        <td
                          key={cell}
                          className={`px-4 py-3 font-[family-name:var(--font-sans)] ${ri === 0 ? "text-white/90" : "text-white/70"}`}
                        >
                          {cell}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="mt-6 font-[family-name:var(--font-sans)] text-sm text-white/55">
              Slack organizes conversations. CRMs store data. Tools track work. BOS executes
              across all of it — infrastructure, not another tab.
            </p>
          </MotionSection>
        </div>
      </main>
    </InnerPageShell>
  );
}
