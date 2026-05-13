import { InnerPageShell } from "@/components/inner-page-shell";
import PricingExperience from "@/components/PricingPage";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pricing",
  description: "BOS editions — execution-aligned pricing and stack value in one view.",
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
