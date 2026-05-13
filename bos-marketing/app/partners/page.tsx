import { InnerPageShell } from "@/components/inner-page-shell";
import { MotionSection } from "@/components/motion-section";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Partners",
  description: "BOS Ambassador Program — recurring revenue when your clients run on execution.",
};

const options = [
  {
    name: "Referral",
    involvement: "Low",
    you: "Introduce BOS to clients.",
    earn: "20% recurring (12 months).",
    best: "Passive referrals.",
  },
  {
    name: "Co-sell",
    involvement: "Moderate",
    you: "Position BOS in your program; join calls if needed.",
    earn: "30% recurring (12–18 months).",
    best: "Trainers and consultants integrating BOS.",
  },
  {
    name: "Program",
    involvement: "High",
    you: "Embed BOS into your offer or cohort.",
    earn: "30–40% recurring or wholesale + your margin.",
    best: "Full integration, highest upside.",
  },
];

export default function PartnersPage() {
  return (
    <InnerPageShell>
      <main className="bg-[var(--background)] px-6 pb-24 pt-28 text-[var(--foreground)] md:px-14">
        <div className="mx-auto max-w-4xl">
          <MotionSection>
            <h1 className="font-[family-name:var(--font-display)] text-[clamp(2rem,4vw,3.25rem)] font-semibold leading-[1.15] tracking-tight text-white">
              Ambassador program
            </h1>
            <p className="mt-6 max-w-2xl font-[family-name:var(--font-sans)] text-lg text-white/65">
              Turn clients into execution machines — GenieAI handles product, setup, and
              support; you share in revenue as they scale.
            </p>
          </MotionSection>

          <MotionSection className="mt-14" delay={0.05}>
            <ul className="space-y-3 font-[family-name:var(--font-sans)] text-sm text-white/70">
              <li className="flex gap-2">
                <span className="text-[var(--orchid)]">→</span> Measurable client outcomes, not
                slides alone
              </li>
              <li className="flex gap-2">
                <span className="text-[var(--orchid)]">→</span> Higher retention and program value
              </li>
              <li className="flex gap-2">
                <span className="text-[var(--orchid)]">→</span> Recurring revenue as they grow on
                BOS
              </li>
            </ul>
          </MotionSection>

          <div className="mt-16 grid gap-6 md:grid-cols-3">
            {options.map((o, i) => (
              <MotionSection key={o.name} delay={i * 0.06}>
                <article className="flex h-full flex-col rounded-2xl border border-white/10 bg-white/[0.03] p-6">
                  <h2 className="font-[family-name:var(--font-display)] text-lg font-semibold text-white">
                    {o.name}
                  </h2>
                  <p className="mt-2 text-xs uppercase tracking-[0.14em] text-white/45">
                    {o.involvement} involvement
                  </p>
                  <p className="mt-4 flex-1 font-[family-name:var(--font-sans)] text-sm text-white/70">
                    {o.you}
                  </p>
                  <p className="mt-4 font-[family-name:var(--font-sans)] text-sm font-semibold text-[var(--cyan)]">
                    {o.earn}
                  </p>
                  <p className="mt-2 text-xs text-white/50">{o.best}</p>
                </article>
              </MotionSection>
            ))}
          </div>

          <MotionSection className="mt-14 text-center" delay={0.12}>
            <Link
              href="/demo"
              className="inline-flex rounded-full bg-[var(--orchid)] px-8 py-3 font-[family-name:var(--font-ui)] text-sm font-bold text-white transition hover:-translate-y-px"
            >
              Book a call
            </Link>
          </MotionSection>
        </div>
      </main>
    </InnerPageShell>
  );
}
