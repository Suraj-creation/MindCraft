import React from 'react';
import { ArrowUpRight, ArrowRight } from 'lucide-react';
import { useNavigation } from '../context/NavigationContext';
import { AILearningLadder } from '../components/AILearningLadder';
import { Section, Container, SectionHead } from '../components/layout/Section';

/* Four formats, parallel and unnumbered. Durations follow the delivery
   modalities the firm actually offers — short courses through to programmes. */
const FORMATS: [string, string][] = [
  [
    'Executive boardroom sessions',
    'One- to two-day intensives for boards and executive committees, built around simulated decisions and regulatory risk rather than slideware.',
  ],
  [
    'Departmental workflow sprints',
    'Applied cohort sprints over several weeks, redesigning an existing operational process into an AI-assisted one with verification built in.',
  ],
  [
    'Clinical decision sandboxes',
    'Hospital and laboratory sessions covering ambient charting, diagnostic decision support and the ethics and governance around both.',
  ],
  [
    'Engineering immersion labs',
    'Hands-on labs: fine-tuning smaller models, building private retrieval systems over internal documents, and deploying them in containers.',
  ],
];

const primaryBtn =
  'group inline-flex cursor-pointer items-center gap-2.5 rounded-edge bg-[var(--color-accent)] px-7 py-4 text-body-sm font-medium text-[var(--color-ground-deep)] transition-colors hover:bg-[var(--color-accent-2)]';
const ghostBtn =
  'group inline-flex cursor-pointer items-center gap-2.5 rounded-edge border border-[var(--color-line-2)] px-7 py-4 text-body-sm text-[var(--color-ink)] transition-colors hover:border-[var(--color-line-strong)]';
const linkCls =
  'group inline-flex items-center gap-2 text-body-sm text-[var(--color-accent)] hover:text-[var(--color-accent-2)] cursor-pointer';

export const AITraining: React.FC = () => {
  const { navigate } = useNavigation();

  return (
    <div>
      {/* ── Hero: the room first — this pillar is about people ─────────── */}
      <section className="pt-[var(--band-tight)] pb-[var(--band)]">
        <Container width="wide">
          <div className="grid grid-cols-1 items-center gap-x-16 gap-y-12 lg:grid-cols-12">
            <figure className="lg:col-span-5">
              <img
                src="/assets/images/african_executive_training_1788986677111.jpg"
                alt="Executives and clinicians working through an applied AI literacy session"
                className="aspect-[4/5] w-full object-cover"
                loading="eager"
              />
              <figcaption className="mt-4 border-t border-[var(--color-line)] pt-4 text-caption text-[var(--color-ink-3)]">
                Sessions are run with the teams who will operate the systems afterwards.
              </figcaption>
            </figure>

            <div className="lg:col-span-7">
              <h1 className="text-h1">Capability that stays after we leave.</h1>
              <p className="measure mt-8 text-lead text-[var(--color-ink-2)]">
                Technology investment stalls when the people around it cannot carry it. Practical,
                hands-on capability-building for boards, clinical teams and engineers — designed to
                produce internal champions, not awareness.
              </p>

              <div className="mt-10 flex flex-wrap items-center gap-4">
                <button onClick={() => navigate('/contact?topic=ai-training')} className={primaryBtn}>
                  Start a conversation
                  <ArrowUpRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1 group-hover:-translate-y-0.5" />
                </button>
                <button
                  onClick={() => navigate('/explore?capability=AI%20Training')}
                  className={ghostBtn}
                >
                  Compose a training brief
                  <ArrowRight className="h-4 w-4 text-[var(--color-accent)] transition-transform duration-200 group-hover:translate-x-1" />
                </button>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* ── The ladder ─────────────────────────────────────────────────── */}
      <Section tone="raised" band="normal" width="wide" rule>
        <SectionHead
          title="From boardroom governance to production engineering."
          lead="The same subject reads differently at each level of an organisation. The ladder shows where a given team starts, and what the step after it looks like."
          className="mb-14"
        />
        <AILearningLadder />
      </Section>

      {/* ── Formats ────────────────────────────────────────────────────── */}
      <Section band="normal" width="default" rule>
        <h2 className="text-h3 max-w-2xl">How the teaching is delivered.</h2>

        <dl className="mt-14 grid grid-cols-1 gap-x-16 md:grid-cols-2">
          {FORMATS.map(([term, def]) => (
            <div key={term} className="border-t border-[var(--color-line)] py-8">
              <dt className="text-h5 text-[var(--color-ink-strong)]">{term}</dt>
              <dd className="measure-sm mt-3 text-body text-[var(--color-ink-2)]">{def}</dd>
            </div>
          ))}
        </dl>

        <p className="measure mt-10 border-t border-[var(--color-line)] pt-8 text-body-sm text-[var(--color-ink-3)]">
          Delivered in person, virtually or hybrid — as short courses of one to five days,
          programmes running weeks to months, retainers, or scoped one-off projects.
        </p>
      </Section>

      {/* ── Closing ────────────────────────────────────────────────────── */}
      <Section tone="deep" band="tight" width="text" rule>
        <h2 className="text-h2">Start a conversation.</h2>
        <p className="mt-6 text-lead text-[var(--color-ink-2)]">
          Tell us who needs to be fluent and by when. We will tell you what that actually takes.
        </p>
        <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-4">
          <button onClick={() => navigate('/contact?topic=ai-training')} className={primaryBtn}>
            Start a conversation
            <ArrowUpRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1 group-hover:-translate-y-0.5" />
          </button>
          <button onClick={() => navigate('/what-we-do/ai-enterprise-solutions')} className={linkCls}>
            The systems these teams operate
            <ArrowRight className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-1" />
          </button>
        </div>
      </Section>
    </div>
  );
};
