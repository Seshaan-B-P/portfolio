import React from 'react';
import { Compass, Palette, Code2, Rocket, Sparkles, CheckCircle2 } from 'lucide-react';
import Tilt3DCard from './Tilt3DCard';
import { portfolioData } from '../data/portfolioData';

export default function Process() {
  const processIcons = [
    <Compass className="text-[#b6ff00]" size={24} />,
    <Palette className="text-[#b6ff00]" size={24} />,
    <Code2 className="text-[#b6ff00]" size={24} />,
    <Rocket className="text-[#b6ff00]" size={24} />,
  ];

  return (
    <section id="process" className="py-24 border-t border-[#222222] relative bg-[#131313]">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        {/* Header */}
        <div className="max-w-2xl mb-14">
          <span className="text-xs font-bold text-[#b6ff00] uppercase tracking-widest flex items-center gap-1.5">
            <Sparkles size={14} />
            03 — ENGINEERING & DEVELOPMENT WORKFLOW
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white mt-2">
            Structured methodology, <span className="text-[#b6ff00]">clean execution.</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base mt-2 font-normal">
            From requirement deconstruction and schema design to modular development and cloud deployment, ensuring disciplined engineering at every stage.
          </p>
        </div>

        {/* 4 Steps Grid with 3D Tilt */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {portfolioData.engineeringProcess.map((step, idx) => (
            <Tilt3DCard
              key={step.step}
              maxTilt={12}
              className="p-8 rounded-3xl bg-[#181818] border border-[#262626] hover:border-[#b6ff00]/60 shadow-card-soft hover:shadow-card-hover transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                <div
                  style={{ transform: 'translateZ(25px)' }}
                  className="flex items-center justify-between mb-6"
                >
                  <div className="w-12 h-12 rounded-2xl bg-[#222222] border border-[#2e2e2e] flex items-center justify-center group-hover:scale-110 transition-transform shadow-inner">
                    {processIcons[idx]}
                  </div>
                  <span className="text-3xl font-black text-slate-700 group-hover:text-[#b6ff00] transition-colors">
                    {step.step}
                  </span>
                </div>

                <h3
                  style={{ transform: 'translateZ(20px)' }}
                  className="text-lg font-bold text-white mb-2.5 group-hover:text-[#b6ff00] transition-colors"
                >
                  {step.title}
                </h3>
                <p
                  style={{ transform: 'translateZ(15px)' }}
                  className="text-xs sm:text-sm text-slate-400 leading-relaxed font-normal"
                >
                  {step.description}
                </p>
              </div>

              <div
                style={{ transform: 'translateZ(20px)' }}
                className="pt-6 mt-6 border-t border-[#262626] flex items-center justify-between text-[11px] font-bold text-slate-500 uppercase tracking-wider"
              >
                <span>Phase 0{idx + 1}</span>
                <span className="text-[#b6ff00] font-bold flex items-center gap-1">
                  <CheckCircle2 size={13} />
                  Milestone Verified
                </span>
              </div>
            </Tilt3DCard>
          ))}
        </div>
      </div>
    </section>
  );
}
