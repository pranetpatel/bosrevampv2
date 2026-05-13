import { InnerPageShell } from "@/components/inner-page-shell";
import { MotionSection } from "@/components/motion-section";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Manifesto",
  description:
    "The orchestration gap — BOS as the system that executes, not another tool.",
};

export default function ManifestoPage() {
  return (
    <InnerPageShell>
      <main className="bg-[var(--background)] px-6 pb-24 pt-28 text-[var(--foreground)] md:px-14">
        <div className="mx-auto max-w-3xl">
          <MotionSection>
            <h1 className="font-[family-name:var(--font-display)] text-[clamp(2rem,4vw,3.25rem)] font-semibold leading-[1.15] tracking-tight text-white">
              The system was never built for you.
            </h1>
            <p className="mt-6 font-[family-name:var(--font-sans)] text-lg text-white/65">
              Companies are limited by fragmentation — not talent. BOS is the orchestration
              layer where work runs.
            </p>
          </MotionSection>

          <MotionSection className="mt-16" delay={0.05}>
            <h2 className="font-[family-name:var(--font-display)] text-xl font-semibold text-white">
              Accumulation, not progress
            </h2>
            <p className="mt-4 font-[family-name:var(--font-sans)] text-white/60">
              Every tool solved a piece. No system solved the whole. Teams coordinate instead
              of operate — and small teams pay the highest tax.
            </p>
          </MotionSection>

          <MotionSection className="mt-14" delay={0.08}>
            <h2 className="font-[family-name:var(--font-display)] text-xl font-semibold text-white">
              Orchestration, not automation
            </h2>
            <p className="mt-4 font-[family-name:var(--font-sans)] text-white/60">
              BOS is where work happens, decisions move, and execution is orchestrated across
              humans and agents — technology expanding human potential, not replacing it.
            </p>
          </MotionSection>

          <MotionSection className="mt-14" delay={0.1}>
            <h2 className="font-[family-name:var(--font-display)] text-xl font-semibold text-white">
              For everyone
            </h2>
            <p className="mt-4 font-[family-name:var(--font-sans)] text-white/60">
              That power is not reserved for enterprises. We back builders and operators who
              never had it — work made simple, outcomes over overhead.
            </p>
            <p className="mt-10">
              <Link
                href="/"
                className="font-[family-name:var(--font-ui)] text-sm font-semibold text-[var(--cyan)] hover:underline"
              >
                ← Home
              </Link>
            </p>
          </MotionSection>
        </div>
      </main>
    </InnerPageShell>
  );
}
