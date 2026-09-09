import React, { useState } from 'react';
import { ArrowUpRight, Compass, ArrowRight, ShieldCheck, ChevronRight, Activity, Globe, CheckCircle2, Sparkles, Building2, Stethoscope, Cpu, BookOpen, Layers } from 'lucide-react';
import { useNavigation } from '../context/NavigationContext';
import { ENGINE_NODES, LIFE_SCIENCES_SECTORS, GEO_REGIONS, ENGAGEMENT_STAGES } from '../data/landingData';

export const Home: React.FC = () => {
  const { navigate, openConversationModal } = useNavigation();

  // Engine node selection
  const [selectedEngineNode, setSelectedEngineNode] = useState<string>('research');

  // Life sciences sector selection
  const [selectedLSSector, setSelectedLSSector] = useState<string>('pharma');

  // Regional selection
  const [selectedRegionId, setSelectedRegionId] = useState<string>('east');

  // Explorer composer mini-state
  const [composerIndustry, setComposerIndustry] = useState('Pharmaceuticals');
  const [composerGeography, setComposerGeography] = useState('Kenya (East Africa)');
  const [composerCapability, setComposerCapability] = useState('AI Enterprise Solutions');

  const activeNode = ENGINE_NODES.find((n) => n.id === selectedEngineNode) || ENGINE_NODES[1];
  const activeSector = LIFE_SCIENCES_SECTORS.find((s) => s.id === selectedLSSector) || LIFE_SCIENCES_SECTORS[0];
  const activeRegion = GEO_REGIONS.find((r) => r.id === selectedRegionId) || GEO_REGIONS[0];

  return (
    <div className="space-y-0">
      {/* ─────────────────────────────────────────────────────────────
          MOVEMENT 01 — HERO / OPEN NAIROBI
          "Clarity from complexity."
          Dramatically visual: large Nairobi skyline visual, minimal copy.
          Nairobi -> intelligence -> Africa -> global.
      ───────────────────────────────────────────────────────────── */}
      <section
        id="hero"
        className="relative bg-[var(--paper)] pt-8 pb-16 lg:pt-12 lg:pb-24 border-b border-[var(--line)] overflow-hidden"
      >
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
          {/* Top Editorial Eyebrow Strip */}
          <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-[var(--line)] text-xs font-mono text-[var(--ink-3)]">
            <div className="flex items-center space-x-3">
              <span className="inline-block w-2 h-2 rounded-full bg-[var(--accent)] animate-pulse" />
              <span className="tracking-widest uppercase font-semibold text-[var(--ink)]">NAIROBI, KENYA</span>
              <span>·</span>
              <span>EST. 2026</span>
              <span>·</span>
              <span className="hidden sm:inline">1°17′S, 36°49′E</span>
            </div>
            <div className="tracking-wider uppercase text-[11px] text-[var(--ink-2)]">
              Advisory · Market Intelligence · Applied AI
            </div>
          </div>

          {/* Main Visual-First Split */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 pt-8 lg:pt-12 items-center">
            {/* Left Typography & Core Thesis (5 cols) */}
            <div className="lg:col-span-6 space-y-6">
              <div className="space-y-3">
                <div className="font-mono text-xs tracking-widest text-[var(--accent)] uppercase font-semibold">
                  African in Context · Global in Ambition
                </div>
                <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[var(--ink-strong)] leading-[1.08]">
                  Clarity from complexity.
                </h1>
              </div>

              {/* Minimal Supporting Thesis (≤24 words) */}
              <p className="font-body text-base sm:text-lg text-[var(--ink-2)] leading-relaxed max-w-xl">
                A Nairobi-based consultancy uniting market research, business strategy, enterprise AI, and executive training — anchored in Life Sciences and built for Africa.
              </p>

              {/* Visual Coordinate Tags */}
              <div className="grid grid-cols-2 gap-2 pt-2 font-mono text-[11px] text-[var(--ink-2)]">
                <div className="p-2 border border-[var(--line)] bg-[var(--paper-2)]/60 rounded-[2px] flex items-center space-x-1.5">
                  <span className="text-[var(--accent)] font-bold">01</span>
                  <span>Business Consulting</span>
                </div>
                <div className="p-2 border border-[var(--line)] bg-[var(--paper-2)]/60 rounded-[2px] flex items-center space-x-1.5">
                  <span className="text-[var(--accent)] font-bold">02</span>
                  <span>Market Research</span>
                </div>
                <div className="p-2 border border-[var(--line)] bg-[var(--paper-2)]/60 rounded-[2px] flex items-center space-x-1.5">
                  <span className="text-[var(--accent)] font-bold">03</span>
                  <span>AI Training & Literacy</span>
                </div>
                <div className="p-2 border border-[var(--line)] bg-[var(--paper-2)]/60 rounded-[2px] flex items-center space-x-1.5">
                  <span className="text-[var(--accent)] font-bold">04</span>
                  <span>AI Enterprise Solutions</span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-4 pt-4">
                <button
                  onClick={() => navigate('/contact')}
                  className="px-6 py-3.5 text-xs font-mono tracking-wider uppercase font-semibold text-white bg-[var(--accent)] hover:bg-[var(--accent-2)] rounded-[2px] transition-colors shadow-sm inline-flex items-center space-x-2 cursor-pointer"
                >
                  <span>Start a Conversation</span>
                  <ArrowUpRight className="w-4 h-4" />
                </button>

                <button
                  onClick={() => navigate('/what-we-do')}
                  className="px-6 py-3.5 text-xs font-mono tracking-wider uppercase font-semibold text-[var(--ink-strong)] bg-transparent hover:bg-[var(--paper-2)] border border-[var(--line)] rounded-[2px] transition-colors inline-flex items-center space-x-2 cursor-pointer"
                >
                  <span>Explore the Engine</span>
                  <ArrowRight className="w-4 h-4 text-[var(--accent)]" />
                </button>
              </div>
            </div>

            {/* Right Hero Cinematic Visual Anchor (6 cols) */}
            <div className="lg:col-span-6">
              <div className="relative border border-[var(--line)] bg-[var(--paper-2)] p-2 rounded-[2px] shadow-sm overflow-hidden group">
                <div className="aspect-[16/10] overflow-hidden rounded-[2px] relative">
                  <img
                    src="/assets/images/nairobi_skyline_dawn_1788985474957.jpg"
                    alt="Contemporary Nairobi architectural skyline at dawn"
                    className="w-full h-full object-cover object-center group-hover:scale-102 transition-transform duration-700 ease-out"
                    loading="eager"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[var(--ink-strong)]/70 via-transparent to-transparent pointer-events-none" />

                  {/* Overlaid Editorial Metadata Stamp */}
                  <div className="absolute bottom-3 left-3 right-3 text-white flex items-center justify-between font-mono text-[10px] tracking-widest uppercase">
                    <span className="bg-black/50 backdrop-blur-xs px-2.5 py-1 border border-white/20">
                      Nairobi Command Center
                    </span>
                    <span className="bg-black/50 backdrop-blur-xs px-2.5 py-1 border border-white/20">
                      Pan-Africa & Global Reach
                    </span>
                  </div>
                </div>

                <div className="pt-3 px-2 pb-1 flex items-center justify-between text-xs font-mono text-[var(--ink-3)]">
                  <span>Equatorial Innovation Hub · Upper Hill & Westlands</span>
                  <span className="text-[var(--accent)] font-semibold">12 Key Focus Markets</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          MOVEMENT 02 — THE INTELLIGENCE ENGINE
          "Four capabilities. One continuous intelligence loop."
          Sequential composition, animated line system, progressive disclosure.
      ───────────────────────────────────────────────────────────── */}
      <section id="engine" className="py-16 lg:py-24 bg-[var(--paper)] border-b border-[var(--line)]">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 space-y-12">
          {/* Section Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-[var(--line)]">
            <div className="space-y-2">
              <div className="font-mono text-xs text-[var(--accent)] font-semibold uppercase tracking-widest">
                01 · THE VALUE ARCHITECTURE
              </div>
              <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-[var(--ink-strong)]">
                Four disciplines. One continuous intelligence loop.
              </h2>
            </div>
            <button
              onClick={() => navigate('/what-we-do')}
              className="text-xs font-mono text-[var(--accent)] hover:underline inline-flex items-center space-x-1 cursor-pointer self-start md:self-auto"
            >
              <span>Inspect Full Engine Architecture</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Interactive Connected Value Chain Spine */}
          <div className="space-y-8">
            {/* Step Selector Track */}
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2">
              {ENGINE_NODES.map((node) => {
                const isSelected = selectedEngineNode === node.id;
                return (
                  <button
                    key={node.id}
                    onClick={() => setSelectedEngineNode(node.id)}
                    className={`p-3.5 text-left border rounded-[2px] transition-all cursor-pointer ${
                      isSelected
                        ? 'bg-[var(--paper-2)] border-[var(--accent)] shadow-sm'
                        : 'border-[var(--line)] hover:border-[var(--ink-3)] bg-transparent'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-1">
                      <span className={`font-mono text-xs font-bold ${isSelected ? 'text-[var(--accent)]' : 'text-[var(--ink-3)]'}`}>
                        {node.step}
                      </span>
                      <span className="text-[9px] font-mono tracking-wider uppercase text-[var(--ink-3)]">
                        {node.role}
                      </span>
                    </div>
                    <div className={`font-display font-semibold text-sm leading-tight ${isSelected ? 'text-[var(--ink-strong)]' : 'text-[var(--ink-2)]'}`}>
                      {node.title}
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Selected Node Deep Inspector Panel */}
            <div className="p-6 sm:p-8 bg-[var(--paper-2)] border border-[var(--line)] rounded-[2px] grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
              <div className="lg:col-span-8 space-y-3">
                <div className="flex items-center space-x-3 text-xs font-mono text-[var(--accent)] font-semibold uppercase tracking-wider">
                  <span>Stage {activeNode.step}</span>
                  <span>·</span>
                  <span>{activeNode.role}</span>
                </div>
                <h3 className="font-display text-2xl font-bold text-[var(--ink-strong)]">
                  {activeNode.title}
                </h3>
                <p className="font-body text-base text-[var(--ink)] leading-relaxed">
                  {activeNode.shortSummary}
                </p>
                <p className="font-body text-sm text-[var(--ink-2)] leading-relaxed">
                  {activeNode.detail}
                </p>
              </div>

              <div className="lg:col-span-4 border-t lg:border-t-0 lg:border-l border-[var(--line)] pt-4 lg:pt-0 lg:pl-6 space-y-4 font-mono text-xs">
                <div>
                  <div className="text-[10px] uppercase tracking-wider text-[var(--ink-3)] mb-1">System Input</div>
                  <div className="text-[var(--ink)] bg-[var(--paper)] p-2.5 border border-[var(--line)] rounded-[2px] leading-snug">
                    {activeNode.input}
                  </div>
                </div>
                <div>
                  <div className="text-[10px] uppercase tracking-wider text-[var(--accent)] font-semibold mb-1">Delivered Output</div>
                  <div className="text-[var(--ink-strong)] bg-[var(--paper)] p-2.5 border border-[var(--accent)]/40 rounded-[2px] leading-snug">
                    {activeNode.output}
                  </div>
                </div>

                {activeNode.id !== 'question' && activeNode.id !== 'impact' && (
                  <button
                    onClick={() => {
                      if (activeNode.id === 'research') navigate('/what-we-do/market-research');
                      if (activeNode.id === 'consulting') navigate('/what-we-do/business-consulting');
                      if (activeNode.id === 'solutions') navigate('/what-we-do/ai-enterprise-solutions');
                      if (activeNode.id === 'training') navigate('/what-we-do/ai-training');
                    }}
                    className="w-full py-2.5 px-3 bg-[var(--paper)] hover:bg-[var(--accent-soft)] border border-[var(--line)] hover:border-[var(--accent)] text-xs text-[var(--accent)] font-semibold rounded-[2px] transition-colors flex items-center justify-between cursor-pointer"
                  >
                    <span>View Dedicated {activeNode.title} Page</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          MOVEMENT 03 — LIFE SCIENCES
          "Deep in Life Sciences. Broad across industry."
          Compelling clinical imagery + 6 domains progressive disclosure.
      ───────────────────────────────────────────────────────────── */}
      <section id="lifesciences" className="py-16 lg:py-24 bg-[var(--paper-2)] border-b border-[var(--line)]">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 space-y-12">
          {/* Section Header with Asymmetric Visual Badge */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-[var(--line)]">
            <div className="space-y-2">
              <div className="inline-flex items-center space-x-2 font-mono text-xs text-[var(--accent)] font-semibold uppercase tracking-widest bg-[var(--accent-soft)] px-2 py-0.5 rounded-[2px]">
                <Stethoscope className="w-3.5 h-3.5" />
                <span>FOUNDATIONAL HERITAGE · CORE SPECIALIZATION</span>
              </div>
              <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[var(--ink-strong)]">
                Deep in Life Sciences. Broad across industry.
              </h2>
            </div>

            <button
              onClick={() => navigate('/industries/life-sciences')}
              className="px-5 py-2.5 text-xs font-mono tracking-wider uppercase font-semibold text-white bg-[var(--accent)] hover:bg-[var(--accent-2)] rounded-[2px] transition-colors inline-flex items-center space-x-2 cursor-pointer self-start md:self-auto shadow-sm"
            >
              <span>Explore Dedicated Practice</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Life Sciences Image & Ecosystem Split */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left: Scientific Documentary Image (5 cols) */}
            <div className="lg:col-span-5 space-y-3">
              <div className="border border-[var(--line)] bg-[var(--paper)] p-2 rounded-[2px] shadow-sm">
                <div className="aspect-[4/3] overflow-hidden rounded-[2px] relative">
                  <img
                    src="/assets/images/african_clinical_lab_1788985514560.jpg"
                    alt="African clinical scientist conducting molecular diagnostics in Nairobi research laboratory"
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                  <div className="absolute top-3 left-3 bg-black/60 backdrop-blur-xs text-white font-mono text-[9px] uppercase tracking-wider px-2 py-0.5">
                    Nairobi Diagnostic Laboratory
                  </div>
                </div>
                <div className="p-2 font-mono text-[11px] text-[var(--ink-3)] flex items-center justify-between">
                  <span>Clinical & Commercial Fluency</span>
                  <span className="text-[var(--accent)] font-semibold">PPB · NAFDAC · SAHPRA</span>
                </div>
              </div>
            </div>

            {/* Right: The 6 Sub-Sectors Interactive Grid (7 cols) */}
            <div className="lg:col-span-7 space-y-4">
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
                {LIFE_SCIENCES_SECTORS.map((sector) => {
                  const isSelected = selectedLSSector === sector.id;
                  return (
                    <button
                      key={sector.id}
                      onClick={() => setSelectedLSSector(sector.id)}
                      className={`p-3 text-left border rounded-[2px] transition-all cursor-pointer ${
                        isSelected
                          ? 'bg-[var(--paper)] border-[var(--accent)] shadow-sm ring-1 ring-[var(--accent)]'
                          : 'bg-[var(--paper)] border-[var(--line)] hover:border-[var(--ink-3)]'
                      }`}
                    >
                      <div className="font-mono text-[10px] text-[var(--accent)] font-semibold uppercase">
                        Domain
                      </div>
                      <div className="font-display font-semibold text-sm text-[var(--ink-strong)] mt-0.5 leading-tight">
                        {sector.name}
                      </div>
                    </button>
                  );
                })}
              </div>

              {/* Dynamic Sub-Sector Focus Area Panel */}
              <div className="p-6 bg-[var(--paper)] border border-[var(--line)] rounded-[2px] space-y-4">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-3 border-b border-[var(--line)]">
                  <div>
                    <h3 className="font-display text-xl font-bold text-[var(--ink-strong)]">
                      {activeSector.name}
                    </h3>
                    <p className="font-mono text-xs text-[var(--accent)] mt-0.5">
                      {activeSector.subTitle}
                    </p>
                  </div>
                  <span className="font-mono text-[10px] uppercase text-[var(--ink-3)] px-2 py-0.5 bg-[var(--paper-2)] border border-[var(--line)] self-start sm:self-auto">
                    Verified Focus Areas
                  </span>
                </div>

                <p className="font-body text-sm text-[var(--ink-2)] leading-relaxed">
                  {activeSector.description}
                </p>

                <div className="space-y-2 pt-1">
                  <div className="font-mono text-[11px] uppercase tracking-wider text-[var(--ink-3)]">
                    Illustrative Mandate Scope:
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {activeSector.coreDeliverables.map((item, idx) => (
                      <div key={idx} className="flex items-start space-x-2 text-xs font-mono text-[var(--ink)]">
                        <span className="text-[var(--accent)] font-bold">✓</span>
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          MOVEMENT 04 — AFRICA AS INTELLIGENCE
          Sophisticated vector African cartography:
          Nairobi -> East Africa -> Africa -> Global.
      ───────────────────────────────────────────────────────────── */}
      <section id="geography" className="py-16 lg:py-24 bg-[var(--paper)] border-b border-[var(--line)]">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 space-y-12">
          {/* Section Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-[var(--line)]">
            <div className="space-y-2">
              <div className="font-mono text-xs text-[var(--accent)] font-semibold uppercase tracking-widest">
                03 · GEOGRAPHIC REACH
              </div>
              <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-[var(--ink-strong)]">
                Rooted in Nairobi. Active across the continent.
              </h2>
            </div>
            <button
              onClick={() => navigate('/where-we-work')}
              className="text-xs font-mono text-[var(--accent)] hover:underline inline-flex items-center space-x-1 cursor-pointer self-start md:self-auto"
            >
              <span>Explore All 45 African Markets & Global Corridors</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Regional Quadrants & Interactive Footprint */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Regional Navigation Cards (5 cols) */}
            <div className="lg:col-span-5 space-y-3">
              <div className="font-mono text-xs uppercase tracking-wider text-[var(--ink-3)] mb-1">
                Select Operational Quadrant:
              </div>
              {GEO_REGIONS.map((region) => {
                const isSelected = selectedRegionId === region.id;
                return (
                  <button
                    key={region.id}
                    onClick={() => setSelectedRegionId(region.id)}
                    className={`w-full p-4 text-left border rounded-[2px] transition-all cursor-pointer ${
                      isSelected
                        ? 'bg-[var(--paper-2)] border-[var(--accent)] shadow-sm'
                        : 'border-[var(--line)] hover:border-[var(--ink-3)] bg-[var(--paper)]'
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
                    <div className="font-mono text-[11px] text-[var(--ink-3)] mt-1">
                      {region.nairobiRelation}
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Cartographic Intelligence Panel (7 cols) */}
            <div className="lg:col-span-7 bg-[var(--paper-2)] border border-[var(--line)] p-6 sm:p-8 rounded-[2px] space-y-6">
              <div className="flex items-center justify-between pb-3 border-b border-[var(--line)]">
                <div>
                  <div className="font-mono text-xs text-[var(--accent)] font-semibold uppercase">
                    Operational Intelligence Focus
                  </div>
                  <h3 className="font-display text-2xl font-bold text-[var(--ink-strong)] mt-0.5">
                    {activeRegion.name}
                  </h3>
                </div>
                <div className="font-mono text-xs text-[var(--ink-3)]">
                  {activeRegion.coverage}
                </div>
              </div>

              {/* Focus Markets Tag Array */}
              <div>
                <div className="font-mono text-[11px] text-[var(--ink-3)] uppercase tracking-wider mb-2">
                  Primary Focus Markets:
                </div>
                <div className="flex flex-wrap gap-2">
                  {activeRegion.focusMarkets.map((market) => (
                    <span
                      key={market}
                      className="px-3 py-1 font-mono text-xs font-semibold bg-[var(--paper)] border border-[var(--line)] rounded-[2px] text-[var(--ink-strong)]"
                    >
                      {market}
                    </span>
                  ))}
                </div>
              </div>

              {/* Commercial and Regulatory Context */}
              <div className="space-y-3 pt-2 text-sm font-body">
                <div>
                  <span className="font-mono text-xs text-[var(--ink-3)] uppercase block mb-1">
                    Regulatory & Market Architecture:
                  </span>
                  <p className="text-[var(--ink)] leading-relaxed">
                    {activeRegion.keyIntelligence}
                  </p>
                </div>
                <div>
                  <span className="font-mono text-xs text-[var(--ink-3)] uppercase block mb-1">
                    Commercial Dynamics:
                  </span>
                  <p className="text-[var(--ink-2)] leading-relaxed">
                    {activeRegion.commercialContext}
                  </p>
                </div>
              </div>

              <div className="pt-2">
                <button
                  onClick={() => navigate('/where-we-work')}
                  className="text-xs font-mono text-[var(--accent)] font-semibold hover:underline inline-flex items-center space-x-1 cursor-pointer"
                >
                  <span>View Full Regional Country Index & Cross-Border Corridors</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          MOVEMENT 05 — STRATEGIC EXPLORER (TEASER)
          Industry × Geography × Capability → Context
      ───────────────────────────────────────────────────────────── */}
      <section id="explorer" className="py-16 lg:py-24 bg-[var(--paper-2)] border-b border-[var(--line)]">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 space-y-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-[var(--line)]">
            <div className="space-y-2">
              <div className="font-mono text-xs text-[var(--accent)] font-semibold uppercase tracking-widest">
                04 · INTERACTIVE ADVISORY COMPOSER
              </div>
              <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-[var(--ink-strong)]">
                Compose your exact challenge.
              </h2>
            </div>
            <button
              onClick={() => navigate('/explore')}
              className="px-5 py-2.5 text-xs font-mono tracking-wider uppercase font-semibold text-white bg-[var(--accent)] hover:bg-[var(--accent-2)] rounded-[2px] transition-colors inline-flex items-center space-x-2 cursor-pointer self-start md:self-auto shadow-sm"
            >
              <Compass className="w-4 h-4" />
              <span>Launch Full Strategic Explorer</span>
            </button>
          </div>

          {/* 3-Slot Interactive Selector Bar */}
          <div className="p-6 bg-[var(--paper)] border border-[var(--line)] rounded-[2px] space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {/* Slot 1: Industry */}
              <div className="space-y-2">
                <label className="font-mono text-xs text-[var(--ink-3)] uppercase tracking-wider block">
                  01 · Select Industry
                </label>
                <select
                  value={composerIndustry}
                  onChange={(e) => setComposerIndustry(e.target.value)}
                  className="w-full p-3 font-mono text-xs bg-[var(--paper-2)] border border-[var(--line)] rounded-[2px] text-[var(--ink-strong)] focus:outline-none focus:border-[var(--accent)] cursor-pointer"
                >
                  <option value="Pharmaceuticals">Pharmaceuticals & Biologics</option>
                  <option value="Medical Devices">Medical Devices & Diagnostics</option>
                  <option value="Commercial Banking">Commercial Banking & FinTech</option>
                  <option value="Renewable Energy">Renewable Energy & Off-Grid</option>
                  <option value="FMCG">Consumer Goods & Retail</option>
                  <option value="Agribusiness">Agribusiness & Crop Science</option>
                </select>
              </div>

              {/* Slot 2: Geography */}
              <div className="space-y-2">
                <label className="font-mono text-xs text-[var(--ink-3)] uppercase tracking-wider block">
                  02 · Select Geography
                </label>
                <select
                  value={composerGeography}
                  onChange={(e) => setComposerGeography(e.target.value)}
                  className="w-full p-3 font-mono text-xs bg-[var(--paper-2)] border border-[var(--line)] rounded-[2px] text-[var(--ink-strong)] focus:outline-none focus:border-[var(--accent)] cursor-pointer"
                >
                  <option value="Kenya (East Africa)">Kenya & East African Community (EAC)</option>
                  <option value="Nigeria (West Africa)">Nigeria & ECOWAS Regional Bloc</option>
                  <option value="South Africa (Southern)">South Africa & SADC Corridor</option>
                  <option value="Egypt (North Africa)">Egypt & North Africa Gateway</option>
                  <option value="Europe / US Corridor">Europe & United States Cross-Border</option>
                </select>
              </div>

              {/* Slot 3: Capability */}
              <div className="space-y-2">
                <label className="font-mono text-xs text-[var(--ink-3)] uppercase tracking-wider block">
                  03 · Select Capability
                </label>
                <select
                  value={composerCapability}
                  onChange={(e) => setComposerCapability(e.target.value)}
                  className="w-full p-3 font-mono text-xs bg-[var(--paper-2)] border border-[var(--line)] rounded-[2px] text-[var(--ink-strong)] focus:outline-none focus:border-[var(--accent)] cursor-pointer"
                >
                  <option value="Market Research">Market Research & Field Intelligence</option>
                  <option value="Business Consulting">Business Consulting & Corporate Strategy</option>
                  <option value="AI Enterprise Solutions">AI Enterprise Solutions & Automation</option>
                  <option value="AI Training">AI Training & Digital Literacy</option>
                </select>
              </div>
            </div>

            {/* Composed Output Preview */}
            <div className="p-4 sm:p-6 bg-[var(--paper-2)] border border-[var(--accent)]/40 rounded-[2px] flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div className="space-y-1">
                <div className="font-mono text-[10px] uppercase tracking-wider text-[var(--accent)] font-semibold">
                  Synthesized Advisory Angle
                </div>
                <div className="font-display font-semibold text-lg text-[var(--ink-strong)]">
                  {composerIndustry} in {composerGeography} — {composerCapability}
                </div>
                <p className="font-body text-xs text-[var(--ink-2)] max-w-2xl leading-relaxed">
                  MindCraft deploys specialized in-country consultants and technical architects to structure regulatory compliance, primary market validation, and automated operational execution for this exact matrix.
                </p>
              </div>

              <button
                onClick={() => navigate(`/explore?industry=${encodeURIComponent(composerIndustry)}&geography=${encodeURIComponent(composerGeography)}&capability=${encodeURIComponent(composerCapability)}`)}
                className="px-4 py-2.5 bg-[var(--accent)] hover:bg-[var(--accent-2)] text-white text-xs font-mono uppercase tracking-wider font-semibold rounded-[2px] transition-colors whitespace-nowrap self-start md:self-center cursor-pointer"
              >
                Inspect Tailored Brief →
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          MOVEMENT 06 — HOW WE WORK
          6-Stage Structured Methodology Rail
      ───────────────────────────────────────────────────────────── */}
      <section id="how-we-work" className="py-16 lg:py-24 bg-[var(--paper)] border-b border-[var(--line)]">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 space-y-12">
          {/* Section Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-[var(--line)]">
            <div className="space-y-2">
              <div className="font-mono text-xs text-[var(--accent)] font-semibold uppercase tracking-widest">
                05 · METHODOLOGICAL DISCIPLINE
              </div>
              <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-[var(--ink-strong)]">
                A disciplined six-stage engagement lifecycle.
              </h2>
            </div>
            <button
              onClick={() => navigate('/how-we-work')}
              className="text-xs font-mono text-[var(--accent)] hover:underline inline-flex items-center space-x-1 cursor-pointer self-start md:self-auto"
            >
              <span>View Full Delivery Modalities & Differentiators</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* 6-Stage Horizontal Progress Rail */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-3">
            {ENGAGEMENT_STAGES.map((stage) => (
              <div
                key={stage.number}
                className="p-4 bg-[var(--paper)] border border-[var(--line)] rounded-[2px] space-y-3 hover:border-[var(--accent)] transition-colors group"
              >
                <div className="flex items-center justify-between">
                  <span className="font-mono text-xs font-bold text-[var(--accent)]">
                    {stage.number}
                  </span>
                  <div className="w-2 h-2 rounded-full bg-[var(--line-2)] group-hover:bg-[var(--accent)] transition-colors" />
                </div>
                <div className="font-display font-semibold text-base text-[var(--ink-strong)]">
                  {stage.name}
                </div>
                <p className="font-body text-xs text-[var(--ink-2)] leading-relaxed">
                  {stage.objective}
                </p>
                <div className="pt-2 border-t border-[var(--line)] font-mono text-[10px] text-[var(--ink-3)]">
                  <span className="text-[var(--accent)] font-semibold">Outcome:</span> {stage.outcome}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          MOVEMENT 07 — INTELLECTUAL PERSPECTIVES (INSIGHTS)
          Editorial Publications Preview
      ───────────────────────────────────────────────────────────── */}
      <section id="insights" className="py-16 lg:py-24 bg-[var(--paper-2)] border-b border-[var(--line)]">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 space-y-12">
          {/* Section Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-[var(--line)]">
            <div className="space-y-2">
              <div className="font-mono text-xs text-[var(--accent)] font-semibold uppercase tracking-widest">
                06 · EDITORIAL INTELLIGENCE
              </div>
              <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-[var(--ink-strong)]">
                Perspectives from the intersection of industry & AI.
              </h2>
            </div>
            <button
              onClick={() => navigate('/insights')}
              className="text-xs font-mono text-[var(--accent)] hover:underline inline-flex items-center space-x-1 cursor-pointer self-start md:self-auto"
            >
              <span>Visit Editorial & Research Desk</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* 3 Editorial Dossiers */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Dossier 1 */}
            <article
              onClick={() => navigate('/insights')}
              className="p-6 bg-[var(--paper)] border border-[var(--line)] rounded-[2px] space-y-4 hover:border-[var(--accent)] transition-all cursor-pointer group"
            >
              <div className="flex items-center justify-between text-[11px] font-mono text-[var(--ink-3)]">
                <span className="text-[var(--accent)] font-semibold uppercase">Life Sciences</span>
                <span>12 min read</span>
              </div>
              <h3 className="font-display font-bold text-lg text-[var(--ink-strong)] group-hover:text-[var(--accent)] transition-colors leading-snug">
                Harmonization and Sovereignty: Navigating African Pharmaceutical Regulation in 2026.
              </h3>
              <p className="font-body text-xs text-[var(--ink-2)] leading-relaxed">
                An empirical assessment of the African Medicines Agency rollout, regulatory divergence across Kenya, Nigeria, and South Africa, and commercial implications for global pharma manufacturers.
              </p>
              <div className="pt-2 border-t border-[var(--line)] font-mono text-[10px] text-[var(--ink-3)] flex items-center justify-between">
                <span>Nairobi Desk</span>
                <span className="group-hover:translate-x-1 transition-transform">Read Analysis →</span>
              </div>
            </article>

            {/* Dossier 2 */}
            <article
              onClick={() => navigate('/insights')}
              className="p-6 bg-[var(--paper)] border border-[var(--line)] rounded-[2px] space-y-4 hover:border-[var(--accent)] transition-all cursor-pointer group"
            >
              <div className="flex items-center justify-between text-[11px] font-mono text-[var(--ink-3)]">
                <span className="text-[var(--accent)] font-semibold uppercase">Applied AI</span>
                <span>9 min read</span>
              </div>
              <h3 className="font-display font-bold text-lg text-[var(--ink-strong)] group-hover:text-[var(--accent)] transition-colors leading-snug">
                The Sovereignty Imperative in African Enterprise AI Architectures.
              </h3>
              <p className="font-body text-xs text-[var(--ink-2)] leading-relaxed">
                Why forward-looking African financial and clinical institutions are transitioning from multi-tenant cloud APIs to private, localized model deployments.
              </p>
              <div className="pt-2 border-t border-[var(--line)] font-mono text-[10px] text-[var(--ink-3)] flex items-center justify-between">
                <span>Systems Architecture Lab</span>
                <span className="group-hover:translate-x-1 transition-transform">Read Analysis →</span>
              </div>
            </article>

            {/* Dossier 3 */}
            <article
              onClick={() => navigate('/insights')}
              className="p-6 bg-[var(--paper)] border border-[var(--line)] rounded-[2px] space-y-4 hover:border-[var(--accent)] transition-all cursor-pointer group"
            >
              <div className="flex items-center justify-between text-[11px] font-mono text-[var(--ink-3)]">
                <span className="text-[var(--accent)] font-semibold uppercase">Market Strategy</span>
                <span>14 min read</span>
              </div>
              <h3 className="font-display font-bold text-lg text-[var(--ink-strong)] group-hover:text-[var(--accent)] transition-colors leading-snug">
                Cold-Chain Resilience & Distribution Corridors across East Africa.
              </h3>
              <p className="font-body text-xs text-[var(--ink-2)] leading-relaxed">
                Quantitative tracking of pharmaceutical transport logistics and temperature integrity monitoring along the Northern and Central Transit Corridors.
              </p>
              <div className="pt-2 border-t border-[var(--line)] font-mono text-[10px] text-[var(--ink-3)] flex items-center justify-between">
                <span>Supply Chain Intelligence</span>
                <span className="group-hover:translate-x-1 transition-transform">Read Analysis →</span>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          MOVEMENT 08 — CONVERSATION (INK BAND)
          Strong dark terminal concluding the intelligence journey.
      ───────────────────────────────────────────────────────────── */}
      <section id="conversation" className="py-20 lg:py-28 bg-[var(--ink-strong)] text-[var(--paper)] relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-6">
              <div className="font-mono text-xs text-[var(--accent-2)] uppercase tracking-widest font-semibold">
                BEGIN A STRATEGIC CONVERSATION
              </div>
              <h2 className="font-display text-4xl sm:text-5xl font-bold tracking-tight text-white leading-tight">
                Turn uncertainty into operational advantage.
              </h2>
              <p className="font-body text-base sm:text-lg text-[var(--paper-2)]/80 leading-relaxed max-w-xl">
                Engage MindCraft for integrated corporate strategy, empirical African market fieldwork, custom enterprise AI engineering, or executive capability upskilling.
              </p>

              <div className="pt-4 flex flex-wrap gap-4">
                <button
                  onClick={() => navigate('/contact')}
                  className="px-8 py-4 text-xs font-mono tracking-wider uppercase font-semibold text-white bg-[var(--accent)] hover:bg-[var(--accent-2)] rounded-[2px] transition-colors shadow-sm inline-flex items-center space-x-2 cursor-pointer"
                >
                  <span>Start a Conversation</span>
                  <ArrowUpRight className="w-4 h-4" />
                </button>

                <button
                  onClick={() => navigate('/explore')}
                  className="px-8 py-4 text-xs font-mono tracking-wider uppercase font-semibold text-white bg-white/10 hover:bg-white/15 border border-white/20 rounded-[2px] transition-colors inline-flex items-center space-x-2 cursor-pointer"
                >
                  <Compass className="w-4 h-4 text-[var(--accent-2)]" />
                  <span>Compose Your Situation</span>
                </button>
              </div>
            </div>

            <div className="lg:col-span-5 p-8 bg-black/40 border border-white/10 rounded-[2px] space-y-6 font-mono text-xs text-[var(--paper-2)]/70">
              <div className="text-white font-semibold uppercase tracking-wider text-xs pb-3 border-b border-white/10">
                Nairobi Advisory Desk Credentials
              </div>
              <div className="space-y-2">
                <div>HQ: Nairobi, Kenya · Innovation & Research Core</div>
                <div>Primary Geographic Focus: All African Countries (45 Active)</div>
                <div>Global Engagement Corridors: Europe & United States</div>
                <div>Response SLA: Senior partner response within 24 business hours</div>
              </div>
              <div className="pt-2 text-[11px] text-[var(--accent-2)]">
                Direct: info@mindcraftconsultancy.com
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
