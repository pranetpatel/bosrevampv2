'use client';

import {
  BosOrbitalExperience,
  ClientDeliveryBackdropGraph,
  WorkflowRunningFooter,
  type LegacyOrbitalModuleId,
} from '@/components/bos-orbital-experiences';
import { useEffect, useRef, useState } from 'react';

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

function NodeGlyph({ color }: { color: string }) {
  return (
    <svg width="22" height="22" viewBox="0 0 22 22" fill="none" aria-hidden>
      <circle cx="11" cy="11" r="6" stroke={color} strokeWidth="1.5" opacity="0.9" />
      <circle cx="11" cy="11" r="2.5" fill={color} opacity="0.85" />
    </svg>
  );
}

const CX = 260, CY = 260, R = 190;
const TILT_3D = 55 * Math.PI / 180;
const TILT_2D = 0;
const SPEED_NORMAL = 1.0;
const SPEED_HOVER = 0.04;
const BASE_PERIOD = 14;
const N = NODES_DATA.length;
const OFFSETS = Array.from({ length: N }, (_, i) => (i * Math.PI * 2) / N);

export function BosOrbital({ paused = false }: { paused?: boolean }) {
  const wrapRef = useRef<HTMLDivElement>(null);
  const ellipseRef = useRef<SVGEllipseElement>(null);
  const lineRefs = useRef<(SVGLineElement | null)[]>(Array(N).fill(null));
  const nodeRefs = useRef<(HTMLDivElement | null)[]>(Array(N).fill(null));
  const animRef = useRef({ angle: 0, tilt: TILT_3D, targetTilt: TILT_3D, speed: SPEED_NORMAL, targetSpeed: SPEED_NORMAL, last: 0 });
  const rafRef = useRef<number>(0);
  const pausedRef = useRef(paused);
  const [selected, setSelected] = useState<(typeof NODES_DATA)[number] | null>(null);
  const [selectedIndex, setSelectedIndex] = useState<number>(-1);

  pausedRef.current = paused;

  useEffect(() => {
    const anim = animRef.current;

    function tick(now: number) {
      const dt = Math.min((now - (anim.last || now)) / 1000, 0.05);
      anim.last = now;
      const frozen = pausedRef.current;
      if (!frozen) {
        anim.tilt += (anim.targetTilt - anim.tilt) * Math.min(dt * 2.5, 1);
        anim.speed += (anim.targetSpeed - anim.speed) * Math.min(dt * 3, 1);
        anim.angle += dt * (Math.PI * 2 / BASE_PERIOD) * anim.speed;
      }

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
    const onEnter = () => {
      if (pausedRef.current) return;
      anim.targetTilt = TILT_2D;
      anim.targetSpeed = SPEED_HOVER;
    };
    const onLeave = () => {
      if (pausedRef.current) return;
      anim.targetTilt = TILT_3D;
      anim.targetSpeed = SPEED_NORMAL;
    };
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
      <div className="flex flex-shrink-0 items-center justify-center lg:flex-[0_0_540px]">
        <div
          ref={wrapRef}
          className="relative cursor-default select-none"
          style={{ width: 520, height: 520 }}
        >
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

          {NODES_DATA.map((data, i) => (
            <div
              key={data.id}
              ref={el => { nodeRefs.current[i] = el; }}
              className="absolute z-[15] cursor-pointer"
              style={{ left: 260, top: 260, width: 52, height: 52, transform: 'translate(0,0)' }}
              onClick={() => handleNodeClick(i)}
              role="button"
              tabIndex={0}
              aria-pressed={selectedIndex === i}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  handleNodeClick(i);
                }
              }}
            >
              <div
                className="sat-node-inner absolute flex items-center justify-center rounded-full transition-shadow duration-300"
                style={{
                  width: 52, height: 52,
                  background: `${data.color}1E`,
                  border: `2px solid ${data.color}99`,
                  boxShadow: `0 0 18px ${data.color}40`,
                  transform: 'translate(-50%,-50%)',
                  outline: selectedIndex === i ? `2px solid ${data.color}` : 'none',
                  outlineOffset: 3,
                }}
              >
                <NodeGlyph color={data.color} />
              </div>
              <div
                className="pointer-events-none absolute max-w-[120px] text-center font-[family-name:var(--font-display)] text-[9px] font-bold uppercase leading-tight tracking-[0.1em]"
                style={{
                  top: 'calc(100% + 12px)',
                  left: '50%',
                  transform: 'translateX(-50%)',
                  color: '#f4f4f5',
                  opacity: selectedIndex === i ? 1 : 0.88,
                  textShadow: `0 1px 3px rgba(0,0,0,1), 0 0 14px ${data.color}88`,
                  whiteSpace: 'normal',
                }}
              >
                {data.name}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="flex min-h-[320px] w-full max-w-md flex-1 items-start justify-center px-4 lg:max-w-none lg:pl-10">
        {!selected ? (
          <div className="flex flex-col items-center gap-4 self-center text-center">
            <div
              className="flex h-14 w-14 items-center justify-center rounded-full"
              style={{ background: 'rgba(218,52,241,0.08)', border: '1px solid rgba(218,52,241,0.2)', animation: 'bos-hub-pulse 3s ease-in-out infinite' }}
            >
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <circle cx="10" cy="10" r="8" stroke="#DA34F1" strokeWidth="1.4" strokeDasharray="3 3" />
                <circle cx="10" cy="10" r="2" fill="#DA34F1" opacity="0.7" />
              </svg>
            </div>
            <p className="max-w-[220px] font-[family-name:var(--font-ui)] text-sm font-medium leading-relaxed text-white/80">
              Click a surface in the orbital to see how it moves work.
            </p>
          </div>
        ) : (
          <div
            key={selected.id}
            className="w-full rounded-2xl p-6 md:p-8"
            style={{
              background: 'rgba(255,255,255,0.035)',
              backdropFilter: 'blur(24px)',
              border: `1px solid ${selected.color}28`,
              boxShadow: `0 0 60px ${selected.color}12, inset 0 0 30px rgba(0,0,0,0.2)`,
              animation: 'bos-info-in 0.35s cubic-bezier(0.16,1,0.3,1) both',
            }}
          >
            {selected.id === 'workflow' ? (
              <>
                <BosOrbitalExperience moduleId="workflow" accentColor={selected.color} />
                <div className="mt-5">
                  <p className="font-[family-name:var(--font-ui)] text-[10px] font-bold uppercase tracking-[0.26em] text-[#c9a227]">
                    {selected.eyebrow}
                  </p>
                  <p className="mt-3 font-[family-name:var(--font-display)] text-xl font-semibold leading-snug text-white/95 md:text-2xl">
                    {selected.headline}
                  </p>
                  <p className="mt-3 font-[family-name:var(--font-sans)] text-sm leading-relaxed text-white/60">
                    {selected.desc}
                  </p>
                </div>
                <WorkflowRunningFooter />
              </>
            ) : selected.id === 'client-delivery' ? (
              <div className="relative">
                <ClientDeliveryBackdropGraph className="pointer-events-none absolute inset-x-0 top-0 z-0 h-[10.75rem] w-full max-w-none select-none sm:h-[11.5rem]" />
                <div className="relative z-[1]">
                  <p className="font-[family-name:var(--font-ui)] text-[10px] font-bold uppercase tracking-[0.26em] text-[#c9a227]">
                    {selected.eyebrow}
                  </p>
                  <p className="mt-3 font-[family-name:var(--font-display)] text-xl font-semibold leading-snug text-white/95 md:text-2xl">
                    {selected.headline}
                  </p>
                  <p className="mt-3 font-[family-name:var(--font-sans)] text-sm leading-relaxed text-white/60">
                    {selected.desc}
                  </p>
                </div>
                <div className="relative z-[1]">
                  <BosOrbitalExperience moduleId={selected.id} accentColor={selected.color} />
                </div>
              </div>
            ) : (
              <>
                <p className="font-[family-name:var(--font-ui)] text-[10px] font-bold uppercase tracking-[0.26em] text-[#c9a227]">
                  {selected.eyebrow}
                </p>
                <p className="mt-3 font-[family-name:var(--font-display)] text-xl font-semibold leading-snug text-white/95 md:text-2xl">
                  {selected.headline}
                </p>
                <p className="mt-3 font-[family-name:var(--font-sans)] text-sm leading-relaxed text-white/60">
                  {selected.desc}
                </p>
                <BosOrbitalExperience moduleId={selected.id} accentColor={selected.color} />
              </>
            )}
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
