import React from 'react';
import { ArrowUpRight, ArrowRight, Cpu, ShieldCheck, Database, Server, Terminal, CheckCircle2 } from 'lucide-react';
import { useNavigation } from '../context/NavigationContext';

export const AIEnterpriseSolutions: React.FC = () => {
  const { navigate } = useNavigation();

  return (
    <div className="space-y-0">
      {/* Editorial Header */}
      <section className="bg-[var(--paper)] pt-12 pb-16 lg:pt-16 lg:pb-24 border-b border-[var(--line)]">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 space-y-8">
          <div className="flex items-center space-x-3 text-xs font-mono text-[var(--ink-3)] uppercase tracking-wider">
            <span className="text-[var(--accent)] font-semibold">PILLAR 04 · PRODUCTION SYSTEMS</span>
            <span>·</span>
            <span>SOVEREIGN ARCHITECTURES</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            <div className="lg:col-span-7 space-y-6">
              <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[var(--ink-strong)] leading-tight">
                AI Enterprise Solutions.
              </h1>
              <p className="font-body text-lg text-[var(--ink)] leading-relaxed">
                We design and deploy custom, production-grade AI systems built for enterprise security, data sovereignty, and high-reliability operational execution across Africa.
              </p>
              <div className="flex flex-wrap gap-4 pt-2">
                <button
                  onClick={() => navigate('/contact?topic=ai-enterprise-solutions')}
                  className="px-6 py-3.5 text-xs font-mono tracking-wider uppercase font-semibold text-white bg-[var(--accent)] hover:bg-[var(--accent-2)] rounded-[2px] transition-colors shadow-sm inline-flex items-center space-x-2 cursor-pointer"
                >
                  <span>Scope an Enterprise AI Architecture</span>
                  <ArrowUpRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            <div className="lg:col-span-5 p-6 bg-[var(--paper-2)] border border-[var(--line)] rounded-[2px] space-y-4 font-mono text-xs">
              <div className="text-[var(--accent)] font-semibold uppercase tracking-wider">
                Engineering Guarantees
              </div>
              <div className="space-y-2.5 text-[var(--ink-2)] border-t border-[var(--line)] pt-3">
                <div className="flex justify-between">
                  <span>Deployment Model</span>
                  <span className="text-[var(--ink-strong)] font-semibold">Private Cloud or On-Premises</span>
                </div>
                <div className="flex justify-between">
                  <span>Data Sovereignty</span>
                  <span className="text-[var(--ink-strong)] font-semibold">Zero External Model Training</span>
                </div>
                <div className="flex justify-between">
                  <span>Architecture</span>
                  <span className="text-[var(--ink-strong)] font-semibold">RAG, Fine-Tuned LLMs, RPA</span>
                </div>
                <div className="flex justify-between">
                  <span>Audit Trail</span>
                  <span className="text-[var(--ink-strong)] font-semibold">Full Deterministic Traceability</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Production Architecture Diagram */}
      <section className="py-16 lg:py-24 bg-[var(--paper-2)] border-b border-[var(--line)]">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 space-y-12">
          <div className="space-y-2 pb-6 border-b border-[var(--line)]">
            <div className="font-mono text-xs text-[var(--accent)] font-semibold uppercase tracking-widest">
              SYSTEM TOPOLOGY
            </div>
            <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-[var(--ink-strong)]">
              Secure, sovereign enterprise pipeline.
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 font-mono text-xs">
            <div className="p-6 bg-[var(--paper)] border border-[var(--line)] rounded-[2px] space-y-3">
              <div className="text-[var(--accent)] font-bold text-sm">STAGE 01</div>
              <div className="font-display font-bold text-base text-[var(--ink-strong)]">Data Ingestion & Sanitization</div>
              <p className="font-body text-xs text-[var(--ink-2)] leading-relaxed">
                Automated document extraction, PII anonymization, and multimodal ingestion from PDFs, electronic medical records, ERPs, and scanned clinical dossiers.
              </p>
            </div>

            <div className="p-6 bg-[var(--paper)] border border-[var(--line)] rounded-[2px] space-y-3">
              <div className="text-[var(--accent)] font-bold text-sm">STAGE 02</div>
              <div className="font-display font-bold text-base text-[var(--ink-strong)]">Private Vector & Semantic Memory</div>
              <p className="font-body text-xs text-[var(--ink-2)] leading-relaxed">
                Encrypted enterprise vector store and private contextual embeddings ensuring proprietary data never crosses international borders or leaks into public models.
              </p>
            </div>

            <div className="p-6 bg-[var(--paper)] border border-[var(--line)] rounded-[2px] space-y-3">
              <div className="text-[var(--accent)] font-bold text-sm">STAGE 03</div>
              <div className="font-display font-bold text-base text-[var(--ink-strong)]">Domain-Tuned Reasoner Models</div>
              <p className="font-body text-xs text-[var(--ink-2)] leading-relaxed">
                State-of-the-art open weights or dedicated private cloud models fine-tuned on African pharmaceutical regulations, tax codes, and regional clinical nomenclatures.
              </p>
            </div>

            <div className="p-6 bg-[var(--paper)] border border-[var(--line)] rounded-[2px] space-y-3">
              <div className="text-[var(--accent)] font-bold text-sm">STAGE 04</div>
              <div className="font-display font-bold text-base text-[var(--ink-strong)]">Automated API Execution & Audit</div>
              <p className="font-body text-xs text-[var(--ink-2)] leading-relaxed">
                Direct integration into core ERP/HIS workflows with automated human-in-the-loop review queues, hallucination mitigations, and strict regulatory audit logs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Specialized Life Sciences AI Capabilities */}
      <section className="py-16 lg:py-24 bg-[var(--paper)] border-b border-[var(--line)]">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 space-y-12">
          <div className="space-y-2 pb-6 border-b border-[var(--line)]">
            <div className="font-mono text-xs text-[var(--accent)] font-semibold uppercase tracking-widest">
              DOMAIN DEPTH
            </div>
            <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-[var(--ink-strong)]">
              Specialized Life Sciences & clinical AI solutions.
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
