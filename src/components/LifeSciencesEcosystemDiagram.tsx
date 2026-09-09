import React, { useState } from 'react';
import { ArrowUpRight, ArrowRight, ShieldCheck, Microscope, Stethoscope, Activity, Building, Scissors, Cpu, Layers } from 'lucide-react';
import { useNavigation } from '../context/NavigationContext';

export interface SectorDetail {
  id: string;
  name: string;
  shortName: string;
  tagline: string;
  image: string;
  imageAlt: string;
  color: string;
  regulatoryBodies: string[];
  keyChallenges: string[];
  mindCraftSolutions: string[];
  focusAreas: string[];
  capabilities: { name: string; url: string }[];
  pathwaySteps: { label: string; desc: string }[];
}

export const LIFE_SCIENCES_SECTORS: SectorDetail[] = [
  {
    id: 'pharma',
    name: 'Pharmaceuticals & Biologics',
    shortName: 'Pharma & Biologics',
    tagline: 'Formulary inclusion, sovereign drug manufacturing, and regional harmonization.',
    image: '/assets/images/lifesciences_research_1788984039868.jpg',
    imageAlt: 'Senior pharmaceutical researcher evaluating formulation purity and stability assays in a controlled clinical research environment',
    color: 'var(--accent)',
    regulatoryBodies: ['PPB (Kenya)', 'NAFDAC (Nigeria)', 'SAHPRA (South Africa)', 'AMA (African Medicines Agency)'],
    keyChallenges: [
      '24+ month national regulatory approval cycles across fragmented authorities',
      'Import dependency exceeding 70% of essential formulation volume',
      'Complex wholesaler margin stacking and counterfeit vulnerability'
    ],
    mindCraftSolutions: [
      'Joint EAC-MRH regulatory dossier optimization compressing submission cycles by 40%',
      'Active pharmaceutical ingredient (API) localized packaging feasibility modeling',
      'End-to-end serialized track-and-trace architectures for distributor compliance'
    ],
    focusAreas: [
      'Prescription Generics & Specialty Biologics',
      'Essential Medicines Formulary Strategy',
      'Local Secondary Packaging Economics',
      'Cold-Chain Insulin & Vaccine Integrity'
    ],
    capabilities: [
      { name: 'Market Research & KOL Pricing Studies', url: '/what-we-do/market-research' },
      { name: 'Regulatory Dossier Strategy', url: '/what-we-do/business-consulting' },
      { name: 'Pharmacovigilance AI Automation', url: '/what-we-do/ai-enterprise-solutions' }
    ],
    pathwaySteps: [
      { label: '01 Dossier Submission', desc: 'Regional CTD format compilation for PPB / SAHPRA' },
      { label: '02 Technical Evaluation', desc: 'Accelerated joint review protocols under EAC-MRH' },
      { label: '03 Wholesaler Licensing', desc: 'Auditing GDP compliance and territorial distribution' },
      { label: '04 Formulary Adoption', desc: 'National hospital tender integration and reimbursement' }
    ]
  },
  {
    id: 'devices',
    name: 'Medical Devices & Diagnostics',
    shortName: 'Medical Devices',
    tagline: 'Capital equipment deployment, preventive maintenance networks, and hospital procurement.',
    image: '/assets/images/african_medical_diagnostics_1788986720251.jpg',
    imageAlt: 'Medical scientist and clinical director validating automated hematology instrumentation inside an ISO-accredited diagnostic laboratory in Nairobi',
    color: 'var(--accent)',
    regulatoryBodies: ['Kenya PPB Medical Device Directorate', 'SAHPRA Class A-D System', 'WHO Prequalification'],
    keyChallenges: [
      'Graveyard effect: equipment imported without localized engineer maintenance capability',
      'Unstable municipal power grids compromising sensitive diagnostic sensors',
      'Lack of centralized clinical capital budget prioritization'
    ],
    mindCraftSolutions: [
      'Lifecycle Total Cost of Ownership (TCO) models including regional spares logistics',
      'Biomedical engineer apprenticeship and certification curriculum design',
      'Tiered subscription-based diagnostic fleet placement contracts'
    ],
    focusAreas: [
      'Point-of-Care Molecular Diagnostics',
      'Ultrasound & Radiographic Imaging',
      'Biomedical Spares Supply Lines',
      'Laboratory Information Systems (LIS) Interop'
    ],
    capabilities: [
      { name: 'Field Engineer AI Troubleshooting Tools', url: '/what-we-do/ai-enterprise-solutions' },
      { name: 'Hospital Procurement Decision Matrices', url: '/what-we-do/business-consulting' },
      { name: 'Clinician Device Mastery Cohorts', url: '/what-we-do/ai-training' }
    ],
    pathwaySteps: [
      { label: '01 Device Classification', desc: 'Class A to D risk assessment under regional frameworks' },
      { label: '02 Facility Power/Water Audit', desc: 'Empirical site readiness inspection before delivery' },
      { label: '03 Engineer Upskilling', desc: 'Local biomedical repair team certification' },
      { label: '04 Telemetric Uptime SLA', desc: 'Automated remote diagnostic monitoring' }
    ]
  },
  {
    id: 'diagnostics',
    name: 'Medical Diagnostics & Pathology',
    shortName: 'Diagnostics & Pathology',
    tagline: 'Decentralized screening, rapid turnaround pathology, and infectious disease surveillance.',
    image: '/assets/images/african_clinical_lab_1788984008127.jpg',
    imageAlt: 'Laboratory technologist analyzing clinical blood specimens using automated digital pathology microscope',
    color: 'var(--accent)',
    regulatoryBodies: ['KMLTTB (Kenya)', 'ASLM (African Society for Laboratory Medicine)', 'CDC Africa'],
    keyChallenges: [
      'Sample logistics delays from rural clinics to central referral labs exceeding 72 hours',
      'High reagent stock-outs driven by erratic forex allocation and port customs dwell',
      'Paper-based result dissemination delaying acute patient intervention'
    ],
    mindCraftSolutions: [
      'Spoke-and-hub sample courier optimization algorithms utilizing local transit networks',
      'Predictive reagent inventory forecasting systems calibrated to disease seasonality',
      'SMS and secure clinical portal automated diagnostic dispatch architecture'
    ],
    focusAreas: [
      'Rapid Molecular Nucleic Acid Testing',
      'Primary Care Hematology & Clinical Chemistry',
      'Surveillance Sequencing Networks',
      'Private Diagnostic Chain Expansion'
    ],
    capabilities: [
      { name: 'Diagnostic Network Design', url: '/what-we-do/business-consulting' },
      { name: 'Epidemiological Demand Forecasting', url: '/what-we-do/market-research' },
      { name: 'Automated Pathology AI Analysis', url: '/what-we-do/ai-enterprise-solutions' }
    ],
    pathwaySteps: [
      { label: '01 Specimen Collection', desc: 'Standardized cold transport protocols at rural clinics' },
      { label: '02 Transit Telematics', desc: 'Real-time temperature and location tracking' },
      { label: '03 Automated Analysis', desc: 'High-throughput processing with digital validation' },
      { label: '04 Direct Clinical Return', desc: 'Immediate encrypted dispatch to treating clinician' }
    ]
  },
  {
    id: 'equipment',
    name: 'Medical Equipment & Hospital Infrastructure',
    shortName: 'Equipment & Infrastructure',
    tagline: 'Turnkey operating theatre setup, oxygen ecosystems, and clinical ICU readiness.',
    image: '/assets/images/african_enterprise_architecture_1788986704563.jpg',
    imageAlt: 'Healthcare infrastructure architects reviewing mechanical blueprints and clinical electrical schematics',
    color: 'var(--accent)',
    regulatoryBodies: ['Ministries of Health Infrastructure Departments', 'Regional Fire & Radiation Boards'],
    keyChallenges: [
      'Medical gas (oxygen, nitrous oxide) supply chain fragility in rural districts',
      'Severe architectural incompatibility between imported equipment and hospital physical layouts',
      'Fragmented sub-contractors creating accountability voids during commissioning'
    ],
    mindCraftSolutions: [
      'Turnkey Pressure Swing Adsorption (PSA) oxygen plant commercial structuring',
      'Architectural and biomedical co-engineering design specifications',
      'Unified vendor commissioning oversight with milestone penalty clauses'
    ],
    focusAreas: [
      'ICU & Operating Theatre Turnkey Specs',
      'On-site Medical Oxygen Generation',
      'Clean Room HVAC & Sterilization Systems',
      'Radiation Oncology Shielding Architecture'
    ],
    capabilities: [
      { name: 'Infrastructure Capital Sizing', url: '/what-we-do/business-consulting' },
      { name: 'Biomedical Facility Commissioning', url: '/how-we-work' },
      { name: 'Predictive Plant Maintenance AI', url: '/what-we-do/ai-enterprise-solutions' }
    ],
    pathwaySteps: [
      { label: '01 Feasibility & Sizing', desc: 'Empirical catchment population demand modeling' },
      { label: '02 Architectural Specs', desc: 'Radiation shielding and sterile airflow engineering' },
      { label: '03 Commissioning & Testing', desc: '72-hour continuous stress testing of all subsystems' },
      { label: '04 Handover & Training', desc: 'Full institutional operations transfer' }
    ]
  },
  {
    id: 'consumables',
    name: 'Surgical & Clinical Consumables',
    shortName: 'Surgical Consumables',
    tagline: 'High-volume clinical supplies, sterilization compliance, and domestic manufacturing.',
    image: '/assets/images/african_field_research_1788986691596.jpg',
    imageAlt: 'Field supply chain researchers conducting audit of clinical consumables stock at regional warehouse',
    color: 'var(--accent)',
    regulatoryBodies: ['National Bureau of Standards (KEBS / SON)', 'ISO 13485 Standards'],
    keyChallenges: [
      'Extreme price sensitivity with high exposure to sub-standard grey-market imports',
      'Volatile global shipping rates creating periodic catastrophic stock-outs in surgery',
      'Under-developed local sterilization (EtO/Gamma) infrastructure'
    ],
    mindCraftSolutions: [
      'Feasibility and business case modeling for domestic consumable manufacturing under AfCFTA',
      'Group Purchasing Organization (GPO) collective procurement contracts for private hospital networks',
      'Strict quality audit protocols weed out adulterated products'
    ],
    focusAreas: [
      'Surgical Gloves, Drapes & Sutures',
      'Intravenous Cannulas & Infusion Sets',
      'Sterilization Assurance & Packaging',
      'AfCFTA Preferential Rule of Origin Trade'
    ],
    capabilities: [
      { name: 'AfCFTA Manufacturing Feasibility', url: '/what-we-do/business-consulting' },
      { name: 'Distributor Audits & Channel Mapping', url: '/what-we-do/market-research' },
      { name: 'Hospital Supply Chain AI Optimization', url: '/what-we-do/ai-enterprise-solutions' }
    ],
    pathwaySteps: [
      { label: '01 Quality Assurance', desc: 'ISO 13485 batch testing and sterile barrier audits' },
      { label: '02 Consolidated Sourcing', desc: 'Aggregating demand across private hospital consortia' },
      { label: '03 Direct Distribution', desc: 'Bypassing opportunistic broker layers' },
      { label: '04 Zero Stock-Out Buffer', desc: 'Dynamic safety stock reserves in regional hubs' }
    ]
  },
  {
    id: 'hospitals',
    name: 'Hospitals & Healthcare Networks',
    shortName: 'Hospitals & Networks',
    tagline: 'Clinical governance, digital health record modernization, and financial sustainability.',
    image: '/assets/images/african_executive_training_1788986677111.jpg',
    imageAlt: 'Executive healthcare board members reviewing hospital clinical efficiency indicators and digital transformation roadmap',
    color: 'var(--accent)',
    regulatoryBodies: ['Kenya Medical Practitioners and Dentists Council (KMPDC)', 'Health Professions Council of South Africa (HPCSA)', 'National Health Insurance Authorities (SHA/NHIF)'],
    keyChallenges: [
      'Transition from paper records to digital Electronic Medical Records (EMR) without staff attrition',
      'Delayed insurance claims reimbursement creating severe operational cash flow crises',
      'Clinical talent retention and continuous medical education gaps'
    ],
    mindCraftSolutions: [
      'Turnkey EMR architecture and clinical adoption change management programs',
      'Automated AI claims pre-submission validation preventing rejected insurance filings',
      'Hospital leadership development academies for nurse managers and department chairs'
    ],
    focusAreas: [
      'Tertiary Referral Hospital Modernization',
      'Multi-Site Primary Clinic Franchising',
      'National Health Insurance Integration',
      'Clinical Quality & Mortality Audits'
    ],
    capabilities: [
      { name: 'Hospital Operating Model Transformation', url: '/what-we-do/business-consulting' },
      { name: 'Automated Claims Verification AI', url: '/what-we-do/ai-enterprise-solutions' },
      { name: 'Physician & Executive AI Upskilling', url: '/what-we-do/ai-training' }
    ],
    pathwaySteps: [
      { label: '01 Baseline Diagnostic', desc: 'Clinical workflow and revenue cycle leakage review' },
      { label: '02 System Modernization', desc: 'Paperless digital clinical records implementation' },
      { label: '03 Staff Empowerment', desc: 'Intensive clinical literacy and protocol adoption' },
      { label: '04 Value-Based Outcomes', desc: 'Financial turnaround and improved patient recovery' }
    ]
  }
];

export const LifeSciencesEcosystemDiagram: React.FC<{ className?: string }> = ({ className = '' }) => {
  const { navigate } = useNavigation();
  const [selectedSectorId, setSelectedSectorId] = useState<string>('pharma');

  const activeSector = LIFE_SCIENCES_SECTORS.find((s) => s.id === selectedSectorId) || LIFE_SCIENCES_SECTORS[0];

  return (
    <div className={`border border-[var(--line)] bg-[var(--paper)] rounded-[2px] overflow-hidden ${className}`}>
      {/* Ecosystem Header */}
      <div className="p-5 sm:p-6 border-b border-[var(--line)] bg-[var(--paper-2)] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <div className="font-mono text-xs text-[var(--accent)] font-semibold uppercase tracking-widest">
            LIFE SCIENCES SECTOR ECOSYSTEM
          </div>
          <h3 className="font-display text-2xl sm:text-3xl font-bold text-[var(--ink-strong)]">
            Six interconnected healthcare domains across Africa.
          </h3>
        </div>
        <div className="font-mono text-xs text-[var(--ink-3)] bg-[var(--paper)] px-3 py-1.5 border border-[var(--line)] rounded-[2px] self-start sm:self-auto">
          Regulated Health Intelligence
        </div>
      </div>

      {/* Interactive Sector Switcher Strip */}
      <div className="p-4 sm:p-6 bg-[var(--paper)] border-b border-[var(--line)]">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2.5">
          {LIFE_SCIENCES_SECTORS.map((sector) => {
            const isSelected = sector.id === selectedSectorId;
            return (
              <button
                key={sector.id}
                onClick={() => setSelectedSectorId(sector.id)}
                className={`p-3 text-left border rounded-[2px] transition-all cursor-pointer flex flex-col justify-between ${
                  isSelected
                    ? 'bg-[var(--paper-2)] border-[var(--accent)] shadow-sm ring-1 ring-[var(--accent)]'
                    : 'bg-[var(--paper)] border-[var(--line)] hover:border-[var(--ink-3)]'
                }`}
              >
                <div className="flex items-center justify-between mb-1.5">
                  <span className="font-mono text-[10px] uppercase font-bold text-[var(--accent)]">
                    {sector.id}
                  </span>
                  <div className={`w-2 h-2 rounded-full ${isSelected ? 'bg-[var(--accent)]' : 'bg-[var(--line-2)]'}`} />
                </div>
                <div className="font-display font-semibold text-xs sm:text-sm text-[var(--ink-strong)] leading-snug">
                  {sector.shortName}
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {/* Detailed Selected Sector Canvas */}
      <div className="p-6 sm:p-8 bg-[var(--paper-2)]">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left: Sector Image & Clinical Pathway (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="border border-[var(--line)] bg-[var(--paper)] p-2 rounded-[2px] shadow-sm">
              <div className="aspect-[4/3] overflow-hidden rounded-[2px] relative group">
                <img
                  src={activeSector.image}
                  alt={activeSector.imageAlt}
                  className="w-full h-full object-cover grayscale-[15%] group-hover:grayscale-0 transition-all duration-500"
                  loading="lazy"
                />
                <div className="absolute top-2 left-2 bg-[var(--paper)]/90 backdrop-blur-xs px-2.5 py-1 text-[10px] font-mono text-[var(--ink-strong)] font-semibold border border-[var(--line)]">
                  {activeSector.shortName}
                </div>
              </div>
              <p className="font-mono text-[11px] text-[var(--ink-3)] p-2 leading-relaxed">
                {activeSector.imageAlt}
              </p>
            </div>

            {/* Visual Step-by-Step Clinical Pathway */}
            <div className="p-5 bg-[var(--paper)] border border-[var(--line)] rounded-[2px] space-y-3 font-mono text-xs">
              <div className="text-[var(--accent)] font-semibold uppercase tracking-wider text-[11px] pb-2 border-b border-[var(--line)]">
                Operational Delivery Pathway
              </div>
              <div className="space-y-2.5">
                {activeSector.pathwaySteps.map((step, idx) => (
                  <div key={idx} className="p-2.5 bg-[var(--paper-2)] border border-[var(--line)] rounded-[2px]">
                    <div className="font-semibold text-[var(--ink-strong)]">{step.label}</div>
                    <div className="text-[11px] text-[var(--ink-2)] mt-0.5">{step.desc}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right: Technical Deep Dive & MindCraft Solutions (7 cols) */}
          <div className="lg:col-span-7 space-y-6 font-body">
            <div>
              <span className="font-mono text-xs text-[var(--accent)] font-semibold uppercase tracking-wider">
                DOMAIN ARCHITECTURE
              </span>
              <h4 className="font-display text-2xl sm:text-3xl font-bold text-[var(--ink-strong)] mt-1">
                {activeSector.name}
              </h4>
              <p className="text-base text-[var(--ink)] mt-2 leading-relaxed italic">
                "{activeSector.tagline}"
              </p>
            </div>

            {/* Regulatory Bodies Badges */}
            <div className="space-y-1.5">
              <div className="font-mono text-[10px] uppercase text-[var(--ink-3)] font-semibold tracking-wider">
                Governing Regulatory Frameworks & Authorities:
              </div>
              <div className="flex flex-wrap gap-1.5">
                {activeSector.regulatoryBodies.map((reg) => (
                  <span
                    key={reg}
                    className="px-2.5 py-1 bg-[var(--paper)] border border-[var(--line)] text-xs font-mono text-[var(--ink-strong)] font-medium rounded-[2px]"
                  >
                    {reg}
                  </span>
                ))}
              </div>
            </div>

            {/* Focus Areas Grid */}
            <div className="space-y-2">
              <div className="font-mono text-[10px] uppercase text-[var(--ink-3)] font-semibold tracking-wider">
                Core Specialization Areas:
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {activeSector.focusAreas.map((area, idx) => (
                  <div key={idx} className="p-2.5 bg-[var(--paper)] border border-[var(--line)] rounded-[2px] font-mono text-xs text-[var(--ink)] flex items-center space-x-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent)] shrink-0" />
                    <span>{area}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Solutions Applied */}
            <div className="p-5 bg-[var(--paper)] border border-[var(--line)] rounded-[2px] space-y-3">
              <div className="font-mono text-xs text-[var(--accent)] font-semibold uppercase tracking-wider">
                MindCraft Intervention & Measurable Value
              </div>
              <ul className="space-y-2 text-xs text-[var(--ink-2)]">
                {activeSector.mindCraftSolutions.map((sol, idx) => (
                  <li key={idx} className="flex items-start space-x-2">
                    <span className="font-mono text-[var(--accent)] font-bold shrink-0">→</span>
                    <span className="leading-relaxed">{sol}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Capabilities Cross-Link Action */}
            <div className="p-4 bg-[var(--paper)] border border-[var(--line)] rounded-[2px] flex flex-wrap items-center justify-between gap-4 font-mono text-xs">
              <div className="space-y-1">
                <span className="text-[10px] uppercase text-[var(--ink-3)] block font-semibold">
                  Deploy MindCraft into this Sector
                </span>
                <span className="text-[var(--ink-strong)] font-medium">
                  Compose an advisory mandate for {activeSector.shortName}
                </span>
              </div>
              <button
                onClick={() => navigate(`/explore?industry=${encodeURIComponent(activeSector.name)}`)}
                className="px-4 py-2.5 bg-[var(--accent)] hover:bg-[var(--accent-2)] text-white font-semibold rounded-[2px] transition-colors inline-flex items-center space-x-2 cursor-pointer shadow-xs"
              >
                <span>Compose Mandate in Explorer</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
