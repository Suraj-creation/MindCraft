import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { useNavigation } from '../context/NavigationContext';
import { Section, Container } from '../components/layout/Section';

/* MindCraft was founded in 2026 and has not yet published. This page states the
   subjects the desk covers and says plainly that writing is in progress. It
   carries no articles, bylines, read-times or findings until real ones exist. */
const TOPICS = [
  {
    name: 'Life Sciences',
    scope:
      'Regulatory harmonisation across African authorities, market access, pharmacovigilance, and the commercial consequences of both for manufacturers and providers.',
  },
  {
    name: 'Africa Markets',
    scope:
      'Regional trade blocs, regulatory divergence, distribution structure and the practical differences between operating in one African market and operating in twelve.',
  },
  {
    name: 'Market Intelligence',
    scope:
      'Research method — how primary fieldwork is designed and sampled in markets where secondary data is thin, contested or absent entirely.',
  },
  {
    name: 'Business & Strategy',
    scope:
      'Operating models, market entry sequencing, organisational design and the strategic questions that come before a technology decision rather than after it.',
  },
  {
    name: 'AI & Digital Transformation',
    scope:
      'Applied enterprise AI in regulated industries — what deploys successfully in African operating conditions, and what governance it requires to stay compliant.',
  },
  {
    name: 'Research & Perspectives',
    scope:
      'Longer-form argument on the intersection of sector depth and applied technology, including method notes and positions we are prepared to defend.',
  },
];

export const Insights: React.FC = () => {
  const { navigate } = useNavigation();

  return (
    <div>
      <section className="pt-[var(--band-tight)] pb-[var(--band)]">
        <Container width="wide">
          <div className="grid grid-cols-1 gap-x-16 gap-y-8 lg:grid-cols-12">
            <div className="lg:col-span-7">
              <h1 className="text-h1">Insights</h1>
              <p className="measure mt-8 text-lead text-[var(--color-ink-2)]">
                The subjects our research and advisory work covers. MindCraft was founded in 2026 and
                the publishing desk is being built — when analysis appears here it will be our own,
                and it will say who wrote it and what it is based on.
              </p>
            </div>
            <div className="lg:col-span-4 lg:col-start-9 lg:pt-4">
              <p className="border-l border-[var(--color-line-2)] pl-6 text-body text-[var(--color-ink-3)]">
                We would rather publish nothing than publish research we have not done.
              </p>
            </div>
          </div>
        </Container>
      </section>

      <Section band="normal" width="wide" tone="ground-2" rule>
        <h2 className="text-h3 max-w-xl">What the desk covers.</h2>

        <div className="mt-14">
          {TOPICS.map((t, i) => (
            <article
              key={t.name}
              className="grid grid-cols-1 gap-x-12 gap-y-3 border-t border-[var(--color-line)] py-8 lg:grid-cols-12"
            >
              <div className="flex items-baseline gap-4 lg:col-span-4">
                <span className="font-mono text-eyebrow tracking-[0.14em] text-[var(--color-ink-3)]">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <h3 className="text-h5 text-[var(--color-ink-strong)]">{t.name}</h3>
              </div>
              <p className="text-body text-[var(--color-ink-2)] lg:col-span-8">{t.scope}</p>
            </article>
          ))}
        </div>
      </Section>

      <Section tone="deep" band="normal" width="default" rule>
        <div className="grid grid-cols-1 gap-x-16 gap-y-8 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <h2 className="text-h2">Ask us directly instead.</h2>
            <p className="measure mt-6 text-lead text-[var(--color-ink-2)]">
              Until the desk publishes, the fastest way to get our read on a market, a regulator or a
              technology decision is to ask for it.
            </p>
          </div>
          <div className="flex items-start lg:col-span-5 lg:justify-end lg:pt-4">
            <button
              onClick={() => navigate('/contact')}
              className="group inline-flex cursor-pointer items-center gap-2.5 rounded-edge bg-[var(--color-accent)] px-7 py-4 text-body-sm font-medium text-[var(--color-ground-deep)] transition-colors hover:bg-[var(--color-accent-2)]"
            >
              Start a conversation
              <ArrowUpRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1 group-hover:-translate-y-0.5" />
            </button>
          </div>
        </div>
      </Section>
    </div>
  );
};
