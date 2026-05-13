import { InnerPageShell } from "@/components/inner-page-shell";
import { MotionSection } from "@/components/motion-section";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Story",
  description: "Why BOS — from fragmentation and duct-tape stacks to work made simple.",
};

export default function StoryPage() {
  return (
    <InnerPageShell>
      <main className="bg-[var(--background)] px-6 pb-24 pt-28 text-[var(--foreground)] md:px-14">
        <div className="mx-auto max-w-3xl">
          <MotionSection>
            <h1 className="font-[family-name:var(--font-display)] text-[clamp(2rem,4vw,3.25rem)] font-semibold leading-[1.15] tracking-tight text-white">
              The system was never built for you
            </h1>
            <p className="mt-6 font-[family-name:var(--font-sans)] text-lg text-white/65">
              Slack, CRM, Notion, ClickUp, Zapier, then AI on top — and you were still the
              integration, the workflow, the bottleneck. That is not a productivity problem. It is a
              system problem.
            </p>
          </MotionSection>

          <MotionSection className="mt-16" delay={0.05}>
            <h2 className="font-[family-name:var(--font-display)] text-xl font-semibold text-white">
              What we asked instead
            </h2>
            <p className="mt-4 font-[family-name:var(--font-sans)] text-white/60">
              Not “how do we build a better tool?” but what if the business actually ran — one
              place where follow-ups, prep, and onboarding are already in motion when you show up.
            </p>
          </MotionSection>

          <MotionSection className="mt-14" delay={0.08}>
            <h2 className="font-[family-name:var(--font-display)] text-xl font-semibold text-white">
              Humans lead. Agents support.
            </h2>
            <p className="mt-4 font-[family-name:var(--font-sans)] text-white/60">
              The future is not one person and a hundred agents in isolation — it is better teams
              with less coordination noise and more room to build. BOS is for builders and
              underdogs who need the business to move without drowning in software.
            </p>
          </MotionSection>

          <MotionSection className="mt-14" delay={0.1}>
            <p className="font-[family-name:var(--font-display)] text-lg font-semibold text-white">
              You never needed more software. You needed a system.
            </p>
            <p className="mt-8">
              <Link
                href="/manifesto"
                className="font-[family-name:var(--font-ui)] text-sm font-semibold text-[var(--cyan)] hover:underline"
              >
                Read the manifesto →
              </Link>
            </p>
          </MotionSection>
        </div>
      </main>
    </InnerPageShell>
  );
}
