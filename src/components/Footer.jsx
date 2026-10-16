import React from 'react';
import { ArrowUp, Heart, Sparkles } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-slate-200/90 py-12 bg-white text-slate-600">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-slate-100">
          <div>
            <span className="font-black text-2xl tracking-tight text-slate-900">
              SB<span className="text-brand-indigo">.</span>
            </span>
            <p className="text-xs text-slate-500 mt-1 max-w-sm">
              Freelance Full-Stack Developer specializing in MERN Stack, modern responsive user interfaces, and custom web applications.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-6 text-xs font-semibold text-slate-600">
            <a href="#services" className="hover:text-brand-indigo transition-colors">Services</a>
            <a href="#projects" className="hover:text-brand-indigo transition-colors">Case Studies</a>
            <a href="#process" className="hover:text-brand-indigo transition-colors">Process</a>
            <a href="#skills" className="hover:text-brand-indigo transition-colors">Skills</a>
            <a href="#contact" className="hover:text-brand-indigo transition-colors">Contact</a>
          </div>

          <button
            type="button"
            onClick={scrollToTop}
            className="p-3 rounded-full bg-slate-50 hover:bg-slate-100 text-slate-700 hover:text-brand-indigo transition-all border border-slate-200 shadow-2xs"
            title="Back to Top"
          >
            <ArrowUp size={16} />
          </button>
        </div>

        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-400">
          <div>
            © 2026 <strong className="text-slate-700 font-semibold">{portfolioData.personal.name}</strong>. All rights reserved.
          </div>
          <div className="flex items-center gap-2 text-slate-500">
            <span>Clean Light Theme • MERN Architecture</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
