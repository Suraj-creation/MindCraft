import React, { useState, useEffect, useRef } from 'react';
import { Menu, X, ArrowUpRight, ChevronDown, Sparkles, Building2, Stethoscope, Compass, BookOpen, Layers } from 'lucide-react';
import { useNavigation } from '../context/NavigationContext';

export const Navigation: React.FC = () => {
  const { currentPath, navigate, openConversationModal } = useNavigation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [whatWeDoOpen, setWhatWeDoOpen] = useState(false);
  const [industriesOpen, setIndustriesOpen] = useState(false);
  const [mobileWhatWeDoExpanded, setMobileWhatWeDoExpanded] = useState(false);
  const [mobileIndustriesExpanded, setMobileIndustriesExpanded] = useState(false);

  const whatWeDoRef = useRef<HTMLDivElement>(null);
  const industriesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (whatWeDoRef.current && !whatWeDoRef.current.contains(event.target as Node)) {
        setWhatWeDoOpen(false);
      }
      if (industriesRef.current && !industriesRef.current.contains(event.target as Node)) {
        setIndustriesOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setMobileMenuOpen(false);
        setWhatWeDoOpen(false);
        setIndustriesOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const handleLinkClick = (path: string) => {
    navigate(path);
    setMobileMenuOpen(false);
    setWhatWeDoOpen(false);
    setIndustriesOpen(false);
  };

  const isWhatWeDoActive = currentPath.startsWith('/what-we-do');
  const isIndustriesActive = currentPath.startsWith('/industries');

  return (
    <header
      id="site-header"
      className={`sticky top-0 z-50 transition-colors duration-200 ${
        isScrolled
          ? 'bg-[var(--paper)]/95 backdrop-blur-md border-b border-[var(--line)] shadow-[0_4px_24px_rgba(0,0,0,0.04)]'
          : 'bg-[var(--paper)] border-b border-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        <div className="flex items-center justify-between h-20">
          {/* Brand Wordmark & Nairobi Coordinate Anchor */}
          <button
            onClick={() => handleLinkClick('/')}
            id="nav-logo"
            className="group flex flex-col text-left focus:outline-none cursor-pointer"
            aria-label="MindCraft Consultancy Services, Nairobi"
          >
            <span className="font-display text-xl sm:text-2xl font-bold tracking-tight text-[var(--ink-strong)] group-hover:text-[var(--accent)] transition-colors">
              MINDCRAFT
            </span>
            <span className="font-mono text-[10px] tracking-widest text-[var(--ink-3)] uppercase">
              Nairobi · Est. 2026
            </span>
          </button>

          {/* Desktop Navigation Links */}
          <nav
            id="desktop-nav"
            className="hidden lg:flex items-center space-x-6 xl:space-x-8 text-[13px] font-mono tracking-tight text-[var(--ink-2)]"
            aria-label="Primary site navigation"
          >
            {/* Home */}
            <button
              onClick={() => handleLinkClick('/')}
              className={`py-2 border-b-2 transition-colors cursor-pointer ${
                currentPath === '/'
                  ? 'text-[var(--ink-strong)] border-[var(--accent)] font-semibold'
                  : 'border-transparent hover:text-[var(--ink-strong)] hover:border-[var(--line-2)]'
              }`}
            >
              Home
            </button>

            {/* About */}
            <button
              onClick={() => handleLinkClick('/about')}
              className={`py-2 border-b-2 transition-colors cursor-pointer ${
                currentPath === '/about'
                  ? 'text-[var(--ink-strong)] border-[var(--accent)] font-semibold'
                  : 'border-transparent hover:text-[var(--ink-strong)] hover:border-[var(--line-2)]'
              }`}
            >
              About
            </button>

            {/* What We Do (Dropdown Mega Menu) */}
            <div
              ref={whatWeDoRef}
              className="relative"
              onMouseEnter={() => setWhatWeDoOpen(true)}
              onMouseLeave={() => setWhatWeDoOpen(false)}
            >
              <button
                onClick={() => handleLinkClick('/what-we-do')}
                className={`flex items-center space-x-1.5 py-2 border-b-2 transition-colors cursor-pointer ${
                  isWhatWeDoActive
                    ? 'text-[var(--ink-strong)] border-[var(--accent)] font-semibold'
                    : 'border-transparent hover:text-[var(--ink-strong)] hover:border-[var(--line-2)]'
                }`}
                aria-expanded={whatWeDoOpen}
              >
                <span>What We Do</span>
                <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${whatWeDoOpen ? 'rotate-180 text-[var(--accent)]' : ''}`} />
              </button>

              {/* What We Do Dropdown Panel */}
              {whatWeDoOpen && (
                <div className="absolute top-full left-1/2 -translate-x-1/2 w-[520px] bg-[var(--paper)] border border-[var(--line)] shadow-xl p-5 mt-1 rounded-[2px] z-50 text-left font-body">
                  <div className="pb-3 border-b border-[var(--line)] mb-4 flex items-center justify-between">
                    <div>
                      <div className="font-mono text-[10px] uppercase tracking-widest text-[var(--ink-3)]">The Integrated Engine</div>
                      <div className="font-display font-semibold text-sm text-[var(--ink-strong)]">Four disciplines, one continuous intelligence loop</div>
                    </div>
                    <button
                      onClick={() => handleLinkClick('/what-we-do')}
                      className="text-xs font-mono text-[var(--accent)] hover:underline inline-flex items-center space-x-1 cursor-pointer"
                    >
                      <span>Overview</span>
                      <ArrowUpRight className="w-3 h-3" />
                    </button>
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <button
                      onClick={() => handleLinkClick('/what-we-do/business-consulting')}
                      className="group p-2.5 rounded-[2px] hover:bg-[var(--paper-2)] transition-colors text-left border border-transparent hover:border-[var(--line)] cursor-pointer"
                    >
                      <div className="font-mono text-[10px] text-[var(--accent)] font-semibold">01 · STRATEGY</div>
                      <div className="font-display font-semibold text-[13px] text-[var(--ink-strong)] group-hover:text-[var(--accent)] transition-colors">
                        Business Consulting
                      </div>
                      <div className="text-[11px] text-[var(--ink-3)] leading-snug mt-0.5">
                        Corporate strategy, digital & AI transformation, organizational design.
                      </div>
                    </button>

                    <button
                      onClick={() => handleLinkClick('/what-we-do/market-research')}
                      className="group p-2.5 rounded-[2px] hover:bg-[var(--paper-2)] transition-colors text-left border border-transparent hover:border-[var(--line)] cursor-pointer"
                    >
                      <div className="font-mono text-[10px] text-[var(--accent)] font-semibold">02 · INTELLIGENCE</div>
                      <div className="font-display font-semibold text-[13px] text-[var(--ink-strong)] group-hover:text-[var(--accent)] transition-colors">
                        Market Research
                      </div>
                      <div className="text-[11px] text-[var(--ink-3)] leading-snug mt-0.5">
                        Primary fieldwork across 45 markets, desk research, program impact.
                      </div>
                    </button>

                    <button
                      onClick={() => handleLinkClick('/what-we-do/ai-training')}
                      className="group p-2.5 rounded-[2px] hover:bg-[var(--paper-2)] transition-colors text-left border border-transparent hover:border-[var(--line)] cursor-pointer"
                    >
                      <div className="font-mono text-[10px] text-[var(--accent)] font-semibold">03 · EMBEDMENT</div>
                      <div className="font-display font-semibold text-[13px] text-[var(--ink-strong)] group-hover:text-[var(--accent)] transition-colors">
                        AI Training & Literacy
                      </div>
                      <div className="text-[11px] text-[var(--ink-3)] leading-snug mt-0.5">
                        Executive AI masterclasses, functional workflows, responsible governance.
                      </div>
                    </button>

                    <button
                      onClick={() => handleLinkClick('/what-we-do/ai-enterprise-solutions')}
                      className="group p-2.5 rounded-[2px] hover:bg-[var(--paper-2)] transition-colors text-left border border-transparent hover:border-[var(--line)] cursor-pointer"
                    >
                      <div className="font-mono text-[10px] text-[var(--accent)] font-semibold">04 · IMPLEMENTATION</div>
                      <div className="font-display font-semibold text-[13px] text-[var(--ink-strong)] group-hover:text-[var(--accent)] transition-colors">
                        AI Enterprise Solutions
                      </div>
                      <div className="text-[11px] text-[var(--ink-3)] leading-snug mt-0.5">
                        Custom LLMs, predictive analytics, RPA & clinical AI solutions.
                      </div>
                    </button>
                  </div>
                </div>
              )}
            </div>

            {/* Industries (Dropdown) */}
            <div
              ref={industriesRef}
              className="relative"
              onMouseEnter={() => setIndustriesOpen(true)}
              onMouseLeave={() => setIndustriesOpen(false)}
            >
              <button
                onClick={() => handleLinkClick('/industries')}
                className={`flex items-center space-x-1.5 py-2 border-b-2 transition-colors cursor-pointer ${
                  isIndustriesActive
                    ? 'text-[var(--ink-strong)] border-[var(--accent)] font-semibold'
                    : 'border-transparent hover:text-[var(--ink-strong)] hover:border-[var(--line-2)]'
                }`}
                aria-expanded={industriesOpen}
              >
                <span>Industries</span>
                <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${industriesOpen ? 'rotate-180 text-[var(--accent)]' : ''}`} />
              </button>

              {/* Industries Dropdown */}
              {industriesOpen && (
                <div className="absolute top-full left-1/2 -translate-x-1/2 w-80 bg-[var(--paper)] border border-[var(--line)] shadow-xl p-4 mt-1 rounded-[2px] z-50 text-left font-body">
                  {/* Spotlight: Life Sciences */}
                  <button
                    onClick={() => handleLinkClick('/industries/life-sciences')}
                    className="w-full p-3 rounded-[2px] bg-[var(--paper-2)] border border-[var(--line-2)] hover:border-[var(--accent)] text-left mb-3 group transition-colors cursor-pointer"
                  >
                    <div className="flex items-center justify-between mb-1">
                      <span className="font-mono text-[9px] uppercase tracking-wider text-[var(--accent)] font-semibold px-1.5 py-0.5 bg-[var(--accent-soft)]">
                        Core Heritage
                      </span>
                      <ArrowUpRight className="w-3.5 h-3.5 text-[var(--accent)]" />
                    </div>
                    <div className="font-display font-semibold text-sm text-[var(--ink-strong)] group-hover:text-[var(--accent)] transition-colors">
                      Life Sciences Practice
                    </div>
                    <div className="text-[11px] text-[var(--ink-3)] leading-tight mt-1">
                      Pharmaceuticals, medical devices, diagnostics, surgical & healthcare providers.
                    </div>
                  </button>

                  {/* All Industries */}
                  <button
                    onClick={() => handleLinkClick('/industries')}
                    className="w-full p-2.5 rounded-[2px] hover:bg-[var(--paper-2)] text-left group transition-colors cursor-pointer border border-transparent hover:border-[var(--line)]"
                  >
                    <div className="font-display font-semibold text-[13px] text-[var(--ink-strong)] group-hover:text-[var(--accent)] transition-colors">
                      All Industry Verticals
                    </div>
                    <div className="text-[11px] text-[var(--ink-3)] leading-tight mt-0.5">
                      Explore our depth across 20+ diversified economic sectors.
                    </div>
                  </button>
                </div>
              )}
            </div>

            {/* Where We Work */}
            <button
              onClick={() => handleLinkClick('/where-we-work')}
              className={`py-2 border-b-2 transition-colors cursor-pointer ${
                currentPath === '/where-we-work'
                  ? 'text-[var(--ink-strong)] border-[var(--accent)] font-semibold'
                  : 'border-transparent hover:text-[var(--ink-strong)] hover:border-[var(--line-2)]'
              }`}
            >
              Where We Work
            </button>

            {/* How We Work */}
            <button
              onClick={() => handleLinkClick('/how-we-work')}
              className={`py-2 border-b-2 transition-colors cursor-pointer ${
                currentPath === '/how-we-work'
                  ? 'text-[var(--ink-strong)] border-[var(--accent)] font-semibold'
                  : 'border-transparent hover:text-[var(--ink-strong)] hover:border-[var(--line-2)]'
              }`}
            >
              How We Work
            </button>

            {/* Explore */}
            <button
              onClick={() => handleLinkClick('/explore')}
              className={`py-2 border-b-2 transition-colors cursor-pointer flex items-center space-x-1 ${
                currentPath === '/explore'
                  ? 'text-[var(--ink-strong)] border-[var(--accent)] font-semibold'
                  : 'border-transparent hover:text-[var(--ink-strong)] hover:border-[var(--line-2)]'
              }`}
            >
              <Compass className="w-3.5 h-3.5 text-[var(--accent)]" />
              <span>Explore</span>
            </button>

            {/* Insights */}
            <button
              onClick={() => handleLinkClick('/insights')}
              className={`py-2 border-b-2 transition-colors cursor-pointer ${
                currentPath === '/insights'
                  ? 'text-[var(--ink-strong)] border-[var(--accent)] font-semibold'
                  : 'border-transparent hover:text-[var(--ink-strong)] hover:border-[var(--line-2)]'
              }`}
            >
              Insights
            </button>
          </nav>

          {/* Persistent CTA Button */}
          <div className="hidden sm:flex items-center space-x-4">
            <button
              id="header-cta-btn"
              onClick={() => handleLinkClick('/contact')}
              className="inline-flex items-center space-x-2 px-4 py-2 text-xs font-mono tracking-wider uppercase font-semibold text-white bg-[var(--accent)] hover:bg-[var(--accent-2)] rounded-[2px] transition-colors shadow-sm cursor-pointer"
            >
              <span>Start a Conversation</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Mobile Menu Toggle Button */}
          <div className="flex lg:hidden items-center">
            <button
              id="mobile-menu-toggle"
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-[var(--ink)] hover:text-[var(--accent)] focus:outline-none cursor-pointer"
              aria-label="Toggle navigation menu"
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Full-Screen Mobile Editorial Navigation Drawer */}
      {mobileMenuOpen && (
        <div
          id="mobile-menu-drawer"
          className="lg:hidden fixed inset-x-0 top-20 bottom-0 bg-[var(--paper)] z-50 overflow-y-auto border-t border-[var(--line)] px-6 py-8 flex flex-col justify-between"
        >
          <div className="space-y-6">
            <div className="font-mono text-[10px] text-[var(--ink-3)] uppercase tracking-widest pb-2 border-b border-[var(--line)]">
              Navigation Index
            </div>

            <div className="flex flex-col space-y-4 text-base font-display">
              {/* Home */}
              <button
                onClick={() => handleLinkClick('/')}
                className={`text-left py-1 text-lg ${currentPath === '/' ? 'text-[var(--accent)] font-bold' : 'text-[var(--ink-strong)]'}`}
              >
                Home
              </button>

              {/* About */}
              <button
                onClick={() => handleLinkClick('/about')}
                className={`text-left py-1 text-lg ${currentPath === '/about' ? 'text-[var(--accent)] font-bold' : 'text-[var(--ink-strong)]'}`}
              >
                About
              </button>

              {/* What We Do Accordion */}
              <div>
                <button
                  onClick={() => setMobileWhatWeDoExpanded(!mobileWhatWeDoExpanded)}
                  className="w-full flex items-center justify-between text-left py-1 text-lg text-[var(--ink-strong)]"
                >
                  <span className={isWhatWeDoActive ? 'text-[var(--accent)] font-bold' : ''}>What We Do</span>
                  <ChevronDown className={`w-4 h-4 transition-transform ${mobileWhatWeDoExpanded ? 'rotate-180 text-[var(--accent)]' : ''}`} />
                </button>

                {mobileWhatWeDoExpanded && (
                  <div className="pl-4 pt-2 pb-2 space-y-3 font-mono text-xs border-l-2 border-[var(--accent)] mt-2">
                    <button onClick={() => handleLinkClick('/what-we-do')} className="block text-left text-[var(--ink)] hover:text-[var(--accent)]">
                      The Integrated Engine (Overview)
                    </button>
                    <button onClick={() => handleLinkClick('/what-we-do/business-consulting')} className="block text-left text-[var(--ink-2)] hover:text-[var(--accent)]">
                      Business Consulting
                    </button>
                    <button onClick={() => handleLinkClick('/what-we-do/market-research')} className="block text-left text-[var(--ink-2)] hover:text-[var(--accent)]">
                      Market Research
                    </button>
                    <button onClick={() => handleLinkClick('/what-we-do/ai-training')} className="block text-left text-[var(--ink-2)] hover:text-[var(--accent)]">
                      AI Training & Digital Literacy
                    </button>
                    <button onClick={() => handleLinkClick('/what-we-do/ai-enterprise-solutions')} className="block text-left text-[var(--ink-2)] hover:text-[var(--accent)]">
                      AI Enterprise Solutions
                    </button>
                  </div>
                )}
              </div>

              {/* Industries Accordion */}
              <div>
                <button
                  onClick={() => setMobileIndustriesExpanded(!mobileIndustriesExpanded)}
                  className="w-full flex items-center justify-between text-left py-1 text-lg text-[var(--ink-strong)]"
                >
                  <span className={isIndustriesActive ? 'text-[var(--accent)] font-bold' : ''}>Industries</span>
                  <ChevronDown className={`w-4 h-4 transition-transform ${mobileIndustriesExpanded ? 'rotate-180 text-[var(--accent)]' : ''}`} />
                </button>

                {mobileIndustriesExpanded && (
                  <div className="pl-4 pt-2 pb-2 space-y-3 font-mono text-xs border-l-2 border-[var(--accent)] mt-2">
                    <button onClick={() => handleLinkClick('/industries/life-sciences')} className="block text-left text-[var(--accent)] font-semibold">
                      Life Sciences (Core Specialization)
                    </button>
                    <button onClick={() => handleLinkClick('/industries')} className="block text-left text-[var(--ink-2)] hover:text-[var(--accent)]">
                      All Industry Verticals (20+)
                    </button>
                  </div>
                )}
              </div>

              {/* Where We Work */}
              <button
                onClick={() => handleLinkClick('/where-we-work')}
                className={`text-left py-1 text-lg ${currentPath === '/where-we-work' ? 'text-[var(--accent)] font-bold' : 'text-[var(--ink-strong)]'}`}
              >
                Where We Work
              </button>

              {/* How We Work */}
              <button
                onClick={() => handleLinkClick('/how-we-work')}
                className={`text-left py-1 text-lg ${currentPath === '/how-we-work' ? 'text-[var(--accent)] font-bold' : 'text-[var(--ink-strong)]'}`}
              >
                How We Work
              </button>

              {/* Explore */}
              <button
                onClick={() => handleLinkClick('/explore')}
                className={`text-left py-1 text-lg flex items-center space-x-2 ${currentPath === '/explore' ? 'text-[var(--accent)] font-bold' : 'text-[var(--ink-strong)]'}`}
              >
                <Compass className="w-4 h-4 text-[var(--accent)]" />
                <span>Explore</span>
              </button>

              {/* Insights */}
              <button
                onClick={() => handleLinkClick('/insights')}
                className={`text-left py-1 text-lg ${currentPath === '/insights' ? 'text-[var(--accent)] font-bold' : 'text-[var(--ink-strong)]'}`}
              >
                Insights
              </button>
            </div>
          </div>

          {/* Mobile Footer Area */}
          <div className="pt-8 border-t border-[var(--line)] space-y-4">
            <div className="font-mono text-xs text-[var(--ink-3)] space-y-1">
              <div>Global Headquarters: Nairobi, Kenya</div>
              <div>Direct: info@mindcraftconsultancy.com</div>
            </div>

            <button
              onClick={() => handleLinkClick('/contact')}
              className="w-full py-3.5 text-xs font-mono tracking-wider uppercase font-semibold text-white bg-[var(--accent)] hover:bg-[var(--accent-2)] rounded-[2px] transition-colors text-center flex items-center justify-center space-x-2 cursor-pointer"
            >
              <span>Start a Conversation</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
