"use client";

import Link from "next/link";
import { SiteNav } from "@/components/site-nav";
import { SiteFooter } from "@/components/site-footer";

export default function IndustryPage() {
  return (
    <>
      <SiteNav alwaysSolid />

      <main className="bg-[var(--surface-dark)] text-white">
        {/* HERO SECTION */}
        <section className="relative flex flex-col items-center justify-center px-6 pt-40 pb-24 text-center overflow-hidden">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_0%,rgba(100,60,200,0.15),transparent_70%)]" />
          <div className="relative z-10 mx-auto max-w-4xl">
            <span className="mb-4 block font-[family-name:var(--font-ui)] text-xs font-bold uppercase tracking-widest text-[var(--cyan)]">
              Agencies & Consultancies
            </span>
            <h1 className="mb-6 font-[family-name:var(--font-display)] text-[clamp(3rem,6vw,5rem)] font-bold leading-[1.1] tracking-tight">
              Where agencies run their<br />entire business.
            </h1>
            <p className="mx-auto mt-6 max-w-2xl font-[family-name:var(--font-sans)] text-[clamp(1.1rem,2vw,1.25rem)] text-white/60">
              Not just talk about it. Run your entire client delivery and team operations in one unified system.
            </p>
          </div>
        </section>

        {/* THE PAIN */}
        <section className="px-6 py-24">
          <div className="mx-auto max-w-5xl">
             <div className="text-center mb-16">
               <h2 className="mb-4 font-[family-name:var(--font-display)] text-[clamp(2rem,4vw,3rem)] font-bold text-white">
                 Your team doesn't work in tools.<br/>
                 They work in conversations.
               </h2>
               <p className="font-[family-name:var(--font-sans)] text-xl text-white/50">
                 But your tools don't execute anything.
               </p>
             </div>

             <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {[
                  { title: "The Slack Pain", quotes: ["I can't find anything", "Too many channels", "Everything gets buried"] },
                  { title: "The Project Tool Pain", quotes: ["ClickUp is bloated", "Jira is overkill", "No one updates tasks"] },
                  { title: "The CRM Pain", quotes: ["Never up to date", "Sales and delivery disconnected"] },
                  { title: "The Docs Pain", quotes: ["Files are everywhere", "Notion is not operational"] },
                ].map(pain => (
                  <div key={pain.title} className="rounded-2xl border border-white/10 bg-[#080814] p-6 hover:bg-white/[0.02] transition">
                    <h3 className="mb-4 font-[family-name:var(--font-sans)] text-lg font-bold text-[var(--orchid)]">{pain.title}</h3>
                    <ul className="space-y-3 font-[family-name:var(--font-sans)] text-sm text-white/60 italic">
                      {pain.quotes.map((q, i) => <li key={i}>"{q}"</li>)}
                    </ul>
                  </div>
                ))}
             </div>
             
             <div className="mt-16 text-center border border-red-500/20 bg-red-500/5 p-8 rounded-2xl">
               <p className="font-[family-name:var(--font-sans)] text-xl text-white font-bold">
                 Work is fragmented across tools, but execution happens in conversations.
               </p>
             </div>
          </div>
        </section>

        {/* THE SOLUTION */}
        <section className="bg-[#080814] px-6 py-32">
          <div className="mx-auto max-w-5xl">
            <div className="grid md:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="mb-6 font-[family-name:var(--font-display)] text-4xl font-bold text-white leading-tight">
                  Replace Slack + ClickUp + Drive with one system.
                </h2>
                <p className="font-[family-name:var(--font-sans)] text-lg text-white/60 mb-8">
                  BOS is where your team talks, manages clients, tracks work, and stores everything. And it actually executes work with you.
                </p>
                <ul className="space-y-4 font-[family-name:var(--font-sans)] text-white/80">
                  <li className="flex gap-4 items-center">
                    <div className="h-2 w-2 rounded-full bg-[var(--cyan)]" />
                    <strong>Chat fx</strong> replaces Slack-lite
                  </li>
                  <li className="flex gap-4 items-center">
                    <div className="h-2 w-2 rounded-full bg-[var(--cyan)]" />
                    <strong>Project fx</strong> replaces ClickUp-lite
                  </li>
                  <li className="flex gap-4 items-center">
                    <div className="h-2 w-2 rounded-full bg-[var(--cyan)]" />
                    <strong>Data Drive</strong> replaces Drive/Notion-lite
                  </li>
                  <li className="flex gap-4 items-center">
                    <div className="h-2 w-2 rounded-full bg-[var(--cyan)]" />
                    <strong>iWork</strong> provides an AI workspace for execution
                  </li>
                </ul>
              </div>
              <div className="rounded-3xl border border-white/10 bg-[var(--surface-dark)] p-10 shadow-2xl relative overflow-hidden">
                 <div className="absolute top-0 right-0 p-8 opacity-20 text-[8rem]">🏢</div>
                 <h3 className="font-[family-name:var(--font-ui)] text-sm font-bold uppercase tracking-widest text-[var(--cyan)] mb-6">Built For</h3>
                 <ul className="space-y-4 font-[family-name:var(--font-sans)] text-lg text-white font-medium">
                   <li>Marketing Agencies</li>
                   <li>Creative Agencies</li>
                   <li>Web & Dev Shops</li>
                   <li>RevOps & Growth Consultancies</li>
                   <li>AI Automation Agencies</li>
                 </ul>
              </div>
            </div>
          </div>
        </section>

        {/* TRIGGER EVENTS & PRICING */}
        <section className="px-6 py-24">
           <div className="mx-auto max-w-4xl text-center space-y-16">
              <div>
                <h2 className="mb-8 font-[family-name:var(--font-display)] text-3xl font-bold text-white">
                  When teams switch to BOS
                </h2>
                <div className="flex flex-wrap justify-center gap-4">
                  {["We're scaling and things are breaking", "We're overwhelmed with communication", "We're adding AI but it's disconnected", "Slack is getting out of control"].map((t, i) => (
                    <span key={i} className="rounded-full border border-white/10 bg-white/5 px-6 py-3 font-[family-name:var(--font-sans)] text-sm text-white/80">
                      "{t}"
                    </span>
                  ))}
                </div>
              </div>

              <div className="border-t border-white/10 pt-16">
                <h2 className="mb-4 font-[family-name:var(--font-display)] text-3xl font-bold text-white">
                  Less than what you pay for Slack alone.
                </h2>
                <p className="font-[family-name:var(--font-sans)] text-lg text-white/60">
                  Flat pricing. No per-seat confusion. Free migration support for Slack and ClickUp.
                </p>
              </div>
           </div>
        </section>

        {/* CTA */}
        <section className="bg-[#080814] px-6 py-32 text-center">
          <div className="mx-auto max-w-3xl">
            <h2 className="mb-8 font-[family-name:var(--font-display)] text-[clamp(2.5rem,5vw,4.5rem)] font-bold leading-tight text-white">
              End the chaos.
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
