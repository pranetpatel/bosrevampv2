"use client";

import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { AsteroidOrb } from "@/components/asteroid-orb";

// ── Activity card data ──────────────────────────────────────────────────────

type ActivityCard =
  | { type: "email"; id: number; to: string; subject: string; body: string; status: string }
  | { type: "slack"; id: number; channel: string; message: string; reactions: string[] }
  | { type: "ticket"; id: number; key: string; title: string; assignee: string; priority: "high" | "medium"; due: string }
  | { type: "calendar"; id: number; title: string; time: string; attendees: string; link: string }
  | { type: "github"; id: number; repo: string; branch: string; message: string; files: number };

const CARDS: ActivityCard[] = [
  {
    type: "email",
    id: 1,
    to: "sarah@acmecorp.com",
    subject: "Campaign Brief — Q3 Product Launch",
    body: "Hi Sarah, the Q3 brief is ready. Key objectives, audience segments and budget breakdown are attached…",
    status: "Sent",
  },
  {
    type: "slack",
    id: 2,
    channel: "marketing-team",
    message: "Campaign brief is live! I've pinged Sarah and CC'd the wider team. Ready to kick off 🚀",
    reactions: ["🎉 4", "👍 3", "🔥 2"],
  },
  {
    type: "ticket",
    id: 3,
    key: "MKTG-142",
    title: "Q3 Campaign Brief — Stakeholder Review",
    assignee: "Sarah K.",
    priority: "high",
    due: "May 20",
  },
  {
    type: "calendar",
    id: 4,
    title: "Campaign Kickoff Sync",
    time: "Tomorrow · 2:00 – 3:00 PM",
    attendees: "Sarah K., Marcus T., +3 more",
    link: "Google Meet link added",
  },
  {
    type: "github",
    id: 5,
    repo: "acmecorp/marketing-ops",
    branch: "feat/q3-campaign-assets",
    message: "chore: scaffold Q3 campaign asset directory with brief and brand guidelines",
    files: 6,
  },
];

const SEQUENCE_MS = 3200; // how long each card is visible

// ── Sub-card components ──────────────────────────────────────────────────────

function EmailCard({ card }: { card: Extract<ActivityCard, { type: "email" }> }) {
  const [progress, setProgress] = useState(0);
  useEffect(() => {
    const t = setTimeout(() => setProgress(100), 300);
    return () => clearTimeout(t);
  }, []);
  return (
    <div className="rounded-xl border border-white/10 bg-[#0f0c1e] text-left overflow-hidden" style={{ width: 280 }}>
      {/* Header */}
      <div className="flex items-center justify-between px-3.5 py-2.5 border-b border-white/8 bg-[#13102a]">
        <div className="flex items-center gap-2">
          <span className="text-base">📧</span>
          <span className="text-xs font-semibold text-white/80" style={{ fontFamily: "var(--font-ui)" }}>Gmail</span>
        </div>
        <span className="flex items-center gap-1 text-[10px] text-emerald-400 font-medium" style={{ fontFamily: "var(--font-ui)" }}>
          <span className="relative flex h-1.5 w-1.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-400" />
          </span>
          {card.status}
        </span>
      </div>
      {/* Body */}
      <div className="px-3.5 py-3 space-y-1.5">
        <div className="text-[11px] text-white/40" style={{ fontFamily: "var(--font-ui)" }}>
          <span className="text-white/25">To:</span> <span className="text-white/65">{card.to}</span>
        </div>
        <div className="text-[11px] text-white/40" style={{ fontFamily: "var(--font-ui)" }}>
          <span className="text-white/25">Sub:</span> <span className="text-white/65">{card.subject}</span>
        </div>
        <p className="text-[11px] text-white/40 leading-relaxed pt-1" style={{ fontFamily: "var(--font-sans)" }}>
          {card.body}
        </p>
      </div>
      {/* Progress bar */}
      <div className="h-0.5 bg-white/5">
        <div
          className="h-full bg-gradient-to-r from-violet-500 to-fuchsia-500 transition-all"
          style={{ width: `${progress}%`, transitionDuration: "1.2s" }}
        />
      </div>
    </div>
  );
}

function SlackCard({ card }: { card: Extract<ActivityCard, { type: "slack" }> }) {
  return (
    <div className="rounded-xl border border-white/10 bg-[#1a0f2e] text-left overflow-hidden" style={{ width: 260 }}>
      <div className="flex items-center gap-2 px-3.5 py-2.5 border-b border-white/8 bg-[#200e3a]">
        <span className="text-xs font-bold text-violet-400" style={{ fontFamily: "var(--font-ui)" }}>#</span>
        <span className="text-xs font-semibold text-white/80" style={{ fontFamily: "var(--font-ui)" }}>{card.channel}</span>
      </div>
      <div className="px-3.5 py-3 space-y-2">
        <div className="flex items-center gap-2">
          <div className="h-6 w-6 rounded overflow-hidden shrink-0">
            <Image src="/BOS Branding/logo.svg" alt="BOS" width={24} height={24} className="h-6 w-6" />
          </div>
          <div>
            <span className="text-[11px] font-semibold text-violet-300" style={{ fontFamily: "var(--font-ui)" }}>BOS</span>
            <span className="ml-1.5 text-[10px] text-white/25" style={{ fontFamily: "var(--font-ui)" }}>just now</span>
          </div>
        </div>
        <p className="text-[11px] text-white/65 leading-relaxed" style={{ fontFamily: "var(--font-sans)" }}>
          {card.message}
        </p>
        <div className="flex gap-2 pt-0.5">
          {card.reactions.map((r) => (
            <span key={r} className="rounded-full border border-white/10 bg-white/5 px-2 py-0.5 text-[10px] text-white/50" style={{ fontFamily: "var(--font-ui)" }}>
              {r}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

function TicketCard({ card }: { card: Extract<ActivityCard, { type: "ticket" }> }) {
  return (
    <div className="rounded-xl border border-white/10 bg-[#0d0e1f] text-left overflow-hidden" style={{ width: 268 }}>
      <div className="flex items-center justify-between px-3.5 py-2.5 border-b border-white/8 bg-[#101228]">
        <div className="flex items-center gap-2">
          <span className="text-base">🎯</span>
          <span className="text-[10px] font-bold text-blue-400 tracking-wider" style={{ fontFamily: "var(--font-ui)" }}>
            {card.key}
          </span>
        </div>
        <span className="rounded-full bg-blue-950 border border-blue-800/40 px-2 py-0.5 text-[10px] text-blue-300 font-medium" style={{ fontFamily: "var(--font-ui)" }}>
          Created
        </span>
      </div>
      <div className="px-3.5 py-3 space-y-2">
        <p className="text-[12px] font-semibold text-white/85" style={{ fontFamily: "var(--font-ui)" }}>
          {card.title}
        </p>
        <div className="flex items-center gap-3 text-[11px] text-white/40" style={{ fontFamily: "var(--font-ui)" }}>
          <span>👤 {card.assignee}</span>
          <span>📅 {card.due}</span>
        </div>
        <div className="flex items-center gap-1.5">
          <span className="h-2 w-2 rounded-full bg-red-500" />
          <span className="text-[10px] text-red-400 font-medium capitalize" style={{ fontFamily: "var(--font-ui)" }}>
            {card.priority} priority
          </span>
        </div>
      </div>
    </div>
  );
}

function CalendarCard({ card }: { card: Extract<ActivityCard, { type: "calendar" }> }) {
  return (
    <div className="rounded-xl border border-white/10 bg-[#0c1120] text-left overflow-hidden" style={{ width: 256 }}>
      <div className="flex items-center gap-2 px-3.5 py-2.5 border-b border-white/8 bg-[#0e1528]">
        <span className="text-base">📅</span>
        <span className="text-xs font-semibold text-white/80" style={{ fontFamily: "var(--font-ui)" }}>Event Created</span>
      </div>
      <div className="px-3.5 py-3 space-y-1.5">
        <p className="text-[13px] font-semibold text-white/90" style={{ fontFamily: "var(--font-ui)" }}>
          {card.title}
        </p>
        <p className="text-[11px] text-cyan-400/80" style={{ fontFamily: "var(--font-ui)" }}>{card.time}</p>
        <p className="text-[11px] text-white/45" style={{ fontFamily: "var(--font-ui)" }}>{card.attendees}</p>
        <div className="flex items-center gap-1.5 pt-1">
          <span className="h-1.5 w-1.5 rounded-full bg-cyan-400" />
          <span className="text-[10px] text-cyan-400/70" style={{ fontFamily: "var(--font-ui)" }}>{card.link}</span>
        </div>
      </div>
    </div>
  );
}

function GithubCard({ card }: { card: Extract<ActivityCard, { type: "github" }> }) {
  return (
    <div className="rounded-xl border border-white/10 bg-[#0c100a] text-left overflow-hidden" style={{ width: 272 }}>
      <div className="flex items-center gap-2 px-3.5 py-2.5 border-b border-white/8 bg-[#0f1209]">
        <svg viewBox="0 0 24 24" fill="currentColor" className="h-3.5 w-3.5 text-white/60">
          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
        </svg>
        <span className="text-[10px] font-medium text-white/60" style={{ fontFamily: "var(--font-ui)" }}>{card.repo}</span>
      </div>
      <div className="px-3.5 py-3 space-y-1.5">
        <div className="flex items-center gap-1.5">
          <span className="rounded bg-green-950 border border-green-800/30 px-1.5 py-0.5 text-[10px] text-green-400 font-medium" style={{ fontFamily: "var(--font-ui)" }}>
            ⎇ {card.branch}
          </span>
        </div>
        <p className="text-[11px] text-white/65 leading-relaxed font-mono">{card.message}</p>
        <p className="text-[10px] text-white/30" style={{ fontFamily: "var(--font-ui)" }}>{card.files} files changed</p>
      </div>
    </div>
  );
}

function ActivityCardRenderer({ card }: { card: ActivityCard }) {
  if (card.type === "email") return <EmailCard card={card} />;
  if (card.type === "slack") return <SlackCard card={card} />;
  if (card.type === "ticket") return <TicketCard card={card} />;
  if (card.type === "calendar") return <CalendarCard card={card} />;
  if (card.type === "github") return <GithubCard card={card} />;
  return null;
}

// Position slots around the orb (relative to center)
const SLOT_STYLES: React.CSSProperties[] = [
  { top: "5%", left: "-32%" },          // top-left
  { top: "5%", right: "-32%" },         // top-right
  { bottom: "20%", left: "-34%" },      // mid-left
  { bottom: "20%", right: "-34%" },     // mid-right
  { bottom: "2%", left: "50%", transform: "translateX(-50%)" }, // bottom-center
];

// Ticker message per card type
const TICKER_MAP: Record<ActivityCard["type"], string> = {
  email:    "Drafting & sending email…",
  slack:    "Posting update to Slack…",
  ticket:   "Creating project ticket…",
  calendar: "Scheduling team meeting…",
  github:   "Committing to repository…",
};

// Max concurrent cards visible at once
const MAX_VISIBLE = 3;
// How long a card stays on screen (ms)
const CARD_LIFETIME = 3800;
// How often a new card is spawned (ms)
const SPAWN_INTERVAL = 1600;

type LiveCard = { uid: number; card: ActivityCard; slot: number };

export function MeetBosSection() {
  const [liveCards, setLiveCards] = useState<LiveCard[]>([]);
  const [ticker, setTicker] = useState("Initializing agent…");
  const [completedCount, setCompletedCount] = useState(0);
  const uidRef = useRef(0);
  const activityIdxRef = useRef(0);

  useEffect(() => {
    const spawnCard = () => {
      const card = CARDS[activityIdxRef.current % CARDS.length];
      activityIdxRef.current++;
      const uid = uidRef.current++;

      setTicker(TICKER_MAP[card.type]);

      setLiveCards((prev) => {
        // pick a slot not currently occupied; if all taken, evict the oldest
        const occupied = new Set(prev.map((c) => c.slot));
        const free = [0, 1, 2, 3, 4].filter((s) => !occupied.has(s));
        const slot =
          free.length > 0
            ? free[Math.floor(Math.random() * free.length)]
            : prev[0]?.slot ?? 0; // evict oldest slot

        // cap at MAX_VISIBLE by dropping the oldest if needed
        const trimmed = prev.length >= MAX_VISIBLE ? prev.slice(1) : prev;
        return [...trimmed.filter((c) => c.slot !== slot), { uid, card, slot }];
      });

      // schedule removal of this specific card
      setTimeout(() => {
        setLiveCards((prev) => prev.filter((c) => c.uid !== uid));
        setCompletedCount((n) => n + 1);
      }, CARD_LIFETIME);
    };

    // stagger the first two so the screen isn't empty for too long
    spawnCard();
    const t1 = setTimeout(spawnCard, 700);
    const interval = setInterval(spawnCard, SPAWN_INTERVAL);

    return () => {
      clearTimeout(t1);
      clearInterval(interval);
    };
  }, []);

  return (
    <section
      id="meet-bos"
      className="relative overflow-hidden bg-[#080814] py-28 px-6 text-center"
    >
      {/* Ambient glow */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_55%_40%_at_50%_55%,rgba(90,40,200,0.18),transparent_70%)]" />

      <h2
        className="relative z-10 mb-20 text-[clamp(2.5rem,6vw,4rem)] font-bold text-white"
        style={{ fontFamily: "var(--font-display)" }}
      >
        Meet BOS
      </h2>

      {/* ── Mobile: centered orb only ── */}
      <div className="md:hidden flex flex-col items-center gap-4 py-8">
        <div className="relative">
          {/* Concentric ring glows */}
          {[320, 240, 160, 100].map((d, i) => (
            <div
              key={d}
              className="absolute rounded-full border border-white/[0.06] pointer-events-none -translate-x-1/2 -translate-y-1/2"
              style={{
                width: d,
                height: d,
                top: "50%",
                left: "50%",
                opacity: 0.3 + i * 0.05,
              }}
            />
          ))}
          <div className="relative flex flex-col items-center gap-4" style={{ width: 320, height: 320 }}>
            <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 z-10">
              <div className="relative">
                <div
                  className="absolute inset-0 rounded-full"
                  style={{
                    boxShadow: "0 0 60px 20px rgba(120,50,255,0.35)",
                    animation: "orb-pulse 2.8s ease-in-out infinite",
                  }}
                />
                <AsteroidOrb size={100} />
              </div>

              {/* Status ticker */}
              <div
                className="mt-2 flex items-center gap-2 rounded-full border border-white/10 bg-[#0d0a20]/90 px-4 py-1.5 backdrop-blur-sm"
                style={{ minWidth: 200 }}
              >
                <span className="relative flex h-1.5 w-1.5 shrink-0">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-violet-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-violet-400" />
                </span>
                <AnimatePresence mode="wait">
                  <motion.span
                    key={ticker}
                    initial={{ opacity: 0, y: 6 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -6 }}
                    transition={{ duration: 0.25 }}
                    className="text-[11px] text-violet-300/85"
                    style={{ fontFamily: "var(--font-ui)" }}
                  >
                    {ticker}
                  </motion.span>
                </AnimatePresence>
              </div>

              {completedCount > 0 && (
                <div className="flex items-center gap-1.5 rounded-lg border border-emerald-800/40 bg-emerald-950/50 px-3 py-1">
                  <span className="text-[10px] text-emerald-400 font-semibold" style={{ fontFamily: "var(--font-ui)" }}>
                    ✦ {completedCount} tasks completed
                  </span>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Latest card shown inline on mobile */}
        <AnimatePresence mode="wait">
          {liveCards.slice(-1).map(({ uid, card }) => (
            <motion.div
              key={uid}
              initial={{ opacity: 0, y: 12, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1, transition: { duration: 0.4 } }}
              exit={{ opacity: 0, y: -8, scale: 0.97, transition: { duration: 0.25 } }}
              className="pointer-events-none"
            >
              <ActivityCardRenderer card={card} />
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {/* ── Desktop: full floating-cards stage ── */}
      <div className="hidden md:block relative mx-auto" style={{ width: 520, height: 560 }}>

        {/* Concentric ring glows */}
        {[520, 400, 280, 160].map((d, i) => (
          <div
            key={d}
            className="absolute rounded-full border border-white/[0.06] pointer-events-none"
            style={{
              width: d,
              height: d,
              top: (520 - d) / 2,
              left: (520 - d) / 2,
              opacity: 0.3 + i * 0.05,
            }}
          />
        ))}

        {/* Orb center */}
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 z-10">
          <div className="relative">
            <div
              className="absolute inset-0 rounded-full"
              style={{
                boxShadow: "0 0 60px 20px rgba(120,50,255,0.35)",
                animation: "orb-pulse 2.8s ease-in-out infinite",
              }}
            />
            <AsteroidOrb size={120} />
          </div>

          {/* Status ticker */}
          <div
            className="mt-2 flex items-center gap-2 rounded-full border border-white/10 bg-[#0d0a20]/90 px-4 py-1.5 backdrop-blur-sm"
            style={{ minWidth: 220 }}
          >
            <span className="relative flex h-1.5 w-1.5 shrink-0">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-violet-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-violet-400" />
            </span>
            <AnimatePresence mode="wait">
              <motion.span
                key={ticker}
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -6 }}
                transition={{ duration: 0.25 }}
                className="text-[11px] text-violet-300/85"
                style={{ fontFamily: "var(--font-ui)" }}
              >
                {ticker}
              </motion.span>
            </AnimatePresence>
          </div>

          {completedCount > 0 && (
            <div className="flex items-center gap-1.5 rounded-lg border border-emerald-800/40 bg-emerald-950/50 px-3 py-1">
              <span className="text-[10px] text-emerald-400 font-semibold" style={{ fontFamily: "var(--font-ui)" }}>
                ✦ {completedCount} tasks completed
              </span>
            </div>
          )}
        </div>

        {/* Activity cards */}
        <AnimatePresence>
          {liveCards.map(({ uid, card, slot }) => (
            <motion.div
              key={uid}
              initial={{ opacity: 0, y: 14, scale: 0.94 }}
              animate={{ opacity: 1, y: 0, scale: 1, transition: { duration: 0.45 } }}
              exit={{ opacity: 0, y: -10, scale: 0.96, transition: { duration: 0.3 } }}
              className="absolute z-20 pointer-events-none"
              style={SLOT_STYLES[slot]}
            >
              <ActivityCardRenderer card={card} />
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {/* Pulse animation keyframes injected inline */}
      <style>{`
        @keyframes orb-pulse {
          0%, 100% { opacity: 0.5; transform: scale(1); }
          50% { opacity: 1; transform: scale(1.12); }
        }
      `}</style>
    </section>
  );
}
