import React, { useState } from 'react';
import { ArrowRight, Layers, Building2, BookOpen, Cpu, CheckCircle2, Sparkles, Activity, ShieldCheck } from 'lucide-react';
import { useNavigation } from '../context/NavigationContext';

interface EngineStage {
  id: string;
  step: string;
  name: string;
  discipline: string;
  subpage: string;
  input: string;
  process: string;
  output: string;
  tag: string;
}

const ENGINE_STAGES: EngineStage[] = [
  {
    id: 'research',
    step: '01',
    name: 'Empirical Research',
    discipline: 'Market Research',
    subpage: '/what-we-do/market-research',
    input: 'Uncertain market signals, regulatory variances, distributor ambiguity',
    process: 'Primary quantitative & qualitative fieldwork across 45 African markets',
    output: 'Audited market realities, KOL influence mapping, verified pricing structures',
    tag: 'Ground Truth'
  },
  {
    id: 'strategy',
    step: '02',
    name: 'Corporate Strategy',
    discipline: 'Business Consulting',
    subpage: '/what-we-do/business-consulting',
    input: 'Empirical market intelligence & institutional baseline capabilities',
    process: 'Target operating model formulation, growth modeling & policy harmonization',
    output: 'Operational roadmaps, market-entry playbooks & regulatory dossiers',
    tag: 'Decision Matrix'
  },
  {
    id: 'capability',
    step: '03',
    name: 'Human Capability',
    discipline: 'AI Training & Digital Literacy',
    subpage: '/what-we-do/ai-training',
    input: 'Executive leadership goals, functional workflows & workforce skill gaps',
    process: 'Board masterclasses, clinical AI enablement & internal champion labs',
    output: 'Institutional fluency, certified AI practitioners & internal self-sufficiency',
    tag: 'Human Adoption'
  },
  {
    id: 'technology',
    step: '04',
    name: 'Production AI Systems',
    discipline: 'AI Enterprise Solutions',
    subpage: '/what-we-do/ai-enterprise-solutions',
    input: 'Proprietary enterprise documents, clinical records & ERP/HIS pipelines',
    process: 'Sovereign private LLM deployment, NLP document extractors & automated RPA',
    output: 'Production software architecture, secure on-premises/cloud pipelines',
    tag: 'Sovereign Tech'
  },
  {
    id: 'adoption',
    step: '05',
    name: 'Operational Embedment',
    discipline: 'Cross-Pillar Governance',
    subpage: '/how-we-work',
    input: 'Production systems & trained functional workforces',
    process: 'Change management, weekly sprint retrospectives & security audits',
    output: 'Zero system abandonment, permanent operational routines established',
    tag: 'Change Rigor'
  },
  {
    id: 'impact',
    step: '06',
    name: 'Measurable Impact',
    discipline: 'Executive Outcomes',
    subpage: '/explore',
    input: 'Live client operations across African commercial corridors',
    process: 'KPI tracking, commercial margin expansion & clinical quality indicators',
    output: 'Defensible African market leadership & sovereign technological independence',
    tag: 'African Scale'
  }
];

export const EngineVisualSpine: React.FC<{ className?: string }> = ({ className = '' }) => {
  const { navigate } = useNavigation();
  const [activeStageId, setActiveStageId] = useState<string>('research');

  const activeStage = ENGINE_STAGES.find((s) => s.id === activeStageId) || ENGINE_STAGES[0];

  return (
    <div className={`border border-[var(--line)] bg-[var(--paper)] rounded-[2px] overflow-hidden ${className}`}>
      {/* Engine Header Bar */}
      <div className="p-5 border-b border-[var(--line)] bg-[var(--paper-2)] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <div className="font-mono text-xs text-[var(--accent)] font-semibold uppercase tracking-widest">
            THE INTEGRATED VALUE CHAIN
          </div>
          <h3 className="font-display text-2xl font-bold text-[var(--ink-strong)]">
            Research → Strategy → Capability → Technology → Adoption → Impact
          </h3>
        </div>
        <div className="font-mono text-xs text-[var(--ink-3)] bg-[var(--paper)] px-3 py-1.5 border border-[var(--line)] rounded-[2px] self-start sm:self-auto">
          Single Institutional Accountability
        </div>
      </div>

      {/* Horizontal Interactive Visual Spine Rail */}
      <div className="p-6 sm:p-8 bg-[var(--paper)] border-b border-[var(--line)]">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 relative">
          {ENGINE_STAGES.map((stage, idx) => {
            const isSelected = stage.id === activeStageId;
            return (
              <button
                key={stage.id}
                onClick={() => setActiveStageId(stage.id)}
                className={`p-3.5 text-left border rounded-[2px] transition-all cursor-pointer relative group flex flex-col justify-between ${
                  isSelected
                    ? 'bg-[var(--paper-2)] border-[var(--accent)] shadow-sm ring-1 ring-[var(--accent)]'
                    : 'bg-[var(--paper)] border-[var(--line)] hover:border-[var(--ink-3)]'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-1.5">
                    <span className="font-mono text-xs font-bold text-[var(--accent)]">
                      {stage.step}
                    </span>
                    <span className="font-mono text-[9px] uppercase px-1.5 py-0.5 rounded-[1px] bg-[var(--accent-soft)] text-[var(--accent)] font-semibold">
                      {stage.tag}
                    </span>
                  </div>
                  <div className="font-display font-semibold text-sm text-[var(--ink-strong)] group-hover:text-[var(--accent)] transition-colors leading-tight">
                    {stage.name}
                  </div>
                </div>

                <div className="mt-3 pt-2 border-t border-[var(--line)] font-mono text-[10px] text-[var(--ink-3)]">
                  {stage.discipline}
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {/* Deep Stage Inspector View */}
      <div className="p-6 sm:p-8 bg-[var(--paper-2)]">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left: Stage Dynamics (7 cols) */}
          <div className="lg:col-span-7 space-y-4 font-body">
            <div className="flex items-center space-x-2 font-mono text-xs text-[var(--accent)] font-semibold uppercase tracking-wider">
              <span>Phase {activeStage.step} of 06</span>
              <span>·</span>
              <span>{activeStage.discipline}</span>
            </div>

            <h4 className="font-display text-2xl sm:text-3xl font-bold text-[var(--ink-strong)]">
              {activeStage.name}
            </h4>

            {/* Input -> Process -> Output Visual Pipeline */}
            <div className="space-y-3 pt-2">
              <div className="p-3 bg-[var(--paper)] border border-[var(--line)] rounded-[2px] font-mono text-xs">
                <span className="text-[var(--ink-3)] uppercase block text-[10px] mb-0.5 font-semibold">
                  Incoming Raw Input:
                </span>
                <span className="text-[var(--ink)]">{activeStage.input}</span>
              </div>

              <div className="p-3 bg-[var(--paper)] border border-[var(--line)] rounded-[2px] font-mono text-xs">
                <span className="text-[var(--accent)] uppercase block text-[10px] mb-0.5 font-semibold">
                  MindCraft Core Rigor & Process:
                </span>
                <span className="text-[var(--ink-strong)] font-medium">{activeStage.process}</span>
              </div>

              <div className="p-3 bg-[var(--accent-soft)]/60 border border-[var(--accent)]/40 rounded-[2px] font-mono text-xs">
                <span className="text-[var(--accent)] uppercase block text-[10px] mb-0.5 font-semibold">
                  Tangible Hand-Off Output:
                </span>
                <span className="text-[var(--ink-strong)] font-semibold">{activeStage.output}</span>
              </div>
            </div>
          </div>

          {/* Right: Cross-Pillar Link & Next Step (5 cols) */}
          <div className="lg:col-span-5 p-6 bg-[var(--paper)] border border-[var(--line)] rounded-[2px] space-y-4 font-mono text-xs flex flex-col justify-between">
            <div className="space-y-3">
              <div className="text-[var(--accent)] font-semibold uppercase tracking-wider text-xs pb-2 border-b border-[var(--line)]">
                Why Continuity Outperforms Fragmented Vendors
              </div>
              <p className="font-body text-xs text-[var(--ink-2)] leading-relaxed">
                When research, strategy, capability, and technology are split between separate firms, valuable context leaks out at every transition. MindCraft holds single-point accountability for the full loop.
              </p>
            </div>

            <div className="pt-4 border-t border-[var(--line)] flex items-center justify-between">
              <button
                onClick={() => navigate(activeStage.subpage)}
                className="inline-flex items-center space-x-2 text-xs font-mono font-semibold text-[var(--accent)] hover:underline cursor-pointer"
              >
                <span>Explore {activeStage.discipline} Details</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
