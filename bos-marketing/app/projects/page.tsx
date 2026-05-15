"use client";

import Link from "next/link";
import { SiteNav } from "@/components/site-nav";
import { SiteFooter } from "@/components/site-footer";

export default function ProjectsPage() {
  const projects = [
    {
      title: "Replaced 8 Tools with One AI Business Orchestration System",
      clientGoal: "The client was losing deals due to slow follow-ups, scattered systems, and lack of execution visibility across teams.",
      whatWeDid: "We replaced their fragmented tech stack with a Business Orchestration System (BOS). We deployed AI agents to manage outreach, follow-ups, and internal coordination, while integrating their existing systems into one unified execution layer.",
      results: "Faster response times. Higher conversion rates. Fewer tools. The business now runs on a single system where agents execute and teams stay aligned.",
      categories: ["Web, Mobile & Software Dev", "AI Apps & Integration"],
      skills: ["AI Integration", "Automation", "CRM Integration", "Workflow Automation", "System Architecture", "SaaS Development", "API Integration", "Business Process Automation"],
    },
    {
      title: "Built an AI Sales Agent That Automates Lead Generation and Follow-Ups",
      clientGoal: "The client struggled with inconsistent lead follow-ups, missed opportunities, and a heavy reliance on manual outreach. Their sales pipeline lacked consistency, causing deals to drop off and response times to lag.",
      whatWeDid: "We deployed an AI-powered Sales Agent within BOS to handle lead engagement end-to-end. The system automatically captures inbound leads, initiates personalized outreach, follows up across multiple touchpoints, and updates the CRM in real time. It ensures no lead is missed and every opportunity is consistently nurtured.",
      results: "The client significantly improved response times and increased pipeline activity without hiring additional sales reps. Follow-ups became instant and consistent, leading to higher engagement and improved conversion rates across their sales funnel.",
      categories: ["Sales & Marketing", "Lead Generation & Telemarketing"],
      skills: ["Lead Generation", "AI Automation", "CRM Integration", "Sales Automation", "Workflow Automation", "API Integration"],
    },
    {
      title: "Replaced Manual Operations with an AI Workflow Orchestration System",
      clientGoal: "The client’s operations were fragmented across tools and manual processes. Tasks were delayed, teams were misaligned, and there was no clear visibility into execution.",
      whatWeDid: "We implemented a Business Orchestration System (BOS) with AI Operations Agents to coordinate internal workflows. The system automated task creation, tracked progress across teams, synchronized data between systems, and ensured real-time visibility into operations. Human teams remained in control while agents handled execution and coordination.",
      results: "The client reduced operational bottlenecks, improved team alignment, and gained full visibility into their workflows. Execution became faster, more predictable, and significantly less dependent on manual coordination.",
      categories: ["IT & Networking", "DevOps & Solution Architecture"],
      skills: ["Workflow Automation", "System Architecture", "Operations Automation", "AI Integration", "Process Optimization", "API Integration"],
    }
  ];

  return (
    <>
      <SiteNav alwaysSolid />

      <main className="bg-[var(--surface-dark)] text-white">
        {/* HERO SECTION */}
        <section className="relative flex flex-col items-center justify-center px-6 pt-40 pb-20 text-center overflow-hidden">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_70%_50%_at_50%_0%,rgba(100,60,200,0.15),transparent_70%)]" />
          <div className="relative z-10 mx-auto max-w-4xl">
            <h1 className="mb-6 font-[family-name:var(--font-display)] text-[clamp(3rem,6vw,5rem)] font-bold leading-[1.1] tracking-tight">
              Projects & Case Studies
            </h1>
            <p className="mx-auto mt-6 max-w-2xl font-[family-name:var(--font-sans)] text-[clamp(1.1rem,2vw,1.25rem)] text-white/60">
              See how companies are replacing fragmented tools with a unified system where agents execute and teams stay aligned.
            </p>
          </div>
        </section>

        {/* PROJECTS LIST */}
        <section className="px-6 pb-32">
          <div className="mx-auto max-w-5xl space-y-16">
            {projects.map((project, index) => (
              <div key={index} className="flex flex-col overflow-hidden rounded-3xl border border-white/10 bg-[#0c0c16] shadow-2xl">
                
                {/* Header */}
                <div className="border-b border-white/10 bg-white/[0.02] p-8 md:p-10">
                  <div className="mb-4 flex flex-wrap gap-2">
                    {project.categories.map((cat, i) => (
                      <span key={i} className="rounded-full bg-[var(--cyan)]/10 px-3 py-1 font-[family-name:var(--font-ui)] text-[10px] font-bold uppercase tracking-widest text-[var(--cyan)]">
                        {cat}
                      </span>
                    ))}
                  </div>
                  <h2 className="font-[family-name:var(--font-sans)] text-[clamp(1.5rem,3vw,2.25rem)] font-bold text-white leading-tight">
                    {project.title}
                  </h2>
                </div>

                {/* Content */}
                <div className="grid gap-8 p-8 md:grid-cols-3 md:p-10 bg-gradient-to-br from-[#0c0c16] to-[#080810]">
                  
                  {/* Left Col */}
                  <div className="space-y-8 md:col-span-2">
                    <div>
                      <h3 className="mb-3 font-[family-name:var(--font-ui)] text-xs font-bold uppercase tracking-widest text-white/50">
                        Client Goal
                      </h3>
                      <p className="font-[family-name:var(--font-sans)] text-base leading-relaxed text-white/80">
                        {project.clientGoal}
                      </p>
                    </div>
                    <div>
                      <h3 className="mb-3 font-[family-name:var(--font-ui)] text-xs font-bold uppercase tracking-widest text-white/50">
                        What We Did
                      </h3>
                      <p className="font-[family-name:var(--font-sans)] text-base leading-relaxed text-white/80">
                        {project.whatWeDid}
                      </p>
                    </div>
                    <div>
                      <h3 className="mb-3 font-[family-name:var(--font-ui)] text-xs font-bold uppercase tracking-widest text-[var(--cyan)]">
                        Results
                      </h3>
                      <p className="font-[family-name:var(--font-sans)] text-base font-semibold leading-relaxed text-white">
                        {project.results}
                      </p>
                    </div>
                  </div>

                  {/* Right Col */}
                  <div>
                    <div className="rounded-2xl border border-white/5 bg-white/[0.02] p-6">
                      <h3 className="mb-4 font-[family-name:var(--font-ui)] text-xs font-bold uppercase tracking-widest text-white/50">
                        Skills & Tech
                      </h3>
                      <ul className="flex flex-wrap gap-2">
                        {project.skills.map((skill, i) => (
                          <li key={i} className="rounded-md border border-white/10 bg-white/5 px-2.5 py-1 font-[family-name:var(--font-sans)] text-xs text-white/70">
                            {skill}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                </div>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="bg-[#080814] px-6 py-32 text-center">
          <div className="mx-auto max-w-3xl">
            <h2 className="mb-8 font-[family-name:var(--font-display)] text-[clamp(2.5rem,5vw,4.5rem)] font-bold leading-tight text-white">
              Ready to replace<br />your fragmented stack?
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
