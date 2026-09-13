import React from 'react';
import { ArrowUpRight, ArrowRight } from 'lucide-react';
import { useNavigation } from '../context/NavigationContext';
import { Section, Container, SectionHead } from '../components/layout/Section';

/* Five practice areas are parallel, not sequential — so they carry no numerals
   and no cards. Title left, substance right, separated by hairlines. */
const PRACTICE: [string, string][] = [
  [
    'Corporate and business strategy',
    'Market-entry strategy, growth planning, commercial portfolio prioritisation, competitive positioning and joint-venture advisory across African trade corridors.',
  ],
  [
    'Digital and AI transformation',
    'Technology modernisation roadmaps, AI readiness assessment, data architecture governance and transition planning away from paper-based workflows.',
  ],
  [
    'Organisational design',
    'Target operating model design, leadership restructuring, cross-border commercial team structuring and alignment for multi-country operations.',
  ],
  [
    'Process improvement and systems',
    'Lean operational engineering, supply-chain bottleneck removal, hospital throughput work and enterprise workflow streamlining.',
  ],
  [
    'Policy and regulatory advisory',
    'National formulary submissions, AfCFTA trade alignment, public-sector programme structuring and compliance alignment with national regulatory authorities.',
  ],
];

const DELIVERABLES: [string, string][] = [
  ['Target operating models', 'Functional structures, reporting lines and delegation matrices.'],
  ['Market-entry playbooks', 'Country-specific regulatory, distribution and pricing roadmaps.'],
  ['Transformation charters', 'Milestone sequencing, risk registers and business-case models.'],
  ['Regulatory dossiers', 'Filing documentation formatted for regional and national agencies.'],
];

const primaryBtn =
  'group inline-flex cursor-pointer items-center gap-2.5 rounded-edge bg-[var(--color-accent)] px-7 py-4 text-body-sm font-medium text-[var(--color-ground-deep)] transition-colors hover:bg-[var(--color-accent-2)]';
const linkCls =
  'group inline-flex items-center gap-2 text-body-sm text-[var(--color-accent)] hover:text-[var(--color-accent-2)] cursor-pointer';

export const BusinessConsulting: React.FC = () => {
  const { navigate } = useNavigation();

  return (
    <div>
      {/* ── Hero: statement first, the room second ─────────────────────── */}
      <section className="pt-[var(--band-tight)] pb-[var(--band-tight)]">
        <Container width="default">
          <h1 className="text-h1 max-w-4xl">Strategy that survives contact with the market.</h1>
          <p className="measure mt-8 text-lead text-[var(--color-ink-2)]">
            Strategic and management advisory that helps organisations make better decisions,
            restructure for growth and execute change — grounded in Life Sciences and cross-industry
            practice, and written for the environments it has to work in.
          </p>
          <div className="mt-10">
            <button onClick={() => navigate('/contact?topic=business-consulting')} className={primaryBtn}>
              Start a conversation
              <ArrowUpRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1 group-hover:-translate-y-0.5" />
            </button>
          </div>
        </Container>

        <Container width="wide" className="mt-16">
          <figure>
            <img
              src="/assets/images/african_strategy_room_1788985493442.jpg"
              alt="Senior strategy consultants and analysts reviewing plans in a Nairobi meeting room"
              className="aspect-[21/9] w-full object-cover"
              loading="eager"
            />
            <figcaption className="mt-4 border-t border-[var(--color-line)] pt-4 text-caption text-[var(--color-ink-3)]">
              Nairobi. Advisory work is done with the people who have to carry the decision.
            </figcaption>
          </figure>
        </Container>
      </section>

      {/* ── Practice areas ─────────────────────────────────────────────── */}
      <Section tone="ground-2" band="normal" width="default" rule>
        <SectionHead
          title="Five places advisory work lands."
          lead="Engagements usually draw on more than one. They are listed as areas of practice, not as a menu to be bought line by line."
          className="mb-16"
        />

        {PRACTICE.map(([term, def]) => (
          <article
            key={term}
            className="grid grid-cols-1 gap-x-12 gap-y-3 border-t border-[var(--color-line)] py-9 lg:grid-cols-12"
          >
            <h3 className="text-h5 text-[var(--color-ink-strong)] lg:col-span-4">{term}</h3>
            <p className="text-body text-[var(--color-ink-2)] lg:col-span-8">{def}</p>
          </article>
        ))}
      </Section>

      {/* ── Deliverables: a compact rail, not four cards ───────────────── */}
      <Section tone="raised" band="tight" width="wide" rule>
        <h2 className="text-h4">What you receive.</h2>
        <dl className="mt-10 grid grid-cols-1 border-t border-[var(--color-line-2)] sm:grid-cols-2 lg:grid-cols-4">
          {DELIVERABLES.map(([term, def]) => (
            <div
              key={term}
              className="border-b border-[var(--color-line)] py-7 pr-6 lg:border-b-0 lg:border-r lg:last:border-r-0 lg:pl-6 lg:first:pl-0"
            >
              <dt className="text-h5 text-[var(--color-ink-strong)]">{term}</dt>
              <dd className="mt-3 text-caption text-[var(--color-ink-3)]">{def}</dd>
            </div>
          ))}
        </dl>
      </Section>

      {/* ── Closing: the two neighbours in the chain, then the CTA ─────── */}
      <Section tone="deep" band="normal" width="default" rule>
        <div className="grid grid-cols-1 gap-x-16 gap-y-10 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <h2 className="text-h2">Start a conversation.</h2>
            <p className="measure mt-6 text-lead text-[var(--color-ink-2)]">
              Bring the decision you are stuck on. We will be direct about whether advisory is what
              it needs, or whether it needs evidence first.
            </p>
            <div className="mt-10">
              <button onClick={() => navigate('/contact?topic=business-consulting')} className={primaryBtn}>
                Start a conversation
                <ArrowUpRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1 group-hover:-translate-y-0.5" />
              </button>
            </div>
          </div>

          <div className="space-y-6 border-t border-[var(--color-line)] pt-8 lg:col-span-4 lg:col-start-9 lg:border-t-0 lg:border-l lg:pt-0 lg:pl-10">
            <p className="text-body-sm text-[var(--color-ink-3)]">
              Advisory sits between the evidence and the build. Either side of it:
            </p>
            <button onClick={() => navigate('/what-we-do/market-research')} className={`${linkCls} block`}>
              Market Research
              <ArrowRight className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-1" />
            </button>
            <button
              onClick={() => navigate('/what-we-do/ai-enterprise-solutions')}
              className={`${linkCls} block`}
            >
              AI Enterprise Solutions
              <ArrowRight className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-1" />
            </button>
          </div>
        </div>
      </Section>
    </div>
  );
};
