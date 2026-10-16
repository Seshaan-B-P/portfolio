import React from 'react';
import { ArrowRight, MessageSquare, CheckCircle2, ShieldCheck, MapPin, Zap } from 'lucide-react';
import { LinkedinIcon, GithubIcon } from './SocialIcons';
import Tilt3DCard from './Tilt3DCard';
import { portfolioData } from '../data/portfolioData';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[92vh] pt-32 pb-16 flex items-center overflow-hidden bg-radial-mesh">
      {/* Ambient Soft Mesh Glows */}
      <div className="absolute top-1/4 left-10 w-[420px] h-[420px] bg-indigo-200/35 rounded-full blur-[130px] pointer-events-none -z-10 animate-float-subtle" />
      <div className="absolute bottom-1/4 right-10 w-[420px] h-[420px] bg-sky-200/30 rounded-full blur-[130px] pointer-events-none -z-10 animate-float-subtle" style={{ animationDelay: '2s' }} />

      <div className="max-w-7xl mx-auto px-5 sm:px-8 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
        {/* Left Column: Freelancer Headline & Value Proposition */}
        <div className="lg:col-span-7 space-y-6 text-left">
          {/* Availability Pill */}
          <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-white/90 border border-emerald-200/80 text-xs font-semibold tracking-wide text-emerald-800 shadow-sm backdrop-blur-md">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
            </span>
            <span>{portfolioData.personal.availability}</span>
          </div>

          {/* Heading */}
          <h1 className="text-4xl sm:text-6xl xl:text-7xl font-extrabold tracking-tight leading-[1.08] text-slate-900">
            Engineering digital experiences that{' '}
            <span className="text-gradient-indigo">accelerate business.</span>
          </h1>

          {/* Subtext */}
          <p className="text-base sm:text-lg text-slate-600 max-w-xl font-normal leading-relaxed">
            I’m <span className="text-slate-900 font-bold">{portfolioData.personal.name}</span> — MCA candidate and freelance Full-Stack Engineer. I specialize in architecting production MERN applications, automated CRM portals, and high-performance interactive interfaces.
          </p>

          {/* 3D Value Pills */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-1 max-w-xl">
            <div className="flex items-center gap-2.5 p-3 rounded-2xl bg-white border border-slate-200 shadow-card-soft text-xs font-semibold text-slate-800 hover:border-indigo-300 hover:shadow-card-hover transition-all group">
              <div className="p-1.5 rounded-lg bg-amber-50 text-amber-500 group-hover:scale-110 transition-transform">
                <Zap size={14} />
              </div>
              <span>Fast 1–3 Wk Turnaround</span>
            </div>

            <div className="flex items-center gap-2.5 p-3 rounded-2xl bg-white border border-slate-200 shadow-card-soft text-xs font-semibold text-slate-800 hover:border-indigo-300 hover:shadow-card-hover transition-all group">
              <div className="p-1.5 rounded-lg bg-indigo-50 text-brand-indigo group-hover:scale-110 transition-transform">
                <ShieldCheck size={14} />
              </div>
              <span>Production MERN Stack</span>
            </div>

            <div className="flex items-center gap-2.5 p-3 rounded-2xl bg-white border border-slate-200 shadow-card-soft text-xs font-semibold text-slate-800 hover:border-indigo-300 hover:shadow-card-hover transition-all group">
              <div className="p-1.5 rounded-lg bg-emerald-50 text-emerald-600 group-hover:scale-110 transition-transform">
                <CheckCircle2 size={14} />
              </div>
              <span>100% Code Ownership</span>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center gap-3.5 pt-3">
            <a
              href="#contact"
              className="px-8 py-4 text-xs font-bold uppercase tracking-wider text-white bg-brand-indigo hover:bg-brand-indigo-dark rounded-full transition-all duration-300 flex items-center gap-2.5 shadow-lg shadow-brand-indigo/25 hover:shadow-glow-indigo hover:scale-[1.02] shimmer-hover"
            >
              <span>Start a Project</span>
              <ArrowRight size={15} />
            </a>

            <a
              href={portfolioData.personal.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-4 text-xs font-bold uppercase tracking-wider text-emerald-900 bg-white hover:bg-emerald-50/80 border border-emerald-200 rounded-full transition-all duration-300 flex items-center gap-2 hover:scale-[1.02] shadow-2xs"
            >
              <MessageSquare size={15} className="text-emerald-600" />
              <span>WhatsApp Chat</span>
            </a>

            <a
              href="#projects"
              className="px-5 py-4 text-xs font-semibold text-slate-600 hover:text-slate-900 transition-colors"
            >
              View Client Work ↓
            </a>
          </div>

          {/* Meta Line */}
          <div className="flex flex-wrap items-center gap-4 text-xs font-medium text-slate-500 pt-3 border-t border-slate-200/80">
            <span className="flex items-center gap-1.5 text-slate-700 font-medium">
              <MapPin size={14} className="text-brand-indigo" />
              {portfolioData.personal.location}
            </span>
            <span className="text-slate-300">•</span>
            <span className="text-slate-700 font-medium">MCA Final Year (79%)</span>
            <span className="text-slate-300">•</span>
            <div className="flex items-center gap-3">
              <a
                href={portfolioData.personal.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-500 hover:text-brand-indigo transition-colors"
                title="LinkedIn"
              >
                <LinkedinIcon size={15} />
              </a>
              <a
                href={portfolioData.personal.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-500 hover:text-slate-900 transition-colors"
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
            className="w-full max-w-[460px] rounded-3xl p-3 sm:p-3.5 bg-white/95 border border-slate-200 shadow-xl shadow-slate-200/70 backdrop-blur-2xl overflow-hidden group"
          >
            <div
              style={{ transform: 'translateZ(30px)' }}
              className="relative w-full overflow-hidden rounded-2xl bg-slate-100 shadow-sm"
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
