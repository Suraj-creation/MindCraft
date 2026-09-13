import React, { useRef, useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { useNavigation } from '../context/NavigationContext';

interface CapabilityTier {
  id: string;
  step: string;
  name: string;
  audience: string;
  focus: string;
  format: string;
  commitment: string;
  competencies: string[];
  /* What a participant leaves with. Phrased as the shape of the deliverable,
     never as a result achieved — MindCraft was founded in 2026. */
  youLeaveWith: string;
}

const TIERS: CapabilityTier[] = [
  {
    id: 'executive',
    step: '01',
    name: 'Executive',
    audience: 'Board, C-suite and managing partners',
    focus: 'AI governance and capital allocation',
    format: 'Two-day retreat, or four boardroom sessions',
    commitment: '16 hours',
    competencies: [
      'Separating technical reality from generative AI hype',
      'Risk oversight under Kenya DPA, POPIA and comparable regimes',
      'Evaluating private infrastructure against hosted APIs',
      'Ethical oversight, bias mitigation and workforce transition policy',
    ],
    youLeaveWith: 'A drafted enterprise AI roadmap and a board-level governance charter.',
  },
  {
    id: 'operational',
    step: '02',
    name: 'Operational',
    audience: 'Department heads, product managers, functional leads',
    focus: 'Workflow redesign and applied productivity',
    format: 'Four-week cohort with a live transformation sprint',
    commitment: '6 hours a week',
    competencies: [
      'Decomposing institutional workflows into automatable steps',
      'Prompt architecture and structured output extraction',
      'Verification protocols that catch errors before they reach a client',
      'Designing human-in-the-loop checkpoints',
    ],
    youLeaveWith: 'Departmental pipelines built during the programme, running on your own workflows.',
  },
  {
    id: 'clinical',
    step: '03',
    name: 'Clinical',
    audience: 'Medical officers, clinicians, pharmacists, lab directors',
    focus: 'Clinical AI literacy and diagnostic workflow safety',
    format: 'Modular track, or a two-day on-site session',
    commitment: '12 hours',
    competencies: [
      'Reading clinical decision support probabilities and false-positive limits',
      'Ambient documentation tools and EMR transcription',
      'Patient privacy in electronic records and imaging',
      'Compliance with national medical practitioner guidelines',
    ],
    youLeaveWith: 'Working fluency with the tools entering clinical settings, and the limits of each.',
  },
  {
    id: 'engineering',
    step: '04',
    name: 'Engineering',
    audience: 'Software engineers, systems architects, data scientists',
    focus: 'Private model deployment and architecture',
    format: 'Six-week hands-on lab with a dedicated sandbox',
    commitment: '8 hours a week',
    competencies: [
      'Parameter-efficient fine-tuning on private domain datasets',
      'Vector indexing, hybrid search and retrieval optimisation',
      'Containerised deployment on local hardware or a private VPC',
      'Latency optimisation, batch inference and deterministic API testing',
    ],
    youLeaveWith: 'An internal retrieval engine built in the lab, with tests, that you own outright.',
  },
  {
    id: 'excellence',
    step: '05',
    name: 'Institutional',
    audience: 'Cross-functional enterprise taskforce',
    focus: 'Transfer of the capability itself',
    format: 'Three-month embedded mentorship',
    commitment: 'Quarterly cadence',
    competencies: [
      'Establishing peer-review and model audit committees',
      'Internal certification curricula for onboarding',
      'Procurement evaluation frameworks for third-party software',
      'Sustaining autonomy without permanent external reliance',
    ],
    youLeaveWith: 'An internal practice that runs without us. That is the point of the ladder.',
  },
];

export const AILearningLadder: React.FC<{ className?: string }> = ({ className = '' }) => {
  const { navigate } = useNavigation();
  const [activeId, setActiveId] = useState('executive');
  const refs = useRef<(HTMLButtonElement | null)[]>([]);

  const activeIndex = TIERS.findIndex((t) => t.id === activeId);
  const t = TIERS[activeIndex] ?? TIERS[0];

  const onKeyDown = (e: React.KeyboardEvent, i: number) => {
    const d = e.key === 'ArrowDown' ? 1 : e.key === 'ArrowUp' ? -1 : 0;
    if (!d) return;
    e.preventDefault();
    const next = (i + d + TIERS.length) % TIERS.length;
    setActiveId(TIERS[next].id);
    refs.current[next]?.focus();
  };

  return (
    <div className={`grid grid-cols-1 gap-x-14 gap-y-10 lg:grid-cols-12 ${className}`}>
      {/* The ladder climbs — a vertical rail, not five cards. */}
      <ol className="lg:col-span-5" role="tablist" aria-label="Capability tiers">
        {TIERS.map((tier, i) => {
          const on = tier.id === activeId;
          const below = i < activeIndex;
          return (
            <li key={tier.id}>
              <button
                ref={(el) => { refs.current[i] = el; }}
                role="tab"
                aria-selected={on}
                tabIndex={on ? 0 : -1}
                onClick={() => setActiveId(tier.id)}
                onKeyDown={(e) => onKeyDown(e, i)}
                className={`group flex w-full cursor-pointer items-baseline gap-5 border-l-2 py-5 pl-6 pr-4 text-left transition-colors ${
                  on
                    ? 'border-[var(--color-accent)] bg-[var(--color-raised)]'
                    : below
                      ? 'border-[var(--color-line-strong)] hover:border-[var(--color-accent-2)]'
                      : 'border-[var(--color-line)] hover:border-[var(--color-line-strong)]'
                }`}
              >
                <span className="font-mono text-eyebrow tracking-[0.14em] text-[var(--color-ink-3)]">
                  {tier.step}
                </span>
                <span className="flex-1">
                  <span
                    className={`block text-h5 transition-colors ${
                      on ? 'text-[var(--color-ink-strong)]' : 'text-[var(--color-ink-2)] group-hover:text-[var(--color-ink)]'
                    }`}
                  >
                    {tier.name}
                  </span>
                  <span className="mt-1 block text-caption text-[var(--color-ink-3)]">{tier.audience}</span>
                </span>
              </button>
            </li>
          );
        })}
      </ol>

      <div className="lg:col-span-7">
        <h3 className="text-h4">{t.focus}</h3>

        <dl className="mt-8">
          {[
            ['Format', t.format],
            ['Commitment', t.commitment],
          ].map(([k, v]) => (
            <div
              key={k}
              className="grid grid-cols-1 gap-1 border-t border-[var(--color-line)] py-3.5 sm:grid-cols-12 sm:gap-6"
            >
              <dt className="font-mono text-eyebrow uppercase tracking-[0.14em] text-[var(--color-ink-3)] sm:col-span-3">
                {k}
              </dt>
              <dd className="text-body text-[var(--color-ink-2)] sm:col-span-9">{v}</dd>
            </div>
          ))}
        </dl>

        <h4 className="mt-10 font-mono text-eyebrow uppercase tracking-[0.14em] text-[var(--color-ink-3)]">
          What it covers
        </h4>
        <ul className="mt-4">
          {t.competencies.map((c) => (
            <li key={c} className="border-t border-[var(--color-line)] py-3 text-body text-[var(--color-ink)]">
              {c}
            </li>
          ))}
        </ul>

        <div className="mt-10 border-t border-[var(--color-line-2)] pt-8">
          <h4 className="font-mono text-eyebrow uppercase tracking-[0.14em] text-[var(--color-accent)]">
            What you leave with
          </h4>
          <p className="measure mt-3 text-lead text-[var(--color-ink)]">{t.youLeaveWith}</p>

          <button
            onClick={() => navigate('/contact?capability=AI%20Training')}
            className="group mt-8 inline-flex cursor-pointer items-center gap-2 text-body-sm text-[var(--color-accent)] hover:text-[var(--color-accent-2)]"
          >
            Discuss a programme
            <ArrowRight className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-1" />
          </button>
        </div>
      </div>
    </div>
  );
};
