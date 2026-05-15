"use client";

import Link from "next/link";
import { SiteNav } from "@/components/site-nav";
import { SiteFooter } from "@/components/site-footer";

export default function InvestorsPage() {
  return (
    <>
      <SiteNav alwaysSolid />

      <main className="bg-[var(--surface-dark)] text-white">
        {/* HERO SECTION */}
        <section className="relative flex min-h-[85vh] flex-col items-center justify-center px-6 py-32 text-center overflow-hidden">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_40%,rgba(100,60,200,0.15),transparent_70%)]" />
          <div className="relative z-10 mx-auto max-w-4xl">
            <h1 className="mb-6 font-[family-name:var(--font-display)] text-[clamp(3.5rem,8vw,6rem)] font-bold leading-[1.1] tracking-tight text-white">
              Software didn’t fix work.<br />
              <span className="text-[var(--cyan)]">It buried it.</span>
            </h1>
            <p className="mx-auto mt-8 max-w-2xl font-[family-name:var(--font-sans)] text-[clamp(1.2rem,2vw,1.5rem)] text-white/60 leading-relaxed">
              For 15 years, we’ve been sold a lie:<br />
              Add more tools. Move faster.<br />
              What actually happened: More tools → more coordination → slower companies.
            </p>
            <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/get-started"
                className="inline-flex h-12 items-center justify-center rounded-full bg-[var(--cyan)] px-8 font-[family-name:var(--font-ui)] text-sm font-bold tracking-wide text-[#0d0b1e] transition hover:bg-white"
              >
                Back the Shift
              </Link>
              <a
                href="#the-moment"
                className="inline-flex h-12 items-center justify-center rounded-full border border-white/20 bg-white/5 px-8 font-[family-name:var(--font-ui)] text-sm font-semibold text-white transition hover:bg-white/10"
              >
                See Why This Wins
              </a>
            </div>
          </div>
        </section>

        {/* CONTENT SECTIONS */}
        <section className="mx-auto max-w-3xl px-6 py-20 font-[family-name:var(--font-sans)] text-lg sm:text-xl text-white/80 leading-relaxed space-y-32">
          
          {/* Section 1 */}
          <div id="the-moment" className="space-y-6">
            <h2 className="mb-8 font-[family-name:var(--font-display)] text-3xl font-bold text-white">
              The Moment Everyone Missed
            </h2>
            <p>
              There was a moment where software stopped helping… and started taking over.
            </p>
            <p>
              Every company today is split across:<br />
              • Conversations in one place<br />
              • Data in another<br />
              • Execution somewhere else<br />
              • AI duct-taped on top
            </p>
            <p>
              Nothing talks. Nothing moves. Nothing runs.
            </p>
            <p className="font-bold text-white">
              So humans became the system. You are the integration. You are the workflow. You are the bottleneck. And we normalized it.
            </p>
          </div>

          {/* Section 2 */}
          <div className="space-y-6">
            <h2 className="mb-8 font-[family-name:var(--font-display)] text-3xl font-bold text-white">
              The Truth
            </h2>
            <p className="font-bold text-[var(--orchid)] text-2xl">
              Let’s say it clearly: SaaS didn’t scale businesses. It scaled dependency.
            </p>
            <p>
              Every tool wants your data, your workflow, your attention, your budget. No one owns the outcome. So execution slows. Decisions lag. Teams burn out.
            </p>
            <p>
              And founders? They carry the weight of everything.
            </p>
          </div>

          {/* Section 3 */}
          <div className="space-y-6 border-l-2 border-[var(--cyan)] pl-8">
            <h2 className="mb-8 font-[family-name:var(--font-display)] text-3xl font-bold text-white">
              The Break
            </h2>
            <p>
              We didn’t ask: "How do we build a better tool?"
            </p>
            <p className="font-bold text-white text-2xl">
              We asked: What if the business actually ran?
            </p>
            <p>
              Not dashboards. Not workflows. Not automation scripts. A real system.
            </p>
            <ul className="space-y-2 font-semibold">
              <li>→ Work happens</li>
              <li>→ Decisions move</li>
              <li>→ Execution compounds</li>
            </ul>
          </div>

          {/* Section 4 */}
          <div className="space-y-6">
            <h2 className="mb-8 font-[family-name:var(--font-display)] text-3xl font-bold text-white">
              Enter BOS
            </h2>
            <p className="font-[family-name:var(--font-ui)] text-xs font-bold uppercase tracking-widest text-[var(--cyan)]">
              Business Orchestration System
            </p>
            <p className="font-bold text-white text-2xl pt-4">
              This is not software. This is the layer software was supposed to become.
            </p>
            <p>
              You don’t manage it. You command it.
            </p>
            <div className="bg-[#080814] p-6 rounded-2xl border border-white/10 space-y-4 text-base">
              <p>You say: <strong>“Follow up with every lead from last week.”</strong><br/><span className="text-[var(--cyan)]">It’s already done.</span></p>
              <p><strong>“Prepare me for this meeting.”</strong><br/><span className="text-[var(--cyan)]">Waiting for you.</span></p>
              <p><strong>“Onboard this hire.”</strong><br/><span className="text-[var(--cyan)]">In motion.</span></p>
            </div>
            <p className="font-bold text-white pt-4">
              No switching. No syncing. No rebuilding workflows every time something breaks. The business moves without you pushing it.
            </p>
          </div>

          {/* Section 5 */}
          <div className="space-y-6">
            <h2 className="mb-8 font-[family-name:var(--font-display)] text-3xl font-bold text-white">
              Why This Wins
            </h2>
            <p>Every generation has a collapse moment.</p>
            <ul className="space-y-2 text-white/60">
              <li>Mainframes → PCs</li>
              <li>PCs → Internet</li>
              <li>Internet → SaaS</li>
            </ul>
            <p className="font-bold text-white pt-4">
              Now SaaS is collapsing under its own weight. Too many tools. Too much coordination. Too little execution.
            </p>
            <p>AI didn’t fix it. It exposed it.</p>
            <p className="font-bold text-[var(--cyan)] text-2xl pt-4">
              The next layer is obvious: Orchestration. And BOS is first.
            </p>
          </div>

          {/* Section 6 & 7 */}
          <div className="space-y-12">
            <div>
              <h2 className="mb-8 font-[family-name:var(--font-display)] text-3xl font-bold text-white">
                The Underdog Strategy
              </h2>
              <p>
                We’re not starting at the top. We’re starting where pain is highest. Small teams. Operators. Agencies. Founders doing real work.
              </p>
              <p>
                They don’t need features. They need the system to run. And when they win… they don’t go back.
              </p>
            </div>
            
            <div>
              <h2 className="mb-8 font-[family-name:var(--font-display)] text-3xl font-bold text-white">
                Why Incumbents Lose
              </h2>
              <p>
                Slack can’t do this. Salesforce can’t do this. Notion can’t do this. Because their business model depends on fragmentation.
              </p>
              <p>
                More seats. More features. More tools. We remove all three.
              </p>
              <p className="font-bold text-white text-2xl pt-4">
                They sell access. We deliver outcomes.
              </p>
            </div>
          </div>

          {/* Section 8 & 9 */}
          <div className="space-y-12">
            <div>
              <h2 className="mb-8 font-[family-name:var(--font-display)] text-3xl font-bold text-white">
                Business Model Aligned With Reality
              </h2>
              <p>
                We don’t charge for seats, tabs, or storage tiers.
              </p>
              <p className="font-bold text-[var(--cyan)] text-xl">
                We charge when the business runs. Agents activated. Execution delivered. Outcomes created. We monetize movement.
              </p>
            </div>

            <div className="border-t border-white/10 pt-16 text-center">
               <h2 className="mb-8 font-[family-name:var(--font-display)] text-4xl font-bold text-white">
                This Is Bigger Than Software.
              </h2>
              <p>
                This is not another productivity tool. Another AI wrapper. Another SaaS company.
              </p>
              <p className="font-bold text-white text-2xl pt-4">
                This is the execution layer for modern businesses. The system every company will eventually need.
              </p>
              <p className="pt-4">
                And once it’s in place… nothing else makes sense.
              </p>
            </div>
          </div>
          
        </section>

        {/* FINAL CTA */}
        <section className="bg-[#080814] px-6 py-32 text-center">
          <div className="mx-auto max-w-3xl">
            <h2 className="mb-8 font-[family-name:var(--font-display)] text-[clamp(2.5rem,5vw,4.5rem)] font-bold leading-tight text-white">
              Back the underdog.<br />
              Break the system.<br />
              <span className="text-[var(--cyan)]">Rebuild how companies run.</span>
            </h2>
            <Link
              href="/get-started"
              className="inline-flex h-14 items-center justify-center rounded-full bg-[var(--cyan)] px-10 font-[family-name:var(--font-ui)] text-base font-bold tracking-wide text-[#0d0b1e] transition hover:bg-white hover:scale-105"
            >
              Run Your Business on BOS
            </Link>
          </div>
        </section>

      </main>

      <SiteFooter />
    </>
  );
}
