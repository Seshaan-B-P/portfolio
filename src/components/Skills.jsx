import React, { useState } from 'react';
import { Layout, Server, Database, Terminal, ShieldCheck, Sparkles } from 'lucide-react';
import Tilt3DCard from './Tilt3DCard';
import { portfolioData } from '../data/portfolioData';

export default function Skills() {
  const [activeFilter, setActiveFilter] = useState('all');

  const filterButtons = [
    { id: 'all', label: 'All Technologies' },
    { id: 'frontend', label: 'Frontend & UI' },
    { id: 'backend', label: 'Backend & APIs' },
    { id: 'db', label: 'Databases & Tools' },
  ];

  const showFrontend = activeFilter === 'all' || activeFilter === 'frontend';
  const showBackend = activeFilter === 'all' || activeFilter === 'backend';
  const showDb = activeFilter === 'all' || activeFilter === 'db';

  return (
    <section id="skills" className="py-24 border-t border-[#222222] relative">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        {/* Section Heading & Filter Bar */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-2xl">
            <span className="text-xs font-bold text-[#b6ff00] uppercase tracking-widest flex items-center gap-1.5">
              <Sparkles size={14} />
              05 — TECH ARSENAL
            </span>
            <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white mt-2">
              Modern stack, <span className="text-[#b6ff00]">battle-tested.</span>
            </h2>
            <p className="text-slate-400 text-sm sm:text-base mt-2 font-normal">
              Practical technologies chosen for high developer velocity, cross-device responsiveness, and bulletproof server stability.
            </p>
          </div>

          {/* Interactive Single-line Filter Strip */}
          <div className="w-full md:w-auto overflow-x-auto no-scrollbar pb-1 md:pb-0">
            <div className="inline-flex items-center gap-1.5 p-1.5 rounded-2xl md:rounded-full bg-[#181818] border border-[#262626] shadow-md">
              {filterButtons.map((btn) => (
                <button
                  key={btn.id}
                  onClick={() => setActiveFilter(btn.id)}
                  className={`px-4 py-2 rounded-xl md:rounded-full text-xs font-semibold whitespace-nowrap transition-all duration-200 ${
                    activeFilter === btn.id
                      ? 'bg-[#b6ff00] text-[#111111] shadow-glow-lime font-black'
                      : 'text-slate-400 hover:text-white'
                  }`}
                >
                  {btn.label}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Skill Category Cards Grid with 3D Tilt */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* 1. Frontend & UI */}
          {showFrontend && (
            <Tilt3DCard
              maxTilt={12}
              className="p-8 rounded-3xl bg-[#181818] border border-[#262626] hover:border-[#b6ff00]/60 shadow-card-soft hover:shadow-card-hover transition-all duration-300"
            >
              <div
                style={{ transform: 'translateZ(25px)' }}
                className="flex items-center gap-3.5 mb-6"
              >
                <div className="p-3.5 rounded-2xl bg-[#222222] text-[#b6ff00] border border-[#2e2e2e] shadow-inner">
                  <Layout size={22} />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white">Frontend & Interface</h3>
                  <p className="text-xs text-slate-500">Interactive, Responsive UX</p>
                </div>
              </div>

              <div
                style={{ transform: 'translateZ(15px)' }}
                className="space-y-3"
              >
                {portfolioData.skills.frontend.map((skill) => (
                  <div
                    key={skill.name}
                    className="p-3.5 rounded-2xl bg-[#202020] border border-[#2b2b2b] flex items-center justify-between hover:border-[#b6ff00]/50 transition-colors"
                  >
                    <span className="text-xs font-semibold text-slate-200">{skill.name}</span>
                    <span className="text-[11px] font-bold px-2.5 py-0.5 rounded-full bg-[#181818] text-[#b6ff00] border border-[#2f2f2f] shadow-xs">
                      {skill.level}
                    </span>
                  </div>
                ))}
              </div>
            </Tilt3DCard>
          )}

          {/* 2. Backend & APIs */}
          {showBackend && (
            <Tilt3DCard
              maxTilt={12}
              className="p-8 rounded-3xl bg-[#181818] border border-[#262626] hover:border-[#b6ff00]/60 shadow-card-soft hover:shadow-card-hover transition-all duration-300"
            >
              <div
                style={{ transform: 'translateZ(25px)' }}
                className="flex items-center gap-3.5 mb-6"
              >
                <div className="p-3.5 rounded-2xl bg-[#222222] text-[#b6ff00] border border-[#2e2e2e] shadow-inner">
                  <Server size={22} />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white">Backend & Security</h3>
                  <p className="text-xs text-slate-500">APIs, Tokens & Scalability</p>
                </div>
              </div>

              <div
                style={{ transform: 'translateZ(15px)' }}
                className="space-y-3"
              >
                {portfolioData.skills.backend.map((skill) => (
                  <div
                    key={skill.name}
                    className="p-3.5 rounded-2xl bg-[#202020] border border-[#2b2b2b] flex items-center justify-between hover:border-[#b6ff00]/50 transition-colors"
                  >
                    <span className="text-xs font-semibold text-slate-200">{skill.name}</span>
                    <span className="text-[11px] font-bold px-2.5 py-0.5 rounded-full bg-[#181818] text-[#b6ff00] border border-[#2f2f2f] shadow-xs">
                      {skill.level}
                    </span>
                  </div>
                ))}
              </div>
            </Tilt3DCard>
          )}

          {/* 3. Databases & DevOps */}
          {showDb && (
            <Tilt3DCard
              maxTilt={12}
              className="p-8 rounded-3xl bg-[#181818] border border-[#262626] hover:border-[#b6ff00]/60 shadow-card-soft hover:shadow-card-hover transition-all duration-300"
            >
              <div
                style={{ transform: 'translateZ(25px)' }}
                className="flex items-center gap-3.5 mb-6"
              >
                <div className="p-3.5 rounded-2xl bg-[#222222] text-[#b6ff00] border border-[#2e2e2e] shadow-inner">
                  <Database size={22} />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white">Databases & Tools</h3>
                  <p className="text-xs text-slate-500">Schemas & Cloud Deployments</p>
                </div>
              </div>

              <div
                style={{ transform: 'translateZ(15px)' }}
                className="space-y-3"
              >
                {portfolioData.skills.databaseAndTools.map((skill) => (
                  <div
                    key={skill.name}
                    className="p-3.5 rounded-2xl bg-[#202020] border border-[#2b2b2b] flex items-center justify-between hover:border-[#b6ff00]/50 transition-colors"
                  >
                    <span className="text-xs font-semibold text-slate-200">{skill.name}</span>
                    <span className="text-[11px] font-bold px-2.5 py-0.5 rounded-full bg-[#181818] text-[#b6ff00] border border-[#2f2f2f] shadow-xs">
                      {skill.level}
                    </span>
                  </div>
                ))}
              </div>
            </Tilt3DCard>
          )}
        </div>

        {/* Core Languages Strip */}
        <div className="mt-8 p-6 rounded-3xl bg-[#181818] border border-[#262626] shadow-card-soft flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-2 text-xs font-bold text-white uppercase tracking-wider">
            <Terminal size={16} className="text-[#b6ff00]" />
            <span>Languages & Fundamentals:</span>
          </div>
          <div className="flex flex-wrap items-center gap-3">
            {portfolioData.skills.languages.map((lang) => (
              <span
                key={lang.name}
                className="px-4 py-2 rounded-xl bg-[#222222] border border-[#2d2d2d] text-xs font-semibold text-slate-300 hover:border-[#b6ff00]/50 transition-colors"
              >
                <strong className="text-white font-bold">{lang.name}</strong> • {lang.type}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
