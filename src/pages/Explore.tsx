import React, { useEffect, useState } from 'react';
import { ArrowUpRight } from 'lucide-react';
import { useNavigation } from '../context/NavigationContext';
import { Section, Container } from '../components/layout/Section';

const INDUSTRIES = [
  'Pharmaceuticals',
  'Medical Devices',
  'Medical Diagnostics',
  'Hospitals & Healthcare Providers',
  'Chemicals & Agrochemicals',
  'Automotive',
  'Banking & Financial Services',
  'Public Sector & Development',
];

const GEOGRAPHIES = [
  'Kenya & East Africa',
  'Nigeria & West Africa',
  'South Africa & Southern Africa',
  'Egypt & North Africa',
  'Pan-African, multi-country',
  'Europe & Africa corridor',
  'United States & Africa corridor',
];

const CAPABILITIES = [
  'Market Research',
  'Business Consulting',
  'AI Enterprise Solutions',
  'AI Training',
  'All four, integrated',
];

/* Output is composed only from pillar scope and geography facts. Where a
   combination has no source-specific detail it degrades to a general capability
   statement. It never asserts a case study, a metric, a named client, a
   delivery timeline or a team located anywhere but Nairobi. */
function compose(industry: string, geography: string, capability: string) {
  const lifeSciences = /Pharmaceutic|Device|Diagnostic|Hospital/.test(industry);
  const ai = capability.includes('AI') || capability.includes('integrated');

  const scope: Record<string, string> = {
    'Market Research':
      'Primary and secondary research designed to turn market complexity into decision-ready intelligence.',
    'Business Consulting':
      'Strategic and management advisory covering operating model, growth and execution.',
    'AI Enterprise Solutions':
      'Design, build and integration of AI systems that operationalise insight into everyday workflows.',
    'AI Training':
      'Hands-on capability building that leaves internal practitioners rather than awareness alone.',
    'All four, integrated':
      'One engagement across research, strategy, enterprise AI and training, rather than four vendors.',
  };

  const deliverables = lifeSciences
    ? [
        'Regulatory pathway mapping against the relevant national authorities',
        'Market access, pricing and KOL landscape analysis',
        'Distribution and route-to-market structure for the territory',
      ]
    : [
        'Stakeholder mapping and regulatory landscape for the territory',
        'Operating model and commercial distribution assessment',
        'An executive brief structured for a board decision',
      ];

  if (ai && lifeSciences) {
    deliverables.push('Governance and data-protection review for regulated deployment');
  } else if (ai) {
    deliverables.push('Solution architecture and workforce capability plan');
  }

  return {
    headline: `${capability} for ${industry.toLowerCase()} in ${geography}.`,
    scope: scope[capability] ?? scope['All four, integrated'],
    deliverables,
    lifeSciences,
  };
}

export const Explore: React.FC = () => {
  const { queryParams, navigate } = useNavigation();

  const [industry, setIndustry] = useState(queryParams.industry || INDUSTRIES[0]);
  const [geography, setGeography] = useState(queryParams.geography || GEOGRAPHIES[0]);
  const [capability, setCapability] = useState(queryParams.capability || CAPABILITIES[0]);

  useEffect(() => {
    if (queryParams.industry) setIndustry(queryParams.industry);
    if (queryParams.geography) setGeography(queryParams.geography);
    if (queryParams.capability) setCapability(queryParams.capability);
  }, [queryParams]);

  const result = compose(industry, geography, capability);

  const openContact = () => {
    const params = new URLSearchParams({ industry, geography, capability });
    navigate(`/contact?${params.toString()}`);
  };

  const fields = [
    { label: 'Industry', value: industry, set: setIndustry, opts: INDUSTRIES },
    { label: 'Geography', value: geography, set: setGeography, opts: GEOGRAPHIES },
    { label: 'Capability', value: capability, set: setCapability, opts: CAPABILITIES },
  ];

  return (
    <div>
      <section className="pt-[var(--band-tight)] pb-[var(--band-tight)]">
        <Container width="wide">
          <div className="grid grid-cols-1 gap-x-16 gap-y-6 lg:grid-cols-12">
            <div className="lg:col-span-7">
              <h1 className="text-h1">Compose your situation.</h1>
            </div>
            <div className="lg:col-span-5 lg:pt-4">
              <p className="text-body text-[var(--color-ink-2)]">
                Three choices, and what MindCraft would bring to that combination. Nothing here is a
                case study — it is the scope of the work, stated plainly.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* The interface is the visual: three hairline selectors, no chrome. */}
      <Section tone="ground-2" band="normal" width="wide" rule>
        <p className="font-mono text-eyebrow uppercase tracking-[0.14em] text-[var(--color-ink-3)]">
          Industry × Geography × Capability → Result
        </p>

        <div className="mt-10 grid grid-cols-1 gap-x-10 gap-y-8 md:grid-cols-3">
          {fields.map((f) => (
            <div key={f.label}>
              <label
                htmlFor={`explore-${f.label}`}
                className="block font-mono text-eyebrow uppercase tracking-[0.14em] text-[var(--color-ink-3)]"
              >
                {f.label}
              </label>
              <select
                id={`explore-${f.label}`}
                value={f.value}
                onChange={(e) => f.set(e.target.value)}
                className="w-full cursor-pointer appearance-none border-0 border-b border-[var(--color-line-2)] bg-transparent pt-2 pb-3 text-h5 text-[var(--color-ink-strong)] transition-colors hover:border-[var(--color-accent)] focus:border-[var(--color-accent)] focus:outline-none"
              >
                {f.opts.map((o) => (
                  <option key={o} value={o} className="bg-[var(--color-surface)]">
                    {o}
                  </option>
                ))}
              </select>
            </div>
          ))}
        </div>
      </Section>

      {/* Recomputes live — no submit button, per the disclosure model. */}
      <Section band="normal" width="wide" rule>
        <div aria-live="polite">
          <div className="grid grid-cols-1 gap-x-14 gap-y-10 lg:grid-cols-12">
            <div className="lg:col-span-5">
              <h2 className="text-h3">{result.headline}</h2>
              <p className="measure mt-6 text-body text-[var(--color-ink-2)]">{result.scope}</p>
              {result.lifeSciences && (
                <p className="mt-6 text-body-sm text-[var(--color-grass)]">
                  This sits inside our core Life Sciences specialisation.
                </p>
              )}
            </div>

            <div className="lg:col-span-7">
              <h3 className="font-mono text-eyebrow uppercase tracking-[0.14em] text-[var(--color-ink-3)]">
                What an engagement would cover
              </h3>
              <ul className="mt-4">
                {result.deliverables.map((d) => (
                  <li
                    key={d}
                    className="border-t border-[var(--color-line)] py-4 text-body text-[var(--color-ink)]"
                  >
                    {d}
                  </li>
                ))}
              </ul>
              <p className="mt-6 text-caption text-[var(--color-ink-3)]">
                Scope is shaped in Discovery. We will tell you if a question is outside what we can
                credibly answer.
              </p>
            </div>
          </div>

          <div className="mt-14 flex flex-wrap items-center gap-5 border-t border-[var(--color-line-2)] pt-8">
            <button
              onClick={openContact}
              className="group inline-flex cursor-pointer items-center gap-2.5 rounded-edge bg-[var(--color-accent)] px-7 py-4 text-body-sm font-medium text-[var(--color-ground-deep)] transition-colors hover:bg-[var(--color-accent-2)]"
            >
              Start a conversation about this
              <ArrowUpRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1 group-hover:-translate-y-0.5" />
            </button>
            <p className="text-caption text-[var(--color-ink-3)]">
              Your three selections carry over to the form.
            </p>
          </div>
        </div>
      </Section>
    </div>
  );
};
