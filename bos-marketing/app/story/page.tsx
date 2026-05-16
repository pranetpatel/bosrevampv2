"use client";

import Link from "next/link";
import { SiteNav } from "@/components/site-nav";
import { SiteFooter } from "@/components/site-footer";

export default function StoryPage() {
  return (
    <>
      <SiteNav alwaysSolid />

      <main className="bg-[var(--surface-dark)] text-white">
        {/* HERO SECTION */}
        <section className="relative flex min-h-[60vh] flex-col items-center justify-center px-6 pt-40 pb-20 text-center overflow-hidden">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_40%,rgba(100,60,200,0.15),transparent_70%)]" />
          <div className="relative z-10 mx-auto max-w-4xl">
            <h1 className="mb-6 font-[family-name:var(--font-display)] text-[clamp(3.5rem,8vw,6rem)] font-bold leading-[1.1] tracking-tight text-white">
              The BOS Story
            </h1>
            <p className="mx-auto mt-4 font-[family-name:var(--font-sans)] text-[clamp(1.2rem,2vw,1.5rem)] text-white/60">
              The system was never built for you.<br />So we rebuilt it.
            </p>
          </div>
        </section>

        {/* NARRATIVE SECTIONS */}
        <section className="mx-auto max-w-3xl px-6 py-20 font-[family-name:var(--font-sans)] text-lg sm:text-xl text-white/80 leading-relaxed space-y-16">
          
          <div className="space-y-6">
            <p>I didn’t wake up one day and decide to build another software company.</p>
            <p className="font-bold text-white text-2xl">I got tired.</p>
            <p>
              Tired of watching good people… smart people… hardworking teams… lose to systems that made no sense.
            </p>
            <p>
              Because here’s the truth no one says out loud: Most businesses are not failing because they’re bad. They’re failing because they’re duct-taping their company together.
            </p>
          </div>

          <div className="space-y-6 border-l-2 border-[var(--cyan)] pl-8">
            <p>You’ve seen it.</p>
            <ul className="space-y-2 text-white/70">
              <li>• Slack for messages.</li>
              <li>• CRM for deals.</li>
              <li>• Notion for docs.</li>
              <li>• ClickUp for tasks.</li>
              <li>• Zapier holding it all together like glue.</li>
              <li>• And now AI tools on top of that mess.</li>
            </ul>
            <p className="font-bold text-white">
              And somehow… you’re still the one doing the work. You’re the integration. You’re the workflow. You’re the system.
            </p>
            <p>
              And the bigger your stack gets… the more it feels like you’re managing software instead of running a business.
            </p>
          </div>

          <div className="space-y-6">
            <p>That’s when it clicked for me.</p>
            <p className="font-bold text-[var(--orchid)] text-2xl">
              This isn’t a productivity problem. This isn’t an AI problem. This is a system problem.
            </p>
            <p>
              We built an entire generation of software… where every company owns a piece of your business… but no one owns the outcome.
            </p>
            <p>
              So what happens? Nothing actually runs. Everything just… waits on you. Follow-ups wait on you. Reports wait on you. Decisions wait on you. Execution waits on you.
            </p>
            <p className="font-bold text-white pt-4">
              And if you stop for a second? Everything slows down.
            </p>
            <p>
              That’s not use. That’s a bottleneck disguised as productivity.
            </p>
          </div>

          <div className="space-y-6">
            <p className="text-2xl font-bold text-white">So we stopped asking: “How do we build a better tool?”</p>
            <p className="text-2xl font-bold text-[var(--cyan)]">And started asking: “What would it look like if the business actually ran itself?”</p>
            <p>
              Not automation. Not scripts. Not workflows you have to babysit. A real system.
            </p>
            <p className="font-bold text-white text-3xl pt-8 pb-4">
              That’s what BOS is.
            </p>
            <p>
              BOS is the first time your business doesn’t live across 10 tools. It lives in one place. You don’t log in to “manage things.” You show up to see what’s already moving.
            </p>
            <div className="bg-[#080814] p-6 rounded-2xl border border-white/10 space-y-4 text-base mt-6">
              <p>You say: <strong>“Follow up with every lead from last week.”</strong><br/><span className="text-[var(--cyan)]">It’s done.</span></p>
              <p><strong>“Prep me for this meeting.”</strong><br/><span className="text-[var(--cyan)]">Done.</span></p>
              <p><strong>“Onboard this new hire.”</strong><br/><span className="text-[var(--cyan)]">Already in motion.</span></p>
            </div>
            <p className="pt-4">
              No switching. No chasing. No rebuilding workflows every time something changes. Just execution.
            </p>
          </div>

          <div className="space-y-6">
            <p className="font-bold text-white text-2xl">And here’s the part most people get wrong:</p>
            <p>This isn’t about replacing people.</p>
            <p>
              I don’t believe in the “one person + 100 agents” future. That’s not a company. That’s isolation with better tools.
            </p>
            <p className="font-bold text-[var(--orchid)]">
              I believe in teams. Real teams.
            </p>
            <p>
              But teams that aren’t drowning in coordination. Teams that aren’t stuck updating systems all day. Teams that actually… build.
            </p>
            <p className="font-bold text-white text-2xl pt-4">
              Humans lead. Agents support. The system runs.
            </p>
            <p>That’s the shift.</p>
          </div>

          <div className="space-y-6 border-l-2 border-[var(--cyan)] pl-8 pt-8">
            <p>And if you’re a small team… this matters even more.</p>
            <p>
              Because you don’t have layers. You don’t have time to “manage work.” You just need your business to move.
            </p>
            <p className="font-bold text-white text-2xl">
              BOS is for you.
            </p>
            <p>
              Not the enterprise with 12 departments and endless process. The builder. The operator. The underdog. The one trying to do something real… without getting buried in tools.
            </p>
            <p className="font-bold text-[var(--cyan)] text-2xl pt-4">
              Because the truth is… you never needed more software. You needed a system.
            </p>
            <p>And for the first time… you actually have one.</p>
          </div>

        </section>

        {/* CTA */}
        <section className="bg-[#080814] px-6 py-32 text-center">
          <div className="mx-auto max-w-3xl">
            <h2 className="mb-10 font-[family-name:var(--font-display)] text-[clamp(2.5rem,5vw,4.5rem)] font-bold leading-tight text-white">
              Run your business on BOS.
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
