import { InnerPageShell } from "@/components/inner-page-shell";
import PricingExperience from "@/components/PricingPage";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Plans & Pricing — BOS Studio",
  description:
    "BOS Studio beta, Business Starter license, enterprise options, and BOS MBA — plans, compare, and FAQ.",
};

export default function PricingRoutePage() {
  return (
    <InnerPageShell>
      <main className="bg-[var(--background)] pb-24 pt-28 text-[var(--foreground)]">
        <PricingExperience />
      </main>
    </InnerPageShell>
  );
}
