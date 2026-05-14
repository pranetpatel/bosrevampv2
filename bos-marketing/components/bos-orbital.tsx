'use client';

import {
  BosOrbitalExperience,
  ClientDeliveryBackdropGraph,
  WorkflowRunningFooter,
  type LegacyOrbitalModuleId,
} from '@/components/bos-orbital-experiences';

const NODES_DATA: {
  id: LegacyOrbitalModuleId;
  color: string;
  name: string;
  eyebrow: string;
  headline: string;
  desc: string;
}[] = [
  {
    id: 'ai-execution',
    color: '#04D1E0',
    name: 'AI Execution',
    eyebrow: 'AI Execution',
    headline: 'Agents that act, not just answer.',
    desc: 'BOS AI agents do not surface suggestions. They execute. Assign a task, set a goal, and watch the work get done across every connected system.',
  },
  {
    id: 'workflow',
    color: '#DA34F1',
    name: 'Workflow',
    eyebrow: 'Workflow',
    headline: 'Build once. Run forever.',
    desc: 'Design any process: approvals, onboarding, delivery. BOS handles routing, reminders, and escalations automatically.',
  },
  {
    id: 'team-ops',
    color: '#10D988',
    name: 'Team OPS',
    eyebrow: 'Team OPS',
    headline: 'Everyone aligned. Always.',
    desc: 'Assignments, context, and status travel together. No re-explaining. One place your whole team operates from.',
  },
  {
    id: 'client-delivery',
    color: '#c9a227',
    name: 'Client Delivery',
    eyebrow: 'Client Delivery',
    headline: 'Every client. On time.',
    desc: 'From brief to delivery, BOS tracks every step, flags blockers early, and keeps clients informed automatically.',
  },
  {
    id: 'intelligence',
    color: '#f5c542',
    name: 'Intelligence',
    eyebrow: 'Intelligence',
    headline: 'Decisions from clarity.',
    desc: 'BOS surfaces signals from across your operations: pipeline, capacity, risk. So you decide from clarity, not instinct.',
  },
  {
    id: 'communication',
    color: '#6B5EFF',
    name: 'Communication',
    eyebrow: 'Communication',
    headline: 'One thread. Every decision.',
    desc: 'Conversations become tasks. Context never leaves the thread. Your entire communication history is searchable and actionable.',
  },
  {
    id: 'command-view',
    color: '#1A53FD',
    name: 'Command View',
    eyebrow: 'Command View',
    headline: "The founder's window into everything.",
    desc: 'See every client, project, and team member from one screen. No chasing. No asking. The kitchen window, exactly as it should be.',
  },
  {
    id: 'integrations',
    color: '#FF8C42',
    name: 'Integrations',
    eyebrow: 'Integrations',
    headline: 'Connects to everything you use.',
    desc: 'BOS layers over your existing stack, pulling signals in and pushing actions out, until the stack becomes optional.',
  },
];

function ModuleCopy({ data, className = '' }: { data: (typeof NODES_DATA)[number]; className?: string }) {
  const accent = data.color;
  return (
    <div className={className}>
      <p
        className="font-[family-name:var(--font-ui)] text-[10px] font-bold uppercase tracking-[0.26em]"
        style={{ color: accent }}
      >
        {data.eyebrow}
      </p>
      <p className="mt-3 font-[family-name:var(--font-display)] text-xl font-semibold leading-snug text-white/95 md:text-2xl">
        {data.headline}
      </p>
      <p className="mt-3 font-[family-name:var(--font-sans)] text-sm leading-relaxed text-white/60">
        {data.desc}
      </p>
    </div>
  );
}

function ModuleSurfaceCard({ data }: { data: (typeof NODES_DATA)[number] }) {
  const accent = data.color;

  return (
    <article
      className="flex h-full flex-col overflow-hidden rounded-2xl p-6 md:p-8"
      style={{
        background: 'rgba(255,255,255,0.035)',
        backdropFilter: 'blur(24px)',
        border: `1px solid ${accent}28`,
        boxShadow: `0 0 48px ${accent}14, inset 0 0 28px rgba(0,0,0,0.18)`,
      }}
    >
      {data.id === 'workflow' ? (
        <>
          <BosOrbitalExperience moduleId="workflow" accentColor={accent} />
          <ModuleCopy data={data} className="mt-5" />
          <WorkflowRunningFooter />
        </>
      ) : data.id === 'client-delivery' ? (
        <div className="flex min-h-0 flex-1 flex-col">
          <div className="relative min-h-[10.75rem] w-full shrink-0 sm:min-h-[11.5rem]">
            <ClientDeliveryBackdropGraph className="pointer-events-none absolute inset-0 h-full w-full select-none" />
          </div>
          <ModuleCopy data={data} className="mt-5" />
          <BosOrbitalExperience moduleId={data.id} accentColor={accent} />
        </div>
      ) : (
        <>
          <ModuleCopy data={data} />
          <BosOrbitalExperience moduleId={data.id} accentColor={accent} />
        </>
      )}
    </article>
  );
}

/** Eight BOS surfaces as cards (no orbital picker). */
export function BosOrbital(_props: { paused?: boolean }) {
  return (
    <div className="grid w-full grid-cols-1 gap-6 md:grid-cols-2">
      {NODES_DATA.map((data) => (
        <ModuleSurfaceCard key={data.id} data={data} />
      ))}
    </div>
  );
}
