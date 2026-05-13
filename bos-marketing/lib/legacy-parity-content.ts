/**
 * Homepage parity content mapped from legacy “Work Made Simple” structure.
 * The saved legacy `.htm` snapshot contains CSS + comments but no card HTML;
 * copy is aligned with PROJECT-BRIEF positioning and existing inner routes.
 *
 * Section → implementation map:
 * - strips: `components/sections/home-marquee-strips.tsx`
 * - bridge + stats (inside gap): `components/sections/problem-bridge-stats.tsx` (used by chapter-tension)
 * - operational-weight nodes (inside gap): `components/gap-friction-dissolve.tsx` (used by chapter-tension)
 * - friction field + cards (inside gap): `components/gap-friction-interactive.tsx` (used by chapter-tension)
 * - commands bento: `components/sections/commands-bento-section.tsx`
 * - tribe + trust: `components/sections/chapter-audience.tsx`
 * - manifesto home: `components/sections/chapter-manifesto.tsx`
 * - close + CTA canvas: `components/sections/final-cta.tsx`, `components/cta-orbit-canvas.tsx`
 * - ambient: `components/ambient-site-canvas.tsx` (home only)
 * - deep modules: `app/product/page.tsx` anchors
 */

/** @deprecated Homepage `#strips` uses icon marquees in `components/icons/bos-strip-icons.tsx`. */
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
    tag: "Lean teams",
    hed: "More leverage per person",
    txt: "Replace coordination theater with execution — one layer, fewer meetings.",
    metricN: "3.4×",
    metricL: "leverage / head",
    barPct: 78,
    before: "Before: swivel-chair updates across five tools.",
  },
  {
    tag: "Fast operators",
    hed: "Decisions at thought-speed",
    txt: "Route intent to agents and owners without losing the thread.",
    metricN: "−41%",
    metricL: "time-to-first-action",
    barPct: 72,
    before: "Before: decisions waited on status meetings.",
    featured: true,
  },
  {
    tag: "Modern businesses",
    hed: "One layer — every function",
    txt: "Sales, delivery, finance signals — orchestrated instead of reconciled.",
    metricN: "1",
    metricL: "execution spine",
    barPct: 88,
    before: "Before: spreadsheets as the real CRM.",
  },
  {
    tag: "Founders",
    hed: "Operator-grade without enterprise IT",
    txt: "Ship orchestration that feels like a product — not a science project.",
    metricN: "24h",
    metricL: "to first flows",
    barPct: 65,
    before: "Before: duct-taped Zaps and Airtable bases.",
  },
  {
    tag: "Rev teams",
    hed: "Pipeline that executes",
    txt: "Follow-ups, proposals, and CRM hygiene emerge from conversation.",
    metricN: "2.0×",
    metricL: "qualified velocity",
    barPct: 70,
    before: "Before: CRM hygiene as a weekend chore.",
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
  eyebrow: "Manifesto",
  mainHed: "We did not build another tool.",
  thesis:
    "We built the missing layer — where work runs, decisions move, and execution stays continuous across humans and agents.",
  quote: "The future is not more software. It is one intelligent system that executes.",
  attr: "— BOS / GenieAI",
  tiles: [
    {
      num: "01",
      hed: "Orchestration, not automation",
      txt: "Automation strings brittle steps together. Orchestration keeps intent and outcomes aligned as reality shifts.",
      statN: "∞",
      statL: "brittle scripts replaced by context",
    },
    {
      num: "02",
      hed: "Execution, not advice",
      txt: "Insights without shipped change are overhead. BOS routes to the action that updates the world.",
      statN: "1",
      statL: "continuous execution loop",
    },
    {
      num: "03",
      hed: "Speed as moat",
      txt: "Small teams win when cycle time collapses — when the system removes coordination tax.",
      statN: "2.1×",
      statL: "typical closure acceleration",
    },
    {
      num: "04",
      hed: "Humans amplified",
      txt: "Technology expands operator potential — approvals, taste, and judgment stay human.",
      statN: "100%",
      statL: "critical paths stay governable",
    },
    {
      num: "05",
      hed: "For builders",
      txt: "Power that was enterprise-only belongs to anyone orchestrating real work.",
      statN: "0",
      statL: "workflow babysitting",
    },
    {
      num: "06",
      hed: "Truth in one place",
      txt: "Documents, structured data, and conversation stay linked — no shadow CRMs.",
      statN: "1",
      statL: "source of operational truth",
    },
  ] satisfies ManifestoTile[],
};
