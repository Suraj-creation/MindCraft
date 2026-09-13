import React, { useState } from 'react';
import { ArrowUpRight, ArrowRight } from 'lucide-react';
import { useNavigation } from '../context/NavigationContext';
import { Section, Container, SectionHead } from '../components/layout/Section';
import { AfricaInteractiveMap } from '../components/AfricaInteractiveMap';

/* Country counts are the real breakdown: 10 + 16 + 14 + 5 = 45. */
const REGION_COUNTS: [string, string][] = [
  ['East Africa', '10'],
  ['West Africa', '16'],
  ['Southern Africa', '14'],
  ['North Africa', '05'],
];

const WHY_NAIROBI: [string, string][] = [
  [
    'Regulatory proximity',
    'East African Community joint evaluation and regional standard-setting bodies sit within reach of the office, which is where regulatory questions get answered fastest.',
  ],
  [
    'Technical density',
    'Nairobi concentrates the region’s data science, machine learning and software engineering talent, so enterprise AI work is staffed locally rather than imported.',
  ],
  [
    'Continental connectivity',
    'Jomo Kenyatta International Airport connects directly to African capitals and onward to Europe and North America, which is what makes fieldwork across four regions practical from one base.',
  ],
];

const CORRIDORS: [string, string][] = [
  [
    'Europe',
    'For European organisations: African market entry assessment, distributor and regulatory screening, and supply arrangements into the continent — scoped and delivered from Nairobi.',
  ],
  [
    'United States',
    'For US organisations: market feasibility, clinical and regulatory context across African markets, and AI systems designed to hold up under African data protection law.',
  ],
];

export const WhereWeWork: React.FC = () => {
  const { navigate } = useNavigation();
  const [selectedRegionId, setSelectedRegionId] = useState<string>('east');

  return (
    <div>
      {/* ── Hero: statement left, the country ledger right ──────────────── */}
      <section className="pt-[var(--band-tight)] pb-[var(--band)]">
        <Container width="wide">
          <div className="grid grid-cols-1 gap-x-16 gap-y-12 lg:grid-cols-12">
            <div className="lg:col-span-7">
              <h1 className="rise text-h1">
                Rooted in Nairobi.
                <br className="hidden sm:block" /> Focused on Africa.
              </h1>
              <p
                className="rise measure mt-8 text-lead text-[var(--color-ink-2)]"
                style={{ animationDelay: '80ms' }}
              >
                One office, in Nairobi. Forty-five African markets across four regions, twelve of
                them focus markets reached through an associate network — with corridors into Europe
                and the United States.
              </p>
              <div className="rise mt-10" style={{ animationDelay: '160ms' }}>
                <button
                  onClick={() => navigate('/contact')}
                  className="group inline-flex cursor-pointer items-center gap-2.5 rounded-edge bg-[var(--color-accent)] px-7 py-4 text-body-sm font-medium text-[var(--color-ground-deep)] transition-colors hover:bg-[var(--color-accent-2)]"
                >
                  Ask about a specific market
                  <ArrowUpRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1 group-hover:-translate-y-0.5" />
                </button>
              </div>
            </div>

            {/* Counts are data — mono and the numeral colour are earned here. */}
            <dl
              className="rise lg:col-span-4 lg:col-start-9 lg:pt-3"
              style={{ animationDelay: '240ms' }}
            >
              {REGION_COUNTS.map(([name, n]) => (
                <div
                  key={name}
                  className="flex items-baseline justify-between gap-6 border-t border-[var(--color-line)] py-4"
                >
                  <dt className="text-body text-[var(--color-ink-2)]">{name}</dt>
                  <dd className="font-mono text-h5 text-[var(--color-grass)]">{n}</dd>
                </div>
              ))}
              <div className="flex items-baseline justify-between gap-6 border-t border-[var(--color-line-strong)] py-4">
                <dt className="text-body text-[var(--color-ink)]">Africa, total</dt>
                <dd className="font-mono text-h4 text-[var(--color-accent)]">45</dd>
              </div>
            </dl>
          </div>
        </Container>
      </section>

      {/* ── The map and the four regions ───────────────────────────────── */}
      <Section id="regions" tone="ground-2" band="normal" width="wide" rule className="dot-grid">
        <SectionHead
          title="Four regions, one base."
          lead="Select a region to see its focus markets and the regulatory and commercial context that shapes work there."
          className="mb-14"
        />
        <AfricaInteractiveMap
          selectedRegionId={selectedRegionId}
          onRegionSelect={(id) => setSelectedRegionId(id)}
        />
        <div className="mt-12 border-t border-[var(--color-line-2)] pt-8">
          <button
            onClick={() => navigate('/explore')}
            className="group inline-flex cursor-pointer items-center gap-2 text-body-sm text-[var(--color-accent)] hover:text-[var(--color-accent-2)]"
          >
            Compose a brief for a market and capability
            <ArrowRight className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-1" />
          </button>
        </div>
      </Section>

      {/* ── The integrity gloss on the map ─────────────────────────────── */}
      <Section band="tight" width="default" rule>
        <div className="grid grid-cols-1 gap-x-16 gap-y-6 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <h2 className="text-h3">Focus markets, not offices.</h2>
          </div>
          <div className="lg:col-span-7">
            <p className="text-lead text-[var(--color-ink)]">
              Twelve markets carry depth of coverage: Kenya, Nigeria, South Africa, Egypt, Ghana,
              Ethiopia, Tanzania, Uganda, Rwanda, Morocco, Côte d&apos;Ivoire and Zambia.
            </p>
            <p className="measure mt-5 text-body text-[var(--color-ink-2)]">
              Depth means accumulated regulatory and commercial knowledge of that market, plus
              associates who live and work in it. It does not mean a branch, a desk or a team on the
              ground. Nairobi is the only office, and any consultancy that marks a continent with a
              dozen pins should be asked which of them it actually staffs.
            </p>
          </div>
        </div>
      </Section>

      {/* ── Why one base works ─────────────────────────────────────────── */}
      <Section tone="raised" band="normal" width="default" rule>
        <div className="grid grid-cols-1 gap-x-16 gap-y-10 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <h2 className="text-h4">Why Nairobi carries the continent.</h2>
          </div>
          <dl className="lg:col-span-8">
            {WHY_NAIROBI.map(([term, body]) => (
              <div
                key={term}
                className="grid grid-cols-1 gap-x-10 gap-y-1.5 border-t border-[var(--color-line-2)] py-6 sm:grid-cols-12"
              >
                <dt className="text-h5 text-[var(--color-ink-strong)] sm:col-span-4">{term}</dt>
                <dd className="text-body text-[var(--color-ink-2)] sm:col-span-8">{body}</dd>
              </div>
            ))}
          </dl>
        </div>
      </Section>

      {/* ── Europe and the United States ───────────────────────────────── */}
      <Section band="normal" width="default" rule>
        <SectionHead
          title="Europe and the United States."
          lead="Two corridors, both run from Nairobi. The work is African market work commissioned from abroad — not a second and third home market."
          className="mb-12"
        />
        <dl>
          {CORRIDORS.map(([term, body]) => (
            <div
              key={term}
              className="grid grid-cols-1 gap-x-14 gap-y-3 border-t border-[var(--color-line-2)] py-10 lg:grid-cols-12"
            >
              <dt className="text-h4 lg:col-span-4">{term}</dt>
              <dd className="text-body text-[var(--color-ink-2)] lg:col-span-8">{body}</dd>
            </div>
          ))}
        </dl>
      </Section>

      {/* ── Closing ────────────────────────────────────────────────────── */}
      <Section tone="deep" band="normal" width="default" rule>
        <div className="grid grid-cols-1 gap-x-16 gap-y-10 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <h2 className="text-h2">Start a conversation.</h2>
            <p className="measure mt-6 text-lead text-[var(--color-ink-2)]">
              Name the market you are looking at. We will tell you what we know about it, and where
              our coverage would have to be built rather than drawn on.
            </p>
            <div className="mt-10 flex flex-wrap items-center gap-4">
              <button
                onClick={() => navigate('/contact')}
                className="group inline-flex cursor-pointer items-center gap-2.5 rounded-edge bg-[var(--color-accent)] px-7 py-4 text-body-sm font-medium text-[var(--color-ground-deep)] transition-colors hover:bg-[var(--color-accent-2)]"
              >
                Start a conversation
                <ArrowUpRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1 group-hover:-translate-y-0.5" />
              </button>
              <a
                href="mailto:info@mindcraftconsultancy.com"
                className="text-body-sm text-[var(--color-ink-2)] underline decoration-[var(--color-line-strong)] underline-offset-4 transition-colors hover:text-[var(--color-ink)] hover:decoration-[var(--color-accent)]"
              >
                info@mindcraftconsultancy.com
              </a>
            </div>
          </div>

          <dl className="space-y-5 border-t border-[var(--color-line)] pt-8 lg:col-span-4 lg:col-start-9 lg:border-t-0 lg:border-l lg:pt-0 lg:pl-10">
            {[
              ['Office', 'Nairobi, Kenya — the only one'],
              ['Focus markets', 'Twelve, across four African regions'],
              ['Corridors', 'Europe · United States'],
            ].map(([k, v]) => (
              <div key={k}>
                <dt className="text-caption text-[var(--color-ink-3)]">{k}</dt>
                <dd className="mt-1.5 text-body text-[var(--color-ink)]">{v}</dd>
              </div>
            ))}
          </dl>
        </div>
      </Section>
    </div>
  );
};
