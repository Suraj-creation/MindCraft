import React, { useRef, useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { useNavigation } from '../context/NavigationContext';

interface ArchitectureLayer {
  id: string;
  step: string;
  name: string;
  /* One line for the rail — what the layer handles, not how. */
  role: string;
  summary: string;
  components: string[];
  security: string;
  residency: string;
}

/* The stack is ordered: data enters at 01 and reaches a desk at 05.
   The numerals are the sequence, not decoration. */
const LAYERS: ArchitectureLayer[] = [
  {
    id: 'ingestion',
    step: '01',
    name: 'Ingestion and document pipeline',
    role: 'Structured records and legacy clinical documents',
    summary: 'Private ETL ingestion, with redaction at the boundary.',
    components: [
      'Multi-format OCR for scanned African hospital records and regulatory filings',
      'PII anonymisation stripping national IDs, patient names and phone numbers at the boundary',
      'Data lineage tagging with immutable audit stamps',
    ],
    security: 'TLS 1.3 in transit, AES-256 at rest, no cross-border egress',
    residency: 'Built against the Kenya Data Protection Act 2019, Nigeria’s NDPR and South Africa’s POPIA',
  },
  {
    id: 'vector',
    step: '02',
    name: 'Private vector memory',
    role: 'Semantic retrieval anchored to statute',
    summary: 'Isolated embedding memory, indexed against the regulations that govern it.',
    components: [
      'Hierarchical chunking that preserves clinical context and dosage specifications',
      'Multi-index vector retrieval (HNSW) paired with BM25 keyword reranking',
      'Knowledge graph mapping relationships across national formularies and clinical guidelines',
    ],
    security: 'Tenant-isolated index partitions with per-client key derivation',
    residency: 'Runs on your own private VPC or on your own servers',
  },
  {
    id: 'models',
    step: '03',
    name: 'Domain-calibrated models',
    role: 'Open weights, tuned on your corpus',
    summary: 'Models tuned to your regulatory and clinical language, held on your infrastructure.',
    components: [
      'Parameter-efficient fine-tuning (LoRA / QLoRA) on curated East African clinical guidelines',
      'Multilingual adaptation across English, Swahili and regional clinical terminology',
      'Deterministic structured JSON output for direct software integration',
    ],
    security: 'Weights held inside your own tenant infrastructure',
    residency: 'No dependency on foreign cloud model APIs or consumer services',
  },
  {
    id: 'governance',
    step: '04',
    name: 'Governance and audit guardrails',
    role: 'Validation before anything reaches a reader',
    summary: 'Deterministic checks that catch an unsupported answer before it is shown.',
    components: [
      'Source-grounded citation enforcement — every answer maps back to an internal page',
      'Clinical safety boundaries preventing unauthorised prescription generation',
      'Immutable compliance logging for statutory regulatory examination',
    ],
    security: 'Policy engine that rejects out-of-bounds queries before inference',
    residency: 'Transaction logs retained in country under the applicable statutory retention rules',
  },
  {
    id: 'integration',
    step: '05',
    name: 'Enterprise integration',
    role: 'ERP, EMR and core banking systems',
    summary: 'Interfaces into the systems the work already runs on.',
    components: [
      'REST and gRPC microservices with OpenAPI 3.1 specifications',
      'Webhooks triggering hospital triage queues or customs declaration drafts',
      'Role-based access control synchronised with your Active Directory or LDAP',
    ],
    security: 'OAuth 2.0 and mTLS mutual certificate authentication',
    residency: 'Operates inside your existing enterprise security boundary',
  },
];

export const AITechnologyArchitecture: React.FC<{ className?: string }> = ({ className = '' }) => {
  const { navigate } = useNavigation();
  const [activeId, setActiveId] = useState('ingestion');
  const refs = useRef<(HTMLButtonElement | null)[]>([]);

  const activeIndex = LAYERS.findIndex((l) => l.id === activeId);
  const l = LAYERS[activeIndex] ?? LAYERS[0];

  const onKeyDown = (e: React.KeyboardEvent, i: number) => {
    const d = e.key === 'ArrowDown' ? 1 : e.key === 'ArrowUp' ? -1 : 0;
    if (!d) return;
    e.preventDefault();
    const next = (i + d + LAYERS.length) % LAYERS.length;
    setActiveId(LAYERS[next].id);
    refs.current[next]?.focus();
  };

  return (
    <div className={`grid grid-cols-1 gap-x-14 gap-y-10 lg:grid-cols-12 ${className}`}>
      {/* The stack reads bottom-up as a rail, not five cards. */}
      <div className="lg:col-span-5">
        <ol role="tablist" aria-label="Architecture layers">
          {LAYERS.map((layer, i) => {
            const on = layer.id === activeId;
            const below = i < activeIndex;
            return (
              <li key={layer.id}>
                <button
                  ref={(el) => { refs.current[i] = el; }}
                  role="tab"
                  aria-selected={on}
                  tabIndex={on ? 0 : -1}
                  onClick={() => setActiveId(layer.id)}
                  onKeyDown={(e) => onKeyDown(e, i)}
                  className={`group flex w-full cursor-pointer items-baseline gap-5 border-l-2 py-5 pl-6 pr-4 text-left transition-colors ${
                    on
                      ? 'border-[var(--color-accent)] bg-[var(--color-raised)]'
                      : below
                        ? 'border-[var(--color-line-strong)] hover:border-[var(--color-accent-2)]'
                        : 'border-[var(--color-line)] hover:border-[var(--color-line-strong)]'
                  }`}
                >
                  <span className="font-mono text-eyebrow tracking-[0.14em] text-[var(--color-ink-3)]">
                    {layer.step}
                  </span>
                  <span className="flex-1">
                    <span
                      className={`block text-h5 transition-colors ${
                        on ? 'text-[var(--color-ink-strong)]' : 'text-[var(--color-ink-2)] group-hover:text-[var(--color-ink)]'
                      }`}
                    >
                      {layer.name}
                    </span>
                    <span className="mt-1 block text-caption text-[var(--color-ink-3)]">{layer.role}</span>
                  </span>
                </button>
              </li>
            );
          })}
        </ol>

        <figure className="mt-12">
          <img
            src="/assets/images/african_enterprise_architecture_1788986704563.jpg"
            alt="Systems engineer configuring a private server cluster"
            className="aspect-[4/3] w-full object-cover"
            loading="lazy"
          />
          <figcaption className="mt-4 border-t border-[var(--color-line)] pt-4 text-caption text-[var(--color-ink-3)]">
            Built to run on hardware the client owns, or inside their own cloud tenancy.
          </figcaption>
        </figure>
      </div>

      <div className="lg:col-span-7">
        <h3 className="text-h4">{l.summary}</h3>

        <dl className="mt-8">
          {[
            ['Security', l.security],
            ['Data residency', l.residency],
          ].map(([k, v]) => (
            <div
              key={k}
              className="grid grid-cols-1 gap-1 border-t border-[var(--color-line)] py-3.5 sm:grid-cols-12 sm:gap-6"
            >
              <dt className="font-mono text-eyebrow uppercase tracking-[0.14em] text-[var(--color-ink-3)] sm:col-span-3">
                {k}
              </dt>
              <dd className="text-body text-[var(--color-ink-2)] sm:col-span-9">{v}</dd>
            </div>
          ))}
        </dl>

        <h4 className="mt-10 font-mono text-eyebrow uppercase tracking-[0.14em] text-[var(--color-ink-3)]">
          What the layer contains
        </h4>
        <ul className="mt-4">
          {l.components.map((c) => (
            <li key={c} className="border-t border-[var(--color-line)] py-3 text-body text-[var(--color-ink)]">
              {c}
            </li>
          ))}
        </ul>

        <div className="mt-10 border-t border-[var(--color-line-2)] pt-8">
          <h4 className="font-mono text-eyebrow uppercase tracking-[0.14em] text-[var(--color-accent)]">
            Where it runs
          </h4>
          <p className="measure mt-3 text-lead text-[var(--color-ink)]">
            Every layer is designed to be deployed on infrastructure you control — your own servers
            or your own cloud tenancy. Nothing has to leave your environment for the system to work.
          </p>

          <button
            onClick={() => navigate('/contact?topic=ai-enterprise-architecture')}
            className="group mt-8 inline-flex cursor-pointer items-center gap-2 text-body-sm text-[var(--color-accent)] hover:text-[var(--color-accent-2)]"
          >
            Discuss an architecture
            <ArrowRight className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-1" />
          </button>
        </div>
      </div>
    </div>
  );
};
