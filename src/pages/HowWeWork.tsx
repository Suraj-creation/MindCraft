import React, { useRef, useState } from 'react';
import { ArrowUpRight, ArrowRight } from 'lucide-react';
import { useNavigation } from '../context/NavigationContext';
import { ENGAGEMENT_STAGES, DIFFERENTIATORS } from '../data/landingData';
import { Section, Container, SectionHead } from '../components/layout/Section';

/* The seven delivery modalities, exactly as the source states them. They are
   two axes, not seven parallel products — format is how the work happens,
   term is how long it runs. Rendering them as a matrix is the honest form. */
const MODALITY_AXES: { axis: string; note: string; items: [string, string][] }[] = [
  {
    axis: 'Format',
    note: 'How the work happens',
    items: [
      ['In-person', 'On site, in the market'],
      ['Virtual', 'Remote, across time zones'],
      ['Hybrid', 'Fieldwork plus remote delivery'],
    ],
  },
  {
    axis: 'Term',
    note: 'How long it runs',
    items: [
      ['Short courses', '1–5 days'],
      ['Longer programmes', 'Weeks to months'],
      ['Retainers', 'Ongoing'],
      ['Scoped one-off projects', 'Fixed scope'],
    ],
  },
];

export const HowWeWork: React.FC = () => {
  const { navigate } = useNavigation();
  const [activeNum, setActiveNum] = useState<string>('01');
  const refs = useRef<(HTMLButtonElement | null)[]>([]);

  const activeIndex = Math.max(0, ENGAGEMENT_STAGES.findIndex((s) => s.number === activeNum));
  const active = ENGAGEMENT_STAGES[activeIndex];

  // The six stages are ordered and the order is the argument, so walk it.
  const onKeyDown = (e: React.KeyboardEvent, i: number) => {
    const delta = e.key === 'ArrowRight' ? 1 : e.key === 'ArrowLeft' ? -1 : 0;
    if (!delta) return;
    e.preventDefault();
    const next = (i + delta + ENGAGEMENT_STAGES.length) % ENGAGEMENT_STAGES.length;
    setActiveNum(ENGAGEMENT_STAGES[next].number);
    refs.current[next]?.focus();
  };

  return (
    <div>
      {/* ── Hero ───────────────────────────────────────────────────────── */}
      <section className="pt-[var(--band-tight)] pb-[var(--band)]">
        <Container width="wide">
          <div className="grid grid-cols-1 gap-x-16 gap-y-10 lg:grid-cols-12">
            <div className="lg:col-span-8">
              <h1 className="rise text-h1">How an engagement runs.</h1>
              <p
                className="rise measure mt-8 text-lead text-[var(--color-ink-2)]"
                style={{ animationDelay: '80ms' }}
              >
                Six stages, from the first framing conversation through to follow-up. Not a branded
                framework and not a methodology with a name — just the sequence the work actually
                moves through, stated in advance so nothing about it is a surprise.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* ── The spine ──────────────────────────────────────────────────── */}
      <Section id="stages" tone="ground-2" band="normal" width="wide" rule>
        <SectionHead
          title="Discovery to follow-up."
          lead="Select a stage to see what it is for and what it produces."
          meta={
            <span className="font-mono text-eyebrow uppercase tracking-[0.14em] text-[var(--color-ink-3)]">
              01 — 06
            </span>
          }
          className="mb-14"
        />

        <ol className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6" role="tablist" aria-label="The six engagement stages">
          {ENGAGEMENT_STAGES.map((s, i) => {
            const on = s.number === activeNum;
            const past = i < activeIndex;
            return (
              <li key={s.number} className="relative">
                <button
                  ref={(el) => {
                    refs.current[i] = el;
                  }}
                  role="tab"
                  aria-selected={on}
                  tabIndex={on ? 0 : -1}
                  onClick={() => setActiveNum(s.number)}
                  onKeyDown={(e) => onKeyDown(e, i)}
                  className={`group relative w-full cursor-pointer border-l-2 pb-8 pl-5 pr-4 pt-6 text-left transition-colors lg:border-l-0 lg:border-t-2 lg:pl-0 lg:pr-6 lg:pt-8 ${
                    on
                      ? 'border-[var(--color-accent)]'
                      : past
                        ? 'border-[var(--color-line-strong)] hover:border-[var(--color-accent-2)]'
                        : 'border-[var(--color-line)] hover:border-[var(--color-line-strong)]'
                  }`}
                >
                  {/* The node sits on the rail itself. */}
                  <span
                    aria-hidden="true"
                    className={`absolute left-0 top-6 h-2 w-2 -translate-x-[5px] rounded-full transition-colors lg:left-0 lg:top-0 lg:-translate-x-0 lg:-translate-y-[5px] ${
                      on
                        ? 'bg-[var(--color-accent)]'
                        : past
                          ? 'bg-[var(--color-line-strong)]'
                          : 'bg-[var(--color-line-2)]'
                    }`}
                  />
                  <span className="font-mono text-eyebrow tracking-[0.14em] text-[var(--color-ink-3)]">
                    {s.number}
                  </span>
                  <span
                    className={`mt-2 block text-h5 transition-colors ${
                      on
                        ? 'text-[var(--color-ink-strong)]'
                        : 'text-[var(--color-ink-2)] group-hover:text-[var(--color-ink)]'
                    }`}
                  >
                    {s.name}
                  </span>
                </button>
              </li>
            );
          })}
        </ol>

        {/* Detail reads as editorial prose, not stacked boxes. */}
        <div className="mt-12 grid grid-cols-1 gap-x-14 gap-y-8 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <p className="font-mono text-eyebrow uppercase tracking-[0.14em] text-[var(--color-accent)]">
              Stage {active.number} of 06
            </p>
            <h3 className="mt-3 text-h3">{active.name}</h3>
          </div>

          <dl className="lg:col-span-7" aria-live="polite">
            <div className="grid grid-cols-1 gap-1 py-4 sm:grid-cols-12 sm:gap-6">
              <dt className="text-caption text-[var(--color-ink-3)] sm:col-span-3">Purpose</dt>
              <dd className="text-body text-[var(--color-ink-2)] sm:col-span-9">{active.objective}</dd>
            </div>
            <div className="grid grid-cols-1 gap-1 border-t border-[var(--color-line)] py-4 sm:grid-cols-12 sm:gap-6">
              <dt className="text-caption text-[var(--color-ink-3)] sm:col-span-3">What you receive</dt>
              <dd className="text-body text-[var(--color-ink-strong)] sm:col-span-9">{active.outcome}</dd>
            </div>
          </dl>
        </div>
      </Section>

      {/* ── Delivery: a matrix of two axes, not seven cards ─────────────── */}
      <Section id="delivery" band="normal" width="default" rule>
        <div className="grid grid-cols-1 gap-x-16 gap-y-12 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <h2 className="text-h3">Seven ways it gets delivered.</h2>
            <p className="measure mt-5 text-body text-[var(--color-ink-2)]">
              Format and term are chosen separately. A short course can run in person or remotely; a
              retainer can be hybrid. The combination is set at Proposal, not assumed.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-x-14 gap-y-12 sm:grid-cols-2 lg:col-span-8">
            {MODALITY_AXES.map((group) => (
              <div key={group.axis}>
                <div className="flex items-baseline justify-between gap-4 border-b border-[var(--color-line-strong)] pb-3">
                  <h3 className="text-h5 text-[var(--color-ink-strong)]">{group.axis}</h3>
                  <span className="text-caption text-[var(--color-ink-3)]">{group.note}</span>
                </div>
                <dl>
                  {group.items.map(([name, qualifier]) => (
                    <div
                      key={name}
                      className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1 border-b border-[var(--color-line)] py-4"
                    >
                      <dt className="text-body text-[var(--color-ink)]">{name}</dt>
                      <dd className="text-caption text-[var(--color-ink-3)]">{qualifier}</dd>
                    </div>
                  ))}
                </dl>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* ── Differentiators: editorial blocks, hairlines, no cards ──────── */}
      <Section id="differentiators" tone="raised" band="loose" width="default" rule>
        <h2 className="max-w-2xl text-h3">Why the combination is the point.</h2>
        <p className="measure mt-5 text-body text-[var(--color-ink-2)]">
          Five things that shape how an engagement is staffed and scoped. They are claims about
          method, not about results — the firm was founded in 2026 and has no track record to trade
          on yet.
        </p>

        <div className="mt-16">
          {DIFFERENTIATORS.map((d) => (
            <article
              key={d.num}
              className="grid grid-cols-1 gap-x-14 gap-y-4 border-t border-[var(--color-line-2)] py-12 lg:grid-cols-12"
            >
              <h3 className="text-h4 lg:col-span-5">{d.title}</h3>
              <div className="lg:col-span-7">
                <p className="text-lead text-[var(--color-ink)]">{d.statement}</p>
                <p className="measure mt-5 text-body text-[var(--color-ink-2)]">{d.proof}</p>
              </div>
            </article>
          ))}
        </div>
      </Section>

      {/* ── Where it connects ──────────────────────────────────────────── */}
      <Section band="tight" width="default" rule>
        <div className="grid grid-cols-1 gap-x-16 gap-y-8 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <h2 className="text-h4">The stages carry the four capabilities.</h2>
          </div>
          <div className="lg:col-span-7">
            <p className="measure text-body text-[var(--color-ink-2)]">
              Discovery and Design draw on research; Delivery is where consulting, engineering and
              training actually run. Which capabilities appear in an engagement is decided at
              Proposal — clients frequently engage across two or more at once.
            </p>
            <button
              onClick={() => navigate('/what-we-do')}
              className="group mt-8 inline-flex cursor-pointer items-center gap-2 text-body-sm text-[var(--color-accent)] hover:text-[var(--color-accent-2)]"
            >
              See the four capabilities
              <ArrowRight className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-1" />
            </button>
          </div>
        </div>
      </Section>

      {/* ── Closing ────────────────────────────────────────────────────── */}
      <Section tone="deep" band="normal" width="default" rule>
        <SectionHead
          title="Start a conversation."
          lead="Scope begins at Discovery: we frame the problem with you before anything is proposed or priced."
          className="mb-10"
        />
        <div className="flex flex-wrap items-center gap-4">
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
      </Section>
    </div>
  );
};
