import React from 'react';
import { ArrowUpRight, ArrowRight, Cpu, ShieldCheck, Database, Server, Terminal, CheckCircle2, Lock, Zap } from 'lucide-react';
import { useNavigation } from '../context/NavigationContext';
import { AITechnologyArchitecture } from '../components/AITechnologyArchitecture';

export const AIEnterpriseSolutions: React.FC = () => {
  const { navigate } = useNavigation();

  return (
    <div className="space-y-0">
      {/* ─────────────────────────────────────────────────────────────
          EDITORIAL HEADER WITH ARCHITECTURAL VISUAL ANCHOR
      ───────────────────────────────────────────────────────────── */}
      <section className="bg-[var(--paper)] pt-12 pb-16 lg:pt-16 lg:pb-24 border-b border-[var(--line)]">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 space-y-8">
          <div className="flex items-center space-x-3 text-xs font-mono text-[var(--ink-3)] uppercase tracking-wider">
            <span className="text-[var(--accent)] font-semibold">PILLAR 04 · PRODUCTION SYSTEMS</span>
            <span>·</span>
            <span>SOVEREIGN ARCHITECTURES</span>
            <span>·</span>
            <span>ENTERPRISE ENGINEERING</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left: Thesis (7 cols) */}
            <div className="lg:col-span-7 space-y-6">
              <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[var(--ink-strong)] leading-tight">
                AI Enterprise Solutions.
              </h1>
              <p className="font-body text-lg text-[var(--ink)] leading-relaxed">
                We design and deploy custom, production-grade AI systems built for enterprise security, strict data sovereignty, deterministic auditability, and zero cross-border data leakage across African institutions.
              </p>

              {/* Engineering Guarantees Strip */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 font-mono text-xs">
                <div className="p-3 bg-[var(--paper-2)] border border-[var(--line)] rounded-[2px]">
                  <span className="text-[var(--accent)] font-bold block text-sm">Sovereign VPC</span>
                  <span className="text-[var(--ink-2)] text-[11px]">Local on-prem or private cloud</span>
                </div>
                <div className="p-3 bg-[var(--paper-2)] border border-[var(--line)] rounded-[2px]">
                  <span className="text-[var(--accent)] font-bold block text-sm">Deterministic</span>
                  <span className="text-[var(--ink-2)] text-[11px]">Strict schema validation & tests</span>
                </div>
                <div className="p-3 bg-[var(--paper-2)] border border-[var(--line)] rounded-[2px]">
                  <span className="text-[var(--accent)] font-bold block text-sm">Zero Leakage</span>
                  <span className="text-[var(--ink-2)] text-[11px]">No public multi-tenant model training</span>
                </div>
              </div>

              <div className="flex flex-wrap gap-4 pt-2">
                <button
                  onClick={() => navigate('/contact?topic=ai-enterprise-solutions')}
                  className="px-6 py-3.5 text-xs font-mono tracking-wider uppercase font-semibold text-white bg-[var(--accent)] hover:bg-[var(--accent-2)] rounded-[2px] transition-colors shadow-sm inline-flex items-center space-x-2 cursor-pointer"
                >
                  <span>Scope an Enterprise AI Architecture</span>
                  <ArrowUpRight className="w-4 h-4" />
                </button>
                <button
                  onClick={() => navigate('/explore?capability=AI%20Enterprise%20Solutions')}
                  className="px-6 py-3.5 text-xs font-mono tracking-wider uppercase font-semibold text-[var(--ink-strong)] bg-transparent hover:bg-[var(--paper-2)] border border-[var(--line)] rounded-[2px] transition-colors inline-flex items-center space-x-2 cursor-pointer"
                >
                  <span>Compose Technology Brief</span>
                  <ArrowRight className="w-4 h-4 text-[var(--accent)]" />
                </button>
              </div>
            </div>

            {/* Right: Architecture Command Center Visual Anchor (5 cols) */}
            <div className="lg:col-span-5 space-y-3">
              <div className="border border-[var(--line)] bg-[var(--paper-2)] p-2 rounded-[2px] shadow-sm">
                <div className="aspect-[4/3] overflow-hidden rounded-[2px] relative">
                  <img
                    src="/assets/images/african_enterprise_architecture_1788986661159.jpg"
                    alt="African systems engineers and data architects monitoring enterprise AI pipeline infrastructure"
                    className="w-full h-full object-cover"
                    loading="eager"
                  />
                  <div className="absolute top-2 left-2 bg-black/60 backdrop-blur-xs text-white font-mono text-[9px] uppercase tracking-wider px-2 py-0.5">
                    Nairobi Systems Engineering Hub
                  </div>
                </div>
                <div className="pt-2 px-1 flex items-center justify-between font-mono text-[11px] text-[var(--ink-3)]">
                  <span>Sovereign VPC Infrastructure</span>
                  <span className="text-[var(--accent)] font-semibold">100% Data Enclave</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          INTERACTIVE TECHNOLOGY ARCHITECTURE STACK
      ───────────────────────────────────────────────────────────── */}
      <section className="py-16 lg:py-24 bg-[var(--paper-2)] border-b border-[var(--line)]">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 space-y-8">
          <div className="space-y-2 pb-6 border-b border-[var(--line)]">
            <div className="font-mono text-xs text-[var(--accent)] font-semibold uppercase tracking-widest">
              SYSTEM TOPOLOGY & PIPELINES
            </div>
            <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-[var(--ink-strong)]">
              Four-layer production architecture for high-stakes enterprise workflows.
            </h2>
          </div>

          <AITechnologyArchitecture />
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          SPECIALIZED LIFE SCIENCES & ENTERPRISE PRODUCTION SOLUTIONS
      ───────────────────────────────────────────────────────────── */}
      <section className="py-16 lg:py-24 bg-[var(--paper)] border-b border-[var(--line)]">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 space-y-12">
          <div className="space-y-2 pb-6 border-b border-[var(--line)]">
            <div className="font-mono text-xs text-[var(--accent)] font-semibold uppercase tracking-widest">
              DOMAIN DEPTH
            </div>
            <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-[var(--ink-strong)]">
              Specialized clinical & enterprise AI deployments.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 bg-[var(--paper-2)] border border-[var(--line)] rounded-[2px] space-y-3">
              <div className="font-mono text-xs text-[var(--accent)] font-bold uppercase">AI Solution A</div>
              <h3 className="font-display font-bold text-lg text-[var(--ink-strong)]">
                Automated Pharmacovigilance (PV) Extraction
              </h3>
              <p className="font-body text-xs text-[var(--ink-2)] leading-relaxed">
                Multilingual NLP systems that parse clinician adverse-event reports, patient social narratives, and hospital discharge notes to automatically generate standardized CIOMS-I and MedDRA-coded safety notifications.
              </p>
            </div>

            <div className="p-6 bg-[var(--paper-2)] border border-[var(--line)] rounded-[2px] space-y-3">
              <div className="font-mono text-xs text-[var(--accent)] font-bold uppercase">AI Solution B</div>
              <h3 className="font-display font-bold text-lg text-[var(--ink-strong)]">
                Cross-Border Regulatory Intelligence Engine
              </h3>
              <p className="font-body text-xs text-[var(--ink-2)] leading-relaxed">
                Semantic comparison engine tracking changes across the Pharmacy and Poisons Board (Kenya), NAFDAC (Nigeria), SAHPRA (South Africa), and EAC regional guidelines to highlight submission variances automatically.
              </p>
            </div>

            <div className="p-6 bg-[var(--paper-2)] border border-[var(--line)] rounded-[2px] space-y-3">
              <div className="font-mono text-xs text-[var(--accent)] font-bold uppercase">AI Solution C</div>
              <h3 className="font-display font-bold text-lg text-[var(--ink-strong)]">
                Hospital Throughput & Triage Optimization
              </h3>
              <p className="font-body text-xs text-[var(--ink-2)] leading-relaxed">
                Predictive bed allocation and surgical theater scheduling models that reduce patient wait times, optimize oxygen and consumable burn rates, and improve critical care outcomes in high-volume tertiary hospitals.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Cross-Pillar Handoff */}
      <section className="py-16 bg-[var(--paper-2)] border-b border-[var(--line)]">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="space-y-1">
            <span className="font-mono text-xs text-[var(--accent)] font-semibold uppercase">Institutional Adoption</span>
            <h3 className="font-display text-xl font-bold text-[var(--ink-strong)]">Ensure your team can operate and audit these systems independently.</h3>
          </div>
          <button
            onClick={() => navigate('/what-we-do/ai-training')}
            className="px-5 py-2.5 bg-[var(--accent)] hover:bg-[var(--accent-2)] text-white text-xs font-mono uppercase tracking-wider font-semibold rounded-[2px] transition-colors cursor-pointer self-start md:self-auto"
          >
            See AI Training Programs →
          </button>
        </div>
      </section>
    </div>
  );
};
