import React from 'react';
import { ArrowUpRight, ArrowRight } from 'lucide-react';
import { useNavigation } from '../context/NavigationContext';
import { ResearchMethodologyMap } from '../components/ResearchMethodologyMap';
import { Section, Container, SectionHead } from '../components/layout/Section';

/* Research is where the chain starts, so this page carries the full rail.
   The numerals are real sequence information — that is what keeps them in mono. */
const CHAIN = [
  { n: '01', name: 'Market Research', path: '/what-we-do/market-research' },
  { n: '02', name: 'Business Consulting', path: '/what-we-do/business-consulting' },
  { n: '03', name: 'AI Enterprise Solutions', path: '/what-we-do/ai-enterprise-solutions' },
  { n: '04', name: 'AI Training', path: '/what-we-do/ai-training' },
];

const METHOD: [string, string][] = [
  [
    'In-country fieldwork',
    'Interviews run in the market being assessed, with the location recorded against each one.',
  ],
  [
    'Vernacular instruments',
    'Questionnaires and interviews in Swahili, Hausa, Yoruba, Amharic and other working languages.',
  ],
  [
    'Independent verification',
    'Double-entry capture and separate cleaning, so a finding is checked before it is reported.',
  ],
];

const OUTPUTS: [string, string][] = [
  [
    'Opinion-leader maps',
    'Sociometric mapping of senior clinicians, specialty society chairs and hospital formulary committee members.',
  ],
  [
    'Pricing and margin scans',
    'Landed wholesale cost, retail markup and patient out-of-pocket exposure across commercial and public channels.',
  ],
  [
    'Prevalence and treatment models',
    'Disease incidence, diagnosed-to-treated ratios and therapy-switching dynamics by facility tier.',
  ],
  [
    'Channel and distributor audits',
    'Warehouse condition, distribution-practice compliance, cold-chain capability and credit-term sustainability.',
  ],
];

const primaryBtn =
  'group inline-flex cursor-pointer items-center gap-2.5 rounded-edge bg-[var(--color-accent)] px-7 py-4 text-body-sm font-medium text-[var(--color-ground-deep)] transition-colors hover:bg-[var(--color-accent-2)]';
const ghostBtn =
  'group inline-flex cursor-pointer items-center gap-2.5 rounded-edge border border-[var(--color-line-2)] px-7 py-4 text-body-sm text-[var(--color-ink)] transition-colors hover:border-[var(--color-line-strong)]';
const linkCls =
  'group inline-flex items-center gap-2 text-body-sm text-[var(--color-accent)] hover:text-[var(--color-accent-2)] cursor-pointer';

export const MarketResearch: React.FC = () => {
  const { navigate } = useNavigation();

  return (
    <div>
      {/* ── Hero: thesis beside the field ──────────────────────────────── */}
      <section className="pt-[var(--band-tight)] pb-[var(--band)]">
        <Container width="wide">
          {/* Mono is legitimate here: counts, not a label. */}
          <div className="flex flex-wrap items-center gap-x-5 gap-y-2 border-b border-[var(--color-line)] pb-5 font-mono text-eyebrow uppercase tracking-[0.14em] text-[var(--color-ink-3)]">
            <span className="text-[var(--color-ink-2)]">Africa</span>
            <span aria-hidden="true">·</span>
            <span>45 markets</span>
            <span aria-hidden="true">·</span>
            <span>4 regions</span>
          </div>

          <div className="grid grid-cols-1 items-start gap-x-16 gap-y-12 pt-14 lg:grid-cols-12 lg:pt-20">
            <div className="lg:col-span-7">
              <h1 className="text-h1">Ground truth, not desk assumptions.</h1>
              <p className="measure mt-8 text-lead text-[var(--color-ink-2)]">
                Primary and secondary research that turns market complexity into decision-ready
                intelligence — fieldwork, clinician panels, trade-channel audits and competitor
                pricing across African and international markets.
              </p>

              <div className="mt-10 flex flex-wrap items-center gap-4">
                <button onClick={() => navigate('/contact?topic=market-research')} className={primaryBtn}>
                  Start a conversation
                  <ArrowUpRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1 group-hover:-translate-y-0.5" />
                </button>
                <button
                  onClick={() => navigate('/explore?capability=Market%20Research')}
                  className={ghostBtn}
                >
                  Compose a research brief
                  <ArrowRight className="h-4 w-4 text-[var(--color-accent)] transition-transform duration-200 group-hover:translate-x-1" />
                </button>
              </div>
            </div>

            <figure className="lg:col-span-5">
              <img
                src="/assets/images/african_field_research_1788986691596.jpg"
                alt="A researcher gathering primary demographic and supply data in a community field setting"
                className="aspect-[4/3] w-full object-cover"
                loading="eager"
              />
              <figcaption className="mt-4 border-t border-[var(--color-line)] pt-4 text-caption text-[var(--color-ink-3)]">
                Primary fieldwork, Kenya. Research is verified in the market it describes.
              </figcaption>
            </figure>
          </div>

          {/* How the work is run — three commitments, hairlines, no boxes. */}
          <dl className="mt-16 grid grid-cols-1 border-t border-[var(--color-line)] sm:grid-cols-3">
            {METHOD.map(([term, def]) => (
              <div
                key={term}
                className="border-b border-[var(--color-line)] py-7 pr-8 sm:border-b-0 sm:border-r sm:last:border-r-0 sm:pl-8 sm:first:pl-0"
              >
                <dt className="text-h5 text-[var(--color-ink-strong)]">{term}</dt>
                <dd className="mt-3 text-body-sm text-[var(--color-ink-2)]">{def}</dd>
              </div>
            ))}
          </dl>
        </Container>
      </section>

      {/* ── Method ─────────────────────────────────────────────────────── */}
      <Section tone="raised" band="normal" width="wide" rule>
        <SectionHead
          title="Four tracks, run together."
          lead="In-country fieldwork, specialist panels, regulatory tracking and competitor intelligence. They run in parallel and cross-check each other — a finding that only one track supports is a finding we flag rather than report."
          className="mb-14"
        />
        <ResearchMethodologyMap />
      </Section>

      {/* ── What a mandate produces ────────────────────────────────────── */}
      <Section band="loose" width="default" rule>
        <div className="grid grid-cols-1 gap-x-16 gap-y-12 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <h2 className="text-h3">What a mandate produces.</h2>
            <p className="measure-sm mt-5 text-body text-[var(--color-ink-2)]">
              Deliverables are scoped to the decision in front of you. Each is built to be read by a
              commercial team and acted on, not filed.
            </p>
          </div>

          <dl className="lg:col-span-8">
            {OUTPUTS.map(([term, def]) => (
              <div
                key={term}
                className="grid grid-cols-1 gap-x-10 gap-y-2 border-t border-[var(--color-line)] py-7 sm:grid-cols-12"
              >
                <dt className="text-h5 text-[var(--color-ink-strong)] sm:col-span-5">{term}</dt>
                <dd className="text-body text-[var(--color-ink-2)] sm:col-span-7">{def}</dd>
              </div>
            ))}
          </dl>
        </div>
      </Section>

      {/* ── The chain: where research sits ─────────────────────────────── */}
      <Section tone="ground-2" band="tight" width="wide" rule>
        <h2 className="text-h4">Research is step one of four.</h2>
        <ol className="mt-10 grid grid-cols-1 border-t border-[var(--color-line)] sm:grid-cols-2 lg:grid-cols-4">
          {CHAIN.map((c, i) => {
            const current = c.n === '01';
            return (
              <li key={c.n}>
                <button
                  onClick={() => navigate(c.path)}
                  aria-current={current ? 'page' : undefined}
                  className={`group flex w-full cursor-pointer items-baseline gap-4 border-b border-[var(--color-line)] py-7 pr-6 text-left transition-colors hover:bg-[var(--color-raised)] lg:border-b-0 lg:border-r lg:last:border-r-0 lg:pl-6 lg:first:pl-0 ${
                    current ? 'bg-[var(--color-raised)]' : ''
                  }`}
                >
                  <span className="font-mono text-eyebrow text-[var(--color-accent)]">{c.n}</span>
                  <span
                    className={`flex-1 text-h5 transition-colors group-hover:text-[var(--color-ink-strong)] ${
                      current ? 'text-[var(--color-ink-strong)]' : 'text-[var(--color-ink-2)]'
                    }`}
                  >
                    {c.name}
                  </span>
                  {i < CHAIN.length - 1 && (
                    <ArrowRight
                      className="hidden h-4 w-4 shrink-0 self-center text-[var(--color-line-strong)] lg:block"
                      aria-hidden="true"
                    />
                  )}
                </button>
              </li>
            );
          })}
        </ol>
      </Section>

      {/* ── Closing ────────────────────────────────────────────────────── */}
      <Section tone="deep" band="normal" width="text" rule>
        <h2 className="text-h2">Start a conversation.</h2>
        <p className="mt-6 text-lead text-[var(--color-ink-2)]">
          Tell us the market question you need answered. We will tell you what it would take to
          answer it properly — and whether we are the right people to do it.
        </p>
        <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-4">
          <button onClick={() => navigate('/contact?topic=market-research')} className={primaryBtn}>
            Start a conversation
            <ArrowUpRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1 group-hover:-translate-y-0.5" />
          </button>
          <button onClick={() => navigate('/what-we-do/business-consulting')} className={linkCls}>
            Next: Business Consulting
            <ArrowRight className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-1" />
          </button>
        </div>
      </Section>
    </div>
  );
};
