"use client";

import Link from "next/link";
import { Fragment, useCallback, useEffect, useRef, useState } from "react";
import {
  COMPARE_SECTIONS,
  COMPETITOR_COLUMNS,
  COMPETITOR_ROWS,
  COMPETITOR_TOTALS,
  ENTERPRISE_HIGHLIGHTS,
  FAQ_ITEMS,
  FIVE_LAYERS,
  PAIN_CARDS,
  STUDIO_TICKER,
  STARTER_FEATURES,
  TRUST_LOGOS,
  type CompareCell,
} from "@/lib/studio-pricing-data";

function CommVisual() {
  return (
    <div className="hidden w-[200px] shrink-0 flex-col justify-center gap-3 border-l border-white/[0.07] bg-gradient-to-b from-purple-950/50 to-transparent p-4 md:flex">
      <div className="flex flex-col gap-2">
        <div className="flex items-end gap-1.5">
          <div className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-purple-800 text-[8px] font-bold text-purple-200">A</div>
          <div className="max-w-[110px] rounded-xl rounded-bl-sm bg-purple-900/70 px-2.5 py-1.5">
            <div className="mb-1 h-1 w-14 rounded bg-purple-500/50" />
            <div className="h-1 w-9 rounded bg-purple-600/40" />
          </div>
        </div>
        <div className="flex items-end justify-end gap-1.5">
          <div className="max-w-[110px] rounded-xl rounded-br-sm bg-[var(--orchid)] px-2.5 py-1.5">
            <div className="mb-1 h-1 w-12 rounded bg-white/40" />
            <div className="h-1 w-8 rounded bg-white/25" />
          </div>
          <div className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[var(--orchid)] text-[8px] font-bold text-white">Y</div>
        </div>
        <div className="flex items-end gap-1.5">
          <div className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-purple-800 text-[8px] font-bold text-purple-200">B</div>
          <div className="max-w-[110px] rounded-xl rounded-bl-sm bg-purple-900/70 px-2.5 py-1.5">
            <div className="h-1 w-16 rounded bg-purple-500/50" />
          </div>
        </div>
      </div>
      <div className="flex gap-1.5">
        <div className="flex-1 rounded-lg border border-white/[0.08] bg-white/[0.04] py-2 text-center">
          <div className="text-xs font-bold text-[var(--orchid)]">0</div>
          <div className="text-[8px] uppercase tracking-wide text-white/35">Slack bills</div>
        </div>
        <div className="flex-1 rounded-lg border border-white/[0.08] bg-white/[0.04] py-2 text-center">
          <div className="text-xs font-bold text-white">1</div>
          <div className="text-[8px] uppercase tracking-wide text-white/35">Inbox</div>
        </div>
      </div>
    </div>
  );
}

function ExecVisual() {
  return (
    <div className="hidden w-[200px] shrink-0 flex-col justify-center gap-3 border-l border-white/[0.07] bg-gradient-to-b from-emerald-950/50 to-transparent p-4 md:flex">
      <div className="grid grid-cols-2 gap-1.5">
        <div className="rounded-lg border border-emerald-500/20 bg-emerald-950/60 p-2">
          <div className="mb-1.5 text-[8px] font-bold uppercase tracking-wide text-emerald-400">Done</div>
          <div className="mb-1 h-1 rounded bg-emerald-700/60" />
          <div className="mb-1 h-1 w-[70%] rounded bg-emerald-800/60" />
          <div className="h-1 w-[50%] rounded bg-emerald-800/60" />
        </div>
        <div className="rounded-lg border border-[var(--orchid)]/20 bg-purple-950/60 p-2">
          <div className="mb-1.5 text-[8px] font-bold uppercase tracking-wide text-[var(--orchid)]">Active</div>
          <div className="mb-1 h-1 rounded bg-purple-700/60" />
          <div className="h-1 w-[80%] rounded bg-purple-800/60" />
        </div>
      </div>
      <div className="flex gap-1.5">
        <div className="flex-1 rounded-lg border border-white/[0.08] bg-white/[0.04] py-2 text-center">
          <div className="text-xs font-bold text-emerald-400">94%</div>
          <div className="text-[8px] uppercase tracking-wide text-white/35">On track</div>
        </div>
        <div className="flex-1 rounded-lg border border-white/[0.08] bg-white/[0.04] py-2 text-center">
          <div className="text-xs font-bold text-white">0</div>
          <div className="text-[8px] uppercase tracking-wide text-white/35">Missed</div>
        </div>
      </div>
    </div>
  );
}

function ClientVisual() {
  return (
    <div className="hidden w-[200px] shrink-0 flex-col justify-center gap-3 border-l border-white/[0.07] bg-gradient-to-b from-blue-950/50 to-transparent p-4 md:flex">
      <div className="rounded-xl border border-blue-500/20 bg-blue-950/60 p-2.5">
        <div className="mb-2 flex items-center gap-2">
          <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-blue-800 text-[9px] font-bold text-blue-200">AC</div>
          <div>
            <div className="mb-1 h-1.5 w-16 rounded bg-blue-600/50" />
            <div className="h-1 w-12 rounded bg-blue-800/50" />
          </div>
        </div>
        <div className="mb-2 flex flex-wrap gap-1">
          <span className="rounded-full border border-blue-500/30 bg-blue-900/50 px-1.5 py-0.5 text-[8px] font-bold text-blue-300">7 tasks</span>
          <span className="rounded-full border border-blue-500/30 bg-blue-900/50 px-1.5 py-0.5 text-[8px] font-bold text-blue-300">4 docs</span>
          <span className="rounded-full border border-emerald-500/30 bg-emerald-900/50 px-1.5 py-0.5 text-[8px] font-bold text-emerald-300">Active</span>
        </div>
        <div className="mb-1 h-1 rounded bg-blue-800/50" />
        <div className="h-1 w-[70%] rounded bg-blue-800/50" />
      </div>
      <div className="flex gap-1.5">
        <div className="flex-1 rounded-lg border border-white/[0.08] bg-white/[0.04] py-2 text-center">
          <div className="text-xs font-bold text-sky-400">Full</div>
          <div className="text-[8px] uppercase tracking-wide text-white/35">History</div>
        </div>
        <div className="flex-1 rounded-lg border border-white/[0.08] bg-white/[0.04] py-2 text-center">
          <div className="text-xs font-bold text-white">1</div>
          <div className="text-[8px] uppercase tracking-wide text-white/35">Source</div>
        </div>
      </div>
    </div>
  );
}

function DocsVisual() {
  return (
    <div className="hidden w-[200px] shrink-0 flex-col justify-center gap-3 border-l border-white/[0.07] bg-gradient-to-b from-amber-950/50 to-transparent p-4 md:flex">
      <div className="flex flex-col gap-1.5">
        <div className="flex items-center gap-2 rounded-lg border border-amber-500/20 bg-amber-950/60 px-2 py-1.5">
          <div className="flex h-5 w-5 shrink-0 items-center justify-center rounded border border-amber-500/30 bg-amber-900/50 text-[10px]">📄</div>
          <div className="flex-1">
            <div className="mb-1 h-1 w-[80%] rounded bg-amber-600/50" />
            <div className="h-1 w-[55%] rounded bg-amber-800/50" />
          </div>
          <span className="rounded border border-amber-500/30 bg-amber-900/50 px-1 py-0.5 text-[8px] font-bold text-amber-300">PDF</span>
        </div>
        <div className="flex items-center gap-2 rounded-lg border border-amber-500/20 bg-amber-950/60 px-2 py-1.5">
          <div className="flex h-5 w-5 shrink-0 items-center justify-center rounded border border-amber-500/30 bg-amber-900/50 text-[10px]">📝</div>
          <div className="flex-1">
            <div className="mb-1 h-1 w-[65%] rounded bg-amber-600/50" />
            <div className="h-1 w-[40%] rounded bg-amber-800/50" />
          </div>
          <span className="rounded border border-amber-500/30 bg-amber-900/50 px-1 py-0.5 text-[8px] font-bold text-amber-300">Draft</span>
        </div>
      </div>
      <div className="flex gap-1.5">
        <div className="flex-1 rounded-lg border border-white/[0.08] bg-white/[0.04] py-2 text-center">
          <div className="text-xs font-bold text-amber-400">10GB</div>
          <div className="text-[8px] uppercase tracking-wide text-white/35">Drive</div>
        </div>
        <div className="flex-1 rounded-lg border border-white/[0.08] bg-white/[0.04] py-2 text-center">
          <div className="text-xs font-bold text-white">AI</div>
          <div className="text-[8px] uppercase tracking-wide text-white/35">Search</div>
        </div>
      </div>
    </div>
  );
}

function AIVisual() {
  return (
    <div className="hidden w-[200px] shrink-0 flex-col justify-center gap-3 border-l border-white/[0.07] bg-gradient-to-b from-purple-950/50 to-transparent p-4 md:flex">
      <div className="rounded-xl border border-purple-500/20 bg-purple-950/60 p-2.5">
        <div className="mb-2 flex items-center gap-1.5 text-[8px] font-bold uppercase tracking-wide text-purple-400">
          <div className="h-1.5 w-1.5 rounded-full bg-purple-400" />
          Agents working now
        </div>
        <div className="flex flex-col gap-1.5">
          <div className="flex items-center gap-1.5">
            <div className="flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-purple-800 text-[7px] font-bold text-purple-200">S</div>
            <div className="h-1 flex-1 rounded bg-purple-700/60" />
            <span className="rounded border border-purple-500/30 bg-purple-900/50 px-1 py-0.5 text-[7px] font-bold text-purple-300">Drafting</span>
          </div>
          <div className="flex items-center gap-1.5">
            <div className="flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-emerald-900 text-[7px] font-bold text-emerald-300">C</div>
            <div className="h-1 flex-1 rounded bg-emerald-700/60" />
            <span className="rounded border border-emerald-500/30 bg-emerald-900/50 px-1 py-0.5 text-[7px] font-bold text-emerald-300">Done</span>
          </div>
          <div className="flex items-center gap-1.5">
            <div className="flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-purple-800 text-[7px] font-bold text-purple-200">O</div>
            <div className="h-1 w-[70%] rounded bg-purple-700/60" />
            <span className="rounded border border-purple-500/30 bg-purple-900/50 px-1 py-0.5 text-[7px] font-bold text-purple-300">Routing</span>
          </div>
        </div>
      </div>
      <div className="flex gap-1.5">
        <div className="flex-1 rounded-lg border border-white/[0.08] bg-white/[0.04] py-2 text-center">
          <div className="text-xs font-bold text-[var(--magenta)]">3</div>
          <div className="text-[8px] uppercase tracking-wide text-white/35">Agents live</div>
        </div>
        <div className="flex-1 rounded-lg border border-white/[0.08] bg-white/[0.04] py-2 text-center">
          <div className="text-xs font-bold text-white">0</div>
          <div className="text-[8px] uppercase tracking-wide text-white/35">Extra tabs</div>
        </div>
      </div>
    </div>
  );
}

function LayerVisual({ num }: { num: string }) {
  if (num === "01") return <CommVisual />;
  if (num === "02") return <ExecVisual />;
  if (num === "03") return <ClientVisual />;
  if (num === "04") return <DocsVisual />;
  if (num === "05") return <AIVisual />;
  return null;
}

function Cell({ cell }: { cell: CompareCell }) {
  if (cell.kind === "yes")
    return <span className="text-lg font-bold text-[var(--cyan)]">✓</span>;
  if (cell.kind === "no") return <span className="text-white/25"> - </span>;
  if (cell.kind === "addon")
    return (
      <span className="inline-block rounded-full bg-[var(--orchid)]/25 px-2 py-0.5 text-[11px] font-bold text-[var(--orchid)]">
        $
      </span>
    );
  return <span className="text-xs text-white/65 md:text-sm">{cell.value}</span>;
}

function PainCounters() {
  const [values, setValues] = useState<number[]>(() => PAIN_CARDS.map((c) => c.start));
  const raf = useRef<number | null>(null);

  useEffect(() => {
    const duration = 3200;
    const ease = (t: number) => (t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t);
    const startTimes = PAIN_CARDS.map((_, i) => performance.now() + i * 340);

    const tick = (now: number) => {
      setValues(
        PAIN_CARDS.map((card, i) => {
          const t0 = startTimes[i];
          const elapsed = now - t0;
          if (elapsed < 0) return card.start;
          const cycle = elapsed % (duration + 1100 + 300);
          if (cycle < duration) {
            const p = ease(Math.min(cycle / duration, 1));
            return Math.round(card.start + (card.peak - card.start) * p);
          }
          if (cycle < duration + 1100) return card.peak;
          return card.start;
        }),
      );
      raf.current = requestAnimationFrame(tick);
    };
    raf.current = requestAnimationFrame(tick);
    return () => {
      if (raf.current) cancelAnimationFrame(raf.current);
    };
  }, []);

  return (
    <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
      {PAIN_CARDS.map((c, i) => (
        <div
          key={c.label}
          className="rounded-xl border border-red-500/30 bg-red-950/30 px-4 py-4 text-center"
        >
          <div className="font-[family-name:var(--font-display)] text-2xl font-bold tabular-nums text-red-400">
            ${values[i]?.toLocaleString() ?? c.start}
          </div>
          <div className="mt-1 text-sm font-semibold text-red-200/90">{c.label}</div>
          <div className="mt-0.5 text-xs text-red-300/70">{c.sub}</div>
        </div>
      ))}
    </div>
  );
}

const accentBar: Record<(typeof FIVE_LAYERS)[number]["accent"], string> = {
  orchid: "from-[var(--orchid)] to-[var(--magenta)]",
  teal: "from-[var(--cyan)] to-emerald-500",
  cyan: "from-sky-400 to-[var(--orchid)]",
  amber: "from-amber-500 to-amber-300",
  magenta: "from-[var(--magenta)] to-purple-400",
};

export default function StudioPlansPricing() {
  const [showBar, setShowBar] = useState(true);
  const [expanded, setExpanded] = useState<Record<string, boolean>>(() =>
    Object.fromEntries(COMPARE_SECTIONS.map((s) => [s.id, true])),
  );
  const [faqOpen, setFaqOpen] = useState<number | null>(null);

  const toggleSection = useCallback((id: string) => {
    setExpanded((e) => ({ ...e, [id]: !e[id] }));
  }, []);

  return (
    <div className="pt-[4.5rem] text-[var(--foreground)]">
      <style dangerouslySetInnerHTML={{ __html: `@keyframes studio-ticker{0%{transform:translateX(0)}100%{transform:translateX(-50%)}}` }} />

      {showBar ? (
        <div className="sticky top-[4.5rem] z-[190] flex items-center gap-2 border-b border-white/10 bg-gradient-to-r from-[#1a0a2e] via-[var(--orchid)]/90 to-[var(--magenta)]/80 px-3 py-2 md:px-6">
          <div className="relative min-w-0 flex-1 overflow-hidden py-0.5">
            <div
              className="flex w-max whitespace-nowrap hover:[animation-play-state:paused]"
              style={{ animation: "studio-ticker 28s linear infinite" }}
            >
              {[0, 1].map((dup) => (
                <span key={dup} className="flex shrink-0">
                  {STUDIO_TICKER.map((msg, i) => (
                    <span key={`${dup}-${i}`} className="flex items-center">
                      <span className="px-6 font-[family-name:var(--font-sans)] text-xs text-white/90 md:text-[13px]">
                        {msg}
                      </span>
                      <span className="text-white/25">●</span>
                    </span>
                  ))}
                </span>
              ))}
            </div>
          </div>
          <button
            type="button"
            className="shrink-0 rounded px-2 text-lg leading-none text-white/50 transition hover:text-white"
            aria-label="Dismiss announcement"
            onClick={() => setShowBar(false)}
          >
            ×
          </button>
        </div>
      ) : null}

      <div className="mx-auto max-w-3xl px-6 pb-10 pt-10 text-center md:px-8">
        <h1 className="font-[family-name:var(--font-display)] text-[clamp(2.25rem,5vw,3rem)] font-semibold leading-[1.1] tracking-tight text-white">
          Power Up
        </h1>
        <p className="mx-auto mt-5 max-w-lg font-[family-name:var(--font-sans)] text-lg leading-relaxed text-white/65">
          The Business Orchestration System that overrules your fragmented SaaS stack. One license.
          One intelligence layer.{" "}
          <mark className="rounded bg-gradient-to-r from-[var(--orchid)]/30 to-[var(--magenta)]/25 px-1.5 py-0.5 font-semibold text-white">
            One stop shop for work
          </mark>
        </p>
      </div>

      <div className="mx-auto max-w-2xl px-6 pb-16 md:px-8">
        <div className="overflow-hidden rounded-2xl border border-white/10 bg-[var(--surface-raised)] shadow-xl">
          <div className="flex items-center justify-between border-b border-white/10 bg-gradient-to-r from-[#0a0a0a] to-[#1a1a1a] px-5 py-2.5">
            <span className="text-[11px] font-bold uppercase tracking-[0.1em] text-white/70">
              Limited time offer
            </span>
            <span className="text-xs font-semibold text-amber-300">Free Beta Access · Founding Members Only</span>
          </div>
          <div className="p-8 md:p-10">
            <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-start">
              <div>
                <p className="text-[11px] font-bold uppercase tracking-[0.12em] text-white/50">
                  Business Starter License
                </p>
                <p className="mt-2 font-[family-name:var(--font-display)] text-3xl font-semibold text-white">
                  BOS Studio
                </p>
              </div>
              <div className="text-left sm:text-right">
                <p className="text-xs text-white/50">Beta price</p>
                <p className="font-[family-name:var(--font-display)] text-4xl font-bold text-white">$0</p>
                <p className="text-xs text-white/50">during beta period</p>
              </div>
            </div>
            <p className="mt-6 max-w-xl font-[family-name:var(--font-sans)] text-sm leading-relaxed text-white/65">
              The complete Business Orchestration System  -  overrule Slack, Notion, and fragmented AI
              tools with simple execution across your business. Request beta access and get started immediately.
            </p>
            <Link
              href="/demo"
              className="mt-8 flex w-full items-center justify-center rounded-xl bg-[var(--orchid)] py-4 text-center font-[family-name:var(--font-ui)] text-base font-bold text-white transition hover:bg-[var(--orchid)]/90"
            >
              Request Beta Access →
            </Link>
            <p className="mt-3 text-center text-xs text-white/45">
              No credit card required · Limited founding spots available
            </p>
            <div className="my-8 border-t border-white/10" />
            <p className="text-[11px] font-bold uppercase tracking-[0.1em] text-white/40">Capabilities Included</p>
            <ul className="mt-4 grid gap-2 sm:grid-cols-2">
              {STARTER_FEATURES.map((f) => (
                <li key={f} className="flex gap-2 text-sm text-white/75">
                  <span className="text-[var(--cyan)]">✓</span>
                  {f}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-8 flex flex-col gap-6 rounded-xl border-2 border-[var(--orchid)]/50 bg-[var(--surface-raised)]/80 p-6 shadow-[0_0_32px_rgba(26,83,253,0.15)] md:flex-row md:items-center md:justify-between md:p-8">
          <div>
            <p className="text-[10px] font-bold uppercase tracking-[0.12em] text-[var(--magenta)]">
              Enterprise
            </p>
            <p className="mt-2 font-[family-name:var(--font-display)] text-lg font-semibold text-white md:text-xl">
              Built for orgs that need to own, control, and scale AI infrastructure
            </p>
            <div className="mt-4 flex flex-wrap gap-x-5 gap-y-2">
              {ENTERPRISE_HIGHLIGHTS.map((t) => (
                <span key={t} className="flex items-center gap-1.5 text-xs text-white/60">
                  <span className="text-[var(--cyan)]">✓</span>
                  {t}
                </span>
              ))}
            </div>
          </div>
          <div className="shrink-0 text-center">
            <p className="text-sm text-white/50">Custom pricing</p>
            <Link
              href="/demo"
              className="mt-3 inline-block rounded-lg bg-white px-7 py-3 font-[family-name:var(--font-ui)] text-sm font-semibold text-[var(--surface-dark)] transition hover:bg-white/90"
            >
              Contact sales
            </Link>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-4xl px-6 pb-20 md:px-8">
        <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-[#0f172a] to-[#1e1b4b] p-8 md:p-10">
          <div
            className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-[var(--orchid)]/20 blur-3xl"
            aria-hidden
          />
          <div className="relative grid gap-10 md:grid-cols-[1fr_auto] md:items-center">
            <div>
              <p className="text-[11px] font-bold uppercase tracking-[0.14em] text-amber-300">BOS MBA</p>
              <h2 className="mt-2 font-[family-name:var(--font-display)] text-2xl font-semibold leading-tight text-white md:text-3xl">
                The founding cohort.
                <br />
                Built for operators.
              </h2>
              <p className="mt-4 max-w-md text-sm leading-relaxed text-white/55">
                Deploy real agents. Shape the roadmap. Get to value faster than anyone else.
              </p>
              <div className="mt-5 flex flex-wrap gap-2">
                {["Founding Cohort", "Operator Track", "Executive Track", "Agency Partners"].map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-white/15 bg-white/[0.06] px-3 py-1 text-[11px] font-semibold text-white/60"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
            <div className="text-center">
              <p className="text-[11px] uppercase tracking-[0.1em] text-white/45">Enrollment</p>
              <p className="mt-2 font-[family-name:var(--font-ui)] text-base font-semibold text-white">
                By application
              </p>
              <p className="text-xs text-white/45">Selective intake</p>
              <Link
                href="/mba"
                className="mt-6 inline-block rounded-lg bg-amber-300 px-8 py-3.5 font-[family-name:var(--font-ui)] text-sm font-bold text-[#111827] transition hover:bg-amber-200"
              >
                Enroll
              </Link>
              <p className="mt-2 text-[11px] text-white/40">Limited spots</p>
            </div>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-4xl px-6 pb-24 md:px-8">
        <div className="text-center">
          <p className="text-[11px] font-bold uppercase tracking-[0.14em] text-[var(--orchid)]">What you get</p>
          <h2 className="mt-3 font-[family-name:var(--font-display)] text-3xl font-bold leading-tight text-white md:text-4xl">
            Five layers.
            <br />
            Work made simple.
          </h2>
          <p className="mx-auto mt-4 max-w-md text-sm text-white/55">
            Every problem you&apos;ve been patching with five tools, made simpler to run.
          </p>
        </div>
        <div className="mt-12 flex flex-col">
          {FIVE_LAYERS.map((layer, idx) => (
            <Fragment key={layer.num}>
              <article className="flex overflow-hidden rounded-2xl border border-white/10 bg-white/[0.04] transition hover:border-white/20">
                <div className={`w-1 shrink-0 bg-gradient-to-b ${accentBar[layer.accent]}`} aria-hidden />
                <div className="flex flex-1 flex-col gap-4 p-6 md:flex-row md:items-start md:justify-between md:p-8">
                  <div className="min-w-0 flex-1">
                    <p className="text-[10px] font-bold uppercase tracking-[0.12em] text-white/40">Layer {layer.num}</p>
                    <p className="mt-2 flex items-center gap-1.5 text-[11px] font-semibold uppercase tracking-wide text-red-400/90">
                      <span className="inline-block h-1.5 w-1.5 shrink-0 rounded-full bg-red-500/70" aria-hidden />
                      {layer.pain}
                    </p>
                    <h3 className="mt-3 font-[family-name:var(--font-display)] text-xl font-bold text-white md:text-2xl">
                      {layer.title}
                    </h3>
                    <p className="mt-3 max-w-xl text-sm leading-relaxed text-white/60">{layer.desc}</p>
                    <div className="mt-4 flex flex-wrap items-center gap-3 border-t border-white/10 pt-4">
                      <div className="flex flex-wrap gap-2">
                        {layer.tags.map((t) => (
                          <span
                            key={t}
                            className="rounded-full border border-white/15 bg-white/[0.06] px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wide text-white/80"
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                      <p className="text-[11px] text-white/35">
                        <em className="not-italic text-white/50">Overrules</em>{" "}
                        {layer.replaces.map((r) => (
                          <span key={r} className="ml-1 line-through decoration-red-500/40">
                            {r}
                          </span>
                        ))}
                      </p>
                    </div>
                  </div>
                </div>
                <LayerVisual num={layer.num} />
              </article>
              {idx < FIVE_LAYERS.length - 1 && (
                <div className="mx-auto h-4 w-px bg-gradient-to-b from-white/20 to-white/5" aria-hidden />
              )}
            </Fragment>
          ))}
        </div>
      </div>

      <div className="mx-auto max-w-4xl px-6 pb-24 md:px-8">
        <p className="text-[11px] font-bold uppercase tracking-[0.12em] text-[var(--orchid)]">Compare plans</p>
        <h2 className="mt-2 font-[family-name:var(--font-display)] text-3xl font-bold text-white">
          Everything, side by side
        </h2>
        <p className="mt-2 text-sm text-white/55">Tap a category to expand or collapse the feature list.</p>
        <div className="mt-8 overflow-x-auto rounded-xl border border-white/10">
          <table className="w-full min-w-[520px] border-collapse text-left text-sm">
            <thead>
              <tr className="border-b-2 border-white/15 bg-white/[0.06]">
                <th className="px-4 py-3 text-[11px] font-bold uppercase tracking-wide text-white/50">Feature</th>
                <th className="px-4 py-3 text-center text-[11px] font-bold uppercase tracking-wide text-[var(--orchid)]">
                  Business Starter
                </th>
                <th className="px-4 py-3 text-center text-[11px] font-bold uppercase tracking-wide text-white/50">
                  Enterprise
                </th>
              </tr>
            </thead>
            <tbody>
              {COMPARE_SECTIONS.map((sec) => (
                <Fragment key={sec.id}>
                  <tr className="border-t border-white/10 bg-white/[0.04]">
                    <td colSpan={3} className="p-0">
                      <button
                        type="button"
                        className="flex w-full items-center gap-2 px-4 py-3 text-left text-[11px] font-bold uppercase tracking-wide text-white/55 transition hover:bg-white/[0.06]"
                        onClick={() => toggleSection(sec.id)}
                        aria-expanded={expanded[sec.id]}
                      >
                        <span
                          className={`inline-flex h-5 w-5 items-center justify-center rounded border border-white/20 text-white/50 transition ${expanded[sec.id] ? "rotate-90" : ""}`}
                        >
                          ›
                        </span>
                        {sec.title}
                      </button>
                    </td>
                  </tr>
                  {expanded[sec.id]
                    ? sec.rows.map((row) => (
                        <tr key={row.feature} className="border-t border-white/10 hover:bg-white/[0.03]">
                          <td className="px-4 py-2.5 text-white/90">{row.feature}</td>
                          <td className="px-4 py-2.5 text-center">
                            <Cell cell={row.starter} />
                          </td>
                          <td className="px-4 py-2.5 text-center">
                            <Cell cell={row.enterprise} />
                          </td>
                        </tr>
                      ))
                    : null}
                </Fragment>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="mx-auto max-w-xl px-6 pb-24 md:px-8">
        <h2 className="text-center font-[family-name:var(--font-display)] text-2xl font-bold text-white">
          Frequently asked questions
        </h2>
        <div className="mt-8">
          {FAQ_ITEMS.map((item, i) => {
            const open = faqOpen === i;
            return (
              <div key={item.q} className="border-b border-white/10 py-4">
                <button
                  type="button"
                  className="flex w-full items-start justify-between gap-4 text-left"
                  onClick={() => setFaqOpen(open ? null : i)}
                  aria-expanded={open}
                >
                  <span className="font-[family-name:var(--font-sans)] text-[15px] font-semibold text-white">
                    {item.q}
                  </span>
                  <span
                    className={`shrink-0 text-2xl font-light leading-none text-white/45 transition ${open ? "rotate-45" : ""}`}
                  >
                    +
                  </span>
                </button>
                {open ? (
                  <p className="mt-3 font-[family-name:var(--font-sans)] text-sm leading-relaxed text-white/55">
                    {item.a}
                  </p>
                ) : null}
              </div>
            );
          })}
        </div>
      </div>

      <div className="border-y border-white/10 bg-[var(--surface-raised)]/40 py-14">
        <div className="mx-auto max-w-5xl px-6 md:px-8">
          <div className="text-center">
            <p className="text-[11px] font-bold uppercase tracking-[0.12em] text-[var(--orchid)]">Why BOS</p>
            <h2 className="mt-3 font-[family-name:var(--font-display)] text-3xl font-bold leading-tight text-white md:text-4xl">
              The SaaS tax is real.
              <br />
              BOS ends it.
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-white/55">
              A 25-person company pays $2,000 - $4,000/month just to communicate and store files  - 
              before intelligence, automation, or workforce orchestration even exists. None of it
              actually thinks for them.
            </p>
          </div>
          <div className="mt-12">
            <PainCounters />
          </div>
          <div className="mt-12 overflow-x-auto rounded-2xl border border-white/10">
            <table className="w-full min-w-[700px] border-collapse text-[13px]">
              <thead>
                <tr className="border-b-2 border-white/15 bg-white/[0.06]">
                  {COMPETITOR_COLUMNS.map((c, i) => (
                    <th
                      key={c}
                      className={`px-3 py-3 text-center text-[10px] font-bold uppercase tracking-wide text-white/50 md:px-4 ${i === COMPETITOR_COLUMNS.length - 1 ? "bg-[var(--orchid)]/20 text-[var(--orchid)]" : ""} ${i === 0 ? "text-left" : ""}`}
                    >
                      {c}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {COMPETITOR_ROWS.map((row, ri) => (
                  <tr key={row.feature} className={ri % 2 === 0 ? "bg-transparent" : "bg-white/[0.03]"}>
                    <td className="border-b border-white/10 px-4 py-3 font-medium text-white">{row.feature}</td>
                    {row.values.map((v, vi) => (
                      <td
                        key={vi}
                        className={`border-b border-white/10 px-2 py-3 text-center text-white/55 md:px-3 ${vi === row.values.length - 1 ? "bg-[var(--orchid)]/15 font-semibold text-[var(--orchid)]" : ""}`}
                      >
                        {v}
                      </td>
                    ))}
                  </tr>
                ))}
                <tr className="bg-white/[0.06]">
                  <td className="px-4 py-4 font-bold text-white">Total monthly cost</td>
                  <td className="border-b border-white/10 bg-red-950/40 px-2 py-4 text-center font-bold text-red-400 md:px-3">
                    {COMPETITOR_TOTALS[0]}
                  </td>
                  <td className="border-b border-white/10 bg-red-950/40 px-2 py-4 text-center font-bold text-red-400 md:px-3">
                    {COMPETITOR_TOTALS[1]}
                  </td>
                  <td className="border-b border-white/10 px-2 py-4 text-center font-semibold text-white/50 md:px-3">
                    {COMPETITOR_TOTALS[2]}
                  </td>
                  <td className="border-b border-white/10 px-2 py-4 text-center font-semibold text-white/50 md:px-3">
                    {COMPETITOR_TOTALS[3]}
                  </td>
                  <td className="bg-[var(--orchid)]/20 px-3 py-4 text-center text-base font-bold text-[var(--orchid)]">
                    {COMPETITOR_TOTALS[4]}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="mt-8 rounded-xl border border-white/10 bg-[#0a0a0a] px-6 py-5 text-center">
            <p className="font-[family-name:var(--font-display)] text-base font-bold text-white md:text-lg">
              That&apos;s not incremental improvement. That&apos;s structural disruption.
            </p>
            <p className="mt-2 text-sm text-white/50">
              BOS overrules your entire stack under one unified license  -  pay for what you use,
              nothing more.
            </p>
          </div>
        </div>
      </div>

      <div className="border-b border-white/10 bg-white/[0.03] py-12 text-center">
        <p className="text-xs font-medium uppercase tracking-[0.12em] text-white/40">
          Trusted by forward-thinking teams
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-10 gap-y-4">
          {TRUST_LOGOS.map((name) => (
            <span key={name} className="font-[family-name:var(--font-display)] text-base font-bold text-white/35">
              {name}
            </span>
          ))}
        </div>
      </div>

      <div className="bg-[#0a0a0a] px-6 py-20 text-center md:px-8">
        <h2 className="mx-auto max-w-lg font-[family-name:var(--font-display)] text-2xl font-bold leading-tight text-white md:text-3xl">
          &quot;BOS costs less than one Slack seat  -  and overrules the entire fragmented stack.&quot;
        </h2>
        <p className="mx-auto mt-4 max-w-md text-sm text-white/50">
          One license. One intelligence layer. Work made simple with BOS.
        </p>
        <Link
          href="/demo"
          className="mt-10 inline-flex rounded-lg bg-white px-8 py-3.5 font-[family-name:var(--font-ui)] text-[15px] font-semibold text-[var(--surface-dark)] transition hover:bg-white/90"
        >
          Request Beta Access
        </Link>
        <p className="mt-6 text-xs text-white/35">
          Pricing subject to change at renewal. Enterprise pricing confirmed via Order Form.
        </p>
      </div>
    </div>
  );
}
