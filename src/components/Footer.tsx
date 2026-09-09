import React from 'react';
import { ArrowUp, MapPin, ArrowUpRight } from 'lucide-react';
import { useNavigation } from '../context/NavigationContext';

export const Footer: React.FC = () => {
  const { navigate } = useNavigation();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[var(--paper)] border-t border-[var(--line-2)] pt-16 pb-12 text-[var(--ink-2)] text-xs font-mono">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 space-y-12">
        {/* Top Tier: Wordmark, Coordinate Stamp & Directory */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10">
          {/* Brand Col (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <div className="space-y-1">
              <button
                onClick={() => navigate('/')}
                className="font-display text-xl font-bold tracking-tight text-[var(--ink-strong)] hover:text-[var(--accent)] transition-colors text-left block cursor-pointer"
              >
                MINDCRAFT
              </button>
              <span className="text-[11px] text-[var(--ink-3)] uppercase tracking-wider block">
                Consultancy Services · Est. 2026
              </span>
            </div>

            <p className="font-body text-xs text-[var(--ink-2)] leading-relaxed max-w-sm">
              A Nairobi-headquartered strategic intelligence consultancy pairing deep Life Sciences expertise with market research, business consulting, AI enterprise solutions, and capability training across Africa and global corridors.
            </p>

            <div className="pt-2 text-[11px] text-[var(--ink-3)] flex items-center space-x-2">
              <MapPin className="w-3.5 h-3.5 text-[var(--accent)]" />
              <span>Nairobi, Kenya · 1°17′S, 36°49′E</span>
            </div>

            <div className="pt-1 text-[11px] text-[var(--ink-3)]">
              Direct: <a href="mailto:info@mindcraftconsultancy.com" className="hover:text-[var(--accent)] underline">info@mindcraftconsultancy.com</a>
            </div>
          </div>

          {/* Directory Link Columns (8 cols) */}
          <div className="lg:col-span-8 grid grid-cols-2 sm:grid-cols-4 gap-8">
            {/* Col 1: What We Do */}
            <div className="space-y-3">
              <div className="text-[11px] font-semibold text-[var(--ink-strong)] uppercase tracking-wider">
                What We Do
              </div>
              <ul className="space-y-2 text-[12px]">
                <li><button onClick={() => navigate('/what-we-do')} className="hover:text-[var(--accent)] text-left cursor-pointer">The Integrated Engine</button></li>
                <li><button onClick={() => navigate('/what-we-do/business-consulting')} className="hover:text-[var(--accent)] text-left cursor-pointer">Business Consulting</button></li>
                <li><button onClick={() => navigate('/what-we-do/market-research')} className="hover:text-[var(--accent)] text-left cursor-pointer">Market Research</button></li>
                <li><button onClick={() => navigate('/what-we-do/ai-training')} className="hover:text-[var(--accent)] text-left cursor-pointer">AI Training & Literacy</button></li>
                <li><button onClick={() => navigate('/what-we-do/ai-enterprise-solutions')} className="hover:text-[var(--accent)] text-left cursor-pointer">AI Enterprise Solutions</button></li>
              </ul>
            </div>

            {/* Col 2: Industries */}
            <div className="space-y-3">
              <div className="text-[11px] font-semibold text-[var(--ink-strong)] uppercase tracking-wider">
                Industries
              </div>
              <ul className="space-y-2 text-[12px]">
                <li><button onClick={() => navigate('/industries/life-sciences')} className="hover:text-[var(--accent)] text-[var(--accent)] font-semibold text-left cursor-pointer">Life Sciences Core</button></li>
                <li><button onClick={() => navigate('/industries')} className="hover:text-[var(--accent)] text-left cursor-pointer">All 20+ Verticals</button></li>
                <li><button onClick={() => navigate('/industries/life-sciences')} className="hover:text-[var(--accent)] text-left cursor-pointer">Pharmaceuticals</button></li>
                <li><button onClick={() => navigate('/industries/life-sciences')} className="hover:text-[var(--accent)] text-left cursor-pointer">Medical Devices</button></li>
                <li><button onClick={() => navigate('/industries/life-sciences')} className="hover:text-[var(--accent)] text-left cursor-pointer">Clinical Diagnostics</button></li>
              </ul>
            </div>

            {/* Col 3: Where We Work */}
            <div className="space-y-3">
              <div className="text-[11px] font-semibold text-[var(--ink-strong)] uppercase tracking-wider">
                Where We Work
              </div>
              <ul className="space-y-2 text-[12px]">
                <li><button onClick={() => navigate('/where-we-work')} className="hover:text-[var(--accent)] text-left cursor-pointer">Nairobi Command Node</button></li>
                <li><button onClick={() => navigate('/where-we-work')} className="hover:text-[var(--accent)] text-left cursor-pointer">East Africa (EAC)</button></li>
                <li><button onClick={() => navigate('/where-we-work')} className="hover:text-[var(--accent)] text-left cursor-pointer">West Africa (ECOWAS)</button></li>
                <li><button onClick={() => navigate('/where-we-work')} className="hover:text-[var(--accent)] text-left cursor-pointer">Southern Africa (SADC)</button></li>
                <li><button onClick={() => navigate('/where-we-work')} className="hover:text-[var(--accent)] text-left cursor-pointer">Europe & US Corridors</button></li>
              </ul>
            </div>

            {/* Col 4: Institution */}
            <div className="space-y-3">
              <div className="text-[11px] font-semibold text-[var(--ink-strong)] uppercase tracking-wider">
                Institution
              </div>
              <ul className="space-y-2 text-[12px]">
                <li><button onClick={() => navigate('/about')} className="hover:text-[var(--accent)] text-left cursor-pointer">About MindCraft</button></li>
                <li><button onClick={() => navigate('/how-we-work')} className="hover:text-[var(--accent)] text-left cursor-pointer">How We Work</button></li>
                <li><button onClick={() => navigate('/explore')} className="hover:text-[var(--accent)] text-left cursor-pointer">Strategic Explorer</button></li>
                <li><button onClick={() => navigate('/insights')} className="hover:text-[var(--accent)] text-left cursor-pointer">Insights & Research</button></li>
                <li><button onClick={() => navigate('/contact')} className="hover:text-[var(--accent)] font-semibold text-[var(--ink-strong)] text-left cursor-pointer flex items-center space-x-1"><span>Start a Conversation</span><ArrowUpRight className="w-3 h-3" /></button></li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Utility Bar */}
        <div className="pt-8 border-t border-[var(--line)] flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-[var(--ink-3)]">
          <div className="flex flex-wrap items-center gap-3">
            <span>© 2026 MindCraft Consultancy Services Ltd.</span>
            <span>·</span>
            <span>All rights reserved</span>
            <span>·</span>
            <span>African in Context · Global in Ambition</span>
          </div>

          <div className="flex items-center space-x-6">
            <button
              onClick={() => navigate('/contact')}
              className="hover:text-[var(--ink-strong)] transition-colors cursor-pointer"
            >
              Consultative Intake
            </button>
            <button
              onClick={scrollToTop}
              className="flex items-center space-x-1 hover:text-[var(--ink-strong)] transition-colors cursor-pointer"
              aria-label="Back to top"
            >
              <span>Back to top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
