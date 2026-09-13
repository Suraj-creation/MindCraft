import React, { useState } from 'react';
import { ArrowUpRight, ArrowRight } from 'lucide-react';
import { useNavigation } from '../context/NavigationContext';
import {
  GEO_REGIONS,
  ENGAGEMENT_STAGES,
  DIFFERENTIATORS,
  BREADTH_INDUSTRIES,
  AUDIENCE_PATHWAYS,
} from '../data/landingData';
import { Section, Container, SectionHead } from '../components/layout/Section';
import { EngineVisualSpine } from '../components/EngineVisualSpine';
import { LifeSciencesEcosystemDiagram } from '../components/LifeSciencesEcosystemDiagram';
import { AfricaInteractiveMap } from '../components/AfricaInteractiveMap';

/* Real structural facts. The source supports every one of these — they do the
   work that fabricated metrics would otherwise be reached for. */
const GLANCE = [
  { value: '2026', label: 'Founded' },
  { value: 'Nairobi', label: 'Headquarters' },
  { value: '04', label: 'Integrated capabilities' },
  { value: '45', label: 'African markets, four regions' },
  { value: '06', label: 'Life Sciences sub-sectors' },
];

const CAPABILITY_CHAIN = [
  { n: '01', name: 'Market Research', path: '/what-we-do/market-research' },
  { n: '02', name: 'Business Consulting', path: '/what-we-do/business-consulting' },
  { n: '03', name: 'AI Enterprise Solutions', path: '/what-we-do/ai-enterprise-solutions' },
  { n: '04', name: 'AI Training', path: '/what-we-do/ai-training' },
];

const INDUSTRIES = ['Pharmaceuticals', 'Medical Devices', 'Commercial Banking', 'Agribusiness'];
const GEOGRAPHIES = ['Kenya · East Africa', 'Nigeria · West Africa', 'South Africa · Southern', 'Egypt · North Africa'];
const CAPABILITIES = ['Market Research', 'Business Consulting', 'AI Enterprise Solutions', 'AI Training'];

const linkCls =
  'group inline-flex items-center gap-2 text-body-sm text-[var(--color-accent)] hover:text-[var(--color-accent-2)] cursor-pointer';

export const Home: React.FC = () => {
  const { navigate } = useNavigation();
  const [selectedRegionId, setSelectedRegionId] = useState<string>('east');
  const [industry, setIndustry] = useState(INDUSTRIES[0]);
  const [geography, setGeography] = useState(GEOGRAPHIES[0]);
  const [capability, setCapability] = useState(CAPABILITIES[0]);

  const selectCls =
    'w-full appearance-none bg-transparent border-0 border-b border-[var(--color-line-2)] pb-3 pt-2 text-h5 text-[var(--color-ink-strong)] cursor-pointer hover:border-[var(--color-accent)] focus:border-[var(--color-accent)] focus:outline-none transition-colors';

  return (
    <div>
      {/* ── Hero ───────────────────────────────────────────────────────── */}
      <section className="pt-[var(--band-tight)] pb-[var(--band)]">
        <Container width="wide">
          {/* Mono is legitimate here: these are coordinates and a date, not a label. */}
          <div
            className="rise flex flex-wrap items-center gap-x-5 gap-y-2 border-b border-[var(--color-line)] pb-5 font-mono text-eyebrow uppercase tracking-[0.14em] text-[var(--color-ink-3)]"
            style={{ animationDelay: '0ms' }}
          >
            <span className="text-[var(--color-ink-2)]">Nairobi, Kenya</span>
            <span aria-hidden="true">·</span>
            <span>1°17′S 36°49′E</span>
            <span aria-hidden="true">·</span>
            <span>Est. 2026</span>
          </div>

          <div className="grid grid-cols-1 gap-x-16 gap-y-12 pt-14 lg:grid-cols-12 lg:pt-20">
            <div className="lg:col-span-7">
              <h1 className="rise text-display" style={{ animationDelay: '80ms' }}>
                Sector depth,
                <br className="hidden sm:block" /> meet applied AI.
              </h1>

              <p
                className="rise measure mt-8 text-lead text-[var(--color-ink-2)]"
                style={{ animationDelay: '160ms' }}
              >
                A Nairobi-based consultancy uniting market research, business strategy, enterprise AI
                and executive training — anchored in Life Sciences and built for Africa.
              </p>

              <div className="rise mt-10 flex flex-wrap items-center gap-4" style={{ animationDelay: '240ms' }}>
                <button
                  onClick={() => navigate('/contact')}
                  className="group inline-flex cursor-pointer items-center gap-2.5 rounded-edge bg-[var(--color-accent)] px-7 py-4 text-body-sm font-medium text-[var(--color-ground-deep)] transition-colors hover:bg-[var(--color-accent-2)]"
                >
                  Start a conversation
                  <ArrowUpRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1 group-hover:-translate-y-0.5" />
                </button>
                <button
                  onClick={() => navigate('/what-we-do')}
                  className="group inline-flex cursor-pointer items-center gap-2.5 rounded-edge border border-[var(--color-line-2)] px-7 py-4 text-body-sm text-[var(--color-ink)] transition-colors hover:border-[var(--color-line-strong)]"
                >
                  See how the engine works
                  <ArrowRight className="h-4 w-4 text-[var(--color-accent)] transition-transform duration-200 group-hover:translate-x-1" />
                </button>
              </div>
            </div>

            <div className="rise lg:col-span-5" style={{ animationDelay: '320ms' }}>
              <figure className="relative">
                <img
                  src="/assets/images/nairobi_skyline_dawn_1788985474957.jpg"
                  alt="Nairobi's contemporary skyline at dawn"
                  className="aspect-[4/5] w-full object-cover"
                  loading="eager"
                />
                <div
                  className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[var(--color-ground-deep)]/70 to-transparent"
                  aria-hidden="true"
                />
                <figcaption className="mt-4 flex items-baseline justify-between border-t border-[var(--color-line)] pt-4 font-mono text-eyebrow uppercase tracking-[0.12em] text-[var(--color-ink-3)]">
                  <span>Upper Hill · Westlands</span>
                  <span className="text-[var(--color-grass)]">12 focus markets</span>
                </figcaption>
              </figure>
            </div>
          </div>

          {/* The four capabilities are a chain, not four parallel cards.
             The numerals are information: the order is the argument. */}
          <ol className="mt-20 grid grid-cols-1 border-t border-[var(--color-line)] sm:grid-cols-2 lg:grid-cols-4">
            {CAPABILITY_CHAIN.map((c, i) => (
              <li key={c.n}>
                <button
                  onClick={() => navigate(c.path)}
                  className="group flex w-full cursor-pointer items-baseline gap-4 border-b border-[var(--color-line)] py-7 pr-6 text-left transition-colors hover:bg-[var(--color-raised)] lg:border-b-0 lg:border-r lg:last:border-r-0 lg:pl-6 lg:first:pl-0"
                >
                  <span className="font-mono text-eyebrow text-[var(--color-accent)]">{c.n}</span>
                  <span className="flex-1 text-h5 text-[var(--color-ink)] transition-colors group-hover:text-[var(--color-ink-strong)]">
                    {c.name}
                  </span>
                  {i < CAPABILITY_CHAIN.length - 1 && (
                    <ArrowRight
                      className="hidden h-4 w-4 shrink-0 self-center text-[var(--color-line-strong)] lg:block"
                      aria-hidden="true"
                    />
                  )}
                </button>
              </li>
            ))}
          </ol>
        </Container>
      </section>

      {/* ── Glance strip — real facts, hairlines, no boxes ──────────────── */}
      <Section tone="ground-2" band="tight" width="wide" rule>
        <dl className="grid grid-cols-2 gap-x-8 gap-y-10 sm:grid-cols-3 lg:grid-cols-5">
          {GLANCE.map((g) => (
            <div key={g.label}>
              <dt className="sr-only">{g.label}</dt>
              <dd>
                <span className="block font-mono text-h4 text-[var(--color-grass)]">{g.value}</span>
                <span className="mt-2 block text-caption text-[var(--color-ink-3)]">{g.label}</span>
              </dd>
            </div>
          ))}
        </dl>
      </Section>

      {/* ── The engine ─────────────────────────────────────────────────── */}
      <Section id="engine" band="normal" width="wide" rule>
        <SectionHead
          title="Four disciplines, one continuous loop."
          lead="Research informs strategy, strategy guides AI investment, training makes adoption stick. The chain shows how they connect — not that all four are mandatory."
          action={
            <button onClick={() => navigate('/what-we-do')} className={linkCls}>
              All capabilities
              <ArrowRight className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-1" />
            </button>
          }
          className="mb-14"
        />
        <EngineVisualSpine />
      </Section>

      {/* ── Life Sciences ──────────────────────────────────────────────── */}
      <Section id="lifesciences" tone="raised" band="normal" width="wide" rule>
        <SectionHead
          title="Life Sciences is where we go deepest."
          lead="Founding heritage and core specialisation — regulatory fluency, clinical and commercial context across six sub-sectors."
          action={
            <button onClick={() => navigate('/industries/life-sciences')} className={linkCls}>
              The practice
              <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </button>
          }
          className="mb-14"
        />
        <LifeSciencesEcosystemDiagram />
      </Section>

      {/* ── Industries: depth beside breadth, deliberately unequal ──────── */}
      <Section id="industries" band="normal" width="wide" rule>
        <div className="grid grid-cols-1 gap-x-16 gap-y-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <h2 className="text-h3">Deep in Life Sciences. Broad across industry.</h2>
            <p className="measure mt-5 text-body text-[var(--color-ink-2)]">
              Sector expertise is not evenly distributed, and the site does not pretend otherwise.
              Life Sciences carries a dedicated practice. Everything else draws on the same four
              capabilities.
            </p>
            <button onClick={() => navigate('/industries')} className={`${linkCls} mt-8`}>
              All industries
              <ArrowRight className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-1" />
            </button>
          </div>

          <ul className="lg:col-span-7 lg:pt-2">
            {BREADTH_INDUSTRIES.map((name) => (
              <li key={name}>
                <button
                  onClick={() => navigate('/industries')}
                  className="group flex w-full cursor-pointer items-center justify-between gap-6 border-b border-[var(--color-line)] py-4 text-left transition-colors hover:border-[var(--color-line-strong)]"
                >
                  <span className="text-body text-[var(--color-ink-2)] transition-colors group-hover:text-[var(--color-ink-strong)]">
                    {name}
                  </span>
                  <ArrowRight className="h-3.5 w-3.5 shrink-0 text-[var(--color-line-strong)] opacity-0 transition-all duration-200 group-hover:translate-x-1 group-hover:opacity-100" />
                </button>
              </li>
            ))}
          </ul>
        </div>
      </Section>

      {/* ── Geography ──────────────────────────────────────────────────── */}
      <Section id="geography" tone="ground-2" band="loose" width="wide" rule className="dot-grid">
        <SectionHead
          title="Rooted in Nairobi. Focused on Africa."
          lead="Nairobi to East Africa to the continent, with corridors into Europe and the United States. Forty-five markets across four regions — focus markets and an associate network, never independent offices."
          action={
            <button onClick={() => navigate('/where-we-work')} className={linkCls}>
              Where we work
              <ArrowRight className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-1" />
            </button>
          }
          className="mb-14"
        />
        <AfricaInteractiveMap
          selectedRegionId={selectedRegionId}
          onRegionSelect={(id) => setSelectedRegionId(id)}
        />
      </Section>

      {/* ── Explorer: the interface is the visual ───────────────────────── */}
      <Section id="explore" tone="raised" band="normal" width="default" rule>
        <h2 className="text-h3">Compose your situation.</h2>
        <p className="font-mono mt-5 text-eyebrow uppercase tracking-[0.14em] text-[var(--color-ink-3)]">
          Industry × Geography × Capability → Result
        </p>

        <div className="mt-12 grid grid-cols-1 gap-x-10 gap-y-8 md:grid-cols-3">
          {[
            { label: 'Industry', value: industry, set: setIndustry, opts: INDUSTRIES },
            { label: 'Geography', value: geography, set: setGeography, opts: GEOGRAPHIES },
            { label: 'Capability', value: capability, set: setCapability, opts: CAPABILITIES },
          ].map((f) => (
            <div key={f.label}>
              <label
                htmlFor={`sel-${f.label}`}
                className="block font-mono text-eyebrow uppercase tracking-[0.14em] text-[var(--color-ink-3)]"
              >
                {f.label}
              </label>
              <select
                id={`sel-${f.label}`}
                value={f.value}
                onChange={(e) => f.set(e.target.value)}
                className={selectCls}
              >
                {f.opts.map((o) => (
                  <option key={o} value={o} className="bg-[var(--color-surface)] text-body">
                    {o}
                  </option>
                ))}
              </select>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-col gap-6 border-t border-[var(--color-line-2)] pt-8 md:flex-row md:items-end md:justify-between">
          <p className="measure text-lead text-[var(--color-ink)]">
            How MindCraft&apos;s {capability.toLowerCase()} applies to {industry.toLowerCase()} in{' '}
            {geography.split(' · ')[0]}.
          </p>
          <button
            onClick={() =>
              navigate(
                `/explore?industry=${encodeURIComponent(industry)}&geography=${encodeURIComponent(
                  geography
                )}&capability=${encodeURIComponent(capability)}`
              )
            }
            className="group inline-flex shrink-0 cursor-pointer items-center gap-2.5 rounded-edge border border-[var(--color-line-2)] px-6 py-3.5 text-body-sm text-[var(--color-ink)] transition-colors hover:border-[var(--color-accent)]"
          >
            Open this brief
            <ArrowRight className="h-4 w-4 text-[var(--color-accent)] transition-transform duration-200 group-hover:translate-x-1" />
          </button>
        </div>
      </Section>

      {/* ── Differentiators: editorial blocks, hairlines, no cards ──────── */}
      <Section id="differentiators" band="loose" width="default" rule>
        <h2 className="text-h3 max-w-2xl">Why the combination is the point.</h2>

        <div className="mt-16">
          {DIFFERENTIATORS.map((d) => (
            <article
              key={d.num}
              className="grid grid-cols-1 gap-x-12 gap-y-4 border-t border-[var(--color-line)] py-10 lg:grid-cols-12"
            >
              <div className="lg:col-span-4">
                <h3 className="text-h5 text-[var(--color-ink-strong)]">{d.title}</h3>
              </div>
              <div className="lg:col-span-8">
                <p className="text-lead text-[var(--color-ink)]">{d.statement}</p>
                <p className="measure mt-4 text-body text-[var(--color-ink-2)]">{d.proof}</p>
              </div>
            </article>
          ))}
        </div>
      </Section>

      {/* ── Process: a rail, not six cards ──────────────────────────────── */}
      <Section id="how-we-work" tone="ground-2" band="normal" width="wide" rule>
        <SectionHead
          title="How an engagement runs."
          lead="Six stages, start to follow-up. Not a branded framework — just how the work actually proceeds."
          action={
            <button onClick={() => navigate('/how-we-work')} className={linkCls}>
              In detail
              <ArrowRight className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-1" />
            </button>
          }
          className="mb-14"
        />

        <ol className="grid grid-cols-2 border-t border-[var(--color-line-2)] md:grid-cols-3 lg:grid-cols-6">
          {ENGAGEMENT_STAGES.map((s) => (
            <li
              key={s.number}
              className="border-b border-[var(--color-line)] pt-6 pb-8 pr-5 lg:border-b-0 lg:border-r lg:last:border-r-0 lg:pl-5 lg:first:pl-0"
            >
              <span className="font-mono text-eyebrow text-[var(--color-accent)]">{s.number}</span>
              <h3 className="mt-3 text-h5 text-[var(--color-ink-strong)]">{s.name}</h3>
              <p className="mt-3 text-caption text-[var(--color-ink-3)]">{s.objective}</p>
            </li>
          ))}
        </ol>
      </Section>

      {/* ── Who we serve ───────────────────────────────────────────────── */}
      <Section id="audiences" band="normal" width="default" rule>
        <SectionHead title="Find your way in." className="mb-12" />
        <ul className="grid grid-cols-1 gap-px bg-[var(--color-line)] sm:grid-cols-2">
          {AUDIENCE_PATHWAYS.map((a) => (
            <li key={a.id}>
              <button
                onClick={() => navigate(a.targetUrl)}
                className="group flex h-full w-full cursor-pointer flex-col bg-[var(--color-ground)] p-8 text-left transition-colors hover:bg-[var(--color-raised)]"
              >
                <span className="text-h5 text-[var(--color-ink-strong)]">{a.role}</span>
                <span className="measure-sm mt-3 flex-1 text-body-sm text-[var(--color-ink-2)]">
                  {a.mandate}
                </span>
                <span className="mt-6 inline-flex items-center gap-2 text-body-sm text-[var(--color-accent)]">
                  {a.keyAction}
                  <ArrowRight className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-1" />
                </span>
              </button>
            </li>
          ))}
        </ul>
      </Section>

      {/* ── Closing ────────────────────────────────────────────────────── */}
      <Section id="conversation" tone="deep" band="normal" width="default" rule>
        <div className="grid grid-cols-1 gap-x-16 gap-y-10 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <h2 className="text-h2">Start a conversation.</h2>
            <p className="measure mt-6 text-lead text-[var(--color-ink-2)]">
              Tell us the decision you are facing. We will tell you honestly whether we are the right
              partner for it.
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
              ['Headquarters', 'Nairobi, Kenya'],
              ['Primary focus', 'Africa — 45 markets, four regions'],
              ['Also serving', 'Europe · United States'],
            ].map(([k, v]) => (
              <div key={k}>
                <dt className="font-mono text-eyebrow uppercase tracking-[0.14em] text-[var(--color-ink-3)]">
                  {k}
                </dt>
                <dd className="mt-1.5 text-body text-[var(--color-ink)]">{v}</dd>
              </div>
            ))}
          </dl>
        </div>
      </Section>
    </div>
  );
};
