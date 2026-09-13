import React, { useState } from 'react';
import { ArrowUpRight, ArrowRight } from 'lucide-react';
import { useNavigation } from '../context/NavigationContext';
import { Section, Container, SectionHead } from '../components/layout/Section';

/* Life Sciences is not in this list. It is not a vertical among verticals —
   it is the founding specialisation, and it gets its own band and its own
   page. Flattening it into this grid would erase the entire thesis. */
interface Vertical {
  id: string;
  name: string;
  group: string;
  relevance: string;
  scope: string;
}

/* `scope` describes what an engagement covers — an offering, never a record
   of work done. MindCraft was established in 2026 and has no track record
   to cite; anything phrased as a past project would be invented. */
const VERTICALS: Vertical[] = [
  {
    id: 'banking',
    name: 'Commercial Banking & FinTech',
    group: 'Financial Services',
    relevance:
      'Cross-border payments, SME credit scoring, mobile money integration and anti-money-laundering obligations.',
    scope: 'Credit risk models built on localised mobile transaction data; payment corridor analysis.',
  },
  {
    id: 'insurance',
    name: 'Insurance & Micro-Insurance',
    group: 'Financial Services',
    relevance:
      'Parametric climate cover, health underwriting risk pools and claims adjudication at scale.',
    scope: 'Claims automation and fraud-detection pipelines designed for regional health insurers.',
  },
  {
    id: 'chemicals',
    name: 'Chemicals & Agrochemicals',
    group: 'Industrial & Chemicals',
    relevance:
      'Manufacturer and distributor networks, registration requirements and formulation import dependency.',
    scope: 'Channel and distributor mapping; product registration strategy across national authorities.',
  },
  {
    id: 'automotive',
    name: 'Automotive & Aftermarket',
    group: 'Industrial & Chemicals',
    relevance:
      'Assembly localisation, dealer networks and aftermarket parts distribution across fragmented markets.',
    scope: 'Dealer and aftermarket network studies; demand modelling for assembly and parts operations.',
  },
  {
    id: 'energy',
    name: 'Renewable Energy & Off-Grid',
    group: 'Infrastructure & Energy',
    relevance:
      'Commercial and industrial solar feasibility, pay-as-you-go customer analytics and carbon credit validation.',
    scope: 'Demand forecasting and default-risk modelling for mini-grid and pay-as-you-go operators.',
  },
  {
    id: 'logistics',
    name: 'Logistics, Ports & Supply Chain',
    group: 'Infrastructure & Energy',
    relevance:
      'Northern and Central corridor transit, port congestion and multimodal freight routing.',
    scope: 'Cold-chain telemetry auditing and transit-time studies from Mombasa and Dar es Salaam inland.',
  },
  {
    id: 'agriculture',
    name: 'Agribusiness & Crop Science',
    group: 'Consumer & Agriculture',
    relevance:
      'Smallholder network structure, agricultural input supply chains and satellite yield prediction.',
    scope: 'Distributor network mapping and input distribution route optimisation.',
  },
  {
    id: 'fmcg',
    name: 'Consumer Goods & Retail',
    group: 'Consumer & Agriculture',
    relevance:
      'Informal trade route-to-market, price elasticity and retail audit coverage in tier-two and tier-three towns.',
    scope: 'Informal retail census and route-to-market design across urban and peri-urban clusters.',
  },
  {
    id: 'telecom',
    name: 'Telecommunications & Digital Infrastructure',
    group: 'Technology & Public Sector',
    relevance:
      'Fibre backhaul expansion, tower company efficiency and enterprise data centre demand.',
    scope: 'Enterprise cloud and data-sovereignty market sizing; backhaul expansion feasibility.',
  },
  {
    id: 'public-sector',
    name: 'Public Sector & Development Agencies',
    group: 'Technology & Public Sector',
    relevance:
      'National digitalisation plans, donor programme monitoring, health system strengthening and AfCFTA trade enablement.',
    scope: 'Digitalisation roadmaps and multi-country monitoring and evaluation design.',
  },
  {
    id: 'education',
    name: 'Higher Education & Research Institutes',
    group: 'Technology & Public Sector',
    relevance:
      'AI curricula integration, research grant administration and clinical trial biobanking registries.',
    scope: 'Institutional AI curricula and research data repository architecture.',
  },
];

/* Source-faithful, in the Corporate Profile's own order. */
const LIFE_SCIENCES_SUBSECTORS = [
  'Pharmaceuticals',
  'Medical Devices',
  'Medical Diagnostics',
  'Medical Equipment',
  'Surgical Consumables',
  'Hospitals & Healthcare Providers',
];

const GROUPS = [
  'Financial Services',
  'Industrial & Chemicals',
  'Infrastructure & Energy',
  'Consumer & Agriculture',
  'Technology & Public Sector',
];

const linkCls =
  'group inline-flex items-center gap-2 text-body-sm text-[var(--color-accent)] hover:text-[var(--color-accent-2)] cursor-pointer';

export const Industries: React.FC = () => {
  const { navigate } = useNavigation();
  const [activeId, setActiveId] = useState('banking');

  const active = VERTICALS.find((v) => v.id === activeId) ?? VERTICALS[0];

  return (
    <div>
      {/* ── Header ─────────────────────────────────────────────────────── */}
      <section className="pt-[var(--band-tight)] pb-[var(--band)]">
        <Container width="wide">
          <div className="grid grid-cols-1 gap-x-16 gap-y-10 lg:grid-cols-12">
            <div className="lg:col-span-7">
              <h1 className="rise text-h1" style={{ animationDelay: '0ms' }}>
                One sector deep. Many sectors wide.
              </h1>
            </div>
            <div className="rise lg:col-span-5 lg:pt-4" style={{ animationDelay: '120ms' }}>
              <p className="measure text-lead text-[var(--color-ink-2)]">
                Sector expertise is not evenly distributed and this page does not pretend otherwise.
                Life Sciences carries a dedicated practice with six sub-sectors. Every other vertical
                draws on the same four capabilities, applied to its own market structure.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* ── Life Sciences: the elevated band, deliberately unequal ─────── */}
      <Section tone="raised" band="loose" width="wide" rule>
        <div className="grid grid-cols-1 gap-x-16 gap-y-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <img
              src="/assets/images/lifesciences_research_1788984006985.jpg"
              alt="Researcher evaluating formulation assays in a controlled pharmaceutical research environment"
              className="aspect-[4/5] w-full object-cover"
              loading="lazy"
            />
            <p className="mt-4 border-t border-[var(--color-line)] pt-4 text-caption text-[var(--color-ink-3)]">
              Founding heritage and core specialisation.
            </p>
          </div>

          <div className="lg:col-span-7">
            <h2 className="text-h2">Life Sciences.</h2>
            <p className="measure mt-6 text-lead text-[var(--color-ink)]">
              Pharmaceuticals, devices, diagnostics and healthcare delivery demand regulatory
              fluency and clinical context that generalist frameworks do not carry. This is where
              MindCraft goes deepest — a practice, not a panel.
            </p>

            <ul className="mt-10 grid grid-cols-1 border-t border-[var(--color-line-2)] sm:grid-cols-2 sm:gap-x-12">
              {LIFE_SCIENCES_SUBSECTORS.map((s) => (
                <li
                  key={s}
                  className="border-b border-[var(--color-line)] py-4 text-body text-[var(--color-ink)]"
                >
                  {s}
                </li>
              ))}
            </ul>

            <div className="mt-10 flex flex-wrap items-center gap-4">
              <button
                onClick={() => navigate('/industries/life-sciences')}
                className="group inline-flex cursor-pointer items-center gap-2.5 rounded-edge bg-[var(--color-accent)] px-7 py-4 text-body-sm font-medium text-[var(--color-ground-deep)] transition-colors hover:bg-[var(--color-accent-2)]"
              >
                The Life Sciences practice
                <ArrowUpRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1 group-hover:-translate-y-0.5" />
              </button>
              <button
                onClick={() => navigate('/explore?industry=Pharmaceuticals')}
                className="group inline-flex cursor-pointer items-center gap-2.5 rounded-edge border border-[var(--color-line-2)] px-7 py-4 text-body-sm text-[var(--color-ink)] transition-colors hover:border-[var(--color-line-strong)]"
              >
                Compose a scenario
                <ArrowRight className="h-4 w-4 text-[var(--color-accent)] transition-transform duration-200 group-hover:translate-x-1" />
              </button>
            </div>
          </div>
        </div>
      </Section>

      {/* ── Breadth: a structured list, grouped — not a uniform grid ───── */}
      <Section band="normal" width="wide" rule>
        <SectionHead
          title="Where else the capabilities apply."
          lead="Eleven verticals, grouped by the market structure they share. Select one to see what an engagement in it covers."
          meta={
            <span className="font-mono text-eyebrow uppercase tracking-[0.14em] text-[var(--color-grass)]">
              11 verticals
            </span>
          }
          className="mb-14"
        />

        <div className="grid grid-cols-1 gap-x-16 gap-y-12 lg:grid-cols-12">
          <div className="lg:col-span-7">
            {GROUPS.map((group) => (
              <section key={group} className="mb-10 last:mb-0">
                <h3 className="border-b border-[var(--color-line-2)] pb-3 text-caption text-[var(--color-ink-3)]">
                  {group}
                </h3>
                <ul>
                  {VERTICALS.filter((v) => v.group === group).map((v) => {
                    const on = v.id === activeId;
                    return (
                      <li key={v.id}>
                        <button
                          onClick={() => setActiveId(v.id)}
                          aria-pressed={on}
                          className={`group flex w-full cursor-pointer items-center justify-between gap-6 border-b py-4 text-left transition-colors ${
                            on
                              ? 'border-[var(--color-accent)]'
                              : 'border-[var(--color-line)] hover:border-[var(--color-line-strong)]'
                          }`}
                        >
                          <span
                            className={`text-h5 transition-colors ${
                              on
                                ? 'text-[var(--color-ink-strong)]'
                                : 'text-[var(--color-ink-2)] group-hover:text-[var(--color-ink)]'
                            }`}
                          >
                            {v.name}
                          </span>
                          <ArrowRight
                            className={`h-3.5 w-3.5 shrink-0 transition-all duration-200 ${
                              on
                                ? 'text-[var(--color-accent)]'
                                : 'text-[var(--color-line-strong)] opacity-0 group-hover:translate-x-1 group-hover:opacity-100'
                            }`}
                            aria-hidden="true"
                          />
                        </button>
                      </li>
                    );
                  })}
                </ul>
              </section>
            ))}
          </div>

          {/* Detail reads as an annotation on the list, not a card beside it. */}
          <div className="lg:col-span-5">
            <div className="border-t-2 border-[var(--color-accent)] pt-8 lg:sticky lg:top-28">
              <h3 className="text-h4">{active.name}</h3>

              <dl className="mt-8">
                <div className="border-t border-[var(--color-line)] py-5">
                  <dt className="text-caption text-[var(--color-ink-3)]">African market context</dt>
                  <dd className="mt-2 text-body text-[var(--color-ink)]">{active.relevance}</dd>
                </div>
                <div className="border-t border-[var(--color-line)] py-5">
                  <dt className="text-caption text-[var(--color-ink-3)]">What an engagement covers</dt>
                  <dd className="mt-2 text-body text-[var(--color-ink-2)]">{active.scope}</dd>
                </div>
              </dl>

              <div className="mt-6 flex flex-col items-start gap-4">
                <button
                  onClick={() => navigate(`/explore?industry=${encodeURIComponent(active.name)}`)}
                  className={linkCls}
                >
                  Compose this in the Explorer
                  <ArrowRight className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-1" />
                </button>
                <button
                  onClick={() => navigate(`/contact?industry=${encodeURIComponent(active.name)}`)}
                  className="group inline-flex cursor-pointer items-center gap-2.5 rounded-edge bg-[var(--color-accent)] px-6 py-3.5 text-body-sm font-medium text-[var(--color-ground-deep)] transition-colors hover:bg-[var(--color-accent-2)]"
                >
                  Start a conversation
                  <ArrowUpRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1 group-hover:-translate-y-0.5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* ── Closing ────────────────────────────────────────────────────── */}
      <Section tone="deep" band="normal" width="default" rule>
        <div className="grid grid-cols-1 gap-x-16 gap-y-10 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <h2 className="text-h2">Not sure which one you are?</h2>
            <p className="measure mt-6 text-lead text-[var(--color-ink-2)]">
              Most organisations sit across two or three of these. Describe the decision and we will
              tell you which capabilities it needs — and whether we are the right partner for it.
            </p>
            <button
              onClick={() => navigate('/contact')}
              className="group mt-10 inline-flex cursor-pointer items-center gap-2.5 rounded-edge bg-[var(--color-accent)] px-7 py-4 text-body-sm font-medium text-[var(--color-ground-deep)] transition-colors hover:bg-[var(--color-accent-2)]"
            >
              Start a conversation
              <ArrowUpRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1 group-hover:-translate-y-0.5" />
            </button>
          </div>

          <div className="border-t border-[var(--color-line)] pt-8 lg:col-span-4 lg:col-start-9 lg:border-t-0 lg:border-l lg:pt-0 lg:pl-10">
            <p className="text-body text-[var(--color-ink-2)]">
              Every vertical here is served from Nairobi across 45 African markets, with corridors
              into Europe and the United States.
            </p>
            <button onClick={() => navigate('/where-we-work')} className={`${linkCls} mt-6`}>
              Where we work
              <ArrowRight className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-1" />
            </button>
          </div>
        </div>
      </Section>
    </div>
  );
};
