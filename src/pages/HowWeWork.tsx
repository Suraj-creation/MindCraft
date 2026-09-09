import React, { useState } from 'react';
import { ArrowUpRight, ArrowRight, CheckCircle2, ShieldCheck, Clock, Users, FileText, ChevronRight } from 'lucide-react';
import { useNavigation } from '../context/NavigationContext';
import { ENGAGEMENT_STAGES } from '../data/landingData';

const DELIVERY_MODALITIES = [
  {
    name: 'Project-Based Mandate',
    bestFor: 'Discrete strategies, regulatory submissions, or specific market entries.',
    structure: 'Fixed-fee milestone delivery with agreed timeline (typically 6–16 weeks).'
  },
  {
    name: 'Strategic Advisory Retainer',
    bestFor: 'Continuous executive counsel, policy monitoring, and quarterly board briefings.',
    structure: 'Monthly retainer with reserved partner hours and on-demand advisory access.'
  },
  {
    name: 'Embedded Task Force',
    bestFor: 'High-stakes transformations requiring full integration within client teams.',
    structure: 'Co-located hybrid squads working side-by-side with client leadership.'
  },
  {
    name: 'Rapid Intelligence Sprint',
    bestFor: 'Time-critical investment decisions, M&A due diligence, or competitor response.',
    structure: '2–3 week intensive fieldwork and empirical briefing synthesis.'
  },
  {
    name: 'Enterprise AI Build & Transfer',
    bestFor: 'Production software architecture and machine learning pipeline development.',
    structure: 'Phased build, private deployment, testing, and full technical handover.'
  },
  {
    name: 'Cohort Upskilling Program',
    bestFor: 'Enterprise-wide AI literacy, clinical workflow enablement, and change management.',
    structure: '4–8 week modular training tracks with practical interactive simulation labs.'
  },
  {
    name: 'Hybrid Advisory & Engineering',
    bestFor: 'End-to-end mandates combining field research, corporate strategy, and custom AI tooling.',
    structure: 'Single-accountability lifecycle from problem definition to live operational adoption.'
  }
];

export const HowWeWork: React.FC = () => {
  const { navigate } = useNavigation();
  const [selectedStageNum, setSelectedStageNum] = useState<string>('01');

  const activeStage = ENGAGEMENT_STAGES.find((s) => s.number === selectedStageNum) || ENGAGEMENT_STAGES[0];

  return (
    <div className="space-y-0">
      {/* Editorial Header */}
      <section className="bg-[var(--paper)] pt-12 pb-16 lg:pt-16 lg:pb-24 border-b border-[var(--line)]">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 space-y-8">
          <div className="flex items-center space-x-3 text-xs font-mono text-[var(--ink-3)] uppercase tracking-wider">
            <span className="text-[var(--accent)] font-semibold">METHODOLOGICAL DISCIPLINE</span>
            <span>·</span>
            <span>GOVERNANCE & ENGAGEMENT</span>
            <span>·</span>
            <span>PREDICTABLE OUTCOMES</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            <div className="lg:col-span-8 space-y-6">
              <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[var(--ink-strong)] leading-tight">
                How We Work.
              </h1>
              <p className="font-body text-lg text-[var(--ink)] leading-relaxed max-w-3xl">
                We believe rigorous consulting requires disciplined delivery. Every engagement follows a transparent six-stage methodology engineered to eliminate scope drift, ensure empirical integrity, and embed lasting institutional self-sufficiency.
              </p>
            </div>

            <div className="lg:col-span-4 p-6 bg-[var(--paper-2)] border border-[var(--line)] rounded-[2px] space-y-3 font-mono text-xs">
              <div className="text-[var(--accent)] font-semibold uppercase tracking-wider">
                Delivery Guarantees
              </div>
              <ul className="space-y-2 text-[var(--ink-2)] border-t border-[var(--line)] pt-3">
                <li className="flex items-center space-x-2">
                  <CheckCircle2 className="w-4 h-4 text-[var(--accent)] shrink-0" />
                  <span>Direct Senior Partner Oversight</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle2 className="w-4 h-4 text-[var(--accent)] shrink-0" />
                  <span>Fixed Milestone Deliverables</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle2 className="w-4 h-4 text-[var(--accent)] shrink-0" />
                  <span>Full IP & Source Code Transfer</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle2 className="w-4 h-4 text-[var(--accent)] shrink-0" />
                  <span>90-Day Post-Delivery Follow-Up</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Six-Stage Lifecycle Rail with Stage Inspector */}
      <section className="py-16 lg:py-24 bg-[var(--paper-2)] border-b border-[var(--line)]">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 space-y-12">
          <div className="space-y-2 pb-6 border-b border-[var(--line)]">
            <div className="font-mono text-xs text-[var(--accent)] font-semibold uppercase tracking-widest">
              THE ENGAGEMENT LIFECYCLE
            </div>
            <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-[var(--ink-strong)]">
              Six stages from discovery to institutional adoption.
            </h2>
          </div>

          {/* Stage Selector Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
            {ENGAGEMENT_STAGES.map((stage) => {
              const isSelected = selectedStageNum === stage.number;
              return (
                <button
                  key={stage.number}
                  onClick={() => setSelectedStageNum(stage.number)}
                  className={`p-4 text-left border rounded-[2px] transition-all cursor-pointer ${
                    isSelected
                      ? 'bg-[var(--paper)] border-[var(--accent)] shadow-sm ring-1 ring-[var(--accent)]'
                      : 'bg-[var(--paper)] border-[var(--line)] hover:border-[var(--ink-3)]'
                  }`}
                >
                  <div className="flex items-center justify-between mb-1">
                    <span className="font-mono text-xs font-bold text-[var(--accent)]">
                      {stage.number}
                    </span>
                    <div className={`w-2 h-2 rounded-full ${isSelected ? 'bg-[var(--accent)]' : 'bg-[var(--line-2)]'}`} />
                  </div>
                  <div className="font-display font-semibold text-sm text-[var(--ink-strong)] leading-tight">
                    {stage.name}
                  </div>
                </button>
              );
            })}
          </div>

          {/* Detailed Stage Deep Inspector */}
          <div className="p-8 bg-[var(--paper)] border border-[var(--line)] rounded-[2px] grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-7 space-y-4">
              <div className="flex items-center space-x-2 text-xs font-mono text-[var(--accent)] font-semibold uppercase">
                <span>Stage {activeStage.number}</span>
                <span>·</span>
                <span>Operational Mandate</span>
              </div>
              <h3 className="font-display text-3xl font-bold text-[var(--ink-strong)]">
                {activeStage.name}
              </h3>
              <p className="font-body text-base text-[var(--ink)] leading-relaxed">
                {activeStage.objective}
              </p>
              <div className="p-4 bg-[var(--paper-2)] border border-[var(--line)] rounded-[2px] font-mono text-xs text-[var(--ink-2)]">
                <span className="text-[var(--accent)] font-semibold uppercase block mb-1">Core Deliverable:</span>
                <span className="text-[var(--ink-strong)] font-medium text-sm">{activeStage.outcome}</span>
              </div>
            </div>

            <div className="lg:col-span-5 space-y-4 font-mono text-xs border-t lg:border-t-0 lg:border-l border-[var(--line)] pt-6 lg:pt-0 lg:pl-8">
              <div className="text-[var(--accent)] font-semibold uppercase tracking-wider">
                Stage Governance Criteria
              </div>
              <div className="space-y-3 text-[var(--ink-2)]">
                <div className="p-3 bg-[var(--paper-2)] border border-[var(--line)] rounded-[2px]">
                  <span className="text-[var(--ink-3)] block text-[10px] uppercase">Input Requirements</span>
                  <span className="text-[var(--ink-strong)]">Client briefing, historical data files, stakeholder access credentials</span>
                </div>
                <div className="p-3 bg-[var(--paper-2)] border border-[var(--line)] rounded-[2px]">
                  <span className="text-[var(--ink-3)] block text-[10px] uppercase">Quality Review Gate</span>
                  <span className="text-[var(--ink-strong)]">Senior practice leader sign-off and peer methodology review</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7 Delivery Modalities Matrix */}
      <section className="py-16 lg:py-24 bg-[var(--paper)] border-b border-[var(--line)]">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 space-y-8">
          <div className="space-y-2 pb-6 border-b border-[var(--line)]">
            <div className="font-mono text-xs text-[var(--accent)] font-semibold uppercase tracking-widest">
              ENGAGEMENT STRUCTURES
            </div>
            <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-[var(--ink-strong)]">
              Seven flexible delivery modalities.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 font-mono text-xs">
            {DELIVERY_MODALITIES.map((modality, idx) => (
              <div key={idx} className="p-6 bg-[var(--paper-2)] border border-[var(--line)] rounded-[2px] space-y-3">
                <div className="text-[var(--accent)] font-bold uppercase">{modality.name}</div>
                <div>
                  <span className="text-[var(--ink-3)] block text-[10px] uppercase">Best Suited For:</span>
                  <p className="font-body text-xs text-[var(--ink)] mt-0.5 leading-relaxed">{modality.bestFor}</p>
                </div>
                <div className="pt-2 border-t border-[var(--line)]">
                  <span className="text-[var(--ink-3)] block text-[10px] uppercase">Structure & Term:</span>
                  <p className="font-body text-xs text-[var(--ink-2)] mt-0.5 leading-relaxed">{modality.structure}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Band */}
      <section className="py-16 bg-[var(--ink-strong)] text-[var(--paper)]">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 flex flex-col md:flex-row md:items-center justify-between gap-8">
          <div className="space-y-2 max-w-xl">
            <h2 className="font-display text-3xl font-bold text-white">
              Ready to scope your engagement terms?
            </h2>
            <p className="font-body text-sm text-[var(--paper-2)]/80">
              We provide formal Terms of Reference within 5 business days of discovery.
            </p>
          </div>
          <button
            onClick={() => navigate('/contact')}
            className="px-6 py-3.5 text-xs font-mono tracking-wider uppercase font-semibold text-white bg-[var(--accent)] hover:bg-[var(--accent-2)] rounded-[2px] transition-colors whitespace-nowrap self-start md:self-auto cursor-pointer"
          >
            Schedule Discovery Call
          </button>
        </div>
      </section>
    </div>
  );
};
