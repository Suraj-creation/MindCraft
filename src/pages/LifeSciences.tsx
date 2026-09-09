import React, { useState } from 'react';
import { ArrowUpRight, ArrowRight, Stethoscope, ShieldCheck, CheckCircle2, FileText, Activity, Layers, Cpu, BookOpen, Building2, Thermometer, MapPin, Truck } from 'lucide-react';
import { useNavigation } from '../context/NavigationContext';
import { LifeSciencesEcosystemDiagram } from '../components/LifeSciencesEcosystemDiagram';

export const LifeSciences: React.FC = () => {
  const { navigate } = useNavigation();

  return (
    <div className="space-y-0">
      {/* ─────────────────────────────────────────────────────────────
          HERO — CLINICAL & COMMERCIAL DUAL-FLUENCY THESIS
      ───────────────────────────────────────────────────────────── */}
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
                Life Sciences is the foundational bedrock of MindCraft. We unite molecular biology, clinical medicine, African regulatory law, and pharmaceutical supply chain dynamics — transforming healthcare innovation into sustainable, high-impact commercial reality across the continent.
              </p>
              
              {/* Dual-Fluency Thesis Card */}
              <div className="p-5 bg-[var(--paper-2)] border border-[var(--line)] rounded-[2px] space-y-2">
                <div className="font-mono text-xs uppercase text-[var(--accent)] font-semibold tracking-wider">
                  The Clinical + Commercial Dual-Fluency Thesis
                </div>
                <p className="font-body text-xs text-[var(--ink-2)] leading-relaxed">
                  Most healthcare advisories in Africa either operate purely as policy NGOs or as detached financial consultants. MindCraft bridges both worlds: our teams speak fluent pathophysiology, pharmacokinetics, and clinical trial endpoints while engineering multi-tier distributor margins, cold-chain SLAs, and public tender pricing models.
                </p>
              </div>

              <div className="flex flex-wrap gap-4 pt-2">
                <button
                  onClick={() => navigate('/contact?industry=Life%20Sciences')}
                  className="px-6 py-3.5 text-xs font-mono tracking-wider uppercase font-semibold text-white bg-[var(--accent)] hover:bg-[var(--accent-2)] rounded-[2px] transition-colors shadow-sm inline-flex items-center space-x-2 cursor-pointer"
                >
                  <span>Engage Our Life Sciences Practice</span>
                  <ArrowUpRight className="w-4 h-4" />
                </button>
                <button
                  onClick={() => navigate('/explore?industry=Pharmaceuticals')}
                  className="px-6 py-3.5 text-xs font-mono tracking-wider uppercase font-semibold text-[var(--ink-strong)] bg-transparent hover:bg-[var(--paper-2)] border border-[var(--line)] rounded-[2px] transition-colors inline-flex items-center space-x-2 cursor-pointer"
                >
                  <span>Compose Life Sciences Scenario</span>
                  <ArrowRight className="w-4 h-4 text-[var(--accent)]" />
                </button>
              </div>
            </div>

            {/* Right: Dual Clinical Photography Anchors */}
            <div className="lg:col-span-5 space-y-4">
              <div className="border border-[var(--line)] bg-[var(--paper-2)] p-2 rounded-[2px] shadow-sm">
                <div className="aspect-[16/10] overflow-hidden rounded-[2px] relative">
                  <img
                    src="/assets/images/african_medical_diagnostics_1788986708761.jpg"
                    alt="African clinical researchers and physicians evaluating diagnostic imaging data"
                    className="w-full h-full object-cover"
                    loading="eager"
                  />
                  <div className="absolute bottom-2 left-2 bg-black/60 backdrop-blur-xs text-white font-mono text-[9px] uppercase tracking-wider px-2 py-0.5">
                    Advanced Clinical Diagnostics Lab
                  </div>
                </div>
                <div className="pt-2 px-1 flex items-center justify-between font-mono text-[11px] text-[var(--ink-3)]">
                  <span>Molecular & Clinical Validation</span>
                  <span className="text-[var(--accent)] font-semibold">PPB · NAFDAC · SAHPRA</span>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3 font-mono text-[11px]">
                <div className="p-3 bg-[var(--paper-2)] border border-[var(--line)] rounded-[2px]">
                  <span className="text-[var(--accent)] font-bold block text-base">45+</span>
                  <span className="text-[var(--ink-3)]">African regulatory agencies tracked</span>
                </div>
                <div className="p-3 bg-[var(--paper-2)] border border-[var(--line)] rounded-[2px]">
                  <span className="text-[var(--accent)] font-bold block text-base">100%</span>
                  <span className="text-[var(--ink-3)]">Cold-chain validation compliance</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          INTERACTIVE LIFE SCIENCES ECOSYSTEM DIAGRAM
      ───────────────────────────────────────────────────────────── */}
      <section className="py-16 lg:py-24 bg-[var(--paper-2)] border-b border-[var(--line)]">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 space-y-8">
          <div className="space-y-2 pb-6 border-b border-[var(--line)]">
            <div className="font-mono text-xs text-[var(--accent)] font-semibold uppercase tracking-widest">
              SYSTEMS ARCHITECTURE
            </div>
            <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-[var(--ink-strong)]">
              The 6 Life Sciences domains in technical depth.
            </h2>
          </div>

          <LifeSciencesEcosystemDiagram />
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          COLD-CHAIN & CLINICAL TRIAL SITE READINESS CORRIDORS
      ───────────────────────────────────────────────────────────── */}
      <section className="py-16 lg:py-24 bg-[var(--paper)] border-b border-[var(--line)]">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 space-y-12">
          <div className="space-y-2 pb-6 border-b border-[var(--line)]">
            <div className="font-mono text-xs text-[var(--accent)] font-semibold uppercase tracking-widest">
              SPECIALIZED OPERATIONAL CORRIDORS
            </div>
            <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-[var(--ink-strong)]">
              Physical & regulatory infrastructure across Africa.
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Left: Cold-Chain Integrity Corridor */}
            <div className="p-6 sm:p-8 bg-[var(--paper-2)] border border-[var(--line)] rounded-[2px] space-y-5">
              <div className="flex items-center space-x-3 text-xs font-mono text-[var(--accent)] font-semibold uppercase tracking-wider">
                <Thermometer className="w-4 h-4" />
                <span>Cold-Chain Integrity & Last-Mile Assurance</span>
              </div>
              <h3 className="font-display text-2xl font-bold text-[var(--ink-strong)]">
                The East & Central African Pharma Cold Highway
              </h3>
              <p className="font-body text-xs sm:text-sm text-[var(--ink)] leading-relaxed">
                Biologics, vaccines, and recombinant therapies require unbroken 2°C to 8°C or -20°C temperature chains. MindCraft audits transit corridors along the Northern Corridor (Mombasa → Nairobi → Kampala → Kigali) and Central Corridor (Dar es Salaam → Dodoma → Bujumbura).
              </p>

              <div className="space-y-2.5 font-mono text-xs">
                <div className="p-3 bg-[var(--paper)] border border-[var(--line)] rounded-[2px] flex items-start space-x-2">
                  <Truck className="w-4 h-4 text-[var(--accent)] shrink-0 mt-0.5" />
                  <div>
                    <span className="text-[var(--ink-strong)] font-semibold block">Active Telemetry & IoT Auditing</span>
                    <span className="text-[var(--ink-2)] text-[11px]">Real-time GSM logger data verification catching thermal excursions at border customs yards.</span>
                  </div>
                </div>

                <div className="p-3 bg-[var(--paper)] border border-[var(--line)] rounded-[2px] flex items-start space-x-2">
                  <ShieldCheck className="w-4 h-4 text-[var(--accent)] shrink-0 mt-0.5" />
                  <div>
                    <span className="text-[var(--ink-strong)] font-semibold block">Solar Direct Drive (SDD) Depot Validation</span>
                    <span className="text-[var(--ink-2)] text-[11px]">WHO PQS-certified solar refrigeration mapping for decentralized vaccine hub distribution.</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: In-Country Trial Site Readiness */}
            <div className="p-6 sm:p-8 bg-[var(--paper-2)] border border-[var(--line)] rounded-[2px] space-y-5">
              <div className="flex items-center space-x-3 text-xs font-mono text-[var(--accent)] font-semibold uppercase tracking-wider">
                <Activity className="w-4 h-4" />
                <span>Clinical Trial Site Readiness Map</span>
              </div>
              <h3 className="font-display text-2xl font-bold text-[var(--ink-strong)]">
                Ethical & GCP-Accredited Investigator Sites
              </h3>
              <p className="font-body text-xs sm:text-sm text-[var(--ink)] leading-relaxed">
                Africa represents less than 3% of global clinical trials despite hosting 17% of the global population and immense genetic diversity. MindCraft accelerates international sponsor feasibility studies by evaluating verified trial sites across Kenya, Uganda, Nigeria, and South Africa.
              </p>

              <div className="space-y-2.5 font-mono text-xs">
                <div className="p-3 bg-[var(--paper)] border border-[var(--line)] rounded-[2px] flex items-start space-x-2">
                  <MapPin className="w-4 h-4 text-[var(--accent)] shrink-0 mt-0.5" />
                  <div>
                    <span className="text-[var(--ink-strong)] font-semibold block">KEMRI / Aga Khan / Makerere Academic Hubs</span>
                    <span className="text-[var(--ink-2)] text-[11px]">Audited for Phase II/III protocol capacity, bio-banking sovereignty, and IRB review turnaround times.</span>
                  </div>
                </div>

                <div className="p-3 bg-[var(--paper)] border border-[var(--line)] rounded-[2px] flex items-start space-x-2">
                  <CheckCircle2 className="w-4 h-4 text-[var(--accent)] shrink-0 mt-0.5" />
                  <div>
                    <span className="text-[var(--ink-strong)] font-semibold block">Informed Consent & Community Advisory Boards (CAB)</span>
                    <span className="text-[var(--ink-2)] text-[11px]">Culturally resonant vernacular translation protocols and community engagement frameworks.</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          REGULATORY HARMONIZATION STRIP (PPB, NAFDAC, SAHPRA, TMDA, NDA, AMA)
      ───────────────────────────────────────────────────────────── */}
      <section className="py-16 lg:py-24 bg-[var(--paper-2)] border-b border-[var(--line)]">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 space-y-8">
          <div className="space-y-2 pb-6 border-b border-[var(--line)]">
            <div className="font-mono text-xs text-[var(--accent)] font-semibold uppercase tracking-widest">
              REGULATORY BODIES & CONTINENTAL HARMONIZATION
            </div>
            <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-[var(--ink-strong)]">
              Direct fluency across African drug and health technology authorities.
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 font-mono text-xs">
            <div className="p-5 bg-[var(--paper)] border border-[var(--line)] rounded-[2px] space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-[var(--accent)] font-bold text-sm">PPB · KENYA</span>
                <span className="text-[10px] text-[var(--ink-3)]">EAC Focal Point</span>
              </div>
              <div className="text-[var(--ink-strong)] font-semibold">Pharmacy and Poisons Board</div>
              <div className="text-[var(--ink-2)] text-[11px] leading-relaxed">
                Fast-track dossier reviews, pharmacovigilance portal submissions, GMP inspections, and EAC joint assessments.
              </div>
            </div>

            <div className="p-5 bg-[var(--paper)] border border-[var(--line)] rounded-[2px] space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-[var(--accent)] font-bold text-sm">NAFDAC · NIGERIA</span>
                <span className="text-[10px] text-[var(--ink-3)]">ECOWAS Anchor</span>
              </div>
              <div className="text-[var(--ink-strong)] font-semibold">National Agency for Food & Drug Administration</div>
              <div className="text-[var(--ink-2)] text-[11px] leading-relaxed">
                Import permits, 5-year product registration renewals, track-and-trace serialization compliance, and MAS mobile authentication.
              </div>
            </div>

            <div className="p-5 bg-[var(--paper)] border border-[var(--line)] rounded-[2px] space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-[var(--accent)] font-bold text-sm">SAHPRA · SOUTH AFRICA</span>
                <span className="text-[10px] text-[var(--ink-3)]">SADC Leader</span>
              </div>
              <div className="text-[var(--ink-strong)] font-semibold">South African Health Products Regulatory Authority</div>
              <div className="text-[var(--ink-2)] text-[11px] leading-relaxed">
                Full eCTD format compliance, section 21 exemptions, medical device licensing, and clinical trials registries.
              </div>
            </div>

            <div className="p-5 bg-[var(--paper)] border border-[var(--line)] rounded-[2px] space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-[var(--accent)] font-bold text-sm">TMDA · TANZANIA</span>
                <span className="text-[10px] text-[var(--ink-3)]">EAC Joint Review</span>
              </div>
              <div className="text-[var(--ink-strong)] font-semibold">Tanzania Medicines & Medical Devices Authority</div>
              <div className="text-[var(--ink-2)] text-[11px] leading-relaxed">
                WHO maturity level 3 certified regulatory oversight, joint EAC mutual recognition protocols, and port-of-entry sampling.
              </div>
            </div>

            <div className="p-5 bg-[var(--paper)] border border-[var(--line)] rounded-[2px] space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-[var(--accent)] font-bold text-sm">NDA · UGANDA</span>
                <span className="text-[10px] text-[var(--ink-3)]">Great Lakes Hub</span>
              </div>
              <div className="text-[var(--ink-strong)] font-semibold">National Drug Authority</div>
              <div className="text-[var(--ink-2)] text-[11px] leading-relaxed">
                Regional post-market surveillance, institutional import licenses, essential medicines list updates, and cold-store audits.
              </div>
            </div>

            <div className="p-5 bg-[var(--paper)] border border-[var(--accent)]/40 rounded-[2px] space-y-2 bg-[var(--accent-soft)]/20">
              <div className="flex items-center justify-between">
                <span className="text-[var(--accent)] font-bold text-sm">AMA · CONTINENTAL</span>
                <span className="text-[10px] font-bold text-[var(--accent)]">AU Treaty</span>
              </div>
              <div className="text-[var(--ink-strong)] font-semibold">African Medicines Agency</div>
              <div className="text-[var(--ink-2)] text-[11px] leading-relaxed">
                Continental treaty harmonization, centralized review for complex biologics, and AfCFTA pharma trade enablement.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          CTA BAND
      ───────────────────────────────────────────────────────────── */}
      <section className="py-16 bg-[var(--ink-strong)] text-[var(--paper)]">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 flex flex-col md:flex-row md:items-center justify-between gap-8">
          <div className="space-y-2 max-w-xl">
            <h2 className="font-display text-3xl font-bold text-white">
              Speak directly with our Life Sciences practice leads.
            </h2>
            <p className="font-body text-sm text-[var(--paper-2)]/80">
              Engage clinicians, former regulatory officers, and Life Sciences strategy consultants based in Nairobi.
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
