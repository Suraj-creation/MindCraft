import React, { useState } from 'react';
import { ArrowUpRight, ArrowRight, MapPin, Globe, Compass, CheckCircle2, Building2 } from 'lucide-react';
import { useNavigation } from '../context/NavigationContext';
import { GEO_REGIONS } from '../data/landingData';

export const WhereWeWork: React.FC = () => {
  const { navigate } = useNavigation();
  const [selectedRegionId, setSelectedRegionId] = useState<string>('east');

  const activeRegion = GEO_REGIONS.find((r) => r.id === selectedRegionId) || GEO_REGIONS[0];

  return (
    <div className="space-y-0">
      {/* Editorial Header */}
      <section className="bg-[var(--paper)] pt-12 pb-16 lg:pt-16 lg:pb-24 border-b border-[var(--line)]">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 space-y-8">
          <div className="flex items-center space-x-3 text-xs font-mono text-[var(--ink-3)] uppercase tracking-wider">
            <span className="text-[var(--accent)] font-semibold">GEOGRAPHIC FOOTPRINT</span>
            <span>·</span>
            <span>NAIROBI COMMAND CORE</span>
            <span>·</span>
            <span>45 AFRICAN MARKETS</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            <div className="lg:col-span-7 space-y-6">
              <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[var(--ink-strong)] leading-tight">
                Where We Work.
              </h1>
              <p className="font-body text-lg text-[var(--ink)] leading-relaxed">
                Operating from our strategic command node in Nairobi, MindCraft deploys in-country researchers and senior advisors across all 45 African markets, supported by active trade and research corridors into Europe and North America.
              </p>
              <div className="flex flex-wrap gap-4 pt-2">
                <button
                  onClick={() => navigate('/contact')}
                  className="px-6 py-3.5 text-xs font-mono tracking-wider uppercase font-semibold text-white bg-[var(--accent)] hover:bg-[var(--accent-2)] rounded-[2px] transition-colors shadow-sm inline-flex items-center space-x-2 cursor-pointer"
                >
                  <span>Inquire About Your Market</span>
                  <ArrowUpRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="border border-[var(--line)] bg-[var(--paper-2)] p-2 rounded-[2px] shadow-sm">
                <div className="aspect-[4/3] overflow-hidden rounded-[2px]">
                  <img
                    src="/assets/images/african_cartography_1788984023445.jpg"
                    alt="Cartographic topographical intelligence lines across the African continent"
                    className="w-full h-full object-cover"
                    loading="eager"
                  />
                </div>
                <div className="pt-2 px-1 flex items-center justify-between font-mono text-[11px] text-[var(--ink-3)]">
                  <span>Cartographic Intelligence Systems</span>
                  <span className="text-[var(--accent)] font-semibold">Nairobi Central Node</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Nairobi Command Node */}
      <section className="py-16 lg:py-24 bg-[var(--paper-2)] border-b border-[var(--line)]">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 space-y-8">
          <div className="space-y-2 pb-6 border-b border-[var(--line)]">
            <div className="font-mono text-xs text-[var(--accent)] font-semibold uppercase tracking-widest">
              CENTRAL COMMAND NODE
            </div>
            <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-[var(--ink-strong)]">
              Nairobi: The gateway to African commerce and science.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 font-body text-sm">
            <div className="p-6 bg-[var(--paper)] border border-[var(--line)] rounded-[2px] space-y-3">
              <div className="font-mono text-xs text-[var(--accent)] font-semibold uppercase">01 · REGULATORY CONVERGENCE</div>
              <div className="font-display font-bold text-lg text-[var(--ink-strong)]">East African Nexus</div>
              <p className="text-[var(--ink-2)] leading-relaxed text-xs">
                Direct access to regional standard-setting bodies, EAC joint evaluation secretariats, and bilateral trade facilitation panels across the Eastern African corridor.
              </p>
            </div>

            <div className="p-6 bg-[var(--paper)] border border-[var(--line)] rounded-[2px] space-y-3">
              <div className="font-mono text-xs text-[var(--accent)] font-semibold uppercase">02 · TALENT & AI DENSITY</div>
              <div className="font-display font-bold text-lg text-[var(--ink-strong)]">Silicon Savannah Hub</div>
              <p className="text-[var(--ink-2)] leading-relaxed text-xs">
                Nairobi hosts the continent’s premier concentrations of data scientists, machine learning engineers, and software architects, enabling deep sovereign AI development.
              </p>
            </div>

            <div className="p-6 bg-[var(--paper)] border border-[var(--line)] rounded-[2px] space-y-3">
              <div className="font-mono text-xs text-[var(--accent)] font-semibold uppercase">03 · TRANSIT EFFICIENCY</div>
              <div className="font-display font-bold text-lg text-[var(--ink-strong)]">Equatorial Flight Routing</div>
              <p className="text-[var(--ink-2)] leading-relaxed text-xs">
                Jomo Kenyatta International Airport (JKIA) provides non-stop flights to 40+ African capitals and direct daily corridors into London, Paris, Dubai, and New York.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Regional Operational Quadrants */}
      <section className="py-16 lg:py-24 bg-[var(--paper)] border-b border-[var(--line)]">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 space-y-12">
          <div className="space-y-2 pb-6 border-b border-[var(--line)]">
            <div className="font-mono text-xs text-[var(--accent)] font-semibold uppercase tracking-widest">
              REGIONAL COVERAGE
            </div>
            <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-[var(--ink-strong)]">
              Four operational regional quadrants.
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Region Nav (4 cols) */}
            <div className="lg:col-span-4 space-y-3">
              {GEO_REGIONS.map((region) => {
                const isSelected = selectedRegionId === region.id;
                return (
                  <button
                    key={region.id}
                    onClick={() => setSelectedRegionId(region.id)}
                    className={`w-full p-4 text-left border rounded-[2px] transition-all cursor-pointer ${
                      isSelected
                        ? 'bg-[var(--paper-2)] border-[var(--accent)] shadow-sm ring-1 ring-[var(--accent)]'
                        : 'bg-[var(--paper)] border-[var(--line)] hover:border-[var(--ink-3)]'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <div className="font-display font-semibold text-base text-[var(--ink-strong)]">
                        {region.name}
                      </div>
                      <span className="font-mono text-[10px] text-[var(--accent)] font-semibold">
                        {region.coverage}
                      </span>
                    </div>
                    <div className="font-mono text-xs text-[var(--ink-3)] mt-1">
                      {region.nairobiRelation}
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Region Details (8 cols) */}
            <div className="lg:col-span-8 p-8 bg-[var(--paper-2)] border border-[var(--line)] rounded-[2px] space-y-6">
              <div className="pb-4 border-b border-[var(--line)] flex items-center justify-between">
                <div>
                  <div className="font-mono text-xs text-[var(--accent)] font-semibold uppercase">
                    Regional Intelligence Profile
                  </div>
                  <h3 className="font-display text-3xl font-bold text-[var(--ink-strong)] mt-1">
                    {activeRegion.name}
                  </h3>
                </div>
                <div className="font-mono text-xs text-[var(--ink-3)]">
                  {activeRegion.coverage}
                </div>
              </div>

              <div>
                <div className="font-mono text-xs text-[var(--ink-3)] uppercase tracking-wider mb-2 font-semibold">
                  Primary Focus Markets:
                </div>
                <div className="flex flex-wrap gap-2">
                  {activeRegion.focusMarkets.map((m) => (
                    <span key={m} className="px-3 py-1 font-mono text-xs bg-[var(--paper)] border border-[var(--line)] rounded-[2px] text-[var(--ink-strong)] font-semibold">
                      {m}
                    </span>
                  ))}
                </div>
              </div>

              <div className="space-y-4 font-body text-sm">
                <div>
                  <span className="font-mono text-xs text-[var(--ink-3)] uppercase block mb-1 font-semibold">
                    Regulatory Harmonization & Architecture:
                  </span>
                  <p className="text-[var(--ink)] leading-relaxed">
                    {activeRegion.keyIntelligence}
                  </p>
                </div>

                <div>
                  <span className="font-mono text-xs text-[var(--ink-3)] uppercase block mb-1 font-semibold">
                    Commercial & Distribution Realities:
                  </span>
                  <p className="text-[var(--ink-2)] leading-relaxed">
                    {activeRegion.commercialContext}
                  </p>
                </div>
              </div>

              <div className="pt-2 border-t border-[var(--line)]">
                <button
                  onClick={() => navigate(`/explore?geography=${encodeURIComponent(activeRegion.name)}`)}
                  className="text-xs font-mono text-[var(--accent)] font-semibold hover:underline inline-flex items-center space-x-1 cursor-pointer"
                >
                  <span>Compose an Engagement for {activeRegion.name} in Explorer →</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Global Corridors */}
      <section className="py-16 lg:py-24 bg-[var(--paper-2)] border-b border-[var(--line)]">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 space-y-8">
          <div className="space-y-2 pb-6 border-b border-[var(--line)]">
            <div className="font-mono text-xs text-[var(--accent)] font-semibold uppercase tracking-widest">
              GLOBAL HUBS
            </div>
            <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-[var(--ink-strong)]">
              Cross-border corridors to Europe and North America.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 font-mono text-xs">
            <div className="p-6 bg-[var(--paper)] border border-[var(--line)] rounded-[2px] space-y-3">
              <div className="text-[var(--accent)] font-bold uppercase">European Corridors (London, Geneva, Brussels)</div>
              <p className="font-body text-xs text-[var(--ink-2)] leading-relaxed">
                Advising European multinational pharmaceutical firms, DFIs, and bilateral trade agencies structuring market entry and supply agreements into Sub-Saharan Africa.
              </p>
            </div>

            <div className="p-6 bg-[var(--paper)] border border-[var(--line)] rounded-[2px] space-y-3">
              <div className="text-[var(--accent)] font-bold uppercase">North American Corridors (New York, Washington, Boston)</div>
              <p className="font-body text-xs text-[var(--ink-2)] leading-relaxed">
                Serving US biotech innovators, philanthropic foundations, and enterprise technology groups seeking sovereign, ethical AI and clinical validation models in African markets.
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
              Planning expansion into a specific African territory?
            </h2>
            <p className="font-body text-sm text-[var(--paper-2)]/80">
              Our Nairobi central intelligence desk can provide immediate country briefings and feasibility frameworks.
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
