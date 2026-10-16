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
    <section id="skills" className="py-24 border-t border-slate-200/80 relative">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        {/* Section Heading & Filter Bar */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-2xl">
            <span className="text-xs font-bold text-brand-indigo uppercase tracking-widest flex items-center gap-1.5">
              <Sparkles size={14} />
              05 — TECH ARSENAL
            </span>
            <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-slate-900 mt-2">
              Modern stack, <span className="text-gradient-indigo">battle-tested.</span>
            </h2>
            <p className="text-slate-600 text-sm sm:text-base mt-2 font-normal">
              Practical technologies chosen for high developer velocity, cross-device responsiveness, and bulletproof server stability.
            </p>
          </div>

          {/* Interactive Single-line Filter Strip */}
          <div className="w-full md:w-auto overflow-x-auto no-scrollbar pb-1 md:pb-0">
            <div className="inline-flex items-center gap-1.5 p-1.5 rounded-2xl md:rounded-full bg-slate-100/90 border border-slate-200 shadow-2xs">
              {filterButtons.map((btn) => (
                <button
                  key={btn.id}
                  onClick={() => setActiveFilter(btn.id)}
                  className={`px-4 py-2 rounded-xl md:rounded-full text-xs font-semibold whitespace-nowrap transition-all duration-200 ${
                    activeFilter === btn.id
                      ? 'bg-brand-indigo text-white shadow-xs font-bold'
                      : 'text-slate-600 hover:text-slate-900 hover:bg-white/80'
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
              className="p-8 rounded-3xl bg-white border border-slate-200/90 shadow-card-soft hover:shadow-card-hover transition-all duration-300"
            >
              <div
                style={{ transform: 'translateZ(25px)' }}
                className="flex items-center gap-3.5 mb-6"
              >
                <div className="p-3.5 rounded-2xl bg-indigo-50 text-brand-indigo border border-indigo-100 shadow-2xs">
                  <Layout size={22} />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900">Frontend & Interface</h3>
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
                    className="p-3.5 rounded-2xl bg-slate-50/80 border border-slate-200/60 flex items-center justify-between hover:bg-indigo-50/40 hover:border-indigo-200 transition-colors"
                  >
                    <span className="text-xs font-semibold text-slate-800">{skill.name}</span>
                    <span className="text-[11px] font-bold px-2.5 py-0.5 rounded-full bg-white text-brand-indigo border border-slate-200 shadow-2xs">
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
              className="p-8 rounded-3xl bg-white border border-slate-200/90 shadow-card-soft hover:shadow-card-hover transition-all duration-300"
            >
              <div
                style={{ transform: 'translateZ(25px)' }}
                className="flex items-center gap-3.5 mb-6"
              >
                <div className="p-3.5 rounded-2xl bg-cyan-50 text-cyan-600 border border-cyan-100 shadow-2xs">
                  <Server size={22} />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900">Backend & Security</h3>
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
                    className="p-3.5 rounded-2xl bg-slate-50/80 border border-slate-200/60 flex items-center justify-between hover:bg-cyan-50/40 hover:border-cyan-200 transition-colors"
                  >
                    <span className="text-xs font-semibold text-slate-800">{skill.name}</span>
                    <span className="text-[11px] font-bold px-2.5 py-0.5 rounded-full bg-white text-cyan-700 border border-slate-200 shadow-2xs">
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
              className="p-8 rounded-3xl bg-white border border-slate-200/90 shadow-card-soft hover:shadow-card-hover transition-all duration-300"
            >
              <div
                style={{ transform: 'translateZ(25px)' }}
                className="flex items-center gap-3.5 mb-6"
              >
                <div className="p-3.5 rounded-2xl bg-emerald-50 text-emerald-600 border border-emerald-100 shadow-2xs">
                  <Database size={22} />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900">Databases & Tools</h3>
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
                    className="p-3.5 rounded-2xl bg-slate-50/80 border border-slate-200/60 flex items-center justify-between hover:bg-emerald-50/40 hover:border-emerald-200 transition-colors"
                  >
                    <span className="text-xs font-semibold text-slate-800">{skill.name}</span>
                    <span className="text-[11px] font-bold px-2.5 py-0.5 rounded-full bg-white text-emerald-700 border border-slate-200 shadow-2xs">
                      {skill.level}
                    </span>
                  </div>
                ))}
              </div>
            </Tilt3DCard>
          )}
        </div>

        {/* Core Languages Strip */}
        <div className="mt-8 p-6 rounded-3xl bg-white border border-slate-200/80 shadow-card-soft flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-2 text-xs font-bold text-slate-800 uppercase tracking-wider">
            <Terminal size={16} className="text-brand-indigo" />
            <span>Languages & Fundamentals:</span>
          </div>
          <div className="flex flex-wrap items-center gap-3">
            {portfolioData.skills.languages.map((lang) => (
              <span
                key={lang.name}
                className="px-4 py-2 rounded-xl bg-slate-50 border border-slate-200/80 text-xs font-semibold text-slate-700 hover:border-indigo-300 transition-colors"
              >
                <strong className="text-slate-900 font-bold">{lang.name}</strong> • {lang.type}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
