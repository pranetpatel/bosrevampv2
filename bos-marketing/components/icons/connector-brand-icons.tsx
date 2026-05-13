"use client";

import type { SVGProps } from "react";
import { useId } from "react";

const box = "h-7 w-7 shrink-0";

/** Team messages — generic multi-bubble (not Slack). */
export function BrandConnectorMsg(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={box} aria-hidden {...props}>
      <path
        d="M4 6.5a2 2 0 012-2h8a2 2 0 012 2v5a2 2 0 01-2 2H9l-3.5 3v-3H6a2 2 0 01-2-2v-5z"
        fill="#34B7F1"
        opacity={0.95}
      />
      <path
        d="M9.5 11.5a2 2 0 012-2h6a2 2 0 012 2v4a2 2 0 01-2 2h-1.5L14 19v-1.5H11.5a2 2 0 01-2-2v-4z"
        fill="#25D366"
        opacity={0.92}
      />
    </svg>
  );
}

export function BrandConnectorWorkspace(props: SVGProps<SVGSVGElement>) {
  const uid = useId().replace(/:/g, "");
  const g1 = `${uid}-cw1`;
  const g2 = `${uid}-cw2`;
  return (
    <svg viewBox="0 0 24 24" fill="none" className={box} aria-hidden {...props}>
      <path d="M12 3L4 7v4c0 4.2 3.4 8 8 9 4.6-1 8-4.8 8-9V7l-8-4z" fill={`url(#${g1})`} opacity={0.9} />
      <path d="M12 7.5L7 10v2.5c0 2.5 2 4.8 5 5.5 3-.7 5-3 5-5.5V10l-5-2.5z" fill={`url(#${g2})`} />
      <defs>
        <linearGradient id={g1} x1="4" y1="3" x2="20" y2="17" gradientUnits="userSpaceOnUse">
          <stop stopColor="#1A53FD" />
          <stop offset="1" stopColor="#04D1E0" />
        </linearGradient>
        <linearGradient id={g2} x1="7" y1="8" x2="17" y2="18" gradientUnits="userSpaceOnUse">
          <stop stopColor="#DA34F1" stopOpacity={0.85} />
          <stop offset="1" stopColor="#1A53FD" stopOpacity={0.75} />
        </linearGradient>
      </defs>
    </svg>
  );
}

/** BOS chat — abstract spiral knot (ChatGPT-adjacent palette, not a logo trace). */
export function BrandBosChat(props: SVGProps<SVGSVGElement>) {
  const uid = useId().replace(/:/g, "");
  const g = `${uid}-bc`;
  return (
    <svg viewBox="0 0 24 24" fill="none" className={box} aria-hidden {...props}>
      <path
        d="M12 3.5c4.7 0 8.5 3.4 8.5 7.6 0 2.1-1 4-2.6 5.3"
        stroke={`url(#${g})`}
        strokeWidth={2.4}
        strokeLinecap="round"
      />
      <path
        d="M17.9 16.4A8.4 8.4 0 0112 20.5a8.5 8.5 0 01-8.5-8.4c0-3.1 1.7-5.8 4.2-7.2"
        stroke="#19c37d"
        strokeWidth={2.2}
        strokeLinecap="round"
      />
      <path
        d="M7.7 4.9c1.3-.8 2.8-1.2 4.3-1.2 1.8 0 3.5.5 5 1.4"
        stroke="#74aa9c"
        strokeWidth={2}
        strokeLinecap="round"
        opacity={0.95}
      />
      <circle cx="12" cy="11.5" r="2.2" fill="#10a37f" />
      <defs>
        <linearGradient id={g} x1="8" y1="3" x2="22" y2="18" gradientUnits="userSpaceOnUse">
          <stop stopColor="#10a37f" />
          <stop offset="1" stopColor="#1ed3a6" />
        </linearGradient>
      </defs>
    </svg>
  );
}

/** Agent / bot chip — filled, product-like (distinct from line “Agents” tile). */
export function BrandConnectorAgent(props: SVGProps<SVGSVGElement>) {
  const uid = useId().replace(/:/g, "");
  const gf = `${uid}-agf`;
  return (
    <svg viewBox="0 0 24 24" fill="none" className={box} aria-hidden {...props}>
      <rect x="5" y="8" width="14" height="10" rx="2.25" fill={`url(#${gf})`} stroke="#94a3b8" strokeWidth={1} />
      <circle cx="9" cy="13" r="1.35" fill="#04D1E0" />
      <circle cx="15" cy="13" r="1.35" fill="#DA34F1" />
      <path d="M9 5.5v2.5M15 5.5v2.5M12 4.5v2" stroke="#1A53FD" strokeWidth={1.6} strokeLinecap="round" />
      <defs>
        <linearGradient id={gf} x1="5" y1="8" x2="19" y2="18" gradientUnits="userSpaceOnUse">
          <stop stopColor="#1e293b" />
          <stop offset="1" stopColor="#334155" />
        </linearGradient>
      </defs>
    </svg>
  );
}

/** CRM / pipeline — warm “deals” accent. */
export function BrandConnectorDeals(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={box} aria-hidden {...props}>
      <circle cx="9" cy="8" r="2.75" fill="#FF7A59" />
      <path
        d="M4 20v-1.5a3.5 3.5 0 013.5-3.5h3a3.5 3.5 0 013.5 3.5V20"
        stroke="#FF7A59"
        strokeWidth={1.5}
        strokeLinecap="round"
      />
      <circle cx="17" cy="9" r="2.25" fill="#1A53FD" />
      <path d="M21 20v-1a2.5 2.5 0 00-2.5-2.5H16" stroke="#1A53FD" strokeWidth={1.5} strokeLinecap="round" />
    </svg>
  );
}

export function BrandConnectorWiki(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={box} aria-hidden {...props}>
      <path
        d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8l-6-6z"
        fill="#0f766e"
        stroke="#14b8a6"
        strokeWidth={1.25}
      />
      <path d="M14 2v6h6" stroke="#99f6e4" strokeWidth={1.25} strokeLinecap="round" />
      <path d="M9 13h6M9 17h4" stroke="#ccfbf1" strokeWidth={1.25} strokeLinecap="round" />
    </svg>
  );
}

export function BrandConnectorGrowth(props: SVGProps<SVGSVGElement>) {
  const uid = useId().replace(/:/g, "");
  const g = `${uid}-cg1`;
  return (
    <svg viewBox="0 0 24 24" fill="none" className={box} aria-hidden {...props}>
      <path
        d="M4 16l4-5 4 3 5-7 3 3"
        stroke={`url(#${g})`}
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="8" cy="11" r="1.25" fill="#DA34F1" />
      <circle cx="12" cy="14" r="1.25" fill="#1A53FD" />
      <circle cx="17" cy="7" r="1.25" fill="#04D1E0" />
      <defs>
        <linearGradient id={g} x1="4" y1="16" x2="20" y2="7" gradientUnits="userSpaceOnUse">
          <stop stopColor="#DA34F1" />
          <stop offset="0.5" stopColor="#1A53FD" />
          <stop offset="1" stopColor="#04D1E0" />
        </linearGradient>
      </defs>
    </svg>
  );
}

export function BrandConnectorSupport(props: SVGProps<SVGSVGElement>) {
  const uid = useId().replace(/:/g, "");
  const g = `${uid}-cs1`;
  return (
    <svg viewBox="0 0 24 24" fill="none" className={box} aria-hidden {...props}>
      <path
        d="M18 8a6 6 0 10-12 0c0 7-3 7-3 7h18s-3 0-3-7M13.73 21a2 2 0 01-3.46 0"
        stroke={`url(#${g})`}
        strokeWidth={1.75}
        strokeLinecap="round"
      />
      <defs>
        <linearGradient id={g} x1="6" y1="4" x2="18" y2="21" gradientUnits="userSpaceOnUse">
          <stop stopColor="#DA34F1" />
          <stop offset="1" stopColor="#1A53FD" />
        </linearGradient>
      </defs>
    </svg>
  );
}

export function BrandConnectorZoom(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={box} aria-hidden {...props}>
      <rect x="2" y="6" width="14" height="12" rx="2" fill="#2D8CFF" />
      <path d="M16 10l6-3v10l-6-3v-4z" fill="#0b5cff" />
    </svg>
  );
}

/** Envelope flap strokes — Google-style palette (not a logo trace). */
export function BrandConnectorEmail(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={box} aria-hidden {...props}>
      <rect x="2.5" y="6" width="19" height="13" rx="2" fill="#f1f5f9" stroke="#cbd5e1" strokeWidth={1} />
      <path d="M3 7l9 6 9-6" stroke="#EA4335" strokeWidth={1.85} strokeLinecap="round" strokeLinejoin="round" />
      <path d="M3 7l9 6" stroke="#FBBC04" strokeWidth={1.5} strokeLinecap="round" />
      <path d="M21 7l-9 6" stroke="#34A853" strokeWidth={1.5} strokeLinecap="round" />
      <path d="M12 13L3 7" stroke="#4285F4" strokeWidth={1.5} strokeLinecap="round" />
    </svg>
  );
}

export function BrandConnectorMeet(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={box} aria-hidden {...props}>
      <rect x="3" y="5" width="18" height="16" rx="2" fill="#1f1f1f" stroke="#444" strokeWidth={0.75} />
      <path d="M7 9h3v6H7V9z" fill="#00832d" />
      <path d="M11.5 9h3v6h-3V9z" fill="#f9ab00" />
      <path d="M16 9h3v6h-3V9z" fill="#d93025" />
      <path d="M6 15.5h12" stroke="#1a73e8" strokeWidth={2} strokeLinecap="round" />
    </svg>
  );
}

export function BrandConnectorBridge(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={box} aria-hidden {...props}>
      <path
        d="M21 12a9 9 0 00-9-9 9.75 9.75 0 00-6.74 2.74L3 8"
        stroke="#04D1E0"
        strokeWidth={1.75}
        strokeLinecap="round"
      />
      <path
        d="M3 3v5h5M3 12a9 9 0 009 9 9.75 9.75 0 006.74-2.74L21 16"
        stroke="#DA34F1"
        strokeWidth={1.75}
        strokeLinecap="round"
      />
      <path d="M21 21v-5h-5" stroke="#1A53FD" strokeWidth={1.75} strokeLinecap="round" />
    </svg>
  );
}
