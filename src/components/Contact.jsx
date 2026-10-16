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
    service: 'Full-Time Software Engineer / Developer Role',
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
    <section id="contact" className="py-24 border-t border-[#222222] relative bg-[#111111]">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="max-w-2xl mb-12">
          <span className="text-xs font-bold text-[#b6ff00] uppercase tracking-widest flex items-center gap-1.5">
            <Sparkles size={14} />
            CONTACT & CONNECT
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white mt-2">
            Let’s connect to build <br />
            <span className="text-gradient-lime">impactful software together.</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base mt-2 font-normal">
            Whether you have a software development role, full-stack opening, IT associate opportunity, or internship — my inbox is always open.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Left Column: Direct Contact & Availability Info */}
          <div className="lg:col-span-5 space-y-6">
            {/* Primary Email Card with 1-Click Copy */}
            <Tilt3DCard
              maxTilt={12}
              className="p-8 rounded-3xl bg-[#181818] border border-[#262626] space-y-5 shadow-card-soft hover:border-[#b6ff00]/40 transition-all duration-300"
            >
              <div
                style={{ transform: 'translateZ(25px)' }}
                className="flex items-center justify-between"
              >
                <span className="text-xs font-bold text-slate-400 uppercase tracking-widest block">
                  Get In Touch
                </span>
                <span className="text-[11px] font-bold text-[#b6ff00] bg-[#b6ff00]/10 px-2.5 py-0.5 rounded-full border border-[#b6ff00]/30">
                  Open to Opportunities
                </span>
              </div>

              {/* Email Address with Copy Trigger */}
              <div
                style={{ transform: 'translateZ(30px)' }}
                className="flex items-center justify-between p-4 rounded-2xl bg-[#131313] border border-[#262626]"
              >
                <div className="flex items-center gap-3 truncate">
                  <Mail className="text-[#b6ff00] flex-shrink-0" size={20} />
                  <a
                    href={`mailto:${portfolioData.personal.email}`}
                    className="text-sm font-semibold text-white hover:text-[#b6ff00] transition-colors truncate"
                  >
                    {portfolioData.personal.email}
                  </a>
                </div>
                <button
                  type="button"
                  onClick={handleCopyEmail}
                  className="px-3.5 py-1.5 rounded-xl bg-[#222222] hover:bg-[#b6ff00] text-[#b6ff00] hover:text-[#111111] border border-[#333333] hover:border-[#b6ff00] text-xs font-bold flex items-center gap-1.5 transition-all ml-2 flex-shrink-0"
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
                  className="w-full py-4 px-5 rounded-2xl bg-[#131313] hover:bg-[#1f1f1f] border border-[#262626] hover:border-[#b6ff00]/50 flex items-center justify-between text-white transition-all text-xs font-bold group shadow-2xs"
                >
                  <div className="flex items-center gap-2.5">
                    <MessageSquare size={18} className="text-[#b6ff00]" />
                    <span>Chat on WhatsApp Directly</span>
                  </div>
                  <ArrowUpRight size={16} className="text-slate-400 group-hover:text-[#b6ff00] group-hover:translate-x-0.5 transition-transform" />
                </a>
              </div>

              {/* Phone & Location */}
              <div
                style={{ transform: 'translateZ(20px)' }}
                className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1"
              >
                <a
                  href={`tel:${portfolioData.personal.phone.replace(/\s+/g, '')}`}
                  className="p-3.5 rounded-2xl bg-[#131313] border border-[#262626] flex items-center gap-2.5 text-slate-300 hover:text-[#b6ff00] hover:border-[#b6ff00]/40 transition-all text-xs font-semibold"
                >
                  <Phone size={16} className="text-[#b6ff00] flex-shrink-0" />
                  <span>{portfolioData.personal.phone}</span>
                </a>

                <div className="p-3.5 rounded-2xl bg-[#131313] border border-[#262626] flex items-center gap-2 text-slate-300 text-xs font-medium">
                  <MapPin size={16} className="text-[#b6ff00] flex-shrink-0" />
                  <span>Karur, India (IST)</span>
                </div>
              </div>

              {/* Working Hours & Availability */}
              <div
                style={{ transform: 'translateZ(15px)' }}
                className="p-4 rounded-2xl bg-[#131313]/70 border border-[#262626] text-xs text-slate-400 space-y-1"
              >
                <div className="flex items-center gap-2 font-semibold text-slate-200">
                  <Clock size={14} className="text-[#b6ff00]" />
                  <span>Academic Status & Availability:</span>
                </div>
                <p className="text-[11px] leading-relaxed">
                  MCA Student at MKCE (79%). Actively open for Software Engineering, Full-Stack, Web Development, and MCA Graduate / IT roles.
                </p>
              </div>

              {/* Social Channels */}
              <div
                style={{ transform: 'translateZ(20px)' }}
                className="pt-2 flex items-center justify-between border-t border-[#262626] text-xs text-slate-400 font-semibold"
              >
                <span>Professional Profiles:</span>
                <div className="flex items-center gap-2">
                  <a
                    href={portfolioData.personal.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2.5 rounded-xl bg-[#131313] hover:bg-[#b6ff00] border border-[#262626] text-slate-300 hover:text-[#111111] transition-all"
                    title="LinkedIn Profile"
                  >
                    <LinkedinIcon size={15} />
                  </a>
                  <a
                    href={portfolioData.personal.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2.5 rounded-xl bg-[#131313] hover:bg-[#b6ff00] border border-[#262626] text-slate-300 hover:text-[#111111] transition-all"
                    title="GitHub Repositories"
                  >
                    <GithubIcon size={15} />
                  </a>
                </div>
              </div>
            </Tilt3DCard>
          </div>

          {/* Right Column: Inquiry / Contact Form */}
          <div className="lg:col-span-7">
            <div className="p-8 sm:p-10 rounded-3xl bg-[#181818] border border-[#262626] shadow-card-soft">
              <h3 className="text-2xl font-bold text-white mb-1">Send a Message</h3>
              <p className="text-xs text-slate-400 mb-6">
                Have an opportunity, project question, or just want to connect? Send a note below.
              </p>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Name */}
                  <div>
                    <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-2">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Alex Smith"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3.5 rounded-2xl bg-[#131313] border border-[#2f2f2f] text-white placeholder:text-slate-500 text-sm focus:outline-none focus:border-[#b6ff00] focus:ring-1 focus:ring-[#b6ff00] transition-all"
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-2">
                      Your Email *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="e.g. alex@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3.5 rounded-2xl bg-[#131313] border border-[#2f2f2f] text-white placeholder:text-slate-500 text-sm focus:outline-none focus:border-[#b6ff00] focus:ring-1 focus:ring-[#b6ff00] transition-all"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Topic / Purpose */}
                  <div>
                    <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-2">
                      Purpose of Message
                    </label>
                    <select
                      value={formData.service}
                      onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                      className="w-full px-4 py-3.5 rounded-2xl bg-[#131313] border border-[#2f2f2f] text-white text-sm focus:outline-none focus:border-[#b6ff00] focus:ring-1 focus:ring-[#b6ff00] transition-all"
                    >
                      <option value="Full-Time Software Engineer / Developer Role" className="bg-[#181818] text-white">Full-Time Software Engineer / Developer</option>
                      <option value="Full-Stack / Web Development Role" className="bg-[#181818] text-white">Full-Stack / Web Development Role</option>
                      <option value="IT Associate / Graduate Trainee Role" className="bg-[#181818] text-white">IT Associate / Graduate Trainee Role</option>
                      <option value="Technical Internship (Software / Web / IT)" className="bg-[#181818] text-white">Technical Internship (Software / Web / IT)</option>
                      <option value="Project / Technical Collaboration" className="bg-[#181818] text-white">Project / Technical Collaboration</option>
                      <option value="General Connect / Networking" className="bg-[#181818] text-white">General Connect / Networking</option>
                    </select>
                  </div>

                  {/* Subject */}
                  <div>
                    <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-2">
                      Subject
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Software / IT Opportunity or Connect"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      className="w-full px-4 py-3.5 rounded-2xl bg-[#131313] border border-[#2f2f2f] text-white placeholder:text-slate-500 text-sm focus:outline-none focus:border-[#b6ff00] focus:ring-1 focus:ring-[#b6ff00] transition-all"
                    />
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-2">
                    Your Message *
                  </label>
                  <textarea
                    rows={4}
                    required
                    placeholder="Hi Seshaan, I'd like to talk about..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3.5 rounded-2xl bg-[#131313] border border-[#2f2f2f] text-white placeholder:text-slate-500 text-sm focus:outline-none focus:border-[#b6ff00] focus:ring-1 focus:ring-[#b6ff00] transition-all resize-none"
                  />
                </div>

                {status && (
                  <div className="p-3.5 rounded-2xl bg-[#131313] border border-[#b6ff00]/40 text-xs font-semibold text-[#b6ff00]">
                    {status}
                  </div>
                )}

                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full py-4 px-6 rounded-full text-xs font-black uppercase tracking-wider text-[#111111] bg-[#b6ff00] hover:bg-[#c6ff24] shadow-glow-lime hover:scale-[1.01] transition-all duration-300 flex items-center justify-center gap-2"
                  >
                    <Send size={15} />
                    <span>Send Message</span>
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
