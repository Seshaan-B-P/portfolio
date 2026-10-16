import React, { useState } from 'react';
import { Mail, Phone, MapPin, Copy, Check, Send, MessageSquare, Clock, ArrowUpRight, Sparkles } from 'lucide-react';
import { LinkedinIcon, GithubIcon } from './SocialIcons';
import Tilt3DCard from './Tilt3DCard';
import { portfolioData } from '../data/portfolioData';

export default function Contact({ onShowToast, prefillData }) {
  const [copied, setCopied] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    service: 'Full-Stack Web App (MERN)',
    subject: '',
    message: '',
  });
  const [status, setStatus] = useState('');

  // Update when prefillData changes
  React.useEffect(() => {
    if (prefillData) {
      setFormData((prev) => ({
        ...prev,
        subject: prefillData.subject || prev.subject,
        message: prefillData.message || prev.message,
      }));
    }
  }, [prefillData]);

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(portfolioData.personal.email);
      setCopied(true);
      if (onShowToast) onShowToast('Email copied to clipboard! ✨');
      setTimeout(() => setCopied(false), 2200);
    } catch (err) {
      if (onShowToast) onShowToast(`Email: ${portfolioData.personal.email}`);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      setStatus('Please fill in your name, email, and project details.');
      return;
    }

    const mailtoBody = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\nService: ${formData.service}\n\nProject Scope & Message:\n${formData.message}`
    );
    const mailtoUrl = `mailto:${portfolioData.personal.email}?subject=${encodeURIComponent(
      formData.subject || `Project Inquiry from ${formData.name} (${formData.service})`
    )}&body=${mailtoBody}`;

    setStatus('Opening your email composer... ✉');
    if (onShowToast) onShowToast('Launching email client... 🚀');

    setTimeout(() => {
      window.location.href = mailtoUrl;
    }, 400);
  };

  return (
    <section id="contact" className="py-24 border-t border-slate-200/80 relative bg-slate-50/60">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="max-w-2xl mb-12">
          <span className="text-xs font-bold text-brand-indigo uppercase tracking-widest flex items-center gap-1.5">
            <Sparkles size={14} />
            09 — START A PROJECT
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-slate-900 mt-2">
            Let’s turn your idea <br />
            into a <span className="text-gradient-indigo">market-ready product.</span>
          </h2>
          <p className="text-slate-600 text-sm sm:text-base mt-2 font-normal">
            Available for new freelance projects, contract roles, and software engineering consulting. Let's discuss your timeline and deliverables.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Left Column: Direct Contact & Availability Info */}
          <div className="lg:col-span-5 space-y-6">
            {/* Primary Email Card with 1-Click Copy */}
            <Tilt3DCard
              maxTilt={12}
              className="p-8 rounded-3xl bg-white border border-slate-200/90 space-y-5 shadow-card-soft hover:shadow-card-hover transition-all duration-300"
            >
              <div
                style={{ transform: 'translateZ(25px)' }}
                className="flex items-center justify-between"
              >
                <span className="text-xs font-bold text-slate-400 uppercase tracking-widest block">
                  Direct Inquiries
                </span>
                <span className="text-[11px] font-bold text-emerald-700 bg-emerald-50 px-2.5 py-0.5 rounded-full border border-emerald-200">
                  Quick Reply
                </span>
              </div>

              {/* Email Address with Copy Trigger */}
              <div
                style={{ transform: 'translateZ(30px)' }}
                className="flex items-center justify-between p-4 rounded-2xl bg-slate-50 border border-slate-200/80"
              >
                <div className="flex items-center gap-3 truncate">
                  <Mail className="text-brand-indigo flex-shrink-0" size={20} />
                  <a
                    href={`mailto:${portfolioData.personal.email}`}
                    className="text-sm font-semibold text-slate-800 hover:text-brand-indigo transition-colors truncate"
                  >
                    {portfolioData.personal.email}
                  </a>
                </div>
                <button
                  type="button"
                  onClick={handleCopyEmail}
                  className="px-3.5 py-1.5 rounded-xl bg-indigo-50 hover:bg-brand-indigo text-brand-indigo hover:text-white border border-indigo-200 text-xs font-bold flex items-center gap-1.5 transition-all ml-2 flex-shrink-0"
                  title="Copy Email"
                >
                  {copied ? <Check size={14} /> : <Copy size={14} />}
                  <span>{copied ? 'Copied' : 'Copy'}</span>
                </button>
              </div>

              {/* Direct WhatsApp Callout */}
              <div style={{ transform: 'translateZ(25px)' }}>
                <a
                  href={portfolioData.personal.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-4 px-5 rounded-2xl bg-emerald-50 hover:bg-emerald-100 border border-emerald-200 flex items-center justify-between text-emerald-900 transition-all text-xs font-bold group shadow-2xs"
                >
                  <div className="flex items-center gap-2.5">
                    <MessageSquare size={18} className="text-emerald-600" />
                    <span>Chat on WhatsApp Directly</span>
                  </div>
                  <ArrowUpRight size={16} className="group-hover:translate-x-0.5 transition-transform" />
                </a>
              </div>

              {/* Phone & Location */}
              <div
                style={{ transform: 'translateZ(20px)' }}
                className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1"
              >
                <a
                  href={`tel:${portfolioData.personal.phone.replace(/\s+/g, '')}`}
                  className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200/80 flex items-center gap-2.5 text-slate-700 hover:text-brand-indigo hover:border-indigo-200 transition-all text-xs font-semibold"
                >
                  <Phone size={16} className="text-emerald-600 flex-shrink-0" />
                  <span>{portfolioData.personal.phone}</span>
                </a>

                <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200/80 flex items-center gap-2 text-slate-600 text-xs font-medium">
                  <MapPin size={16} className="text-brand-indigo flex-shrink-0" />
                  <span>Karur, India (IST)</span>
                </div>
              </div>

              {/* Working Hours & Timezone */}
              <div
                style={{ transform: 'translateZ(15px)' }}
                className="p-4 rounded-2xl bg-slate-50/70 border border-slate-200/60 text-xs text-slate-600 space-y-1"
              >
                <div className="flex items-center gap-2 font-semibold text-slate-800">
                  <Clock size={14} className="text-brand-indigo" />
                  <span>Timezone & Availability:</span>
                </div>
                <p className="text-[11px] leading-relaxed">
                  Active Monday – Saturday (9:00 AM – 8:00 PM IST). Flexible overlap for US, UK, Europe, and Asia-Pacific client schedules.
                </p>
              </div>

              {/* Social Channels */}
              <div
                style={{ transform: 'translateZ(20px)' }}
                className="pt-2 flex items-center justify-between border-t border-slate-100 text-xs text-slate-500 font-semibold"
              >
                <span>Social Profiles:</span>
                <div className="flex items-center gap-2">
                  <a
                    href={portfolioData.personal.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2.5 rounded-xl bg-slate-50 hover:bg-indigo-50 border border-slate-200 text-slate-600 hover:text-brand-indigo transition-all"
                  >
                    <LinkedinIcon size={15} />
                  </a>
                  <a
                    href={portfolioData.personal.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2.5 rounded-xl bg-slate-50 hover:bg-slate-200 border border-slate-200 text-slate-600 hover:text-slate-900 transition-all"
                  >
                    <GithubIcon size={15} />
                  </a>
                </div>
              </div>
            </Tilt3DCard>
          </div>

          {/* Right Column: Project Inquiry Form */}
          <div className="lg:col-span-7">
            <div className="p-8 sm:p-10 rounded-3xl bg-white border border-slate-200 shadow-card-soft">
              <h3 className="text-2xl font-bold text-slate-900 mb-1">Send a Project Brief</h3>
              <p className="text-xs text-slate-500 mb-6">
                Fill in your project goals below. I’ll review your requirements and reply promptly.
              </p>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Name */}
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. John Doe / Founder"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3.5 rounded-2xl bg-slate-50 border border-slate-200 text-slate-900 text-sm focus:outline-none focus:border-brand-indigo focus:bg-white transition-all"
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                      Your Email *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="e.g. john@company.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3.5 rounded-2xl bg-slate-50 border border-slate-200 text-slate-900 text-sm focus:outline-none focus:border-brand-indigo focus:bg-white transition-all"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Service */}
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                      Service Required
                    </label>
                    <select
                      value={formData.service}
                      onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                      className="w-full px-4 py-3.5 rounded-2xl bg-slate-50 border border-slate-200 text-slate-900 text-sm focus:outline-none focus:border-brand-indigo focus:bg-white transition-all"
                    >
                      <option value="Full-Stack Web App (MERN)">Full-Stack Web App (MERN)</option>
                      <option value="Custom CRM & Internal Portal">Custom CRM & Internal Portal</option>
                      <option value="Clinic & Healthcare EHR">Clinic & Healthcare EHR</option>
                      <option value="Business Website / Landing Page">Business Website / Landing Page</option>
                      <option value="REST API & Database Architecture">REST API & Database Architecture</option>
                      <option value="Code Review / Other Consultation">Other Technical Project</option>
                    </select>
                  </div>

                  {/* Subject */}
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                      Project Subject
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. New MERN Dashboard MVP for Logistics"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      className="w-full px-4 py-3.5 rounded-2xl bg-slate-50 border border-slate-200 text-slate-900 text-sm focus:outline-none focus:border-brand-indigo focus:bg-white transition-all"
                    />
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                    Project Overview & Goals *
                  </label>
                  <textarea
                    rows={4}
                    required
                    placeholder="Tell me a bit about what you want to build, any key features, and your target launch date..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3.5 rounded-2xl bg-slate-50 border border-slate-200 text-slate-900 text-sm focus:outline-none focus:border-brand-indigo focus:bg-white transition-all resize-none"
                  />
                </div>

                {status && (
                  <div className="p-3.5 rounded-2xl bg-indigo-50 border border-indigo-200 text-xs font-semibold text-brand-indigo">
                    {status}
                  </div>
                )}

                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full py-4 px-6 rounded-full text-xs font-bold uppercase tracking-wider text-white bg-brand-indigo hover:bg-brand-indigo-dark shadow-md shadow-brand-indigo/30 hover:shadow-glow-indigo transition-all duration-300 flex items-center justify-center gap-2 hover:scale-[1.01] shimmer-hover"
                  >
                    <Send size={15} />
                    <span>Send Project Inquiry</span>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
