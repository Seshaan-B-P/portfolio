import React from 'react';
import { CheckCircle2, ShieldCheck, Trophy, Users, Code2, Globe, Sparkles } from 'lucide-react';
import Tilt3DCard from './Tilt3DCard';
import { portfolioData } from '../data/portfolioData';

export default function About() {
  const statIcons = [
    <ShieldCheck className="text-emerald-600" size={24} />,
    <Code2 className="text-brand-indigo" size={24} />,
    <Trophy className="text-amber-500" size={24} />,
    <Globe className="text-cyan-600" size={24} />
  ];

  return (
    <section id="about" className="py-24 border-t border-slate-200/80 relative">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Heading & Work Ethics */}
          <div className="lg:col-span-5 space-y-5">
            <span className="text-xs font-bold text-brand-indigo uppercase tracking-widest flex items-center gap-1.5">
              <Sparkles size={14} />
              04 — FREELANCER PRINCIPLES
            </span>
            <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-slate-900 leading-tight">
              Engineering with discipline.
              <br />
              <span className="text-gradient-indigo">Delivering with speed.</span>
            </h2>

            <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal pt-1">
              I partner directly with founders, businesses, and engineering leads looking for an agile developer who takes genuine ownership. No corporate bureaucracy — just clean code, swift responses, and production excellence.
            </p>

            {/* Work Ethics Checklist Box */}
            <div className="p-7 rounded-3xl bg-white border border-slate-200/90 shadow-card-soft space-y-3.5 mt-4">
              <span className="text-xs font-bold text-slate-900 uppercase tracking-wider block">
                My Freelance Guarantee to You:
              </span>
              <div className="space-y-3 pt-1">
                {portfolioData.skills.workEthics.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 text-xs font-medium text-slate-700">
                    <CheckCircle2 size={16} className="text-emerald-500 flex-shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Bio & 3D Interactive Stat Cards */}
          <div className="lg:col-span-7 space-y-6">
            <p className="text-base sm:text-lg text-slate-700 leading-relaxed font-normal">
              {portfolioData.personal.summary}
            </p>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
              My hands-on experience building systems like the <strong className="text-slate-900 font-semibold">EEGA Trust CRM</strong> (managing donor interactions with automated PDF and Excel report generation) and the <strong className="text-slate-900 font-semibold">SmileCare Dental EHR</strong> gives me the practical foundation to ship mission-critical web applications with confidence.
            </p>

            {/* 3D Interactive Stats Cards Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-4">
              {portfolioData.freelanceTrustMetrics.map((stat, idx) => (
                <Tilt3DCard
                  key={idx}
                  maxTilt={14}
                  className="p-6 rounded-3xl bg-white border border-slate-200/90 hover:border-indigo-300 shadow-card-soft hover:shadow-card-hover transition-all duration-300 group text-left"
                >
                  <div style={{ transform: 'translateZ(20px)' }} className="mb-3">
                    {statIcons[idx]}
                  </div>
                  <div
                    style={{ transform: 'translateZ(30px)' }}
                    className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight group-hover:text-brand-indigo transition-colors"
                  >
                    {stat.value}
                  </div>
                  <div
                    style={{ transform: 'translateZ(20px)' }}
                    className="text-xs font-bold uppercase tracking-wider text-slate-800 mt-1"
                  >
                    {stat.label}
                  </div>
                  <div
                    style={{ transform: 'translateZ(15px)' }}
                    className="text-[11px] text-slate-500 mt-1.5 leading-tight hidden sm:block"
                  >
                    {stat.description}
                  </div>
                </Tilt3DCard>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
