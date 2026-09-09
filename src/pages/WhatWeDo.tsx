import React from 'react';
import { ArrowUpRight, ArrowRight, Layers, Sparkles, Building2, BookOpen, Cpu, Activity, ShieldCheck, RefreshCw } from 'lucide-react';
import { useNavigation } from '../context/NavigationContext';
import { EngineVisualSpine } from '../components/EngineVisualSpine';

export const WhatWeDo: React.FC = () => {
  const { navigate } = useNavigation();

  return (
    <div className="space-y-0">
      {/* ─────────────────────────────────────────────────────────────
          EDITORIAL HEADER
      ───────────────────────────────────────────────────────────── */}
      <section className="bg-[var(--paper)] pt-12 pb-16 lg:pt-16 lg:pb-24 border-b border-[var(--line)]">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 space-y-8">
          <div className="flex items-center space-x-3 text-xs font-mono text-[var(--ink-3)] uppercase tracking-wider">
            <span className="text-[var(--accent)] font-semibold">THE INTEGRATED CAPABILITY ENGINE</span>
            <span>·</span>
            <span>FOUR DISCIPLINES</span>
            <span>·</span>
            <span>ONE SYSTEM</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            <div className="lg:col-span-8 space-y-6">
              <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[var(--ink-strong)] leading-tight">
                An integrated intelligence engine.
              </h1>
              <p className="font-body text-lg sm:text-xl text-[var(--ink)] leading-relaxed max-w-3xl">
                Most organizations require research to inform strategy, strategy to guide technology investments, and training to ensure sustainable operational adoption. MindCraft unifies these four disciplines into a continuous, accountable value chain.
              </p>
            </div>

            <div className="lg:col-span-4 p-6 bg-[var(--paper-2)] border border-[var(--line)] rounded-[2px] space-y-4 font-mono text-xs">
              <div className="text-[var(--accent)] font-semibold uppercase tracking-wider flex items-center space-x-2">
                <RefreshCw className="w-3.5 h-3.5" />
                <span>The Closed-Loop Feedback Flow</span>
              </div>
              <div className="space-y-2 text-[var(--ink-2)] border-t border-[var(--line)] pt-3 leading-relaxed">
                <div><span className="text-[var(--accent)] font-bold">01 Research</span> fuels Strategy with ground-truth</div>
                <div><span className="text-[var(--accent)] font-bold">02 Strategy</span> directs Solution architecture & ROI</div>
                <div><span className="text-[var(--accent)] font-bold">03 Solutions</span> scale through Training & adoption</div>
                <div><span className="text-[var(--accent)] font-bold">04 Training</span> surfaces new Research & edge cases</div>
                <div className="text-[var(--accent)] font-semibold pt-1">→ Sovereign African Capability</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          THE 6-STAGE DELIVERY METHODOLOGY SPINE
      ───────────────────────────────────────────────────────────── */}
      <section className="py-16 lg:py-24 bg-[var(--paper-2)] border-b border-[var(--line)]">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 space-y-8">
          <div className="space-y-2 pb-6 border-b border-[var(--line)]">
            <div className="font-mono text-xs text-[var(--accent)] font-semibold uppercase tracking-widest">
              END-TO-END METHODOLOGY
            </div>
            <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-[var(--ink-strong)]">
              The 6-stage lifecycle from diagnostic to sovereign transfer.
            </h2>
          </div>

          <EngineVisualSpine />
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          THE FOUR CAPABILITIES DETAILED CARDS GRID
      ───────────────────────────────────────────────────────────── */}
      <section className="py-16 lg:py-24 bg-[var(--paper)] border-b border-[var(--line)]">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 space-y-12">
          <div className="space-y-2 pb-6 border-b border-[var(--line)]">
            <div className="font-mono text-xs text-[var(--accent)] font-semibold uppercase tracking-widest">
              THE FOUR PILLARS
            </div>
            <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-[var(--ink-strong)]">
              Deep-dive into each specialized discipline.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Pillar 1: Business Consulting */}
            <div className="p-8 bg-[var(--paper-2)] border border-[var(--line)] rounded-[2px] space-y-6 hover:border-[var(--accent)] transition-colors flex flex-col justify-between group">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-xs font-bold text-[var(--accent)] uppercase tracking-wider">
                    PILLAR 01 · STRATEGY
                  </span>
                  <Building2 className="w-5 h-5 text-[var(--accent)]" />
                </div>
                <h3 className="font-display text-2xl font-bold text-[var(--ink-strong)] group-hover:text-[var(--accent)] transition-colors">
                  Business Consulting
                </h3>
                <p className="font-body text-sm text-[var(--ink-2)] leading-relaxed">
                  Turn complexity into decisive operational roadmaps. Corporate strategy, digital transformation, organizational restructuring, process engineering, and public policy advisory.
                </p>

                <div className="pt-2 font-mono text-xs text-[var(--ink-3)] space-y-1.5">
                  <div>✓ Corporate & Business Strategy Formulation</div>
                  <div>✓ Digital & AI Transformation Architecture</div>
                  <div>✓ Target Operating Models & Governance</div>
                  <div>✓ Policy & Regulatory Compliance Advisory</div>
                </div>
              </div>

              <button
                onClick={() => navigate('/what-we-do/business-consulting')}
                className="w-full py-3 px-4 bg-[var(--paper)] hover:bg-[var(--accent-soft)] border border-[var(--line)] hover:border-[var(--accent)] text-xs font-mono text-[var(--accent)] font-semibold rounded-[2px] transition-colors flex items-center justify-between cursor-pointer"
              >
                <span>View Dedicated Business Consulting Page</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

            {/* Pillar 2: Market Research */}
            <div className="p-8 bg-[var(--paper-2)] border border-[var(--line)] rounded-[2px] space-y-6 hover:border-[var(--accent)] transition-colors flex flex-col justify-between group">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-xs font-bold text-[var(--accent)] uppercase tracking-wider">
                    PILLAR 02 · EMPIRICAL INTELLIGENCE
                  </span>
                  <Layers className="w-5 h-5 text-[var(--accent)]" />
                </div>
                <h3 className="font-display text-2xl font-bold text-[var(--ink-strong)] group-hover:text-[var(--accent)] transition-colors">
                  Market Research
                </h3>
                <p className="font-body text-sm text-[var(--ink-2)] leading-relaxed">
                  Ground-truth intelligence across 45 African markets. Primary quantitative and qualitative fieldwork, Key Opinion Leader (KOL) mapping, tender pricing scans, and impact evaluations.
                </p>

                <div className="pt-2 font-mono text-xs text-[var(--ink-3)] space-y-1.5">
                  <div>✓ Primary Quantitative & Qualitative Fieldwork</div>
                  <div>✓ KOL & Stakeholder Network Mapping</div>
                  <div>✓ Competitive Intelligence & Pricing Audits</div>
                  <div>✓ Program Monitoring & Impact Evaluation</div>
                </div>
              </div>

              <button
                onClick={() => navigate('/what-we-do/market-research')}
                className="w-full py-3 px-4 bg-[var(--paper)] hover:bg-[var(--accent-soft)] border border-[var(--line)] hover:border-[var(--accent)] text-xs font-mono text-[var(--accent)] font-semibold rounded-[2px] transition-colors flex items-center justify-between cursor-pointer"
              >
                <span>View Dedicated Market Research Page</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

            {/* Pillar 3: AI Training & Digital Literacy */}
            <div className="p-8 bg-[var(--paper-2)] border border-[var(--line)] rounded-[2px] space-y-6 hover:border-[var(--accent)] transition-colors flex flex-col justify-between group">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-xs font-bold text-[var(--accent)] uppercase tracking-wider">
                    PILLAR 03 · INSTITUTIONAL CAPABILITY
                  </span>
                  <BookOpen className="w-5 h-5 text-[var(--accent)]" />
                </div>
                <h3 className="font-display text-2xl font-bold text-[var(--ink-strong)] group-hover:text-[var(--accent)] transition-colors">
                  AI Training & Digital Literacy
                </h3>
                <p className="font-body text-sm text-[var(--ink-2)] leading-relaxed">
                  Upskill executives and technical workforces so AI adoption sticks. High-impact masterclasses, function-specific AI workflows, ethics governance, and internal champions networks.
                </p>

                <div className="pt-2 font-mono text-xs text-[var(--ink-3)] space-y-1.5">
                  <div>✓ Executive AI Briefings & Strategy Masterclasses</div>
                  <div>✓ Function-Specific Workflows (Commercial, Clinical, Finance)</div>
                  <div>✓ Responsible AI & Data Governance Frameworks</div>
                  <div>✓ Internal Train-the-Trainer Programs</div>
                </div>
              </div>

              <button
                onClick={() => navigate('/what-we-do/ai-training')}
                className="w-full py-3 px-4 bg-[var(--paper)] hover:bg-[var(--accent-soft)] border border-[var(--line)] hover:border-[var(--accent)] text-xs font-mono text-[var(--accent)] font-semibold rounded-[2px] transition-colors flex items-center justify-between cursor-pointer"
              >
                <span>View Dedicated AI Training Page</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

            {/* Pillar 4: AI Enterprise Solutions */}
            <div className="p-8 bg-[var(--paper-2)] border border-[var(--line)] rounded-[2px] space-y-6 hover:border-[var(--accent)] transition-colors flex flex-col justify-between group">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-xs font-bold text-[var(--accent)] uppercase tracking-wider">
                    PILLAR 04 · PRODUCTION SYSTEMS
                  </span>
                  <Cpu className="w-5 h-5 text-[var(--accent)]" />
                </div>
                <h3 className="font-display text-2xl font-bold text-[var(--ink-strong)] group-hover:text-[var(--accent)] transition-colors">
                  AI Enterprise Solutions
                </h3>
                <p className="font-body text-sm text-[var(--ink-2)] leading-relaxed">
                  Engineered production AI architectures. Private on-premise/cloud models, automated document extraction, conversational intelligence, and specialized Life Sciences AI solutions.
                </p>

                <div className="pt-2 font-mono text-xs text-[var(--ink-3)] space-y-1.5">
                  <div>✓ Private Sovereign LLM & RAG Implementations</div>
                  <div>✓ Intelligent Document & Regulatory NLP Extraction</div>
                  <div>✓ Robotic Process Automation (RPA) Pipelines</div>
                  <div>✓ Life Sciences-Specific Pharmacovigilance AI</div>
                </div>
              </div>

              <button
                onClick={() => navigate('/what-we-do/ai-enterprise-solutions')}
                className="w-full py-3 px-4 bg-[var(--paper)] hover:bg-[var(--accent-soft)] border border-[var(--line)] hover:border-[var(--accent)] text-xs font-mono text-[var(--accent)] font-semibold rounded-[2px] transition-colors flex items-center justify-between cursor-pointer"
              >
                <span>View Dedicated AI Solutions Page</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          WHY THE INTEGRATED MODEL MATTERS
      ───────────────────────────────────────────────────────────── */}
      <section className="py-16 lg:py-24 bg-[var(--paper-2)] border-b border-[var(--line)]">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 space-y-8">
          <div className="space-y-2 pb-6 border-b border-[var(--line)]">
            <div className="font-mono text-xs text-[var(--accent)] font-semibold uppercase tracking-widest">
              STRATEGIC ADVANTAGE
            </div>
            <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-[var(--ink-strong)]">
              Why the integrated engine outperforms fragmented vendors.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-6 bg-[var(--paper)] border border-[var(--line)] rounded-[2px] space-y-3">
              <div className="font-mono text-xs text-[var(--ink-3)] font-semibold uppercase">The Fragmented Multi-Vendor Model</div>
              <ul className="font-body text-xs text-[var(--ink-2)] space-y-2">
                <li className="flex items-start space-x-2">
                  <span className="text-red-600 font-bold">✕</span>
                  <span>Market research firm delivers an academic report with zero operational roadmap.</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-red-600 font-bold">✕</span>
                  <span>Strategy consultants design a high-level deck detached from local field realities.</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-red-600 font-bold">✕</span>
                  <span>Tech vendors deploy generic software tools that staff cannot operate or maintain.</span>
                </li>
              </ul>
            </div>

            <div className="p-6 bg-[var(--paper)] border border-[var(--accent)]/40 rounded-[2px] space-y-3 bg-[var(--accent-soft)]/20">
              <div className="font-mono text-xs text-[var(--accent)] font-semibold uppercase">The MindCraft Single-Accountability Model</div>
              <ul className="font-body text-xs text-[var(--ink)] space-y-2">
                <li className="flex items-start space-x-2">
                  <span className="text-[var(--accent)] font-bold">✓</span>
                  <span>Primary research directly grounds strategy and eliminates unverified assumptions.</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-[var(--accent)] font-bold">✓</span>
                  <span>AI technology is custom engineered around real clinical and commercial bottlenecks.</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-[var(--accent)] font-bold">✓</span>
                  <span>Comprehensive executive upskilling ensures permanent institutional self-sufficiency.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Band */}
      <section className="py-16 bg-[var(--ink-strong)] text-[var(--paper)]">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 flex flex-col md:flex-row md:items-center justify-between gap-8">
          <div className="space-y-2 max-w-xl">
            <h2 className="font-display text-3xl font-bold text-white">
              Scope an integrated engagement.
            </h2>
            <p className="font-body text-sm text-[var(--paper-2)]/80">
              Combine any 2 or more capabilities for a seamless, unified advisory and engineering lifecycle.
            </p>
          </div>
          <div className="flex items-center space-x-4">
            <button
              onClick={() => navigate('/explore')}
              className="px-6 py-3.5 text-xs font-mono tracking-wider uppercase font-semibold text-[var(--paper)] bg-white/10 hover:bg-white/15 border border-white/20 rounded-[2px] transition-colors cursor-pointer"
            >
              Compose in Explorer
            </button>
            <button
              onClick={() => navigate('/contact')}
              className="px-6 py-3.5 text-xs font-mono tracking-wider uppercase font-semibold text-white bg-[var(--accent)] hover:bg-[var(--accent-2)] rounded-[2px] transition-colors whitespace-nowrap cursor-pointer"
            >
              Start a Conversation
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
