/**
 * Homepage parity content mapped from legacy “Work Made Simple” structure.
 * The saved legacy `.htm` snapshot contains CSS + comments but no card HTML;
 * copy is aligned with PROJECT-BRIEF positioning and existing inner routes.
 *
 * Section → implementation map:
 * - strips (icon marquees): removed — homepage goes hero → chaos panel.
 * - bridge + stats (inside gap): `components/sections/problem-bridge-stats.tsx` (used by chapter-tension)
 * - operational-weight nodes (inside gap): `components/gap-friction-dissolve.tsx` (used by chapter-tension)
 * - friction field + cards (inside gap): `components/gap-friction-interactive.tsx` (used by chapter-tension)
 * - commands bento removed from homepage (module stories live under System orbital)
 * - tribe + trust: `components/sections/chapter-audience.tsx`
 * - manifesto home: `components/sections/chapter-manifesto.tsx`
 * - close + CTA canvas: `components/sections/final-cta.tsx`, `components/cta-orbit-canvas.tsx`
 * - ambient: `components/ambient-site-canvas.tsx` (home only)
 * - deep modules: `app/product/page.tsx` anchors
 */

/** @deprecated Text-only strip labels; icon marquees removed from homepage. */
export const marqueeItems = [
  "Execution layer",
  "Orchestration",
  "Agents + humans",
  "One system",
  "Work made simple",
  "BOS",
  "GenieAI",
] as const;

export const iconStripItems = [
  "Chat",
  "Projects",
  "Data",
  "Agents",
  "Sync",
  "Signals",
  "CRM",
  "Calendar",
  "Docs",
  "Automations",
] as const;

export const logoStripItems = [
  "Slack",
  "Google",
  "Microsoft",
  "Salesforce",
  "Notion",
  "HubSpot",
  "Stripe",
  "Linear",
  "Intercom",
  "Zoom",
] as const;

export const problemBridge = {
  line1: "The real problem was never productivity.",
  line2Words: ["It", "was", "the", "space", "between."],
} as const;

export const problemStats = [
  {
    n: "73%",
    label: "Context switching",
    desc: "Operators lose thread jumping tools, inboxes, and boards.",
  },
  {
    n: "4.2×",
    label: "Coordination tax",
    desc: "Small teams pay disproportionately in meetings and follow-ups.",
  },
  {
    n: "∞",
    label: "Glue scripts",
    desc: "Brittle automations drift the moment reality changes.",
  },
  {
    n: "1",
    label: "Layer missing",
    desc: "No unified place where intent becomes shipped outcomes.",
  },
] as const;

export type CommandModuleKey =
  | "chat"
  | "project-fx"
  | "data-drive"
  | "agent-builder"
  | "execution-engine"
  | "integrations"
  | "signals-action"
  | "client-rooms";

export type CommandCard = {
  moduleKey: CommandModuleKey;
  label: string;
  title: string;
  desc: string;
  live?: string;
  terminal?: { prompt: string; out: string }[];
  metrics?: { val: string; sub: string }[];
  wide?: boolean;
};

export const commandCards: CommandCard[] = [
  {
    moduleKey: "chat",
    label: "Conversation",
    title: "BOS Chat",
    desc: "One thread turns into tasks, owners, and execution — without re-explaining context.",
    live: "Live routing",
    terminal: [
      { prompt: ">", out: "Route follow-up to Project fx + notify AE" },
      { prompt: ">", out: "Synced to CRM · task opened" },
    ],
    wide: true,
  },
  {
    moduleKey: "project-fx",
    label: "Delivery",
    title: "Project fx",
    desc: "Deals, tasks, and follow-ups stay attached to the conversation that created them.",
    live: "Execution",
  },
  {
    moduleKey: "data-drive",
    label: "Truth",
    title: "Data Drive",
    desc: "Structured records and docs linked to chat — one source teams can trust.",
    live: "Linked",
  },
  {
    moduleKey: "agent-builder",
    label: "Build",
    title: "Agent Builder",
    desc: "Deploy agents with goals, permissions, and guardrails — no glue code.",
    live: "Agents",
  },
  {
    moduleKey: "execution-engine",
    label: "Core",
    title: "Execution engine",
    desc: "Intent interpreted, routed to the right agent or human, state kept continuous.",
    live: "Orchestration",
  },
  {
    moduleKey: "integrations",
    label: "Fabric",
    title: "Integrations",
    desc: "Bi-directional sync across email, calendar, CRM, storage, and comms.",
    live: "Connected",
  },
  {
    moduleKey: "signals-action",
    label: "Outcomes",
    title: "Signals → action",
    desc: "What matters surfaces; the next move is obvious — not buried in dashboards.",
    metrics: [
      { val: "−38%", sub: "tool-hopping" },
      { val: "2.1×", sub: "closure speed" },
    ],
    wide: true,
  },
  {
    moduleKey: "client-rooms",
    label: "Surface",
    title: "Client rooms",
    desc: "Shared visibility without exposing your whole stack — execution stays internal.",
    live: "Rooms",
  },
];

export type FrictionLabel = { id: string; title: string; desc: string };

export const frictionLabels: FrictionLabel[] = [
  {
    id: "f1",
    title: "Fragmented tools",
    desc: "Every handoff loses fidelity — context dies at the boundary.",
  },
  {
    id: "f2",
    title: "Workflow drift",
    desc: "Builders and operators rebuild the same bridges weekly.",
  },
  {
    id: "f3",
    title: "Invisible work",
    desc: "The real effort never lands where leadership looks.",
  },
  {
    id: "f4",
    title: "Agent sprawl",
    desc: "Clever demos without a spine become another inbox.",
  },
  {
    id: "f5",
    title: "Permission fog",
    desc: "Who can act — safely — is unclear when systems disagree.",
  },
  {
    id: "f6",
    title: "Metric theater",
    desc: "Dashboards celebrate activity while outcomes slip.",
  },
];

export type AudienceCard = {
  tag: string;
  hed: string;
  txt: string;
  metricN: string;
  metricL: string;
  barPct: number;
  before: string;
  featured?: boolean;
};

export const audienceCards: AudienceCard[] = [
  {
    tag: "No legacy baggage",
    hed: "Built for how companies actually work.",
    txt: "No bloated feature sets. No six-month implementation. No armies of consultants. Operational from Day 1.",
    metricN: "Day 1",
    metricL: "time to value",
    barPct: 90,
    before: "Before: 6–18 month enterprise rollouts.",
  },
  {
    tag: "Finally",
    hed: "Work that works the way you think.",
    txt: "BOS is the operating layer that should have existed a decade ago — the one system that replaces everything else.",
    metricN: "∞",
    metricL: "compounding advantage",
    barPct: 96,
    before: "Before: endless tool sprawl. Never one kitchen.",
    featured: true,
  },
  {
    tag: "Lean teams",
    hed: "Do more with fewer people.",
    txt: "BOS multiplies the output of every person on your team — agents and humans, executing in the same layer.",
    metricN: "5×",
    metricL: "output per operator",
    barPct: 82,
    before: "Before: coordination overhead eating 40% of every day.",
  },
  {
    tag: "Fast operators",
    hed: "Decisions at the speed of thought.",
    txt: "Command View surfaces every signal across your business in real time. No asking around. No status meetings.",
    metricN: "↓68%",
    metricL: "time to decision",
    barPct: 80,
    before: "Before: 3–4 hours daily lost to status chasing.",
  },
  {
    tag: "Modern businesses",
    hed: "One system. Every function.",
    txt: "Replace your fragmented stack with a single intelligent platform. Less software. More momentum.",
    metricN: "14 → 1",
    metricL: "tool consolidation",
    barPct: 86,
    before: "Before: 14 subscriptions, 14 logins, 14 points of failure.",
  },
  {
    tag: "Speed over complexity",
    hed: "Ship faster. Without breaking things.",
    txt: "BOS workflows enforce compliance at every step — so your team moves at full speed without governance risk.",
    metricN: "3.2×",
    metricL: "execution velocity",
    barPct: 76,
    before: "Before: speed sacrificed for coordination overhead.",
  },
  {
    tag: "Clarity at scale",
    hed: "Everyone knows what matters.",
    txt: "BOS gives every person in your organisation the same real-time view of what's happening, what's blocked, and what affects them.",
    metricN: "↑94%",
    metricL: "team alignment score",
    barPct: 92,
    before: "Before: conflicting priorities, scattered context.",
  },
  {
    tag: "Execution first",
    hed: "Intent becomes action, instantly.",
    txt: "You say it. BOS executes it. AI agents move across your business without waiting for manual handoffs or approvals.",
    metricN: "<2s",
    metricL: "intent to action",
    barPct: 88,
    before: "Before: 3–5 day cycle from decision to execution.",
    featured: true,
  },
];

export const trustBadges = [
  { icon: "◇", label: "Encryption in transit" },
  { icon: "◎", label: "Tenant isolation" },
  { icon: "✦", label: "Audit-friendly trails" },
  { icon: "◈", label: "Role-based access" },
  { icon: "✧", label: "Human approvals" },
  { icon: "⬡", label: "Agent guardrails" },
  { icon: "◇", label: "SOC2-ready posture" },
  { icon: "◎", label: "EU data options" },
] as const;

export type ManifestoTile = {
  num: string;
  hed: string;
  txt: string;
  statN?: string;
  statL?: string;
};

export const manifestoHome = {
  eyebrow: "THE BOS MANIFESTO",
  mainHed: "We're changing the rhythm of work.",
  thesis:
    "The tools built to help us work have become the work itself. We have not reached peak productivity. We have reached peak complexity.",
  meta: "BOS STUDIO · 2026",
  cta: "READ THE FULL MANIFESTO",
  tiles: [
    {
      num: "01",
      hed: "The bottleneck is never people. It is plumbing.",
      txt: "Knowledge workers spend 48% of their week not doing work — but managing the systems around it. BOS eliminates the infrastructure.",
      statN: "48%",
      statL: "of a knowledge worker's week lost to tool navigation (McKinsey)",
    },
    {
      num: "02",
      hed: "AI should execute, not advise.",
      txt: "Productivity tools added layers of process. BOS agents cross the gap between suggestion and execution. Every output is a real-world change.",
      statN: "$4.6T",
      statL: "AI-driven automation value by 2030 — most of it still unrealised (PwC)",
    },
    {
      num: "03",
      hed: "The unit of work should be intent, not instruction.",
      txt: "Every system before BOS made you speak its language. BOS inverts the model. You express intent. BOS translates it into execution.",
      statN: "14 → 1",
      statL: "The average business runs 14 tools. BOS collapses them into one layer.",
    },
    {
      num: "04",
      hed: "Speed of execution is the new competitive moat.",
      txt: "The organisations that decide, deliver, and learn faster will define their industries. BOS makes that speed structurally possible.",
      statN: "3.2x",
      statL: "Faster execution in organisations on a consolidated operational platform.",
    },
  ] satisfies ManifestoTile[],
};
