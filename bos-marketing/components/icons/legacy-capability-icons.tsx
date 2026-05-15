import type { SVGProps } from "react";

const cls = "h-6 w-6 shrink-0";

function W({
  children,
  className = "",
  ...rest
}: SVGProps<SVGSVGElement> & { children: React.ReactNode }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`${cls} ${className}`.trim()}
      aria-hidden
      {...rest}
    >
      {children}
    </svg>
  );
}

/** Vibe Design — smiley with one white eye, one dark-tinted eye */
export function LegacyIconVibeDesign(props: SVGProps<SVGSVGElement>) {
  return (
    <W {...props}>
      <circle cx="12" cy="12" r="8.5" stroke="white" strokeWidth="1.75" />
      <circle cx="9" cy="10.5" r="1.5" fill="white" />
      <circle cx="15" cy="10.5" r="1.5" fill="rgba(255,255,255,0.28)" stroke="white" strokeWidth="1" />
      <path d="M9 15c.8 1.6 1.7 2.5 3 2.5s2.2-.9 3-2.5" stroke="white" strokeWidth="1.75" strokeLinecap="round" />
    </W>
  );
}

/** Communicate — chat bubble with 3 accent dots */
export function LegacyIconCommunicate(props: SVGProps<SVGSVGElement>) {
  return (
    <W {...props}>
      <path
        d="M4 7C4 5.9 4.9 5 6 5h12c1.1 0 2 .9 2 2v7c0 1.1-.9 2-2 2h-5l-4 3.5V16H6c-1.1 0-2-.9-2-2V7z"
        stroke="white"
        strokeWidth="1.75"
        strokeLinejoin="round"
      />
      <circle cx="9.5" cy="10.5" r="1.25" fill="rgba(52,211,153,0.9)" />
      <circle cx="12" cy="10.5" r="1.25" fill="rgba(52,211,153,0.9)" />
      <circle cx="14.5" cy="10.5" r="1.25" fill="rgba(52,211,153,0.9)" />
    </W>
  );
}

/** Brainstorm — lightbulb with rays */
export function LegacyIconBrainstorm(props: SVGProps<SVGSVGElement>) {
  return (
    <W {...props}>
      <path
        d="M12 4a5 5 0 0 1 3.8 8.2c-.5.6-.8 1.3-.8 2V15H9v-.8c0-.7-.3-1.4-.8-2A5 5 0 0 1 12 4z"
        stroke="white"
        strokeWidth="1.75"
        strokeLinejoin="round"
      />
      <path d="M9.5 15h5M10 18h4" stroke="white" strokeWidth="1.75" strokeLinecap="round" />
      <path d="M12 1v1.5M4.5 4.5l1 1M19.5 4.5l-1 1M2 12h1.5M20.5 12H22" stroke="rgba(255,255,255,0.65)" strokeWidth="1.5" strokeLinecap="round" />
    </W>
  );
}

/** Research — magnifying glass with crosshair inside */
export function LegacyIconResearch(props: SVGProps<SVGSVGElement>) {
  return (
    <W {...props}>
      <circle cx="11" cy="11" r="6.5" stroke="white" strokeWidth="1.75" />
      <path d="M11 8v6M8 11h6" stroke="white" strokeWidth="1.75" strokeLinecap="round" />
      <path d="M16 16l4 4" stroke="white" strokeWidth="1.75" strokeLinecap="round" />
    </W>
  );
}

/** Build — browser window + pencil */
export function LegacyIconBuild(props: SVGProps<SVGSVGElement>) {
  return (
    <W {...props}>
      <rect x="3" y="4" width="18" height="14" rx="2" stroke="white" strokeWidth="1.75" />
      <path d="M3 8h18" stroke="white" strokeWidth="1.5" />
      <circle cx="6.5" cy="6" r="1" fill="white" />
      <circle cx="9.5" cy="6" r="1" fill="rgba(255,255,255,0.5)" />
      <path d="M14 12.5l1.5-1.5 2 2-1.5 1.5L14 12.5z" stroke="white" strokeWidth="1.5" strokeLinejoin="round" />
      <path d="M14 12.5l-1 2.5 2.5-1" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M8 13l1.5 1.5L12 12" stroke="rgba(255,255,255,0.75)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </W>
  );
}

/** AI Agents — face with radial orbit dots */
export function LegacyIconAiAgents(props: SVGProps<SVGSVGElement>) {
  return (
    <W {...props}>
      <circle cx="12" cy="12" r="5.5" stroke="white" strokeWidth="1.75" />
      <circle cx="9.5" cy="10.5" r="1.25" fill="white" />
      <circle cx="14.5" cy="10.5" r="1.25" fill="white" />
      <path d="M9.5 14.5c.7 1.2 1.4 1.8 2.5 1.8s1.8-.6 2.5-1.8" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
      <circle cx="12" cy="4.5" r="1.25" fill="rgba(255,255,255,0.7)" />
      <circle cx="19" cy="8.5" r="1.25" fill="rgba(255,255,255,0.7)" />
      <circle cx="19" cy="15.5" r="1.25" fill="rgba(255,255,255,0.7)" />
      <circle cx="12" cy="19.5" r="1.25" fill="rgba(255,255,255,0.7)" />
      <circle cx="5" cy="15.5" r="1.25" fill="rgba(255,255,255,0.7)" />
      <circle cx="5" cy="8.5" r="1.25" fill="rgba(255,255,255,0.7)" />
    </W>
  );
}

/** Avatars — person head + body silhouette */
export function LegacyIconAvatars(props: SVGProps<SVGSVGElement>) {
  return (
    <W {...props}>
      <circle cx="12" cy="8.5" r="4" stroke="white" strokeWidth="1.75" />
      <path d="M5 21v-1.5a6 6 0 0 1 6-6h2a6 6 0 0 1 6 6V21" stroke="white" strokeWidth="1.75" strokeLinecap="round" />
    </W>
  );
}

/** Analytics — rising line chart with data-point dots */
export function LegacyIconAnalytics(props: SVGProps<SVGSVGElement>) {
  return (
    <W {...props}>
      <path d="M4 19h16" stroke="white" strokeWidth="1.75" strokeLinecap="round" />
      <path d="M6 15l4-4 3 3 5-6" stroke="white" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="6" cy="15" r="1.5" fill="white" />
      <circle cx="10" cy="11" r="1.5" fill="white" />
      <circle cx="13" cy="14" r="1.5" fill="white" />
      <circle cx="18" cy="8" r="1.5" fill="white" />
    </W>
  );
}

/** Integrations — two circles connected by line with colored endpoint dots */
export function LegacyIconIntegrations(props: SVGProps<SVGSVGElement>) {
  return (
    <W {...props}>
      <circle cx="7" cy="12" r="4.5" stroke="white" strokeWidth="1.75" />
      <circle cx="17" cy="12" r="4.5" stroke="white" strokeWidth="1.75" />
      <path d="M11.5 12h1" stroke="white" strokeWidth="1.75" strokeLinecap="round" />
      <circle cx="7" cy="12" r="1.75" fill="rgba(251,146,60,0.85)" />
      <circle cx="17" cy="12" r="1.75" fill="rgba(255,255,255,0.55)" />
    </W>
  );
}

/** Workflows — three cascading step blocks */
export function LegacyIconWorkflows(props: SVGProps<SVGSVGElement>) {
  return (
    <W {...props}>
      <rect x="3" y="4.5" width="9" height="4.5" rx="1.5" stroke="white" strokeWidth="1.75" />
      <rect x="7" y="10" width="9" height="4.5" rx="1.5" stroke="white" strokeWidth="1.75" />
      <rect x="11" y="15.5" width="9" height="4.5" rx="1.5" stroke="white" strokeWidth="1.75" />
    </W>
  );
}

/** People — two person silhouettes */
export function LegacyIconPeople(props: SVGProps<SVGSVGElement>) {
  return (
    <W {...props}>
      <circle cx="9" cy="7.5" r="3.5" stroke="white" strokeWidth="1.75" />
      <path d="M3 21v-1.5a5 5 0 0 1 5-5h2a5 5 0 0 1 5 5V21" stroke="white" strokeWidth="1.75" strokeLinecap="round" />
      <circle cx="17.5" cy="8" r="2.75" stroke="rgba(255,255,255,0.6)" strokeWidth="1.5" />
      <path d="M14.5 21v-1a4 4 0 0 1 4-4h1" stroke="rgba(255,255,255,0.6)" strokeWidth="1.5" strokeLinecap="round" />
    </W>
  );
}

/** Compliance — document with text lines + badge with checkmark */
export function LegacyIconCompliance(props: SVGProps<SVGSVGElement>) {
  return (
    <W {...props}>
      <path d="M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8l-5-5z" stroke="white" strokeWidth="1.75" strokeLinejoin="round" />
      <path d="M14 3v5h5" stroke="white" strokeWidth="1.5" strokeLinejoin="round" />
      <path d="M9 13h4M9 16h3" stroke="rgba(255,255,255,0.7)" strokeWidth="1.5" strokeLinecap="round" />
      <circle cx="17" cy="16.5" r="3.5" fill="rgba(192,132,252,0.9)" />
      <path d="M15.5 16.5l1.2 1.2 1.8-2" stroke="white" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
    </W>
  );
}

/** Automation — shield with checkmark */
export function LegacyIconAutomation(props: SVGProps<SVGSVGElement>) {
  return (
    <W {...props}>
      <path d="M12 3l8 4v5c0 5-3.5 8.5-8 10-4.5-1.5-8-5-8-10V7l8-4z" stroke="white" strokeWidth="1.75" strokeLinejoin="round" />
      <path d="M9 12l2.2 2.2L15.5 9" stroke="white" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />
    </W>
  );
}

/** Goals — five-pointed star */
export function LegacyIconGoals(props: SVGProps<SVGSVGElement>) {
  return (
    <W {...props}>
      <path
        d="M12 3l2.4 5.6 5.6.6-4 4.2 1 5.6L12 16.5l-5 2.5 1-5.6-4-4.2 5.6-.6L12 3z"
        stroke="white"
        strokeWidth="1.75"
        strokeLinejoin="round"
        fill="rgba(255,255,255,0.2)"
      />
    </W>
  );
}
