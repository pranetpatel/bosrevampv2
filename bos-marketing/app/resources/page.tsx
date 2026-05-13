import { InnerPageShell } from "@/components/inner-page-shell";
import { MotionSection } from "@/components/motion-section";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Resources",
  description:
    "Playbooks, guides, and documentation to run your business on BOS.",
};

const sections = [
  {
    title: "Start here",
    items: [
      { label: "What is BOS?", href: "/product", hint: "Modules and execution loop" },
      { label: "How BOS works", href: "/how-it-works", hint: "Message → outcome" },
      { label: "BOS vs traditional tools", href: "/compare", hint: "Categories vs one system" },
    ],
  },
  {
    title: "Playbooks",
    items: [
      { label: "Replace your tool stack", href: "/how-it-works", hint: "Migration mindset" },
      { label: "Sales execution", href: "/projects", hint: "Case patterns" },
      { label: "Operations system", href: "/projects", hint: "Ops case" },
      { label: "Founder system", href: "/investors", hint: "Why orchestration wins" },
    ],
  },
  {
    title: "Agent library",
    items: [
      { label: "Sales follow-up", href: "/product", hint: "Under Agent Builder" },
      { label: "Meeting agent", href: "/product", hint: "Scheduling + summaries" },
      { label: "Operations agent", href: "/product", hint: "Internal workflows" },
      { label: "Support agent", href: "/product", hint: "Knowledge + escalation" },
    ],
  },
];

export default function ResourcesPage() {
  return (
    <InnerPageShell>
      <main className="bg-[var(--background)] px-6 pb-24 pt-28 text-[var(--foreground)] md:px-14">
        <div className="mx-auto max-w-6xl">
          <MotionSection>
            <h1 className="font-[family-name:var(--font-display)] text-[clamp(2rem,4vw,3.25rem)] font-semibold leading-[1.4] tracking-tight text-white">
              Resources
            </h1>
            <p className="mt-4 max-w-2xl font-[family-name:var(--font-sans)] text-lg text-white/65">
              Move from fragmented tools to a system that executes — start here, then go deeper on
              product, flow, and proof.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/demo"
                className="inline-flex rounded-full bg-[var(--orchid)] px-6 py-2.5 font-[family-name:var(--font-ui)] text-sm font-bold text-white transition hover:-translate-y-px"
              >
                Watch demo
              </Link>
              <Link
                href="/pricing"
                className="inline-flex rounded-full border border-white/25 px-6 py-2.5 font-[family-name:var(--font-ui)] text-sm font-semibold text-white hover:border-white/45"
              >
                Pricing
              </Link>
            </div>
          </MotionSection>
          <div className="mt-16 grid gap-12 md:grid-cols-3">
            {sections.map((s, i) => (
              <MotionSection key={s.title} delay={i * 0.06}>
                <section>
                  <h2 className="font-[family-name:var(--font-display)] text-xl font-semibold leading-[1.4] text-white">
                    {s.title}
                  </h2>
                  <ul className="mt-6 space-y-4 font-[family-name:var(--font-sans)] text-sm">
                    {s.items.map((item) => (
                      <li key={item.label}>
                        <Link
                          href={item.href}
                          className="group block rounded-lg border border-transparent px-1 py-1 transition hover:border-white/10 hover:bg-white/[0.04]"
                        >
                          <span className="font-semibold text-white group-hover:text-[var(--cyan)]">
                            → {item.label}
                          </span>
                          <span className="mt-1 block text-white/45">{item.hint}</span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </section>
              </MotionSection>
            ))}
          </div>
          <p className="mt-16 text-center text-sm text-white/45">
            <Link href="/" className="font-semibold text-[var(--cyan)] hover:underline">
              Back to home
            </Link>
          </p>
        </div>
      </main>
    </InnerPageShell>
  );
}
