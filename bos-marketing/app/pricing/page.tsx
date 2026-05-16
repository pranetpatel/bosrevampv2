import { InnerPageShell } from "@/components/inner-page-shell";
import StudioPlansPricing from "@/components/studio-pricing/StudioPlansPricing";

export const metadata = {
  title: "Plans & Pricing",
  description:
    "BOS Studio  -  one business license, one intelligence layer. Work made simple.",
};

export default function PricingPage() {
  return (
    <InnerPageShell>
      <StudioPlansPricing />
    </InnerPageShell>
  );
}
