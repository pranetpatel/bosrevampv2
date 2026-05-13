import type { ComponentType, SVGProps } from "react";

import {
  BrandBosChat,
  BrandConnectorAgent,
  BrandConnectorBridge,
  BrandConnectorDeals,
  BrandConnectorEmail,
  BrandConnectorGrowth,
  BrandConnectorMeet,
  BrandConnectorMsg,
  BrandConnectorSupport,
  BrandConnectorWiki,
  BrandConnectorWorkspace,
  BrandConnectorZoom,
} from "@/components/icons/connector-brand-icons";

const base = "h-7 w-7 shrink-0 text-current";

function IconBox({ className = "", children, ...rest }: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      className={`${base} ${className}`.trim()}
      aria-hidden
      {...rest}
    >
      {children}
    </svg>
  );
}

/** BOS Chat — message bubble */
export function IconChat(props: SVGProps<SVGSVGElement>) {
  return (
    <IconBox {...props}>
      <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8.5z" strokeLinecap="round" strokeLinejoin="round" />
    </IconBox>
  );
}

/** Project fx — board + columns */
export function IconProjects(props: SVGProps<SVGSVGElement>) {
  return (
    <IconBox {...props}>
      <rect x="3" y="4" width="7" height="16" rx="1" />
      <rect x="14" y="4" width="7" height="7" rx="1" />
      <rect x="14" y="13" width="7" height="7" rx="1" />
    </IconBox>
  );
}

/** Data Drive — cylinder / stack */
export function IconData(props: SVGProps<SVGSVGElement>) {
  return (
    <IconBox {...props}>
      <ellipse cx="12" cy="6" rx="7" ry="3" />
      <path d="M5 6v6c0 1.7 3.1 3 7 3s7-1.3 7-3V6" />
      <path d="M5 12v6c0 1.7 3.1 3 7 3s7-1.3 7-3v-6" />
    </IconBox>
  );
}

/** Agent Builder — sliders + spark */
export function IconAgentBuilder(props: SVGProps<SVGSVGElement>) {
  return (
    <IconBox {...props}>
      <path d="M4 7h4M15 7h5M10 7h.01M4 17h2M18 17h2M9 17h6M9 7v10" strokeLinecap="round" />
      <path d="M17 4l1 2h2l-1.5 1.5L19 10l-1.5-1.5L16 7h2l1-3z" fill="currentColor" stroke="none" opacity={0.85} />
    </IconBox>
  );
}

/** Agents — chip / bot head */
export function IconAgents(props: SVGProps<SVGSVGElement>) {
  return (
    <IconBox {...props}>
      <rect x="5" y="8" width="14" height="10" rx="2" />
      <circle cx="9" cy="13" r="1" fill="currentColor" stroke="none" />
      <circle cx="15" cy="13" r="1" fill="currentColor" stroke="none" />
      <path d="M9 5v3M15 5v3M12 4v2" strokeLinecap="round" />
    </IconBox>
  );
}

/** Execution engine — play in circle */
export function IconExecution(props: SVGProps<SVGSVGElement>) {
  return (
    <IconBox {...props}>
      <circle cx="12" cy="12" r="9" />
      <path d="M10 8.5v7l6-3.5-6-3.5z" fill="currentColor" stroke="none" opacity={0.9} />
    </IconBox>
  );
}

/** Integrations — plug */
export function IconIntegrations(props: SVGProps<SVGSVGElement>) {
  return (
    <IconBox {...props}>
      <path d="M12 3v5M9 8h6M8 21h8M10 8v5a2 2 0 002 2h0a2 2 0 002-2V8" strokeLinecap="round" />
      <path d="M8 14v3a4 4 0 008 0v-3" strokeLinecap="round" />
    </IconBox>
  );
}

/** Sync — circular arrows */
export function IconSync(props: SVGProps<SVGSVGElement>) {
  return (
    <IconBox {...props}>
      <path d="M21 12a9 9 0 00-9-9 9.75 9.75 0 00-6.74 2.74L3 8" strokeLinecap="round" />
      <path d="M3 3v5h5M3 12a9 9 0 009 9 9.75 9.75 0 006.74-2.74L21 16" strokeLinecap="round" />
      <path d="M21 21v-5h-5" strokeLinecap="round" />
    </IconBox>
  );
}

/** Signals — pulse / activity */
export function IconSignals(props: SVGProps<SVGSVGElement>) {
  return (
    <IconBox {...props}>
      <path d="M3 12h3l2-7 4 14 3-9h3" strokeLinecap="round" strokeLinejoin="round" />
    </IconBox>
  );
}

/** CRM — people + tie */
export function IconCrm(props: SVGProps<SVGSVGElement>) {
  return (
    <IconBox {...props}>
      <circle cx="9" cy="7" r="3" />
      <path d="M3 21v-2a4 4 0 014-4h4a4 4 0 014 4v2" />
      <circle cx="17" cy="10" r="2.5" />
      <path d="M21 21v-1.5a3 3 0 00-3-3h-1" />
    </IconBox>
  );
}

/** Calendar */
export function IconCalendar(props: SVGProps<SVGSVGElement>) {
  return (
    <IconBox {...props}>
      <rect x="3" y="5" width="18" height="16" rx="2" />
      <path d="M16 3v4M8 3v4M3 11h18" />
      <path d="M8 15h.01M12 15h.01M16 15h.01" strokeLinecap="round" />
    </IconBox>
  );
}

/** Docs */
export function IconDocs(props: SVGProps<SVGSVGElement>) {
  return (
    <IconBox {...props}>
      <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8l-6-6z" />
      <path d="M14 2v6h6M9 13h6M9 17h6" strokeLinecap="round" />
    </IconBox>
  );
}

/** Automations — workflow */
export function IconAutomations(props: SVGProps<SVGSVGElement>) {
  return (
    <IconBox {...props}>
      <path d="M13 2L3 14h7l-1 8 10-12h-7l1-8z" strokeLinejoin="round" />
    </IconBox>
  );
}

/** Email */
export function IconEmail(props: SVGProps<SVGSVGElement>) {
  return (
    <IconBox {...props}>
      <rect x="2" y="5" width="20" height="14" rx="2" />
      <path d="M2 8l10 6 10-6" strokeLinecap="round" />
    </IconBox>
  );
}

/** Storage / cloud */
export function IconCloud(props: SVGProps<SVGSVGElement>) {
  return (
    <IconBox {...props}>
      <path d="M18 17a4 4 0 100-8 4 4 0 11-8 0 4 4 0 100 8h8z" />
    </IconBox>
  );
}

/** Analytics */
export function IconAnalytics(props: SVGProps<SVGSVGElement>) {
  return (
    <IconBox {...props}>
      <path d="M4 19V5M8 19v-6M12 19V9M16 19v-4M20 19v-9" strokeLinecap="round" />
    </IconBox>
  );
}

/** Permissions / shield */
export function IconShield(props: SVGProps<SVGSVGElement>) {
  return (
    <IconBox {...props}>
      <path d="M12 3l8 4v6c0 5-3.5 9.5-8 11-4.5-1.5-8-6-8-11V7l8-4z" />
      <path d="M9 12l2 2 4-4" strokeLinecap="round" strokeLinejoin="round" />
    </IconBox>
  );
}

/** Search / command palette */
export function IconSearch(props: SVGProps<SVGSVGElement>) {
  return (
    <IconBox {...props}>
      <circle cx="11" cy="11" r="6" />
      <path d="M21 21l-4.3-4.3" strokeLinecap="round" />
    </IconBox>
  );
}

/** Notifications */
export function IconBell(props: SVGProps<SVGSVGElement>) {
  return (
    <IconBox {...props}>
      <path d="M18 8a6 6 0 10-12 0c0 7-3 7-3 7h18s-3 0-3-7M13.73 21a2 2 0 01-3.46 0" strokeLinecap="round" />
    </IconBox>
  );
}

/** Tasks / checklist */
export function IconTasks(props: SVGProps<SVGSVGElement>) {
  return (
    <IconBox {...props}>
      <path d="M9 11l3 3L22 4" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M21 12v6a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h11" strokeLinecap="round" />
    </IconBox>
  );
}

/** Video / meetings */
export function IconVideo(props: SVGProps<SVGSVGElement>) {
  return (
    <IconBox {...props}>
      <rect x="2" y="6" width="14" height="12" rx="2" />
      <path d="M16 10l6-3v10l-6-3v-4z" />
    </IconBox>
  );
}

/** Payments */
export function IconCard(props: SVGProps<SVGSVGElement>) {
  return (
    <IconBox {...props}>
      <rect x="2" y="5" width="20" height="14" rx="2" />
      <path d="M2 10h20" />
    </IconBox>
  );
}

/** Webhooks / terminal */
export function IconWebhook(props: SVGProps<SVGSVGElement>) {
  return (
    <IconBox {...props}>
      <path d="M4 17l2-2 2 2 4-4 2 2 4-4" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M4 7h6M4 11h4" strokeLinecap="round" />
      <rect x="14" y="5" width="6" height="8" rx="1" />
    </IconBox>
  );
}

/** Layers / orchestration */
export function IconLayers(props: SVGProps<SVGSVGElement>) {
  return (
    <IconBox {...props}>
      <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" strokeLinecap="round" strokeLinejoin="round" />
    </IconBox>
  );
}

/** Users / org */
export function IconUsers(props: SVGProps<SVGSVGElement>) {
  return (
    <IconBox {...props}>
      <circle cx="9" cy="7" r="3" />
      <path d="M3 21v-2a4 4 0 014-4h4a4 4 0 014 4v2" />
      <circle cx="17" cy="10" r="2.5" />
      <path d="M21 21v-1.5a3 3 0 00-3-3h-1" />
    </IconBox>
  );
}

/** Client rooms / door */
export function IconRooms(props: SVGProps<SVGSVGElement>) {
  return (
    <IconBox {...props}>
      <path d="M4 21V8l8-5 8 5v13" />
      <path d="M9 21v-6h6v6" />
      <circle cx="12" cy="12" r="1" fill="currentColor" stroke="none" />
    </IconBox>
  );
}

export type StripAccent = "orchid" | "magenta" | "cyan" | "hot";

export type StripIconEntry = {
  key: string;
  /** Full description for tooltip / a11y */
  label: string;
  /** Single word under the icon */
  word: string;
  accent: StripAccent;
  Icon: ComponentType<SVGProps<SVGSVGElement>>;
  /** Optional filled / multi-color icon (e.g. integration strip). */
  brandIcon?: ComponentType<SVGProps<SVGSVGElement>>;
};

/** Row 1 — BOS product surfaces (orchestration story). */
export const stripIconsBosApps: StripIconEntry[] = [
  { key: "layers", label: "Orchestration layer", word: "Stack", accent: "orchid", Icon: IconLayers },
  { key: "execution", label: "Execution engine", word: "Run", accent: "cyan", Icon: IconExecution },
  { key: "chat", label: "BOS Chat", word: "Chat", accent: "magenta", Icon: IconChat },
  { key: "projects", label: "Project fx", word: "Projects", accent: "orchid", Icon: IconProjects },
  { key: "data", label: "Data Drive", word: "Data", accent: "cyan", Icon: IconData },
  { key: "agents", label: "Agents", word: "Agents", accent: "magenta", Icon: IconAgents },
  { key: "builder", label: "Agent Builder", word: "Builder", accent: "hot", Icon: IconAgentBuilder },
  { key: "integrations", label: "Integrations", word: "Connect", accent: "orchid", Icon: IconIntegrations },
  { key: "sync", label: "Sync", word: "Sync", accent: "cyan", Icon: IconSync },
  { key: "signals", label: "Signals", word: "Signals", accent: "magenta", Icon: IconSignals },
  { key: "automations", label: "Automations", word: "Zaps", accent: "hot", Icon: IconAutomations },
  { key: "tasks", label: "Tasks & follow-ups", word: "Tasks", accent: "orchid", Icon: IconTasks },
  { key: "search", label: "Command palette", word: "Find", accent: "cyan", Icon: IconSearch },
  { key: "bell", label: "Notifications", word: "Alerts", accent: "magenta", Icon: IconBell },
];

/** Row 2 — Work & data surfaces inside BOS. */
export const stripIconsWorkSurfaces: StripIconEntry[] = [
  { key: "crm", label: "CRM", word: "CRM", accent: "orchid", Icon: IconCrm },
  { key: "calendar", label: "Calendar", word: "Calendar", accent: "cyan", Icon: IconCalendar },
  { key: "docs", label: "Docs", word: "Docs", accent: "magenta", Icon: IconDocs },
  { key: "email", label: "Email", word: "Mail", accent: "orchid", Icon: IconEmail },
  { key: "cloud", label: "Storage", word: "Cloud", accent: "cyan", Icon: IconCloud },
  { key: "analytics", label: "Analytics", word: "Metrics", accent: "magenta", Icon: IconAnalytics },
  { key: "shield", label: "Permissions", word: "Access", accent: "hot", Icon: IconShield },
  { key: "users", label: "Teams & roles", word: "Teams", accent: "orchid", Icon: IconUsers },
  { key: "video", label: "Meetings", word: "Video", accent: "cyan", Icon: IconVideo },
  { key: "rooms", label: "Client rooms", word: "Rooms", accent: "magenta", Icon: IconRooms },
  { key: "webhook", label: "Webhooks & API", word: "API", accent: "orchid", Icon: IconWebhook },
  { key: "card", label: "Billing & payments", word: "Pay", accent: "cyan", Icon: IconCard },
  { key: "chat2", label: "Threads", word: "Threads", accent: "magenta", Icon: IconChat },
  { key: "data2", label: "Records", word: "Records", accent: "hot", Icon: IconData },
];

/** Marquee segment: BOS surfaces + work tools (concat with connectors for full hero strip). */
export const stripIconsHomeMarquee: StripIconEntry[] = [
  ...stripIconsBosApps,
  ...stripIconsWorkSurfaces,
];

/** Row 3 — How BOS connects + tools you already use (brand-colored tiles where set). */
export const stripIconsConnectors: StripIconEntry[] = [
  {
    key: "msg",
    label: "Team messages",
    word: "Messages",
    accent: "orchid",
    Icon: IconChat,
    brandIcon: BrandConnectorMsg,
  },
  {
    key: "boschat",
    label: "BOS intelligent chat",
    word: "BosChat",
    accent: "cyan",
    Icon: IconChat,
    brandIcon: BrandBosChat,
  },
  {
    key: "connector-agent",
    label: "AI agent",
    word: "Agent",
    accent: "magenta",
    Icon: IconAgents,
    brandIcon: BrandConnectorAgent,
  },
  {
    key: "workspace",
    label: "Workspace suites",
    word: "Suite",
    accent: "orchid",
    Icon: IconLayers,
    brandIcon: BrandConnectorWorkspace,
  },
  {
    key: "crm2",
    label: "CRM systems",
    word: "Deals",
    accent: "orchid",
    Icon: IconCrm,
    brandIcon: BrandConnectorDeals,
  },
  {
    key: "docs2",
    label: "Docs & wikis",
    word: "Wiki",
    accent: "cyan",
    Icon: IconDocs,
    brandIcon: BrandConnectorWiki,
  },
  {
    key: "sales",
    label: "Marketing & sales",
    word: "Growth",
    accent: "magenta",
    Icon: IconSignals,
    brandIcon: BrandConnectorGrowth,
  },
  {
    key: "support",
    label: "Support inboxes",
    word: "Support",
    accent: "magenta",
    Icon: IconBell,
    brandIcon: BrandConnectorSupport,
  },
  {
    key: "meet",
    label: "Video conferencing",
    word: "Zoom",
    accent: "hot",
    Icon: IconVideo,
    brandIcon: BrandConnectorZoom,
  },
  {
    key: "mail",
    label: "Email providers",
    word: "Email",
    accent: "orchid",
    Icon: IconEmail,
    brandIcon: BrandConnectorEmail,
  },
  {
    key: "cal2",
    label: "Calendars",
    word: "Meet",
    accent: "cyan",
    Icon: IconCalendar,
    brandIcon: BrandConnectorMeet,
  },
  {
    key: "sync2",
    label: "Bi-directional sync",
    word: "Bridge",
    accent: "magenta",
    Icon: IconSync,
    brandIcon: BrandConnectorBridge,
  },
];

/** One scrolling row after Welcome: product surfaces + work tools + connectors. */
export const stripIconsHeroMarquee: StripIconEntry[] = [
  ...stripIconsHomeMarquee,
  ...stripIconsConnectors,
];

/** @deprecated Use stripIconsHeroMarquee. */
export const stripIconsOneLine: StripIconEntry[] = stripIconsHeroMarquee;
