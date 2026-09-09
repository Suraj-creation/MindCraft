import React from 'react';
import { ArrowUpRight, ArrowRight, Layers, MapPin, CheckCircle2, FileText, Search } from 'lucide-react';
import { useNavigation } from '../context/NavigationContext';

export const MarketResearch: React.FC = () => {
  const { navigate } = useNavigation();

  return (
    <div className="space-y-0">
      {/* Editorial Header */}
      <section className="bg-[var(--paper)] pt-12 pb-16 lg:pt-16 lg:pb-24 border-b border-[var(--line)]">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 space-y-8">
          <div className="flex items-center space-x-3 text-xs font-mono text-[var(--ink-3)] uppercase tracking-wider">
            <span className="text-[var(--accent)] font-semibold">PILLAR 02 · EMPIRICAL INTELLIGENCE</span>
            <span>·</span>
            <span>45 AFRICAN MARKETS</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            <div className="lg:col-span-7 space-y-6">
              <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[var(--ink-strong)] leading-tight">
                Market Research & Field Intelligence.
              </h1>
              <p className="font-body text-lg text-[var(--ink)] leading-relaxed">
                We replace speculative desktop assumptions with primary ground-truth data. Rigorous in-country fieldwork, clinician panels, trade channel audits, and competitor pricing models across the African continent.
              </p>
              <div className="flex flex-wrap gap-4 pt-2">
                <button
                  onClick={() => navigate('/contact?topic=market-research')}
                  className="px-6 py-3.5 text-xs font-mono tracking-wider uppercase font-semibold text-white bg-[var(--accent)] hover:bg-[var(--accent-2)] rounded-[2px] transition-colors shadow-sm inline-flex items-center space-x-2 cursor-pointer"
                >
                  <span>Commission a Research Mandate</span>
                  <ArrowUpRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            <div className="lg:col-span-5 p-6 bg-[var(--paper-2)] border border-[var(--line)] rounded-[2px] space-y-4 font-mono text-xs">
              <div className="text-[var(--accent)] font-semibold uppercase tracking-wider">
                Field Research Capacity
              </div>
              <div className="space-y-2.5 text-[var(--ink-2)] border-t border-[var(--line)] pt-3">
                <div className="flex justify-between">
                  <span>Active Geographic Reach</span>
                  <span className="text-[var(--ink-strong)] font-semibold">All 45 African Countries</span>
                </div>
                <div className="flex justify-between">
                  <span>Field Modality</span>
                  <span className="text-[var(--ink-strong)] font-semibold">Primary Fieldwork & Audits</span>
                </div>
                <div className="flex justify-between">
                  <span>Specialized Panels</span>
                  <span className="text-[var(--ink-strong)] font-semibold">KOLs, Clinicians, Wholesalers</span>
                </div>
                <div className="flex justify-between">
                  <span>Regulatory Verification</span>
                  <span className="text-[var(--ink-strong)] font-semibold">EAC, ECOWAS, SADC</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Four Research Core Methodologies */}
      <section className="py-16 lg:py-24 bg-[var(--paper-2)] border-b border-[var(--line)]">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 space-y-12">
          <div className="space-y-2 pb-6 border-b border-[var(--line)]">
            <div className="font-mono text-xs text-[var(--accent)] font-semibold uppercase tracking-widest">
              RESEARCH METHODOLOGY
            </div>
            <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-[var(--ink-strong)]">
              Four empirical research streams.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Stream 1 */}
            <div className="p-8 bg-[var(--paper)] border border-[var(--line)] rounded-[2px] space-y-4">
              <div className="font-mono text-xs text-[var(--accent)] font-bold">01 · PRIMARY FIELD RESEARCH</div>
              <h3 className="font-display text-2xl font-bold text-[var(--ink-strong)]">
                On-Ground In-Country Data Gathering
              </h3>
              <p className="font-body text-sm text-[var(--ink-2)] leading-relaxed">
                Structured face-to-face qualitative depth interviews (IDIs), physician and hospital pharmacy intercept surveys, focus groups conducted in local languages, and secret shopper retail pricing sweeps.
              </p>
            </div>

            {/* Stream 2 */}
            <div className="p-8 bg-[var(--paper)] border border-[var(--line)] rounded-[2px] space-y-4">
              <div className="font-mono text-xs text-[var(--accent)] font-bold">02 · SECONDARY & DESK RESEARCH</div>
              <h3 className="font-display text-2xl font-bold text-[var(--ink-strong)]">
                Epidemiology & Trade Synthesis
              </h3>
              <p className="font-body text-sm text-[var(--ink-2)] leading-relaxed">
                Rigorous mining of official government gazettes, national health statistics, import/export customs manifests, regional central bank data, and peer-reviewed clinical registries.
              </p>
            </div>

            {/* Stream 3 */}
            <div className="p-8 bg-[var(--paper)] border border-[var(--line)] rounded-[2px] space-y-4">
              <div className="font-mono text-xs text-[var(--accent)] font-bold">03 · PROGRAM & IMPACT RESEARCH</div>
              <h3 className="font-display text-2xl font-bold text-[var(--ink-strong)]">
                Independent Monitoring & Evaluation
              </h3>
              <p className="font-body text-sm text-[var(--ink-2)] leading-relaxed">
                Baseline, midline, and endline program evaluations for multilateral development partners, donors, and philanthropic foundations tracking public health and economic interventions.
              </p>
            </div>

            {/* Stream 4 */}
            <div className="p-8 bg-[var(--paper)] border border-[var(--line)] rounded-[2px] space-y-4">
              <div className="font-mono text-xs text-[var(--accent)] font-bold">04 · DATA PRODUCTS & BENCHMARKING</div>
              <h3 className="font-display text-2xl font-bold text-[var(--ink-strong)]">
                Dynamic Intelligence Databases
              </h3>
              <p className="font-body text-sm text-[var(--ink-2)] leading-relaxed">
                Subscription dashboards, regional distributor capability indices, competitor formulary market share monitors, and longitudinal price elasticity benchmarks.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Decision-Ready Outputs */}
      <section className="py-16 lg:py-24 bg-[var(--paper)] border-b border-[var(--line)]">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 space-y-8">
          <div className="space-y-2 pb-6 border-b border-[var(--line)]">
            <div className="font-mono text-xs text-[var(--accent)] font-semibold uppercase tracking-widest">
              RESEARCH ARTIFACTS
            </div>
            <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-[var(--ink-strong)]">
              Decision-ready research outputs.
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 font-mono text-xs">
            <div className="p-4 bg-[var(--paper-2)] border border-[var(--line)] rounded-[2px]">
              <div className="text-[var(--accent)] font-bold mb-1">01</div>
              <div className="text-[var(--ink-strong)] font-semibold mb-1">KOL Influence Maps</div>
              <div className="text-[var(--ink-3)] text-[11px]">Identification and tiering of key clinical opinion leaders and prescribing networks.</div>
            </div>
            <div className="p-4 bg-[var(--paper-2)] border border-[var(--line)] rounded-[2px]">
              <div className="text-[var(--accent)] font-bold mb-1">02</div>
              <div className="text-[var(--ink-strong)] font-semibold mb-1">Pricing Scans</div>
              <div className="text-[var(--ink-3)] text-[11px]">Distributor markups, hospital procurement margins, and out-of-pocket patient costs.</div>
            </div>
            <div className="p-4 bg-[var(--paper-2)] border border-[var(--line)] rounded-[2px]">
              <div className="text-[var(--accent)] font-bold mb-1">03</div>
              <div className="text-[var(--ink-strong)] font-semibold mb-1">Epidemiology Models</div>
              <div className="text-[var(--ink-3)] text-[11px]">Quantified incidence, prevalence, and diagnosed patient population projections.</div>
            </div>
            <div className="p-4 bg-[var(--paper-2)] border border-[var(--line)] rounded-[2px]">
              <div className="text-[var(--accent)] font-bold mb-1">04</div>
              <div className="text-[var(--ink-strong)] font-semibold mb-1">Channel Audit Reports</div>
              <div className="text-[var(--ink-3)] text-[11px]">Vetted warehouse inspections, cold chain compliance audits, and distributor scorecarding.</div>
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
