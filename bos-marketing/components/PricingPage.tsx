import EditionsPage from '@/components/interactive/EditionsPage';
import type { ExecutionScenario } from '@/components/interactive/AgentExecutionPanel';
import { COPY } from '@/lib/constants';

const pricingScenario: ExecutionScenario = {
  id: 'pricing-stack',
  label: 'Stack calculator',
  color: '#DA34F1',
  prompt: 'Compare our current stack to BOS for a 25-person agency.',
  agents: [
    { name: 'Cost Agent', action: 'Models chat, project, CRM, automation, and AI spend.', status: 'Stack modeled' },
    { name: 'Workflow Agent', action: 'Surfaces duplicate coordination and handoff waste.', status: 'Waste mapped' },
    { name: 'ROI Agent', action: 'Projects consolidation and audited execution lift.', status: 'ROI ready' },
  ],
  audit: [
    { ts: '15:00', event: 'Pricing comparison started' },
    { ts: '15:01', event: 'Five tool categories benchmarked' },
    { ts: '15:03', event: 'Consolidation and orchestration model generated' },
  ],
  outcome: 'Buyers see cost, handoff tax, and audited execution value in one view.',
};

export default function PricingPage() {
  const p = COPY.pages.pricing;

  return (
    <EditionsPage
      eyebrow={p.eyebrow}
      title={p.title}
      intro={p.intro}
      orbMode="collapse"
      ctaLabel={p.ctaLabel}
      ctaHref={p.ctaHref}
      chapters={[...p.chapters]}
      cards={[...p.cards]}
      scenario={pricingScenario}
    />
  );
}
