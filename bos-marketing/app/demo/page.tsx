import Link from "next/link";
import { SiteFooter } from "@/components/site-footer";
import { SiteNav } from "@/components/site-nav";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Demo",
  description: "Watch BOS in action — message to execution in one system.",
};

export default function DemoPage() {
  return (
    <>
      <SiteNav alwaysSolid />
      <main className="bg-[var(--background)] px-6 pb-24 pt-28 text-white md:px-14">
        <div className="mx-auto max-w-4xl text-center">
          <h1 className="font-[family-name:var(--font-display)] text-[clamp(2rem,4vw,3.25rem)] font-semibold leading-[1.4] tracking-tight">
            Watch BOS
          </h1>
          <p className="mx-auto mt-6 max-w-xl font-[family-name:var(--font-sans)] text-lg text-white/70">
            Embed your product demo or Loom here. Placeholder below keeps layout ready
            for video.
          </p>
          <div className="relative mt-14 aspect-video w-full overflow-hidden rounded-2xl border border-white/15 bg-black/40 shadow-[0_24px_80px_rgba(26,83,253,0.22)]">
            <div className="absolute inset-0 flex items-center justify-center font-[family-name:var(--font-sans)] text-white/40">
              Demo video placeholder
            </div>
          </div>
          <Link
            href="/"
            className="mt-12 inline-flex font-[family-name:var(--font-ui)] text-sm font-semibold text-[var(--cyan)] hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--orchid)]"
          >
            ← Back to home
          </Link>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
