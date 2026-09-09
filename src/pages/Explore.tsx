import React, { useState, useEffect } from 'react';
import { ArrowUpRight, Compass, Sparkles, CheckCircle2, Clock, FileText, ArrowRight } from 'lucide-react';
import { useNavigation } from '../context/NavigationContext';

const INDUSTRIES = [
  'Pharmaceuticals & Biologics',
  'Medical Devices & Diagnostics',
  'Hospitals & Healthcare Networks',
  'Commercial Banking & FinTech',
  'Insurance & Underwriting',
  'Renewable Energy & Off-Grid',
  'Agribusiness & Crop Science',
  'Consumer Goods & Retail',
  'Telecommunications & Digital Infra',
  'Public Sector & Development Agencies'
];

const GEOGRAPHIES = [
  'Kenya & East African Community (EAC)',
  'Nigeria & ECOWAS Regional Bloc',
  'South Africa & SADC Corridor',
  'Egypt & North African Gateway',
  'Pan-African Multi-Country Mandate',
  'European / African Trade Corridor',
  'North American / African Biotech Corridor'
];

const CAPABILITIES = [
  'Market Research & Field Intelligence',
  'Business Consulting & Corporate Strategy',
  'AI Enterprise Solutions & Systems',
  'AI Training & Institutional Literacy',
  'Integrated End-to-End Advisory'
];

export const Explore: React.FC = () => {
  const { queryParams, navigate } = useNavigation();

  const [selectedIndustry, setSelectedIndustry] = useState<string>(
    queryParams.industry || 'Pharmaceuticals & Biologics'
  );
  const [selectedGeography, setSelectedGeography] = useState<string>(
    queryParams.geography || 'Kenya & East African Community (EAC)'
  );
  const [selectedCapability, setSelectedCapability] = useState<string>(
    queryParams.capability || 'Market Research & Field Intelligence'
  );

  useEffect(() => {
    if (queryParams.industry) setSelectedIndustry(queryParams.industry);
    if (queryParams.geography) setSelectedGeography(queryParams.geography);
    if (queryParams.capability) setSelectedCapability(queryParams.capability);
  }, [queryParams]);

  // Generate tailored advisory synthesis
  const getSynthesis = () => {
    const isLifeSciences = selectedIndustry.includes('Pharm') || selectedIndustry.includes('Device') || selectedIndustry.includes('Health');
    const isAI = selectedCapability.includes('AI');

    let advisoryFocus = `MindCraft structures a targeted engagement deploying in-country field teams and senior advisors in ${selectedGeography} specifically tailored to ${selectedIndustry}.`;
    let keyDeliverables = [
      'Empirical stakeholder mapping and regulatory compliance roadmap',
      'Operating model adjustments and commercial distribution strategy',
      'Executive briefing dossier with milestone execution schedule'
    ];
    let timeline = '8 to 14 weeks from ToR execution';

    if (isLifeSciences && isAI) {
      advisoryFocus = `Deploying private sovereign machine learning models and NLP document processors calibrated to national health authorities across ${selectedGeography} for ${selectedIndustry}.`;
      keyDeliverables = [
        'Private AI pipeline for regulatory submission tracking and PV reporting',
        'Compliance audit ensuring adherence to local data protection laws',
        'Clinician and regulatory affairs staff workflow upskilling program'
      ];
      timeline = '12 to 18 weeks (Agile sprints with bi-weekly review gates)';
    } else if (isLifeSciences) {
      advisoryFocus = `Specialized Life Sciences advisory addressing cross-border registration, formulary inclusions, and distributor governance in ${selectedGeography}.`;
      keyDeliverables = [
        'National regulatory authority submission dossier (PPB / NAFDAC / SAHPRA)',
        'Key Opinion Leader (KOL) prescribing behavior and pricing audit',
        'Wholesale cold chain and commercial route-to-market architecture'
      ];
      timeline = '10 to 16 weeks';
    } else if (isAI) {
      advisoryFocus = `Enterprise AI system architecture, data sovereignty verification, and workforce capability building for ${selectedIndustry} in ${selectedGeography}.`;
      keyDeliverables = [
        'Private on-premise/cloud AI infrastructure architecture specification',
        'Custom fine-tuned domain reasoner and automated document extractor',
        'Executive AI masterclass and department champion certification'
      ];
      timeline = '10 to 14 weeks';
    }

    return { advisoryFocus, keyDeliverables, timeline };
  };

  const synthesis = getSynthesis();

  const handleStartConversation = () => {
    const searchParams = new URLSearchParams({
      industry: selectedIndustry,
      geography: selectedGeography,
      capability: selectedCapability
    });
    navigate(`/contact?${searchParams.toString()}`);
  };

  return (
    <div className="space-y-0">
      {/* Editorial Header */}
      <section className="bg-[var(--paper)] pt-12 pb-16 lg:pt-16 lg:pb-24 border-b border-[var(--line)]">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 space-y-8">
          <div className="flex items-center space-x-3 text-xs font-mono text-[var(--ink-3)] uppercase tracking-wider">
            <span className="text-[var(--accent)] font-semibold">STRATEGIC ADVISORY COMPOSER</span>
            <span>·</span>
            <span>INDUSTRY × GEOGRAPHY × CAPABILITY</span>
            <span>·</span>
            <span>REAL-TIME BRIEF</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            <div className="lg:col-span-8 space-y-6">
              <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[var(--ink-strong)] leading-tight">
                Strategic Explorer.
              </h1>
              <p className="font-body text-lg text-[var(--ink)] leading-relaxed max-w-3xl">
                Configure your organization's exact strategic challenge across industry, African geography, and functional capability to instantly generate a tailored engagement brief.
              </p>
            </div>

            <div className="lg:col-span-4 p-6 bg-[var(--paper-2)] border border-[var(--line)] rounded-[2px] space-y-3 font-mono text-xs">
              <div className="text-[var(--accent)] font-semibold uppercase tracking-wider">
                How It Operates
              </div>
              <p className="text-[var(--ink-2)] leading-relaxed">
                Our matrix models real engagement parameters derived from verified African operational mandates, regulatory frameworks, and enterprise technology implementations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* The 3-Slot Interactive Composer Canvas */}
      <section className="py-16 lg:py-24 bg-[var(--paper-2)] border-b border-[var(--line)]">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 space-y-12">
          {/* Selector Slots Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Slot 1: Industry */}
            <div className="p-6 bg-[var(--paper)] border border-[var(--line)] rounded-[2px] space-y-4">
              <div className="flex items-center justify-between pb-2 border-b border-[var(--line)]">
                <span className="font-mono text-xs text-[var(--accent)] font-bold">SLOT 01</span>
                <span className="font-mono text-[10px] uppercase text-[var(--ink-3)]">Industry Sector</span>
              </div>
              <div className="space-y-1.5 max-h-72 overflow-y-auto pr-1">
                {INDUSTRIES.map((ind) => (
                  <button
                    key={ind}
                    onClick={() => setSelectedIndustry(ind)}
                    className={`w-full text-left p-2.5 rounded-[2px] font-mono text-xs transition-colors cursor-pointer ${
                      selectedIndustry === ind
                        ? 'bg-[var(--accent)] text-white font-semibold'
                        : 'hover:bg-[var(--paper-2)] text-[var(--ink)]'
                    }`}
                  >
                    {ind}
                  </button>
                ))}
              </div>
            </div>

            {/* Slot 2: Geography */}
            <div className="p-6 bg-[var(--paper)] border border-[var(--line)] rounded-[2px] space-y-4">
              <div className="flex items-center justify-between pb-2 border-b border-[var(--line)]">
                <span className="font-mono text-xs text-[var(--accent)] font-bold">SLOT 02</span>
                <span className="font-mono text-[10px] uppercase text-[var(--ink-3)]">Geographic Focus</span>
              </div>
              <div className="space-y-1.5 max-h-72 overflow-y-auto pr-1">
                {GEOGRAPHIES.map((geo) => (
                  <button
                    key={geo}
                    onClick={() => setSelectedGeography(geo)}
                    className={`w-full text-left p-2.5 rounded-[2px] font-mono text-xs transition-colors cursor-pointer ${
                      selectedGeography === geo
                        ? 'bg-[var(--accent)] text-white font-semibold'
                        : 'hover:bg-[var(--paper-2)] text-[var(--ink)]'
                    }`}
                  >
                    {geo}
                  </button>
                ))}
              </div>
            </div>

            {/* Slot 3: Capability */}
            <div className="p-6 bg-[var(--paper)] border border-[var(--line)] rounded-[2px] space-y-4">
              <div className="flex items-center justify-between pb-2 border-b border-[var(--line)]">
                <span className="font-mono text-xs text-[var(--accent)] font-bold">SLOT 03</span>
                <span className="font-mono text-[10px] uppercase text-[var(--ink-3)]">Capability Discipline</span>
              </div>
              <div className="space-y-1.5 max-h-72 overflow-y-auto pr-1">
                {CAPABILITIES.map((cap) => (
                  <button
                    key={cap}
                    onClick={() => setSelectedCapability(cap)}
                    className={`w-full text-left p-2.5 rounded-[2px] font-mono text-xs transition-colors cursor-pointer ${
                      selectedCapability === cap
                        ? 'bg-[var(--accent)] text-white font-semibold'
                        : 'hover:bg-[var(--paper-2)] text-[var(--ink)]'
                    }`}
                  >
                    {cap}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Generated Real-Time Intelligence Brief */}
          <div className="p-8 bg-[var(--paper)] border-2 border-[var(--accent)]/60 rounded-[2px] space-y-6 shadow-sm">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-4 border-b border-[var(--line)]">
              <div>
                <span className="font-mono text-xs text-[var(--accent)] font-semibold uppercase">
                  Synthesized Advisory Angle
                </span>
                <h2 className="font-display text-2xl sm:text-3xl font-bold text-[var(--ink-strong)] mt-1">
                  {selectedIndustry} · {selectedGeography}
                </h2>
                <div className="font-mono text-xs text-[var(--ink-2)] mt-0.5">
                  Focus Discipline: <span className="font-semibold text-[var(--accent)]">{selectedCapability}</span>
                </div>
              </div>

              <button
                onClick={handleStartConversation}
                className="px-6 py-3.5 bg-[var(--accent)] hover:bg-[var(--accent-2)] text-white text-xs font-mono uppercase tracking-wider font-semibold rounded-[2px] transition-colors inline-flex items-center space-x-2 whitespace-nowrap self-start md:self-auto cursor-pointer shadow-sm"
              >
                <span>Start a Conversation About This</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              <div className="lg:col-span-7 space-y-4">
                <div className="font-mono text-xs text-[var(--ink-3)] uppercase font-semibold">
                  Mandate Overview & Approach:
                </div>
                <p className="font-body text-base text-[var(--ink)] leading-relaxed">
                  {synthesis.advisoryFocus}
                </p>

                <div className="space-y-2 pt-2">
                  <div className="font-mono text-xs text-[var(--ink-3)] uppercase font-semibold">
                    Core Milestone Deliverables:
                  </div>
                  <div className="space-y-2">
                    {synthesis.keyDeliverables.map((item, idx) => (
                      <div key={idx} className="p-3 bg-[var(--paper-2)] border border-[var(--line)] rounded-[2px] font-mono text-xs text-[var(--ink)] flex items-start space-x-2">
                        <CheckCircle2 className="w-4 h-4 text-[var(--accent)] shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="lg:col-span-5 p-6 bg-[var(--paper-2)] border border-[var(--line)] rounded-[2px] space-y-4 font-mono text-xs">
                <div className="text-[var(--accent)] font-semibold uppercase tracking-wider">
                  Operational Parameters
                </div>
                <div className="space-y-2.5 text-[var(--ink-2)] border-t border-[var(--line)] pt-3">
                  <div>
                    <span className="text-[var(--ink-3)] block text-[10px] uppercase">Estimated Timeline</span>
                    <span className="text-[var(--ink-strong)] font-semibold">{synthesis.timeline}</span>
                  </div>
                  <div>
                    <span className="text-[var(--ink-3)] block text-[10px] uppercase">Senior Staffing</span>
                    <span className="text-[var(--ink-strong)]">Partner lead + In-country researcher + AI architect</span>
                  </div>
                  <div>
                    <span className="text-[var(--ink-3)] block text-[10px] uppercase">Quality Review Gate</span>
                    <span className="text-[var(--ink-strong)]">Peer-reviewed empirical baseline audit</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
