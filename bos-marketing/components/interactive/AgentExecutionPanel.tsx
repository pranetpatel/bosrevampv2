"use client";

import { MotionReveal } from "@/components/motion-reveal";

export type ExecutionAgent = {
  name: string;
  action: string;
  status: string;
};

export type ExecutionAudit = {
  ts: string;
  event: string;
};

export type ExecutionScenario = {
  id: string;
  label: string;
  color: string;
  prompt: string;
  agents: readonly ExecutionAgent[];
  audit: readonly ExecutionAudit[];
  outcome: string;
};

export function AgentExecutionPanel({ scenario }: { scenario: ExecutionScenario }) {
  return (
    <section
      className="rounded-2xl border border-white/10 bg-[var(--surface-raised)]/80 p-6 md:p-8"
      aria-labelledby={`${scenario.id}-heading`}
    >
      <p
        id={`${scenario.id}-heading`}
        className="font-[family-name:var(--font-ui)] text-[11px] font-bold uppercase tracking-[0.2em]"
        style={{ color: scenario.color }}
      >
        {scenario.label}
      </p>
      <blockquote className="mt-4 border-l-2 border-white/20 pl-4 font-[family-name:var(--font-sans)] text-base leading-relaxed text-white/85 md:text-lg">
        “{scenario.prompt}”
      </blockquote>
      <ul className="mt-8 space-y-4">
        {scenario.agents.map((a) => (
          <li
            key={a.name}
            className="flex flex-col gap-1 rounded-xl border border-white/[0.07] bg-black/20 px-4 py-3 sm:flex-row sm:items-center sm:justify-between"
          >
            <div>
              <span className="font-[family-name:var(--font-ui)] text-xs font-bold uppercase tracking-[0.12em] text-[var(--cyan)]">
                {a.name}
              </span>
              <p className="mt-1 font-[family-name:var(--font-sans)] text-sm text-white/65">{a.action}</p>
            </div>
            <span className="shrink-0 font-[family-name:var(--font-sans)] text-xs font-semibold text-white/50">
              {a.status}
            </span>
          </li>
        ))}
      </ul>
      <div className="mt-8 border-t border-white/10 pt-8">
        <p className="font-[family-name:var(--font-ui)] text-[10px] font-bold uppercase tracking-[0.18em] text-white/40">
          Audit trail
        </p>
        <ol className="mt-4 space-y-2 font-mono text-xs text-white/55">
          {scenario.audit.map((row) => (
            <li key={`${row.ts}-${row.event}`} className="flex gap-3">
              <span className="shrink-0 text-[var(--orchid)]">{row.ts}</span>
              <span>{row.event}</span>
            </li>
          ))}
        </ol>
      </div>
      <MotionReveal className="mt-8 rounded-xl border border-[var(--orchid)]/35 bg-[var(--orchid)]/10 px-4 py-4">
        <p className="font-[family-name:var(--font-sans)] text-sm font-medium leading-relaxed text-white/90">
          {scenario.outcome}
        </p>
      </MotionReveal>
    </section>
  );
}
