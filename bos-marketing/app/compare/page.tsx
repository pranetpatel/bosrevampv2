"use client";

import Link from "next/link";
import { SiteNav } from "@/components/site-nav";
import { SiteFooter } from "@/components/site-footer";

export default function ComparePage() {
  const tableData = [
    { capability: "Communication", slack: "✓", crm: "✗", workTools: "Partial", automation: "✗", ai: "Partial", bos: "✓" },
    { capability: "Task Execution", slack: "✗", crm: "Partial", workTools: "Partial", automation: "✓", ai: "✗", bos: "✓" },
    { capability: "Automation", slack: "✗", crm: "✗", workTools: "Limited", automation: "✓", ai: "✗", bos: "✓" },
    { capability: "Intelligence", slack: "✗", crm: "✗", workTools: "✗", automation: "✗", ai: "✓", bos: "✓" },
    { capability: "Unified System", slack: "✗", crm: "✗", workTools: "✗", automation: "✗", ai: "✗", bos: "✓" },
    { capability: "Real-time Context", slack: "✗", crm: "✗", workTools: "✗", automation: "✗", ai: "✗", bos: "✓" },
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
              BOS vs The Stack
            </h1>
            <p className="mx-auto mt-6 max-w-2xl font-[family-name:var(--font-sans)] text-[clamp(1.1rem,2vw,1.25rem)] text-white/60">
              Every company today uses 3 - 6 fragmented tools combined. BOS replaces the need to stitch them together.
            </p>
          </div>
        </section>

        {/* THE PROBLEM */}
        <section className="px-6 py-24">
          <div className="mx-auto max-w-5xl">
            <h2 className="mb-12 text-center font-[family-name:var(--font-display)] text-[clamp(2rem,4vw,3rem)] font-bold">
              The Core Problem With All Competitors
            </h2>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              {[
                { title: "Communication (Slack / Teams)", desc: "Fast communication, but no execution layer. Tasks get buried and follow-ups are manual. Creates chaos at scale." },
                { title: "CRM (Salesforce / HubSpot)", desc: "Good for data, but relies heavily on manual input. Detached from real-time work. Data quickly becomes outdated." },
                { title: "Work Management (Asana / Jira)", desc: "Good for tracking, but requires manual setup and is detached from communication. High operational overhead." },
                { title: "Automation (Zapier / Make)", desc: "Connects tools, but requires technical setup and relies on static logic. Fragile and lacks real-time intelligence." },
              ].map((item) => (
                <div key={item.title} className="rounded-2xl border border-red-500/10 bg-red-500/5 p-6 hover:bg-red-500/10 transition">
                  <h3 className="mb-3 font-[family-name:var(--font-sans)] text-base font-bold text-white/90">
                    {item.title}
                  </h3>
                  <p className="font-[family-name:var(--font-sans)] text-sm text-white/60 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* COMPARISON TABLE */}
        <section className="bg-[#080814] px-6 py-32">
          <div className="mx-auto max-w-6xl">
            <h2 className="mb-6 text-center font-[family-name:var(--font-display)] text-[clamp(2rem,4vw,3rem)] font-bold">
              Clear Positioning
            </h2>
            <p className="mb-16 text-center font-[family-name:var(--font-sans)] text-lg text-white/60">
              BOS is the only system that combines all layers into one continuous loop.
            </p>

            <div className="overflow-x-auto rounded-3xl border border-white/10 bg-[var(--surface-dark)] shadow-2xl">
              <table className="w-full text-left font-[family-name:var(--font-sans)] text-sm whitespace-nowrap">
                <thead className="border-b border-white/10 bg-white/[0.02]">
                  <tr>
                    <th className="p-6 font-bold text-white">Capability</th>
                    <th className="p-6 font-bold text-white/70">Slack</th>
                    <th className="p-6 font-bold text-white/70">CRM</th>
                    <th className="p-6 font-bold text-white/70">Work Tools</th>
                    <th className="p-6 font-bold text-white/70">Automation</th>
                    <th className="p-6 font-bold text-white/70">AI Tools</th>
                    <th className="p-6 font-bold text-[var(--cyan)] text-base bg-[var(--cyan)]/5">BOS</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/5">
                  {tableData.map((row, i) => (
                    <tr key={i} className="hover:bg-white/[0.02] transition">
                      <td className="p-6 font-semibold text-white/90">{row.capability}</td>
                      <td className="p-6 text-white/50">{row.slack}</td>
                      <td className="p-6 text-white/50">{row.crm}</td>
                      <td className="p-6 text-white/50">{row.workTools}</td>
                      <td className="p-6 text-white/50">{row.automation}</td>
                      <td className="p-6 text-white/50">{row.ai}</td>
                      <td className="p-6 font-bold text-[var(--cyan)] bg-[var(--cyan)]/5">{row.bos}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* STRATEGY */}
        <section className="px-6 py-24">
          <div className="mx-auto max-w-4xl space-y-20">
            <div className="text-center">
              <h2 className="mb-6 font-[family-name:var(--font-display)] text-[clamp(2rem,4vw,3rem)] font-bold">
                Strategic Positioning
              </h2>
              <div className="grid sm:grid-cols-2 gap-6 mt-10 text-left">
                <div className="rounded-2xl border border-white/10 bg-[#080814] p-8">
                  <h3 className="mb-4 font-[family-name:var(--font-sans)] text-xl font-bold text-white/50">What BOS is NOT</h3>
                  <ul className="space-y-3 font-[family-name:var(--font-sans)] text-white/60">
                    <li><span className="text-red-400 mr-2">✕</span> Not a chat tool</li>
                    <li><span className="text-red-400 mr-2">✕</span> Not a CRM</li>
                    <li><span className="text-red-400 mr-2">✕</span> Not a task manager</li>
                    <li><span className="text-red-400 mr-2">✕</span> Not an automation tool</li>
                  </ul>
                </div>
                <div className="rounded-2xl border border-[var(--cyan)]/20 bg-[var(--cyan)]/5 p-8">
                  <h3 className="mb-4 font-[family-name:var(--font-sans)] text-xl font-bold text-[var(--cyan)]">What BOS IS</h3>
                  <p className="font-[family-name:var(--font-sans)] text-lg text-white">
                    The orchestration layer that replaces all of them.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="text-center">
               <h2 className="mb-6 font-[family-name:var(--font-display)] text-[clamp(2rem,4vw,3rem)] font-bold">
                Category Definition
              </h2>
              <div className="flex flex-col sm:flex-row gap-6 justify-center text-left">
                 <div className="p-6 rounded-xl bg-white/5 flex-1">
                    <span className="text-sm font-bold uppercase tracking-widest text-white/40 block mb-4">Old World</span>
                    <ul className="space-y-2 text-white/70">
                      <li>Tools for communication</li>
                      <li>Tools for tracking</li>
                      <li>Tools for automation</li>
                    </ul>
                 </div>
                 <div className="p-6 rounded-xl bg-[var(--cyan)]/10 border border-[var(--cyan)]/20 flex-1">
                    <span className="text-sm font-bold uppercase tracking-widest text-[var(--cyan)] block mb-4">New World</span>
                    <p className="text-xl font-bold text-white">Systems that run businesses.</p>
                 </div>
              </div>
            </div>

            <div className="text-center">
               <h2 className="font-[family-name:var(--font-display)] text-[clamp(1.5rem,3vw,2.5rem)] font-bold text-[var(--cyan)]">
                Slack organizes conversations.<br />
                CRMs store data.<br />
                Tools track work.<br />
                <span className="text-white mt-4 block">BOS executes everything.</span>
               </h2>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-[#080814] px-6 py-32 text-center">
          <div className="mx-auto max-w-3xl">
            <h2 className="mb-8 font-[family-name:var(--font-display)] text-[clamp(2.5rem,5vw,4.5rem)] font-bold leading-tight text-white">
              Ready to orchestrate?
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
