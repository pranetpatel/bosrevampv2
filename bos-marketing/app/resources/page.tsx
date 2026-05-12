import Link from "next/link";
import { SiteFooter } from "@/components/site-footer";
import { SiteNav } from "@/components/site-nav";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Resources",
  description:
    "Playbooks, guides, and documentation to run your business on BOS.",
};

const sections = [
  {
    title: "Start here",
    items: ["What is BOS?", "How BOS works", "BOS vs traditional tools"],
  },
  {
    title: "Playbooks",
    items: [
      "Replace your tool stack",
      "Sales execution",
      "Operations system",
      "Founder system",
    ],
  },
  {
    title: "Agent library",
    items: [
      "Sales follow-up",
      "Meeting agent",
      "Operations agent",
      "Support agent",
    ],
  },
];

export default function ResourcesPage() {
  return (
    <>
      <SiteNav alwaysSolid />
      <main className="bg-[var(--background)] px-6 pb-24 pt-28 text-[var(--foreground)] md:px-14">
        <div className="mx-auto max-w-6xl">
          <h1 className="font-[family-name:var(--font-display)] text-[clamp(2rem,4vw,3.25rem)] font-semibold leading-[1.4] tracking-tight text-white">
            Resources
          </h1>
          <p className="mt-4 max-w-2xl font-[family-name:var(--font-sans)] text-lg text-white/65">
            Learn how to move from fragmented tools to a system that executes. Deep
            articles and downloads will be linked here.
          </p>
          <div className="mt-16 grid gap-12 md:grid-cols-3">
            {sections.map((s) => (
              <section key={s.title}>
                <h2 className="font-[family-name:var(--font-display)] text-xl font-semibold leading-[1.4] text-white">
                  {s.title}
                </h2>
                <ul className="mt-6 space-y-3 font-[family-name:var(--font-sans)] text-sm text-white/60">
                  {s.items.map((item) => (
                    <li key={item}>
                      <span className="text-[var(--cyan)]">→</span> {item}
                    </li>
                  ))}
                </ul>
              </section>
            ))}
          </div>
          <p className="mt-16 text-center text-sm text-white/45">
            <Link href="/" className="font-semibold text-[var(--cyan)] hover:underline">
              Back to home
            </Link>
          </p>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
