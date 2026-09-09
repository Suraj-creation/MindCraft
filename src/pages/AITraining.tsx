import React from 'react';
import { ArrowUpRight, ArrowRight, BookOpen, Users, ShieldCheck, CheckCircle2, Award, Sparkles, GraduationCap } from 'lucide-react';
import { useNavigation } from '../context/NavigationContext';
import { AILearningLadder } from '../components/AILearningLadder';

export const AITraining: React.FC = () => {
  const { navigate } = useNavigation();

  return (
    <div className="space-y-0">
      {/* ─────────────────────────────────────────────────────────────
          EDITORIAL HEADER — EXECUTIVE LEARNING ARCHITECTURE
      ───────────────────────────────────────────────────────────── */}
      <section className="bg-[var(--paper)] pt-12 pb-16 lg:pt-16 lg:pb-24 border-b border-[var(--line)]">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 space-y-8">
          <div className="flex items-center space-x-3 text-xs font-mono text-[var(--ink-3)] uppercase tracking-wider">
            <span className="text-[var(--accent)] font-semibold">PILLAR 03 · INSTITUTIONAL CAPABILITY</span>
            <span>·</span>
            <span>EXECUTIVE LEARNING ARCHITECTURE</span>
            <span>·</span>
            <span>HUMAN FLUENCY</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left: Thesis (7 cols) */}
            <div className="lg:col-span-7 space-y-6">
              <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[var(--ink-strong)] leading-tight">
                AI Training & Digital Literacy.
              </h1>
              <p className="font-body text-lg text-[var(--ink)] leading-relaxed">
                Technology investments fail when institutional human capability lags behind. We design executive masterclasses, clinical decision workflows, and engineering enablement labs that build permanent, sovereign technological independence within African institutions.
              </p>

              {/* Learning Philosophy Metrics */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 font-mono text-xs">
                <div className="p-3 bg-[var(--paper-2)] border border-[var(--line)] rounded-[2px]">
                  <span className="text-[var(--accent)] font-bold block text-sm">Strategic</span>
                  <span className="text-[var(--ink-2)] text-[11px]">Boardroom & fiduciary governance</span>
                </div>
                <div className="p-3 bg-[var(--paper-2)] border border-[var(--line)] rounded-[2px]">
                  <span className="text-[var(--accent)] font-bold block text-sm">Clinical</span>
                  <span className="text-[var(--ink-2)] text-[11px]">CPD-accredited medical workflows</span>
                </div>
                <div className="p-3 bg-[var(--paper-2)] border border-[var(--line)] rounded-[2px]">
                  <span className="text-[var(--accent)] font-bold block text-sm">Sovereign</span>
                  <span className="text-[var(--ink-2)] text-[11px]">Internal Center of Excellence transfer</span>
                </div>
              </div>

              <div className="flex flex-wrap gap-4 pt-2">
                <button
                  onClick={() => navigate('/contact?topic=ai-training')}
                  className="px-6 py-3.5 text-xs font-mono tracking-wider uppercase font-semibold text-white bg-[var(--accent)] hover:bg-[var(--accent-2)] rounded-[2px] transition-colors shadow-sm inline-flex items-center space-x-2 cursor-pointer"
                >
                  <span>Inquire About Executive Cohort</span>
                  <ArrowUpRight className="w-4 h-4" />
                </button>
                <button
                  onClick={() => navigate('/explore?capability=AI%20Training')}
                  className="px-6 py-3.5 text-xs font-mono tracking-wider uppercase font-semibold text-[var(--ink-strong)] bg-transparent hover:bg-[var(--paper-2)] border border-[var(--line)] rounded-[2px] transition-colors inline-flex items-center space-x-2 cursor-pointer"
                >
                  <span>Compose Training Brief</span>
                  <ArrowRight className="w-4 h-4 text-[var(--accent)]" />
                </button>
              </div>
            </div>

            {/* Right: Masterclass Lab Photography Anchor (5 cols) */}
            <div className="lg:col-span-5 space-y-3">
              <div className="border border-[var(--line)] bg-[var(--paper-2)] p-2 rounded-[2px] shadow-sm">
                <div className="aspect-[4/3] overflow-hidden rounded-[2px] relative">
                  <img
                    src="/assets/images/african_executive_training_1788986677111.jpg"
                    alt="African leaders, senior executives and clinicians participating in strategic AI literacy masterclass"
                    className="w-full h-full object-cover"
                    loading="eager"
                  />
                  <div className="absolute top-2 left-2 bg-black/60 backdrop-blur-xs text-white font-mono text-[9px] uppercase tracking-wider px-2 py-0.5">
                    Nairobi Executive Learning Lab
                  </div>
                </div>
                <div className="pt-2 px-1 flex items-center justify-between font-mono text-[11px] text-[var(--ink-3)]">
                  <span>Executive Simulation & Governance</span>
                  <span className="text-[var(--accent)] font-semibold">100% Practical Labs</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          INTERACTIVE HUMAN CAPABILITY LADDER
      ───────────────────────────────────────────────────────────── */}
      <section className="py-16 lg:py-24 bg-[var(--paper-2)] border-b border-[var(--line)]">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 space-y-8">
          <div className="space-y-2 pb-6 border-b border-[var(--line)]">
            <div className="font-mono text-xs text-[var(--accent)] font-semibold uppercase tracking-widest">
              CAPABILITY PROGRESSION
            </div>
            <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-[var(--ink-strong)]">
              From boardroom governance to production engineering.
            </h2>
          </div>

          <AILearningLadder />
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          DELIVERY MODES SPECIFICATIONS
      ───────────────────────────────────────────────────────────── */}
      <section className="py-16 lg:py-24 bg-[var(--paper)] border-b border-[var(--line)]">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 space-y-8">
          <div className="space-y-2 pb-6 border-b border-[var(--line)]">
            <div className="font-mono text-xs text-[var(--accent)] font-semibold uppercase tracking-widest">
              DELIVERY MODALITIES
            </div>
            <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-[var(--ink-strong)]">
              Tailored for enterprise executive rhythms.
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 font-mono text-xs">
            <div className="p-5 bg-[var(--paper-2)] border border-[var(--line)] rounded-[2px] space-y-2">
              <div className="text-[var(--accent)] font-bold text-sm">FORMAT 01</div>
              <div className="text-[var(--ink-strong)] font-semibold">Executive Boardroom Retreats</div>
              <div className="text-[var(--ink-3)] text-[11px] leading-relaxed">
                1–2 day intensive off-site strategy immersions with simulated crisis scenarios and regulatory risk audits.
              </div>
            </div>

            <div className="p-5 bg-[var(--paper-2)] border border-[var(--line)] rounded-[2px] space-y-2">
              <div className="text-[var(--accent)] font-bold text-sm">FORMAT 02</div>
              <div className="text-[var(--ink-strong)] font-semibold">Departmental Workflow Sprints</div>
              <div className="text-[var(--ink-3)] text-[11px] leading-relaxed">
                4-week applied cohort sprints redesigning operational processes into deterministic AI pipelines with verification loops.
              </div>
            </div>

            <div className="p-5 bg-[var(--paper-2)] border border-[var(--line)] rounded-[2px] space-y-2">
              <div className="text-[var(--accent)] font-bold text-sm">FORMAT 03</div>
              <div className="text-[var(--ink-strong)] font-semibold">Clinical Decision Sandboxes</div>
              <div className="text-[var(--ink-3)] text-[11px] leading-relaxed">
                Hospital and laboratory-tailored sessions on ambient charting, differential diagnosis support, and bioethics compliance.
              </div>
            </div>

            <div className="p-5 bg-[var(--paper-2)] border border-[var(--line)] rounded-[2px] space-y-2">
              <div className="text-[var(--accent)] font-bold text-sm">FORMAT 04</div>
              <div className="text-[var(--ink-strong)] font-semibold">Engineering Immersion Labs</div>
              <div className="text-[var(--ink-3)] text-[11px] leading-relaxed">
                Hands-on code labs fine-tuning local models (PEFT/LoRA), building private RAG vector databases, and containerized deployment.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Cross-Pillar Handoff */}
      <section className="py-16 bg-[var(--paper-2)] border-b border-[var(--line)]">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="space-y-1">
            <span className="font-mono text-xs text-[var(--accent)] font-semibold uppercase">Next Step in the Engine</span>
            <h3 className="font-display text-xl font-bold text-[var(--ink-strong)]">Pair trained teams with production-grade AI enterprise systems.</h3>
          </div>
          <button
            onClick={() => navigate('/what-we-do/ai-enterprise-solutions')}
            className="px-5 py-2.5 bg-[var(--accent)] hover:bg-[var(--accent-2)] text-white text-xs font-mono uppercase tracking-wider font-semibold rounded-[2px] transition-colors cursor-pointer self-start md:self-auto"
          >
            See AI Enterprise Solutions →
          </button>
        </div>
      </section>
    </div>
  );
};
