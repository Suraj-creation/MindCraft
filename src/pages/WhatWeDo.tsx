import React from 'react';
import { ArrowUpRight, ArrowRight } from 'lucide-react';
import { useNavigation } from '../context/NavigationContext';
import { Section, Container, SectionHead } from '../components/layout/Section';
import { EngineVisualSpine } from '../components/EngineVisualSpine';

/* Chain order, not source order. The sequence is the argument: research
   informs strategy, strategy directs what gets built, training makes the
   build hold. Positioning lines are the Corporate Profile's own words. */
interface Pillar {
  n: string;
  name: string;
  path: string;
  positioning: string;
  scope: string[];
  handoff: string;
}

const PILLARS: Pillar[] = [
  {
    n: '01',
    name: 'Market Research',
    path: '/what-we-do/market-research',
    positioning:
      'Rigorous primary and secondary research that turns market complexity into decision-ready intelligence — purpose-built for Life Sciences and diversified industry clients operating in African and international markets.',
    scope: [
      'Primary quantitative and qualitative fieldwork',
      'KOL and stakeholder network mapping',
      'Competitive intelligence and pricing studies',
      'Programme monitoring and impact evaluation',
    ],
    handoff: 'Hands strategy a verified baseline instead of an assumption.',
  },
  {
    n: '02',
    name: 'Business Consulting',
    path: '/what-we-do/business-consulting',
    positioning:
      'Strategic and management advisory that helps organisations make better decisions, restructure for growth and execute change with confidence — grounded in Life Sciences and cross-industry practice.',
    scope: [
      'Corporate and business strategy formulation',
      'Digital and AI transformation architecture',
      'Target operating models and governance',
      'Policy and regulatory compliance advisory',
    ],
    handoff: 'Decides what is worth building before anything is built.',
  },
  {
    n: '03',
    name: 'AI Enterprise Solutions',
    path: '/what-we-do/ai-enterprise-solutions',
    positioning:
      'End-to-end design, build and integration of AI-powered systems that operationalise insight into everyday business workflows — from market intelligence platforms to patient- and customer-facing AI tools.',
    scope: [
      'Private LLM and retrieval implementations',
      'Document and regulatory text extraction',
      'Process automation across existing systems',
      'Life-Sciences-specific pharmacovigilance tooling',
    ],
    handoff: 'Puts the decision into the workflow where the work happens.',
  },
  {
    n: '04',
    name: 'AI Training & Digital Literacy',
    path: '/what-we-do/ai-training',
    positioning:
      'Practical, hands-on AI capability-building for individuals, teams and organisations — designed to build real AI literacy and internal champions, not just awareness.',
    scope: [
      'Executive briefings and strategy masterclasses',
      'Function-specific workflows for commercial, clinical and finance teams',
      'Responsible AI and data governance frameworks',
      'Train-the-trainer and internal champion programmes',
    ],
    handoff: 'Leaves practitioners who can carry the system without us.',
  },
];

/* The source defines itself by negation — "rather than four disconnected
   vendors." That contrast is the argument for the chain, stated as a
   structural difference, never as a claimed outcome. */
const INTEGRATED = [
  'Research is scoped against the decision it has to support.',
  'Strategy is built on the fieldwork the same team ran.',
  'Systems are designed around the bottleneck the research found.',
  'Training is written against the system that was actually deployed.',
];

const linkCls =
  'group inline-flex items-center gap-2 text-body-sm text-[var(--color-accent)] hover:text-[var(--color-accent-2)] cursor-pointer';

export const WhatWeDo: React.FC = () => {
  const { navigate } = useNavigation();

  return (
    <div>
      {/* ── Header: the chain stated once, in full ─────────────────────── */}
      <section className="pt-[var(--band-tight)] pb-[var(--band)]">
        <Container width="wide">
          <div className="grid grid-cols-1 gap-x-16 gap-y-10 lg:grid-cols-12">
            <div className="lg:col-span-7">
              <h1 className="rise text-h1" style={{ animationDelay: '0ms' }}>
                One engine, from question to impact.
              </h1>
            </div>
            <div className="rise lg:col-span-5 lg:pt-4" style={{ animationDelay: '120ms' }}>
              <p className="measure text-lead text-[var(--color-ink-2)]">
                Research informs strategy. Strategy directs what gets built. Training makes the build
                hold. Four disciplines run as one accountable chain — not four vendors passing
                documents between them.
              </p>
            </div>
          </div>

          {/* The chain, with its terminus. Numerals are information here:
             the order carries the whole argument. */}
          <ol className="rise mt-16 border-t border-[var(--color-line-2)]" style={{ animationDelay: '220ms' }}>
            {PILLARS.map((p) => (
              <li key={p.n}>
                <button
                  onClick={() => navigate(p.path)}
                  className="group grid w-full cursor-pointer grid-cols-1 items-baseline gap-x-10 gap-y-2 border-b border-[var(--color-line)] py-6 text-left transition-colors hover:bg-[var(--color-raised)] lg:grid-cols-12"
                >
                  <span className="font-mono text-eyebrow text-[var(--color-accent)] lg:col-span-1">
                    {p.n}
                  </span>
                  <span className="text-h5 text-[var(--color-ink)] transition-colors group-hover:text-[var(--color-ink-strong)] lg:col-span-4">
                    {p.name}
                  </span>
                  <span className="flex items-center justify-between gap-6 text-body-sm text-[var(--color-ink-3)] lg:col-span-7">
                    {p.handoff}
                    <ArrowRight className="h-3.5 w-3.5 shrink-0 text-[var(--color-line-strong)] opacity-0 transition-all duration-200 group-hover:translate-x-1 group-hover:opacity-100" />
                  </span>
                </button>
              </li>
            ))}
            <li className="grid grid-cols-1 items-baseline gap-x-10 gap-y-2 border-b border-[var(--color-line)] py-6 lg:grid-cols-12">
              <span className="font-mono text-eyebrow text-[var(--color-grass)] lg:col-span-1">05</span>
              <span className="text-h5 text-[var(--color-ink-2)] lg:col-span-4">Measurable impact</span>
              <span className="text-body-sm text-[var(--color-ink-3)] lg:col-span-7">
                Evidence that feeds the next question — the chain closes and starts again.
              </span>
            </li>
          </ol>
        </Container>
      </section>

      {/* ── The spine, stage by stage ──────────────────────────────────── */}
      <Section tone="raised" band="normal" width="wide" rule>
        <SectionHead
          title="How an engagement moves down the chain."
          lead="Six stages from first question to evidence. Select a stage to see what goes in, what happens and what comes out."
          className="mb-14"
        />
        <EngineVisualSpine />
      </Section>

      {/* ── Each capability in depth — editorial blocks, not four cards ── */}
      <Section band="loose" width="default" rule>
        <h2 className="max-w-2xl text-h3">The four disciplines in detail.</h2>
        <p className="measure mt-5 text-body text-[var(--color-ink-2)]">
          Clients frequently engage across two or more at once. The integration is the point — but no
          part of the chain is mandatory to start.
        </p>

        <div className="mt-16">
          {PILLARS.map((p) => (
            <article
              key={p.n}
              className="grid grid-cols-1 gap-x-12 gap-y-6 border-t border-[var(--color-line)] py-12 lg:grid-cols-12"
            >
              <div className="lg:col-span-4">
                <span className="font-mono text-eyebrow text-[var(--color-accent)]">{p.n}</span>
                <h3 className="mt-3 text-h4">{p.name}</h3>
                <button onClick={() => navigate(p.path)} className={`${linkCls} mt-6`}>
                  The full capability
                  <ArrowRight className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-1" />
                </button>
              </div>

              <div className="lg:col-span-8">
                <p className="measure text-lead text-[var(--color-ink)]">{p.positioning}</p>
                <ul className="mt-8 grid grid-cols-1 gap-x-12 sm:grid-cols-2">
                  {p.scope.map((s) => (
                    <li
                      key={s}
                      className="border-t border-[var(--color-line)] py-3 text-body-sm text-[var(--color-ink-2)]"
                    >
                      {s}
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </Section>

      {/* ── Why one partner: a structural contrast, not a scorecard ────── */}
      <Section tone="ground-2" band="normal" width="default" rule>
        <SectionHead
          title="Why the chain is the product."
          lead="The alternative is not a worse partner. It is four partners, each accountable for a different fragment of the same decision."
          className="mb-14"
        />

        <div className="grid grid-cols-1 gap-x-16 gap-y-12 border-t border-[var(--color-line-2)] pt-10 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <h3 className="text-h5 text-[var(--color-ink-3)]">Four disconnected vendors</h3>
            <p className="measure mt-5 text-body text-[var(--color-ink-3)]">
              A research firm hands over a report with no route to a decision. Strategy arrives as a
              deck detached from field reality. A technology vendor ships tools nobody internally can
              operate. Training is generic, and adoption stalls after the workshop. Each is
              accountable for its own fragment; nobody is accountable for the decision.
            </p>
          </div>

          <div className="lg:col-span-7">
            <h3 className="text-h5 text-[var(--color-ink-strong)]">One integrated engagement</h3>
            <ul className="mt-5">
              {INTEGRATED.map((s) => (
                <li
                  key={s}
                  className="border-t border-[var(--color-line)] py-4 text-body text-[var(--color-ink)] first:border-t-0 first:pt-0"
                >
                  {s}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      {/* ── Closing ────────────────────────────────────────────────────── */}
      <Section tone="deep" band="normal" width="default" rule>
        <div className="grid grid-cols-1 gap-x-16 gap-y-10 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <h2 className="text-h2">Scope an integrated engagement.</h2>
            <p className="measure mt-6 text-lead text-[var(--color-ink-2)]">
              Start anywhere on the chain. Tell us the decision you are facing and we will say
              honestly which capabilities it actually needs.
            </p>
            <div className="mt-10 flex flex-wrap items-center gap-4">
              <button
                onClick={() => navigate('/contact')}
                className="group inline-flex cursor-pointer items-center gap-2.5 rounded-edge bg-[var(--color-accent)] px-7 py-4 text-body-sm font-medium text-[var(--color-ground-deep)] transition-colors hover:bg-[var(--color-accent-2)]"
              >
                Start a conversation
                <ArrowUpRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1 group-hover:-translate-y-0.5" />
              </button>
              <button
                onClick={() => navigate('/explore')}
                className="group inline-flex cursor-pointer items-center gap-2.5 rounded-edge border border-[var(--color-line-2)] px-7 py-4 text-body-sm text-[var(--color-ink)] transition-colors hover:border-[var(--color-line-strong)]"
              >
                Compose it in the Explorer
                <ArrowRight className="h-4 w-4 text-[var(--color-accent)] transition-transform duration-200 group-hover:translate-x-1" />
              </button>
            </div>
          </div>

          <div className="border-t border-[var(--color-line)] pt-8 lg:col-span-4 lg:col-start-9 lg:border-t-0 lg:border-l lg:pt-0 lg:pl-10">
            <p className="text-body text-[var(--color-ink-2)]">
              Deepest sector expertise sits in Life Sciences, where all four capabilities run against
              regulatory, clinical and commercial context at once.
            </p>
            <button onClick={() => navigate('/industries/life-sciences')} className={`${linkCls} mt-6`}>
              The Life Sciences practice
              <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </button>
          </div>
        </div>
      </Section>
    </div>
  );
};
