/** Site copy — extend per page as needed. */

export type PricingChapter = {
  id: string;
  title: string;
  body: string;
  bullets?: readonly string[];
};

export type PricingCard = {
  id: string;
  name: string;
  priceLine: string;
  blurb: string;
  features: readonly string[];
  highlighted?: boolean;
};

export const COPY = {
  pages: {
    pricing: {
      eyebrow: "Pricing",
      title: "Pay when the business runs.",
      intro:
        "No seat tax. No tab limits. We align cost with agents activated, execution delivered, and outcomes created — so value tracks how much BOS actually moves for you.",
      ctaLabel: "Book a walkthrough",
      ctaHref: "/demo",
      chapters: [
        {
          id: "model",
          title: "Execution-based, not seat-based",
          body:
            "Traditional stacks scale cost with headcount while coordination tax grows faster. BOS monetizes movement: orchestration, audited actions, and consolidated stack value in one view.",
          bullets: [
            "Agents activated — not chairs filled",
            "Outcomes over orchestration overhead",
            "One system replaces stitched categories",
          ],
        },
        {
          id: "stack",
          title: "See your stack in one pass",
          body:
            "Model chat, project, CRM, automation, and AI spend together. Surface duplicate handoffs, then project consolidation and audited execution lift before you commit.",
          bullets: [
            "Five categories benchmarked side by side",
            "Handoff waste mapped automatically",
            "ROI narrative you can share internally",
          ],
        },
        {
          id: "editions",
          title: "Editions that scale with you",
          body:
            "Start where execution pain is highest — usually follow-ups and pipeline — then expand orchestration across teams as wins compound.",
        },
      ] as const satisfies readonly PricingChapter[],
      cards: [
        {
          id: "launch",
          name: "Launch",
          priceLine: "From $X / mo",
          blurb: "Core orchestration for small teams replacing their first tools.",
          features: [
            "BOS Chat + Project fx",
            "Starter agents pack",
            "Email + calendar sync",
          ],
        },
        {
          id: "scale",
          name: "Scale",
          priceLine: "Custom",
          blurb: "Full execution layer with deeper agents, governance, and integrations.",
          features: [
            "Everything in Launch",
            "Advanced agents + audit trail",
            "CRM + ops integrations",
            "Priority onboarding",
          ],
          highlighted: true,
        },
        {
          id: "enterprise",
          name: "Enterprise",
          priceLine: "Let's talk",
          blurb: "Multi-team orchestration, identity graph, and compliance-aligned rollout.",
          features: [
            "Dedicated success",
            "Custom agent packs",
            "SLA + security review",
          ],
        },
      ] as const satisfies readonly PricingCard[],
    },
  },
} as const;
