import React, { useState } from 'react';
import { Server, ShieldCheck, Cpu, Database, Lock, Terminal, ArrowRight, CheckCircle2 } from 'lucide-react';
import { useNavigation } from '../context/NavigationContext';

interface ArchitectureLayer {
  id: string;
  number: string;
  name: string;
  tagline: string;
  components: string[];
  securityProtocol: string;
  dataSovereignty: string;
  specs: string;
}

const ARCHITECTURE_LAYERS: ArchitectureLayer[] = [
  {
    id: 'ingestion',
    number: 'LAYER 01',
    name: 'Sovereign Ingestion & Document Pipeline',
    tagline: 'Private, air-gapped ETL ingestion across structured records and legacy clinical documents.',
    components: [
      'Multi-format OCR for scanned African hospital records and regulatory filings',
      'PII anonymization stripping national IDs, patient names, and phone numbers at boundary',
      'Real-time data lineage tagging with immutable audit stamps'
    ],
    securityProtocol: 'TLS 1.3 in-transit, AES-256 at-rest, Zero cross-border packet egress',
    dataSovereignty: 'Kenya Data Protection Act 2019 / Nigeria NDPR / SA POPIA compliant',
    specs: 'Throughput: >12,000 pages/hour · Zero-leakage redaction gateway'
  },
  {
    id: 'vector',
    number: 'LAYER 02',
    name: 'Private Vector Memory & Knowledge Graph',
    tagline: 'Isolated semantic embedding memory anchored to domain regulatory statutes.',
    components: [
      'Hierarchical chunking preserving clinical context and dosage specifications',
      'Multi-index vector retrieval (HNSW) paired with BM25 keyword reranking',
      'Knowledge graph mapping relationships across national formularies and clinical guidelines'
    ],
    securityProtocol: 'Tenant-isolated index partitions with cryptographic cryptographic key derivation',
    dataSovereignty: 'Hostable on client private VPC or on-premises server clusters in Nairobi/Lagos/Joburg',
    specs: 'Sub-40ms semantic retrieval across 10M+ domain chunks'
  },
  {
    id: 'models',
    number: 'LAYER 03',
    name: 'Domain-Calibrated Foundation Models',
    tagline: 'Fine-tuned open-weights models trained on verified African regulatory and health data.',
    components: [
      'Parameter-Efficient Fine-Tuning (LoRA / QLoRA) on curated East African clinical guidelines',
      'Multi-lingual adaptation supporting English, Swahili, and regional clinical terminology',
      'Deterministic structured JSON output for guaranteed software integration'
    ],
    securityProtocol: 'Weights hosted strictly within private tenant container infrastructure',
    dataSovereignty: 'Completely independent of foreign cloud model APIs or consumer services',
    specs: 'P95 latency: <450ms · Zero external API dependencies'
  },
  {
    id: 'governance',
    number: 'LAYER 04',
    name: 'Deterministic Governance & Audit Guardrails',
    tagline: 'Defensive validation layers catching hallucinations, bias, and compliance violations before output.',
    components: [
      'Source-grounded citation enforcement (every answer maps to a verified internal page)',
      'Clinical safety boundaries preventing unauthorized prescription generation',
      'Immutable compliance logging for statutory regulatory examination'
    ],
    securityProtocol: 'Automated policy enforcement engine rejecting out-of-bounds queries',
    dataSovereignty: 'Auditable transaction logs retained in country according to statutory retention rules',
    specs: 'Hallucination rate: <0.02% across benchmarked clinical dossiers'
  },
  {
    id: 'integration',
    number: 'LAYER 05',
    name: 'Enterprise API & Systems Integration',
    tagline: 'Robust interfaces communicating with client ERP, EMR, and core banking backbones.',
    components: [
      'REST & gRPC microservices with OpenAPI 3.1 specifications',
      'Webhooks triggering automated hospital triage queues or customs declaration drafts',
      'Granular Role-Based Access Control (RBAC) synchronized with client Active Directory / LDAP'
    ],
    securityProtocol: 'OAuth 2.0 / mTLS mutual certificate authentication',
    dataSovereignty: 'Operates within existing enterprise security boundaries',
    specs: '99.95% uptime SLA · Direct SAP / Oracle / OpenMRS connector adapters'
  }
];

export const AITechnologyArchitecture: React.FC<{ className?: string }> = ({ className = '' }) => {
  const { navigate } = useNavigation();
  const [selectedLayerId, setSelectedLayerId] = useState<string>('ingestion');

  const activeLayer = ARCHITECTURE_LAYERS.find((l) => l.id === selectedLayerId) || ARCHITECTURE_LAYERS[0];

  return (
    <div className={`border border-[var(--line)] bg-[var(--paper)] rounded-[2px] overflow-hidden ${className}`}>
      {/* Architecture Header */}
      <div className="p-5 sm:p-6 border-b border-[var(--line)] bg-[var(--paper-2)] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <div className="font-mono text-xs text-[var(--accent)] font-semibold uppercase tracking-widest">
            ENTERPRISE ARCHITECTURAL SPECIFICATION
          </div>
          <h3 className="font-display text-2xl sm:text-3xl font-bold text-[var(--ink-strong)]">
            Sovereign, private, production-grade AI stack.
          </h3>
        </div>
        <div className="font-mono text-xs text-[var(--ink-3)] bg-[var(--paper)] px-3 py-1.5 border border-[var(--line)] rounded-[2px] self-start sm:self-auto">
          Private Infrastructure · Zero Multi-Tenant Bleed
        </div>
      </div>

      {/* Layer Selection Stack */}
      <div className="p-4 sm:p-6 bg-[var(--paper)] border-b border-[var(--line)]">
        <div className="space-y-2">
          {ARCHITECTURE_LAYERS.map((layer) => {
            const isSelected = layer.id === selectedLayerId;
            return (
              <button
                key={layer.id}
                onClick={() => setSelectedLayerId(layer.id)}
                className={`w-full p-3.5 text-left border rounded-[2px] transition-all cursor-pointer flex items-center justify-between ${
                  isSelected
                    ? 'bg-[var(--paper-2)] border-[var(--accent)] shadow-sm ring-1 ring-[var(--accent)]'
                    : 'bg-[var(--paper)] border-[var(--line)] hover:border-[var(--ink-3)]'
                }`}
              >
                <div className="flex items-center space-x-4">
                  <span className="font-mono text-xs font-bold text-[var(--accent)] w-16">
                    {layer.number}
                  </span>
                  <span className="font-display font-semibold text-sm sm:text-base text-[var(--ink-strong)]">
                    {layer.name}
                  </span>
                </div>
                <div className="hidden sm:block font-mono text-[11px] text-[var(--ink-3)]">
                  {layer.securityProtocol.split(',')[0]}
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {/* Selected Layer Deep Inspector */}
      <div className="p-6 sm:p-8 bg-[var(--paper-2)]">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left: Layer Specs (7 cols) */}
          <div className="lg:col-span-7 space-y-6 font-body">
            <div>
              <div className="flex items-center space-x-2 font-mono text-xs text-[var(--accent)] font-semibold uppercase tracking-wider">
                <span>{activeLayer.number}</span>
                <span>·</span>
                <span>SYSTEM SPECIFICATION</span>
              </div>
              <h4 className="font-display text-2xl sm:text-3xl font-bold text-[var(--ink-strong)] mt-1">
                {activeLayer.name}
              </h4>
              <p className="text-sm text-[var(--ink)] mt-2 leading-relaxed">
                {activeLayer.tagline}
              </p>
            </div>

            {/* Subsystems */}
            <div className="space-y-2">
              <div className="font-mono text-[10px] uppercase text-[var(--ink-3)] font-semibold tracking-wider">
                Subsystems & Architectural Modules:
              </div>
              <div className="space-y-2">
                {activeLayer.components.map((comp, idx) => (
                  <div key={idx} className="p-3 bg-[var(--paper)] border border-[var(--line)] rounded-[2px] font-mono text-xs text-[var(--ink)] flex items-start space-x-2">
                    <CheckCircle2 className="w-4 h-4 text-[var(--accent)] shrink-0 mt-0.5" />
                    <span>{comp}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Compliance & Security Callout */}
            <div className="p-4 bg-[var(--paper)] border border-[var(--line)] rounded-[2px] space-y-2 font-mono text-xs">
              <div className="text-[var(--accent)] font-semibold uppercase tracking-wider text-[11px]">
                Data Sovereignty & Legal Compliance
              </div>
              <p className="text-[var(--ink-2)] text-xs">
                {activeLayer.dataSovereignty}
              </p>
            </div>
          </div>

          {/* Right: Technical Telemetry & Diagram (5 cols) */}
          <div className="lg:col-span-5 space-y-5">
            <div className="border border-[var(--line)] bg-[var(--paper)] p-2 rounded-[2px] shadow-sm">
              <div className="aspect-[4/3] overflow-hidden rounded-[2px] relative">
                <img
                  src="/assets/images/african_enterprise_architecture_1788986704563.jpg"
                  alt="Enterprise systems engineer configuring secure sovereign machine learning server cluster"
                  className="w-full h-full object-cover grayscale-[10%]"
                  loading="lazy"
                />
                <div className="absolute top-2 left-2 bg-[var(--paper)]/90 backdrop-blur-xs px-2 py-1 text-[10px] font-mono text-[var(--ink-strong)] font-semibold border border-[var(--line)]">
                  Private Cloud Infrastructure
                </div>
              </div>
              <div className="pt-2 px-1 flex items-center justify-between font-mono text-[11px] text-[var(--ink-3)]">
                <span>Nairobi Architecture Lab</span>
                <span className="text-[var(--accent)] font-semibold">100% On-Premise Capable</span>
              </div>
            </div>

            <div className="p-5 bg-[var(--paper)] border border-[var(--line)] rounded-[2px] space-y-3 font-mono text-xs">
              <div className="text-[var(--accent)] font-semibold uppercase tracking-wider text-[11px]">
                Performance & Security Metrics
              </div>
              <div className="space-y-2 text-[var(--ink-2)] border-t border-[var(--line)] pt-3">
                <div>
                  <span className="text-[var(--ink-3)] block text-[10px] uppercase">Cryptographic Standard</span>
                  <span className="text-[var(--ink-strong)] font-semibold">{activeLayer.securityProtocol}</span>
                </div>
                <div>
                  <span className="text-[var(--ink-3)] block text-[10px] uppercase">Benchmark Specs</span>
                  <span className="text-[var(--ink-strong)] font-semibold">{activeLayer.specs}</span>
                </div>
              </div>

              <div className="pt-3 border-t border-[var(--line)]">
                <button
                  onClick={() => navigate('/contact?topic=ai-enterprise-architecture')}
                  className="w-full py-2.5 bg-[var(--accent)] hover:bg-[var(--accent-2)] text-white text-center font-semibold rounded-[2px] transition-colors cursor-pointer"
                >
                  Request Technical Architecture Dossier
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
