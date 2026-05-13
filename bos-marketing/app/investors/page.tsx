import { InnerPageShell } from "@/components/inner-page-shell";
import { MotionSection } from "@/components/motion-section";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Investors",
  description:
    "The execution layer for modern businesses — orchestration over fragmentation, outcomes over seats.",
};

export default function InvestorsPage() {
  return (
    <InnerPageShell>
      <main className="bg-[var(--background)] px-6 pb-24 pt-28 text-[var(--foreground)] md:px-14">
        <div className="mx-auto max-w-3xl">
          <MotionSection>
            <h1 className="font-[family-name:var(--font-display)] text-[clamp(2rem,4vw,3.25rem)] font-semibold leading-[1.15] tracking-tight text-white">
              Software didn’t fix work. It buried it.
            </h1>
            <p className="mt-6 font-[family-name:var(--font-sans)] text-lg text-white/65">
              More tools meant more coordination — and the smallest teams paid the highest
              price. BOS is the system that runs the business: work, decisions, execution in one
              place.
            </p>
          </MotionSection>

          <MotionSection className="mt-16" delay={0.05}>
            <h2 className="font-[family-name:var(--font-display)] text-xl font-semibold text-white">
              SaaS scaled dependency
            </h2>
            <p className="mt-4 font-[family-name:var(--font-sans)] text-white/60">
              Every tool wants data, workflow, attention, and budget — no one owns the outcome.
              BOS removes dashboards, workflow babysitting, and stack sprawl; the business moves
              without you pushing each step.
            </p>
          </MotionSection>

          <MotionSection className="mt-14" delay={0.08}>
            <h2 className="font-[family-name:var(--font-display)] text-xl font-semibold text-white">
              Why incumbents lose
            </h2>
            <p className="mt-4 font-[family-name:var(--font-sans)] text-white/60">
              Their models depend on fragmentation — more seats, more features, more tools. We
              monetize movement: agents activated, execution delivered, outcomes created.
            </p>
          </MotionSection>

          <MotionSection className="mt-14" delay={0.1}>
            <h2 className="font-[family-name:var(--font-display)] text-xl font-semibold text-white">
              The bet
            </h2>
            <p className="mt-4 font-[family-name:var(--font-sans)] text-white/60">
              The next fifteen years are about running businesses, not managing software. BOS is
              first to own that orchestration layer for operators and agencies — then the
              enterprise.
            </p>
            <p className="mt-10">
              <Link
                href="/pricing"
                className="font-[family-name:var(--font-ui)] text-sm font-semibold text-[var(--cyan)] hover:underline"
              >
                View pricing →
              </Link>
            </p>
          </MotionSection>
        </div>
      </main>
    </InnerPageShell>
  );
}
