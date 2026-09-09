import React from 'react';
import { ArrowUpRight, ArrowRight, BookOpen, Users, ShieldCheck, CheckCircle2, Award } from 'lucide-react';
import { useNavigation } from '../context/NavigationContext';

export const AITraining: React.FC = () => {
  const { navigate } = useNavigation();

  return (
    <div className="space-y-0">
      {/* Editorial Header */}
      <section className="bg-[var(--paper)] pt-12 pb-16 lg:pt-16 lg:pb-24 border-b border-[var(--line)]">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 space-y-8">
          <div className="flex items-center space-x-3 text-xs font-mono text-[var(--ink-3)] uppercase tracking-wider">
            <span className="text-[var(--accent)] font-semibold">PILLAR 03 · INSTITUTIONAL CAPABILITY</span>
            <span>·</span>
            <span>HUMAN ADOPTION</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            <div className="lg:col-span-7 space-y-6">
              <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[var(--ink-strong)] leading-tight">
                AI Training & Digital Literacy.
              </h1>
              <p className="font-body text-lg text-[var(--ink)] leading-relaxed">
                Technology investments fail when human adoption lags behind. We design executive masterclasses, clinical workflows, and workforce upskilling programs that embed permanent AI capabilities within African institutions.
              </p>
              <div className="flex flex-wrap gap-4 pt-2">
                <button
                  onClick={() => navigate('/contact?topic=ai-training')}
                  className="px-6 py-3.5 text-xs font-mono tracking-wider uppercase font-semibold text-white bg-[var(--accent)] hover:bg-[var(--accent-2)] rounded-[2px] transition-colors shadow-sm inline-flex items-center space-x-2 cursor-pointer"
                >
                  <span>Request an Executive Program</span>
                  <ArrowUpRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            <div className="lg:col-span-5 p-6 bg-[var(--paper-2)] border border-[var(--line)] rounded-[2px] space-y-4 font-mono text-xs">
              <div className="text-[var(--accent)] font-semibold uppercase tracking-wider">
                Pedagogical Framework
              </div>
              <div className="space-y-2.5 text-[var(--ink-2)] border-t border-[var(--line)] pt-3">
                <div className="flex justify-between">
                  <span>Target Audiences</span>
                  <span className="text-[var(--ink-strong)] font-semibold">C-Suite, Directors & Clinicians</span>
                </div>
                <div className="flex justify-between">
                  <span>Curriculum Focus</span>
                  <span className="text-[var(--ink-strong)] font-semibold">Practical Applied Tooling</span>
                </div>
                <div className="flex justify-between">
                  <span>Governance Integration</span>
                  <span className="text-[var(--ink-strong)] font-semibold">Responsible & Sovereign AI</span>
                </div>
                <div className="flex justify-between">
                  <span>Outcomes</span>
                  <span className="text-[var(--ink-strong)] font-semibold">Internal Self-Sufficiency</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Four Training Tracks */}
      <section className="py-16 lg:py-24 bg-[var(--paper-2)] border-b border-[var(--line)]">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 space-y-12">
          <div className="space-y-2 pb-6 border-b border-[var(--line)]">
            <div className="font-mono text-xs text-[var(--accent)] font-semibold uppercase tracking-widest">
              CURRICULUM TRACKS
            </div>
            <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-[var(--ink-strong)]">
              Four tailored learning tracks.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Track 1 */}
            <div className="p-8 bg-[var(--paper)] border border-[var(--line)] rounded-[2px] space-y-4">
              <div className="font-mono text-xs text-[var(--accent)] font-bold">01 · EXECUTIVE LEADERSHIP</div>
              <h3 className="font-display text-2xl font-bold text-[var(--ink-strong)]">
                AI for Board & Senior Executives
              </h3>
              <p className="font-body text-sm text-[var(--ink-2)] leading-relaxed">
                Strategic orientation for CEOs, CFOs, and board members. Understanding capital allocation for AI, risk management, vendor evaluation, talent strategy, and distinguishing marketing noise from authentic operational ROI.
              </p>
            </div>

            {/* Track 2 */}
            <div className="p-8 bg-[var(--paper)] border border-[var(--line)] rounded-[2px] space-y-4">
              <div className="font-mono text-xs text-[var(--accent)] font-bold">02 · FUNCTIONAL ENABLEMENT</div>
              <h3 className="font-display text-2xl font-bold text-[var(--ink-strong)]">
                Role-Specific AI Workflows
              </h3>
              <p className="font-body text-sm text-[var(--ink-2)] leading-relaxed">
                Hands-on practical tooling for commercial teams (territory intelligence, CRM enhancement), clinical researchers (literature synthesis, regulatory drafting), and finance teams (automated audit and reconciliation).
              </p>
            </div>

            {/* Track 3 */}
            <div className="p-8 bg-[var(--paper)] border border-[var(--line)] rounded-[2px] space-y-4">
              <div className="font-mono text-xs text-[var(--accent)] font-bold">03 · GOVERNANCE & ETHICS</div>
              <h3 className="font-display text-2xl font-bold text-[var(--ink-strong)]">
                Responsible AI & Data Privacy
              </h3>
              <p className="font-body text-sm text-[var(--ink-2)] leading-relaxed">
                Navigating African national data protection legislation (e.g., Kenya Data Protection Act, Nigeria NDPR, South Africa POPIA). Mitigating algorithmic bias, clinical validation standards, and establishing institutional AI review boards.
              </p>
            </div>

            {/* Track 4 */}
            <div className="p-8 bg-[var(--paper)] border border-[var(--line)] rounded-[2px] space-y-4">
              <div className="font-mono text-xs text-[var(--accent)] font-bold">04 · INTERNAL CHAMPIONS</div>
              <h3 className="font-display text-2xl font-bold text-[var(--ink-strong)]">
                Train-the-Trainer Certification
              </h3>
              <p className="font-body text-sm text-[var(--ink-2)] leading-relaxed">
                Developing internal AI champions within your organization who can mentor peers, identify new high-value automation use cases, and ensure continuous cross-departmental adoption without endless consultant reliance.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* The 4 Delivery Formats */}
      <section className="py-16 lg:py-24 bg-[var(--paper)] border-b border-[var(--line)]">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 space-y-8">
          <div className="space-y-2 pb-6 border-b border-[var(--line)]">
            <div className="font-mono text-xs text-[var(--accent)] font-semibold uppercase tracking-widest">
              FLEXIBLE DELIVERY MODES
            </div>
            <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-[var(--ink-strong)]">
              Engineered for busy professionals.
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 font-mono text-xs">
            <div className="p-4 bg-[var(--paper-2)] border border-[var(--line)] rounded-[2px]">
              <div className="text-[var(--accent)] font-bold mb-1">MODE 01</div>
              <div className="text-[var(--ink-strong)] font-semibold mb-1">Executive Retreats</div>
              <div className="text-[var(--ink-3)] text-[11px]">1–2 day intensive off-site strategy immersions with executive simulations.</div>
            </div>
            <div className="p-4 bg-[var(--paper-2)] border border-[var(--line)] rounded-[2px]">
              <div className="text-[var(--accent)] font-bold mb-1">MODE 02</div>
              <div className="text-[var(--ink-strong)] font-semibold mb-1">Cohort Virtual Programs</div>
              <div className="text-[var(--ink-3)] text-[11px]">4–6 week modular tracks combining live interactive labs and asynchronous exercises.</div>
            </div>
            <div className="p-4 bg-[var(--paper-2)] border border-[var(--line)] rounded-[2px]">
              <div className="text-[var(--accent)] font-bold mb-1">MODE 03</div>
              <div className="text-[var(--ink-strong)] font-semibold mb-1">In-House Bootcamps</div>
              <div className="text-[var(--ink-3)] text-[11px]">Dedicated on-premise training tailored directly to your proprietary company systems.</div>
            </div>
            <div className="p-4 bg-[var(--paper-2)] border border-[var(--line)] rounded-[2px]">
              <div className="text-[var(--accent)] font-bold mb-1">MODE 04</div>
              <div className="text-[var(--ink-strong)] font-semibold mb-1">Self-Paced Sandboxes</div>
              <div className="text-[var(--ink-3)] text-[11px]">Customized interactive learning portal pre-loaded with your operational data examples.</div>
            </div>
          </div>
        </div>
      </section>

      {/* Cross-Pillar Handoff */}
      <section className="py-16 bg-[var(--paper-2)] border-b border-[var(--line)]">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="space-y-1">
            <span className="font-mono text-xs text-[var(--accent)] font-semibold uppercase">Next Step in the Engine</span>
            <h3 className="font-display text-xl font-bold text-[var(--ink-strong)]">Pair your trained workforce with production-grade AI enterprise solutions.</h3>
          </div>
          <button
            onClick={() => navigate('/what-we-do/ai-enterprise-solutions')}
            className="px-5 py-2.5 bg-[var(--accent)] hover:bg-[var(--accent-2)] text-white text-xs font-mono uppercase tracking-wider font-semibold rounded-[2px] transition-colors cursor-pointer self-start md:self-auto"
          >
            See AI Enterprise Solutions →
          </button>
        </div>
      </section>
    </div>
  );
};
