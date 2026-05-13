/** Content for BOS Studio Plans & Pricing (from studio brief). */

export const STUDIO_TICKER = [
  "We're receiving more requests than expected — access is first come, first served",
  "We appreciate your patience while we review each request carefully",
  "BOS Studio beta is free for 3 months for founding members",
  "Limited spots remaining — request access now to secure your place",
] as const;

export const STARTER_FEATURES = [
  "Agentic Studio Environment",
  "iWorkspace — research & execution",
  "chat fx — channels, DMs & sync",
  "iWorkforce — human + agent registry",
  "project fx — tasks & workflows",
  "1 Agent Included",
  "Data Drive — 10 GB storage",
  "Knowledge Graph",
] as const;

export const ENTERPRISE_HIGHLIGHTS = [
  "Unlimited agents & users",
  "Dedicated SLM",
  "VPC / On-Prem",
  "RBAC + compliance",
  "White-glove onboarding",
  "Custom integrations + full API",
] as const;

export type CompareCell = { kind: "yes" } | { kind: "no" } | { kind: "text"; value: string } | { kind: "addon" };

export type CompareRow = { feature: string; starter: CompareCell; enterprise: CompareCell };

export type CompareSection = { id: string; title: string; rows: CompareRow[] };

export const COMPARE_SECTIONS: CompareSection[] = [
  {
    id: "core",
    title: "Core platform",
    rows: [
      { feature: "Agentic Studio Environment", starter: { kind: "yes" }, enterprise: { kind: "yes" } },
      { feature: "chat fx — channels, DMs, calling", starter: { kind: "yes" }, enterprise: { kind: "yes" } },
      { feature: "project fx — CRM, tasks & workflows", starter: { kind: "yes" }, enterprise: { kind: "yes" } },
      {
        feature: "iWorkspace — research, brainstorming & execution (AI)",
        starter: { kind: "yes" },
        enterprise: { kind: "yes" },
      },
      {
        feature: "iWorkforce — human + agent registry",
        starter: { kind: "text", value: "Standard" },
        enterprise: { kind: "text", value: "Full deployment" },
      },
      {
        feature: "Data Drive — central storage & memory",
        starter: { kind: "text", value: "10 GB" },
        enterprise: { kind: "text", value: "2 TB+" },
      },
      {
        feature: "Memory retention",
        starter: { kind: "text", value: "180 days" },
        enterprise: { kind: "text", value: "Custom" },
      },
      { feature: "Slack import + migration", starter: { kind: "yes" }, enterprise: { kind: "yes" } },
      { feature: "Google Drive sync", starter: { kind: "yes" }, enterprise: { kind: "yes" } },
    ],
  },
  {
    id: "agents",
    title: "Agents (AI)",
    rows: [
      {
        feature: "Agents included",
        starter: { kind: "text", value: "1" },
        enterprise: { kind: "text", value: "25–Unlimited" },
      },
      { feature: "Agent builder (single)", starter: { kind: "yes" }, enterprise: { kind: "yes" } },
      { feature: "SuperAgent Skills (doc, design, build)", starter: { kind: "addon" }, enterprise: { kind: "yes" } },
      { feature: "Multi-agent workflow orchestration", starter: { kind: "addon" }, enterprise: { kind: "yes" } },
      { feature: "Cross-team agent orchestration", starter: { kind: "addon" }, enterprise: { kind: "yes" } },
      { feature: "Agent kill switch + audit log", starter: { kind: "yes" }, enterprise: { kind: "yes" } },
      { feature: "Usage hard caps — no overage billing", starter: { kind: "yes" }, enterprise: { kind: "yes" } },
    ],
  },
  {
    id: "intel",
    title: "Intelligence layer (AI)",
    rows: [
      {
        feature: "Knowledge Graph",
        starter: { kind: "text", value: "Auto-structured" },
        enterprise: { kind: "text", value: "Private cluster" },
      },
      {
        feature: "iWidgets dashboards",
        starter: { kind: "text", value: "10" },
        enterprise: { kind: "text", value: "Unlimited" },
      },
      { feature: "SLM — Self-Learning Model", starter: { kind: "no" }, enterprise: { kind: "text", value: "Dedicated" } },
      { feature: "Cross-fx learning", starter: { kind: "yes" }, enterprise: { kind: "yes" } },
      { feature: "Predictive insights", starter: { kind: "no" }, enterprise: { kind: "yes" } },
    ],
  },
  {
    id: "fx",
    title: "fx module activations",
    rows: [
      { feature: "chat fx", starter: { kind: "text", value: "Included" }, enterprise: { kind: "text", value: "Included" } },
      {
        feature: "project fx",
        starter: { kind: "text", value: "Included" },
        enterprise: { kind: "text", value: "Included" },
      },
      { feature: "avatar fx", starter: { kind: "addon" }, enterprise: { kind: "text", value: "Custom" } },
      { feature: "concierge fx", starter: { kind: "addon" }, enterprise: { kind: "text", value: "Custom" } },
    ],
  },
  {
    id: "integrations",
    title: "Integrations & API",
    rows: [
      { feature: "Email integrations (Gmail, Outlook)", starter: { kind: "yes" }, enterprise: { kind: "yes" } },
      {
        feature: "API access",
        starter: { kind: "text", value: "Limited" },
        enterprise: { kind: "text", value: "Full + Custom" },
      },
      { feature: "Webhooks", starter: { kind: "no" }, enterprise: { kind: "yes" } },
      { feature: "CRM integration", starter: { kind: "no" }, enterprise: { kind: "yes" } },
      { feature: "Custom integrations", starter: { kind: "no" }, enterprise: { kind: "yes" } },
    ],
  },
  {
    id: "security",
    title: "Security & governance",
    rows: [
      { feature: "Core security & permissions", starter: { kind: "yes" }, enterprise: { kind: "yes" } },
      { feature: "Usage dashboards & alerts", starter: { kind: "yes" }, enterprise: { kind: "yes" } },
      { feature: "RBAC (role-based access control)", starter: { kind: "no" }, enterprise: { kind: "yes" } },
      { feature: "ABAC (attribute-based access control)", starter: { kind: "no" }, enterprise: { kind: "yes" } },
      { feature: "Compliance audit export", starter: { kind: "no" }, enterprise: { kind: "yes" } },
      { feature: "SOC2-ready controls", starter: { kind: "no" }, enterprise: { kind: "yes" } },
      { feature: "VPC / On-Prem deployment", starter: { kind: "no" }, enterprise: { kind: "yes" } },
      { feature: "Data residency control", starter: { kind: "no" }, enterprise: { kind: "yes" } },
    ],
  },
  {
    id: "support",
    title: "Support",
    rows: [
      {
        feature: "Support level",
        starter: { kind: "text", value: "Priority" },
        enterprise: { kind: "text", value: "White-Glove" },
      },
      {
        feature: "Onboarding",
        starter: { kind: "text", value: "Guided setup" },
        enterprise: { kind: "text", value: "Full implementation team" },
      },
      {
        feature: "SLA response time",
        starter: { kind: "text", value: "24–48h" },
        enterprise: { kind: "text", value: "4–8h" },
      },
      { feature: "Dedicated account manager", starter: { kind: "no" }, enterprise: { kind: "yes" } },
      { feature: "Quarterly optimization reviews", starter: { kind: "no" }, enterprise: { kind: "yes" } },
    ],
  },
];

export const FAQ_ITEMS: { q: string; a: string }[] = [
  {
    q: "Is pricing per user or per seat?",
    a: "No. BOS does not charge per user. Pricing is per business — you activate capabilities and govern usage. Headcount doesn't drive your bill.",
  },
  {
    q: "What happens when I hit a usage limit?",
    a: "Execution pauses and admins are notified. There are no automatic overages or surprise charges. You decide whether to upgrade — it's a feature, not a bug.",
  },
  {
    q: "What are FX modules?",
    a: "FX modules are capability activations — Avatar FX, Concierge FX, and DevOps Copilot FX each unlock a specific layer of intelligence inside BOS. Chat FX and Project FX are always included. Each module has a flat annual activation fee and operates under governed usage tiers.",
  },
  {
    q: "What is BOS MBA?",
    a: "BOS MBA is our early partner program — a limited founding cohort for businesses ready to deploy BOS and help shape the platform. Hands-on deployment, roadmap input, and cohort access. Enrollment is by application only.",
  },
  {
    q: "What is iWorkspace?",
    a: "iWorkspace is BOS's AI-powered intelligence layer for research, brainstorming, and execution — built into the platform so your team doesn't switch to a separate AI tool.",
  },
  {
    q: "How does BOS compare to paying for Slack + AI tools separately?",
    a: "A 25-person team paying for Slack, Google Workspace, and layered AI tools easily spends $1,000–$2,500/month before automation. BOS overrules communication, project management, agents, storage, and an AI intelligence layer under one business license.",
  },
];

export const FIVE_LAYERS = [
  {
    num: "01",
    pain: "Still running the team on Slack and WhatsApp?",
    title: "One Communication Layer",
    desc: "Every conversation lives inside BOS — internal, client-facing, project-specific. Your team stops switching between four apps just to send a message.",
    tags: ["chat fx", "Channels", "DMs"],
    replaces: ["Slack", "Teams"],
    accent: "orchid" as const,
  },
  {
    num: "02",
    pain: "Tasks falling through the gap between chat and ClickUp?",
    title: "One Execution Layer",
    desc: "Tasks from conversations, AI suggestions, or templates — linked to the agent that owns them. Nothing slips.",
    tags: ["project fx", "Workflows", "CRM"],
    replaces: ["ClickUp", "Notion", "Asana"],
    accent: "teal" as const,
  },
  {
    num: "03",
    pain: "Client history scattered across email, Slack, and a spreadsheet?",
    title: "One Client Record",
    desc: "Every conversation, task, document, and status about a client in one place — full context in seconds.",
    tags: ["CRM", "Client Workspace"],
    replaces: ["HubSpot", "Salesforce"],
    accent: "cyan" as const,
  },
  {
    num: "04",
    pain: "Can't find last month's proposal or who edited the brief?",
    title: "One Document System",
    desc: "Briefs, proposals, and reports live in BOS, linked to client and project. AI finds them fast — no Drive archaeology.",
    tags: ["Data Drive", "Linked docs", "10 GB"],
    replaces: ["Google Drive", "Dropbox"],
    accent: "amber" as const,
  },
  {
    num: "05",
    pain: "Opening ChatGPT in a separate tab every 20 minutes?",
    title: "One AI Layer",
    desc: "AI embedded in every workflow with full context of clients, projects, and data — you never leave BOS to think.",
    tags: ["iWorkspace", "Agents", "SLM"],
    replaces: ["ChatGPT", "Copilot", "Claude tabs"],
    accent: "magenta" as const,
  },
];

export const COMPETITOR_COLUMNS = [
  "Feature · 25 users",
  "Slack + Google",
  "Microsoft 365",
  "Claude CoWork",
  "Others",
  "BOS Studio",
] as const;

export const COMPETITOR_ROWS: { feature: string; values: string[] }[] = [
  { feature: "Messaging", values: ["$250–400", "Separate tool", "No", "$300–450", "Included"] },
  { feature: "File Storage", values: ["Included (ltd)", "Separate tool", "No", "$300–500", "Included"] },
  { feature: "Project Mgmt", values: ["Add-on", "Separate tool", "Basic", "$250–500", "Included"] },
  { feature: "CRM", values: ["Add-on", "Separate tool", "No", "$300–600", "Included"] },
  { feature: "AI Layer", values: ["$500+", "AI tool only", "Claude AI", "$500+", "Included"] },
  { feature: "AI Agents", values: ["—", "Basic / none", "Limited", "—", "Included"] },
  { feature: "Automation", values: ["Add-on", "Add-on", "No", "$200+", "Included"] },
  { feature: "BI / Dashboards", values: ["Power BI add-on", "—", "No", "$300+", "Included"] },
  { feature: "Workforce Mgmt", values: ["—", "—", "No", "—", "Included"] },
  { feature: "Digital Twin / Avatar", values: ["—", "—", "No", "—", "Included"] },
  { feature: "Self-Learning AI", values: ["—", "—", "No", "—", "Included"] },
];

export const COMPETITOR_TOTALS = ["$2,000–4,000+", "$1,500–3,000+", "AI only", "Varies", "Pay-as-you-go"];

export const PAIN_CARDS = [
  { label: "Slack", sub: "per month · 25 users", start: 247, peak: 10600 },
  { label: "Google Workspace", sub: "per month · 25 users", start: 1180, peak: 10500 },
  { label: "Notion + ClickUp + BI", sub: "per month · fragmented", start: 763, peak: 10000 },
  { label: "AI subscriptions", sub: "layered on top", start: 415, peak: 10999 },
] as const;

export const TRUST_LOGOS = ["Acme Corp", "Meridian", "Apex Digital", "NorthStar", "Velo Group"] as const;
