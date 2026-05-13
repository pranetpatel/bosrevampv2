import { InnerPageShell } from "@/components/inner-page-shell";
import { MotionSection } from "@/components/motion-section";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Get started",
  description:
    "Pick how you want to start with BOS — explore plans, watch the product, or talk to the team.",
};

type StartPath = {
  eyebrow: string;
  title: string;
  desc: string;
  href: string;
  cta: string;
  tone: "primary" | "secondary";
};

const paths: StartPath[] = [
  {
    eyebrow: "Plans",
    title: "See pricing.",
    desc: "Studio beta, Business Starter, and enterprise. Find the edition that matches how your team operates today.",
    href: "/pricing",
    cta: "Explore plans",
    tone: "primary",
  },
  {
    eyebrow: "Demo",
    title: "Watch BOS run.",
    desc: "Full product walkthrough — intent in, execution out. Same flow your team will use in week one.",
    href: "/demo",
    cta: "Watch the demo",
    tone: "secondary",
  },
  {
    eyebrow: "Talk to us",
    title: "Bring your stack.",
    desc: "Tell us what you run, who runs it, and what's breaking. We map BOS onto your operation in one call.",
    href: "mailto:hello@bos.studio?subject=Get%20started%20with%20BOS",
    cta: "Contact the team",
    tone: "secondary",
  },
  {
    eyebrow: "Operators",
    title: "Train on BOS MBA.",
    desc: "An operator-grade curriculum for teams adopting BOS — orchestration, agents, and execution patterns.",
    href: "/mba",
    cta: "Explore BOS MBA",
    tone: "secondary",
  },
];

const steps = [
  {
    n: "01",
    label: "Pick a path",
    desc: "Plans, demo, or a call — start where it makes sense.",
  },
  {
    n: "02",
    label: "Map your work",
    desc: "We model your chats, projects, data, and agents onto BOS.",
  },
  {
    n: "03",
    label: "Operate from Day 1",
    desc: "Work moves through one layer — humans and agents in the same lane.",
  },
];

export default function GetStartedPage() {
  return (
    <InnerPageShell>
      <main className="relative overflow-hidden bg-[var(--background)] px-6 pb-32 pt-28 text-[var(--foreground)] md:px-14">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_50%_-10%,rgba(26,83,253,0.18),transparent_55%)]" />
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_85%_90%,rgba(218,52,241,0.12),transparent_50%)]" />

        <div className="relative mx-auto max-w-5xl">
          <MotionSection>
            <p className="font-[family-name:var(--font-ui)] text-[10px] font-bold uppercase tracking-[0.26em] text-[var(--cyan)]">
              Get started
            </p>
            <h1 className="mt-5 font-[family-name:var(--font-display)] text-[clamp(2.5rem,6vw,4.75rem)] font-semibold leading-[1.04] tracking-tight text-white">
              Run your business{" "}
              <span className="bg-gradient-to-r from-[var(--magenta)] via-[var(--orchid)] to-[var(--cyan)] bg-clip-text text-transparent">
                on BOS.
              </span>
            </h1>
            <p className="mt-6 max-w-2xl font-[family-name:var(--font-ui)] text-lg leading-relaxed text-white/65">
              No 6&ndash;month rollout. No army of consultants. Pick how you want to start &mdash;
              plans, a guided demo, or a direct conversation with our team.
            </p>
          </MotionSection>

          <MotionSection className="mt-14" delay={0.05}>
            <div className="grid gap-6 md:grid-cols-2">
              {paths.map((p) => {
                const isPrimary = p.tone === "primary";
                return (
                  <Link
                    key={p.href}
                    href={p.href}
                    className={`group relative flex h-full flex-col justify-between overflow-hidden rounded-2xl border p-8 backdrop-blur-md transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--cyan)] md:p-10 ${
                      isPrimary
                        ? "border-[var(--orchid)]/45 bg-[var(--orchid)]/[0.08] hover:border-[var(--cyan)]/55 hover:bg-[var(--orchid)]/[0.12]"
                        : "border-white/10 bg-white/[0.04] hover:border-[var(--orchid)]/30 hover:bg-[var(--orchid)]/[0.06]"
                    }`}
                  >
                    <div>
                      <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-[var(--cyan)]">
                        {p.eyebrow}
                      </p>
                      <h2 className="mt-5 font-[family-name:var(--font-display)] text-2xl font-semibold leading-[1.15] text-white md:text-3xl">
                        {p.title}
                      </h2>
                      <p className="mt-4 font-[family-name:var(--font-sans)] text-sm leading-relaxed text-white/60 md:text-base">
                        {p.desc}
                      </p>
                    </div>
                    <p
                      className={`mt-8 inline-flex items-center gap-2 font-[family-name:var(--font-ui)] text-[11px] font-bold uppercase tracking-[0.22em] transition-colors ${
                        isPrimary
                          ? "text-white group-hover:text-[var(--cyan)]"
                          : "text-white/75 group-hover:text-[var(--cyan)]"
                      }`}
                    >
                      {p.cta}
                      <span
                        aria-hidden
                        className="transition-transform duration-300 group-hover:translate-x-1"
                      >
                        &rarr;
                      </span>
                    </p>
                  </Link>
                );
              })}
            </div>
          </MotionSection>

          <MotionSection className="mt-24" delay={0.08}>
            <p className="font-[family-name:var(--font-ui)] text-[10px] font-bold uppercase tracking-[0.26em] text-white/45">
              What happens next
            </p>
            <div className="mt-8 grid gap-6 md:grid-cols-3">
              {steps.map((s) => (
                <div
                  key={s.n}
                  className="rounded-2xl border border-white/10 bg-white/[0.03] p-7 backdrop-blur-md"
                >
                  <span className="font-[family-name:var(--font-display)] text-3xl font-semibold text-[var(--orchid)]">
                    {s.n}
                  </span>
                  <h3 className="mt-4 font-[family-name:var(--font-display)] text-lg font-semibold text-white">
                    {s.label}
                  </h3>
                  <p className="mt-2 font-[family-name:var(--font-sans)] text-sm leading-relaxed text-white/55">
                    {s.desc}
                  </p>
                </div>
              ))}
            </div>
          </MotionSection>

          <MotionSection className="mt-20" delay={0.1}>
            <div className="flex flex-wrap items-center justify-between gap-4 border-t border-white/10 pt-10">
              <p className="font-[family-name:var(--font-ui)] text-sm text-white/55">
                Not sure where to start? Pricing is the fastest way in.
              </p>
              <Link
                href="/pricing"
                className="inline-flex items-center gap-2 rounded-full bg-[var(--orchid)] px-7 py-3 font-[family-name:var(--font-ui)] text-sm font-bold uppercase tracking-[0.14em] text-white shadow-[0_12px_40px_var(--purple-glow)] transition hover:-translate-y-0.5 hover:scale-[1.02] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--cyan)]"
              >
                See plans
                <span aria-hidden>&rarr;</span>
              </Link>
            </div>
          </MotionSection>
        </div>
      </main>
    </InnerPageShell>
  );
}
