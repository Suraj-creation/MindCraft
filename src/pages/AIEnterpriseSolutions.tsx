import React from 'react';
import { ArrowUpRight, ArrowRight } from 'lucide-react';
import { useNavigation } from '../context/NavigationContext';
import { AITechnologyArchitecture } from '../components/AITechnologyArchitecture';
import { Section, Container, SectionHead } from '../components/layout/Section';

/* Design commitments, not outcomes — these describe how a system is built,
   which is a claim we can make on day one. */
const COMMITMENTS: [string, string][] = [
  ['Runs where your data lives', 'On-premise or in a private cloud tenancy you control.'],
  ['Deterministic where it matters', 'Schema validation and test coverage around every generated output.'],
  ['No training on your data', 'Nothing leaves the tenancy into a shared or public model.'],
];

/* Life-Sciences-specific AI. Parallel systems, so no numerals, no cards. */
const SOLUTIONS: [string, string][] = [
  [
    'Pharmacovigilance and adverse-event monitoring',
    'Multilingual extraction from clinician reports, patient narratives and discharge notes, built to produce standardised, MedDRA-coded safety notifications for review.',
  ],
  [
    'Regulatory intelligence automation',
    'Semantic comparison across the Pharmacy and Poisons Board, NAFDAC, SAHPRA and EAC regional guidance, built to surface where a submission has to differ by market.',
  ],
  [
    'Opinion-leader and market-access analytics',
    'Structured mapping of clinical influence and access pathways, built so commercial and medical affairs teams work from the same picture.',
  ],
];

const primaryBtn =
  'group inline-flex cursor-pointer items-center gap-2.5 rounded-edge bg-[var(--color-accent)] px-7 py-4 text-body-sm font-medium text-[var(--color-ground-deep)] transition-colors hover:bg-[var(--color-accent-2)]';
const ghostBtn =
  'group inline-flex cursor-pointer items-center gap-2.5 rounded-edge border border-[var(--color-line-2)] px-7 py-4 text-body-sm text-[var(--color-ink)] transition-colors hover:border-[var(--color-line-strong)]';
const linkCls =
  'group inline-flex items-center gap-2 text-body-sm text-[var(--color-accent)] hover:text-[var(--color-accent-2)] cursor-pointer';

export const AIEnterpriseSolutions: React.FC = () => {
  const { navigate } = useNavigation();

  return (
    <div>
      {/* ── Hero: statement, with the engineering position beside it ──── */}
      <section className="pt-[var(--band-tight)] pb-[var(--band)]">
        <Container width="wide">
          <div className="grid grid-cols-1 gap-x-16 gap-y-12 lg:grid-cols-12">
            <div className="lg:col-span-8">
              <h1 className="text-h1">Systems that outlive the pilot.</h1>
              <p className="measure mt-8 text-lead text-[var(--color-ink-2)]">
                End-to-end design, build and integration of AI systems that put insight inside
                everyday workflows — from market intelligence platforms to patient- and
                customer-facing tools, engineered for the security and data rules you operate under.
              </p>

              <div className="mt-10 flex flex-wrap items-center gap-4">
                <button
                  onClick={() => navigate('/contact?topic=ai-enterprise-solutions')}
                  className={primaryBtn}
                >
                  Start a conversation
                  <ArrowUpRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1 group-hover:-translate-y-0.5" />
                </button>
                <button
                  onClick={() => navigate('/explore?capability=AI%20Enterprise%20Solutions')}
                  className={ghostBtn}
                >
                  Compose a technology brief
                  <ArrowRight className="h-4 w-4 text-[var(--color-accent)] transition-transform duration-200 group-hover:translate-x-1" />
                </button>
              </div>
            </div>

            <dl className="border-t border-[var(--color-line)] pt-8 lg:col-span-4 lg:border-t-0 lg:border-l lg:pt-2 lg:pl-10">
              {COMMITMENTS.map(([term, def], i) => (
                <div key={term} className={i === 0 ? '' : 'mt-7 border-t border-[var(--color-line)] pt-7'}>
                  <dt className="text-h5 text-[var(--color-ink-strong)]">{term}</dt>
                  <dd className="mt-2 text-body-sm text-[var(--color-ink-2)]">{def}</dd>
                </div>
              ))}
            </dl>
          </div>
        </Container>
      </section>

      {/* ── Architecture: the diagram is the visual ────────────────────── */}
      <Section tone="ground-2" band="normal" width="wide" rule>
        <SectionHead
          title="Five layers, from source data to the desk."
          lead="Ingestion, private memory, domain-calibrated models, governance and integration. Each layer is inspectable on its own — which is what makes the whole thing auditable later."
          className="mb-14"
        />
        <AITechnologyArchitecture />
      </Section>

      {/* ── What gets built, with the engineering context beside it ────── */}
      <Section tone="raised" band="loose" width="wide" rule>
        <div className="grid grid-cols-1 gap-x-16 gap-y-14 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <h2 className="text-h3">Built for Life Sciences first.</h2>
            <p className="measure-sm mt-5 text-body text-[var(--color-ink-2)]">
              The three systems below are where sector knowledge and engineering meet. Each is an
              offering scoped to your data and regulators, not a product to be installed.
            </p>
            <figure className="mt-10">
              <img
                src="/assets/images/african_enterprise_architecture_1788986704563.jpg"
                alt="Systems engineers and data architects working on enterprise AI pipeline infrastructure"
                className="aspect-[4/3] w-full object-cover"
                loading="lazy"
              />
              <figcaption className="mt-4 border-t border-[var(--color-line)] pt-4 text-caption text-[var(--color-ink-3)]">
                Nairobi. Build and integration work is done alongside the team that will run it.
              </figcaption>
            </figure>
          </div>

          <dl className="lg:col-span-7">
            {SOLUTIONS.map(([term, def]) => (
              <div key={term} className="border-t border-[var(--color-line)] py-9">
                <dt className="text-h4 text-[var(--color-ink-strong)]">{term}</dt>
                <dd className="measure mt-4 text-body text-[var(--color-ink-2)]">{def}</dd>
              </div>
            ))}
          </dl>
        </div>
      </Section>

      {/* ── Closing ────────────────────────────────────────────────────── */}
      <Section tone="deep" band="normal" width="default" rule>
        <div className="grid grid-cols-1 gap-x-16 gap-y-10 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <h2 className="text-h2">Start a conversation.</h2>
            <p className="measure mt-6 text-lead text-[var(--color-ink-2)]">
              Describe the workflow and the constraints it sits under. We will tell you what is
              buildable now, and what should wait.
            </p>
            <div className="mt-10">
              <button
                onClick={() => navigate('/contact?topic=ai-enterprise-solutions')}
                className={primaryBtn}
              >
                Start a conversation
                <ArrowUpRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1 group-hover:-translate-y-0.5" />
              </button>
            </div>
          </div>

          <div className="space-y-5 border-t border-[var(--color-line)] pt-8 lg:col-span-4 lg:col-start-9 lg:border-t-0 lg:border-l lg:pt-0 lg:pl-10">
            <p className="text-body-sm text-[var(--color-ink-3)]">
              A system nobody can operate is a system nobody keeps.
            </p>
            <button onClick={() => navigate('/what-we-do/ai-training')} className={`${linkCls} block`}>
              AI Training
              <ArrowRight className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-1" />
            </button>
          </div>
        </div>
      </Section>
    </div>
  );
};
