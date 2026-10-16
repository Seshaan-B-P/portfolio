import React from 'react';
import { Briefcase, Trophy, Award, Calendar, Sparkles } from 'lucide-react';
import Tilt3DCard from './Tilt3DCard';
import { portfolioData } from '../data/portfolioData';

export default function Experience() {
  return (
    <section id="experience" className="py-24 border-t border-slate-200/80 relative">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left Column: Internships & Practical Experience Timeline */}
          <div className="lg:col-span-7 space-y-8">
            <div>
              <span className="text-xs font-bold text-brand-indigo uppercase tracking-widest flex items-center gap-1.5">
                <Sparkles size={14} />
                06 — EXPERIENCE & TRACK RECORD
              </span>
              <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-slate-900 mt-2">
                Real-world <span className="text-gradient-indigo">industry execution.</span>
              </h2>
              <p className="text-slate-600 text-sm sm:text-base mt-2 font-normal">
                Hands-on internship roles covering full-stack web engineering, cross-functional collaboration, technical debugging, and IT infrastructure.
              </p>
            </div>

            <div className="relative border-l-2 border-slate-200 ml-3 pl-8 space-y-10">
              {portfolioData.experience.map((exp, idx) => (
                <div key={idx} className="relative group">
                  {/* Timeline Node with Glow */}
                  <div className="absolute -left-[41px] top-1.5 w-4 h-4 rounded-full bg-white border-4 border-brand-indigo group-hover:scale-125 transition-transform shadow-xs" />

                  {/* Period & Role */}
                  <div className="flex flex-wrap items-center gap-2 mb-1">
                    <span className="text-xs font-bold text-brand-indigo px-3 py-0.5 rounded-full bg-indigo-50 border border-indigo-100">
                      {exp.period}
                    </span>
                    <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider">{exp.type}</span>
                  </div>

                  <h3 className="text-xl font-bold text-slate-900 mt-2">
                    {exp.role} <span className="text-slate-500 font-normal">at</span> {exp.company}
                  </h3>

                  <ul className="mt-3 space-y-2">
                    {exp.description.map((desc, dIdx) => (
                      <li key={dIdx} className="text-sm text-slate-600 leading-relaxed list-disc list-inside font-normal">
                        {desc}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Achievements & Hackathon Honors */}
          <div className="lg:col-span-5 space-y-6">
            <div>
              <span className="text-xs font-bold text-amber-600 uppercase tracking-widest">
                RECOGNITIONS & MILESTONES
              </span>
              <h3 className="text-2xl font-bold text-slate-900 mt-2">
                Competitive Wins
              </h3>
            </div>

            <div className="space-y-4">
              {portfolioData.achievements.map((item, idx) => (
                <Tilt3DCard
                  key={idx}
                  maxTilt={12}
                  className="p-7 rounded-3xl bg-white border border-slate-200/90 hover:border-amber-400 shadow-card-soft hover:shadow-card-hover transition-all duration-300"
                >
                  <div className="flex items-start gap-4">
                    <div
                      style={{ transform: 'translateZ(25px)' }}
                      className="p-3.5 rounded-2xl bg-amber-50 text-amber-600 border border-amber-200/60 flex-shrink-0 shadow-2xs"
                    >
                      <Trophy size={26} />
                    </div>
                    <div>
                      <div
                        style={{ transform: 'translateZ(15px)' }}
                        className="flex items-center gap-2 mb-1"
                      >
                        <span className="text-xs font-bold text-amber-700 bg-amber-50 px-2.5 py-0.5 rounded-full border border-amber-200">
                          {item.year}
                        </span>
                      </div>
                      <h4
                        style={{ transform: 'translateZ(25px)' }}
                        className="text-lg font-bold text-slate-900"
                      >
                        {item.title}
                      </h4>
                      <p
                        style={{ transform: 'translateZ(15px)' }}
                        className="text-xs font-medium text-slate-500 mt-0.5"
                      >
                        {item.organization}
                      </p>
                      <p
                        style={{ transform: 'translateZ(15px)' }}
                        className="text-xs text-slate-600 mt-3 leading-relaxed font-normal"
                      >
                        {item.highlight}
                      </p>
                    </div>
                  </div>
                </Tilt3DCard>
              ))}
            </div>

            {/* Certifications preview card */}
            <div className="p-7 rounded-3xl bg-white border border-slate-200/90 shadow-card-soft">
              <div className="flex items-center gap-2 mb-4 text-brand-indigo text-xs font-bold uppercase tracking-wider">
                <Award size={18} />
                <span>Selected Certifications</span>
              </div>
              <div className="space-y-2.5">
                {portfolioData.certifications.slice(0, 4).map((cert, cIdx) => (
                  <div key={cIdx} className="flex items-center justify-between text-xs py-2 border-b border-slate-100 last:border-none">
                    <span className="text-slate-700 font-medium">{cert.title}</span>
                    <span className="text-slate-400 font-semibold ml-2">{cert.year}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
