import React, { useState } from 'react';
import { ChevronDown, HelpCircle, MessageSquare } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function Faq() {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleAccordion = (idx) => {
    setOpenIndex(openIndex === idx ? -1 : idx);
  };

  return (
    <section className="py-24 border-t border-[#222222] relative bg-[#111111]">
      <div className="max-w-4xl mx-auto px-5 sm:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-xs font-bold text-[#b6ff00] uppercase tracking-widest inline-flex items-center gap-1.5">
            <HelpCircle size={14} />
            09 — FREQUENTLY ASKED QUESTIONS
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white mt-2">
            Everything you need <span className="text-[#b6ff00]">to know.</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base mt-2 font-normal">
            Direct answers regarding role availability, academic timeline, stack strengths, team collaboration, and relocation.
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
                    ? 'bg-[#181818] border-[#b6ff00] ring-1 ring-[#b6ff00]/40 shadow-sm'
                    : 'bg-[#181818] border-[#262626] hover:border-[#383838]'
                }`}
              >
                <button
                  type="button"
                  onClick={() => toggleAccordion(idx)}
                  className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 focus:outline-none"
                >
                  <span className="text-base sm:text-lg font-bold text-white">
                    {faq.question}
                  </span>
                  <div
                    className={`p-1.5 rounded-full bg-[#222222] text-slate-400 transition-transform duration-200 flex-shrink-0 ${
                      isOpen ? 'rotate-180 bg-[#222222] text-[#b6ff00]' : ''
                    }`}
                  >
                    <ChevronDown size={18} />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 sm:px-6 pb-6 text-sm text-slate-400 leading-relaxed font-normal border-t border-[#262626] pt-3">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Bottom Callout */}
        <div className="mt-10 p-6 rounded-3xl bg-[#181818] border border-[#2b2b2b] flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left shadow-lg">
          <div>
            <h4 className="text-sm font-bold text-white">Have a specific question or want to schedule an interview?</h4>
            <p className="text-xs text-slate-400 mt-0.5">I typically reply within a few hours on Email, LinkedIn, or WhatsApp.</p>
          </div>
          <a
            href={portfolioData.personal.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2.5 rounded-full bg-[#b6ff00] hover:bg-[#c6ff24] text-[#111111] text-xs font-black uppercase tracking-wider flex items-center gap-2 shadow-glow-lime flex-shrink-0"
          >
            <MessageSquare size={14} />
            <span>Chat on WhatsApp</span>
          </a>
        </div>
      </div>
    </section>
  );
}
