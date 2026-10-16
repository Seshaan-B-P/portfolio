import React from 'react';
import { ArrowUp, Heart, Sparkles } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-[#222222] py-12 bg-[#0e0e0e] text-slate-400">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-[#222222]">
          <div>
            <span className="font-black text-2xl tracking-tight text-white">
              SB<span className="text-[#b6ff00]">.</span>
            </span>
            <p className="text-xs text-slate-400 mt-1 max-w-sm">
              MCA Student & Aspiring Software Development Engineer (SDE) specializing in MERN Stack, production web systems, and modern responsive user interfaces.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-6 text-xs font-semibold text-slate-400">
            <a href="#about" className="hover:text-[#b6ff00] transition-colors">About</a>
            <a href="#skills" className="hover:text-[#b6ff00] transition-colors">Skills</a>
            <a href="#projects" className="hover:text-[#b6ff00] transition-colors">Projects</a>
            <a href="#experience" className="hover:text-[#b6ff00] transition-colors">Experience</a>
            <a href="#education" className="hover:text-[#b6ff00] transition-colors">Education</a>
            <a href="#contact" className="hover:text-[#b6ff00] transition-colors">Contact</a>
          </div>

          <button
            type="button"
            onClick={scrollToTop}
            className="p-3 rounded-full bg-[#181818] hover:bg-[#b6ff00] text-[#b6ff00] hover:text-[#111111] transition-all border border-[#262626] shadow-2xs"
            title="Back to Top"
          >
            <ArrowUp size={16} />
          </button>
        </div>

        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-500">
          <div>
            © 2026 <strong className="text-slate-300 font-semibold">{portfolioData.personal.name}</strong>. All rights reserved.
          </div>
          <div className="flex items-center gap-2 text-slate-500">
            <span>MCA Student Portfolio • MERN Stack Architecture • Open to SDE Roles</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
