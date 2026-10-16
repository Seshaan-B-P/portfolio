import React, { useState } from 'react';
import { ChevronDown, HelpCircle, MessageSquare } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function Faq() {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleAccordion = (idx) => {
    setOpenIndex(openIndex === idx ? -1 : idx);
  };

  return (
    <section className="py-24 border-t border-slate-200/80 relative bg-white">
      <div className="max-w-4xl mx-auto px-5 sm:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-xs font-bold text-brand-indigo uppercase tracking-widest inline-flex items-center gap-1.5">
            <HelpCircle size={14} />
            09 — FREQUENTLY ASKED QUESTIONS
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-slate-900 mt-2">
            Everything you need <span className="text-gradient-indigo">to know.</span>
          </h2>
          <p className="text-slate-600 text-sm sm:text-base mt-2 font-normal">
            Clear, straightforward answers about freelance contracts, communication, code ownership, and timelines.
          </p>
        </div>

        {/* FAQ Accordion List */}
        <div className="space-y-4">
          {portfolioData.faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className={`rounded-2xl border transition-all duration-200 overflow-hidden ${
                  isOpen
                    ? 'bg-slate-50 border-brand-indigo ring-2 ring-indigo-500/10 shadow-xs'
                    : 'bg-white border-slate-200 hover:border-slate-300'
                }`}
              >
                <button
                  type="button"
                  onClick={() => toggleAccordion(idx)}
                  className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 focus:outline-none"
                >
                  <span className="text-base sm:text-lg font-bold text-slate-900">
                    {faq.question}
                  </span>
                  <div
                    className={`p-1.5 rounded-full bg-slate-100 text-slate-600 transition-transform duration-200 flex-shrink-0 ${
                      isOpen ? 'rotate-180 bg-indigo-50 text-brand-indigo' : ''
                    }`}
                  >
                    <ChevronDown size={18} />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 sm:px-6 pb-6 text-sm text-slate-600 leading-relaxed font-normal border-t border-slate-200/60 pt-3">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Bottom Callout */}
        <div className="mt-10 p-6 rounded-3xl bg-indigo-50/60 border border-indigo-100 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div>
            <h4 className="text-sm font-bold text-slate-900">Have a custom question not listed here?</h4>
            <p className="text-xs text-slate-600 mt-0.5">I typically reply within a couple of hours on WhatsApp or Email.</p>
          </div>
          <a
            href={portfolioData.personal.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2.5 rounded-full bg-brand-indigo hover:bg-brand-indigo-dark text-white text-xs font-bold uppercase tracking-wider flex items-center gap-2 shadow-xs flex-shrink-0"
          >
            <MessageSquare size={14} />
            <span>Chat on WhatsApp</span>
          </a>
        </div>
      </div>
    </section>
  );
}
