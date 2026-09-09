import React from 'react';
import { ArrowUpRight, ArrowRight, Building2, Layers, CheckCircle2, ShieldCheck, Compass } from 'lucide-react';
import { useNavigation } from '../context/NavigationContext';

export const BusinessConsulting: React.FC = () => {
  const { navigate } = useNavigation();

  return (
    <div className="space-y-0">
      {/* Header with Strategy Room Visual */}
      <section className="bg-[var(--paper)] pt-12 pb-16 lg:pt-16 lg:pb-24 border-b border-[var(--line)]">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 space-y-8">
          <div className="flex items-center space-x-3 text-xs font-mono text-[var(--ink-3)] uppercase tracking-wider">
            <span className="text-[var(--accent)] font-semibold">PILLAR 01 · STRATEGY & ADVISORY</span>
            <span>·</span>
            <span>DECISION ARCHITECTURE</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            <div className="lg:col-span-7 space-y-6">
              <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[var(--ink-strong)] leading-tight">
                Business Consulting & Strategy.
              </h1>
              <p className="font-body text-lg text-[var(--ink)] leading-relaxed">
                We translate market intelligence and technological potential into actionable corporate strategies, operational structures, and regulatory roadmaps that succeed in African environments.
              </p>
              <div className="flex flex-wrap gap-4 pt-2">
                <button
                  onClick={() => navigate('/contact?topic=business-consulting')}
                  className="px-6 py-3.5 text-xs font-mono tracking-wider uppercase font-semibold text-white bg-[var(--accent)] hover:bg-[var(--accent-2)] rounded-[2px] transition-colors shadow-sm inline-flex items-center space-x-2 cursor-pointer"
                >
                  <span>Scope a Consulting Engagement</span>
                  <ArrowUpRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="border border-[var(--line)] bg-[var(--paper-2)] p-2 rounded-[2px] shadow-sm">
                <div className="aspect-[4/3] overflow-hidden rounded-[2px]">
                  <img
                    src="/assets/images/african_strategy_room_1788985493442.jpg"
                    alt="African senior strategy consultants and analysts reviewing blueprints in Nairobi conference room"
                    className="w-full h-full object-cover"
                    loading="eager"
                  />
                </div>
                <div className="pt-2 px-1 flex items-center justify-between font-mono text-[11px] text-[var(--ink-3)]">
                  <span>Nairobi Strategy Room</span>
                  <span className="text-[var(--accent)] font-semibold">Senior Advisory Counsel</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Five Practice Areas */}
      <section className="py-16 lg:py-24 bg-[var(--paper-2)] border-b border-[var(--line)]">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 space-y-12">
          <div className="space-y-2 pb-6 border-b border-[var(--line)]">
            <div className="font-mono text-xs text-[var(--accent)] font-semibold uppercase tracking-widest">
              CAPABILITY MATRIX
            </div>
            <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-[var(--ink-strong)]">
              Five core consulting practice areas.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Area 1 */}
            <div className="p-6 bg-[var(--paper)] border border-[var(--line)] rounded-[2px] space-y-3">
              <div className="font-mono text-xs text-[var(--accent)] font-bold">01</div>
              <h3 className="font-display text-xl font-bold text-[var(--ink-strong)]">
                Corporate & Business Strategy
              </h3>
              <p className="font-body text-xs text-[var(--ink-2)] leading-relaxed">
                Market-entry strategy, growth planning, commercial portfolio prioritization, competitive positioning, and joint venture advisory across African trade corridors.
              </p>
            </div>

            {/* Area 2 */}
            <div className="p-6 bg-[var(--paper)] border border-[var(--line)] rounded-[2px] space-y-3">
              <div className="font-mono text-xs text-[var(--accent)] font-bold">02</div>
              <h3 className="font-display text-xl font-bold text-[var(--ink-strong)]">
                Digital & AI Transformation
              </h3>
              <p className="font-body text-xs text-[var(--ink-2)] leading-relaxed">
                Technology modernization roadmaps, AI readiness assessments, data architecture governance, and transition planning from legacy paper-based workflows.
              </p>
            </div>

            {/* Area 3 */}
            <div className="p-6 bg-[var(--paper)] border border-[var(--line)] rounded-[2px] space-y-3">
              <div className="font-mono text-xs text-[var(--accent)] font-bold">03</div>
              <h3 className="font-display text-xl font-bold text-[var(--ink-strong)]">
                Organizational Design
              </h3>
              <p className="font-body text-xs text-[var(--ink-2)] leading-relaxed">
                Target operating model (TOM) design, leadership restructuring, cross-border commercial team structuring, and cultural alignment for regional multi-country operations.
              </p>
            </div>

            {/* Area 4 */}
            <div className="p-6 bg-[var(--paper)] border border-[var(--line)] rounded-[2px] space-y-3">
              <div className="font-mono text-xs text-[var(--accent)] font-bold">04</div>
              <h3 className="font-display text-xl font-bold text-[var(--ink-strong)]">
                Process Improvement & Systems
              </h3>
              <p className="font-body text-xs text-[var(--ink-2)] leading-relaxed">
                Lean operational engineering, supply chain bottleneck removal, hospital throughput acceleration, and automated enterprise workflow streamlining.
              </p>
            </div>

            {/* Area 5 */}
            <div className="p-6 bg-[var(--paper)] border border-[var(--line)] rounded-[2px] space-y-3">
              <div className="font-mono text-xs text-[var(--accent)] font-bold">05</div>
              <h3 className="font-display text-xl font-bold text-[var(--ink-strong)]">
                Policy & Regulatory Advisory
              </h3>
              <p className="font-body text-xs text-[var(--ink-2)] leading-relaxed">
                National formulary submissions, AfCFTA trade alignment, public sector program structuring, and compliance alignment with African national regulatory authorities.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Tangible Deliverables List */}
      <section className="py-16 lg:py-24 bg-[var(--paper)] border-b border-[var(--line)]">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 space-y-8">
          <div className="space-y-2 pb-6 border-b border-[var(--line)]">
            <div className="font-mono text-xs text-[var(--accent)] font-semibold uppercase tracking-widest">
              TANGIBLE OUTPUTS
            </div>
            <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-[var(--ink-strong)]">
              Decision-ready deliverables.
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 font-mono text-xs">
            <div className="p-4 bg-[var(--paper-2)] border border-[var(--line)] rounded-[2px]">
              <div className="text-[var(--accent)] font-bold mb-1">01</div>
              <div className="text-[var(--ink-strong)] font-semibold mb-1">Target Operating Models</div>
              <div className="text-[var(--ink-3)] text-[11px]">Detailed functional structures, reporting lines, and delegation matrices.</div>
            </div>
            <div className="p-4 bg-[var(--paper-2)] border border-[var(--line)] rounded-[2px]">
              <div className="text-[var(--accent)] font-bold mb-1">02</div>
              <div className="text-[var(--ink-strong)] font-semibold mb-1">Market-Entry Playbooks</div>
              <div className="text-[var(--ink-3)] text-[11px]">Country-specific regulatory, commercial distribution, and pricing roadmaps.</div>
            </div>
            <div className="p-4 bg-[var(--paper-2)] border border-[var(--line)] rounded-[2px]">
              <div className="text-[var(--accent)] font-bold mb-1">03</div>
              <div className="text-[var(--ink-strong)] font-semibold mb-1">Transformation Charters</div>
              <div className="text-[var(--ink-3)] text-[11px]">Milestone sequencing, risk registers, and quantified business case models.</div>
            </div>
            <div className="p-4 bg-[var(--paper-2)] border border-[var(--line)] rounded-[2px]">
              <div className="text-[var(--accent)] font-bold mb-1">04</div>
              <div className="text-[var(--ink-strong)] font-semibold mb-1">Regulatory Dossiers</div>
              <div className="text-[var(--ink-3)] text-[11px]">Comprehensive filing documentation formatted for EAC and regional agencies.</div>
            </div>
          </div>
        </div>
      </section>

      {/* Cross-Pillar Handoff */}
      <section className="py-16 bg-[var(--paper-2)] border-b border-[var(--line)]">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="space-y-1">
            <span className="font-mono text-xs text-[var(--accent)] font-semibold uppercase">Continuous Value Loop</span>
            <h3 className="font-display text-xl font-bold text-[var(--ink-strong)]">Connect strategy directly to empirical research or AI implementation.</h3>
          </div>
          <div className="flex items-center space-x-3">
            <button
              onClick={() => navigate('/what-we-do/market-research')}
              className="px-4 py-2.5 bg-[var(--paper)] border border-[var(--line)] hover:border-[var(--accent)] text-xs font-mono text-[var(--ink-strong)] rounded-[2px] transition-colors cursor-pointer"
            >
              See Market Research →
            </button>
            <button
              onClick={() => navigate('/what-we-do/ai-enterprise-solutions')}
              className="px-4 py-2.5 bg-[var(--paper)] border border-[var(--line)] hover:border-[var(--accent)] text-xs font-mono text-[var(--ink-strong)] rounded-[2px] transition-colors cursor-pointer"
            >
              See AI Solutions →
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
