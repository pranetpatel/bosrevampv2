"use client";

import Link from "next/link";
import { SiteNav } from "@/components/site-nav";
import { SiteFooter } from "@/components/site-footer";

export default function HowItWorksPage() {
  return (
    <>
      <SiteNav alwaysSolid />

      {/* HERO SECTION */}
      <section className="relative flex min-h-[80vh] flex-col items-center justify-center overflow-hidden bg-[var(--surface-dark)] px-6 pt-32 pb-24 text-center text-white">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_70%_60%_at_50%_40%,rgba(100,60,220,0.2),transparent_70%)]" />
        <div className="relative z-10 mx-auto max-w-4xl">
          <h1 className="mb-6 font-[family-name:var(--font-display)] text-[clamp(3rem,8vw,5.5rem)] font-bold leading-[1.1] tracking-tight">
            Work moves differently on BOS.
          </h1>
          <p className="mx-auto max-w-2xl font-[family-name:var(--font-sans)] text-[clamp(1.25rem,3vw,1.75rem)] text-white/70">
            From one message → to complete execution.
          </p>
          <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/demo"
              className="inline-flex h-12 items-center justify-center rounded-full border border-white/20 bg-white/5 px-8 font-[family-name:var(--font-ui)] text-sm font-semibold text-white transition hover:bg-white/10"
            >
              Watch Demo
            </Link>
            <Link
              href="/get-started"
              className="inline-flex h-12 items-center justify-center rounded-full bg-[var(--cyan)] px-8 font-[family-name:var(--font-ui)] text-sm font-bold tracking-wide text-[#0d0b1e] transition hover:bg-white"
            >
              Get Started
            </Link>
          </div>
        </div>
      </section>

      {/* THE FLOW */}
      <section className="bg-[#080814] px-6 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl">
          <div className="mb-16 text-center">
            <h2 className="mb-6 font-[family-name:var(--font-sans)] text-[clamp(2rem,5vw,3.5rem)] font-bold text-white tracking-tight">
              Everything starts with a simple instruction.
            </h2>
            <p className="mx-auto max-w-3xl font-[family-name:var(--font-sans)] text-xl text-white/60">
              You don’t create tasks. You don’t update systems. You don’t manage workflows. You just say what needs to happen.
            </p>
          </div>

          <div className="grid gap-8 lg:grid-cols-5 md:grid-cols-3 sm:grid-cols-2">
            {[
              {
                step: "01",
                title: "You Describe It",
                desc: "Tell BOS what you want done. Type or say: 'Follow up with this lead tomorrow' or 'Send proposal and book a call'. No forms. No setup. No structure required.",
              },
              {
                step: "02",
                title: "BOS Understands",
                desc: "BOS interprets intent and context. It looks at the conversation, the data, your team structure, and active workflows to decide what needs to happen.",
              },
              {
                step: "03",
                title: "Agents Execute",
                desc: "Agents take action automatically. They send emails, create tasks, update CRM records, generate documents, and trigger workflows. All in real time.",
              },
              {
                step: "04",
                title: "Systems Update",
                desc: "Everything stays in sync. Tasks are created, CRM is updated, conversations are logged, and data is stored. No manual input required.",
              },
              {
                step: "05",
                title: "You Get Results",
                desc: "Execution is visible instantly. Notifications when actions are completed, updates in chat, real-time system changes. You don’t chase work.",
              },
            ].map((s) => (
              <div key={s.step} className="relative rounded-2xl border border-white/10 bg-white/[0.02] p-8 transition hover:bg-white/[0.04]">
                <span className="mb-4 block font-[family-name:var(--font-ui)] text-sm font-bold text-[var(--cyan)]">
                  STEP {s.step}
                </span>
                <h3 className="mb-4 font-[family-name:var(--font-sans)] text-xl font-bold text-white">
                  {s.title}
                </h3>
                <p className="font-[family-name:var(--font-sans)] text-sm text-white/60 leading-relaxed">
                  {s.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* COMPARISON & CONTINUOUS LOOP */}
      <section className="bg-[var(--surface-dark)] px-6 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl grid gap-16 lg:grid-cols-2">
          {/* What makes this different */}
          <div>
            <h2 className="mb-10 font-[family-name:var(--font-sans)] text-3xl font-bold text-white">
              What makes this different
            </h2>
            <div className="flex flex-col sm:flex-row gap-6">
              <div className="flex-1 rounded-2xl border border-white/10 bg-red-500/5 p-6">
                <h3 className="mb-4 font-[family-name:var(--font-sans)] font-semibold text-white/80">Traditional Tools</h3>
                <ul className="space-y-3 font-[family-name:var(--font-sans)] text-sm text-white/60">
                  <li className="flex items-center gap-2"><span className="text-red-400">✕</span> You manage the system</li>
                  <li className="flex items-center gap-2"><span className="text-red-400">✕</span> You move data</li>
                  <li className="flex items-center gap-2"><span className="text-red-400">✕</span> You trigger actions</li>
                </ul>
              </div>
              <div className="flex-1 rounded-2xl border border-[var(--cyan)]/30 bg-[var(--cyan)]/5 p-6">
                <h3 className="mb-4 font-[family-name:var(--font-sans)] font-semibold text-white">BOS</h3>
                <ul className="space-y-3 font-[family-name:var(--font-sans)] text-sm text-white/80">
                  <li className="flex items-center gap-2"><span className="text-[var(--cyan)]">✓</span> The system manages itself</li>
                  <li className="flex items-center gap-2"><span className="text-[var(--cyan)]">✓</span> Data flows automatically</li>
                  <li className="flex items-center gap-2"><span className="text-[var(--cyan)]">✓</span> Actions happen continuously</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Continuous Loop */}
          <div>
            <h2 className="mb-10 font-[family-name:var(--font-sans)] text-3xl font-bold text-white">
              Continuous Execution Loop
            </h2>
            <p className="mb-8 font-[family-name:var(--font-sans)] text-lg text-white/60">
              BOS is not step-based. It’s continuous. BOS connects Conversations, Tasks, Data, Systems, and Agents into one continuous loop.
            </p>
            <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-8">
              <ul className="space-y-4 font-[family-name:var(--font-sans)] text-base text-white/80">
                <li className="flex items-start gap-4">
                  <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-white/10 text-xs">1</div>
                  Conversations create context
                </li>
                <li className="flex items-start gap-4">
                  <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-white/10 text-xs">2</div>
                  Context triggers execution
                </li>
                <li className="flex items-start gap-4">
                  <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-white/10 text-xs">3</div>
                  Execution updates systems
                </li>
                <li className="flex items-start gap-4">
                  <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[var(--cyan)] text-[#080814] text-xs font-bold">4</div>
                  Systems inform future actions
                </li>
              </ul>
              <p className="mt-6 font-[family-name:var(--font-ui)] text-sm font-semibold text-[var(--orchid)]">
                The system learns and improves over time.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* REAL EXAMPLES */}
      <section className="bg-[#080814] px-6 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl">
          <div className="mb-16 text-center">
            <h2 className="mb-6 font-[family-name:var(--font-sans)] text-[clamp(2rem,4vw,3rem)] font-bold text-white tracking-tight">
              Real Examples
            </h2>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {[
              {
                role: "Sales",
                prompt: "“Follow up with all leads from today”",
                actions: ["Sends messages", "Updates CRM", "Books meetings", "Tracks responses"],
              },
              {
                role: "Operations",
                prompt: "“Assign this task and track completion”",
                actions: ["Creates tasks", "Assigns owners", "Monitors progress", "Sends reminders"],
              },
              {
                role: "Founder",
                prompt: "“Prepare weekly report”",
                actions: ["Pulls data", "Generates report", "Shares with team"],
              },
            ].map((ex) => (
              <div key={ex.role} className="flex flex-col overflow-hidden rounded-2xl border border-white/10 bg-[var(--surface-dark)]">
                <div className="border-b border-white/10 bg-white/[0.02] px-6 py-4">
                  <h3 className="font-[family-name:var(--font-ui)] text-sm font-bold uppercase tracking-widest text-white/50">
                    {ex.role}
                  </h3>
                </div>
                <div className="p-6">
                  <div className="mb-6">
                    <span className="mb-2 block font-[family-name:var(--font-ui)] text-xs font-semibold text-white/40">YOU SAY</span>
                    <p className="font-[family-name:var(--font-sans)] text-lg text-white">{ex.prompt}</p>
                  </div>
                  <div>
                    <span className="mb-3 block font-[family-name:var(--font-ui)] text-xs font-semibold text-[var(--cyan)]">BOS EXECUTES</span>
                    <ul className="space-y-2 font-[family-name:var(--font-sans)] text-sm text-white/70">
                      {ex.actions.map((act, i) => (
                        <li key={i} className="flex items-center gap-2">
                          <div className="h-1.5 w-1.5 rounded-full bg-[var(--orchid)]" />
                          {act}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HUMAN + AGENT SYSTEM */}
      <section className="bg-[var(--surface-dark)] px-6 py-24 sm:py-32">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="mb-6 font-[family-name:var(--font-sans)] text-3xl sm:text-4xl font-bold text-white">
            Human + Agent System
          </h2>
          <p className="mb-12 font-[family-name:var(--font-sans)] text-lg text-white/60">
            BOS doesn’t replace your team. It supports it.
          </p>
          <div className="grid gap-6 sm:grid-cols-3">
            <div className="rounded-xl border border-white/10 bg-white/5 p-6">
              <h4 className="font-[family-name:var(--font-sans)] text-lg font-semibold text-white">Humans</h4>
              <p className="mt-2 text-sm text-white/50">make decisions</p>
            </div>
            <div className="rounded-xl border border-white/10 bg-white/5 p-6">
              <h4 className="font-[family-name:var(--font-sans)] text-lg font-semibold text-white">Agents</h4>
              <p className="mt-2 text-sm text-white/50">handle execution</p>
            </div>
            <div className="rounded-xl border border-[var(--cyan)]/20 bg-[var(--cyan)]/10 p-6">
              <h4 className="font-[family-name:var(--font-sans)] text-lg font-semibold text-white">System</h4>
              <p className="mt-2 text-sm text-white/80">keeps everything aligned</p>
            </div>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="bg-[#080814] px-6 py-32 text-center">
        <div className="mx-auto max-w-3xl">
          <h2 className="mb-6 font-[family-name:var(--font-display)] text-[clamp(2.5rem,5vw,4.5rem)] font-bold leading-tight text-white">
            You describe outcomes.<br />
            <span className="text-[var(--cyan)]">BOS executes.</span>
          </h2>
          <p className="mb-10 font-[family-name:var(--font-sans)] text-xl text-white/60">
            That’s how it works.
          </p>
          <Link
            href="/get-started"
            className="inline-flex h-14 items-center justify-center rounded-full bg-[var(--cyan)] px-10 font-[family-name:var(--font-ui)] text-base font-bold tracking-wide text-[#0d0b1e] transition hover:bg-white hover:scale-105"
          >
            Get Started
          </Link>
        </div>
      </section>

      <SiteFooter />
    </>
  );
}
