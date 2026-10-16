import React, { useState } from 'react';
import { ExternalLink, Sparkles, FolderGit2, CheckCircle2, ArrowUpRight } from 'lucide-react';
import Tilt3DCard from './Tilt3DCard';
import { portfolioData } from '../data/portfolioData';

export default function Projects() {
  const [filter, setFilter] = useState('all');

  const filteredProjects = portfolioData.projects.filter((p) => {
    if (filter === 'all') return true;
    if (filter === 'lead') return p.badge === 'Team Lead';
    if (filter === 'fullstack') return p.badge === 'Full-Stack';
    return true;
  });

  return (
    <section id="projects" className="py-24 border-t border-slate-200/80 relative">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-2xl">
            <span className="text-xs font-bold text-brand-indigo uppercase tracking-widest flex items-center gap-1.5">
              <Sparkles size={14} />
              02 — SELECTED CASE STUDIES
            </span>
            <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-slate-900 mt-2">
              Proven work with <span className="text-gradient-indigo">measurable impact.</span>
            </h2>
            <p className="text-slate-600 text-sm sm:text-base mt-2 font-normal">
              Production web applications engineered with MERN architecture, responsive Tailwind styling, automated PDF/Excel document flows, and live Vercel deployments.
            </p>
          </div>

          {/* Interactive Filter Pills (Single-line responsive strip) */}
          <div className="w-full md:w-auto overflow-x-auto no-scrollbar pb-1 md:pb-0">
            <div className="inline-flex items-center gap-1.5 p-1.5 rounded-2xl md:rounded-full bg-slate-100/90 border border-slate-200 shadow-2xs">
              <button
                onClick={() => setFilter('all')}
                className={`px-4 py-2 rounded-xl md:rounded-full text-xs font-semibold whitespace-nowrap tracking-wider transition-all duration-200 ${
                  filter === 'all'
                    ? 'bg-white text-slate-900 shadow-xs font-bold'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                All Work ({portfolioData.projects.length})
              </button>
              <button
                onClick={() => setFilter('lead')}
                className={`px-4 py-2 rounded-xl md:rounded-full text-xs font-semibold whitespace-nowrap tracking-wider transition-all duration-200 ${
                  filter === 'lead'
                    ? 'bg-brand-indigo text-white shadow-xs font-bold'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                Team Lead Builds
              </button>
              <button
                onClick={() => setFilter('fullstack')}
                className={`px-4 py-2 rounded-xl md:rounded-full text-xs font-semibold whitespace-nowrap tracking-wider transition-all duration-200 ${
                  filter === 'fullstack'
                    ? 'bg-cyan-700 text-white shadow-xs font-bold'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                Business Websites
              </button>
            </div>
          </div>
        </div>

        {/* 3D Tilt Project Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, idx) => (
            <Tilt3DCard
              key={project.id}
              maxTilt={12}
              className="rounded-3xl bg-white border border-slate-200/90 hover:border-indigo-300 p-8 flex flex-col justify-between group shadow-card-soft hover:shadow-card-hover transition-all duration-300"
            >
              <div>
                {/* Top Badge & Number popped in 3D */}
                <div
                  style={{ transform: 'translateZ(25px)' }}
                  className="flex items-center justify-between text-xs mb-5"
                >
                  <span className="font-extrabold text-slate-400 text-sm">0{idx + 1}</span>
                  <div className="flex items-center gap-2">
                    <span className="px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200 text-[11px] font-bold">
                      {project.status || 'Live'}
                    </span>
                    <span className="px-3 py-1 rounded-full bg-indigo-50 text-brand-indigo border border-indigo-100 font-bold text-[11px]">
                      {project.badge}
                    </span>
                  </div>
                </div>

                {/* Project Category & Title */}
                <span
                  style={{ transform: 'translateZ(15px)' }}
                  className="text-xs font-bold uppercase tracking-wider text-slate-400 block mb-1.5"
                >
                  {project.category}
                </span>
                <h3
                  style={{ transform: 'translateZ(30px)' }}
                  className="text-2xl font-bold text-slate-900 group-hover:text-brand-indigo transition-colors mb-3 leading-snug"
                >
                  {project.title}
                </h3>

                <p
                  style={{ transform: 'translateZ(15px)' }}
                  className="text-sm text-slate-600 leading-relaxed font-normal mb-6"
                >
                  {project.description}
                </p>

                {/* Highlights Checklist popped in 3D */}
                <div
                  style={{ transform: 'translateZ(20px)' }}
                  className="space-y-2.5 pt-4 border-t border-slate-100 mb-6"
                >
                  <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block">
                    Key Outcomes & Architecture:
                  </span>
                  {project.highlights.map((item, hIdx) => (
                    <div key={hIdx} className="flex items-start gap-2.5 text-xs text-slate-700">
                      <CheckCircle2 size={14} className="text-emerald-500 flex-shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                {/* Tech Tags */}
                <div
                  style={{ transform: 'translateZ(20px)' }}
                  className="flex flex-wrap gap-1.5 mb-6"
                >
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-1 text-[11px] font-semibold rounded-lg bg-slate-50 text-slate-700 border border-slate-200/70"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Action: Live Demo Launch */}
                <div style={{ transform: 'translateZ(30px)' }}>
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-3.5 px-5 rounded-2xl text-xs font-bold uppercase tracking-wider text-white bg-slate-900 group-hover:bg-brand-indigo flex items-center justify-center gap-2 transition-all duration-300 shadow-sm group-hover:shadow-glow-indigo group-hover:scale-[1.01]"
                  >
                    <span>Launch Live Demo</span>
                    <ArrowUpRight size={15} />
                  </a>
                </div>
              </div>
            </Tilt3DCard>
          ))}
        </div>
      </div>
    </section>
  );
}
