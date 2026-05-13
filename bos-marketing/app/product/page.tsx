import { InnerPageShell } from "@/components/inner-page-shell";
import { MotionSection } from "@/components/motion-section";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Product",
  description: "BOS Chat, Project fx, Data Drive, Agent Builder, execution engine, and integrations.",
};

const modules = [
  {
    name: "BOS Chat",
    line: "One conversation layer for teams, clients, and agents — messages trigger execution.",
  },
  {
    name: "Project fx",
    line: "Tasks, CRM, and workflows unified — deals and follow-ups without babysitting boards.",
  },
  {
    name: "Data Drive",
    line: "Single source of truth — docs and structured data linked to chat and workflows.",
  },
  {
    name: "Agent Builder",
    line: "Deploy SuperAgents and custom agents — goals, actions, permissions, no glue code.",
  },
  {
    name: "Execution engine",
    line: "Interprets intent, routes to agents or humans, keeps system-wide context continuous.",
  },
  {
    name: "Integrations",
    line: "Email, calendar, CRM, storage, comms — bi-directional sync and trigger-based execution.",
  },
];

export default function ProductPage() {
  return (
    <InnerPageShell>
      <main className="bg-[var(--background)] px-6 pb-24 pt-28 text-[var(--foreground)] md:px-14">
        <div className="mx-auto max-w-4xl">
          <MotionSection>
            <h1 className="font-[family-name:var(--font-display)] text-[clamp(2rem,4vw,3.25rem)] font-semibold leading-[1.15] tracking-tight text-white">
              Product
            </h1>
            <p className="mt-6 max-w-2xl font-[family-name:var(--font-sans)] text-lg text-white/65">
              Conversation, execution, and system layers — one continuous loop. No workflow
              builders bolted on; behavior emerges from orchestration.
            </p>
          </MotionSection>
          <div className="mt-16 grid gap-6 sm:grid-cols-2">
            {modules.map((m, i) => (
              <MotionSection key={m.name} delay={i * 0.05}>
                <article className="h-full rounded-2xl border border-white/10 bg-white/[0.03] p-6">
                  <h2 className="font-[family-name:var(--font-display)] text-lg font-semibold text-[var(--cyan)]">
                    {m.name}
                  </h2>
                  <p className="mt-3 font-[family-name:var(--font-sans)] text-sm leading-relaxed text-white/70">
                    {m.line}
                  </p>
                </article>
              </MotionSection>
            ))}
          </div>
          <MotionSection className="mt-14" delay={0.12}>
            <p className="rounded-2xl border border-white/10 bg-[var(--surface-raised)]/40 p-6 font-[family-name:var(--font-sans)] text-sm text-white/65">
              Messages → tasks → actions → updates → notifications. Conversations create context;
              context triggers execution; execution updates systems — continuously.
            </p>
          </MotionSection>
        </div>
      </main>
    </InnerPageShell>
  );
}
