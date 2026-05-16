"use client";

import Link from "next/link";
import { SiteNav } from "@/components/site-nav";
import { SiteFooter } from "@/components/site-footer";

export default function TechnologyPage() {
  return (
    <>
      <SiteNav alwaysSolid />

      <main className="bg-[var(--surface-dark)] text-white">
        {/* HERO SECTION */}
        <section className="relative flex flex-col items-center justify-center px-6 pt-40 pb-20 text-center overflow-hidden">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_0%,rgba(100,60,200,0.15),transparent_70%)]" />
          <div className="relative z-10 mx-auto max-w-4xl">
            <span className="mb-4 block font-[family-name:var(--font-ui)] text-xs font-bold uppercase tracking-widest text-[var(--cyan)]">
              Invention Showcase • GENIE AI
            </span>
            <h1 className="mb-6 font-[family-name:var(--font-display)] text-[clamp(3rem,6vw,5rem)] font-bold leading-[1.1] tracking-tight">
              The Technology<br />Behind BOS
            </h1>
            <p className="mx-auto mt-6 max-w-2xl font-[family-name:var(--font-sans)] text-[clamp(1.1rem,2vw,1.25rem)] text-white/60">
              BOS is a Business Orchestration System that replaces fragmented software with a unified layer where humans and AI agents operate as one workforce.
            </p>
          </div>
        </section>

        {/* CONTENT SECTIONS */}
        <section className="mx-auto max-w-4xl px-6 py-20 font-[family-name:var(--font-sans)] text-lg text-white/80 leading-relaxed space-y-32">
          
          {/* Why was it created */}
          <div className="space-y-6">
            <h2 className="mb-8 font-[family-name:var(--font-display)] text-3xl font-bold text-white">
              Why was this invention created?
            </h2>
            <p>
              For decades, building and running a business has required navigating an increasingly complex stack of software controlled by large platforms. What was meant to enable progress has instead created dependence  -  forcing teams to rent their operations across tools they don’t control.
            </p>
            <p>
              Small teams have paid the highest price. They are expected to compete with enterprise-level capabilities, while managing fragmented systems, rising costs, and constant operational overhead. Most of their time is not spent building  -  it is spent coordinating.
            </p>
            <p className="font-bold text-white">
              AI was supposed to simplify this. Instead, it added another layer of complexity.
            </p>
            <p>
              BOS was created to change that. It introduces a new foundation where businesses are no longer assembled through tools, but orchestrated through outcomes. Humans and AI agents operate together in a single system that removes the need to manage software itself.
            </p>
            <div className="border-l-2 border-[var(--orchid)] pl-6 mt-8">
              <p className="font-bold text-white/90">
                This shifts power away from platforms and back to operators  -  enabling anyone to build and run sophisticated organizations without engineering teams, technical setup, or dependence on fragmented systems.
              </p>
            </div>
          </div>

          {/* Why is it groundbreaking */}
          <div className="space-y-6">
            <h2 className="mb-8 font-[family-name:var(--font-display)] text-3xl font-bold text-white">
              Why is this invention groundbreaking?
            </h2>
            <p className="font-bold text-[var(--cyan)] text-xl">
              BOS defines a new category: Business Orchestration Systems.
            </p>
            <p>
              Traditional software requires users to adapt to tools. BOS reverses this. The system adapts to the user, executing outcomes instead of requiring manual coordination.
            </p>
            <p>
              What makes BOS fundamentally different is not just automation  -  it is independence. Through its orchestration layer, BOS reduces reliance on multiple platforms by coordinating execution across them, while abstracting away their complexity. Businesses no longer need to manage the tools themselves  -  only the outcomes they want to achieve.
            </p>
            <p>
              At its core, BOS enables humans and AI agents to function as a unified workforce. Its <span className="font-bold text-white">Twin-to-Twin (T2T)</span> communication protocol allows systems, organizations, and digital workers to interact across boundaries in real time  -  without requiring centralized control.
            </p>
            <p className="font-bold text-white text-2xl pt-6">
              As cloud computing removed the need to manage infrastructure, BOS removes the need to manage operations.
            </p>
            <p className="text-xl text-[var(--cyan)] font-bold">
              This represents a structural shift:<br />
              from renting software… to owning execution.
            </p>
          </div>

          {/* Target Audience */}
          <div className="space-y-6">
            <h2 className="mb-8 font-[family-name:var(--font-display)] text-3xl font-bold text-white">
              Who is this built for?
            </h2>
            <p>
              BOS is built for operators  -  the builders, founders, and teams who are closest to execution but farthest from technical resources.
            </p>
            <p>
              It is especially impactful for small and mid-sized businesses, which make up tens of millions of organizations globally. These businesses are often locked into fragmented tools and platform dependencies that limit their ability to scale efficiently.
            </p>
            <p>
              BOS gives these teams access to capabilities traditionally reserved for large enterprises  -  without requiring engineering teams, custom development, or complex integrations.
            </p>
            <p>
              Through BOS MBA, the platform also enables non-technical users  -  enabling a new generation of operators to build and run companies using AI-assisted execution.
            </p>
            <p className="font-bold text-white">
              BOS is designed for those who build, not just those who configure.
            </p>
          </div>

          {/* Proof of Concept */}
          <div className="space-y-6">
            <h2 className="mb-8 font-[family-name:var(--font-display)] text-3xl font-bold text-white">
              Validation & Real-world Impact
            </h2>
            <p>
              BOS has been validated through real-world deployments across sales, operations, and customer workflows, where teams have transitioned from managing tools to orchestrating outcomes.
            </p>
            <ul className="space-y-4 font-[family-name:var(--font-sans)] text-white/80">
              <li className="flex gap-4"><span className="text-[var(--orchid)] font-bold">→</span> Entire workflows executed by coordinated agents, reducing manual intervention</li>
              <li className="flex gap-4"><span className="text-[var(--orchid)] font-bold">→</span> Significant reduction in tool dependency through centralized orchestration</li>
              <li className="flex gap-4"><span className="text-[var(--orchid)] font-bold">→</span> Faster response times across customer and internal operations</li>
              <li className="flex gap-4"><span className="text-[var(--orchid)] font-bold">→</span> Non-technical users successfully deploying and managing AI-driven systems</li>
            </ul>
            <p className="pt-4">
              In sales environments, BOS agents handle lead intake, follow-ups, scheduling, and communication end-to-end. In operations, internal coordination is executed without requiring manual oversight or tool-switching.
            </p>
          </div>
          
        </section>

        {/* QUOTE BANNER */}
        <section className="bg-white/5 py-24 text-center border-y border-white/10 px-6">
           <div className="mx-auto max-w-4xl">
              <h2 className="font-[family-name:var(--font-display)] text-[clamp(2rem,4vw,3rem)] font-bold text-white italic">
                “BOS doesn’t help you use software.<br />
                <span className="text-[var(--cyan)]">It makes software optional.</span>”
              </h2>
           </div>
        </section>

        {/* CTA */}
        <section className="bg-[#080814] px-6 py-32 text-center">
          <div className="mx-auto max-w-3xl">
            <h2 className="mb-8 font-[family-name:var(--font-display)] text-[clamp(2.5rem,5vw,4.5rem)] font-bold leading-tight text-white">
              Experience orchestration.
            </h2>
            <Link
              href="/get-started"
              className="inline-flex h-14 items-center justify-center rounded-full bg-[var(--cyan)] px-10 font-[family-name:var(--font-ui)] text-base font-bold tracking-wide text-[#0d0b1e] transition hover:bg-white hover:scale-105"
            >
              Get Started
            </Link>
          </div>
        </section>

      </main>

      <SiteFooter />
    </>
  );
}
