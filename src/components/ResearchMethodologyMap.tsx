import React, { useState } from 'react';
import { Database, Search, MapPin, CheckCircle2, BarChart3, ShieldCheck, ArrowRight } from 'lucide-react';
import { useNavigation } from '../context/NavigationContext';

interface MethodTrack {
  id: string;
  name: string;
  code: string;
  leadTime: string;
  sampleScope: string;
  description: string;
  keyOutputs: string[];
  fieldMethods: string[];
}

const RESEARCH_TRACKS: MethodTrack[] = [
  {
    id: 'field',
    name: 'Primary In-Country Fieldwork',
    code: 'RES-01',
    leadTime: '3–6 weeks',
    sampleScope: 'Multi-city on-ground audits across 45 countries',
    description: 'Direct observational audits of physical distribution channels, healthcare facilities, pharmacies, and informal retail outlets conducted by vetted local researchers.',
    keyOutputs: [
      'Shelf-level SKU availability, stock-out frequency, and expiry audits',
      'Wholesale distributor price mark-up and margin-stacking calculations',
      'Counterfeit and grey-market diversion risk scoring'
    ],
    fieldMethods: ['Mystery shopping', 'Pharmacy shelf sweeps', 'Distributor warehouse inventory counts', 'Cold-chain audit logs']
  },
  {
    id: 'kol',
    name: 'KOL & Specialist Physician Panels',
    code: 'RES-02',
    leadTime: '2–4 weeks',
    sampleScope: '50–200 key clinical decision-makers per market',
    description: 'In-depth structured clinical interviews with chief medical officers, procurement chairs, regulatory heads, and leading specialists.',
    keyOutputs: [
      'Prescribing preference criteria and therapeutic substitution triggers',
      'Hospital formulary tender decision matrices and evaluation weights',
      'Unmet clinical needs and localized patient disease burden insights'
    ],
    fieldMethods: ['Double-blind clinical interviews', 'Formulary committee Delphi panels', 'Treatment algorithm mapping']
  },
  {
    id: 'regulatory',
    name: 'Regulatory Intelligence & Policy Tracking',
    code: 'RES-03',
    leadTime: 'Ongoing or 2-week sprint',
    sampleScope: 'All regional authorities (PPB, NAFDAC, SAHPRA, EAC, AMA)',
    description: 'Continuous monitoring of statutory amendments, pharmacovigilance directives, import quota shifts, and regional harmonization protocols.',
    keyOutputs: [
      'National registration dossier gap analysis and checklist',
      'Tariff schedule changes under AfCFTA Rules of Origin',
      'Fast-track joint review pathway eligibility assessments'
    ],
    fieldMethods: ['Direct liaison with regulatory secretariats', 'Gazette statutory audits', 'Public health policy review']
  },
  {
    id: 'competitor',
    name: 'Competitor Intelligence & Route-to-Market',
    code: 'RES-04',
    leadTime: '4–8 weeks',
    sampleScope: 'Domestic incumbents, regional importers & global MNCs',
    description: 'Comprehensive reverse-engineering of competitive positioning, supply chains, distributor exclusive arrangements, and tender history.',
    keyOutputs: [
      'Historical public procurement win rates and tender pricing benchmarks',
      'Exclusive distribution agreements and commercial bottleneck identification',
      'Sales force sizing and commercial coverage heatmaps'
    ],
    fieldMethods: ['Tender award history analysis', 'Ex-distributor interviews', 'Trade corridor customs manifest reviews']
  }
];

export const ResearchMethodologyMap: React.FC<{ className?: string }> = ({ className = '' }) => {
  const { navigate } = useNavigation();
  const [selectedTrackId, setSelectedTrackId] = useState<string>('field');

  const activeTrack = RESEARCH_TRACKS.find((t) => t.id === selectedTrackId) || RESEARCH_TRACKS[0];

  return (
    <div className={`border border-[var(--line)] bg-[var(--paper)] rounded-[2px] overflow-hidden ${className}`}>
      {/* Research Header */}
      <div className="p-5 sm:p-6 border-b border-[var(--line)] bg-[var(--paper-2)] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <div className="font-mono text-xs text-[var(--accent)] font-semibold uppercase tracking-widest">
            EMPIRICAL FIELD ENGINE
          </div>
          <h3 className="font-display text-2xl sm:text-3xl font-bold text-[var(--ink-strong)]">
            Primary African market intelligence architecture.
          </h3>
        </div>
        <div className="font-mono text-xs text-[var(--ink-3)] bg-[var(--paper)] px-3 py-1.5 border border-[var(--line)] rounded-[2px] self-start sm:self-auto">
          100% Primary Empirical Data
        </div>
      </div>

      {/* Track Selection Rail */}
      <div className="p-4 sm:p-6 bg-[var(--paper)] border-b border-[var(--line)]">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
          {RESEARCH_TRACKS.map((track) => {
            const isSelected = track.id === selectedTrackId;
            return (
              <button
                key={track.id}
                onClick={() => setSelectedTrackId(track.id)}
                className={`p-3.5 text-left border rounded-[2px] transition-all cursor-pointer flex flex-col justify-between ${
                  isSelected
                    ? 'bg-[var(--paper-2)] border-[var(--accent)] shadow-sm ring-1 ring-[var(--accent)]'
                    : 'bg-[var(--paper)] border-[var(--line)] hover:border-[var(--ink-3)]'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-1.5 font-mono text-xs">
                    <span className="font-bold text-[var(--accent)]">{track.code}</span>
                    <span className="text-[var(--ink-3)] text-[11px]">{track.leadTime}</span>
                  </div>
                  <div className="font-display font-semibold text-sm text-[var(--ink-strong)] leading-snug">
                    {track.name}
                  </div>
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {/* Detailed Methodology View */}
      <div className="p-6 sm:p-8 bg-[var(--paper-2)]">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left: Methodology Profile (7 cols) */}
          <div className="lg:col-span-7 space-y-6 font-body">
            <div>
              <div className="flex items-center space-x-2 font-mono text-xs text-[var(--accent)] font-semibold uppercase tracking-wider">
                <span>{activeTrack.code}</span>
                <span>·</span>
                <span>Operational Rigor</span>
              </div>
              <h4 className="font-display text-2xl sm:text-3xl font-bold text-[var(--ink-strong)] mt-1">
                {activeTrack.name}
              </h4>
              <p className="text-sm text-[var(--ink)] mt-2 leading-relaxed">
                {activeTrack.description}
              </p>
            </div>

            {/* Deliverables */}
            <div className="space-y-2">
              <div className="font-mono text-[10px] uppercase text-[var(--ink-3)] font-semibold tracking-wider">
                Empirical Deliverables & Analysis Artifacts:
              </div>
              <div className="space-y-2">
                {activeTrack.keyOutputs.map((out, idx) => (
                  <div key={idx} className="p-3 bg-[var(--paper)] border border-[var(--line)] rounded-[2px] font-mono text-xs text-[var(--ink)] flex items-start space-x-2">
                    <CheckCircle2 className="w-4 h-4 text-[var(--accent)] shrink-0 mt-0.5" />
                    <span>{out}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Field Methods */}
            <div className="p-4 bg-[var(--paper)] border border-[var(--line)] rounded-[2px] space-y-2 font-mono text-xs">
              <div className="text-[var(--accent)] font-semibold uppercase tracking-wider text-[11px]">
                Rigorous Data Collection Protocols
              </div>
              <div className="flex flex-wrap gap-2 pt-1">
                {activeTrack.fieldMethods.map((m) => (
                  <span key={m} className="px-2.5 py-1 bg-[var(--paper-2)] border border-[var(--line-2)] text-[var(--ink-strong)] rounded-[2px]">
                    {m}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Right: Field Visual & Deployment (5 cols) */}
          <div className="lg:col-span-5 space-y-5">
            <div className="border border-[var(--line)] bg-[var(--paper)] p-2 rounded-[2px] shadow-sm">
              <div className="aspect-[4/3] overflow-hidden rounded-[2px] relative">
                <img
                  src="/assets/images/african_field_research_1788986691596.jpg"
                  alt="African field research specialist conducting empirical pharmaceutical market verification"
                  className="w-full h-full object-cover grayscale-[10%]"
                  loading="lazy"
                />
                <div className="absolute top-2 left-2 bg-[var(--paper)]/90 backdrop-blur-xs px-2 py-1 text-[10px] font-mono text-[var(--ink-strong)] font-semibold border border-[var(--line)]">
                  Primary Fieldwork in Progress
                </div>
              </div>
              <div className="pt-2 px-1 flex items-center justify-between font-mono text-[11px] text-[var(--ink-3)]">
                <span>Nairobi Research Desk</span>
                <span className="text-[var(--accent)] font-semibold">Audited Primary Data</span>
              </div>
            </div>

            <div className="p-5 bg-[var(--paper)] border border-[var(--line)] rounded-[2px] space-y-3 font-mono text-xs">
              <div className="text-[var(--accent)] font-semibold uppercase tracking-wider text-[11px]">
                Scope & Turnaround Metrics
              </div>
              <div className="space-y-2 text-[var(--ink-2)] border-t border-[var(--line)] pt-3">
                <div className="flex justify-between">
                  <span className="text-[var(--ink-3)]">Lead Time:</span>
                  <span className="text-[var(--ink-strong)] font-semibold">{activeTrack.leadTime}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[var(--ink-3)]">Pan-African Reach:</span>
                  <span className="text-[var(--ink-strong)] font-semibold">45 Markets</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[var(--ink-3)]">Data Verification:</span>
                  <span className="text-[var(--ink-strong)] font-semibold">100% In-Person Audited</span>
                </div>
              </div>

              <div className="pt-3 border-t border-[var(--line)]">
                <button
                  onClick={() => navigate('/contact?topic=market-research')}
                  className="w-full py-2.5 bg-[var(--accent)] hover:bg-[var(--accent-2)] text-white text-center font-semibold rounded-[2px] transition-colors cursor-pointer"
                >
                  Commission Market Research
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
