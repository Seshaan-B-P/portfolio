import React from 'react';
import { Compass, Palette, Code2, Rocket, Sparkles, CheckCircle2 } from 'lucide-react';
import Tilt3DCard from './Tilt3DCard';
import { portfolioData } from '../data/portfolioData';

export default function Process() {
  const processIcons = [
    <Compass className="text-brand-indigo" size={24} />,
    <Palette className="text-cyan-600" size={24} />,
    <Code2 className="text-amber-500" size={24} />,
    <Rocket className="text-emerald-600" size={24} />,
  ];

  return (
    <section id="process" className="py-24 border-t border-slate-200/80 relative bg-slate-50/60">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        {/* Header */}
        <div className="max-w-2xl mb-14">
          <span className="text-xs font-bold text-brand-indigo uppercase tracking-widest flex items-center gap-1.5">
            <Sparkles size={14} />
            03 — COLLABORATION WORKFLOW
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-slate-900 mt-2">
            A transparent, <span className="text-gradient-indigo">frictionless process.</span>
          </h2>
          <p className="text-slate-600 text-sm sm:text-base mt-2 font-normal">
            No endless meetings or opaque agency handoffs. Direct communication, iterative preview links, and zero guesswork from day one.
          </p>
        </div>

        {/* 4 Steps Grid with 3D Tilt */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {portfolioData.freelanceProcess.map((step, idx) => (
            <Tilt3DCard
              key={step.step}
              maxTilt={12}
              className="p-8 rounded-3xl bg-white border border-slate-200/90 shadow-card-soft hover:shadow-card-hover transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                <div
                  style={{ transform: 'translateZ(25px)' }}
                  className="flex items-center justify-between mb-6"
                >
                  <div className="w-12 h-12 rounded-2xl bg-slate-50 border border-slate-200/80 flex items-center justify-center group-hover:scale-110 transition-transform shadow-2xs">
                    {processIcons[idx]}
                  </div>
                  <span className="text-3xl font-black text-slate-200 group-hover:text-brand-indigo transition-colors">
                    {step.step}
                  </span>
                </div>

                <h3
                  style={{ transform: 'translateZ(20px)' }}
                  className="text-lg font-bold text-slate-900 mb-2.5 group-hover:text-brand-indigo transition-colors"
                >
                  {step.title}
                </h3>
                <p
                  style={{ transform: 'translateZ(15px)' }}
                  className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal"
                >
                  {step.description}
                </p>
              </div>

              <div
                style={{ transform: 'translateZ(20px)' }}
                className="pt-6 mt-6 border-t border-slate-100 flex items-center justify-between text-[11px] font-bold text-slate-400 uppercase tracking-wider"
              >
                <span>Phase 0{idx + 1}</span>
                <span className="text-emerald-600 font-bold flex items-center gap-1">
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
