import React from 'react';
import { ArrowUpRight, ArrowRight } from 'lucide-react';
import { useNavigation } from '../context/NavigationContext';
import { Section, Container, SectionHead } from '../components/layout/Section';

/* Vision and Mission are quoted from the corporate profile, not paraphrased.
   The source wording is the claim. */
const MANDATE = [
  {
    term: 'Vision',
    body: 'To be Africa’s most trusted partner for AI-powered business growth — recognised globally for combining deep Life Sciences expertise with practical, ethical and impactful artificial intelligence adoption.',
  },
  {
    term: 'Mission',
    body: 'To equip organisations across Africa, Europe and the United States with the market intelligence, strategic advisory and AI capability they need to compete, grow and lead in their industries — with a special commitment to advancing Life Sciences enterprises operating in and around the African continent.',
  },
];

/* The source voice defines itself by negation. These keep that register. */
const PRINCIPLES: [string, string][] = [
  ['Empirical grounding', 'Findings come from primary fieldwork in the market being studied — not recycled secondary decks or remote assumption.'],
  ['Responsible governance', 'Privacy, ethics and data sovereignty are designed into AI systems at the start, not audited in afterwards.'],
  ['Clinical authenticity', 'Life Sciences work is done in Life Sciences language — regulatory, clinical and commercial — not generic healthcare framing.'],
  ['Human judgement', 'Models narrow the question. People decide. Every output is built to be argued with.'],
];

const FACTS: [string, string][] = [
  ['Founded', '2026'],
  ['Headquarters', 'Nairobi, Kenya'],
  ['Core specialisation', 'Life Sciences'],
  ['African coverage', '45 markets, four regions'],
  ['Also serving', 'Europe · United States'],
];

export const About: React.FC = () => {
  const { navigate } = useNavigation();

  return (
    <div>
      {/* ── Hero: statement left, the record of facts right ────────────── */}
      <section className="pt-[var(--band-tight)] pb-[var(--band)]">
        <Container width="wide">
          <div className="grid grid-cols-1 gap-x-16 gap-y-12 lg:grid-cols-12">
            <div className="lg:col-span-7">
              <h1 className="rise text-h1">
                African in context.
                <br className="hidden sm:block" /> Global in ambition.
              </h1>
              <p
                className="rise measure mt-8 text-lead text-[var(--color-ink-2)]"
                style={{ animationDelay: '80ms' }}
              >
                MindCraft Consultancy Services was established in Nairobi in 2026 to close one
                specific gap: the absence of a single trusted partner that combines deep sector
                expertise with practical, applied artificial intelligence capability.
              </p>
            </div>

            <dl className="rise lg:col-span-4 lg:col-start-9 lg:pt-4" style={{ animationDelay: '160ms' }}>
              {FACTS.map(([k, v]) => (
                <div
                  key={k}
                  className="flex items-baseline justify-between gap-6 border-t border-[var(--color-line)] py-3.5"
                >
                  <dt className="text-caption text-[var(--color-ink-3)]">{k}</dt>
                  <dd className="text-body-sm text-[var(--color-ink)]">{v}</dd>
                </div>
              ))}
            </dl>
          </div>
        </Container>
      </section>

      {/* ── The founding mandate ───────────────────────────────────────── */}
      <Section tone="raised" band="normal" width="default" rule>
        <h2 className="max-w-2xl text-h3">Why the firm exists.</h2>
        <p className="measure mt-5 text-body text-[var(--color-ink-2)]">
          Sector specialists rarely build software. Technology firms rarely understand a regulatory
          dossier. MindCraft was founded on the argument that those two capabilities belong in one
          engagement.
        </p>

        <div className="mt-16">
          {MANDATE.map((m) => (
            <div
              key={m.term}
              className="grid grid-cols-1 gap-x-14 gap-y-4 border-t border-[var(--color-line-2)] py-12 lg:grid-cols-12"
            >
              <h3 className="text-h4 lg:col-span-5">{m.term}</h3>
              <p className="text-lead text-[var(--color-ink)] lg:col-span-7">{m.body}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* ── How the work is held to account ────────────────────────────── */}
      <Section band="tight" width="default" rule>
        <div className="grid grid-cols-1 gap-x-16 gap-y-10 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <h2 className="text-h4">What we hold ourselves to.</h2>
          </div>
          <dl className="lg:col-span-8">
            {PRINCIPLES.map(([term, body]) => (
              <div
                key={term}
                className="grid grid-cols-1 gap-x-10 gap-y-1.5 border-t border-[var(--color-line)] py-5 sm:grid-cols-12"
              >
                <dt className="text-h5 text-[var(--color-ink-strong)] sm:col-span-4">{term}</dt>
                <dd className="text-body text-[var(--color-ink-2)] sm:col-span-8">{body}</dd>
              </div>
            ))}
          </dl>
        </div>
      </Section>

      {/* ── Nairobi ────────────────────────────────────────────────────── */}
      <Section tone="ground-2" band="loose" width="wide" rule className="dot-grid">
        <div className="grid grid-cols-1 items-center gap-x-16 gap-y-12 lg:grid-cols-12">
          <div className="lg:col-span-6">
            <h2 className="text-h3">Nairobi is the position, not just the address.</h2>
            <p className="measure mt-6 text-body text-[var(--color-ink-2)]">
              The firm sits where East African regulatory institutions, regional trade corridors and
              the region&apos;s densest concentration of technical talent already meet. That is what
              makes a single Nairobi base workable across the continent — proximity to the bodies
              that set the rules, and to the people who can build against them.
            </p>
            <p className="measure mt-5 text-body text-[var(--color-ink-2)]">
              It is the only office. Everywhere else on the map is a focus market reached through an
              associate network, and the site says so wherever it shows a country.
            </p>
            <button
              onClick={() => navigate('/where-we-work')}
              className="group mt-8 inline-flex cursor-pointer items-center gap-2 text-body-sm text-[var(--color-accent)] hover:text-[var(--color-accent-2)]"
            >
              Where we work
              <ArrowRight className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-1" />
            </button>
          </div>

          <figure className="lg:col-span-6">
            <img
              src="/assets/images/nairobi_architecture_1788983991343.jpg"
              alt="Contemporary commercial architecture in Nairobi"
              className="aspect-[16/10] w-full object-cover"
              loading="lazy"
            />
            <figcaption className="mt-4 flex items-baseline justify-between gap-4 border-t border-[var(--color-line)] pt-4 font-mono text-eyebrow uppercase tracking-[0.12em] text-[var(--color-ink-3)]">
              <span>Nairobi, Kenya</span>
              <span className="text-[var(--color-accent)]">1°17′S 36°49′E</span>
            </figcaption>
          </figure>
        </div>
      </Section>

      {/* ── The team, stated honestly ──────────────────────────────────── */}
      <Section band="normal" width="text" rule>
        <h2 className="text-h3">The team.</h2>
        <p className="mt-6 text-lead text-[var(--color-ink)]">
          A core team in Nairobi and a growing network of associates and partners.
        </p>
        <p className="mt-5 text-body text-[var(--color-ink-2)]">
          The firm was established in 2026, so there is no long client list to publish and none is
          invented here. What can be stated is how the work is staffed: research, strategy,
          engineering and training capability held in one team, extended into focus markets through
          associates who work in those markets. Partnerships are actively being built rather than
          claimed.
        </p>
        <p className="mt-5 text-body text-[var(--color-ink-2)]">
          Judge the firm on the specificity of the questions it asks in the first conversation. That
          is the honest test at this stage, and it is the one we would rather be measured on.
        </p>
      </Section>

      {/* ── Closing ────────────────────────────────────────────────────── */}
      <Section tone="deep" band="normal" width="default" rule>
        <SectionHead
          title="Start a conversation."
          lead="Tell us the decision you are facing. We will tell you honestly whether we are the right partner for it."
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
