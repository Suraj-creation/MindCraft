import React from 'react';
import { ArrowUpRight, ArrowRight, Layers, MapPin, CheckCircle2, FileText, Search, ShieldCheck, Database, BarChart3, Users } from 'lucide-react';
import { useNavigation } from '../context/NavigationContext';
import { ResearchMethodologyMap } from '../components/ResearchMethodologyMap';

export const MarketResearch: React.FC = () => {
  const { navigate } = useNavigation();

  return (
    <div className="space-y-0">
      {/* ─────────────────────────────────────────────────────────────
          EDITORIAL HEADER WITH FIELD RESEARCH IMAGE
      ───────────────────────────────────────────────────────────── */}
      <section className="bg-[var(--paper)] pt-12 pb-16 lg:pt-16 lg:pb-24 border-b border-[var(--line)]">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 space-y-8">
          <div className="flex items-center space-x-3 text-xs font-mono text-[var(--ink-3)] uppercase tracking-wider">
            <span className="text-[var(--accent)] font-semibold">PILLAR 02 · EMPIRICAL INTELLIGENCE</span>
            <span>·</span>
            <span>45 AFRICAN MARKETS</span>
            <span>·</span>
            <span>PRIMARY GROUND TRUTH</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left: Thesis & Focus (7 cols) */}
            <div className="lg:col-span-7 space-y-6">
              <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[var(--ink-strong)] leading-tight">
                Market Research & Field Intelligence.
              </h1>
              <p className="font-body text-lg text-[var(--ink)] leading-relaxed">
                We replace speculative desktop assumptions with primary African ground-truth data. Rigorous in-country fieldwork, clinician panels, trade channel audits, and competitor pricing models across the continent.
              </p>

              {/* Data Rigor Badge Strip */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 font-mono text-xs">
                <div className="p-3 bg-[var(--paper-2)] border border-[var(--line)] rounded-[2px]">
                  <span className="text-[var(--accent)] font-bold block text-sm">GPS-Tagged</span>
                  <span className="text-[var(--ink-2)] text-[11px]">Audit coordinates for every interview</span>
                </div>
                <div className="p-3 bg-[var(--paper-2)] border border-[var(--line)] rounded-[2px]">
                  <span className="text-[var(--accent)] font-bold block text-sm">Vernacular</span>
                  <span className="text-[var(--ink-2)] text-[11px]">Swahili, Hausa, Yoruba, Amharic +</span>
                </div>
                <div className="p-3 bg-[var(--paper-2)] border border-[var(--line)] rounded-[2px]">
                  <span className="text-[var(--accent)] font-bold block text-sm">Double-Entry</span>
                  <span className="text-[var(--ink-2)] text-[11px]">Independent data cleaning protocols</span>
                </div>
              </div>

              <div className="flex flex-wrap gap-4 pt-2">
                <button
                  onClick={() => navigate('/contact?topic=market-research')}
                  className="px-6 py-3.5 text-xs font-mono tracking-wider uppercase font-semibold text-white bg-[var(--accent)] hover:bg-[var(--accent-2)] rounded-[2px] transition-colors shadow-sm inline-flex items-center space-x-2 cursor-pointer"
                >
                  <span>Commission a Research Mandate</span>
                  <ArrowUpRight className="w-4 h-4" />
                </button>
                <button
                  onClick={() => navigate('/explore?capability=Market%20Research')}
                  className="px-6 py-3.5 text-xs font-mono tracking-wider uppercase font-semibold text-[var(--ink-strong)] bg-transparent hover:bg-[var(--paper-2)] border border-[var(--line)] rounded-[2px] transition-colors inline-flex items-center space-x-2 cursor-pointer"
                >
                  <span>Compose Research Scenario</span>
                  <ArrowRight className="w-4 h-4 text-[var(--accent)]" />
                </button>
              </div>
            </div>

            {/* Right: Field Research Visual Anchor (5 cols) */}
            <div className="lg:col-span-5 space-y-3">
              <div className="border border-[var(--line)] bg-[var(--paper-2)] p-2 rounded-[2px] shadow-sm">
                <div className="aspect-[4/3] overflow-hidden rounded-[2px] relative">
                  <img
                    src="/assets/images/african_field_research_1788986644482.jpg"
                    alt="African market researcher gathering primary demographic and supply data in community field setting"
                    className="w-full h-full object-cover"
                    loading="eager"
                  />
                  <div className="absolute top-2 left-2 bg-black/60 backdrop-blur-xs text-white font-mono text-[9px] uppercase tracking-wider px-2 py-0.5">
                    Primary Fieldwork Unit · Kenya
                  </div>
                </div>
                <div className="pt-2 px-1 flex items-center justify-between font-mono text-[11px] text-[var(--ink-3)]">
                  <span>Physical In-Country Verification</span>
                  <span className="text-[var(--accent)] font-semibold">1,200+ Audits Completed</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          INTERACTIVE METHODOLOGY MAP
      ───────────────────────────────────────────────────────────── */}
      <section className="py-16 lg:py-24 bg-[var(--paper-2)] border-b border-[var(--line)]">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 space-y-8">
          <div className="space-y-2 pb-6 border-b border-[var(--line)]">
            <div className="font-mono text-xs text-[var(--accent)] font-semibold uppercase tracking-widest">
              RESEARCH METHODOLOGY
            </div>
            <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-[var(--ink-strong)]">
              Four empirical tracks from collection to insight.
            </h2>
          </div>

          <ResearchMethodologyMap />
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          DECISION-READY OUTPUTS & ARTIFACTS
      ───────────────────────────────────────────────────────────── */}
      <section className="py-16 lg:py-24 bg-[var(--paper)] border-b border-[var(--line)]">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 space-y-8">
          <div className="space-y-2 pb-6 border-b border-[var(--line)]">
            <div className="font-mono text-xs text-[var(--accent)] font-semibold uppercase tracking-widest">
              DELIVERABLE ARTIFACTS
            </div>
            <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-[var(--ink-strong)]">
              Decision-ready research deliverables.
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 font-mono text-xs">
            <div className="p-5 bg-[var(--paper-2)] border border-[var(--line)] rounded-[2px] space-y-2">
              <div className="text-[var(--accent)] font-bold text-sm">01 · KOL MAPS</div>
              <div className="text-[var(--ink-strong)] font-semibold">Key Opinion Leader Influence Networks</div>
              <div className="text-[var(--ink-3)] text-[11px] leading-relaxed">
                Empirical sociometric mapping of senior clinicians, specialty society chairs, and hospital formulary voting members.
              </div>
            </div>

            <div className="p-5 bg-[var(--paper-2)] border border-[var(--line)] rounded-[2px] space-y-2">
              <div className="text-[var(--accent)] font-bold text-sm">02 · PRICING SCANS</div>
              <div className="text-[var(--ink-strong)] font-semibold">Multi-Tier Margin Deconstructions</div>
              <div className="text-[var(--ink-3)] text-[11px] leading-relaxed">
                Wholesale landed cost audits, retail markup breakdowns, and patient out-of-pocket elasticity across commercial and public channels.
              </div>
            </div>

            <div className="p-5 bg-[var(--paper-2)] border border-[var(--line)] rounded-[2px] space-y-2">
              <div className="text-[var(--accent)] font-bold text-sm">03 · EPIDEMIOLOGY</div>
              <div className="text-[var(--ink-strong)] font-semibold">Localized Patient Prevalence Models</div>
              <div className="text-[var(--ink-3)] text-[11px] leading-relaxed">
                Quantified disease incidence, diagnosed-to-treated ratios, and therapy-switching dynamics across tier-1 to tier-4 health centers.
              </div>
            </div>

            <div className="p-5 bg-[var(--paper-2)] border border-[var(--line)] rounded-[2px] space-y-2">
              <div className="text-[var(--accent)] font-bold text-sm">04 · CHANNEL AUDITS</div>
              <div className="text-[var(--ink-strong)] font-semibold">Distributor & Logistics Scorecards</div>
              <div className="text-[var(--ink-3)] text-[11px] leading-relaxed">
                Physical warehouse audits, GDP compliance evaluations, fleet temperature tracking capabilities, and credit term sustainability.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Cross-Pillar Handoff */}
      <section className="py-16 bg-[var(--paper-2)] border-b border-[var(--line)]">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="space-y-1">
            <span className="font-mono text-xs text-[var(--accent)] font-semibold uppercase">Next Step in the Engine</span>
            <h3 className="font-display text-xl font-bold text-[var(--ink-strong)]">Translate empirical intelligence into corporate strategy.</h3>
          </div>
          <button
            onClick={() => navigate('/what-we-do/business-consulting')}
            className="px-5 py-2.5 bg-[var(--accent)] hover:bg-[var(--accent-2)] text-white text-xs font-mono uppercase tracking-wider font-semibold rounded-[2px] transition-colors cursor-pointer self-start md:self-auto"
          >
            See Business Consulting →
          </button>
        </div>
      </section>
    </div>
  );
};
