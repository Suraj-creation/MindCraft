import React, { useState } from 'react';
import { ArrowUpRight, ArrowRight, BookOpen, Clock, Tag, Search, Filter } from 'lucide-react';
import { useNavigation } from '../context/NavigationContext';

interface Article {
  id: string;
  title: string;
  category: string;
  readTime: string;
  date: string;
  desk: string;
  summary: string;
  fullAnalysis: string;
}

const INSIGHTS_ARTICLES: Article[] = [
  {
    id: 'pharma-harmonization-2026',
    title: 'Harmonization and Sovereignty: Navigating African Pharmaceutical Regulation in 2026.',
    category: 'Life Sciences',
    readTime: '12 min read',
    date: 'February 2026',
    desk: 'Life Sciences Regulatory Desk · Nairobi',
    summary: 'An empirical assessment of the African Medicines Agency rollout, regulatory divergence across Kenya, Nigeria, and South Africa, and commercial implications for global pharma manufacturers.',
    fullAnalysis: `The regulatory landscape for pharmaceuticals and biologics across Sub-Saharan Africa is undergoing its most profound structural realignment in three decades. With the operationalization of the African Medicines Agency (AMA) treaty and accelerated joint evaluation protocols under the East African Community Medicines Regulatory Harmonization (EAC-MRH) initiative, manufacturers face both streamlined market access and new sovereignty mandates.\n\nWhile pan-continental harmonization promises to compress regulatory timelines from 24+ months down to under 180 days for priority molecules, national regulatory agencies—notably Kenya's Pharmacy and Poisons Board (PPB), Nigeria's NAFDAC, and South Africa's SAHPRA—continue to maintain stringent domestic post-marketing surveillance and localized packaging requirements.\n\nOur empirical research indicates that multinational pharmaceutical manufacturers who adopt a multi-tier regulatory filing strategy—combining regional joint review dossiers with localized pharmacovigilance partnerships—achieve 40% faster formulary inclusion compared to those relying on legacy unilateral distributor submissions.`
  },
  {
    id: 'sovereign-ai-africa',
    title: 'The Sovereignty Imperative in African Enterprise AI Architectures.',
    category: 'Applied AI',
    readTime: '9 min read',
    date: 'January 2026',
    desk: 'Systems Architecture Lab · Nairobi',
    summary: 'Why forward-looking African financial and clinical institutions are transitioning from multi-tenant cloud APIs to private, localized model deployments.',
    fullAnalysis: `Enterprise artificial intelligence adoption across Africa has reached an inflection point. Early experimentation with consumer-grade cloud APIs and multi-tenant generative models has quickly collided with strict data sovereignty mandates—such as Kenya's Data Protection Act, Nigeria's NDPR, and South Africa's POPIA.\n\nFor banking, healthcare, and governmental institutions, routing sensitive patient records or financial telemetry through offshore data centers poses unacceptable legal, geopolitical, and operational risks.\n\nAt MindCraft, our engineering practice is pioneering private, sovereign AI deployments. By leveraging parameter-efficient fine-tuning on open-weights foundation models, containerized in local cloud or on-premises servers, institutions achieve superior domain accuracy with zero cross-border data leakage and complete deterministic auditability.`
  },
  {
    id: 'cold-chain-resilience',
    title: 'Cold-Chain Resilience & Distribution Corridors across East Africa.',
    category: 'Market Intelligence',
    readTime: '14 min read',
    date: 'January 2026',
    desk: 'Supply Chain Intelligence Desk · Nairobi & Mombasa',
    summary: 'Quantitative tracking of pharmaceutical transport logistics and temperature integrity monitoring along the Northern and Central Transit Corridors.',
    fullAnalysis: `The Northern Transit Corridor connecting the Port of Mombasa to Uganda, Rwanda, Burundi, and Eastern DRC remains the commercial lifeline of East Africa. Yet, maintaining unbroken cold chain integrity for temperature-sensitive biologics, vaccines, and insulin continues to represent a primary margin leakage point for healthcare suppliers.\n\nOur two-year longitudinal tracking study across 4,200 km of freight routes highlights three critical failure vectors: border post customs dwell times, unmonitored transfer warehousing at transshipment hubs, and inconsistent secondary refrigeration in rural distribution networks.\n\nWe present an empirical logistics framework combining IoT telematics with predictive customs pre-clearance algorithms that reduces dwell times by 65% while safeguarding biological potency.`
  },
  {
    id: 'hospital-triage-ai',
    title: 'Automating Tertiary Hospital Triage in High-Volume African Clinical Centers.',
    category: 'Life Sciences',
    readTime: '11 min read',
    date: 'February 2026',
    desk: 'Clinical AI Advisory · Nairobi',
    summary: 'Clinical trial outcomes and operational metrics from deploying automated acuity scoring models in referral emergency departments.',
    fullAnalysis: `High patient-to-clinician ratios in urban African referral hospitals place immense stress on emergency triage nurses and junior medical officers. In crowded outpatient casualty wards, delayed identification of deteriorating patients directly correlates with elevated 24-hour mortality rates.\n\nThis paper details the deployment of an offline-first, mobile-assisted triage scoring system adapted from the South African Triage Scale (SATS) and enhanced with ambient speech recognition for local clinical dialects.\n\nThe system demonstrated a 34% reduction in door-to-doctor time for Category 1 and 2 emergency cases, while decreasing administrative charting burden by over 45 minutes per nurse shift.`
  },
  {
    id: 'afcfta-health-trade',
    title: 'AfCFTA and Health Sovereignty: Tariff Realignment for Medical Consumables.',
    category: 'Policy & Regulation',
    readTime: '10 min read',
    date: 'December 2025',
    desk: 'Trade & Economic Advisory · Nairobi',
    summary: 'How preferential rules of origin under the African Continental Free Trade Area are reshaping regional medical manufacturing economics.',
    fullAnalysis: `The African Continental Free Trade Area (AfCFTA) represents a potential $3.4 trillion unified market, yet intra-African trade in pharmaceuticals and medical devices historically accounted for less than 3% of total consumption.\n\nWith new Rules of Origin (RoO) protocols enacted for medical consumables—including surgical gloves, syringes, and basic diagnostic reagents—local African manufacturing facilities are gaining significant price competitiveness against low-cost imported alternatives.\n\nThis intelligence briefing analyzes the break-even dynamics for setting up secondary manufacturing and packaging plants in special economic zones across Kenya, Ghana, and Rwanda.`
  }
];

const CATEGORIES = ['All Categories', 'Life Sciences', 'Applied AI', 'Market Intelligence', 'Policy & Regulation'];

export const Insights: React.FC = () => {
  const { navigate } = useNavigation();
  const [selectedCategory, setSelectedCategory] = useState('All Categories');
  const [activeArticleId, setActiveArticleId] = useState<string | null>(null);

  const filteredArticles = selectedCategory === 'All Categories'
    ? INSIGHTS_ARTICLES
    : INSIGHTS_ARTICLES.filter((a) => a.category === selectedCategory);

  const selectedArticle = INSIGHTS_ARTICLES.find((a) => a.id === activeArticleId);

  return (
    <div className="space-y-0">
      {/* Editorial Header */}
      <section className="bg-[var(--paper)] pt-12 pb-16 lg:pt-16 lg:pb-24 border-b border-[var(--line)]">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 space-y-8">
          <div className="flex items-center space-x-3 text-xs font-mono text-[var(--ink-3)] uppercase tracking-wider">
            <span className="text-[var(--accent)] font-semibold">RESEARCH & EDITORIAL DESK</span>
            <span>·</span>
            <span>INTELLECTUAL PERSPECTIVES</span>
            <span>·</span>
            <span>EMPIRICAL PAPERS</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            <div className="lg:col-span-8 space-y-6">
              <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[var(--ink-strong)] leading-tight">
                Insights & Research.
              </h1>
              <p className="font-body text-lg text-[var(--ink)] leading-relaxed max-w-3xl">
                Empirical papers, policy briefs, and architectural analyses published by our Nairobi research desk, Life Sciences specialists, and enterprise AI engineering leads.
              </p>
            </div>

            <div className="lg:col-span-4 p-6 bg-[var(--paper-2)] border border-[var(--line)] rounded-[2px] space-y-3 font-mono text-xs">
              <div className="text-[var(--accent)] font-semibold uppercase tracking-wider">
                Research Desk Inquiries
              </div>
              <p className="text-[var(--ink-2)] leading-relaxed">
                Need proprietary custom research or bespoke epidemiology market sizing for your executive committee?
              </p>
              <button
                onClick={() => navigate('/contact?topic=custom-research')}
                className="text-[var(--accent)] font-semibold hover:underline inline-flex items-center space-x-1 pt-1 cursor-pointer"
              >
                <span>Commission Custom Research →</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Lead Dossier */}
      <section className="py-12 bg-[var(--paper-2)] border-b border-[var(--line)]">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
          <div className="p-8 bg-[var(--paper)] border border-[var(--line)] rounded-[2px] grid grid-cols-1 lg:grid-cols-12 gap-8 items-center shadow-xs">
            <div className="lg:col-span-8 space-y-4">
              <div className="flex items-center space-x-3 font-mono text-xs text-[var(--accent)] font-semibold uppercase">
                <span>FLAGSHIP DOSSIER</span>
                <span>·</span>
                <span>FEBRUARY 2026</span>
                <span>·</span>
                <span>12 MIN READ</span>
              </div>
              <h2 className="font-display text-3xl font-bold text-[var(--ink-strong)] leading-tight">
                Harmonization and Sovereignty: Navigating African Pharmaceutical Regulation in 2026.
              </h2>
              <p className="font-body text-sm text-[var(--ink-2)] leading-relaxed">
                An empirical assessment of the African Medicines Agency rollout, regulatory divergence across Kenya, Nigeria, and South Africa, and commercial implications for global pharma manufacturers.
              </p>
              <div className="font-mono text-xs text-[var(--ink-3)]">
                Author: Life Sciences Regulatory Practice Group · Nairobi
              </div>
            </div>

            <div className="lg:col-span-4 flex flex-col space-y-3">
              <button
                onClick={() => setActiveArticleId('pharma-harmonization-2026')}
                className="px-6 py-3.5 bg-[var(--accent)] hover:bg-[var(--accent-2)] text-white text-xs font-mono uppercase tracking-wider font-semibold rounded-[2px] transition-colors text-center cursor-pointer shadow-sm"
              >
                Read Complete Dossier
              </button>
              <button
                onClick={() => navigate('/contact?topic=pharma-regulation')}
                className="px-6 py-3 bg-[var(--paper-2)] hover:bg-[var(--line)] border border-[var(--line)] text-xs font-mono text-[var(--ink-strong)] rounded-[2px] transition-colors text-center cursor-pointer"
              >
                Brief Our Regulatory Leads
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Filterable Articles Feed */}
      <section className="py-16 lg:py-24 bg-[var(--paper)] border-b border-[var(--line)]">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 space-y-12">
          {/* Filter Chips */}
          <div className="flex flex-wrap gap-2 pb-4 border-b border-[var(--line)]">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3 py-1.5 font-mono text-xs rounded-[2px] transition-colors cursor-pointer ${
                  selectedCategory === cat
                    ? 'bg-[var(--accent)] text-white font-semibold'
                    : 'bg-[var(--paper-2)] text-[var(--ink-2)] hover:text-[var(--ink-strong)] border border-[var(--line)]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Articles Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredArticles.map((article) => (
              <article
                key={article.id}
                onClick={() => setActiveArticleId(article.id)}
                className="p-6 bg-[var(--paper-2)] border border-[var(--line)] rounded-[2px] space-y-4 hover:border-[var(--accent)] transition-all cursor-pointer flex flex-col justify-between group"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between font-mono text-[10px] text-[var(--ink-3)]">
                    <span className="text-[var(--accent)] font-semibold uppercase">{article.category}</span>
                    <span>{article.readTime}</span>
                  </div>
                  <h3 className="font-display font-bold text-lg text-[var(--ink-strong)] group-hover:text-[var(--accent)] transition-colors leading-snug">
                    {article.title}
                  </h3>
                  <p className="font-body text-xs text-[var(--ink-2)] leading-relaxed">
                    {article.summary}
                  </p>
                </div>

                <div className="pt-4 border-t border-[var(--line)] font-mono text-[10px] text-[var(--ink-3)] flex items-center justify-between">
                  <span>{article.desk}</span>
                  <span className="text-[var(--accent)] font-semibold group-hover:translate-x-1 transition-transform inline-flex items-center">
                    <span>Read</span>
                    <ArrowRight className="w-3 h-3 ml-1" />
                  </span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Article Detail Reading Modal */}
      {selectedArticle && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
          <div className="bg-[var(--paper)] max-w-3xl w-full p-6 sm:p-10 border border-[var(--line)] rounded-[2px] shadow-2xl space-y-6 my-8">
            <div className="flex items-center justify-between pb-4 border-b border-[var(--line)]">
              <div className="font-mono text-xs text-[var(--accent)] font-semibold uppercase">
                {selectedArticle.category} · {selectedArticle.readTime}
              </div>
              <button
                onClick={() => setActiveArticleId(null)}
                className="font-mono text-xs text-[var(--ink-3)] hover:text-[var(--ink-strong)] px-2 py-1 border border-[var(--line)] rounded-[2px] cursor-pointer"
              >
                Close ✕
              </button>
            </div>

            <div className="space-y-2">
              <h2 className="font-display text-2xl sm:text-3xl font-bold text-[var(--ink-strong)] leading-tight">
                {selectedArticle.title}
              </h2>
              <div className="font-mono text-xs text-[var(--ink-3)]">
                {selectedArticle.desk} · {selectedArticle.date}
              </div>
            </div>

            <div className="font-body text-sm text-[var(--ink)] leading-relaxed space-y-4 border-t border-[var(--line)] pt-4 whitespace-pre-line">
              {selectedArticle.fullAnalysis}
            </div>

            <div className="pt-6 border-t border-[var(--line)] flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="font-mono text-xs text-[var(--ink-3)]">
                MindCraft Intellectual Property · Citations Permitted with Attribution
              </div>
              <button
                onClick={() => {
                  setActiveArticleId(null);
                  navigate(`/contact?topic=${encodeURIComponent(selectedArticle.title)}`);
                }}
                className="px-5 py-2.5 bg-[var(--accent)] hover:bg-[var(--accent-2)] text-white text-xs font-mono uppercase tracking-wider font-semibold rounded-[2px] cursor-pointer"
              >
                Discuss this Analysis with Authors
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
