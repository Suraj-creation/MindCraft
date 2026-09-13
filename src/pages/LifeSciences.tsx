import React from 'react';
import { ArrowUpRight, ArrowRight } from 'lucide-react';
import { useNavigation } from '../context/NavigationContext';
import { Section, Container, SectionHead } from '../components/layout/Section';
import { LifeSciencesEcosystemDiagram } from '../components/LifeSciencesEcosystemDiagram';

/* Corridors are described as work MindCraft takes on, never as work already
   delivered. Established 2026 — there is no engagement history to cite, and
   no figure here that the source documents do not support. */
const CORRIDORS = [
  {
    id: 'cold-chain',
    title: 'Cold chain and last-mile integrity',
    lead: 'Biologics, vaccines and recombinant therapies need an unbroken 2–8°C or −20°C chain. The exposure is rarely the depot — it is the transit leg and the border yard.',
    corridor: 'Northern Corridor · Mombasa → Nairobi → Kampala → Kigali',
    corridor2: 'Central Corridor · Dar es Salaam → Dodoma → Bujumbura',
    items: [
      {
        name: 'Telemetry and logger auditing',
        body: 'Verification of GSM logger records against transit legs, to locate where thermal excursions occur rather than that they occurred.',
      },
      {
        name: 'Solar direct drive depot assessment',
        body: 'WHO PQS-referenced solar refrigeration mapping for decentralised vaccine hub distribution.',
      },
    ],
  },
  {
    id: 'trial-sites',
    title: 'Trial site feasibility',
    lead: 'Africa hosts a small share of global clinical trials relative to its population and genetic diversity. Sponsor feasibility work depends on knowing which sites can actually carry a protocol.',
    corridor: 'Kenya · Uganda · Nigeria · South Africa',
    corridor2: 'Academic and referral hospital networks',
    items: [
      {
        name: 'Investigator site assessment',
        body: 'Feasibility review covering Phase II/III protocol capacity, biobanking sovereignty and ethics review turnaround.',
      },
      {
        name: 'Consent and community engagement design',
        body: 'Vernacular consent protocols and community advisory board frameworks built for the study population.',
      },
    ],
  },
];

/* Named in the Corporate Profile as the Life-Sciences-specific AI work. */
const LS_AI = [
  {
    name: 'Pharmacovigilance and adverse-event monitoring',
    body: 'AI-assisted case intake, signal detection and reporting built to sit inside existing safety workflows.',
  },
  {
    name: 'Regulatory intelligence automation',
    body: 'Continuous monitoring of guidance and requirement changes across African and international regulators.',
  },
  {
    name: 'KOL identification and market-access analytics',
    body: 'Influence mapping and access-pathway analysis for therapy areas and territories under evaluation.',
  },
];

const AUTHORITIES = [
  {
    abbr: 'PPB',
    where: 'Kenya',
    name: 'Pharmacy and Poisons Board',
    scope: 'Dossier review, pharmacovigilance portal submissions, GMP inspection and EAC joint assessment.',
  },
  {
    abbr: 'NAFDAC',
    where: 'Nigeria',
    name: 'National Agency for Food and Drug Administration and Control',
    scope: 'Import permits, product registration and renewal, serialisation and track-and-trace compliance.',
  },
  {
    abbr: 'SAHPRA',
    where: 'South Africa',
    name: 'South African Health Products Regulatory Authority',
    scope: 'eCTD format compliance, Section 21 access, medical device licensing and clinical trial registration.',
  },
  {
    abbr: 'TMDA',
    where: 'Tanzania',
    name: 'Tanzania Medicines and Medical Devices Authority',
    scope: 'EAC mutual recognition, port-of-entry sampling and post-registration variation.',
  },
  {
    abbr: 'NDA',
    where: 'Uganda',
    name: 'National Drug Authority',
    scope: 'Post-market surveillance, institutional import licensing, essential medicines listing and cold-store audit.',
  },
  {
    abbr: 'AMA',
    where: 'Continental',
    name: 'African Medicines Agency',
    scope: 'Treaty-based harmonisation, centralised review for complex biologics, AfCFTA pharmaceutical trade.',
  },
];

const linkCls =
  'group inline-flex items-center gap-2 text-body-sm text-[var(--color-accent)] hover:text-[var(--color-accent-2)] cursor-pointer';

export const LifeSciences: React.FC = () => {
  const { navigate } = useNavigation();

  return (
    <div>
      {/* ── Hero: the page that carries the depth argument ─────────────── */}
      <section className="pt-[var(--band-tight)] pb-[var(--band)]">
        <Container width="wide">
          <div className="grid grid-cols-1 gap-x-16 gap-y-12 lg:grid-cols-12">
            <div className="lg:col-span-7">
              <h1 className="rise text-display" style={{ animationDelay: '0ms' }}>
                Life Sciences is where we go deepest.
              </h1>
              <p
                className="rise measure mt-8 text-lead text-[var(--color-ink-2)]"
                style={{ animationDelay: '120ms' }}
              >
                The founding heritage and core specialisation of MindCraft. Six sub-sectors, from
                molecule to hospital ward — read through African regulatory structure, clinical
                practice and commercial reality at the same time.
              </p>

              <div className="rise mt-10 flex flex-wrap items-center gap-4" style={{ animationDelay: '200ms' }}>
                <button
                  onClick={() => navigate('/contact?industry=Life%20Sciences')}
                  className="group inline-flex cursor-pointer items-center gap-2.5 rounded-edge bg-[var(--color-accent)] px-7 py-4 text-body-sm font-medium text-[var(--color-ground-deep)] transition-colors hover:bg-[var(--color-accent-2)]"
                >
                  Start a conversation
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

            <div className="rise lg:col-span-5" style={{ animationDelay: '280ms' }}>
              <figure>
                <img
                  src="/assets/images/african_medical_diagnostics_1788986720251.jpg"
                  alt="Clinical director validating automated instrumentation in an accredited diagnostic laboratory"
                  className="aspect-[4/5] w-full object-cover"
                  loading="eager"
                />
                <figcaption className="mt-4 flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1 border-t border-[var(--color-line)] pt-4 text-caption text-[var(--color-ink-3)]">
                  <span>Clinical and molecular validation</span>
                  <span className="text-[var(--color-green)]">PPB · NAFDAC · SAHPRA</span>
                </figcaption>
              </figure>
            </div>
          </div>
        </Container>
      </section>

      {/* ── The thesis: one statement, asymmetric, no container ────────── */}
      <Section tone="ground-2" band="normal" width="wide" rule>
        <div className="grid grid-cols-1 gap-x-16 gap-y-8 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <h2 className="text-h3">Clinical language and commercial language, in one room.</h2>
          </div>
          <div className="lg:col-span-7 lg:pt-2">
            <p className="measure text-lead text-[var(--color-ink)]">
              Healthcare advisory in Africa tends to split. One side speaks policy and public health
              and stops at the recommendation. The other speaks margin and market entry and treats
              the clinical detail as someone else&apos;s problem.
            </p>
            <p className="measure mt-6 text-body text-[var(--color-ink-2)]">
              MindCraft works in both registers: bioequivalence, pharmacokinetics and trial endpoints
              on one side; distributor margin structure, cold-chain service levels and public tender
              pricing on the other. A regulatory pathway that ignores the commercial model is not a
              plan, and a commercial model that ignores the pathway is not a plan either.
            </p>
          </div>
        </div>
      </Section>

      {/* ── The six sub-sectors ────────────────────────────────────────── */}
      <Section tone="raised" band="normal" width="wide" rule>
        <SectionHead
          title="Six sub-sectors, each with its own structure."
          lead="Select a sub-sector to see its regulatory context, market conditions and the work MindCraft takes on within it."
          meta={
            <span className="font-mono text-eyebrow uppercase tracking-[0.14em] text-[var(--color-grass)]">
              06 sub-sectors
            </span>
          }
          className="mb-14"
        />
        <LifeSciencesEcosystemDiagram />
      </Section>

      {/* ── Operational corridors: editorial blocks split by hairlines ─── */}
      <Section band="loose" width="default" rule>
        <h2 className="max-w-2xl text-h3">Where Life Sciences work actually gets hard.</h2>
        <p className="measure mt-5 text-body text-[var(--color-ink-2)]">
          Two places where a sound strategy fails on physical and procedural ground, and where the
          sector work concentrates.
        </p>

        <div className="mt-16">
          {CORRIDORS.map((c) => (
            <article
              key={c.id}
              className="grid grid-cols-1 gap-x-12 gap-y-8 border-t border-[var(--color-line)] py-12 lg:grid-cols-12"
            >
              <div className="lg:col-span-4">
                <h3 className="text-h4">{c.title}</h3>
                {/* Mono here is route and jurisdiction data, not a label. */}
                <p className="mt-6 font-mono text-caption text-[var(--color-ink-3)]">{c.corridor}</p>
                <p className="mt-1.5 font-mono text-caption text-[var(--color-ink-3)]">{c.corridor2}</p>
              </div>

              <div className="lg:col-span-8">
                <p className="measure text-lead text-[var(--color-ink)]">{c.lead}</p>
                <dl className="mt-8">
                  {c.items.map((it) => (
                    <div key={it.name} className="border-t border-[var(--color-line)] py-5">
                      <dt className="text-body text-[var(--color-ink-strong)]">{it.name}</dt>
                      <dd className="measure mt-2 text-body-sm text-[var(--color-ink-2)]">{it.body}</dd>
                    </div>
                  ))}
                </dl>
              </div>
            </article>
          ))}
        </div>
      </Section>

      {/* ── Life-Sciences-specific AI ──────────────────────────────────── */}
      <Section tone="ground-2" band="normal" width="default" rule>
        <SectionHead
          title="AI built for this sector, not adapted to it."
          lead="Three areas where the enterprise AI practice is written against Life Sciences workflows rather than generalised from another industry."
          action={
            <button onClick={() => navigate('/what-we-do/ai-enterprise-solutions')} className={linkCls}>
              AI Enterprise Solutions
              <ArrowRight className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-1" />
            </button>
          }
          className="mb-14"
        />

        <dl className="border-t border-[var(--color-line-2)]">
          {LS_AI.map((a) => (
            <div
              key={a.name}
              className="grid grid-cols-1 gap-x-12 gap-y-2 border-b border-[var(--color-line)] py-6 lg:grid-cols-12"
            >
              <dt className="text-h5 text-[var(--color-ink-strong)] lg:col-span-5">{a.name}</dt>
              <dd className="text-body text-[var(--color-ink-2)] lg:col-span-7">{a.body}</dd>
            </div>
          ))}
        </dl>
      </Section>

      {/* ── Regulatory authorities: a structured list, not six cards ───── */}
      <Section band="normal" width="wide" rule>
        <SectionHead
          title="The authorities the work runs against."
          lead="Submission, compliance and surveillance work is shaped by the authority that governs it. These are the ones that matter most across African markets."
          className="mb-14"
        />

        <dl className="border-t border-[var(--color-line-2)]">
          {AUTHORITIES.map((a) => (
            <div
              key={a.abbr}
              className="grid grid-cols-1 gap-x-12 gap-y-3 border-b border-[var(--color-line)] py-7 lg:grid-cols-12"
            >
              <dt className="lg:col-span-3">
                <span className="block text-h5 text-[var(--color-ink-strong)]">{a.abbr}</span>
                <span className="mt-1 block text-caption text-[var(--color-green)]">{a.where}</span>
              </dt>
              <dd className="lg:col-span-9">
                <p className="text-body text-[var(--color-ink)]">{a.name}</p>
                <p className="measure mt-2 text-body-sm text-[var(--color-ink-2)]">{a.scope}</p>
              </dd>
            </div>
          ))}
        </dl>
      </Section>

      {/* ── Closing ────────────────────────────────────────────────────── */}
      <Section tone="deep" band="normal" width="default" rule>
        <div className="grid grid-cols-1 gap-x-16 gap-y-10 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <h2 className="text-h2">Start a Life Sciences conversation.</h2>
            <p className="measure mt-6 text-lead text-[var(--color-ink-2)]">
              A registration pathway, a launch, a distributor problem, a hospital operating model, a
              safety workflow that will not scale. Tell us which one, and we will tell you honestly
              whether we are the right partner for it.
            </p>
            <div className="mt-10 flex flex-wrap items-center gap-4">
              <button
                onClick={() => navigate('/contact?industry=Life%20Sciences')}
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

          <div className="border-t border-[var(--color-line)] pt-8 lg:col-span-4 lg:col-start-9 lg:border-t-0 lg:border-l lg:pt-0 lg:pl-10">
            <p className="text-body text-[var(--color-ink-2)]">
              Life Sciences runs across all four capabilities — research, advisory, enterprise AI and
              training — as one engagement rather than four.
            </p>
            <button onClick={() => navigate('/what-we-do')} className={`${linkCls} mt-6`}>
              How the engine works
              <ArrowRight className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-1" />
            </button>
          </div>
        </div>
      </Section>
    </div>
  );
};
