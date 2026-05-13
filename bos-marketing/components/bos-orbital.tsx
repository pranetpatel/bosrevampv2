'use client';

import { useEffect, useRef, useState } from 'react';

const NODES_DATA = [
  {
    id: 'chat',
    color: '#04D1E0',
    name: 'BOS Chat',
    tagline: 'Real-time intelligent conversations.',
    desc: 'Run your team, clients, and agents through one conversation layer. Messages trigger actions — automatically.',
    features: ['Natural language processing', 'Context-aware responses', 'Multi-turn conversations', 'Integrated with all data'],
  },
  {
    id: 'project',
    color: '#DA34F1',
    name: 'Project FX',
    tagline: 'Orchestrate complex workflows effortlessly.',
    desc: 'Tasks, CRM, and workflows — unified. Work created from conversations. Everything stays in sync.',
    features: ['Workflow automation', 'Task prioritization', 'Real-time collaboration', 'AI-powered suggestions'],
  },
  {
    id: 'workforce',
    color: '#10D988',
    name: 'Workforce',
    tagline: 'Your people layer, fully orchestrated.',
    desc: 'Manage hiring pipelines, roles, performance, and capacity — all connected to the work happening in real time.',
    features: ['Hiring pipeline management', 'Role & permission control', 'Performance tracking', 'Capacity planning'],
  },
  {
    id: 'data',
    color: '#3CD3FE',
    name: 'Data Drive',
    tagline: 'Unified data management across all systems.',
    desc: 'A single source of truth for all company data. Documents, structured data, permissions, real-time sync.',
    features: ['Multi-source integration', 'Real-time synchronization', 'Data governance & security', 'Advanced analytics'],
  },
  {
    id: 'agent',
    color: '#6B5EFF',
    name: 'Agent Builder',
    tagline: 'Create intelligent agents that work 24/7.',
    desc: 'Build and deploy agents that execute work autonomously. No-code. Define goals, actions, permissions — let them run.',
    features: ['No-code agent creation', 'Natural language training', 'Multi-step automation', 'Performance analytics'],
  },
  {
    id: 'connect',
    color: '#FF8C42',
    name: 'Connect',
    tagline: 'Every tool your business runs on, unified.',
    desc: 'Sync any external platform into BOS instantly. One integration layer — no duct tape, no data drift.',
    features: ['500+ native integrations', 'Bi-directional sync', 'Webhook & API gateway', 'Custom connector builder'],
  },
];

const ICON_SVGS = [
  // BOS Chat
  <svg key="chat" width="26" height="26" viewBox="0 0 32 32" fill="none"><path d="M4 6C4 4.895 4.895 4 6 4H26C27.105 4 28 4.895 28 6V20C28 21.105 27.105 22 26 22H18L12 28V22H6C4.895 22 4 21.105 4 20V6Z" stroke="#04D1E0" strokeWidth="1.5" strokeLinejoin="round"/><path d="M9 11H23M9 15H18" stroke="#04D1E0" strokeWidth="1.5" strokeLinecap="round"/></svg>,
  // Project FX
  <svg key="project" width="26" height="26" viewBox="0 0 32 32" fill="none"><rect x="4" y="4" width="24" height="24" rx="3" stroke="#DA34F1" strokeWidth="1.5"/><path d="M10 11L13.5 14.5L10 18" stroke="#DA34F1" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/><path d="M16 18H22" stroke="#DA34F1" strokeWidth="1.5" strokeLinecap="round"/></svg>,
  // Workforce
  <svg key="workforce" width="26" height="26" viewBox="0 0 32 32" fill="none"><circle cx="12" cy="10" r="4" stroke="#10D988" strokeWidth="1.5"/><circle cx="22" cy="10" r="3" stroke="#10D988" strokeWidth="1.5"/><path d="M4 26C4 21.582 7.582 18 12 18C16.418 18 20 21.582 20 26" stroke="#10D988" strokeWidth="1.5" strokeLinecap="round"/><path d="M22 17C24.761 17 27 19.239 27 22V26" stroke="#10D988" strokeWidth="1.5" strokeLinecap="round"/></svg>,
  // Data Drive
  <svg key="data" width="26" height="26" viewBox="0 0 32 32" fill="none"><ellipse cx="16" cy="9" rx="10" ry="4" stroke="#3CD3FE" strokeWidth="1.5"/><path d="M6 9V16C6 18.21 10.477 20 16 20C21.523 20 26 18.21 26 16V9" stroke="#3CD3FE" strokeWidth="1.5"/><path d="M6 16V23C6 25.21 10.477 27 16 27C21.523 27 26 25.21 26 23V16" stroke="#3CD3FE" strokeWidth="1.5"/></svg>,
  // Agent Builder
  <svg key="agent" width="26" height="26" viewBox="0 0 32 32" fill="none"><rect x="8" y="12" width="16" height="14" rx="4" stroke="#6B5EFF" strokeWidth="1.5"/><circle cx="12.5" cy="18" r="1.5" fill="#6B5EFF"/><circle cx="19.5" cy="18" r="1.5" fill="#6B5EFF"/><path d="M13 23C13 23 14.5 24.5 16 24.5C17.5 24.5 19 23 19 23" stroke="#6B5EFF" strokeWidth="1.5" strokeLinecap="round"/><path d="M12 12V8M20 12V8" stroke="#6B5EFF" strokeWidth="1.5" strokeLinecap="round"/><circle cx="12" cy="7" r="1.5" stroke="#6B5EFF" strokeWidth="1.25"/><circle cx="20" cy="7" r="1.5" stroke="#6B5EFF" strokeWidth="1.25"/></svg>,
  // Connect
  <svg key="connect" width="26" height="26" viewBox="0 0 32 32" fill="none"><circle cx="8" cy="16" r="3.5" stroke="#FF8C42" strokeWidth="1.5"/><circle cx="24" cy="8" r="3.5" stroke="#FF8C42" strokeWidth="1.5"/><circle cx="24" cy="24" r="3.5" stroke="#FF8C42" strokeWidth="1.5"/><path d="M11.5 16H17M17 16L20.5 9.5M17 16L20.5 22.5" stroke="#FF8C42" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>,
];

const CX = 260, CY = 260, R = 190;
const TILT_3D = 55 * Math.PI / 180;
const TILT_2D = 0;
const SPEED_NORMAL = 1.0;
const SPEED_HOVER = 0.04;
const BASE_PERIOD = 14;
const N = NODES_DATA.length;
const OFFSETS = Array.from({ length: N }, (_, i) => (i * Math.PI * 2) / N);

type NodeData = (typeof NODES_DATA)[number];

export function BosOrbital() {
  const wrapRef = useRef<HTMLDivElement>(null);
  const ellipseRef = useRef<SVGEllipseElement>(null);
  const lineRefs = useRef<(SVGLineElement | null)[]>(Array(N).fill(null));
  const nodeRefs = useRef<(HTMLDivElement | null)[]>(Array(N).fill(null));
  const animRef = useRef({ angle: 0, tilt: TILT_3D, targetTilt: TILT_3D, speed: SPEED_NORMAL, targetSpeed: SPEED_NORMAL, last: 0 });
  const rafRef = useRef<number>(0);
  const [selected, setSelected] = useState<NodeData | null>(null);
  const [selectedIndex, setSelectedIndex] = useState<number>(-1);

  useEffect(() => {
    const anim = animRef.current;

    function tick(now: number) {
      const dt = Math.min((now - (anim.last || now)) / 1000, 0.05);
      anim.last = now;
      anim.tilt += (anim.targetTilt - anim.tilt) * Math.min(dt * 2.5, 1);
      anim.speed += (anim.targetSpeed - anim.speed) * Math.min(dt * 3, 1);
      anim.angle += dt * (Math.PI * 2 / BASE_PERIOD) * anim.speed;

      const cosT = Math.cos(anim.tilt);
      const sinT = Math.sin(anim.tilt);

      if (ellipseRef.current) {
        ellipseRef.current.setAttribute('ry', (R * cosT).toFixed(2));
      }

      OFFSETS.forEach((offset, i) => {
        const a = anim.angle + offset;
        const nx = CX + R * Math.cos(a);
        const ny = CY + R * Math.sin(a) * cosT;
        const depth = Math.sin(a) * sinT;
        const t = (depth + 1) / 2;
        const scale = 0.60 + 0.40 * t;
        const opacity = 0.58 + 0.42 * t;
        const zIndex = Math.round(t * 20);

        const node = nodeRefs.current[i];
        if (node) {
          node.style.transform = `translate(${nx - CX}px, ${ny - CY}px)`;
          node.style.opacity = opacity.toFixed(3);
          node.style.zIndex = String(zIndex);
          const inner = node.querySelector<HTMLElement>('.sat-node-inner');
          if (inner) inner.style.transform = `translate(-50%,-50%) scale(${scale.toFixed(3)})`;
        }

        const line = lineRefs.current[i];
        if (line) {
          line.setAttribute('x2', nx.toFixed(2));
          line.setAttribute('y2', ny.toFixed(2));
          line.setAttribute('opacity', (opacity * 0.4).toFixed(3));
        }
      });

      rafRef.current = requestAnimationFrame(tick);
    }

    rafRef.current = requestAnimationFrame(tick);

    const wrap = wrapRef.current;
    const onEnter = () => { anim.targetTilt = TILT_2D; anim.targetSpeed = SPEED_HOVER; };
    const onLeave = () => { anim.targetTilt = TILT_3D; anim.targetSpeed = SPEED_NORMAL; };
    wrap?.addEventListener('mouseenter', onEnter);
    wrap?.addEventListener('mouseleave', onLeave);

    return () => {
      cancelAnimationFrame(rafRef.current);
      wrap?.removeEventListener('mouseenter', onEnter);
      wrap?.removeEventListener('mouseleave', onLeave);
    };
  }, []);

  function handleNodeClick(i: number) {
    const data = NODES_DATA[i];
    if (selected?.id === data.id) {
      setSelected(null);
      setSelectedIndex(-1);
    } else {
      setSelected(data);
      setSelectedIndex(i);
    }
  }

  return (
    <div className="flex flex-col items-center gap-10 lg:flex-row lg:items-center lg:gap-0">
      {/* Orbital */}
      <div className="flex flex-shrink-0 items-center justify-center lg:flex-[0_0_540px]">
        <div
          ref={wrapRef}
          className="relative cursor-default select-none"
          style={{ width: 520, height: 520 }}
        >
          {/* SVG layer */}
          <svg
            className="pointer-events-none absolute inset-0 overflow-visible"
            style={{ width: '100%', height: '100%' }}
            viewBox="0 0 520 520"
          >
            <defs>
              <radialGradient id="bos-hub-glow" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="#DA34F1" stopOpacity="0.15" />
                <stop offset="100%" stopColor="#DA34F1" stopOpacity="0" />
              </radialGradient>
            </defs>
            <circle cx="260" cy="260" r="160" fill="url(#bos-hub-glow)" />
            <ellipse
              ref={ellipseRef}
              cx="260" cy="260" rx="190" ry="109"
              stroke="rgba(218,52,241,0.2)" strokeWidth="1" strokeDasharray="6 10" fill="none"
            />
            {NODES_DATA.map((data, i) => (
              <line
                key={data.id}
                ref={el => { lineRefs.current[i] = el; }}
                x1="260" y1="260" x2="450" y2="260"
                stroke={data.color} strokeWidth="1" strokeDasharray="4 7" opacity="0.25"
              />
            ))}
          </svg>

          {/* Center hub */}
          <div
            className="absolute z-20 flex items-center justify-center rounded-full"
            style={{
              left: 260, top: 260,
              width: 72, height: 72,
              transform: 'translate(-50%,-50%)',
              background: 'radial-gradient(circle, rgba(218,52,241,0.25) 0%, rgba(26,83,253,0.15) 60%, transparent 100%)',
              border: '1.5px solid rgba(218,52,241,0.5)',
              boxShadow: '0 0 32px rgba(218,52,241,0.35), 0 0 64px rgba(218,52,241,0.12), inset 0 0 20px rgba(218,52,241,0.1)',
              animation: 'bos-hub-pulse 3s ease-in-out infinite',
            }}
          >
            <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
              <defs>
                <radialGradient id="bos-chg" cx="35%" cy="35%" r="65%">
                  <stop offset="0%" stopColor="#DA34F1" />
                  <stop offset="100%" stopColor="#1A53FD" />
                </radialGradient>
              </defs>
              <circle cx="14" cy="14" r="11" stroke="url(#bos-chg)" strokeWidth="1.5" fill="none" />
              <circle cx="14" cy="14" r="4" fill="url(#bos-chg)" opacity="0.9" />
              <circle cx="14" cy="14" r="1.5" fill="white" opacity="0.8" />
            </svg>
          </div>

          {/* Satellite nodes */}
          {NODES_DATA.map((data, i) => (
            <div
              key={data.id}
              ref={el => { nodeRefs.current[i] = el; }}
              className="absolute z-[15] cursor-pointer"
              style={{ left: 260, top: 260, width: 56, height: 56, transform: 'translate(0,0)' }}
              onClick={() => handleNodeClick(i)}
            >
              <div
                className="sat-node-inner absolute flex items-center justify-center rounded-full transition-shadow duration-300"
                style={{
                  width: 56, height: 56,
                  background: `${data.color}1E`,
                  border: `2px solid ${data.color}99`,
                  boxShadow: `0 0 18px ${data.color}40`,
                  transform: 'translate(-50%,-50%)',
                  outline: selectedIndex === i ? `2px solid ${data.color}` : 'none',
                  outlineOffset: 3,
                }}
              >
                {ICON_SVGS[i]}
              </div>
              <div
                className="pointer-events-none absolute whitespace-nowrap font-[family-name:var(--font-display)] text-[11px] font-bold uppercase tracking-[0.14em]"
                style={{
                  top: 'calc(100% + 14px)',
                  left: '50%',
                  transform: 'translateX(-50%)',
                  color: '#f4f4f5',
                  opacity: selectedIndex === i ? 1 : 0.92,
                  textShadow: `0 1px 3px rgba(0,0,0,1), 0 0 18px ${data.color}99`,
                }}
              >
                {data.name}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Info panel */}
      <div className="flex min-h-[320px] flex-1 items-center justify-center px-4 lg:pl-10">
        {!selected ? (
          <div className="flex flex-col items-center gap-4 text-center">
            <div
              className="flex h-14 w-14 items-center justify-center rounded-full"
              style={{ background: 'rgba(218,52,241,0.08)', border: '1px solid rgba(218,52,241,0.2)', animation: 'bos-hub-pulse 3s ease-in-out infinite' }}
            >
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <circle cx="10" cy="10" r="8" stroke="#DA34F1" strokeWidth="1.4" strokeDasharray="3 3" />
                <circle cx="10" cy="10" r="2" fill="#DA34F1" opacity="0.7" />
              </svg>
            </div>
            <p className="max-w-[200px] font-[family-name:var(--font-ui)] text-sm font-medium leading-relaxed text-white/80">
              Click an element in the orbital to explore it
            </p>
          </div>
        ) : (
          <div
            key={selected.id}
            className="w-full max-w-sm rounded-2xl p-8"
            style={{
              background: 'rgba(255,255,255,0.035)',
              backdropFilter: 'blur(24px)',
              border: `1px solid ${selected.color}28`,
              boxShadow: `0 0 60px ${selected.color}12, inset 0 0 30px rgba(0,0,0,0.2)`,
              animation: 'bos-info-in 0.35s cubic-bezier(0.16,1,0.3,1) both',
            }}
          >
            <div
              className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl"
              style={{ background: `${selected.color}1E`, border: `1px solid ${selected.color}30`, animation: 'bos-hub-pulse 3s ease-in-out infinite' }}
            >
              {ICON_SVGS[selectedIndex]}
            </div>
            <p className="font-[family-name:var(--font-display)] text-xl font-semibold text-white/95">{selected.name}</p>
            <p className="mt-1 font-[family-name:var(--font-ui)] text-sm" style={{ color: selected.color }}>{selected.tagline}</p>
            <div className="my-4 h-px" style={{ background: `linear-gradient(to right, ${selected.color}40, transparent)` }} />
            <p className="font-[family-name:var(--font-ui)] text-sm leading-[1.72] text-white/72">{selected.desc}</p>
            <ul className="mt-5 flex flex-col gap-2.5">
              {selected.features.map(f => (
                <li key={f} className="flex items-center gap-2.5">
                  <span className="h-1.5 w-1.5 flex-shrink-0 rounded-full" style={{ background: selected.color, boxShadow: `0 0 6px ${selected.color}` }} />
                  <span className="font-[family-name:var(--font-ui)] text-sm text-white/65">{f}</span>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>

      <style>{`
        @keyframes bos-hub-pulse {
          0%,100% { box-shadow: 0 0 32px rgba(218,52,241,0.35), 0 0 64px rgba(218,52,241,0.12); }
          50%      { box-shadow: 0 0 48px rgba(218,52,241,0.55), 0 0 96px rgba(218,52,241,0.2); }
        }
        @keyframes bos-info-in {
          from { opacity: 0; transform: translateY(12px) scale(0.97); }
          to   { opacity: 1; transform: none; }
        }
      `}</style>
    </div>
  );
}
