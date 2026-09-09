import React, { useState, useEffect } from 'react';
import { ArrowUpRight, CheckCircle2, MapPin, Mail, Clock, Globe, ShieldCheck, Send } from 'lucide-react';
import { useNavigation } from '../context/NavigationContext';

export const Contact: React.FC = () => {
  const { queryParams } = useNavigation();

  const [formData, setFormData] = useState({
    name: '',
    title: '',
    organization: '',
    email: '',
    phone: '',
    capability: queryParams.capability || 'Integrated End-to-End Advisory',
    industry: queryParams.industry || 'Pharmaceuticals & Biologics',
    geography: queryParams.geography || 'Kenya & East African Community (EAC)',
    timeline: 'Within 1–3 months',
    narrative: queryParams.topic ? `Inquiring regarding: ${queryParams.topic}` : ''
  });

  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (queryParams.industry) {
      setFormData((prev) => ({ ...prev, industry: queryParams.industry }));
    }
    if (queryParams.geography) {
      setFormData((prev) => ({ ...prev, geography: queryParams.geography }));
    }
    if (queryParams.capability) {
      setFormData((prev) => ({ ...prev, capability: queryParams.capability }));
    }
    if (queryParams.topic) {
      setFormData((prev) => ({
        ...prev,
        narrative: prev.narrative || `Inquiring regarding: ${queryParams.topic}`
      }));
    }
  }, [queryParams]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="space-y-0">
      {/* Editorial Header */}
      <section className="bg-[var(--paper)] pt-12 pb-16 lg:pt-16 lg:pb-24 border-b border-[var(--line)]">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 space-y-8">
          <div className="flex items-center space-x-3 text-xs font-mono text-[var(--ink-3)] uppercase tracking-wider">
            <span className="text-[var(--accent)] font-semibold">CONSULTATIVE INTAKE</span>
            <span>·</span>
            <span>DIRECT SENIOR ACCESS</span>
            <span>·</span>
            <span>NAIROBI ADVISORY DESK</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            <div className="lg:col-span-8 space-y-6">
              <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[var(--ink-strong)] leading-tight">
                Start a Conversation.
              </h1>
              <p className="font-body text-lg text-[var(--ink)] leading-relaxed max-w-3xl">
                Engage directly with our senior practice leads. We do not use intermediary sales layers or junior screening teams; your inquiry is evaluated directly by practice partners in Nairobi.
              </p>
            </div>

            <div className="lg:col-span-4 p-6 bg-[var(--paper-2)] border border-[var(--line)] rounded-[2px] space-y-4 font-mono text-xs">
              <div className="text-[var(--accent)] font-semibold uppercase tracking-wider">
                Response Service Level Agreement
              </div>
              <div className="space-y-2 text-[var(--ink-2)] border-t border-[var(--line)] pt-3 leading-relaxed">
                <div className="flex items-center space-x-2 text-[var(--ink-strong)] font-semibold">
                  <Clock className="w-4 h-4 text-[var(--accent)]" />
                  <span>24 Business Hours Guaranteed</span>
                </div>
                <p className="text-[11px] text-[var(--ink-3)]">
                  Every inquiry receives a confidential substantive response with initial scoping parameters or a structured discovery invitation.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Intake Form & Verification Desk Grid */}
      <section className="py-16 lg:py-24 bg-[var(--paper-2)] border-b border-[var(--line)]">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Form Column (7 cols) */}
            <div className="lg:col-span-7 bg-[var(--paper)] border border-[var(--line)] p-6 sm:p-10 rounded-[2px] shadow-sm">
              {submitted ? (
                <div className="py-12 text-center space-y-6">
                  <div className="w-12 h-12 rounded-full bg-[var(--accent-soft)] text-[var(--accent)] flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="font-display text-2xl font-bold text-[var(--ink-strong)]">
                      Consultative Brief Received.
                    </h3>
                    <p className="font-body text-sm text-[var(--ink-2)] max-w-md mx-auto leading-relaxed">
                      Thank you, {formData.name || 'valued partner'}. A senior practice director from our Nairobi headquarters will review your briefing for {formData.organization || 'your organization'} and reply within 24 business hours.
                    </p>
                  </div>

                  <div className="p-4 bg-[var(--paper-2)] border border-[var(--line)] rounded-[2px] font-mono text-xs text-left max-w-md mx-auto space-y-1 text-[var(--ink-2)]">
                    <div className="text-[var(--accent)] font-semibold">Scope Summary:</div>
                    <div>Sector: {formData.industry}</div>
                    <div>Geography: {formData.geography}</div>
                    <div>Discipline: {formData.capability}</div>
                    <div>Email: {formData.email}</div>
                  </div>

                  <button
                    onClick={() => setSubmitted(false)}
                    className="text-xs font-mono text-[var(--accent)] hover:underline cursor-pointer"
                  >
                    Submit an Additional Mandate Brief
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="border-b border-[var(--line)] pb-3">
                    <div className="font-mono text-xs text-[var(--accent)] font-semibold uppercase">
                      Mandate Specification Form
                    </div>
                    <div className="text-xs font-mono text-[var(--ink-3)] mt-0.5">
                      Fields pre-configured from your exploration parameters
                    </div>
                  </div>

                  {/* Pre-Selected Parameters */}
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 font-mono text-xs">
                    <div>
                      <label className="text-[10px] uppercase text-[var(--ink-3)] block mb-1">Pillar Discipline</label>
                      <select
                        value={formData.capability}
                        onChange={(e) => setFormData({ ...formData, capability: e.target.value })}
                        className="w-full p-2.5 bg-[var(--paper-2)] border border-[var(--line)] rounded-[2px] text-[var(--ink-strong)] text-xs focus:outline-none focus:border-[var(--accent)] cursor-pointer"
                      >
                        <option value="Market Research & Field Intelligence">Market Research</option>
                        <option value="Business Consulting & Corporate Strategy">Business Consulting</option>
                        <option value="AI Enterprise Solutions & Systems">AI Enterprise Solutions</option>
                        <option value="AI Training & Institutional Literacy">AI Training</option>
                        <option value="Integrated End-to-End Advisory">Integrated Engine</option>
                      </select>
                    </div>

                    <div>
                      <label className="text-[10px] uppercase text-[var(--ink-3)] block mb-1">Industry Sector</label>
                      <select
                        value={formData.industry}
                        onChange={(e) => setFormData({ ...formData, industry: e.target.value })}
                        className="w-full p-2.5 bg-[var(--paper-2)] border border-[var(--line)] rounded-[2px] text-[var(--ink-strong)] text-xs focus:outline-none focus:border-[var(--accent)] cursor-pointer"
                      >
                        <option value="Pharmaceuticals & Biologics">Pharmaceuticals</option>
                        <option value="Medical Devices & Diagnostics">Medical Devices</option>
                        <option value="Hospitals & Healthcare Networks">Hospitals & Providers</option>
                        <option value="Commercial Banking & FinTech">Banking & FinTech</option>
                        <option value="Renewable Energy & Off-Grid">Renewable Energy</option>
                        <option value="Agribusiness & Crop Science">Agribusiness</option>
                        <option value="Consumer Goods & Retail">Consumer Goods</option>
                        <option value="Other Industry Vertical">Other Sector</option>
                      </select>
                    </div>

                    <div>
                      <label className="text-[10px] uppercase text-[var(--ink-3)] block mb-1">Target Geography</label>
                      <select
                        value={formData.geography}
                        onChange={(e) => setFormData({ ...formData, geography: e.target.value })}
                        className="w-full p-2.5 bg-[var(--paper-2)] border border-[var(--line)] rounded-[2px] text-[var(--ink-strong)] text-xs focus:outline-none focus:border-[var(--accent)] cursor-pointer"
                      >
                        <option value="Kenya & East African Community (EAC)">East Africa (Kenya/EAC)</option>
                        <option value="Nigeria & ECOWAS Regional Bloc">West Africa (Nigeria/ECOWAS)</option>
                        <option value="South Africa & SADC Corridor">Southern Africa (SADC)</option>
                        <option value="Egypt & North African Gateway">North Africa (Egypt)</option>
                        <option value="Pan-African Multi-Country Mandate">Pan-African Multi-Country</option>
                        <option value="European / African Trade Corridor">Europe Corridor</option>
                        <option value="North American / African Biotech Corridor">North America Corridor</option>
                      </select>
                    </div>
                  </div>

                  {/* Personal & Organization Contact Info */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 font-mono text-xs">
                    <div>
                      <label className="text-[10px] uppercase text-[var(--ink-3)] block mb-1">Your Full Name *</label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Dr. Amina Odhiambo"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full p-3 bg-[var(--paper-2)] border border-[var(--line)] rounded-[2px] text-[var(--ink-strong)] focus:outline-none focus:border-[var(--accent)]"
                      />
                    </div>

                    <div>
                      <label className="text-[10px] uppercase text-[var(--ink-3)] block mb-1">Executive Title</label>
                      <input
                        type="text"
                        placeholder="e.g. VP Commercial Strategy"
                        value={formData.title}
                        onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                        className="w-full p-3 bg-[var(--paper-2)] border border-[var(--line)] rounded-[2px] text-[var(--ink-strong)] focus:outline-none focus:border-[var(--accent)]"
                      />
                    </div>

                    <div>
                      <label className="text-[10px] uppercase text-[var(--ink-3)] block mb-1">Organization Name *</label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Pan-African Healthcare Ltd"
                        value={formData.organization}
                        onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
                        className="w-full p-3 bg-[var(--paper-2)] border border-[var(--line)] rounded-[2px] text-[var(--ink-strong)] focus:outline-none focus:border-[var(--accent)]"
                      />
                    </div>

                    <div>
                      <label className="text-[10px] uppercase text-[var(--ink-3)] block mb-1">Business Email *</label>
                      <input
                        type="email"
                        required
                        placeholder="e.g. a.odhiambo@organization.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full p-3 bg-[var(--paper-2)] border border-[var(--line)] rounded-[2px] text-[var(--ink-strong)] focus:outline-none focus:border-[var(--accent)]"
                      />
                    </div>
                  </div>

                  {/* Challenge Narrative */}
                  <div className="font-mono text-xs">
                    <label className="text-[10px] uppercase text-[var(--ink-3)] block mb-1">Strategic Challenge / Key Questions *</label>
                    <textarea
                      required
                      rows={4}
                      placeholder="Outline your strategic objectives, regulatory questions, or operational bottlenecks..."
                      value={formData.narrative}
                      onChange={(e) => setFormData({ ...formData, narrative: e.target.value })}
                      className="w-full p-3 bg-[var(--paper-2)] border border-[var(--line)] rounded-[2px] text-[var(--ink-strong)] focus:outline-none focus:border-[var(--accent)] font-body text-sm"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-4 text-xs font-mono tracking-wider uppercase font-semibold text-white bg-[var(--accent)] hover:bg-[var(--accent-2)] rounded-[2px] transition-colors shadow-sm inline-flex items-center justify-center space-x-2 cursor-pointer"
                  >
                    <span>Transmit Briefing to Nairobi Practice Leads</span>
                    <Send className="w-4 h-4" />
                  </button>
                </form>
              )}
            </div>

            {/* Nairobi Headquarters Desk Credentials (5 cols) */}
            <div className="lg:col-span-5 space-y-6">
              <div className="p-8 bg-[var(--paper)] border border-[var(--line)] rounded-[2px] space-y-6 font-mono text-xs">
                <div className="text-[var(--accent)] font-semibold uppercase tracking-wider text-xs pb-3 border-b border-[var(--line)]">
                  Nairobi Headquarters Desk
                </div>

                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <MapPin className="w-4 h-4 text-[var(--accent)] shrink-0 mt-0.5" />
                    <div>
                      <div className="text-[var(--ink-strong)] font-semibold">Headquarters & Research Lab</div>
                      <div className="text-[var(--ink-3)]">Nairobi, Kenya · Upper Hill Innovation Corridor</div>
                      <div className="text-[var(--ink-3)] text-[11px]">1°17′S, 36°49′E</div>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <Mail className="w-4 h-4 text-[var(--accent)] shrink-0 mt-0.5" />
                    <div>
                      <div className="text-[var(--ink-strong)] font-semibold">Direct Institutional Desk</div>
                      <a href="mailto:info@mindcraftconsultancy.com" className="text-[var(--accent)] underline">
                        info@mindcraftconsultancy.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <Globe className="w-4 h-4 text-[var(--accent)] shrink-0 mt-0.5" />
                    <div>
                      <div className="text-[var(--ink-strong)] font-semibold">Active Operational Reach</div>
                      <div className="text-[var(--ink-3)]">45 African Countries · EAC, ECOWAS, SADC</div>
                    </div>
                  </div>
                </div>

                <div className="p-4 bg-[var(--paper-2)] border border-[var(--line)] rounded-[2px] space-y-2">
                  <div className="font-semibold text-[var(--ink-strong)]">Confidentiality Guarantee:</div>
                  <p className="font-body text-xs text-[var(--ink-2)] leading-relaxed">
                    All mandate briefings are treated as strictly confidential under customary non-disclosure standards. Client identities and proprietary operational data are never shared.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
