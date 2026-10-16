import React from 'react';
import { ArrowRight, MessageSquare, CheckCircle2, ShieldCheck, MapPin, Trophy, FileDown } from 'lucide-react';
import { LinkedinIcon, GithubIcon } from './SocialIcons';
import Tilt3DCard from './Tilt3DCard';
import { portfolioData } from '../data/portfolioData';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[92vh] pt-32 pb-16 flex items-center overflow-hidden bg-radial-mesh">
      {/* Ambient Soft Mesh Glows */}
      <div className="absolute top-1/4 left-10 w-[420px] h-[420px] bg-[#b6ff00]/10 rounded-full blur-[140px] pointer-events-none -z-10 animate-float-subtle" />
      <div className="absolute bottom-1/4 right-10 w-[420px] h-[420px] bg-[#b6ff00]/5 rounded-full blur-[140px] pointer-events-none -z-10 animate-float-subtle" style={{ animationDelay: '2s' }} />

      <div className="max-w-7xl mx-auto px-5 sm:px-8 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
        {/* Left Column: Student Headline & Academic / Technical Strengths */}
        <div className="lg:col-span-7 space-y-6 text-left">
          {/* Availability Pill */}
          <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-[#181818]/90 border border-[#b6ff00]/30 text-xs font-semibold tracking-wide text-[#b6ff00] shadow-sm backdrop-blur-md">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#b6ff00] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#b6ff00]"></span>
            </span>
            <span>{portfolioData.personal.availability}</span>
          </div>

          {/* Heading */}
          <h1 className="text-4xl sm:text-6xl xl:text-7xl font-extrabold tracking-tight leading-[1.08] text-white">
            Engineering scalable software &{' '}
            <span className="text-[#b6ff00] drop-shadow-[0_0_35px_rgba(182,255,0,0.4)]">solving real problems.</span>
          </h1>

          {/* Subtext */}
          <p className="text-base sm:text-lg text-slate-400 max-w-xl font-normal leading-relaxed">
            I’m <span className="text-white font-bold">{portfolioData.personal.name}</span> — MCA candidate at M. Kumarasamy College of Engineering (79%). Strong foundation in full-stack web development, database architecture, and computer applications. Open for Software Engineering, Web Development, and MCA Graduate / IT roles.
          </p>

          {/* 3D Value Pills */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-1 max-w-xl">
            <div className="flex items-center gap-2.5 p-3 rounded-2xl bg-[#181818] border border-[#262626] shadow-card-soft text-xs font-semibold text-slate-200 hover:border-[#b6ff00]/50 hover:shadow-card-hover transition-all group">
              <div className="p-1.5 rounded-lg bg-[#222222] text-[#b6ff00] group-hover:scale-110 transition-transform">
                <Trophy size={14} />
              </div>
              <span>Hackathon 1st Place</span>
            </div>

            <div className="flex items-center gap-2.5 p-3 rounded-2xl bg-[#181818] border border-[#262626] shadow-card-soft text-xs font-semibold text-slate-200 hover:border-[#b6ff00]/50 hover:shadow-card-hover transition-all group">
              <div className="p-1.5 rounded-lg bg-[#222222] text-[#b6ff00] group-hover:scale-110 transition-transform">
                <ShieldCheck size={14} />
              </div>
              <span>Full-Stack & IT Core</span>
            </div>

            <div className="flex items-center gap-2.5 p-3 rounded-2xl bg-[#181818] border border-[#262626] shadow-card-soft text-xs font-semibold text-slate-200 hover:border-[#b6ff00]/50 hover:shadow-card-hover transition-all group">
              <div className="p-1.5 rounded-lg bg-[#222222] text-[#b6ff00] group-hover:scale-110 transition-transform">
                <CheckCircle2 size={14} />
              </div>
              <span>79% MCA Aggregate</span>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center gap-3.5 pt-3">
            <a
              href="#projects"
              className="px-8 py-4 text-xs font-black uppercase tracking-wider text-[#111111] bg-[#b6ff00] hover:bg-[#c6ff24] rounded-full transition-all duration-300 flex items-center gap-2.5 shadow-glow-lime hover:scale-[1.02] shimmer-hover"
            >
              <span>Explore My Work</span>
              <ArrowRight size={15} />
            </a>

            <a
              href={portfolioData.personal.resumeUrl}
              download="Seshaan_B_P_Resume.pdf"
              className="px-6 py-4 text-xs font-bold uppercase tracking-wider text-slate-200 bg-[#181818] hover:bg-[#222222] border border-[#2d2d2d] hover:border-[#b6ff00]/50 rounded-full transition-all duration-300 flex items-center gap-2 hover:scale-[1.02] shadow-2xs"
            >
              <FileDown size={15} className="text-[#b6ff00]" />
              <span>Download Resume</span>
            </a>

            <a
              href="#contact"
              className="px-5 py-4 text-xs font-semibold text-slate-400 hover:text-[#b6ff00] transition-colors"
            >
              Get in Touch ↓
            </a>
          </div>

          {/* Meta Line */}
          <div className="flex flex-wrap items-center gap-4 text-xs font-medium text-slate-400 pt-3 border-t border-[#262626]">
            <span className="flex items-center gap-1.5 text-slate-300 font-medium">
              <MapPin size={14} className="text-[#b6ff00]" />
              {portfolioData.personal.location}
            </span>
            <span className="text-slate-600">•</span>
            <span className="text-slate-300 font-medium">MCA Final Year (79%)</span>
            <span className="text-slate-600">•</span>
            <div className="flex items-center gap-3">
              <a
                href={portfolioData.personal.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-400 hover:text-[#b6ff00] transition-colors"
                title="LinkedIn"
              >
                <LinkedinIcon size={15} />
              </a>
              <a
                href={portfolioData.personal.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-400 hover:text-[#b6ff00] transition-colors"
                title="GitHub"
              >
                <GithubIcon size={15} />
              </a>
            </div>
          </div>
        </div>

        {/* Right Column: 3D Holographic Studio Profile Card */}
        <div className="lg:col-span-5 flex justify-center">
          <Tilt3DCard
            maxTilt={12}
            className="w-full max-w-[460px] rounded-3xl p-3 sm:p-3.5 bg-[#181818]/95 border border-[#282828] shadow-2xl shadow-black/80 hover:border-[#b6ff00]/50 backdrop-blur-2xl overflow-hidden group"
          >
            <div
              style={{ transform: 'translateZ(30px)' }}
              className="relative w-full overflow-hidden rounded-2xl bg-[#111111] shadow-inner"
            >
              <img
                src={portfolioData.personal.heroImage}
                alt={portfolioData.personal.name}
                className="w-full h-auto object-cover rounded-2xl group-hover:scale-[1.02] transition-transform duration-500 ease-out"
                onError={(e) => {
                  e.target.src = portfolioData.personal.avatarImage;
                }}
              />
            </div>
          </Tilt3DCard>
        </div>
      </div>
    </section>
  );
}
