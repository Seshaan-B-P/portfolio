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
    <section id="projects" className="py-24 border-t border-[#222222] relative">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-2xl">
            <span className="text-xs font-bold text-[#b6ff00] uppercase tracking-widest flex items-center gap-1.5">
              <Sparkles size={14} />
              02 — SELECTED CASE STUDIES
            </span>
            <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white mt-2">
              Proven work with <span className="text-[#b6ff00]">measurable impact.</span>
            </h2>
            <p className="text-slate-400 text-sm sm:text-base mt-2 font-normal">
              Production web applications engineered with MERN architecture, responsive Tailwind styling, automated PDF/Excel document flows, and live Vercel deployments.
            </p>
          </div>

          {/* Interactive Filter Pills (Single-line responsive strip) */}
          <div className="w-full md:w-auto overflow-x-auto no-scrollbar pb-1 md:pb-0">
            <div className="inline-flex items-center gap-1.5 p-1.5 rounded-2xl md:rounded-full bg-[#181818] border border-[#262626] shadow-md">
              <button
                onClick={() => setFilter('all')}
                className={`px-4 py-2 rounded-xl md:rounded-full text-xs font-semibold whitespace-nowrap tracking-wider transition-all duration-200 ${
                  filter === 'all'
                    ? 'bg-[#b6ff00] text-[#111111] shadow-glow-lime font-black'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                All Work ({portfolioData.projects.length})
              </button>
              <button
                onClick={() => setFilter('lead')}
                className={`px-4 py-2 rounded-xl md:rounded-full text-xs font-semibold whitespace-nowrap tracking-wider transition-all duration-200 ${
                  filter === 'lead'
                    ? 'bg-[#b6ff00] text-[#111111] shadow-glow-lime font-black'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                Team Lead Builds
              </button>
              <button
                onClick={() => setFilter('fullstack')}
                className={`px-4 py-2 rounded-xl md:rounded-full text-xs font-semibold whitespace-nowrap tracking-wider transition-all duration-200 ${
                  filter === 'fullstack'
                    ? 'bg-[#b6ff00] text-[#111111] shadow-glow-lime font-black'
                    : 'text-slate-400 hover:text-white'
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
              className="rounded-3xl bg-[#181818] border border-[#262626] hover:border-[#b6ff00]/60 p-8 flex flex-col justify-between group shadow-card-soft hover:shadow-card-hover transition-all duration-300"
            >
              <div>
                {/* Top Badge & Number popped in 3D */}
                <div
                  style={{ transform: 'translateZ(25px)' }}
                  className="flex items-center justify-between text-xs mb-5"
                >
                  <span className="font-extrabold text-slate-500 text-sm">0{idx + 1}</span>
                  <div className="flex items-center gap-2">
                    <span className="px-3 py-1 rounded-full bg-[#b6ff00]/10 text-[#b6ff00] border border-[#b6ff00]/30 text-[11px] font-bold">
                      {project.status || 'Live'}
                    </span>
                    <span className="px-3 py-1 rounded-full bg-[#222222] text-slate-300 border border-[#2e2e2e] font-bold text-[11px]">
                      {project.badge}
                    </span>
                  </div>
                </div>

                {/* Project Category & Title */}
                <span
                  style={{ transform: 'translateZ(15px)' }}
                  className="text-xs font-bold uppercase tracking-wider text-slate-500 block mb-1.5"
                >
                  {project.category}
                </span>
                <h3
                  style={{ transform: 'translateZ(30px)' }}
                  className="text-2xl font-bold text-white group-hover:text-[#b6ff00] transition-colors mb-3 leading-snug"
                >
                  {project.title}
                </h3>

                <p
                  style={{ transform: 'translateZ(15px)' }}
                  className="text-sm text-slate-400 leading-relaxed font-normal mb-6"
                >
                  {project.description}
                </p>

                {/* Highlights Checklist popped in 3D */}
                <div
                  style={{ transform: 'translateZ(20px)' }}
                  className="space-y-2.5 pt-4 border-t border-[#262626] mb-6"
                >
                  <span className="text-[11px] font-bold uppercase tracking-wider text-slate-500 block">
                    Key Outcomes & Architecture:
                  </span>
                  {project.highlights.map((item, hIdx) => (
                    <div key={hIdx} className="flex items-start gap-2.5 text-xs text-slate-300">
                      <CheckCircle2 size={14} className="text-[#b6ff00] flex-shrink-0 mt-0.5" />
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
                      className="px-2.5 py-1 text-[11px] font-semibold rounded-lg bg-[#222222] text-slate-300 border border-[#2c2c2c]"
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
                    className="w-full py-3.5 px-5 rounded-2xl text-xs font-black uppercase tracking-wider text-slate-200 bg-[#222222] border border-[#2f2f2f] hover:border-[#b6ff00] group-hover:bg-[#b6ff00] group-hover:text-[#111111] group-hover:border-[#b6ff00] flex items-center justify-center gap-2 transition-all duration-300 shadow-sm group-hover:shadow-glow-lime group-hover:scale-[1.01]"
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
