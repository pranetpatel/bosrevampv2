import Link from "next/link";
import { SiteFooter } from "@/components/site-footer";
import { SiteNav } from "@/components/site-nav";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "BOS MBA",
  description:
    "Build a company inside BOS — live operating environment for modern builders.",
};

export default function MbaPage() {
  return (
    <>
      <SiteNav alwaysSolid />
      <main className="bg-[var(--background)] px-6 pb-24 pt-28 md:px-14">
        <div className="mx-auto max-w-3xl">
          <p className="font-[family-name:var(--font-sans)] text-[11px] font-bold uppercase tracking-[0.22em] text-white/45">
            MBA Program
          </p>
          <h1 className="mt-4 font-[family-name:var(--font-display)] text-[clamp(2.25rem,5vw,3.5rem)] font-semibold leading-[1.4] tracking-tight text-white">
            Build a company. Not a case study.
          </h1>
          <p className="mt-6 font-[family-name:var(--font-sans)] text-lg leading-relaxed text-white/65">
            The MBA for the AI era — live inside BOS. Full narrative, cohort details,
            and application flow will land here.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <span className="inline-flex rounded-full bg-[var(--orchid)] px-8 py-3 font-[family-name:var(--font-ui)] text-sm font-bold text-white">
              Apply (coming soon)
            </span>
            <Link
              href="/how-it-works"
              className="inline-flex rounded-full border border-white/25 bg-white/[0.06] px-8 py-3 font-[family-name:var(--font-ui)] text-sm font-semibold text-white backdrop-blur-sm transition hover:border-white/45"
            >
              How BOS works
            </Link>
          </div>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
