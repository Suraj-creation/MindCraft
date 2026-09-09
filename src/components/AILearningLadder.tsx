import React, { useState } from 'react';
import { GraduationCap, Users, ShieldCheck, CheckCircle2, ArrowRight, Award, Target } from 'lucide-react';
import { useNavigation } from '../context/NavigationContext';

interface CapabilityTier {
  id: string;
  tierNumber: string;
  audience: string;
  focus: string;
  format: string;
  timeCommitment: string;
  coreCompetencies: string[];
  measurableOutcomes: string;
}

const CAPABILITY_TIERS: CapabilityTier[] = [
  {
    id: 'executive',
    tierNumber: 'TIER 01',
    audience: 'C-Suite, Board of Directors & Managing Partners',
    focus: 'Strategic AI Governance & Fiduciary Capital Allocation',
    format: 'Intensive 2-day executive retreat or 4-session boardroom masterclass',
    timeCommitment: '16 hours direct advisory',
    coreCompetencies: [
      'Separating technical reality from generative AI hype cycles',
      'Fiduciary risk oversight under Kenya DPA, POPIA, and global compliance acts',
      'Capital expenditure evaluation for private infrastructure vs cloud APIs',
      'Ethical oversight, bias mitigation, and workforce transition policy'
    ],
    measurableOutcomes: 'Approved 3-year enterprise AI roadmap and board-level risk governance charter.'
  },
  {
    id: 'operational',
    tierNumber: 'TIER 02',
    audience: 'Department Heads, Product Managers & Functional Leads',
    focus: 'Operational Workflow Redesign & Applied Productivity',
    format: '4-week cohort program with live workflow transformation sprint',
    timeCommitment: '6 hours/week (24 hours total)',
    coreCompetencies: [
      'Systematic decomposition of complex institutional workflows into automatable steps',
      'Advanced prompt architecture and deterministic structured output extraction',
      'Verification protocols catching hallucinations before client-facing transmission',
      'Designing human-in-the-loop validation checkpoints'
    ],
    measurableOutcomes: 'Live deployment of 3 production-grade departmental productivity pipelines.'
  },
  {
    id: 'clinical',
    tierNumber: 'TIER 03',
    audience: 'Chief Medical Officers, Clinicians, Pharmacists & Lab Directors',
    focus: 'Clinical AI Literacy & Diagnostic Workflow Safety',
    format: 'Accredited continuous professional development (CPD) modular track',
    timeCommitment: '12 hours modular or 2-day on-site hospital clinic',
    coreCompetencies: [
      'Interpreting clinical decision support (CDS) probabilities and false-positive limits',
      'Ambient clinical documentation tools and EMR voice transcription efficiency',
      'Patient privacy preservation in electronic medical records and imaging',
      'Regulatory compliance with national medical practitioner guidelines'
    ],
    measurableOutcomes: 'Certified clinical staff saving 45+ minutes per shift on administrative charting.'
  },
  {
    id: 'engineering',
    tierNumber: 'TIER 04',
    audience: 'Software Engineers, Systems Architects & Data Scientists',
    focus: 'Production Sovereign Model Deployment & Architecture',
    format: '6-week hands-on engineering lab with dedicated cloud sandbox',
    timeCommitment: '8 hours/week (48 hours total)',
    coreCompetencies: [
      'Parameter-Efficient Fine-Tuning (PEFT/QLoRA) on private African domain datasets',
      'Vector database indexing, hybrid search, and semantic retrieval optimization',
      'Containerized deployment on local on-premises hardware or private VPC',
      'Latency optimization, batch inferencing, and deterministic API testing'
    ],
    measurableOutcomes: 'Production deployment of an internal sovereign retrieval engine with full unit tests.'
  },
  {
    id: 'excellence',
    tierNumber: 'TIER 05',
    audience: 'Cross-Functional Enterprise Taskforce',
    focus: 'Institutional AI Center of Excellence (CoE) Transfer',
    format: '3-month embedded mentorship and permanent institutionalization',
    timeCommitment: 'Quarterly embedded cadence',
    coreCompetencies: [
      'Establishing continuous peer-review and model audit committees',
      'Developing internal certification curricula for new employee onboarding',
      'Vendor procurement evaluation frameworks for third-party software',
      'Sustaining sovereign technological autonomy without permanent external reliance'
    ],
    measurableOutcomes: 'Self-governing internal Center of Excellence managing all enterprise AI initiatives.'
  }
];

export const AILearningLadder: React.FC<{ className?: string }> = ({ className = '' }) => {
  const { navigate } = useNavigation();
  const [selectedTierId, setSelectedTierId] = useState<string>('executive');

  const activeTier = CAPABILITY_TIERS.find((t) => t.id === selectedTierId) || CAPABILITY_TIERS[0];

  return (
    <div className={`border border-[var(--line)] bg-[var(--paper)] rounded-[2px] overflow-hidden ${className}`}>
      {/* Capability Header */}
      <div className="p-5 sm:p-6 border-b border-[var(--line)] bg-[var(--paper-2)] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <div className="font-mono text-xs text-[var(--accent)] font-semibold uppercase tracking-widest">
            HUMAN CAPABILITY LADDER
          </div>
          <h3 className="font-display text-2xl sm:text-3xl font-bold text-[var(--ink-strong)]">
            Five progressive tiers of institutional AI fluency.
          </h3>
        </div>
        <div className="font-mono text-xs text-[var(--ink-3)] bg-[var(--paper)] px-3 py-1.5 border border-[var(--line)] rounded-[2px] self-start sm:self-auto">
          Institutional Self-Sufficiency
        </div>
      </div>

      {/* Tier Selection Rail */}
      <div className="p-4 sm:p-6 bg-[var(--paper)] border-b border-[var(--line)]">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-2.5">
          {CAPABILITY_TIERS.map((tier) => {
            const isSelected = tier.id === selectedTierId;
            return (
              <button
                key={tier.id}
                onClick={() => setSelectedTierId(tier.id)}
                className={`p-3 text-left border rounded-[2px] transition-all cursor-pointer flex flex-col justify-between ${
                  isSelected
                    ? 'bg-[var(--paper-2)] border-[var(--accent)] shadow-sm ring-1 ring-[var(--accent)]'
                    : 'bg-[var(--paper)] border-[var(--line)] hover:border-[var(--ink-3)]'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-1">
                    <span className="font-mono text-xs font-bold text-[var(--accent)]">
                      {tier.tierNumber}
                    </span>
                    <div className={`w-2 h-2 rounded-full ${isSelected ? 'bg-[var(--accent)]' : 'bg-[var(--line-2)]'}`} />
                  </div>
                  <div className="font-display font-semibold text-xs sm:text-sm text-[var(--ink-strong)] leading-snug">
                    {tier.audience.split(',')[0]}
                  </div>
                </div>
                <div className="mt-2 text-[10px] font-mono text-[var(--ink-3)]">
                  {tier.timeCommitment}
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {/* Selected Tier Deep Inspector */}
      <div className="p-6 sm:p-8 bg-[var(--paper-2)]">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left: Tier Focus & Competencies (7 cols) */}
          <div className="lg:col-span-7 space-y-6 font-body">
            <div>
              <div className="flex items-center space-x-2 font-mono text-xs text-[var(--accent)] font-semibold uppercase tracking-wider">
                <span>{activeTier.tierNumber}</span>
                <span>·</span>
                <span>AUDIENCE & MANDATE</span>
              </div>
              <h4 className="font-display text-2xl sm:text-3xl font-bold text-[var(--ink-strong)] mt-1">
                {activeTier.focus}
              </h4>
              <p className="text-sm font-semibold text-[var(--ink)] mt-1">
                Targeted Audience: <span className="font-normal text-[var(--ink-2)]">{activeTier.audience}</span>
              </p>
            </div>

            {/* Core Competencies */}
            <div className="space-y-2">
              <div className="font-mono text-[10px] uppercase text-[var(--ink-3)] font-semibold tracking-wider">
                Core Capability Deliverables:
              </div>
              <div className="space-y-2">
                {activeTier.coreCompetencies.map((comp, idx) => (
                  <div key={idx} className="p-3 bg-[var(--paper)] border border-[var(--line)] rounded-[2px] font-mono text-xs text-[var(--ink)] flex items-start space-x-2">
                    <CheckCircle2 className="w-4 h-4 text-[var(--accent)] shrink-0 mt-0.5" />
                    <span>{comp}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Measurable Institutional Outcome */}
            <div className="p-4 bg-[var(--accent-soft)]/60 border border-[var(--accent)]/40 rounded-[2px] space-y-1 font-mono text-xs">
              <span className="text-[var(--accent)] font-semibold uppercase block text-[10px]">
                Auditable Program Outcome:
              </span>
              <p className="text-[var(--ink-strong)] font-semibold text-xs">
                {activeTier.measurableOutcomes}
              </p>
            </div>
          </div>

          {/* Right: Executive Lab Visual & Format (5 cols) */}
          <div className="lg:col-span-5 space-y-5">
            <div className="border border-[var(--line)] bg-[var(--paper)] p-2 rounded-[2px] shadow-sm">
              <div className="aspect-[4/3] overflow-hidden rounded-[2px] relative">
                <img
                  src="/assets/images/african_executive_training_1788986677111.jpg"
                  alt="African executives and healthcare directors participating in strategic AI literacy masterclass"
                  className="w-full h-full object-cover grayscale-[10%]"
                  loading="lazy"
                />
                <div className="absolute top-2 left-2 bg-[var(--paper)]/90 backdrop-blur-xs px-2 py-1 text-[10px] font-mono text-[var(--ink-strong)] font-semibold border border-[var(--line)]">
                  Executive Masterclass Cohort
                </div>
              </div>
              <div className="pt-2 px-1 flex items-center justify-between font-mono text-[11px] text-[var(--ink-3)]">
                <span>Nairobi Executive Suite</span>
                <span className="text-[var(--accent)] font-semibold">Practical Simulation Labs</span>
              </div>
            </div>

            <div className="p-5 bg-[var(--paper)] border border-[var(--line)] rounded-[2px] space-y-3 font-mono text-xs">
              <div className="text-[var(--accent)] font-semibold uppercase tracking-wider text-[11px]">
                Program Delivery Specifications
              </div>
              <div className="space-y-2 text-[var(--ink-2)] border-t border-[var(--line)] pt-3">
                <div>
                  <span className="text-[var(--ink-3)] block text-[10px] uppercase">Curriculum Format</span>
                  <span className="text-[var(--ink-strong)] font-semibold">{activeTier.format}</span>
                </div>
                <div>
                  <span className="text-[var(--ink-3)] block text-[10px] uppercase">Total Commitment</span>
                  <span className="text-[var(--ink-strong)] font-semibold">{activeTier.timeCommitment}</span>
                </div>
              </div>

              <div className="pt-3 border-t border-[var(--line)]">
                <button
                  onClick={() => navigate('/contact?topic=ai-training')}
                  className="w-full py-2.5 bg-[var(--accent)] hover:bg-[var(--accent-2)] text-white text-center font-semibold rounded-[2px] transition-colors cursor-pointer"
                >
                  Inquire About Cohort Enrollment
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
