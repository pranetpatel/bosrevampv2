import { InnerPageShell } from "@/components/inner-page-shell";
import { MotionSection } from "@/components/motion-section";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Technology",
  description:
    "BOS — Business Orchestration System. Outcome-native execution for operators without enterprise overhead.",
};

export default function TechnologyPage() {
  return (
    <InnerPageShell>
      <main className="bg-[var(--background)] px-6 pb-24 pt-28 text-[var(--foreground)] md:px-14">
        <div className="mx-auto max-w-3xl">
          <MotionSection>
            <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-white/45">
              GenieAI
            </p>
            <h1 className="mt-4 font-[family-name:var(--font-display)] text-[clamp(2rem,4vw,3.25rem)] font-semibold leading-[1.15] tracking-tight text-white">
              BOS — Business Orchestration System
            </h1>
            <p className="mt-6 font-[family-name:var(--font-sans)] text-lg text-white/65">
              A unified layer where humans and AI agents operate as one workforce. You define
              outcomes; BOS executes across systems — without renting your operations across a
              dozen tools.
            </p>
          </MotionSection>

          <MotionSection className="mt-16" delay={0.05}>
            <h2 className="font-[family-name:var(--font-display)] text-xl font-semibold text-white">
              Why it exists
            </h2>
            <p className="mt-4 font-[family-name:var(--font-sans)] text-white/60">
              Software promised leverage and delivered fragmentation. BOS shifts power back to
              operators — from renting tools to owning execution.
            </p>
          </MotionSection>

          <MotionSection className="mt-14" delay={0.08}>
            <h2 className="font-[family-name:var(--font-display)] text-xl font-semibold text-white">
              What makes it different
            </h2>
            <p className="mt-4 font-[family-name:var(--font-sans)] text-white/60">
              Not automation alone — independence. Orchestration coordinates execution while
              abstracting complexity. As cloud removed managing servers, BOS removes managing
              operations.
            </p>
          </MotionSection>

          <MotionSection className="mt-14" delay={0.1}>
            <h2 className="font-[family-name:var(--font-display)] text-xl font-semibold text-white">
              Proof
            </h2>
            <p className="mt-4 font-[family-name:var(--font-sans)] text-white/60">
              Deployments across sales, operations, and support show coordinated agents, less
              tool dependency, faster responses — including first-time operators via BOS MBA.
            </p>
            <p className="mt-6 font-[family-name:var(--font-display)] text-lg text-white/90">
              BOS doesn’t help you use software. It makes software optional.
            </p>
          </MotionSection>
        </div>
      </main>
    </InnerPageShell>
  );
}
