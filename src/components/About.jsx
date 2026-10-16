import React from 'react';
import { CheckCircle2, ShieldCheck, Trophy, Users, Code2, Globe, Sparkles } from 'lucide-react';
import Tilt3DCard from './Tilt3DCard';
import { portfolioData } from '../data/portfolioData';

export default function About() {
  const statIcons = [
    <ShieldCheck className="text-[#b6ff00]" size={24} />,
    <Code2 className="text-[#b6ff00]" size={24} />,
    <Trophy className="text-[#b6ff00]" size={24} />,
    <Globe className="text-[#b6ff00]" size={24} />
  ];

  return (
    <section id="about" className="py-24 border-t border-[#222222] relative">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Heading & Work Ethics */}
          <div className="lg:col-span-5 space-y-5">
            <span className="text-xs font-bold text-[#b6ff00] uppercase tracking-widest flex items-center gap-1.5">
              <Sparkles size={14} />
              04 — FREELANCER PRINCIPLES
            </span>
            <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white leading-tight">
              Engineering with discipline.
              <br />
              <span className="text-[#b6ff00]">Delivering with speed.</span>
            </h2>

            <p className="text-sm sm:text-base text-slate-400 leading-relaxed font-normal pt-1">
              I partner directly with founders, businesses, and engineering leads looking for an agile developer who takes genuine ownership. No corporate bureaucracy — just clean code, swift responses, and production excellence.
            </p>

            {/* Work Ethics Checklist Box */}
            <div className="p-7 rounded-3xl bg-[#181818] border border-[#262626] shadow-card-soft space-y-3.5 mt-4">
              <span className="text-xs font-bold text-white uppercase tracking-wider block">
                My Freelance Guarantee to You:
              </span>
              <div className="space-y-3 pt-1">
                {portfolioData.skills.workEthics.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 text-xs font-medium text-slate-300">
                    <CheckCircle2 size={16} className="text-[#b6ff00] flex-shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Bio & 3D Interactive Stat Cards */}
          <div className="lg:col-span-7 space-y-6">
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-normal">
              {portfolioData.personal.summary}
            </p>
            <p className="text-sm sm:text-base text-slate-400 leading-relaxed font-normal">
              My hands-on experience building systems like the <strong className="text-white font-semibold">EEGA Trust CRM</strong> (managing donor interactions with automated PDF and Excel report generation) and the <strong className="text-white font-semibold">SmileCare Dental EHR</strong> gives me the practical foundation to ship mission-critical web applications with confidence.
            </p>

            {/* 3D Interactive Stats Cards Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-4">
              {portfolioData.freelanceTrustMetrics.map((stat, idx) => (
                <Tilt3DCard
                  key={idx}
                  maxTilt={14}
                  className="p-6 rounded-3xl bg-[#181818] border border-[#262626] hover:border-[#b6ff00]/60 shadow-card-soft hover:shadow-card-hover transition-all duration-300 group text-left"
                >
                  <div style={{ transform: 'translateZ(20px)' }} className="mb-3">
                    {statIcons[idx]}
                  </div>
                  <div
                    style={{ transform: 'translateZ(30px)' }}
                    className="text-2xl sm:text-3xl font-black text-white tracking-tight group-hover:text-[#b6ff00] transition-colors"
                  >
                    {stat.value}
                  </div>
                  <div
                    style={{ transform: 'translateZ(20px)' }}
                    className="text-xs font-bold uppercase tracking-wider text-slate-200 mt-1"
                  >
                    {stat.label}
                  </div>
                  <div
                    style={{ transform: 'translateZ(15px)' }}
                    className="text-[11px] text-slate-400 mt-1.5 leading-tight hidden sm:block"
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
