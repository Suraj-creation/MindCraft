import React from 'react';
import { ArrowUpRight, Compass, ShieldCheck, MapPin, Building2, Stethoscope, CheckCircle2 } from 'lucide-react';
import { useNavigation } from '../context/NavigationContext';
import { DIFFERENTIATORS } from '../data/landingData';

export const About: React.FC = () => {
  const { navigate } = useNavigation();

  return (
    <div className="space-y-0">
      {/* Editorial Header */}
      <section className="bg-[var(--paper)] pt-12 pb-16 lg:pt-16 lg:pb-24 border-b border-[var(--line)]">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 space-y-8">
          <div className="flex items-center space-x-3 text-xs font-mono text-[var(--ink-3)] uppercase tracking-wider">
            <span className="text-[var(--accent)] font-semibold">INSTITUTIONAL PROFILE</span>
            <span>·</span>
            <span>ESTABLISHED 2026</span>
            <span>·</span>
            <span>NAIROBI, KENYA</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            <div className="lg:col-span-8 space-y-6">
              <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[var(--ink-strong)] leading-tight">
                African in context. Global in ambition.
              </h1>
              <p className="font-body text-lg sm:text-xl text-[var(--ink)] leading-relaxed max-w-3xl">
                MindCraft Consultancy Services was established in Nairobi in 2026 to bridge a persistent structural gap in the market: the divide between deep, on-ground African contextual understanding and world-class technical and scientific rigor.
              </p>
            </div>

            <div className="lg:col-span-4 p-6 bg-[var(--paper-2)] border border-[var(--line)] rounded-[2px] space-y-4 font-mono text-xs">
              <div className="text-[var(--accent)] font-semibold uppercase tracking-wider">
                Key Institutional Facts
              </div>
              <div className="space-y-2 text-[var(--ink-2)] border-t border-[var(--line)] pt-3">
                <div className="flex justify-between">
                  <span>Founding Year</span>
                  <span className="text-[var(--ink-strong)] font-semibold">2026</span>
                </div>
                <div className="flex justify-between">
                  <span>Headquarters</span>
                  <span className="text-[var(--ink-strong)] font-semibold">Nairobi, Kenya</span>
                </div>
                <div className="flex justify-between">
                  <span>Foundational Focus</span>
                  <span className="text-[var(--ink-strong)] font-semibold">Life Sciences</span>
                </div>
                <div className="flex justify-between">
                  <span>Coverage</span>
                  <span className="text-[var(--ink-strong)] font-semibold">45 African Markets</span>
                </div>
                <div className="flex justify-between">
                  <span>Corridors</span>
                  <span className="text-[var(--ink-strong)] font-semibold">Europe & United States</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Strategic Vision, Mission & Values */}
      <section className="py-16 lg:py-24 bg-[var(--paper-2)] border-b border-[var(--line)]">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 space-y-12">
          <div className="space-y-2 pb-6 border-b border-[var(--line)]">
            <div className="font-mono text-xs text-[var(--accent)] font-semibold uppercase tracking-widest">
              PURPOSE & PHILOSOPHY
            </div>
            <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-[var(--ink-strong)]">
              The founding mandate.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Vision */}
            <div className="p-8 bg-[var(--paper)] border border-[var(--line)] rounded-[2px] space-y-4">
              <div className="font-mono text-xs text-[var(--accent)] font-bold uppercase tracking-wider">
                01 · OUR VISION
              </div>
              <h3 className="font-display text-2xl font-bold text-[var(--ink-strong)]">
                The premier African intelligence partner.
              </h3>
              <p className="font-body text-sm text-[var(--ink-2)] leading-relaxed">
                To become the definitive strategic advisory and enterprise AI consultancy for organizations navigating African markets, recognized globally for scientific precision, sovereign technological innovation, and uncompromised local integrity.
              </p>
            </div>

            {/* Mission */}
            <div className="p-8 bg-[var(--paper)] border border-[var(--line)] rounded-[2px] space-y-4">
              <div className="font-mono text-xs text-[var(--accent)] font-bold uppercase tracking-wider">
                02 · OUR MISSION
              </div>
              <h3 className="font-display text-2xl font-bold text-[var(--ink-strong)]">
                Transforming complexity into decisive execution.
              </h3>
              <p className="font-body text-sm text-[var(--ink-2)] leading-relaxed">
                We empower commercial leaders, healthcare institutions, and development authorities with primary research intelligence, robust corporate strategies, applied AI architectures, and institutional capacity building.
              </p>
            </div>

            {/* Values */}
            <div className="p-8 bg-[var(--paper)] border border-[var(--line)] rounded-[2px] space-y-4">
              <div className="font-mono text-xs text-[var(--accent)] font-bold uppercase tracking-wider">
                03 · OPERATING VALUES
              </div>
              <h3 className="font-display text-2xl font-bold text-[var(--ink-strong)]">
                Rigor, sovereignty & human judgment.
              </h3>
              <ul className="font-body text-xs text-[var(--ink-2)] space-y-2.5">
                <li className="flex items-start space-x-2">
                  <span className="text-[var(--accent)] font-bold">▪</span>
                  <span><strong>Empirical Grounding:</strong> No recycled secondary decks or remote assumptions.</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-[var(--accent)] font-bold">▪</span>
                  <span><strong>Responsible Governance:</strong> Governed, privacy-first AI respecting data sovereignty.</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-[var(--accent)] font-bold">▪</span>
                  <span><strong>Clinical Authenticity:</strong> Real Life Sciences depth, not generic healthcare tags.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Nairobi Headquarters / Strategic Anchor */}
      <section className="py-16 lg:py-24 bg-[var(--paper)] border-b border-[var(--line)]">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-6 space-y-6">
              <div className="space-y-2">
                <div className="font-mono text-xs text-[var(--accent)] font-semibold uppercase tracking-widest">
                  GEOGRAPHIC ANCHOR
                </div>
                <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-[var(--ink-strong)]">
                  Why Nairobi is our command center.
                </h2>
              </div>
              <p className="font-body text-base text-[var(--ink)] leading-relaxed">
                Nairobi is more than our headquarters; it is East Africa’s preeminent technological and economic nexus. With access to top-tier African data scientists, direct transport corridors into Central, Western, and Southern Africa, and proximity to regional regulatory bodies, Nairobi allows us to deploy rapidly across the continent.
              </p>
              <div className="space-y-3 font-mono text-xs text-[var(--ink-2)]">
                <div className="p-3 bg-[var(--paper-2)] border border-[var(--line)] rounded-[2px] flex items-center space-x-3">
                  <MapPin className="w-4 h-4 text-[var(--accent)]" />
                  <span>Nairobi Innovation & Research Hub · Central Command for 45 African Markets</span>
                </div>
                <div className="p-3 bg-[var(--paper-2)] border border-[var(--line)] rounded-[2px] flex items-center space-x-3">
                  <Building2 className="w-4 h-4 text-[var(--accent)]" />
                  <span>Direct Trade & Research Corridors to London, Brussels, Geneva, and New York</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="border border-[var(--line)] bg-[var(--paper-2)] p-2 rounded-[2px] shadow-sm">
                <div className="aspect-[16/10] overflow-hidden rounded-[2px]">
                  <img
                    src="/assets/images/nairobi_architecture_1788983991343.jpg"
                    alt="Contemporary architectural geometry of Nairobi commercial district"
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
                <div className="pt-3 px-2 pb-1 flex items-center justify-between font-mono text-xs text-[var(--ink-3)]">
                  <span>Nairobi Financial & Research Center</span>
                  <span className="text-[var(--accent)] font-semibold">1°17′S, 36°49′E</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The 5 Differentiators in Depth */}
      <section className="py-16 lg:py-24 bg-[var(--paper-2)] border-b border-[var(--line)]">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 space-y-12">
          <div className="space-y-2 pb-6 border-b border-[var(--line)]">
            <div className="font-mono text-xs text-[var(--accent)] font-semibold uppercase tracking-widest">
              INSTITUTIONAL ADVANTAGE
            </div>
            <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-[var(--ink-strong)]">
              Five reasons the work holds up.
            </h2>
          </div>

          <div className="space-y-4">
            {DIFFERENTIATORS.map((diff) => (
              <div
                key={diff.num}
                className="p-6 sm:p-8 bg-[var(--paper)] border border-[var(--line)] rounded-[2px] grid grid-cols-1 lg:grid-cols-12 gap-6 items-start hover:border-[var(--accent)] transition-colors"
              >
                <div className="lg:col-span-1 font-mono text-2xl font-bold text-[var(--accent)]">
                  {diff.num}
                </div>
                <div className="lg:col-span-4 font-display text-xl font-bold text-[var(--ink-strong)]">
                  {diff.title}
                </div>
                <div className="lg:col-span-7 space-y-2">
                  <p className="font-body text-sm text-[var(--ink)] leading-relaxed">
                    {diff.statement}
                  </p>
                  <p className="font-mono text-xs text-[var(--ink-3)] border-t border-[var(--line)] pt-2">
                    <span className="text-[var(--accent)] font-semibold">Verified Proof:</span> {diff.proof}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Senior Leadership & Associate Network */}
      <section className="py-16 lg:py-24 bg-[var(--paper)] border-b border-[var(--line)]">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 space-y-8">
          <div className="space-y-2 pb-6 border-b border-[var(--line)]">
            <div className="font-mono text-xs text-[var(--accent)] font-semibold uppercase tracking-widest">
              HUMAN CAPITAL & CAPABILITY
            </div>
            <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-[var(--ink-strong)]">
              Multidisciplinary advisory leadership.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 bg-[var(--paper-2)] border border-[var(--line)] rounded-[2px] space-y-3">
              <div className="font-mono text-xs text-[var(--accent)] font-bold uppercase">Practice Area I</div>
              <div className="font-display font-bold text-lg text-[var(--ink-strong)]">Life Sciences & Clinical Strategy</div>
              <p className="font-body text-xs text-[var(--ink-2)] leading-relaxed">
                Led by former pharmaceutical regulatory directors and medical officers with decades of combined experience navigating EAC, ECOWAS, and SADC national regulatory frameworks.
              </p>
            </div>

            <div className="p-6 bg-[var(--paper-2)] border border-[var(--line)] rounded-[2px] space-y-3">
              <div className="font-mono text-xs text-[var(--accent)] font-bold uppercase">Practice Area II</div>
              <div className="font-display font-bold text-lg text-[var(--ink-strong)]">Applied AI & Systems Architecture</div>
              <p className="font-body text-xs text-[var(--ink-2)] leading-relaxed">
                Directed by enterprise software architects and machine learning engineers specializing in private sovereign LLM fine-tuning, NLP document extraction, and high-security data pipelines.
              </p>
            </div>

            <div className="p-6 bg-[var(--paper-2)] border border-[var(--line)] rounded-[2px] space-y-3">
              <div className="font-mono text-xs text-[var(--accent)] font-bold uppercase">Practice Area III</div>
              <div className="font-display font-bold text-lg text-[var(--ink-strong)]">Field Research & Economic Analytics</div>
              <p className="font-body text-xs text-[var(--ink-2)] leading-relaxed">
                Anchored by econometricians and field sampling specialists coordinating verified in-country associate networks across 45 African nations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Band */}
      <section className="py-16 bg-[var(--ink-strong)] text-[var(--paper)]">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 flex flex-col md:flex-row md:items-center justify-between gap-8">
          <div className="space-y-2 max-w-xl">
            <h2 className="font-display text-3xl font-bold text-white">
              Work with our senior advisors from day one.
            </h2>
            <p className="font-body text-sm text-[var(--paper-2)]/80">
              As a founding-year partner, you receive direct senior partner attention and fully customized advisory scopes.
            </p>
          </div>
          <button
            onClick={() => navigate('/contact')}
            className="px-6 py-3.5 text-xs font-mono tracking-wider uppercase font-semibold text-white bg-[var(--accent)] hover:bg-[var(--accent-2)] rounded-[2px] transition-colors whitespace-nowrap self-start md:self-auto cursor-pointer"
          >
            Start a Conversation
          </button>
        </div>
      </section>
    </div>
  );
};
