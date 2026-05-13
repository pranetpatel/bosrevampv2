import { InnerPageShell } from "@/components/inner-page-shell";
import { MotionSection } from "@/components/motion-section";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Industry",
  description:
    "Agencies and consultancies — client delivery and team operations in one orchestration layer.",
};

export default function IndustryPage() {
  return (
    <InnerPageShell>
      <main className="bg-[var(--background)] px-6 pb-24 pt-28 text-[var(--foreground)] md:px-14">
        <div className="mx-auto max-w-3xl">
          <MotionSection>
            <h1 className="font-[family-name:var(--font-display)] text-[clamp(2rem,4vw,3.25rem)] font-semibold leading-[1.15] tracking-tight text-white">
              Where you play
            </h1>
            <p className="mt-6 font-[family-name:var(--font-sans)] text-lg text-white/65">
              Team collaboration plus client delivery — the system where service businesses run
              daily work, not “another AI app.”
            </p>
          </MotionSection>

          <MotionSection className="mt-16" delay={0.05}>
            <h2 className="font-[family-name:var(--font-display)] text-xl font-semibold text-white">
              Beachhead
            </h2>
            <p className="mt-4 font-[family-name:var(--font-sans)] text-white/60">
              Mid-sized agencies and consultancies — marketing, creative, web, RevOps, AI
              automation shops. Founders and ops leads who live in Slack, juggle clients, and
              duct-tape five to eight tools — and can switch fast.
            </p>
          </MotionSection>

          <MotionSection className="mt-14" delay={0.08}>
            <h2 className="font-[family-name:var(--font-display)] text-xl font-semibold text-white">
              The wedge
            </h2>
            <p className="mt-4 font-[family-name:var(--font-sans)] text-white/60">
              Work is fragmented across tools, but execution happens in conversations. BOS is
              where your team talks, manages clients, tracks work, and stores everything — with
              agents that actually execute alongside you.
            </p>
          </MotionSection>

          <MotionSection className="mt-14" delay={0.1}>
            <p className="font-[family-name:var(--font-display)] text-xl font-semibold leading-snug text-white">
              BOS is where agencies run their entire business — not just talk about it.
            </p>
          </MotionSection>
        </div>
      </main>
    </InnerPageShell>
  );
}
