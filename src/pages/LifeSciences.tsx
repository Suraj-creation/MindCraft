import React, { useState } from 'react';
import { ArrowUpRight, ArrowRight, Stethoscope, ShieldCheck, CheckCircle2, FileText, Activity, Layers, Cpu, BookOpen, Building2 } from 'lucide-react';
import { useNavigation } from '../context/NavigationContext';
import { LIFE_SCIENCES_SECTORS } from '../data/landingData';

export const LifeSciences: React.FC = () => {
  const { navigate } = useNavigation();
  const [activeSectorId, setActiveSectorId] = useState<string>('pharma');

  const activeSector = LIFE_SCIENCES_SECTORS.find((s) => s.id === activeSectorId) || LIFE_SCIENCES_SECTORS[0];

  return (
    <div className="space-y-0">
      {/* Editorial Header with Lab Imagery */}
      <section className="bg-[var(--paper)] pt-12 pb-16 lg:pt-16 lg:pb-24 border-b border-[var(--line)]">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 space-y-8">
          <div className="flex items-center space-x-3 text-xs font-mono text-[var(--ink-3)] uppercase tracking-wider">
            <span className="text-[var(--accent)] font-semibold">CORE SPECIALIZATION</span>
            <span>·</span>
            <span>LIFE SCIENCES PRACTICE</span>
            <span>·</span>
            <span>CLINICAL & REGULATORY FLUENCY</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            <div className="lg:col-span-7 space-y-6">
              <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[var(--ink-strong)] leading-tight">
                Deep in Life Sciences. Built for Africa.
              </h1>
              <p className="font-body text-lg text-[var(--ink)] leading-relaxed">
                Life Sciences is the foundational bedrock of MindCraft. We combine medical, regulatory, and commercial fluency to guide multinational manufacturers, local distributors, and health systems through Africa's rapidly evolving regulatory and market landscape.
              </p>
              <div className="flex flex-wrap gap-4 pt-2">
                <button
                  onClick={() => navigate('/contact?industry=Life%20Sciences')}
                  className="px-6 py-3.5 text-xs font-mono tracking-wider uppercase font-semibold text-white bg-[var(--accent)] hover:bg-[var(--accent-2)] rounded-[2px] transition-colors shadow-sm inline-flex items-center space-x-2 cursor-pointer"
                >
                  <span>Engage Our Life Sciences Practice</span>
                  <ArrowUpRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="border border-[var(--line)] bg-[var(--paper-2)] p-2 rounded-[2px] shadow-sm">
                <div className="aspect-[4/3] overflow-hidden rounded-[2px]">
                  <img
                    src="/assets/images/african_clinical_lab_1788985514560.jpg"
                    alt="Clinical diagnostician in Nairobi laboratory verifying molecular assays"
                    className="w-full h-full object-cover"
                    loading="eager"
                  />
                </div>
                <div className="pt-2 px-1 flex items-center justify-between font-mono text-[11px] text-[var(--ink-3)]">
                  <span>Nairobi Clinical Diagnostic Center</span>
                  <span className="text-[var(--accent)] font-semibold">Regulatory & Field Authority</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The 6 Sub-Sectors Ecosystem */}
      <section className="py-16 lg:py-24 bg-[var(--paper-2)] border-b border-[var(--line)]">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 space-y-12">
          <div className="space-y-2 pb-6 border-b border-[var(--line)]">
            <div className="font-mono text-xs text-[var(--accent)] font-semibold uppercase tracking-widest">
              SUB-SECTOR DEPTH
            </div>
            <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-[var(--ink-strong)]">
              Comprehensive coverage across the healthcare continuum.
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Sub-Sector Navigation (4 cols) */}
            <div className="lg:col-span-4 space-y-2">
              {LIFE_SCIENCES_SECTORS.map((sector) => {
                const isSelected = activeSectorId === sector.id;
                return (
                  <button
                    key={sector.id}
                    onClick={() => setActiveSectorId(sector.id)}
                    className={`w-full p-4 text-left border rounded-[2px] transition-all cursor-pointer ${
                      isSelected
                        ? 'bg-[var(--paper)] border-[var(--accent)] shadow-sm ring-1 ring-[var(--accent)]'
                        : 'bg-[var(--paper)] border-[var(--line)] hover:border-[var(--ink-3)]'
                    }`}
                  >
                    <div className="font-display font-semibold text-base text-[var(--ink-strong)]">
                      {sector.name}
                    </div>
                    <div className="font-mono text-xs text-[var(--accent)] mt-0.5">
                      {sector.subTitle}
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Sub-Sector Detail Dossier (8 cols) */}
            <div className="lg:col-span-8 p-8 bg-[var(--paper)] border border-[var(--line)] rounded-[2px] space-y-6">
              <div className="pb-4 border-b border-[var(--line)]">
                <span className="font-mono text-xs text-[var(--accent)] font-semibold uppercase">
                  Sub-Sector Dossier
                </span>
                <h3 className="font-display text-3xl font-bold text-[var(--ink-strong)] mt-1">
                  {activeSector.name}
                </h3>
                <p className="font-mono text-xs text-[var(--ink-3)] mt-1">
                  {activeSector.subTitle}
                </p>
              </div>

              <p className="font-body text-base text-[var(--ink)] leading-relaxed">
                {activeSector.description}
              </p>

              <div className="space-y-3 pt-2">
                <div className="font-mono text-xs uppercase tracking-wider text-[var(--ink-3)] font-semibold">
                  Core Engagement Capabilities & Scope:
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {activeSector.coreDeliverables.map((item, idx) => (
                    <div key={idx} className="p-3 bg-[var(--paper-2)] border border-[var(--line)] rounded-[2px] font-mono text-xs text-[var(--ink)] flex items-start space-x-2">
                      <CheckCircle2 className="w-4 h-4 text-[var(--accent)] shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The 4 Capabilities Translated Specifically for Life Sciences */}
      <section className="py-16 lg:py-24 bg-[var(--paper)] border-b border-[var(--line)]">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 space-y-12">
          <div className="space-y-2 pb-6 border-b border-[var(--line)]">
            <div className="font-mono text-xs text-[var(--accent)] font-semibold uppercase tracking-widest">
              CAPABILITY TRANSLATION
            </div>
            <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-[var(--ink-strong)]">
              Our four disciplines applied directly to Life Sciences.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-6 bg-[var(--paper-2)] border border-[var(--line)] rounded-[2px] space-y-3">
              <div className="font-mono text-xs text-[var(--accent)] font-bold uppercase">01 · MARKET RESEARCH</div>
              <h3 className="font-display font-bold text-xl text-[var(--ink-strong)]">Life Sciences Field Intelligence</h3>
              <p className="font-body text-xs text-[var(--ink-2)] leading-relaxed">
                Physician prescribing audits, Key Opinion Leader (KOL) network mapping, hospital formulary penetration tracking, wholesale margin analysis, and patient disease journey mapping across Kenya, Nigeria, South Africa, and regional hubs.
              </p>
            </div>

            <div className="p-6 bg-[var(--paper-2)] border border-[var(--line)] rounded-[2px] space-y-3">
              <div className="font-mono text-xs text-[var(--accent)] font-bold uppercase">02 · BUSINESS CONSULTING</div>
              <h3 className="font-display font-bold text-xl text-[var(--ink-strong)]">Regulatory & Commercial Strategy</h3>
              <p className="font-body text-xs text-[var(--ink-2)] leading-relaxed">
                Cross-border regulatory harmonization dossiers, public tender pricing architectures, local manufacturing feasibility studies, distributor due diligence, and partnership structuring with national medical supply agencies.
              </p>
            </div>

            <div className="p-6 bg-[var(--paper-2)] border border-[var(--line)] rounded-[2px] space-y-3">
              <div className="font-mono text-xs text-[var(--accent)] font-bold uppercase">03 · AI TRAINING</div>
              <h3 className="font-display font-bold text-xl text-[var(--ink-strong)]">Clinical & Medical AI Upskilling</h3>
              <p className="font-body text-xs text-[var(--ink-2)] leading-relaxed">
                Executive masterclasses for medical directors and regulatory affairs heads on responsible clinical AI, regulatory documentation drafting, automated literature screening, and national health data compliance.
              </p>
            </div>

            <div className="p-6 bg-[var(--paper-2)] border border-[var(--line)] rounded-[2px] space-y-3">
              <div className="font-mono text-xs text-[var(--accent)] font-bold uppercase">04 · AI ENTERPRISE SOLUTIONS</div>
              <h3 className="font-display font-bold text-xl text-[var(--ink-strong)]">Clinical AI Production Systems</h3>
              <p className="font-body text-xs text-[var(--ink-2)] leading-relaxed">
                Automated pharmacovigilance adverse-event extraction (CIOMS/MedDRA), multi-agency regulatory variance engines, and predictive hospital bed/oxygen allocation algorithms deployed on sovereign private cloud infrastructure.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Regulatory Landscape / Harmonization Strip */}
      <section className="py-16 lg:py-24 bg-[var(--paper-2)] border-b border-[var(--line)]">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 space-y-8">
          <div className="space-y-2 pb-6 border-b border-[var(--line)]">
            <div className="font-mono text-xs text-[var(--accent)] font-semibold uppercase tracking-widest">
              REGULATORY AUTHORITIES
            </div>
            <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-[var(--ink-strong)]">
              Fluency across key African regulatory bodies.
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 font-mono text-xs">
            <div className="p-5 bg-[var(--paper)] border border-[var(--line)] rounded-[2px] space-y-2">
              <div className="text-[var(--accent)] font-bold text-sm">PPB · KENYA</div>
              <div className="text-[var(--ink-strong)] font-semibold">Pharmacy and Poisons Board</div>
              <div className="text-[var(--ink-3)] text-[11px] leading-relaxed">Fast-track submissions, pharmacovigilance portals, GMP inspections, and EAC joint assessments.</div>
            </div>

            <div className="p-5 bg-[var(--paper)] border border-[var(--line)] rounded-[2px] space-y-2">
              <div className="text-[var(--accent)] font-bold text-sm">NAFDAC · NIGERIA</div>
              <div className="text-[var(--ink-strong)] font-semibold">National Food & Drug Admin</div>
              <div className="text-[var(--ink-3)] text-[11px] leading-relaxed">Import permits, product registration renewals, track-and-trace serialization compliance.</div>
            </div>

            <div className="p-5 bg-[var(--paper)] border border-[var(--line)] rounded-[2px] space-y-2">
              <div className="text-[var(--accent)] font-bold text-sm">SAHPRA · SOUTH AFRICA</div>
              <div className="text-[var(--ink-strong)] font-semibold">Health Products Regulatory</div>
              <div className="text-[var(--ink-3)] text-[11px] leading-relaxed">eCTD format compliance, section 21 exemptions, medical device licensing, and clinical trials.</div>
            </div>

            <div className="p-5 bg-[var(--paper)] border border-[var(--line)] rounded-[2px] space-y-2">
              <div className="text-[var(--accent)] font-bold text-sm">AMA · PAN-AFRICA</div>
              <div className="text-[var(--ink-strong)] font-semibold">African Medicines Agency</div>
              <div className="text-[var(--ink-3)] text-[11px] leading-relaxed">Continental harmonization, pooled procurement protocols, and regional manufacturing standards.</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Band */}
      <section className="py-16 bg-[var(--ink-strong)] text-[var(--paper)]">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 flex flex-col md:flex-row md:items-center justify-between gap-8">
          <div className="space-y-2 max-w-xl">
            <h2 className="font-display text-3xl font-bold text-white">
              Speak directly with our Life Sciences practice leads.
            </h2>
            <p className="font-body text-sm text-[var(--paper-2)]/80">
              Engage clinicians, former regulatory officers, and Life Sciences strategy consultants.
            </p>
          </div>
          <button
            onClick={() => navigate('/contact?industry=Life%20Sciences')}
            className="px-6 py-3.5 text-xs font-mono tracking-wider uppercase font-semibold text-white bg-[var(--accent)] hover:bg-[var(--accent-2)] rounded-[2px] transition-colors whitespace-nowrap self-start md:self-auto cursor-pointer"
          >
            Start a Life Sciences Conversation
          </button>
        </div>
      </section>
    </div>
  );
};
