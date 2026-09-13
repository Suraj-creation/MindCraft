import React, { useRef, useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { useNavigation } from '../context/NavigationContext';

interface EngineStage {
  id: string;
  step: string;
  name: string;
  discipline: string;
  subpage: string;
  from: string;
  method: string;
  to: string;
}

const ENGINE_STAGES: EngineStage[] = [
  {
    id: 'research',
    step: '01',
    name: 'Empirical research',
    discipline: 'Market Research',
    subpage: '/what-we-do/market-research',
    from: 'Uncertain market signals, regulatory variance, distributor ambiguity',
    method: 'Primary quantitative and qualitative fieldwork across African markets',
    to: 'Verified market realities, KOL influence mapping, pricing structures',
  },
  {
    id: 'strategy',
    step: '02',
    name: 'Corporate strategy',
    discipline: 'Business Consulting',
    subpage: '/what-we-do/business-consulting',
    from: 'Empirical market intelligence and institutional baseline capability',
    method: 'Target operating model design, growth modelling, policy harmonisation',
    to: 'Operational roadmaps, market-entry playbooks, regulatory dossiers',
  },
  {
    id: 'technology',
    step: '03',
    name: 'Production systems',
    discipline: 'AI Enterprise Solutions',
    subpage: '/what-we-do/ai-enterprise-solutions',
    from: 'Enterprise documents, clinical records, ERP and HIS pipelines',
    method: 'Private model deployment, document extraction, process automation',
    to: 'Production architecture built for secure on-premises or cloud operation',
  },
  {
    id: 'capability',
    step: '04',
    name: 'Human capability',
    discipline: 'AI Training',
    subpage: '/what-we-do/ai-training',
    from: 'Executive goals, functional workflows, workforce skill gaps',
    method: 'Board briefings, applied function-specific training, champion programmes',
    to: 'Institutional fluency and internal practitioners who can carry it forward',
  },
  {
    id: 'adoption',
    step: '05',
    name: 'Operational embedment',
    discipline: 'Cross-pillar governance',
    subpage: '/how-we-work',
    from: 'Deployed systems and trained functional teams',
    method: 'Change management, review cycles, governance and security audit',
    to: 'Routines designed to hold after the engagement ends',
  },
  {
    id: 'impact',
    step: '06',
    name: 'Measurable impact',
    discipline: 'Outcomes',
    subpage: '/explore',
    from: 'Live operations across commercial and clinical corridors',
    method: 'Indicator tracking against the success criteria set at Discovery',
    to: 'Evidence that feeds the next question — the loop closes here',
  },
];

export const EngineVisualSpine: React.FC<{ className?: string }> = ({ className = '' }) => {
  const { navigate } = useNavigation();
  const [activeId, setActiveId] = useState<string>('research');
  const refs = useRef<(HTMLButtonElement | null)[]>([]);

  const activeIndex = ENGINE_STAGES.findIndex((s) => s.id === activeId);
  const active = ENGINE_STAGES[activeIndex] ?? ENGINE_STAGES[0];

  // Arrow keys walk the chain — the order is the argument, so it should be navigable.
  const onKeyDown = (e: React.KeyboardEvent, i: number) => {
    const delta = e.key === 'ArrowRight' ? 1 : e.key === 'ArrowLeft' ? -1 : 0;
    if (!delta) return;
    e.preventDefault();
    const next = (i + delta + ENGINE_STAGES.length) % ENGINE_STAGES.length;
    setActiveId(ENGINE_STAGES[next].id);
    refs.current[next]?.focus();
  };

  return (
    <div className={className}>
      <ol className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6" role="tablist" aria-label="The value chain">
        {ENGINE_STAGES.map((s, i) => {
          const on = s.id === activeId;
          const past = i < activeIndex;
          return (
            <li key={s.id} className="relative">
              <button
                ref={(el) => { refs.current[i] = el; }}
                role="tab"
                aria-selected={on}
                tabIndex={on ? 0 : -1}
                onClick={() => setActiveId(s.id)}
                onKeyDown={(e) => onKeyDown(e, i)}
                className={`group relative w-full cursor-pointer border-l-2 pl-5 pb-8 pt-6 pr-4 text-left transition-colors lg:border-l-0 lg:border-t-2 lg:pl-0 lg:pr-6 lg:pt-8 ${
                  on
                    ? 'border-[var(--color-accent)]'
                    : past
                      ? 'border-[var(--color-line-strong)] hover:border-[var(--color-accent-2)]'
                      : 'border-[var(--color-line)] hover:border-[var(--color-line-strong)]'
                }`}
              >
                {/* The node sits on the rail itself. */}
                <span
                  aria-hidden="true"
                  className={`absolute left-0 top-6 h-2 w-2 -translate-x-[5px] rounded-full transition-colors lg:left-0 lg:top-0 lg:-translate-x-0 lg:-translate-y-[5px] ${
                    on
                      ? 'bg-[var(--color-accent)]'
                      : past
                        ? 'bg-[var(--color-line-strong)]'
                        : 'bg-[var(--color-line-2)]'
                  }`}
                />
                <span className="font-mono text-eyebrow tracking-[0.14em] text-[var(--color-ink-3)]">
                  {s.step}
                </span>
                <span
                  className={`mt-2 block text-h5 transition-colors ${
                    on ? 'text-[var(--color-ink-strong)]' : 'text-[var(--color-ink-2)] group-hover:text-[var(--color-ink)]'
                  }`}
                >
                  {s.name}
                </span>
                <span className="mt-1.5 block text-caption text-[var(--color-ink-3)]">{s.discipline}</span>
              </button>
            </li>
          );
        })}
      </ol>

      {/* Detail reads as editorial prose, not three stacked boxes. */}
      <div className="mt-12 grid grid-cols-1 gap-x-14 gap-y-8 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <p className="font-mono text-eyebrow uppercase tracking-[0.14em] text-[var(--color-accent)]">
            Stage {active.step} of 06
          </p>
          <h3 className="mt-3 text-h4">{active.name}</h3>
          <button
            onClick={() => navigate(active.subpage)}
            className="group mt-6 inline-flex cursor-pointer items-center gap-2 text-body-sm text-[var(--color-accent)] hover:text-[var(--color-accent-2)]"
          >
            {active.discipline}
            <ArrowRight className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-1" />
          </button>
        </div>

        <dl className="lg:col-span-7">
          {[
            ['From', active.from],
            ['Method', active.method],
            ['To', active.to],
          ].map(([k, v], i) => (
            <div
              key={k}
              className={`grid grid-cols-1 gap-1 py-4 sm:grid-cols-12 sm:gap-6 ${
                i > 0 ? 'border-t border-[var(--color-line)]' : ''
              }`}
            >
              <dt className="font-mono text-eyebrow uppercase tracking-[0.14em] text-[var(--color-ink-3)] sm:col-span-3">
                {k}
              </dt>
              <dd
                className={`sm:col-span-9 ${
                  k === 'To' ? 'text-body text-[var(--color-ink-strong)]' : 'text-body text-[var(--color-ink-2)]'
                }`}
              >
                {v}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </div>
  );
};
