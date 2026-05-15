"use client";

import Link from "next/link";
import { SiteNav } from "@/components/site-nav";
import { SiteFooter } from "@/components/site-footer";

export default function ResourcesPage() {
  return (
    <>
      <SiteNav alwaysSolid />

      {/* HERO SECTION */}
      <section className="relative flex min-h-[65vh] flex-col items-center justify-center overflow-hidden bg-[var(--surface-dark)] px-6 pt-32 pb-24 text-center text-white">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_70%_50%_at_50%_30%,rgba(100,60,220,0.15),transparent_70%)]" />
        <div className="relative z-10 mx-auto max-w-4xl">
          <h1 className="mb-6 font-[family-name:var(--font-display)] text-[clamp(2.5rem,6vw,4.5rem)] font-bold leading-[1.1] tracking-tight">
            Resources to run your<br />business better.
          </h1>
          <p className="mx-auto max-w-2xl font-[family-name:var(--font-sans)] text-[clamp(1.1rem,2.5vw,1.5rem)] text-white/60">
            Learn how to move from fragmented tools to a system that actually executes.
          </p>
          <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#start-here"
              className="inline-flex h-12 items-center justify-center rounded-full bg-[var(--cyan)] px-8 font-[family-name:var(--font-ui)] text-sm font-bold tracking-wide text-[#0d0b1e] transition hover:bg-white"
            >
              Explore Resources
            </a>
            <Link
              href="/demo"
              className="inline-flex h-12 items-center justify-center rounded-full border border-white/20 bg-white/5 px-8 font-[family-name:var(--font-ui)] text-sm font-semibold text-white transition hover:bg-white/10"
            >
              Watch Demo
            </Link>
          </div>
        </div>
      </section>

      {/* START HERE */}
      <section id="start-here" className="bg-[#080814] px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12">
            <h2 className="mb-4 font-[family-name:var(--font-sans)] text-3xl font-bold text-white tracking-tight">
              New to BOS? Start here.
            </h2>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {[
              {
                title: "What is BOS?",
                desc: "A quick introduction to Business Orchestration.",
                bullets: ["Learn how BOS replaces your tool stack", "Understand how agents execute work"],
                linkText: "Read Overview",
                href: "/story",
              },
              {
                title: "How BOS Works",
                desc: "See how work moves from conversation → execution.",
                bullets: ["Real product walkthrough", "Message → outcome flows"],
                linkText: "Watch Demo",
                href: "/demo",
              },
              {
                title: "BOS vs Traditional Tools",
                desc: "Understand the difference.",
                bullets: ["Slack vs BOS", "CRM vs BOS", "Automation vs BOS"],
                linkText: "View Comparison",
                href: "/compare",
              },
            ].map((item) => (
              <div key={item.title} className="flex flex-col rounded-2xl border border-white/10 bg-[var(--surface-dark)] p-8">
                <h3 className="mb-3 font-[family-name:var(--font-sans)] text-xl font-bold text-white">{item.title}</h3>
                <p className="mb-6 font-[family-name:var(--font-sans)] text-sm text-white/60">{item.desc}</p>
                <ul className="mb-8 flex-1 space-y-3 font-[family-name:var(--font-sans)] text-sm text-white/80">
                  {item.bullets.map((b, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-[var(--cyan)]">→</span> {b}
                    </li>
                  ))}
                </ul>
                <Link href={item.href} className="inline-flex w-fit items-center gap-2 font-[family-name:var(--font-ui)] text-xs font-bold uppercase tracking-widest text-white/50 transition hover:text-[var(--cyan)]">
                  {item.linkText} <span aria-hidden>→</span>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PLAYBOOKS */}
      <section className="bg-[var(--surface-dark)] px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12">
            <h2 className="mb-4 font-[family-name:var(--font-sans)] text-3xl font-bold text-white tracking-tight">
              Playbooks
            </h2>
            <p className="font-[family-name:var(--font-sans)] text-lg text-white/60">Step-by-step guides to implement BOS.</p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {[
              { title: "Replace Your Tool Stack", bullets: ["How to move from Slack + CRM + tasks → BOS", "Migration checklist", "Team onboarding"] },
              { title: "Sales Execution System", bullets: ["Automated follow-ups", "CRM automation", "Deal pipeline orchestration"] },
              { title: "Operations System", bullets: ["Task automation", "Ownership tracking", "Workflow execution"] },
              { title: "Founder System", bullets: ["Run your entire company in BOS", "Reduce management overhead", "Gain full visibility"] },
            ].map((pb) => (
              <div key={pb.title} className="flex flex-col rounded-2xl border border-white/10 bg-[#12121c] p-6 hover:bg-white/5 transition">
                <h3 className="mb-6 font-[family-name:var(--font-sans)] text-lg font-bold text-white">{pb.title}</h3>
                <ul className="mb-8 flex-1 space-y-3 font-[family-name:var(--font-sans)] text-sm text-white/60">
                  {pb.bullets.map((b, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <div className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--orchid)]" /> {b}
                    </li>
                  ))}
                </ul>
                <Link href="#" className="font-[family-name:var(--font-ui)] text-xs font-bold uppercase tracking-widest text-[var(--cyan)] transition hover:text-white">
                  View Playbook
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AGENT LIBRARY */}
      <section className="bg-[#080814] px-6 py-24">
        <div className="mx-auto max-w-7xl grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <h2 className="mb-4 font-[family-name:var(--font-sans)] text-3xl font-bold text-white tracking-tight">
              Agent Library
            </h2>
            <p className="mb-8 font-[family-name:var(--font-sans)] text-lg text-white/60">Prebuilt agents you can deploy instantly.</p>
            <Link href="#" className="inline-flex h-12 items-center justify-center rounded-full border border-[var(--cyan)]/30 bg-[var(--cyan)]/10 px-8 font-[family-name:var(--font-ui)] text-sm font-semibold text-[var(--cyan)] transition hover:bg-[var(--cyan)] hover:text-[#080814]">
              Explore All Agents
            </Link>
          </div>
          <div className="lg:col-span-8 grid gap-4 sm:grid-cols-2">
            {[
              { title: "Sales Follow-Up Agent", desc: "Automates outreach, reminders, and booking." },
              { title: "Sales Admin Agent", desc: "Handles CRM updates, reporting, and tracking." },
              { title: "Meeting Agent", desc: "Schedules, summarizes, and assigns actions." },
              { title: "Support Agent", desc: "Handles customer inquiries and escalations." },
              { title: "Operations Agent", desc: "Manages internal workflows and tasks." },
            ].map((agent) => (
              <div key={agent.title} className="rounded-xl border border-white/5 bg-[var(--surface-dark)] p-5">
                <h4 className="mb-2 font-[family-name:var(--font-sans)] text-base font-bold text-white">{agent.title}</h4>
                <p className="font-[family-name:var(--font-sans)] text-sm text-white/50">{agent.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* USE CASES & DOCUMENTATION */}
      <section className="bg-[var(--surface-dark)] px-6 py-24">
        <div className="mx-auto max-w-7xl grid gap-16 lg:grid-cols-2">
          {/* USE CASES */}
          <div>
            <h2 className="mb-4 font-[family-name:var(--font-sans)] text-3xl font-bold text-white tracking-tight">Use Cases</h2>
            <p className="mb-10 font-[family-name:var(--font-sans)] text-lg text-white/60">How teams use BOS</p>
            <div className="grid gap-6 sm:grid-cols-2">
              {[
                { title: "Sales Teams", bullets: ["Never miss a follow-up", "Faster deal cycles"] },
                { title: "Operations Teams", bullets: ["Clear ownership", "Less coordination chaos"] },
                { title: "Agencies", bullets: ["Manage clients and teams", "Automate repetitive work"] },
                { title: "Startups", bullets: ["Replace multiple tools", "Move faster, fewer people"] },
              ].map((uc) => (
                <div key={uc.title} className="rounded-xl border border-white/5 bg-[#12121c] p-6">
                  <h4 className="mb-4 font-[family-name:var(--font-sans)] text-base font-bold text-white">{uc.title}</h4>
                  <ul className="space-y-2 font-[family-name:var(--font-sans)] text-sm text-white/50">
                    {uc.bullets.map((b, i) => (
                      <li key={i} className="flex items-center gap-2">
                        <span className="text-white/20">/</span> {b}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* GUIDES & DOCUMENTATION */}
          <div>
            <h2 className="mb-4 font-[family-name:var(--font-sans)] text-3xl font-bold text-white tracking-tight">Guides & Documentation</h2>
            <p className="mb-10 font-[family-name:var(--font-sans)] text-lg text-white/60">Everything you need to use BOS</p>
            <div className="grid gap-6 sm:grid-cols-2">
              {[
                { title: "Getting Started", links: ["Setting up your workspace", "Inviting your team", "Activating agents"] },
                { title: "Product Guides", links: ["BOS Chat", "Project fx", "Data Drive", "Agent Builder"] },
                { title: "Integrations", links: ["Connecting email, CRM", "API + webhook setup"] },
                { title: "Permissions & Security", links: ["Roles and access", "Data governance"] },
              ].map((doc) => (
                <div key={doc.title} className="rounded-xl border border-white/5 bg-[#12121c] p-6">
                  <h4 className="mb-4 font-[family-name:var(--font-sans)] text-base font-bold text-[var(--orchid)]">{doc.title}</h4>
                  <ul className="space-y-2 font-[family-name:var(--font-sans)] text-sm text-white/60 hover:[&>li]:text-white cursor-pointer">
                    {doc.links.map((link, i) => (
                      <li key={i} className="transition">{link}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
            <div className="mt-8">
              <Link href="#" className="font-[family-name:var(--font-ui)] text-xs font-bold uppercase tracking-widest text-[var(--cyan)] transition hover:text-white">
                View Documentation →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="bg-[#080814] px-6 py-32 text-center">
        <div className="mx-auto max-w-3xl">
          <h2 className="mb-6 font-[family-name:var(--font-display)] text-[clamp(2.5rem,5vw,4.5rem)] font-bold leading-tight text-white">
            Don’t just learn it. Run it.
          </h2>
          <p className="mb-10 font-[family-name:var(--font-sans)] text-xl text-white/60">
            Start using BOS and see how your business operates when everything actually executes.
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
