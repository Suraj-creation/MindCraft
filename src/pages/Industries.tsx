import React, { useState } from 'react';
import { ArrowUpRight, ArrowRight, Stethoscope, Compass, Building2, Cpu, Globe, CheckCircle2 } from 'lucide-react';
import { useNavigation } from '../context/NavigationContext';

interface SectorItem {
  id: string;
  name: string;
  category: string;
  focus: string;
  relevance: string;
  typicalMandate: string;
}

const ALL_SECTORS: SectorItem[] = [
  {
    id: 'pharma',
    name: 'Pharmaceuticals & Biologics',
    category: 'Life Sciences',
    focus: 'Core Specialization',
    relevance: 'Formulary submissions, local manufacturing feasibility, cold chain logistics, EAC regulatory harmonisation.',
    typicalMandate: 'Cross-border regulatory filings and tender pricing optimization across Kenya, Tanzania, and Uganda.'
  },
  {
    id: 'medtech',
    name: 'Medical Devices & Diagnostics',
    category: 'Life Sciences',
    focus: 'Core Specialization',
    relevance: 'Point-of-care diagnostics registration, capital equipment leasing models, distributor vetting.',
    typicalMandate: 'Distributor audit and public hospital tender response strategy in West Africa.'
  },
  {
    id: 'healthcare-providers',
    name: 'Hospitals & Healthcare Networks',
    category: 'Life Sciences',
    focus: 'Core Specialization',
    relevance: 'Hospital capacity planning, clinical EHR digitization, throughput optimization, patient pathway modeling.',
    typicalMandate: 'Operational throughput engineering and triage automation for private tertiary hospital groups.'
  },
  {
    id: 'banking',
    name: 'Commercial Banking & FinTech',
    category: 'Financial Services',
    focus: 'Broad Practice',
    relevance: 'Cross-border payments, SME credit scoring algorithms, mobile money integration, anti-money laundering (AML).',
    typicalMandate: 'Private credit risk scoring model deployment utilizing localized mobile transaction data.'
  },
  {
    id: 'insurance',
    name: 'Insurance & Micro-Insurance',
    category: 'Financial Services',
    focus: 'Broad Practice',
    relevance: 'Parametric climate insurance, health underwriting risk pools, automated claims adjudication.',
    typicalMandate: 'Automated claim fraud detection pipeline for regional private health insurers.'
  },
  {
    id: 'energy',
    name: 'Renewable Energy & Off-Grid',
    category: 'Infrastructure & Energy',
    focus: 'Broad Practice',
    relevance: 'Commercial & Industrial (C&I) solar feasibility, pay-as-you-go customer analytics, carbon credit validation.',
    typicalMandate: 'Demand forecasting and default risk modeling for mini-grid operators across East Africa.'
  },
  {
    id: 'agriculture',
    name: 'Agribusiness & Crop Science',
    category: 'Consumer & Agriculture',
    focus: 'Broad Practice',
    relevance: 'Smallholder farmer network mapping, agricultural input supply chains, satellite yield prediction.',
    typicalMandate: 'Fertilizer distribution route optimization and distributor network mapping in Nigeria and Ghana.'
  },
  {
    id: 'fmcg',
    name: 'Consumer Goods & Retail',
    category: 'Consumer & Agriculture',
    focus: 'Broad Practice',
    relevance: 'Informal trade route-to-market, price elasticity monitoring, retail audit sweeps in Tier 2/3 towns.',
    typicalMandate: 'Kiosk and informal duka retail census across Nairobi and peripheral urban clusters.'
  },
  {
    id: 'telecom',
    name: 'Telecommunications & Digital Infra',
    category: 'Technology & Public Sector',
    focus: 'Broad Practice',
    relevance: 'Fiber backhaul expansion feasibility, tower company efficiency, enterprise data center demand modeling.',
    typicalMandate: 'Data sovereignty and localized enterprise cloud market sizing across Sub-Saharan Africa.'
  },
  {
    id: 'logistics',
    name: 'Logistics, Ports & Supply Chain',
    category: 'Infrastructure & Energy',
    focus: 'Broad Practice',
    relevance: 'Northern & Central transit corridor optimization, port congestion mitigation, multimodal freight routing.',
    typicalMandate: 'Cold-chain telemetry audit and transit time reduction study from Mombasa to Kigali.'
  },
  {
    id: 'public-sector',
    name: 'Public Sector & Development Agencies',
    category: 'Technology & Public Sector',
    focus: 'Broad Practice',
    relevance: 'National digitalization masterplans, donor program M&E, health system strengthening, AfCFTA trade enablement.',
    typicalMandate: 'Multi-country monitoring and evaluation for maternal-child health intervention programs.'
  },
  {
    id: 'education',
    name: 'Higher Education & Research Institutes',
    category: 'Technology & Public Sector',
    focus: 'Broad Practice',
    relevance: 'Institutional AI curricula integration, research grant administration, clinical trial biobanking registries.',
    typicalMandate: 'Academic medical center digital research repository architecture.'
  }
];

const CATEGORIES = ['All Verticals', 'Life Sciences', 'Financial Services', 'Infrastructure & Energy', 'Consumer & Agriculture', 'Technology & Public Sector'];

export const Industries: React.FC = () => {
  const { navigate } = useNavigation();
  const [selectedCategory, setSelectedCategory] = useState('All Verticals');
  const [selectedSectorId, setSelectedSectorId] = useState('pharma');

  const filteredSectors = selectedCategory === 'All Verticals'
    ? ALL_SECTORS
    : ALL_SECTORS.filter((s) => s.category === selectedCategory);

  const activeSector = ALL_SECTORS.find((s) => s.id === selectedSectorId) || ALL_SECTORS[0];

  return (
    <div className="space-y-0">
      {/* Editorial Header */}
      <section className="bg-[var(--paper)] pt-12 pb-16 lg:pt-16 lg:pb-24 border-b border-[var(--line)]">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 space-y-8">
          <div className="flex items-center space-x-3 text-xs font-mono text-[var(--ink-3)] uppercase tracking-wider">
            <span className="text-[var(--accent)] font-semibold">SECTOR INTELLIGENCE</span>
            <span>·</span>
            <span>20+ ECONOMIC VERTICALS</span>
            <span>·</span>
            <span>AFRICA & BEYOND</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            <div className="lg:col-span-8 space-y-6">
              <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[var(--ink-strong)] leading-tight">
                Industry Verticals.
              </h1>
              <p className="font-body text-lg text-[var(--ink)] leading-relaxed max-w-3xl">
                While Life Sciences remains our foundational core, our integrated capabilities in market research, strategy, and enterprise AI serve key economic pillars across Africa.
              </p>
            </div>

            <div className="lg:col-span-4 p-6 bg-[var(--paper-2)] border border-[var(--line)] rounded-[2px] space-y-3 font-mono text-xs">
              <div className="text-[var(--accent)] font-semibold uppercase tracking-wider">
                Practice Architecture
              </div>
              <p className="text-[var(--ink-2)] leading-relaxed">
                Every sector engagement is led by industry veterans paired with our technical machine learning architects and econometric field researchers.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Elevated Life Sciences Feature Band */}
      <section className="py-12 bg-[var(--accent-soft)]/40 border-b border-[var(--line)]">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
          <div className="p-6 sm:p-8 bg-[var(--paper)] border border-[var(--accent)]/40 rounded-[2px] flex flex-col lg:flex-row lg:items-center justify-between gap-6 shadow-xs">
            <div className="space-y-2 max-w-2xl">
              <div className="inline-flex items-center space-x-2 font-mono text-xs text-[var(--accent)] font-semibold uppercase tracking-widest">
                <Stethoscope className="w-4 h-4" />
                <span>CORE SPECIALIZATION & FOUNDING HERITAGE</span>
              </div>
              <h2 className="font-display text-2xl sm:text-3xl font-bold text-[var(--ink-strong)]">
                The Dedicated Life Sciences Practice
              </h2>
              <p className="font-body text-sm text-[var(--ink-2)] leading-relaxed">
                Pharmaceuticals, medical equipment, diagnostics, and healthcare delivery demand exceptional domain knowledge, clinical fluency, and regulatory authority. Explore our deepest practice area.
              </p>
            </div>

            <button
              onClick={() => navigate('/industries/life-sciences')}
              className="px-6 py-3.5 bg-[var(--accent)] hover:bg-[var(--accent-2)] text-white text-xs font-mono uppercase tracking-wider font-semibold rounded-[2px] transition-colors inline-flex items-center space-x-2 whitespace-nowrap self-start lg:self-center cursor-pointer shadow-sm"
            >
              <span>Explore Life Sciences Practice</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>

      {/* Interactive Sector Matrix */}
      <section className="py-16 lg:py-24 bg-[var(--paper)] border-b border-[var(--line)]">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 space-y-12">
          {/* Category Filter Chips */}
          <div className="flex flex-wrap gap-2 pb-4 border-b border-[var(--line)]">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3 py-1.5 font-mono text-xs rounded-[2px] transition-colors cursor-pointer ${
                  selectedCategory === cat
                    ? 'bg-[var(--accent)] text-white font-semibold'
                    : 'bg-[var(--paper-2)] text-[var(--ink-2)] hover:text-[var(--ink-strong)] border border-[var(--line)]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Sectors Grid and Detail Panel Split */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Sectors Selection (7 cols) */}
            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-3">
              {filteredSectors.map((sector) => {
                const isSelected = selectedSectorId === sector.id;
                return (
                  <button
                    key={sector.id}
                    onClick={() => setSelectedSectorId(sector.id)}
                    className={`p-4 text-left border rounded-[2px] transition-all cursor-pointer ${
                      isSelected
                        ? 'bg-[var(--paper-2)] border-[var(--accent)] shadow-sm ring-1 ring-[var(--accent)]'
                        : 'bg-[var(--paper)] border-[var(--line)] hover:border-[var(--ink-3)]'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-1">
                      <span className="font-mono text-[9px] uppercase tracking-wider text-[var(--ink-3)]">
                        {sector.category}
                      </span>
                      <span className="font-mono text-[9px] font-semibold text-[var(--accent)]">
                        {sector.focus}
                      </span>
                    </div>
                    <div className="font-display font-semibold text-base text-[var(--ink-strong)] leading-snug">
                      {sector.name}
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Selected Sector Deep Dossier (5 cols) */}
            <div className="lg:col-span-5 p-6 bg-[var(--paper-2)] border border-[var(--line)] rounded-[2px] space-y-6">
              <div className="space-y-1 pb-3 border-b border-[var(--line)]">
                <div className="font-mono text-[10px] text-[var(--accent)] font-semibold uppercase">
                  {activeSector.category} · {activeSector.focus}
                </div>
                <h3 className="font-display text-2xl font-bold text-[var(--ink-strong)]">
                  {activeSector.name}
                </h3>
              </div>

              <div className="space-y-3 font-body text-xs">
                <div>
                  <div className="font-mono text-[10px] text-[var(--ink-3)] uppercase tracking-wider mb-1">
                    African Strategic Relevance:
                  </div>
                  <p className="text-[var(--ink)] leading-relaxed">
                    {activeSector.relevance}
                  </p>
                </div>

                <div>
                  <div className="font-mono text-[10px] text-[var(--ink-3)] uppercase tracking-wider mb-1">
                    Typical Engagement Mandate:
                  </div>
                  <p className="text-[var(--ink-2)] leading-relaxed bg-[var(--paper)] p-3 border border-[var(--line)] rounded-[2px]">
                    {activeSector.typicalMandate}
                  </p>
                </div>
              </div>

              <div className="pt-2 border-t border-[var(--line)] space-y-2">
                <button
                  onClick={() => navigate(`/explore?industry=${encodeURIComponent(activeSector.name)}`)}
                  className="w-full py-2.5 bg-[var(--paper)] hover:bg-[var(--accent-soft)] border border-[var(--line)] hover:border-[var(--accent)] text-xs font-mono text-[var(--accent)] font-semibold rounded-[2px] transition-colors flex items-center justify-between px-3 cursor-pointer"
                >
                  <span>Compose {activeSector.name} in Explorer</span>
                  <Compass className="w-4 h-4" />
                </button>

                <button
                  onClick={() => navigate(`/contact?industry=${encodeURIComponent(activeSector.name)}`)}
                  className="w-full py-2.5 bg-[var(--accent)] hover:bg-[var(--accent-2)] text-white text-xs font-mono uppercase tracking-wider font-semibold rounded-[2px] transition-colors flex items-center justify-between px-3 cursor-pointer"
                >
                  <span>Start a Conversation for this Sector</span>
                  <ArrowUpRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
