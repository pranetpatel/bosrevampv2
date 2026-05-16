"use client";

/**
 * Legacy “Work Made Simple” use-case card motion (see `legacy/BOS  -  Work Made Simple.htm`:
 * `.uc-canvas`, `.mini-term`, `.mini-bar`, `.metric-row`, gold tokens). Visuals aim for 1:1
 * parity with those cards  -  static fallbacks when `prefers-reduced-motion`.
 */

import { usePrefersReducedMotion } from "@/components/use-prefers-reduced-motion";
import { useEffect, useId, useRef, type ReactNode } from "react";

/** Pulled from legacy :root / .cmd-eyebrow */
const LEGACY = {
  goldLight: "#C9A84C",
  gold: "#A67C00",
  goldPale: "#E2C47A",
  textMuted: "#666260",
  textSoft: "#A8A49C",
  cream: "#F0EEE8",
  borderGold: "rgba(166,124,0,0.22)",
  surface: "rgba(240,238,232,0.04)",
  purple: "#DA34F1",
  cyan: "#04D1E0",
} as const;

export type LegacyOrbitalModuleId =
  | "ai-execution"
  | "workflow"
  | "team-ops"
  | "client-delivery"
  | "intelligence"
  | "communication"
  | "command-view"
  | "integrations";

export function BosOrbitalExperience({
  moduleId,
  accentColor,
}: {
  moduleId: LegacyOrbitalModuleId;
  accentColor: string;
}) {
  const reduced = usePrefersReducedMotion();

  switch (moduleId) {
    case "ai-execution":
      return <ExperienceAiExecution reduced={reduced} />;
    case "workflow":
      return <ExperienceWorkflow reduced={reduced} />;
    case "team-ops":
      return <ExperienceTeamOps reduced={reduced} />;
    case "client-delivery":
      return <ExperienceClientDelivery reduced={reduced} />;
    case "intelligence":
      return <ExperienceIntelligence reduced={reduced} />;
    case "communication":
      return <ExperienceCommunication reduced={reduced} />;
    case "command-view":
      return <ExperienceCommandView accentColor={accentColor} reduced={reduced} />;
    case "integrations":
      return <ExperienceIntegrations reduced={reduced} />;
    default:
      return null;
  }
}

/** Matches `.uc-canvas`  -  full-bleed feel, dimmed like legacy (opacity ~0.45 behind copy). */
function VizPanel({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <div
      className={`relative mt-5 overflow-hidden rounded-[20px] border bg-black/35 ${className}`}
      style={{ borderColor: LEGACY.borderGold }}
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_70%_55%_at_50%_0%,rgba(166,124,0,0.08),transparent_65%)]" />
      <div className="relative opacity-[0.92]">{children}</div>
    </div>
  );
}

function intelChartPathD(pts: readonly [number, number][]) {
  return pts.map(([x, y], i) => `${i === 0 ? "M" : "L"} ${x} ${y}`).join(" ");
}

function MiniTerm({
  lines,
}: {
  lines: {
    prompt: string;
    out: string;
    promptStyle?: "gold" | "white";
    outStyle?: "muted" | "white";
  }[];
}) {
  return (
    <div
      className="rounded-lg border px-4 py-3.5 font-mono text-[12px] leading-[1.9]"
      style={{
        background: "rgba(0,0,0,0.3)",
        borderColor: LEGACY.borderGold,
        color: LEGACY.textSoft,
      }}
    >
      {lines.map((line) => (
        <div key={line.out} className="mini-term-line">
          <span
            className="mr-1.5"
            style={{
              color: line.promptStyle === "white" ? "rgba(240,238,232,0.95)" : LEGACY.goldLight,
            }}
          >
            {line.prompt}
          </span>
          <span
            style={{
              color: line.outStyle === "white" ? LEGACY.cream : LEGACY.textSoft,
            }}
          >
            {line.out}
          </span>
        </div>
      ))}
    </div>
  );
}

/** AI Execution  -  static friction-style layout: hub + scattered nodes, faint spokes (no orbit ring). */
const AI_ORBS = [
  { hex: "#B47AEA" }, // purple
  { hex: "#5B9CF8" }, // blue
  { hex: "#7DD3FC" }, // sky
  { hex: "#4ADE80" }, // green
  { hex: "#2DD4BF" }, // teal
] as const;

const AI_EXEC_HUB = [160, 52] as const;

/** Fixed scatter, viewBox 320×104  -  asymmetric like the friction hero panel. */
const AI_EXEC_NODE_XY: readonly [number, number][] = [
  [42, 28],
  [86, 78],
  [138, 22],
  [238, 34],
  [262, 72],
];

/** A few extra faint chords between satellites (network, not a closed orbit). */
const AI_EXEC_PEER_EDGES: readonly [number, number][] = [
  [0, 2],
  [1, 4],
  [2, 3],
];

/** Static speck field (no motion). */
const AI_EXEC_SPECKS: readonly { x: number; y: number; r: number; c: string }[] = [
  { x: 18, y: 56, r: 0.5, c: "rgba(125,211,252,0.18)" },
  { x: 28, y: 18, r: 0.45, c: "rgba(180,122,234,0.16)" },
  { x: 54, y: 94, r: 0.4, c: "rgba(45,212,191,0.14)" },
  { x: 112, y: 58, r: 0.35, c: "rgba(91,156,248,0.12)" },
  { x: 176, y: 68, r: 0.45, c: "rgba(180,122,234,0.1)" },
  { x: 196, y: 14, r: 0.4, c: "rgba(74,222,128,0.12)" },
  { x: 224, y: 88, r: 0.5, c: "rgba(125,211,252,0.12)" },
  { x: 288, y: 22, r: 0.45, c: "rgba(218,52,241,0.1)" },
  { x: 300, y: 62, r: 0.35, c: "rgba(45,212,191,0.14)" },
  { x: 8, y: 82, r: 0.4, c: "rgba(100,100,120,0.12)" },
  { x: 152, y: 96, r: 0.35, c: "rgba(180,122,234,0.11)" },
  { x: 72, y: 44, r: 0.3, c: "rgba(255,255,255,0.08)" },
];

function ExperienceAiExecution({ reduced }: { reduced: boolean }) {
  const uid = useId().replace(/:/g, "");

  return (
    <div className="mt-5 space-y-4">
      <VizPanel className="h-[104px]">
        <div
          className="relative flex h-[104px] w-full items-center justify-center"
          style={{
            background:
              "radial-gradient(ellipse 65% 65% at 50% 50%, rgba(28,26,24,0.95), #0a0a0a 58%, #050505 100%)",
          }}
          aria-hidden
        >
          <svg className="h-full w-full max-w-[400px]" viewBox="0 0 320 104" preserveAspectRatio="xMidYMid meet">
            <defs>
              <filter id={`ai-node-glow-${uid}`} x="-80%" y="-80%" width="260%" height="260%">
                <feGaussianBlur stdDeviation="1.4" result="b" />
                <feMerge>
                  <feMergeNode in="b" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
            </defs>
            {AI_EXEC_SPECKS.map((s, i) => (
              <circle key={`s-${i}`} cx={s.x} cy={s.y} r={s.r} fill={s.c} />
            ))}
            {AI_EXEC_NODE_XY.map(([x, y], i) => (
              <line
                key={`spoke-${i}`}
                x1={AI_EXEC_HUB[0]}
                y1={AI_EXEC_HUB[1]}
                x2={x}
                y2={y}
                stroke="rgba(100,98,96,0.11)"
                strokeWidth="0.65"
              />
            ))}
            {AI_EXEC_PEER_EDGES.map(([ia, ib], i) => {
              const [x0, y0] = AI_EXEC_NODE_XY[ia]!;
              const [x1, y1] = AI_EXEC_NODE_XY[ib]!;
              return (
                <line
                  key={`peer-${i}`}
                  x1={x0}
                  y1={y0}
                  x2={x1}
                  y2={y1}
                  stroke="rgba(100,98,96,0.08)"
                  strokeWidth="0.55"
                />
              );
            })}
            {AI_EXEC_NODE_XY.map(([x, y], i) => {
              const o = AI_ORBS[i]!;
              return (
                <g key={`n-${i}`} filter={reduced ? undefined : `url(#ai-node-glow-${uid})`}>
                  <circle cx={x} cy={y} r="9.5" fill={o.hex} opacity="0.3" />
                  <circle cx={x} cy={y} r="2.35" fill={o.hex} opacity="0.95" />
                </g>
              );
            })}
            <circle cx={AI_EXEC_HUB[0]} cy={AI_EXEC_HUB[1]} r="14" fill="rgba(255,255,255,0.08)" />
            <circle cx={AI_EXEC_HUB[0]} cy={AI_EXEC_HUB[1]} r="3" fill="rgba(255,255,255,0.96)" />
          </svg>
        </div>
      </VizPanel>
      <MiniTerm
        lines={[
          { prompt: ">", out: '"Launch the Q3 campaign."' },
          { prompt: "→", out: "Briefing created · Team notified · Timeline set · Assets queued", promptStyle: "white" },
        ]}
      />
    </div>
  );
}

export function WorkflowRunningFooter() {
  return (
    <p
      className="mt-4 font-[family-name:var(--font-ui)] text-[10px] font-bold uppercase tracking-[0.2em]"
      style={{ color: LEGACY.goldLight }}
    >
      · 3 workflows running
    </p>
  );
}

/** Single-stream droplets: irregular phase (pairs / gaps) + per-droplet speed. */
const WF_WATERFALL_PHASE = [0.0, 0.02, 0.04, 0.21, 0.23, 0.25, 0.44, 0.46, 0.62, 0.64, 0.66, 0.83, 0.85, 0.87] as const;
const WF_WATERFALL_SPEED = [0.52, 0.56, 0.54, 0.68, 0.65, 0.7, 0.58, 0.62, 0.48, 0.52, 0.5, 0.64, 0.6, 0.57] as const;
const WF_WATERFALL_LEAD = 8;

function ExperienceWorkflow({ reduced }: { reduced: boolean }) {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (reduced) return;
    const c = ref.current;
    if (!c) return;
    const ctx = c.getContext("2d");
    if (!ctx) return;
    let raf = 0;
    let t = 0;
    let cancelled = false;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    const nDrops = WF_WATERFALL_PHASE.length;
    const baseBallR = 4.6;
    const cyan = LEGACY.cyan;

    const draw = () => {
      if (cancelled) return;
      const w = c.clientWidth;
      const h = c.clientHeight;
      if (w < 8) {
        raf = requestAnimationFrame(draw);
        return;
      }
      c.width = w * dpr;
      c.height = h * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      ctx.clearRect(0, 0, w, h);
      t += 0.018;
      const mx = 22;
      const my = 18;
      const uw = Math.max(8, w - 2 * mx);
      const uh = Math.max(8, h - 2 * my);
      const p0 = { x: mx + uw * 0.06, y: my + uh * 0.06 };
      const p1 = { x: mx + uw * 0.34, y: my + uh * 0.44 };
      const p2 = { x: mx + uw * 0.76, y: my + uh * 0.44 };
      const p3 = { x: mx + uw * 0.94, y: my + uh * 0.92 };
      const path = [p0, p1, p2, p3];

      const segLen = [0, 1, 2].map((i) => Math.hypot(path[i + 1].x - path[i].x, path[i + 1].y - path[i].y));
      const totalLen = segLen[0] + segLen[1] + segLen[2];

      const atUWithTangent = (uRaw: number) => {
        const u = ((uRaw % 1) + 1) % 1;
        let d = u * totalLen;
        for (let i = 0; i < 3; i++) {
          const sl = segLen[i];
          const sdx = path[i + 1].x - path[i].x;
          const sdy = path[i + 1].y - path[i].y;
          const sL = Math.hypot(sdx, sdy) || 1;
          if (d <= sl + 1e-9) {
            const tt = sl < 1e-9 ? 1 : Math.min(1, d / sl);
            return {
              x: path[i].x + tt * sdx,
              y: path[i].y + tt * sdy,
              tx: sdx / sL,
              ty: sdy / sL,
            };
          }
          d -= sl;
        }
        const sdx = p3.x - p2.x;
        const sdy = p3.y - p2.y;
        const sL = Math.hypot(sdx, sdy) || 1;
        return { x: p3.x, y: p3.y, tx: sdx / sL, ty: sdy / sL };
      };

      ctx.save();
      ctx.lineJoin = "round";
      ctx.lineCap = "round";
      ctx.beginPath();
      ctx.moveTo(p0.x, p0.y);
      ctx.lineTo(p1.x, p1.y);
      ctx.lineTo(p2.x, p2.y);
      ctx.lineTo(p3.x, p3.y);
      ctx.strokeStyle = "rgba(255,255,255,0.06)";
      ctx.lineWidth = 5;
      ctx.stroke();
      ctx.strokeStyle = "rgba(255,255,255,0.11)";
      ctx.lineWidth = 1.75;
      ctx.stroke();
      ctx.restore();

      const flow = t * 0.19;
      for (let i = 0; i < nDrops; i++) {
        const u = (flow * WF_WATERFALL_SPEED[i] + WF_WATERFALL_PHASE[i]) % 1;
        const spine = atUWithTangent(u);
        const nx = -spine.ty;
        const ny = spine.tx;
        // Soft water meander: slow drift across the spine, sometimes nearly flat (calm sheet)
        const calm = 0.42 + 0.58 * Math.pow(0.5 + 0.5 * Math.sin(t * 0.27 + i * 0.19 + u * 2.8), 1.8);
        const w1 = Math.sin(t * 0.58 + u * 4.6 + i * 0.51);
        const w2 = Math.sin(t * 0.33 - u * 3.1 + i * 0.73) * 0.55;
        const w3 = Math.sin(t * 0.91 + u * 9 + i * 1.1) * 0.28;
        const lateral = (2.15 * w1 + 1.05 * w2 + 0.6 * w3) * calm * (0.85 + (i % 5) * 0.06);
        const x = spine.x + nx * lateral;
        const y = spine.y + ny * lateral;
        const pulse = 0.55 + 0.45 * Math.sin(t * 1.85 + i * 0.71);
        const rad = baseBallR * (0.92 + (i % 4) * 0.035 + pulse * 0.05);
        const isLead = i === WF_WATERFALL_LEAD;
        ctx.beginPath();
        ctx.arc(x, y, rad, 0, Math.PI * 2);
        const g = ctx.createRadialGradient(x, y, 0, x, y, rad * 2.35);
        if (isLead) {
          g.addColorStop(0, "rgba(230, 252, 255, 0.98)");
          g.addColorStop(0.35, "rgba(120, 220, 255, 0.92)");
          g.addColorStop(0.65, "rgba(4, 209, 224, 0.55)");
          g.addColorStop(1, "rgba(4, 120, 200, 0.08)");
        } else {
          g.addColorStop(0, "rgba(200, 245, 255, 0.96)");
          g.addColorStop(0.32, "rgba(80, 200, 255, 0.9)");
          g.addColorStop(0.58, "rgba(4, 209, 224, 0.72)");
          g.addColorStop(0.82, "rgba(4, 140, 210, 0.35)");
          g.addColorStop(1, "rgba(4, 100, 180, 0.06)");
        }
        ctx.fillStyle = g;
        ctx.shadowColor = cyan;
        ctx.shadowBlur = isLead ? 16 * pulse : 12 * pulse;
        ctx.fill();
        ctx.shadowBlur = 0;
      }

      raf = requestAnimationFrame(draw);
    };
    raf = requestAnimationFrame(draw);
    return () => {
      cancelled = true;
      cancelAnimationFrame(raf);
    };
  }, [reduced]);

  return (
    <div className="w-full">
      <VizPanel className="h-[220px]">
        {reduced ? (
          <div className="relative flex h-[220px] items-center justify-center" aria-hidden>
            <svg
              className="pointer-events-none absolute inset-6 w-[calc(100%-3rem)] h-[calc(100%-3rem)] opacity-[0.22]"
              viewBox="0 0 100 100"
              preserveAspectRatio="none"
            >
              <polyline
                fill="none"
                stroke="rgba(255,255,255,0.45)"
                strokeWidth="0.85"
                strokeLinejoin="round"
                strokeLinecap="round"
                points="6,6 34,44 76,44 94,92"
              />
            </svg>
            <div className="relative flex flex-wrap justify-center gap-1.5 px-8">
              {WF_WATERFALL_PHASE.map((_, i) => (
                <div
                  key={i}
                  className="h-2.5 w-2.5 shrink-0 rounded-full"
                  style={{
                    background: i === WF_WATERFALL_LEAD ? "rgba(200,245,255,0.95)" : "rgba(80,200,255,0.88)",
                    opacity: i === WF_WATERFALL_LEAD ? 1 : 0.55 + (i % 5) * 0.07,
                    boxShadow: `0 0 10px ${LEGACY.cyan}99`,
                  }}
                />
              ))}
            </div>
          </div>
        ) : (
          <canvas ref={ref} className="block h-[220px] w-full" aria-hidden />
        )}
      </VizPanel>
    </div>
  );
}

// ─── Team OPS  -  tilted elliptical orbit, z-sorted moons, calm central hub ──────
const TEAM_ORBIT_OMEGA = 0.52;
const TEAM_ORBIT_ROT = 0.4;
const TEAM_ORBIT_A_FR = 0.33;
const TEAM_ORBIT_B_FR = 0.14;

const TEAM_ORBIT_MOONS: ReadonlyArray<{
  phase: number;
  col: string;
  glow: string;
  r: number;
}> = [
  { phase: 0, col: "#F472B6", glow: "rgba(244,114,182,0.48)", r: 2.35 },
  { phase: 0.82, col: "#60A5FA", glow: "rgba(96,165,250,0.45)", r: 2.15 },
  { phase: 1.58, col: "#4ADE80", glow: "rgba(74,222,128,0.42)", r: 2.35 },
  { phase: 2.4, col: "#E2C47A", glow: "rgba(226,196,122,0.48)", r: 2.05 },
  { phase: 3.18, col: "#FB923C", glow: "rgba(251,146,60,0.42)", r: 2.15 },
  { phase: 3.95, col: "#22D3EE", glow: "rgba(34,211,238,0.4)", r: 1.95 },
  { phase: 4.75, col: "#A78BFA", glow: "rgba(167,139,250,0.4)", r: 2.05 },
  { phase: 5.55, col: "#34D399", glow: "rgba(52,211,153,0.42)", r: 2.0 },
];

function teamOrbitPos(theta: number, cx: number, cy: number, a: number, b: number, rot: number) {
  const x = cx + a * Math.cos(theta) * Math.cos(rot) - b * Math.sin(theta) * Math.sin(rot);
  const y = cy + a * Math.cos(theta) * Math.sin(rot) + b * Math.sin(theta) * Math.cos(rot);
  return { x, y };
}

function ExperienceTeamOps({ reduced }: { reduced: boolean }) {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (reduced) return;
    const c = ref.current;
    if (!c) return;
    const ctx = c.getContext("2d");
    if (!ctx) return;
    let raf = 0;
    let cancelled = false;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    const t0 = performance.now();
    const n = TEAM_ORBIT_MOONS.length;

    const draw = (ts: number) => {
      if (cancelled) return;
      const w = c.clientWidth;
      const h = c.clientHeight;
      if (w < 8) {
        raf = requestAnimationFrame(draw);
        return;
      }
      c.width = w * dpr;
      c.height = h * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      const t = (ts - t0) / 1000;

      const cx = w * 0.5;
      const cy = h * 0.5;
      const m = Math.min(w, h);
      const a = m * TEAM_ORBIT_A_FR;
      const b = m * TEAM_ORBIT_B_FR;
      const rot = TEAM_ORBIT_ROT;

      const bg = ctx.createRadialGradient(cx, cy, 0, cx, cy, Math.max(w, h) * 0.55);
      bg.addColorStop(0, "rgba(22,21,20,0.98)");
      bg.addColorStop(0.55, "#0a0a0a");
      bg.addColorStop(1, "#050505");
      ctx.fillStyle = bg;
      ctx.fillRect(0, 0, w, h);

      // Foreshortened orbit rail (ellipse in space, viewed at an angle)
      ctx.beginPath();
      for (let k = 0; k <= 96; k++) {
        const th = (k / 96) * Math.PI * 2;
        const p = teamOrbitPos(th, cx, cy, a, b, rot);
        if (k === 0) ctx.moveTo(p.x, p.y);
        else ctx.lineTo(p.x, p.y);
      }
      ctx.closePath();
      ctx.strokeStyle = "rgba(201,168,76,0.14)";
      ctx.lineWidth = 1.1;
      ctx.stroke();

      const theta: number[] = [];
      const px: number[] = [];
      const py: number[] = [];
      const zd: number[] = [];
      for (let i = 0; i < n; i++) {
        const th = TEAM_ORBIT_OMEGA * t + TEAM_ORBIT_MOONS[i].phase;
        theta.push(th);
        const p = teamOrbitPos(th, cx, cy, a, b, rot);
        px.push(p.x);
        py.push(p.y);
        zd.push(Math.sin(th));
      }

      // Ring chords (follow orbit order  -  morphs as bodies move)
      ctx.lineWidth = 0.7;
      for (let i = 0; i < n; i++) {
        const j = (i + 1) % n;
        const vis = 0.35 + 0.35 * (zd[i] + zd[j] + 2) * 0.25;
        ctx.beginPath();
        ctx.moveTo(px[i], py[i]);
        ctx.lineTo(px[j], py[j]);
        ctx.strokeStyle = `rgba(88,86,84,${0.1 + vis * 0.22})`;
        ctx.stroke();
      }

      // Depth sort: “far” side of the orbit draws first so near moons pass over
      const order = Array.from({ length: n }, (_, i) => i).sort((ia, ib) => zd[ia] - zd[ib]);

      for (const i of order) {
        const o = TEAM_ORBIT_MOONS[i];
        const z = zd[i];
        const depth = 0.5 + 0.5 * z;
        const scale = 0.68 + 0.32 * depth;
        const alpha = 0.38 + 0.52 * depth;
        const pulse = 0.92 + 0.08 * Math.sin(t * 1.2 + o.phase);
        const rad = o.r * scale * pulse;
        const x = px[i];
        const y = py[i];
        const g = ctx.createRadialGradient(x, y, 0, x, y, rad * 3.2);
        g.addColorStop(0, o.col + Math.floor(140 + depth * 115).toString(16).padStart(2, "0"));
        g.addColorStop(0.38, o.col + "55");
        g.addColorStop(0.62, o.glow);
        g.addColorStop(1, "transparent");
        ctx.globalAlpha = alpha;
        ctx.fillStyle = g;
        ctx.beginPath();
        ctx.arc(x, y, rad * 3.2, 0, Math.PI * 2);
        ctx.fill();
        ctx.beginPath();
        ctx.arc(x, y, rad * 0.48, 0, Math.PI * 2);
        ctx.fillStyle = o.col + "E6";
        ctx.fill();
        ctx.globalAlpha = 1;
      }

      // Calm central hub (fixed  -  team anchor)
      const hg = ctx.createRadialGradient(cx, cy, 0, cx, cy, 26);
      hg.addColorStop(0, "rgba(255,255,255,0.95)");
      hg.addColorStop(0.2, "rgba(255,255,255,0.45)");
      hg.addColorStop(0.5, "rgba(240,238,232,0.08)");
      hg.addColorStop(1, "transparent");
      ctx.fillStyle = hg;
      ctx.beginPath();
      ctx.arc(cx, cy, 26, 0, Math.PI * 2);
      ctx.fill();
      ctx.beginPath();
      ctx.arc(cx, cy, 3.2, 0, Math.PI * 2);
      ctx.fillStyle = "rgba(255,255,255,0.98)";
      ctx.fill();

      raf = requestAnimationFrame(draw);
    };

    raf = requestAnimationFrame(draw);
    return () => {
      cancelled = true;
      cancelAnimationFrame(raf);
    };
  }, [reduced]);

  return (
    <div className="mt-5">
      <VizPanel className="h-[200px]">
        {reduced ? (
          <div
            className="relative flex h-[200px] w-full items-center justify-center"
            style={{
              background:
                "radial-gradient(ellipse 65% 65% at 50% 50%, rgba(28,26,24,0.95), #0a0a0a 58%, #050505 100%)",
            }}
            aria-hidden
          >
            <svg className="h-full w-full max-w-[420px]" viewBox="0 0 320 200" preserveAspectRatio="xMidYMid meet">
              <ellipse
                cx="160"
                cy="100"
                rx="105"
                ry="44"
                fill="none"
                stroke="rgba(201,168,76,0.14)"
                strokeWidth="1.1"
                transform="rotate(23 160 100)"
              />
              {[
                [246, 118],
                [214, 72],
                [160, 58],
                [106, 72],
                [74, 118],
                [92, 152],
                [160, 168],
                [228, 152],
              ].map(([x, y], i) => (
                <g key={i}>
                  <circle cx={x} cy={y} r="9" fill={TEAM_ORBIT_MOONS[i].col} opacity="0.32" />
                  <circle cx={x} cy={y} r="2.2" fill={TEAM_ORBIT_MOONS[i].col} opacity="0.9" />
                </g>
              ))}
              <circle cx="160" cy="100" r="18" fill="rgba(255,255,255,0.12)" />
              <circle cx="160" cy="100" r="3.2" fill="rgba(255,255,255,0.95)" />
            </svg>
          </div>
        ) : (
          <canvas ref={ref} className="block h-[200px] w-full" aria-hidden />
        )}
      </VizPanel>
      <div className="mt-4 flex flex-wrap gap-10">
        <div>
          <p className="font-[family-name:var(--font-display)] text-[28px] font-extrabold leading-none" style={{ color: LEGACY.goldLight }}>
            ↓68%
          </p>
          <p className="mt-1 font-[family-name:var(--font-sans)] text-[11px] font-medium" style={{ color: LEGACY.textMuted }}>
            Status meetings
          </p>
        </div>
        <div>
          <p className="font-[family-name:var(--font-display)] text-[28px] font-extrabold leading-none" style={{ color: LEGACY.goldLight }}>
            ↑3×
          </p>
          <p className="mt-1 font-[family-name:var(--font-sans)] text-[11px] font-medium" style={{ color: LEGACY.textMuted }}>
            Response speed
          </p>
        </div>
      </div>
    </div>
  );
}

/** Faint teal line + nodes behind Client Delivery copy (orbital detail panel). */
const CLIENT_DELIVERY_BACKDROP_POINTS: readonly [number, number][] = [
  [6, 72],
  [46, 50],
  [86, 66],
  [126, 44],
  [166, 58],
  [206, 42],
  [246, 56],
  [286, 48],
];

const CLIENT_DELIVERY_BACKDROP_PATH_STATIC = intelChartPathD(CLIENT_DELIVERY_BACKDROP_POINTS);

export function ClientDeliveryBackdropGraph({ className = "" }: { className?: string }) {
  const reduced = usePrefersReducedMotion();
  const uid = useId().replace(/:/g, "");
  const gradId = `cd-backdrop-${uid}`;
  const pathRef = useRef<SVGPathElement>(null);
  const circleRefs = useRef<(SVGCircleElement | null)[]>([]);

  useEffect(() => {
    if (reduced) return;
    const path = pathRef.current;
    let raf = 0;

    const resetToBase = () => {
      path?.setAttribute("d", CLIENT_DELIVERY_BACKDROP_PATH_STATIC);
      CLIENT_DELIVERY_BACKDROP_POINTS.forEach(([x, y], i) => {
        const c = circleRefs.current[i];
        if (!c) return;
        c.setAttribute("cx", String(x));
        c.setAttribute("cy", String(y));
      });
    };

    const tick = (now: number) => {
      const t = now / 1000;
      const pts: [number, number][] = CLIENT_DELIVERY_BACKDROP_POINTS.map(([x, y], i) => {
        if (i === 0 || i === CLIENT_DELIVERY_BACKDROP_POINTS.length - 1) return [x, y];
        const amp = 1.85 + (i % 2) * 0.3;
        const dy = Math.sin(t * 1.85 + i * 0.88) * amp;
        return [x, y + dy];
      });
      path?.setAttribute("d", intelChartPathD(pts));
      pts.forEach(([x, y], i) => {
        const c = circleRefs.current[i];
        if (!c) return;
        c.setAttribute("cx", String(x));
        c.setAttribute("cy", String(y));
      });
      raf = requestAnimationFrame(tick);
    };

    raf = requestAnimationFrame(tick);
    return () => {
      cancelAnimationFrame(raf);
      resetToBase();
    };
  }, [reduced]);

  return (
    <div className={className} aria-hidden>
      <svg className="h-full w-full" viewBox="0 0 300 92" preserveAspectRatio="xMidYMid meet">
        <defs>
          <linearGradient id={gradId} x1="0%" y1="50%" x2="100%" y2="50%">
            <stop offset="0%" stopColor={LEGACY.cyan} stopOpacity="0.12" />
            <stop offset="45%" stopColor={LEGACY.cyan} stopOpacity="0.42" />
            <stop offset="100%" stopColor={LEGACY.cyan} stopOpacity="0.18" />
          </linearGradient>
          <filter id={`cd-glow-${uid}`} x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="1.8" result="b" />
            <feMerge>
              <feMergeNode in="b" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>
        <path
          ref={pathRef}
          d={CLIENT_DELIVERY_BACKDROP_PATH_STATIC}
          fill="none"
          stroke={`url(#${gradId})`}
          strokeWidth="1.15"
          strokeLinecap="round"
          strokeLinejoin="round"
          opacity="0.55"
        />
        {CLIENT_DELIVERY_BACKDROP_POINTS.map(([cx, cy], i) => (
          <circle
            key={i}
            ref={(el) => {
              circleRefs.current[i] = el;
            }}
            cx={cx}
            cy={cy}
            r="2.35"
            fill={LEGACY.cyan}
            opacity="0.35"
            filter={`url(#cd-glow-${uid})`}
          >
            {!reduced ? (
              <animate attributeName="opacity" values="0.22;0.5;0.22" dur="2.8s" repeatCount="indefinite" begin={`${i * 0.18}s`} />
            ) : null}
          </circle>
        ))}
      </svg>
    </div>
  );
}

function ExperienceClientDelivery({ reduced }: { reduced: boolean }) {
  const uid = useId().replace(/:/g, "");

  return (
    <div className="mt-5 space-y-4">
      <div>
        <div className="mb-2 flex justify-between font-[family-name:var(--font-sans)] text-[11px] font-semibold" style={{ color: LEGACY.textMuted }}>
          <span>Campaign launch</span>
          <span style={{ color: LEGACY.goldLight }}>82%</span>
        </div>
        <div className="h-[3px] overflow-hidden rounded-sm" style={{ background: "rgba(240,238,232,0.1)" }}>
          <div
            className="h-full rounded-sm"
            style={{
              width: reduced ? "82%" : undefined,
              background: `linear-gradient(90deg,${LEGACY.gold},${LEGACY.goldLight})`,
              animation: reduced ? undefined : `fillBarClientA-${uid} 2s cubic-bezier(0.16,1,0.3,1) forwards`,
            }}
          />
        </div>
      </div>
      <div>
        <div className="mb-2 flex justify-between font-[family-name:var(--font-sans)] text-[11px] font-semibold" style={{ color: LEGACY.textMuted }}>
          <span>Brand refresh</span>
          <span style={{ color: LEGACY.goldLight }}>54%</span>
        </div>
        <div className="h-[3px] overflow-hidden rounded-sm" style={{ background: "rgba(240,238,232,0.1)" }}>
          <div
            className="h-full rounded-sm"
            style={{
              width: reduced ? "54%" : undefined,
              background: `linear-gradient(90deg,#5B3800,${LEGACY.goldLight})`,
              animation: reduced ? undefined : `fillBarClientB-${uid} 2s cubic-bezier(0.16,1,0.3,1) 0.15s forwards`,
            }}
          />
        </div>
      </div>
      <style>{`
        @keyframes fillBarClientA-${uid} { from { width: 0; } to { width: 82%; } }
        @keyframes fillBarClientB-${uid} { from { width: 0; } to { width: 54%; } }
      `}</style>
    </div>
  );
}

/** Intelligence mini-chart: endpoints fixed; middle control points oscillate on Y. */
const INTEL_CHART_POINTS: readonly [number, number][] = [
  [10, 86],
  [48, 68],
  [92, 52],
  [128, 36],
  [168, 22],
  [210, 12],
  [252, 6],
];

const INTEL_PATH_STATIC = intelChartPathD(INTEL_CHART_POINTS);

function ExperienceIntelligence({ reduced }: { reduced: boolean }) {
  const uid = useId().replace(/:/g, "");
  const gradId = `intel-${uid}`;
  const pathRef = useRef<SVGPathElement>(null);
  const circleRefs = useRef<(SVGCircleElement | null)[]>([]);

  useEffect(() => {
    if (reduced) return;
    const path = pathRef.current;
    let raf = 0;

    const resetToBase = () => {
      path?.setAttribute("d", INTEL_PATH_STATIC);
      INTEL_CHART_POINTS.forEach(([x, y], i) => {
        const c = circleRefs.current[i];
        if (!c) return;
        c.setAttribute("cx", String(x));
        c.setAttribute("cy", String(y));
      });
    };

    const tick = (now: number) => {
      const t = now / 1000;
      const pts: [number, number][] = INTEL_CHART_POINTS.map(([x, y], i) => {
        if (i === 0 || i === INTEL_CHART_POINTS.length - 1) return [x, y];
        const amp = 2.4 + (i % 2) * 0.35;
        const dy = Math.sin(t * 1.85 + i * 0.9) * amp;
        return [x, y + dy];
      });
      const d = intelChartPathD(pts);
      path?.setAttribute("d", d);
      pts.forEach(([x, y], i) => {
        const c = circleRefs.current[i];
        if (!c) return;
        c.setAttribute("cx", String(x));
        c.setAttribute("cy", String(y));
      });
      raf = requestAnimationFrame(tick);
    };

    raf = requestAnimationFrame(tick);
    return () => {
      cancelAnimationFrame(raf);
      resetToBase();
    };
  }, [reduced]);

  return (
    <div className="mt-5">
      <VizPanel className="h-[128px]">
        <svg className="h-[128px] w-full" viewBox="0 0 260 100" preserveAspectRatio="xMidYMid meet" aria-hidden>
          <defs>
            <linearGradient id={gradId} x1="0%" y1="100%" x2="100%" y2="0%">
              <stop offset="0%" stopColor={LEGACY.gold} stopOpacity="0.35" />
              <stop offset="100%" stopColor={LEGACY.goldLight} stopOpacity="0.95" />
            </linearGradient>
            <filter id={`glow-${uid}`} x="-40%" y="-40%" width="180%" height="180%">
              <feGaussianBlur stdDeviation="1.4" result="b" />
              <feMerge>
                <feMergeNode in="b" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>
          <path
            ref={pathRef}
            d={INTEL_PATH_STATIC}
            fill="none"
            stroke={`url(#${gradId})`}
            strokeWidth="1.75"
            strokeLinecap="round"
            strokeLinejoin="round"
            filter={`url(#glow-${uid})`}
            strokeDasharray={reduced ? "400" : "340"}
            strokeDashoffset={reduced ? "0" : "340"}
            className={reduced ? undefined : `bos-intel-line-${uid}`}
          />
          {INTEL_CHART_POINTS.map(([cx, cy], i) => (
            <circle
              key={i}
              ref={(el) => {
                circleRefs.current[i] = el;
              }}
              cx={cx}
              cy={cy}
              r="3.2"
              fill={LEGACY.goldLight}
              opacity="0.85"
              filter={`url(#glow-${uid})`}
            >
              {!reduced ? (
                <animate attributeName="opacity" values="0.35;1;0.35" dur="2.6s" repeatCount="indefinite" begin={`${i * 0.22}s`} />
              ) : null}
            </circle>
          ))}
        </svg>
      </VizPanel>
      <p className="mt-3 font-[family-name:var(--font-display)] text-[28px] font-extrabold leading-none" style={{ color: LEGACY.goldLight }}>
        94%{" "}
        <span className="text-[13px] font-semibold" style={{ color: LEGACY.textMuted }}>
          forecast accuracy
        </span>
      </p>
      <style>{`
        @keyframes bosIntelLine-${uid} { from { stroke-dashoffset: 340; } to { stroke-dashoffset: 0; } }
        .bos-intel-line-${uid} { animation: bosIntelLine-${uid} 2.4s cubic-bezier(0.16, 1, 0.3, 1) forwards; }
      `}</style>
    </div>
  );
}

function ExperienceCommunication({ reduced }: { reduced: boolean }) {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (reduced) return;
    const c = ref.current;
    if (!c) return;
    const ctx = c.getContext("2d");
    if (!ctx) return;
    let raf = 0;
    let t = 0;
    let cancelled = false;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    const blobs = Array.from({ length: 26 }, (_, i) => ({
      x: 0.5 + (Math.random() - 0.5) * 0.55,
      y: 0.5 + (Math.random() - 0.5) * 0.5,
      vx: (Math.random() - 0.5) * 0.1,
      vy: (Math.random() - 0.5) * 0.1,
      col: i % 3 === 0 ? "#6B5EFF" : i % 3 === 1 ? "#3CD3FE" : "#A78BFA",
      sz: 1.8 + Math.random() * 2.8,
    }));

    const draw = () => {
      if (cancelled) return;
      const w = c.clientWidth;
      const h = c.clientHeight;
      if (w < 8) {
        raf = requestAnimationFrame(draw);
        return;
      }
      c.width = w * dpr;
      c.height = h * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      ctx.clearRect(0, 0, w, h);
      t += 0.02;
      const cx = w * 0.5;
      const cy = h * 0.5;
      for (let i = 0; i < blobs.length; i++) {
        const a = blobs[i];
        a.x += a.vx * 0.008 + Math.sin(t * 0.4 + i) * 0.0006;
        a.y += a.vy * 0.008 + Math.cos(t * 0.35 + i) * 0.0006;
        if (a.x < 0.12 || a.x > 0.88) a.vx *= -1;
        if (a.y < 0.12 || a.y > 0.88) a.vy *= -1;
        const px = a.x * w;
        const py = a.y * h;
        for (let j = i + 1; j < blobs.length; j++) {
          const b = blobs[j];
          const dx = (a.x - b.x) * w;
          const dy = (a.y - b.y) * h;
          const dist = Math.hypot(dx, dy);
          if (dist < 52) {
            ctx.strokeStyle = `rgba(124,58,237,${0.04 * (1 - dist / 52)})`;
            ctx.lineWidth = 0.6;
            ctx.beginPath();
            ctx.moveTo(px, py);
            ctx.lineTo(b.x * w, b.y * h);
            ctx.stroke();
          }
        }
        const pulse = 0.45 + 0.55 * Math.sin(t * 1.8 + i * 0.5);
        const g = ctx.createRadialGradient(px, py, 0, px, py, a.sz * 4);
        g.addColorStop(0, `${a.col}${Math.floor(140 + pulse * 115).toString(16).padStart(2, "0")}`);
        g.addColorStop(1, "transparent");
        ctx.fillStyle = g;
        ctx.beginPath();
        ctx.arc(px, py, a.sz * 3.2, 0, Math.PI * 2);
        ctx.fill();
      }
      raf = requestAnimationFrame(draw);
    };
    raf = requestAnimationFrame(draw);
    return () => {
      cancelled = true;
      cancelAnimationFrame(raf);
    };
  }, [reduced]);

  return (
    <div className="mt-5">
      <VizPanel className="h-[140px]">
        {reduced ? (
          <div className="flex h-[140px] flex-wrap content-center justify-center gap-2 p-6 opacity-55" aria-hidden>
            {Array.from({ length: 12 }).map((_, i) => (
              <span
                key={i}
                className="rounded-full"
                style={{
                  width: 4 + (i % 4),
                  height: 4 + (i % 4),
                  background: i % 2 ? "#3CD3FE" : "#6B5EFF",
                  opacity: 0.4 + (i % 5) * 0.1,
                }}
              />
            ))}
          </div>
        ) : (
          <canvas ref={ref} className="h-[140px] w-full" aria-hidden />
        )}
      </VizPanel>
      <div className="mt-3 inline-flex items-center gap-2 font-[family-name:var(--font-ui)] text-[10px] font-bold uppercase tracking-[0.2em]" style={{ color: LEGACY.goldLight }}>
        <span
          className="inline-block h-1.5 w-1.5 rounded-full"
          style={{
            background: LEGACY.goldLight,
            animation: reduced ? undefined : "commBlink 1.5s ease-in-out infinite",
          }}
        />
        · 12 active threads
      </div>
      <style>{`
        @keyframes commBlink { 0%, 100% { opacity: 0.35; } 50% { opacity: 1; } }
      `}</style>
    </div>
  );
}

// ─── Command View  -  centered orbital + sonar-style blips on gold sweep ───────
const CV_RING_COUNT = 5;
/** Faster sweep (full rotations per minute). */
const CV_SWEEP_RPM = 6.2;
const CV_WEDGE_DEG = 42;
/** Angular window (rad) where the sweep “lights” a blip. */
const CV_BLIP_HIT_RAD = (12 * Math.PI) / 180;
const CV_BLIP_DECAY = 3.4;

/** ring 1..CV_RING_COUNT, angle rad, dot radius px */
const CV_ORBITALS: ReadonlyArray<{
  ring: number;
  ang: number;
  rpx: number;
  col: string;
  ph: number;
}> = [
  { ring: 2, ang: 1.15, rpx: 2.1, col: "#2DD4BF", ph: 0.2 },
  { ring: 2, ang: 4.35, rpx: 1.9, col: "#5B9CF8", ph: 1.4 },
  { ring: 3, ang: 2.65, rpx: 2.2, col: "#E24A5A", ph: 0.9 },
  { ring: 3, ang: 5.55, rpx: 2.0, col: "#B47AEA", ph: 2.1 },
  { ring: 3, ang: 0.05, rpx: 1.7, col: "#6B7280", ph: 2.6 },
  { ring: 4, ang: 0.55, rpx: 2.1, col: "#2DD4BF", ph: 0.5 },
  { ring: 4, ang: 3.25, rpx: 2.0, col: "#5B9CF8", ph: 1.7 },
  { ring: 4, ang: 1.95, rpx: 1.85, col: "#DA34F1", ph: 2.3 },
  { ring: 4, ang: 4.85, rpx: 1.75, col: "#E24A5A", ph: 0.1 },
];

/** Constellation edges (indices into orbitals) */
const CV_CONST_EDGES: ReadonlyArray<readonly [number, number]> = [
  [0, 1],
  [0, 2],
  [2, 3],
  [3, 7],
  [5, 6],
  [6, 8],
  [2, 5],
  [4, 7],
];

function ExperienceCommandView({
  reduced,
}: {
  accentColor: string;
  reduced: boolean;
}) {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const c = ref.current;
    if (!c) return;
    const ctx = c.getContext("2d");
    if (!ctx) return;
    let raf = 0;
    let cancelled = false;
    let lastTs = 0;
    let sweepAngle = Math.PI * 0.35;
    const WEDGE_RAD = (CV_WEDGE_DEG * Math.PI) / 180;
    const SWEEP_SPEED = (CV_SWEEP_RPM / 60) * Math.PI * 2;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    const t0 = performance.now();
    const blipHit = new Float32Array(CV_ORBITALS.length);

    const draw = (ts: number) => {
      if (cancelled) return;
      const dt = reduced ? 0 : Math.min((ts - (lastTs || ts)) / 1000, 0.05);
      lastTs = ts;
      const t = (ts - t0) / 1000;

      const w = c.clientWidth;
      const h = c.clientHeight;
      if (w < 8) {
        raf = requestAnimationFrame(draw);
        return;
      }
      c.width = w * dpr;
      c.height = h * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      const cx = w * 0.48;
      const cy = h * 0.5;
      const R = Math.min(w, h) * 0.4;

      // Atmosphere  -  slightly lighter at center (legacy card)
      const bg = ctx.createRadialGradient(cx, cy, 0, cx, cy, R * 1.25);
      bg.addColorStop(0, "rgba(28,26,24,0.95)");
      bg.addColorStop(0.45, "#0e0e0e");
      bg.addColorStop(1, "#050505");
      ctx.fillStyle = bg;
      ctx.fillRect(0, 0, w, h);

      // Full concentric orbits
      ctx.lineWidth = 0.65;
      for (let ri = 1; ri <= CV_RING_COUNT; ri++) {
        const rr = (R * ri) / CV_RING_COUNT;
        ctx.beginPath();
        ctx.arc(cx, cy, rr, 0, Math.PI * 2);
        ctx.strokeStyle = ri === CV_RING_COUNT ? "rgba(55,52,48,0.55)" : "rgba(38,36,34,0.42)";
        ctx.stroke();
      }

      if (!reduced) sweepAngle += SWEEP_SPEED * dt;
      while (sweepAngle > Math.PI * 2) sweepAngle -= Math.PI * 2;
      while (sweepAngle < 0) sweepAngle += Math.PI * 2;

      // Soft gold radar wedge (full rotation)
      const steps = 12;
      for (let s = 0; s < steps; s++) {
        const f0 = s / steps;
        const f1 = (s + 1) / steps;
        const a0 = sweepAngle - f1 * WEDGE_RAD;
        const a1 = sweepAngle - f0 * WEDGE_RAD;
        ctx.beginPath();
        ctx.moveTo(cx, cy);
        ctx.arc(cx, cy, R * 1.02, a0, a1, false);
        ctx.closePath();
        const alpha = (1 - f0) * 0.07;
        ctx.fillStyle = `rgba(201,168,76,${alpha})`;
        ctx.fill();
      }

      // Positions with gentle drift
      const xs: number[] = [];
      const ys: number[] = [];
      for (let i = 0; i < CV_ORBITALS.length; i++) {
        const o = CV_ORBITALS[i];
        const ringR = (R * o.ring) / CV_RING_COUNT;
        const bobA = reduced ? 0 : Math.sin(t * 0.55 + o.ph) * 0.045;
        const bobR = reduced ? 0 : Math.sin(t * 0.4 + o.ph * 1.3) * 2.2;
        const ang = o.ang + bobA;
        const rad = ringR + bobR;
        xs.push(cx + Math.cos(ang) * rad);
        ys.push(cy + Math.sin(ang) * rad);
      }

      // Sonar: coloured blips peak when sweep passes, fade out otherwise
      if (!reduced && dt > 0) {
        for (let i = 0; i < CV_ORBITALS.length; i++) {
          let ang = Math.atan2(ys[i] - cy, xs[i] - cx);
          if (ang < 0) ang += Math.PI * 2;
          let ad = Math.abs(sweepAngle - ang);
          if (ad > Math.PI) ad = Math.PI * 2 - ad;
          if (ad < CV_BLIP_HIT_RAD) blipHit[i] = 1;
          blipHit[i] = Math.max(0, blipHit[i] - dt * CV_BLIP_DECAY);
        }
      }

      // Constellation  -  only visible while endpoints are “lit”
      ctx.lineWidth = 0.65;
      for (const [ia, ib] of CV_CONST_EDGES) {
        const edgeVis = Math.min(blipHit[ia], blipHit[ib]);
        if (edgeVis < 0.04) continue;
        ctx.strokeStyle = `rgba(120,118,115,${0.08 + edgeVis * 0.22})`;
        ctx.beginPath();
        ctx.moveTo(xs[ia], ys[ia]);
        ctx.lineTo(xs[ib], ys[ib]);
        ctx.stroke();
      }

      // Coloured blips  -  skip when fully faded
      for (let i = 0; i < CV_ORBITALS.length; i++) {
        const o = CV_ORBITALS[i];
        const x = xs[i];
        const y = ys[i];
        const vis = reduced ? 0.55 : blipHit[i];
        if (vis < 0.03) continue;
        const scale = 0.72 + vis * 0.55;
        const rGlow = o.rpx * 3.5 * scale;
        const g = ctx.createRadialGradient(x, y, 0, x, y, rGlow);
        g.addColorStop(0, o.col);
        g.addColorStop(0.4, `${o.col}CC`);
        g.addColorStop(1, "transparent");
        ctx.globalAlpha = vis * 0.94;
        ctx.fillStyle = g;
        ctx.beginPath();
        ctx.arc(x, y, rGlow, 0, Math.PI * 2);
        ctx.fill();
        ctx.beginPath();
        ctx.arc(x, y, o.rpx * 0.55 * scale, 0, Math.PI * 2);
        ctx.fillStyle = o.col;
        ctx.globalAlpha = Math.min(1, vis * 1.05);
        ctx.fill();
        ctx.globalAlpha = 1;
      }

      // Sweep arm on top of blips
      ctx.beginPath();
      ctx.moveTo(cx, cy);
      ctx.lineTo(cx + Math.cos(sweepAngle) * R * 1.02, cy + Math.sin(sweepAngle) * R * 1.02);
      ctx.strokeStyle = "rgba(226,196,120,0.55)";
      ctx.lineWidth = 1.15;
      ctx.stroke();

      raf = requestAnimationFrame(draw);
    };

    raf = requestAnimationFrame(draw);
    return () => {
      cancelled = true;
      cancelAnimationFrame(raf);
    };
  }, [reduced]);

  return (
    <div className="space-y-4">
      <VizPanel className="h-[210px]">
        {reduced ? (
          <div
            className="flex h-[210px] w-full items-center justify-center"
            style={{
              background:
                "radial-gradient(ellipse 70% 70% at 48% 50%, rgba(38,36,34,0.9), #0a0908 72%)",
            }}
            aria-hidden
          >
            <div
              className="relative h-28 w-28 rounded-full"
              style={{ border: "1px solid rgba(55,52,48,0.5)" }}
            />
          </div>
        ) : (
          <canvas ref={ref} className="block h-[210px] w-full" aria-hidden />
        )}
      </VizPanel>
      <MiniTerm
        lines={[
          { prompt: ">", out: '"What needs my attention today?"' },
          {
            prompt: "→",
            out: "2 approvals · 1 blocker · Q3 at risk · 4 wins this week",
            outStyle: "white",
          },
        ]}
      />
    </div>
  );
}

// ─── Integrations  -  hub & spokes + outward pulses (legacy card 1) ─────────────
const INT_NODE_COUNT = 18;
/** Normalized ring radius (× scale): one shared circle so spokes read as a wheel, not a starburst. */
const INT_RING_NORM = 0.74;
const INT_SPRING_K = 118;
const INT_DAMPING = 8.2;
/** Small in/out shimmer only; big values break the circular silhouette. */
const INT_NOISE_AMP = 3.5;
const INT_REPULSION = 120;
const INT_LINE_BASE = 0.22;
const INT_LINE_SHIMMER = 0.07;
const INT_PULSE_SPEED = 0.44;
const INT_HUB_BREATHE = 0.04;

const INT_COLORS = [
  "#E040FB", "#AB47BC", "#7C4DFF",
  "#00BCD4", "#26C6DA", "#448AFF",
  "#FF7043", "#FF9100",
  "#69F0AE", "#00E676",
  "#FF4081", "#F50057",
  "#40C4FF", "#18FFFF",
] as const;

type IntNode = {
  baseAng: number;
  baseRad: number;
  phase: number;
  driftRate: number;
  col: string;
  size: number;
  depth: number;
  x: number;
  y: number;
  vx: number;
  vy: number;
};

function makeIntNodes(): IntNode[] {
  return Array.from({ length: INT_NODE_COUNT }, (_, i) => {
    // Even spacing on one circle (avoids “spokes everywhere” look).
    const baseAng = ((i + 0.5) / INT_NODE_COUNT) * Math.PI * 2;
    const baseRad = INT_RING_NORM;
    const depth = 0.32 + ((i * 3) % 7) * 0.09;
    return {
      baseAng,
      baseRad,
      phase: (i * 1.618) % (Math.PI * 2),
      driftRate: 0.09 + (i % 4) * 0.028,
      col: INT_COLORS[i % INT_COLORS.length],
      size: 2 + (i % 4) * 0.55 + depth * 0.9,
      depth,
      x: 0,
      y: 0,
      vx: 0,
      vy: 0,
    };
  });
}

function ExperienceIntegrations({ reduced }: { reduced: boolean }) {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const c = ref.current;
    if (!c) return;
    const ctx = c.getContext("2d");
    if (!ctx) return;
    let raf = 0;
    let cancelled = false;
    let lastTs = 0;
    let simTime = 0;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    const nodes = makeIntNodes();
    let initialized = false;

    const draw = (ts: number) => {
      if (cancelled) return;
      const dt = reduced ? 0 : Math.min((ts - (lastTs || ts)) / 1000, 0.05);
      lastTs = ts;
      simTime += dt;

      const w = c.clientWidth;
      const h = c.clientHeight;
      if (w < 8) {
        raf = requestAnimationFrame(draw);
        return;
      }
      c.width = w * dpr;
      c.height = h * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      ctx.fillStyle = "#0D0D0D";
      ctx.fillRect(0, 0, w, h);

      const hubX = w * 0.5;
      const hubY = h * 0.5;
      const scale = Math.min(w, h) * 0.4;

      if (!initialized) {
        initialized = true;
        for (const n of nodes) {
          const r = n.baseRad * scale;
          n.x = hubX + Math.cos(n.baseAng) * r;
          n.y = hubY + Math.sin(n.baseAng) * r;
        }
      }

      if (!reduced && dt > 0) {
        for (let i = 0; i < nodes.length; i++) {
          const n = nodes[i];
          // Mostly tangential drift: stays on ~one ring.
          const tAng = n.baseAng + Math.sin(simTime * n.driftRate + n.phase) * 0.09;
          const tRad =
            INT_RING_NORM * scale +
            Math.sin(simTime * n.driftRate * 0.55 + n.phase + 1) * INT_NOISE_AMP;
          const tx = hubX + Math.cos(tAng) * tRad;
          const ty = hubY + Math.sin(tAng) * tRad;
          n.vx += (INT_SPRING_K * (tx - n.x) - INT_DAMPING * n.vx) * dt;
          n.vy += (INT_SPRING_K * (ty - n.y) - INT_DAMPING * n.vy) * dt;
          for (let j = i + 1; j < nodes.length; j++) {
            const m = nodes[j];
            const dx = n.x - m.x;
            const dy = n.y - m.y;
            const d2 = dx * dx + dy * dy;
            const minD = 14;
            if (d2 < minD * minD && d2 > 0.01) {
              const inv = INT_REPULSION / (d2 * Math.sqrt(d2)) * dt;
              n.vx += dx * inv;
              n.vy += dy * inv;
              m.vx -= dx * inv;
              m.vy -= dy * inv;
            }
          }
        }
        const MAX_V = 72;
        for (const n of nodes) {
          n.x += n.vx * dt;
          n.y += n.vy * dt;
          const v2 = n.vx * n.vx + n.vy * n.vy;
          if (v2 > MAX_V * MAX_V) {
            const inv = MAX_V / Math.sqrt(v2);
            n.vx *= inv;
            n.vy *= inv;
          }
        }
        // Narrow annulus → consistent circular orbit.
        const minR = scale * (INT_RING_NORM - 0.045);
        const maxR = scale * (INT_RING_NORM + 0.055);
        for (const n of nodes) {
          const dx = n.x - hubX;
          const dy = n.y - hubY;
          const dist = Math.hypot(dx, dy) || 1;
          if (dist < minR) {
            const k = minR / dist;
            n.x = hubX + dx * k;
            n.y = hubY + dy * k;
            n.vx *= 0.35;
            n.vy *= 0.35;
          } else if (dist > maxR) {
            const k = maxR / dist;
            n.x = hubX + dx * k;
            n.y = hubY + dy * k;
            n.vx *= 0.42;
            n.vy *= 0.42;
          }
        }
      }

      const lineAlpha =
        INT_LINE_BASE +
        INT_LINE_SHIMMER * Math.sin(simTime * 1.25) +
        (reduced ? 0 : 0);

      // Hub → node only (no peer edges)
      for (let i = 0; i < nodes.length; i++) {
        const n = nodes[i];
        const a = lineAlpha + 0.05 * Math.sin(simTime * 1.1 + i * 0.62);
        ctx.beginPath();
        ctx.moveTo(hubX, hubY);
        ctx.lineTo(n.x, n.y);
        ctx.strokeStyle = `rgba(82,82,88,${Math.min(0.38, a)})`;
        ctx.lineWidth = 0.65;
        ctx.stroke();
      }

      // Outward light packets along spokes
      if (!reduced) {
        for (let i = 0; i < nodes.length; i++) {
          const n = nodes[i];
          let u = (simTime * INT_PULSE_SPEED + i * 0.21) % 1;
          u = u * u * (3 - 2 * u);
          const px = hubX + (n.x - hubX) * u;
          const py = hubY + (n.y - hubY) * u;
          const envelope = Math.sin(Math.PI * u);
          const br = 2.2 + envelope * 2.8;
          const g = ctx.createRadialGradient(px, py, 0, px, py, br * 2.2);
          g.addColorStop(0, `rgba(255,255,255,${0.22 + envelope * 0.45})`);
          g.addColorStop(0.35, `rgba(200,220,255,${0.08 + envelope * 0.12})`);
          g.addColorStop(1, "transparent");
          ctx.fillStyle = g;
          ctx.beginPath();
          ctx.arc(px, py, br * 2.2, 0, Math.PI * 2);
          ctx.fill();
        }
      }

      // Peripheral nodes (depth = size / opacity)
      for (let i = 0; i < nodes.length; i++) {
        const n = nodes[i];
        const tw = reduced ? 0.75 : 0.55 + 0.45 * Math.sin(simTime * 1.65 + i * 0.5);
        const r = n.size * (0.85 + n.depth * 0.35) * (0.92 + tw * 0.12);
        const g = ctx.createRadialGradient(n.x, n.y, 0, n.x, n.y, r * 2.4);
        g.addColorStop(0, n.col);
        g.addColorStop(0.55, n.col + "99");
        g.addColorStop(1, "transparent");
        ctx.fillStyle = g;
        ctx.globalAlpha = (0.42 + n.depth * 0.48) * (reduced ? 0.85 : 0.75 + tw * 0.25);
        ctx.beginPath();
        ctx.arc(n.x, n.y, r * 2.4, 0, Math.PI * 2);
        ctx.fill();
        ctx.beginPath();
        ctx.arc(n.x, n.y, r * 0.55, 0, Math.PI * 2);
        ctx.fillStyle = n.col;
        ctx.globalAlpha = 0.88 * (0.5 + n.depth * 0.5);
        ctx.fill();
        ctx.globalAlpha = 1;
      }

      // Bright white hub + soft bloom (very slight warm rim)
      const breath = reduced ? 1 : 1 + INT_HUB_BREATHE * Math.sin(simTime * 0.85);
      const hubGlowR = 22 * breath;
      const hg = ctx.createRadialGradient(hubX, hubY, 0, hubX, hubY, hubGlowR);
      hg.addColorStop(0, "rgba(255,255,255,0.98)");
      hg.addColorStop(0.12, "rgba(255,255,255,0.55)");
      hg.addColorStop(0.45, "rgba(197,160,89,0.12)");
      hg.addColorStop(1, "transparent");
      ctx.fillStyle = hg;
      ctx.beginPath();
      ctx.arc(hubX, hubY, hubGlowR, 0, Math.PI * 2);
      ctx.fill();
      ctx.shadowColor = "rgba(255,255,255,0.55)";
      ctx.shadowBlur = 14 * breath;
      ctx.beginPath();
      ctx.arc(hubX, hubY, 3.2 * breath, 0, Math.PI * 2);
      ctx.fillStyle = "#FFFFFF";
      ctx.fill();
      ctx.shadowBlur = 0;

      raf = requestAnimationFrame(draw);
    };

    raf = requestAnimationFrame(draw);
    return () => {
      cancelled = true;
      cancelAnimationFrame(raf);
    };
  }, [reduced]);

  return (
    <div className="mt-5">
      <div
        className="relative overflow-hidden rounded-[18px]"
        style={{ background: "#0D0D0D", border: `1px solid ${LEGACY.borderGold}` }}
      >
        {reduced ? (
          <div className="flex h-[220px] items-center justify-center opacity-55" aria-hidden>
            <div className="relative h-24 w-24 rounded-full" style={{ border: `1px solid ${LEGACY.borderGold}` }}>
              <span className="absolute left-1/2 top-1/2 h-2.5 w-2.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white shadow-[0_0_16px_rgba(255,255,255,0.5)]" />
            </div>
          </div>
        ) : (
          <canvas ref={ref} className="block h-[220px] w-full" aria-hidden />
        )}
      </div>
      <div className="mt-4 flex gap-10">
        <div>
          <p
            className="font-[family-name:var(--font-display)] text-[30px] font-extrabold leading-none"
            style={{ color: LEGACY.goldLight }}
          >
            200+
          </p>
          <p
            className="mt-1.5 font-[family-name:var(--font-sans)] text-[10px] font-bold uppercase tracking-[0.2em]"
            style={{ color: LEGACY.textMuted }}
          >
            INTEGRATIONS
          </p>
        </div>
        <div>
          <p
            className="font-[family-name:var(--font-display)] text-[30px] font-extrabold leading-none"
            style={{ color: LEGACY.goldLight }}
          >
            Day 1
          </p>
          <p
            className="mt-1.5 font-[family-name:var(--font-sans)] text-[10px] font-bold uppercase tracking-[0.18em]"
            style={{ color: LEGACY.textMuted }}
          >
            TIME TO VALUE
          </p>
        </div>
      </div>
    </div>
  );
}
