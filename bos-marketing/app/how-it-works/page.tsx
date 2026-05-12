import Link from "next/link";
import { SiteFooter } from "@/components/site-footer";
import { SiteNav } from "@/components/site-nav";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "How it works",
  description:
    "From one message to complete execution — the BOS flow in five steps.",
};

const steps = [
  {
    title: "You describe it",
    body: "No forms or rigid workflow builders — say what needs to happen in plain language.",
  },
  {
    title: "BOS understands",
    body: "Context from conversations, CRM, files, and team structure informs the plan.",
  },
  {
    title: "Agents execute",
    body: "Email, tasks, CRM updates, documents, and scheduling happen automatically.",
  },
  {
    title: "Systems stay in sync",
    body: "Tasks, records, and logs update without manual data entry.",
  },
  {
    title: "You see results",
    body: "Notifications and chat bring completed work back to you — no chasing.",
  },
];

export default function HowItWorksPage() {
  return (
    <>
      <SiteNav alwaysSolid />
      <main className="bg-[var(--background)] px-6 pb-24 pt-28 md:px-14">
        <div className="mx-auto max-w-3xl">
          <h1 className="font-[family-name:var(--font-display)] text-[clamp(2rem,4vw,3.25rem)] font-semibold leading-[1.4] tracking-tight text-white">
            How BOS works
          </h1>
          <p className="mt-6 font-[family-name:var(--font-sans)] text-lg text-white/65">
            Work moves from one message to complete execution — continuously, not as a
            brittle checklist.
          </p>
          <ol className="mt-14 space-y-12 border-l-2 border-[var(--orchid)]/40 pl-10">
            {steps.map((s, i) => (
              <li key={s.title} className="relative">
                <span className="absolute -left-[51px] top-0 flex h-9 w-9 items-center justify-center rounded-full bg-[var(--orchid)] text-sm font-bold text-white">
                  {i + 1}
                </span>
                <h2 className="font-[family-name:var(--font-display)] text-xl font-semibold leading-[1.4] text-white">
                  {s.title}
                </h2>
                <p className="mt-3 font-[family-name:var(--font-sans)] text-white/60">
                  {s.body}
                </p>
              </li>
            ))}
          </ol>
          <div className="mt-16 rounded-2xl border border-white/10 bg-white/[0.04] p-8">
            <h2 className="font-[family-name:var(--font-display)] text-lg font-semibold leading-[1.4] text-white">
              Continuous loop
            </h2>
            <p className="mt-3 font-[family-name:var(--font-sans)] text-sm leading-relaxed text-white/60">
              Conversations create context → context triggers execution → execution
              updates systems → systems inform the next actions.{" "}
              <Link href="/demo" className="font-semibold text-[var(--cyan)] hover:underline">
                See a demo
              </Link>
              .
            </p>
          </div>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
