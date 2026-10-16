import React, { useState } from 'react';
import { Calculator, Clock, Check, MessageSquare, ArrowRight, Zap, Sparkles } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function CostCalculator({ onSelectScope }) {
  const [selectedType, setSelectedType] = useState('saas');
  const [selectedTimeline, setSelectedTimeline] = useState('standard');
  const [selectedAddOns, setSelectedAddOns] = useState(['pdf_export', 'auth_rbac']);

  const currentType = portfolioData.calculatorPresets.projectTypes.find((t) => t.id === selectedType) || portfolioData.calculatorPresets.projectTypes[0];
  const currentTimeline = portfolioData.calculatorPresets.timelines.find((t) => t.id === selectedTimeline) || portfolioData.calculatorPresets.timelines[0];

  const totalExtraDays = selectedAddOns.reduce((acc, curr) => {
    const addOn = portfolioData.calculatorPresets.addOns.find((a) => a.id === curr);
    return acc + (addOn ? addOn.extraDays : 0);
  }, 0);

  const estimatedDays = Math.max(5, Math.round((currentType.baseDays + totalExtraDays) * (currentTimeline.multiplier || 1)));

  const toggleAddOn = (id) => {
    if (selectedAddOns.includes(id)) {
      setSelectedAddOns(selectedAddOns.filter((item) => item !== id));
    } else {
      setSelectedAddOns([...selectedAddOns, id]);
    }
  };

  const getAddOnNames = () => {
    return selectedAddOns
      .map((id) => portfolioData.calculatorPresets.addOns.find((a) => a.id === id)?.name)
      .filter(Boolean)
      .join(', ');
  };

  const generateWhatsAppMessage = () => {
    const text = `Hi Seshaan! I used your portfolio project calculator:%0A%0A• Project Type: ${encodeURIComponent(
      currentType.name
    )}%0A• Delivery Pace: ${encodeURIComponent(currentTimeline.name)}%0A• Add-ons: ${encodeURIComponent(
      getAddOnNames() || 'None'
    )}%0A• Estimated Turnaround: ~${estimatedDays} days%0A%0ACan we discuss a project proposal?`;
    return `https://wa.me/918124931018?text=${text}`;
  };

  const handleApplyToContact = () => {
    if (onSelectScope) {
      onSelectScope({
        subject: `Project Inquiry: ${currentType.name}`,
        message: `Project Type: ${currentType.name}\nTimeline: ${currentTimeline.name}\nAdd-ons: ${getAddOnNames() || 'None'}\nEstimated Timeline: ~${estimatedDays} days`,
      });
    }
    const contactEl = document.getElementById('contact');
    if (contactEl) {
      contactEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="estimate" className="py-24 border-t border-[#222222] relative bg-[#111111]">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        {/* Header */}
        <div className="max-w-2xl mb-12">
          <span className="text-xs font-bold text-[#b6ff00] uppercase tracking-widest flex items-center gap-1.5">
            <Calculator size={14} />
            02 — INTERACTIVE SCOPE ESTIMATOR
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white mt-2">
            Calculate your project <span className="text-[#b6ff00]">timeline & scope.</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base mt-2 font-normal">
            Select your requirements to see an estimated turnaround schedule and sample deliverables. No hidden overheads, transparent milestones.
          </p>
        </div>

        {/* Main Grid: Builder on Left, Estimate Card on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Interactive Controls */}
          <div className="lg:col-span-7 space-y-8 bg-[#181818] p-6 sm:p-8 rounded-3xl border border-[#262626] shadow-card-soft">
            {/* Step 1: Project Type */}
            <div>
              <label className="text-xs font-bold uppercase tracking-wider text-slate-400 block mb-3">
                1. Select Project Type:
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {portfolioData.calculatorPresets.projectTypes.map((type) => {
                  const isSelected = selectedType === type.id;
                  return (
                    <button
                      key={type.id}
                      type="button"
                      onClick={() => setSelectedType(type.id)}
                      className={`p-4 rounded-2xl text-left border transition-all duration-200 ${
                        isSelected
                          ? 'bg-[#202020] border-[#b6ff00] ring-1 ring-[#b6ff00]/40 shadow-sm'
                          : 'bg-[#1c1c1c] border-[#292929] hover:border-[#383838] text-slate-300'
                      }`}
                    >
                      <div className="flex items-center justify-between mb-1">
                        <span className={`text-sm font-bold ${isSelected ? 'text-[#b6ff00]' : 'text-white'}`}>
                          {type.name}
                        </span>
                        {isSelected && <Check size={16} className="text-[#b6ff00]" />}
                      </div>
                      <span className="text-[11px] text-slate-400 block">Typical base: ~{type.baseDays} days</span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Step 2: Timeline Preference */}
            <div>
              <label className="text-xs font-bold uppercase tracking-wider text-slate-400 block mb-3">
                2. Select Delivery Pace:
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {portfolioData.calculatorPresets.timelines.map((tl) => {
                  const isSelected = selectedTimeline === tl.id;
                  return (
                    <button
                      key={tl.id}
                      type="button"
                      onClick={() => setSelectedTimeline(tl.id)}
                      className={`p-3.5 rounded-2xl text-left border transition-all duration-200 ${
                        isSelected
                          ? 'bg-[#202020] border-[#b6ff00] ring-1 ring-[#b6ff00]/40 shadow-sm'
                          : 'bg-[#1c1c1c] border-[#292929] hover:border-[#383838] text-slate-300'
                      }`}
                    >
                      <span className={`text-xs font-bold block ${isSelected ? 'text-[#b6ff00]' : 'text-white'}`}>
                        {tl.label}
                      </span>
                      <span className="text-[11px] text-slate-400 block mt-0.5">{tl.name}</span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Step 3: Add-on Capabilities */}
            <div>
              <label className="text-xs font-bold uppercase tracking-wider text-slate-400 block mb-3">
                3. Key Custom Modules (Optional):
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {portfolioData.calculatorPresets.addOns.map((addon) => {
                  const isChecked = selectedAddOns.includes(addon.id);
                  return (
                    <button
                      key={addon.id}
                      type="button"
                      onClick={() => toggleAddOn(addon.id)}
                      className={`p-3.5 rounded-2xl text-left border flex items-center justify-between transition-all duration-200 ${
                        isChecked
                          ? 'bg-[#202020] border-[#b6ff00] ring-1 ring-[#b6ff00]/40 shadow-2xs'
                          : 'bg-[#1c1c1c] border-[#292929] hover:border-[#383838] text-slate-300'
                      }`}
                    >
                      <div>
                        <span className="text-xs font-semibold text-white block">{addon.name}</span>
                        <span className="text-[11px] text-slate-400">+~{addon.extraDays} days</span>
                      </div>
                      <div
                        className={`w-5 h-5 rounded-md flex items-center justify-center border transition-colors ${
                          isChecked ? 'bg-[#b6ff00] border-[#b6ff00] text-[#111111]' : 'border-[#333333] bg-[#181818]'
                        }`}
                      >
                        {isChecked && <Check size={12} strokeWidth={3} />}
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Right Column: Estimated Summary Receipt Box */}
          <div className="lg:col-span-5 bg-[#181818] p-7 sm:p-8 rounded-3xl border border-[#2b2b2b] shadow-2xl shadow-black sticky top-28">
            <div className="flex items-center justify-between pb-4 border-b border-[#262626]">
              <span className="text-xs font-bold text-slate-400 uppercase tracking-widest flex items-center gap-1.5">
                <Sparkles size={14} className="text-[#b6ff00]" />
                SCOPE ESTIMATE
              </span>
              <span className="text-xs font-bold text-[#b6ff00] bg-[#b6ff00]/10 border border-[#b6ff00]/30 px-3 py-0.5 rounded-full">
                Fixed Proposal
              </span>
            </div>

            {/* Estimated Days Large Display */}
            <div className="py-6 border-b border-[#262626]">
              <div className="text-xs font-semibold text-slate-400">Estimated Turnaround</div>
              <div className="flex items-baseline gap-2 mt-1">
                <span className="text-4xl sm:text-5xl font-black text-white tracking-tight">
                  ~{estimatedDays}
                </span>
                <span className="text-base font-bold text-slate-400">working days</span>
              </div>
              <p className="text-xs text-slate-400 mt-2 flex items-center gap-1.5">
                <Clock size={13} className="text-[#b6ff00]" />
                <span>Includes architecture, coding, testing, and deployment.</span>
              </p>
            </div>

            {/* Breakdown Spec Summary */}
            <div className="py-5 space-y-3 text-xs border-b border-[#262626]">
              <div className="flex justify-between text-slate-400">
                <span>Selected Architecture:</span>
                <span className="font-bold text-slate-200 text-right">{currentType.name}</span>
              </div>
              <div className="flex justify-between text-slate-400">
                <span>Delivery Pace:</span>
                <span className="font-bold text-slate-200 text-right">{currentTimeline.name}</span>
              </div>
              <div className="flex justify-between text-slate-400">
                <span>Modules Included:</span>
                <span className="font-bold text-slate-200 text-right">{selectedAddOns.length} add-ons</span>
              </div>
              <div className="flex justify-between text-slate-400">
                <span>Codebase & Ownership:</span>
                <span className="font-bold text-[#b6ff00] text-right">100% Full Transfer</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="pt-6 space-y-3">
              <a
                href={generateWhatsAppMessage()}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3.5 px-4 rounded-full text-xs font-black uppercase tracking-wider text-[#111111] bg-[#b6ff00] hover:bg-[#c6ff24] shadow-glow-lime flex items-center justify-center gap-2 transition-all hover:scale-[1.02]"
              >
                <MessageSquare size={16} />
                <span>Inquire This Scope on WhatsApp</span>
              </a>

              <button
                type="button"
                onClick={handleApplyToContact}
                className="w-full py-3.5 px-4 rounded-full text-xs font-bold uppercase tracking-wider text-slate-300 hover:text-[#b6ff00] bg-[#222222] hover:bg-[#282828] border border-[#2f2f2f] flex items-center justify-center gap-2 transition-all"
              >
                <span>Send Scope to Seshaan via Email</span>
                <ArrowRight size={14} />
              </button>
            </div>

            <p className="text-[11px] text-slate-500 text-center mt-4">
              * Final timeline and milestones confirmed after brief discovery call. Zero obligations.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
