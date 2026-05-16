"use client";

import Link from "next/link";
import { SiteNav } from "@/components/site-nav";
import { SiteFooter } from "@/components/site-footer";

export default function ManifestoPage() {
  return (
    <>
      <SiteNav alwaysSolid />

      <main className="bg-[var(--surface-dark)] text-white">
        {/* HERO SECTION */}
        <section className="relative flex min-h-[70vh] flex-col items-center justify-center px-6 py-32 text-center overflow-hidden">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_40%,rgba(100,60,200,0.15),transparent_70%)]" />
          <div className="relative z-10 mx-auto max-w-4xl">
            <h1 className="mb-6 font-[family-name:var(--font-display)] text-[clamp(3.5rem,8vw,6rem)] font-bold leading-[1] tracking-tight">
              The System Was<br />
              <span className="text-white/40">Never Built For You.</span>
            </h1>
            <p className="mx-auto mt-8 max-w-2xl font-[family-name:var(--font-sans)] text-[clamp(1.2rem,2vw,1.5rem)] text-white/60">
              There is a quiet truth inside modern business:<br />
              Most companies are not limited by talent. They are limited by systems.
            </p>
          </div>
        </section>

        {/* CONTENT SECTIONS */}
        <section className="mx-auto max-w-3xl px-6 py-20 font-[family-name:var(--font-sans)] text-lg sm:text-xl text-white/80 leading-relaxed space-y-24">
          
          {/* Section 1 */}
          <div className="space-y-6">
            <p>
              Over the last decade, we adopted software to move faster. Instead, we created fragmentation. Every tool solved a piece. No system solved the whole.
            </p>
            <p>
              Communication lives in one place.<br />
              Data in another.<br />
              Execution somewhere else.<br />
              And AI is now layered on top of all of it.
            </p>
            <p className="font-bold text-white">
              This is not progress. It is accumulation.
            </p>
            <p>
              The result: Teams don’t operate. They coordinate. And the smaller the team, the worse it gets. Because they don’t have the luxury of inefficiency.
            </p>
            <p className="font-bold text-white text-2xl pt-6">
              We believe this is the defining problem of this era:<br />
              The orchestration gap.
            </p>
            <p>
              Not a lack of tools. A lack of systems that bring everything together and actually execute.
            </p>
          </div>

          {/* Section 2 */}
          <div className="space-y-6 border-l-2 border-[var(--cyan)] pl-8">
            <h2 className="text-3xl font-bold text-white font-[family-name:var(--font-display)] mb-8">
              So we built BOS.
            </h2>
            <p>
              Not as another tool. But as the system that replaces the need for them.
            </p>
            <div className="text-white/80">
              BOS is where:
              <ul className="mt-4 space-y-2 text-white font-semibold">
                <li>→ Work happens</li>
                <li>→ Decisions are made</li>
                <li>→ Execution is orchestrated</li>
              </ul>
            </div>
            <p>Across humans and intelligent agents.</p>
            <p className="font-bold text-[var(--cyan)] text-2xl mt-8">
              It is not automation. It is orchestration.
            </p>
          </div>

          {/* Section 3 */}
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-white font-[family-name:var(--font-display)] mb-8">
              Technology should expand human potential. Not replace it.
            </h2>
            <p>
              We reject the idea of the one-person company powered entirely by AI. We believe in teams. Better equipped. Better aligned. Exponentially more capable.
            </p>
            <p>
              Because the future of business is not human or AI. It is both. Working in balance.
            </p>
            <p>
              And for the first time: That power is not reserved for enterprises. It belongs to everyone.
            </p>
            <p className="font-bold text-white text-2xl mt-8 text-center bg-white/5 py-10 rounded-2xl">
              This is BOS.<br />
              <span className="text-[var(--cyan)]">Run your business on it.</span>
            </p>
          </div>

          {/* Section 4 */}
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-white font-[family-name:var(--font-display)] mb-8">
              Everyone is pitching power. We’re backing the people who never had it.
            </h2>
            <p>
              For years, software was sold as use. In reality, it became dependency. The more tools you added, the more control you lost. The more you scaled, the more you paid.
            </p>
            <p>
              And somehow, the smallest teams carried the heaviest burden.
            </p>
            <p className="font-bold text-white">
              This is where we start. We are the backers of the little guy. Not as a slogan. As a position.
            </p>
            <p>
              The small business owner running operations out of chaos.<br />
              The founder duct-taping 12 tools just to stay alive.<br />
              The team that doesn’t have time to “learn another system.”
            </p>
            <p className="font-bold text-white text-2xl pt-6">
              You were never the problem. The system was.
            </p>
            <p>
              We didn’t build BOS for enterprises trying to optimize 1%. We built it for people trying to survive 100%.
            </p>
          </div>

          {/* Section 5 */}
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-white font-[family-name:var(--font-display)] mb-8">
              We are the disrupters of big tech.
            </h2>
            <p>
              Not by competing with them. By removing the need for them.
            </p>
            <p>
              Every tool you use today wants a seat, a subscription, a dependency.<br />
              Slack wants your communication.<br />
              CRM wants your pipeline.<br />
              PM tools want your execution.<br />
              AI tools want your prompts.
            </p>
            <p className="font-bold text-white text-2xl pt-6">
              No one owns the outcome. So we rebuilt the model.
            </p>
            <p>
              One system. One orchestration layer. Where work actually happens. Where agents execute. Where humans stay in control.
            </p>
            <p className="font-semibold text-[var(--cyan)]">
              No dashboards to manage.<br />
              No workflows to babysit.<br />
              No stack to maintain.<br />
              Just outcomes.
            </p>
          </div>

          {/* Section 6 */}
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-white font-[family-name:var(--font-display)] mb-8">
              We are building a human-first golden age.
            </h2>
            <p>
              Not AI replacing people. AI supporting people.
            </p>
            <p>
              There’s a version of the future being pushed right now: One person. Hundred agents. Zero team. We don’t believe in that.
            </p>
            <p>
              We believe in better teams. Smarter execution. Less noise. More creation.
            </p>
            <p className="font-bold text-white text-2xl pt-4">
              Humans lead. Agents assist. Systems orchestrate.
            </p>
            <p>That’s the balance.</p>
          </div>

          {/* Conclusion */}
          <div className="text-center pt-20 border-t border-white/10 space-y-6">
            <h2 className="text-4xl font-bold text-white font-[family-name:var(--font-display)]">
              This is the underdog story.
            </h2>
            <p>
              Because the incumbents don’t break themselves.<br />
              Because the system won’t fix itself.<br />
              Because the people building real businesses don’t have time to wait.
            </p>
            <p className="text-[var(--cyan)] font-bold text-xl pt-6">
              So we’re not asking for permission.<br />
              We’re not fitting into a category.<br />
              We’re not building another tool.<br />
              We’re rebuilding how businesses run.
            </p>
          </div>

        </section>

        {/* CTA */}
        <section className="bg-[#080814] px-6 py-32 text-center">
          <div className="mx-auto max-w-3xl">
            <h2 className="mb-10 font-[family-name:var(--font-display)] text-[clamp(2.5rem,5vw,4.5rem)] font-bold leading-tight text-white">
              Join the shift.
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
