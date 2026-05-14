import type { Metadata } from "next";
import Link from "next/link";
import React from "react";
import { MbaProblemVideo } from "@/components/mba-problem-video";
import { SiteNav } from "@/components/site-nav";
import { SiteFooter } from "@/components/site-footer";

export const metadata: Metadata = {
  title: "BOS MBA — The New Playbook",
  description:
    "Build and run a company in real time. Not a course. Not a certification. A community where you operate using the exact tools the best operators use today.",
};

const phases = [
  {
    phase: "01",
    icon: "📖",
    title: "Learn",
    body: "Curated, relevant business intel delivered as practical building blocks. No fluff. No outdated theory. Only what operators need to move fast and think clearly.",
    tag: "Foundation first",
  },
  {
    phase: "02",
    icon: "⚙️",
    title: "Build",
    body: "Inside a live community of operators, you define, structure, and build your business inside BOS from day one. Real tools, real stakes, real peers.",
    tag: "Ship in week 2",
  },
  {
    phase: "03",
    icon: "🚀",
    title: "Operate",
    body: "Customers, workflows, agents. You are not simulating a business. You are running one. The system handles complexity. You handle growth.",
    tag: "Customers by week 4",
  },
  {
    phase: "04",
    icon: "📈",
    title: "Scale",
    body: "Orchestration at work. Step back and watch systems run. The credential is not a diploma. It is a working company you built, own, and can hand to anyone.",
    tag: "Fully automated by week 6",
  },
];

const weeks = [
  {
    week: "Week 01",
    title: "Learn the basics of business foundations.",
    body: "Curated intel you actually need. Models, systems thinking, operator mindset. Compressed and practical. No textbooks, only signal.",
  },
  {
    week: "Week 02",
    title: "Define your business.",
    body: "Set the problem, the model, and the market. Structure it inside BOS from day one. No decks. A living system.",
  },
  {
    week: "Week 03",
    title: "Launch it.",
    body: "Your intake flows live. Your communication layer is active. The kitchen is open. Real world, real stakes.",
  },
  {
    week: "Week 04",
    title: "You have customers.",
    body: "Not hypothetical ones. Not a simulated market. Actual people using what you built. Your first proof point.",
  },
  {
    week: "Week 06",
    title: "You are operating a real system.",
    body: "Workflows automated. Agents running. You step back and the kitchen runs. That is orchestration. Once you feel it, you do not go back.",
  },
];

export default function MbaPage() {
  return (
    <div className="bg-[#0A0A0A] text-[#F4F0E8] overflow-x-hidden">
      <SiteNav alwaysSolid />
      {/* ─── SECTION 1: HERO ─── */}
      <section className="relative min-h-screen flex flex-col overflow-hidden border-b border-[rgba(244,240,232,0.12)]">
        {/* Radial gold glow background */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(80% 60% at 60% 30%, rgba(201,168,76,0.07) 0%, rgba(201,168,76,0) 70%), radial-gradient(40% 40% at 20% 80%, rgba(201,168,76,0.04) 0%, rgba(201,168,76,0) 60%)",
          }}
        />
        {/* Horizontal midpoint divider */}
        <div className="absolute top-1/2 left-0 right-0 h-px bg-[rgba(244,240,232,0.12)]" />

        {/* Main content */}
        <div className="relative z-10 flex flex-col flex-1 justify-end px-4 pb-20 sm:px-8 sm:pb-24 md:px-16 md:pb-28">
          <p className="font-[family-name:var(--font-dm-mono)] text-[11px] tracking-[0.25em] uppercase text-[#C9A84C] mb-6">
            New Cohort
          </p>
          <h1
            className="font-[family-name:var(--font-playfair)] font-black leading-[0.92] tracking-[-0.02em] text-[#F4F0E8] mb-6"
            style={{ fontSize: "clamp(2.75rem,9.5vw,9rem)" }}
          >
            The New
            <br />
            <em className="not-italic text-[#C9A84C]">Playbook.</em>
          </h1>
          <p className="font-[family-name:var(--font-dm-sans)] font-light text-sm sm:text-base md:text-[17.6px] leading-[26px] text-[rgba(244,240,232,0.45)] max-w-[430px] mb-10">
            The world runs on systems now. For the first time, you can learn
            business by building and operating one in real time.
          </p>
          <div className="flex flex-col sm:flex-row flex-wrap items-start sm:items-center gap-4 sm:gap-8">
            <Link
              href="/get-started"
              className="inline-flex items-center px-6 py-3 sm:px-10 sm:py-4 bg-[#C9A84C] text-[#0A0A0A] font-[family-name:var(--font-dm-sans)] font-medium text-[13px] tracking-[0.1em] uppercase hover:bg-[#b8943e] transition-colors"
            >
              Apply for Early Access
            </Link>
            <Link
              href="#experience"
              className="font-[family-name:var(--font-dm-sans)] text-[13px] tracking-[0.08em] uppercase text-[rgba(244,240,232,0.45)] hover:text-[rgba(244,240,232,0.7)] transition-colors flex items-center gap-2"
            >
              See the experience <span>→</span>
            </Link>
          </div>
        </div>

        {/* Bottom-right watermark */}
        <div className="absolute bottom-24 right-16 text-right hidden lg:block">
          <p className="font-[family-name:var(--font-playfair)] font-bold text-[72px] leading-none text-[#F4F0E8] opacity-[0.08] select-none">
            01
          </p>
          <p className="font-[family-name:var(--font-dm-mono)] text-[10px] tracking-[0.3em] uppercase text-[#C9A84C] opacity-60">
            The New Standard
          </p>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
          <div className="w-px h-12 bg-[rgba(244,240,232,0.45)]" />
          <p className="font-[family-name:var(--font-dm-mono)] text-[9px] tracking-[0.3em] uppercase text-[rgba(244,240,232,0.45)]">
            Scroll
          </p>
        </div>
      </section>

      {/* ─── SECTION 2: PROBLEM — video plays to 6s → black interstitial → loops ─── */}
      <section className="relative min-h-screen overflow-hidden border-t border-[rgba(244,240,232,0.12)]">
        <MbaProblemVideo />

        {/* Content */}
        <div className="relative z-10 flex flex-col justify-center min-h-screen px-4 sm:px-8 md:px-16">
          {/* Label */}
          <div className="flex items-center gap-4 mb-10">
            <div className="w-8 h-px bg-[#C9A84C]" />
            <p className="font-[family-name:var(--font-dm-mono)] text-[11px] tracking-[0.3em] uppercase text-[#C9A84C]">
              The Problem
            </p>
          </div>

          <h2
            className="font-[family-name:var(--font-playfair)] font-black leading-[1] tracking-[-0.02em] text-[#F4F0E8] max-w-[700px] mb-20"
            style={{
              fontSize: "clamp(3rem,7vw,6.5rem)",
              textShadow: "0px 2px 40px rgba(0,0,0,0.8)",
            }}
          >
            Something is
            <br />
            <em className="not-italic text-[#C9A84C]">broken.</em>
          </h2>

          {/* Body text with left border */}
          <div className="max-w-[400px] border-l border-[rgba(244,240,232,0.15)] pl-6 space-y-4">
            <p className="font-[family-name:var(--font-dm-sans)] font-light text-[17.6px] leading-[32px] text-[rgba(244,240,232,0.75)]">
              Not in business. In how we learn it.
            </p>
            <p className="font-[family-name:var(--font-dm-sans)] font-light text-[17.6px] leading-[32px] text-[rgba(244,240,232,0.75)]">
              For decades, we taught operators to analyze companies, study
              frameworks, and simulate decisions. But the world does not run on
              simulations anymore.
            </p>
          </div>
        </div>
      </section>

      {/* ─── SECTION 3: OPERATORS — fragmented tools ─── */}
      <section className="border-t border-[rgba(244,240,232,0.12)] py-16 sm:py-24 md:py-36">
        <div className="mx-auto max-w-[1072px] px-4 sm:px-8 md:px-16">
          <p className="font-[family-name:var(--font-dm-mono)] text-[10px] tracking-[0.3em] uppercase text-[#C9A84C] mb-10">
            01 — Operators
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 lg:gap-24 items-end">
            <h2
              className="font-[family-name:var(--font-playfair)] font-bold leading-[1.15] tracking-[-0.01em] text-[#F4F0E8]"
              style={{ fontSize: "clamp(1.9rem,3.8vw,3.2rem)" }}
            >
              They do not fail because they do not understand business. They
              fail because their{" "}
              <em className="font-bold not-italic text-[#C9A84C]">tools</em>
              <br />
              <em className="text-[#C9A84C]">are fragmented.</em>
            </h2>
            <div className="space-y-5">
              <p className="font-[family-name:var(--font-dm-sans)] font-light text-[16px] leading-[29px] text-[rgba(244,240,232,0.45)]">
                Fragmented tools create fragmented thinking. Every handoff
                between apps is a place where context dies, a task created in
                one tool from a conversation that lives in another, about a
                client whose record lives somewhere else entirely.
              </p>
              <p className="font-[family-name:var(--font-dm-sans)] font-light text-[16px] leading-[29px] text-[rgba(244,240,232,0.45)]">
                And yet, we are still teaching business like it is 1995. Case
                studies. Simulations. Frameworks that describe how companies
                ran, not how they run now.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ─── SECTION 4: THREE FAILURES ─── */}
      <section className="border-t border-[rgba(244,240,232,0.12)] py-16 sm:py-24 md:py-36">
        <div className="mx-auto max-w-[1072px] px-4 sm:px-8 md:px-16">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-8 h-px bg-[#C9A84C]" />
            <p className="font-[family-name:var(--font-dm-mono)] text-[11px] tracking-[0.3em] uppercase text-[#C9A84C]">
              Why Operators Struggle
            </p>
          </div>
          <h2
            className="font-[family-name:var(--font-playfair)] font-bold leading-[1.15] tracking-[-0.01em] text-[#F4F0E8] mb-16 max-w-[560px]"
            style={{ fontSize: "clamp(1.75rem,3.2vw,2.8rem)" }}
          >
            Three failures that no MBA prepares you for.
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 border border-[rgba(244,240,232,0.12)]">
            {[
              {
                n: "01",
                title: "Tools are fragmented",
                body: "Operators average 7 to 11 tools. Each is good at one thing. None talk to each other. The gap between tools is where the business breaks.",
              },
              {
                n: "02",
                title: "Systems are broken",
                body: "Context dies at every handoff. A Slack message becomes an Asana task, attached to a Notion doc, referencing a CRM record. Nothing is connected. Nothing flows.",
              },
              {
                n: "03",
                title: "Execution is slow",
                body: "By the time you finish managing your tools, you have run out of time to run your business. The switching kills you, not the work itself.",
              },
            ].map((item, i) => (
              <div
                key={item.n}
                className={`p-6 md:p-10 ${i < 2 ? "border-b md:border-b-0 md:border-r border-[rgba(244,240,232,0.12)]" : ""}`}
              >
                <p className="font-[family-name:var(--font-dm-mono)] text-[11px] tracking-[0.2em] uppercase text-[#C9A84C] mb-5">
                  Failure {item.n}
                </p>
                <h3 className="font-[family-name:var(--font-playfair)] font-bold text-[20px] leading-[33px] text-[#F4F0E8] mb-5">
                  {item.title}
                </h3>
                <p className="font-[family-name:var(--font-dm-sans)] font-light text-[14.4px] leading-[24px] text-[rgba(244,240,232,0.45)]">
                  {item.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── SECTION 5: QUOTE ─── */}
      <section className="border-t border-[rgba(244,240,232,0.12)] py-16 sm:py-28 md:py-44">
        <div className="mx-auto max-w-[1072px] px-4 sm:px-8 md:px-16 text-center">
          <p
            className="font-[family-name:var(--font-playfair)] font-normal leading-[1.25] tracking-[-0.01em] text-[#F4F0E8]"
            style={{ fontSize: "clamp(1.75rem,4vw,4rem)" }}
          >
            The internet changed{" "}
            <em className="not-italic text-[#C9A84C]">distribution.</em>
          </p>
          <p
            className="font-[family-name:var(--font-playfair)] font-normal leading-[1.25] tracking-[-0.01em] text-[#F4F0E8] mt-2"
            style={{ fontSize: "clamp(1.75rem,4vw,4rem)" }}
          >
            AI changes <em className="not-italic text-[#C9A84C]">execution.</em>
          </p>
          <p
            className="font-[family-name:var(--font-playfair)] font-normal leading-[1.35] text-[#F4F0E8] mt-6 opacity-70"
            style={{ fontSize: "clamp(1.25rem,2.5vw,2rem)" }}
          >
            So why are we still teaching
            <br />
            the old way?
          </p>
        </div>
      </section>

      {/* ─── SECTION 6: OLD vs NEW PLAYBOOK ─── */}
      <section className="border-t border-[rgba(244,240,232,0.12)] py-16 sm:py-24 md:py-36 bg-[rgba(201,168,76,0.03)]">
        <div className="mx-auto max-w-[1072px] px-4 sm:px-8 md:px-16">
          <div className="flex items-center gap-4 mb-14">
            <div className="w-8 h-px bg-[#C9A84C]" />
            <p className="font-[family-name:var(--font-dm-mono)] text-[11px] tracking-[0.3em] uppercase text-[#C9A84C]">
              The Shift
            </p>
          </div>

          <div className="grid grid-cols-2 min-w-0">
            <p className="font-[family-name:var(--font-dm-mono)] text-[9px] sm:text-[10px] tracking-[0.2em] sm:tracking-[0.3em] uppercase text-[rgba(244,240,232,0.25)] mb-6">
              Old Playbook
            </p>
            <p className="font-[family-name:var(--font-dm-mono)] text-[9px] sm:text-[10px] tracking-[0.2em] sm:tracking-[0.3em] uppercase text-[#C9A84C] mb-6 pl-4 sm:pl-6 md:pl-10">
              New Playbook
            </p>

            {[
              ["Analyze companies", "Learn by doing it"],
              ["Study frameworks", "Run a real company"],
              ["Simulate decisions", "Build live systems"],
              ["Memorize case studies", "Acquire real customers"],
              ["Graduate. Then figure it out.", "Graduate operating."],
            ].map(([old, next], i) => (
              <React.Fragment key={old}>
                <div className="border-t border-[rgba(244,240,232,0.12)] py-3 sm:py-4 pr-3 sm:pr-4">
                  <p
                    className="font-[family-name:var(--font-playfair)] font-normal leading-[1.5] text-[rgba(244,240,232,0.3)] line-through text-sm sm:text-base"
                    style={{ fontSize: "clamp(0.75rem,1.8vw,1.5rem)" }}
                  >
                    {old}
                  </p>
                </div>
                <div className="border-t border-[rgba(244,240,232,0.12)] py-3 sm:py-4 border-l border-l-[rgba(244,240,232,0.08)] pl-4 sm:pl-6 md:pl-10">
                  <p
                    className={`font-[family-name:var(--font-playfair)] leading-[1.5] text-sm sm:text-base ${
                      i === 4
                        ? "font-bold text-[#F4F0E8]"
                        : "italic font-bold text-[#C9A84C]"
                    }`}
                    style={{ fontSize: "clamp(0.75rem,1.8vw,1.5rem)" }}
                  >
                    {next}
                  </p>
                </div>
              </React.Fragment>
            ))}
          </div>
        </div>
      </section>

      {/* ─── SECTION 7: REVENUE COMPARISON ─── */}
      <section className="border-t border-[rgba(244,240,232,0.12)] py-16 sm:py-24 md:py-36">
        <div className="mx-auto max-w-[1072px] px-4 sm:px-8 md:px-16">
          <div className="flex items-center gap-4 mb-16">
            <div className="w-8 h-px bg-[#C9A84C]" />
            <p className="font-[family-name:var(--font-dm-mono)] text-[11px] tracking-[0.3em] uppercase text-[#C9A84C]">
              The Difference in Practice
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16">
            {/* Old path */}
            <div>
              <p className="font-[family-name:var(--font-dm-mono)] text-[10px] tracking-[0.3em] uppercase text-[rgba(244,240,232,0.25)] mb-2">
                Old Playbook
              </p>
              <p className="font-[family-name:var(--font-playfair)] font-normal text-[16px] leading-[26px] text-[rgba(244,240,232,0.3)] mb-5">
                Slow, linear growth
              </p>
              <p
                className="font-[family-name:var(--font-playfair)] font-black leading-none tracking-[-0.03em] text-[rgba(244,240,232,0.22)]"
                style={{ fontSize: "clamp(2.5rem,6vw,5.5rem)" }}
              >
                $36,703
              </p>
              <div className="mt-6 h-[3px] bg-[rgba(244,240,232,0.07)] relative">
                <div className="absolute left-0 top-0 h-full w-[15%] bg-[rgba(244,240,232,0.18)]" />
              </div>
              <p className="font-[family-name:var(--font-dm-mono)] text-[10px] tracking-[0.1em] text-[rgba(244,240,232,0.45)] mt-3">
                Avg. year-one revenue, traditional path
              </p>
            </div>

            {/* New path */}
            <div>
              <p className="font-[family-name:var(--font-dm-mono)] text-[10px] tracking-[0.3em] uppercase text-[#C9A84C] mb-2">
                New Playbook
              </p>
              <p className="font-[family-name:var(--font-playfair)] font-normal text-[16px] leading-[26px] text-[#F4F0E8] mb-5">
                Compounding, system-driven growth
              </p>
              <p
                className="font-[family-name:var(--font-playfair)] font-black leading-none tracking-[-0.03em] text-[#C9A84C]"
                style={{ fontSize: "clamp(2.5rem,6vw,5.5rem)" }}
              >
                $280,000
              </p>
              <div
                className="mt-6 h-[3px] bg-[#C9A84C]"
                style={{ boxShadow: "0px 0px 12px rgba(201,168,76,0.5)" }}
              />
              <p className="font-[family-name:var(--font-dm-mono)] text-[10px] tracking-[0.1em] text-[rgba(244,240,232,0.45)] mt-3">
                Avg. year-one operator revenue with BOS MBA
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ─── SECTION 8: BOS ─── */}
      <section className="border-t border-[rgba(244,240,232,0.12)] py-16 sm:py-28 md:py-44">
        <div className="mx-auto max-w-[1072px] px-4 sm:px-8 md:px-16 text-center">
          <p className="font-[family-name:var(--font-dm-mono)] text-[11px] tracking-[0.3em] uppercase text-[#C9A84C] mb-6">
            We built something different.
          </p>
          <h2
            className="font-[family-name:var(--font-playfair)] font-black leading-none tracking-[-0.04em] text-[#F4F0E8]"
            style={{ fontSize: "clamp(3.5rem,13vw,12rem)" }}
          >
            BOS
          </h2>
          <p className="font-[family-name:var(--font-dm-mono)] text-[13px] tracking-[0.15em] uppercase text-[#C9A84C] mt-4 mb-14">
            Business Orchestration System
          </p>

          {/* 4 pillars */}
          <div className="grid grid-cols-2 md:grid-cols-4 border border-[rgba(244,240,232,0.12)]">
            {[
              { title: "Unified", sub: "One communication layer" },
              { title: "Structured", sub: "Execution by design" },
              { title: "Connected", sub: "Knowledge that flows" },
              { title: "Amplified", sub: "Agents do the work" },
            ].map((item, i) => (
              <div
                key={item.title}
                className={`py-6 px-4 sm:py-8 sm:px-6 ${
                  i === 0
                    ? "border-b border-r border-[rgba(244,240,232,0.12)] md:border-b-0"
                    : i === 1
                      ? "border-b border-[rgba(244,240,232,0.12)] md:border-b-0 md:border-r"
                      : i === 2
                        ? "border-r border-[rgba(244,240,232,0.12)]"
                        : ""
                }`}
              >
                <p className="font-[family-name:var(--font-playfair)] font-bold text-[17.6px] leading-[29px] text-[#F4F0E8]">
                  {item.title}
                </p>
                <p className="font-[family-name:var(--font-dm-sans)] font-light text-[12.8px] leading-[21px] text-[rgba(244,240,232,0.45)] mt-2">
                  {item.sub}
                </p>
              </div>
            ))}
          </div>

          <p className="font-[family-name:var(--font-dm-sans)] font-light text-[16px] leading-[29px] text-[rgba(244,240,232,0.45)] mt-14 max-w-[445px] mx-auto">
            A single system where communication is unified, execution is
            structured, knowledge is connected, and AI agents amplify
            everything. Not another tool. The kitchen everything happens inside.
          </p>
        </div>
      </section>

      {/* ─── SECTION 9: BOS MBA ─── */}
      <section className="border-t border-[rgba(244,240,232,0.12)] py-16 sm:py-24 md:py-36 bg-[rgba(201,168,76,0.016)] relative overflow-hidden">
        {/* Watermark */}
        <div
          className="absolute right-[-2%] top-1/3 font-[family-name:var(--font-playfair)] font-black leading-none tracking-[-0.05em] text-[rgba(244,240,232,0.024)] select-none pointer-events-none hidden md:block"
          style={{ fontSize: "clamp(8rem,18vw,20rem)" }}
        >
          MBA
        </div>

        <div className="mx-auto max-w-[1072px] px-4 sm:px-8 md:px-16 relative z-10">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-8 h-px bg-[#C9A84C]" />
            <p className="font-[family-name:var(--font-dm-mono)] text-[11px] tracking-[0.3em] uppercase text-[#C9A84C]">
              And Now
            </p>
          </div>

          <h2
            className="font-[family-name:var(--font-playfair)] font-black leading-none tracking-[-0.03em] text-[#F4F0E8] mb-6"
            style={{ fontSize: "clamp(3rem,6vw,6rem)" }}
          >
            BOS MBA.
          </h2>
          <p className="font-[family-name:var(--font-dm-sans)] font-light text-sm sm:text-base md:text-[17.6px] leading-[30px] text-[rgba(244,240,232,0.45)] max-w-[545px] mb-16">
            Not a course. Not a certification. A community where you build and
            run a company in real time, using the exact tools the best operators
            use today.
          </p>

          {/* Phase cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 border border-[rgba(244,240,232,0.12)]">
            {phases.map((item, i) => {
              const borderCls =
                i === 0
                  ? "border-b border-r border-[rgba(244,240,232,0.12)] lg:border-b-0"
                  : i === 1
                    ? "border-b border-[rgba(244,240,232,0.12)] lg:border-b-0 lg:border-r"
                    : i === 2
                      ? "border-b border-[rgba(244,240,232,0.12)] sm:border-b-0 sm:border-r"
                      : "";
              return (
              <div
                key={item.phase}
                className={`p-6 sm:p-8 flex flex-col ${borderCls}`}
              >
                <p className="font-[family-name:var(--font-dm-mono)] text-[9px] tracking-[0.35em] uppercase text-[#C9A84C] mb-5">
                  Phase {item.phase}
                </p>
                <span className="text-[29px] block mb-5">{item.icon}</span>
                <h3 className="font-[family-name:var(--font-playfair)] font-bold text-[20.8px] leading-[34px] text-[#F4F0E8] mb-4">
                  {item.title}
                </h3>
                <p className="font-[family-name:var(--font-dm-sans)] font-light text-[13.1px] leading-[22px] text-[rgba(244,240,232,0.45)] flex-1 mb-8">
                  {item.body}
                </p>
                <div className="border-t border-[rgba(244,240,232,0.12)] pt-4">
                  <p className="font-[family-name:var(--font-dm-mono)] text-[10px] tracking-[0.15em] uppercase text-[#C9A84C]">
                    {item.tag}
                  </p>
                </div>
              </div>
              );
            })}
          </div>

          {/* Quote */}
          <div className="mt-14 flex items-start gap-6">
            <div className="w-px h-8 bg-[rgba(244,240,232,0.12)] flex-shrink-0 mt-1" />
            <p className="font-[family-name:var(--font-playfair)] italic font-normal text-[20.8px] leading-[34px] text-[rgba(244,240,232,0.5)]">
              &ldquo;Once you experience orchestration, you do not go back.&rdquo;
            </p>
          </div>
        </div>
      </section>

      {/* ─── SECTION 10: EXPERIENCE / CURRICULUM ─── */}
      <section
        id="experience"
        className="border-t border-[rgba(244,240,232,0.12)] py-16 sm:py-24 md:py-36"
      >
        <div className="mx-auto max-w-[1072px] px-4 sm:px-8 md:px-16">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-8 h-px bg-[#C9A84C]" />
            <p className="font-[family-name:var(--font-dm-mono)] text-[11px] tracking-[0.3em] uppercase text-[#C9A84C]">
              The Experience
            </p>
          </div>
          <h2
            className="font-[family-name:var(--font-playfair)] font-bold leading-[1.15] tracking-[-0.01em] text-[#F4F0E8] mb-16 max-w-[700px]"
            style={{ fontSize: "clamp(1.75rem,3.2vw,2.8rem)" }}
          >
            No lecturers. No case studies. No simulations.
          </h2>

          {/* Timeline */}
          <div className="relative">
            <div className="absolute left-0 top-0 bottom-0 w-px bg-[rgba(244,240,232,0.12)]" />

            {weeks.map((item, i) => (
              <div
                key={item.week}
                className="relative flex gap-6 md:gap-12 bg-[rgba(201,168,76,0.03)] mb-0"
              >
                {/* Glowing dot */}
                <div
                  className="absolute left-[-4px] top-[44px] w-2 h-2 rounded-full bg-[#C9A84C] flex-shrink-0"
                  style={{
                    boxShadow:
                      "0 0 10px rgba(201,168,76,0.9), 0 0 26px rgba(201,168,76,0.4)",
                  }}
                />

                {/* Week label */}
                <div className="pl-6 sm:pl-8 w-20 sm:w-24 md:w-28 flex-shrink-0 pt-8 pb-8 sm:pt-10 sm:pb-10">
                  <p className="font-[family-name:var(--font-dm-mono)] text-[11px] tracking-[0.2em] uppercase text-[#C9A84C]">
                    {item.week}
                  </p>
                </div>

                {/* Content */}
                <div
                  className={`flex-1 pt-8 pb-8 sm:pt-10 sm:pb-10 ${i < weeks.length - 1 ? "border-b border-[rgba(244,240,232,0.06)]" : ""}`}
                >
                  <h3 className="font-[family-name:var(--font-playfair)] font-bold text-[22.4px] leading-[37px] text-[#F4F0E8] mb-3">
                    {item.title}
                  </h3>
                  <p className="font-[family-name:var(--font-dm-sans)] font-light text-[14.4px] leading-[24px] text-[rgba(244,240,232,0.45)]">
                    {item.body}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── FINAL CTA ─── */}
      <section className="border-t border-[rgba(244,240,232,0.12)] py-20 sm:py-32 md:py-52 text-center">
        <div className="mx-auto max-w-[1072px] px-4 sm:px-8 md:px-16">
          <h2
            className="font-[family-name:var(--font-playfair)] font-black leading-[1.1] tracking-[-0.02em] text-[#F4F0E8] mb-10 sm:mb-12"
            style={{ fontSize: "clamp(2rem,5.5vw,4.5rem)" }}
          >
            This is how businesses
            <br />
            are built <em>now.</em>
          </h2>
          <Link
            href="/get-started"
            className="inline-flex items-center px-8 py-4 sm:px-12 sm:py-5 bg-[#C9A84C] text-[#0A0A0A] font-[family-name:var(--font-dm-sans)] font-medium text-[13px] tracking-[0.1em] uppercase hover:bg-[#b8943e] transition-colors"
          >
            Apply for Early Access
          </Link>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
