import { InnerPageShell } from "@/components/inner-page-shell";
import { FlowShowcaseVideo } from "@/components/flow-showcase-video";
import { MotionSection } from "@/components/motion-section";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Demo",
  description: "Watch BOS in action — message to execution, work made simple.",
};

export default function DemoPage() {
  return (
    <InnerPageShell>
      <main className="bg-[var(--background)] px-6 pb-24 pt-28 text-[var(--foreground)] md:px-14">
        <div className="mx-auto max-w-4xl text-center">
          <MotionSection>
            <h1 className="font-[family-name:var(--font-display)] text-[clamp(2rem,4vw,3.25rem)] font-semibold leading-[1.4] tracking-tight text-white">
              Watch BOS
            </h1>
            <p className="mx-auto mt-6 max-w-xl font-[family-name:var(--font-sans)] text-lg text-white/70">
              Full product walkthrough. Intent in, execution out.
            </p>
          </MotionSection>
          <MotionSection className="mt-14" delay={0.06}>
            <FlowShowcaseVideo />
          </MotionSection>
          <p className="mt-12 flex flex-wrap justify-center gap-6 font-[family-name:var(--font-ui)] text-sm">
            <Link
              href="/pricing"
              className="font-semibold text-[var(--cyan)] hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--orchid)]"
            >
              Pricing
            </Link>
            <Link
              href="/"
              className="font-semibold text-white/60 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--orchid)]"
            >
              ← Back to home
            </Link>
          </p>
        </div>
      </main>
    </InnerPageShell>
  );
}
