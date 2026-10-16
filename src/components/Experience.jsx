import React from 'react';
import { Briefcase, Trophy, Award, Calendar, Sparkles } from 'lucide-react';
import Tilt3DCard from './Tilt3DCard';
import { portfolioData } from '../data/portfolioData';

export default function Experience() {
  return (
    <section id="experience" className="py-24 border-t border-[#222222] relative">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left Column: Internships & Practical Experience Timeline */}
          <div className="lg:col-span-7 space-y-8">
            <div>
              <span className="text-xs font-bold text-[#b6ff00] uppercase tracking-widest flex items-center gap-1.5">
                <Sparkles size={14} />
                INTERNSHIPS & EXPERIENCE
              </span>
              <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white mt-2">
                Real-world <span className="text-[#b6ff00]">industry execution.</span>
              </h2>
              <p className="text-slate-400 text-sm sm:text-base mt-2 font-normal">
                Hands-on internship roles covering full-stack web engineering, cross-functional collaboration, technical debugging, and IT infrastructure.
              </p>
            </div>

            <div className="relative border-l-2 border-[#262626] ml-3 pl-8 space-y-10">
              {portfolioData.experience.map((exp, idx) => (
                <div key={idx} className="relative group">
                  {/* Timeline Node with Glow */}
                  <div className="absolute -left-[41px] top-1.5 w-4 h-4 rounded-full bg-[#111111] border-4 border-[#b6ff00] group-hover:scale-125 transition-transform shadow-glow-lime" />

                  {/* Period & Role */}
                  <div className="flex flex-wrap items-center gap-2 mb-1">
                    <span className="text-xs font-bold text-[#b6ff00] px-3 py-0.5 rounded-full bg-[#b6ff00]/10 border border-[#b6ff00]/30">
                      {exp.period}
                    </span>
                    <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider">{exp.type}</span>
                  </div>

                  <h3 className="text-xl font-bold text-white mt-2">
                    {exp.role} <span className="text-slate-500 font-normal">at</span> {exp.company}
                  </h3>

                  <ul className="mt-3 space-y-2">
                    {exp.description.map((desc, dIdx) => (
                      <li key={dIdx} className="text-sm text-slate-400 leading-relaxed list-disc list-inside font-normal">
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
              <span className="text-xs font-bold text-[#b6ff00] uppercase tracking-widest">
                RECOGNITIONS & MILESTONES
              </span>
              <h3 className="text-2xl font-bold text-white mt-2">
                Competitive Wins
              </h3>
            </div>

            <div className="space-y-4">
              {portfolioData.achievements.map((item, idx) => (
                <Tilt3DCard
                  key={idx}
                  maxTilt={12}
                  className="p-7 rounded-3xl bg-[#181818] border border-[#262626] hover:border-[#b6ff00]/60 shadow-card-soft hover:shadow-card-hover transition-all duration-300"
                >
                  <div className="flex items-start gap-4">
                    <div
                      style={{ transform: 'translateZ(25px)' }}
                      className="p-3.5 rounded-2xl bg-[#222222] text-[#b6ff00] border border-[#2e2e2e] flex-shrink-0 shadow-inner"
                    >
                      <Trophy size={26} />
                    </div>
                    <div>
                      <div
                        style={{ transform: 'translateZ(15px)' }}
                        className="flex items-center gap-2 mb-1"
                      >
                        <span className="text-xs font-bold text-[#b6ff00] bg-[#b6ff00]/10 px-2.5 py-0.5 rounded-full border border-[#b6ff00]/30">
                          {item.year}
                        </span>
                      </div>
                      <h4
                        style={{ transform: 'translateZ(25px)' }}
                        className="text-lg font-bold text-white"
                      >
                        {item.title}
                      </h4>
                      <p
                        style={{ transform: 'translateZ(15px)' }}
                        className="text-xs font-medium text-slate-400 mt-0.5"
                      >
                        {item.organization}
                      </p>
                      <p
                        style={{ transform: 'translateZ(15px)' }}
                        className="text-xs text-slate-400 mt-3 leading-relaxed font-normal"
                      >
                        {item.highlight}
                      </p>
                    </div>
                  </div>
                </Tilt3DCard>
              ))}
            </div>

            {/* Certifications preview card */}
            <div className="p-7 rounded-3xl bg-[#181818] border border-[#262626] shadow-card-soft">
              <div className="flex items-center gap-2 mb-4 text-[#b6ff00] text-xs font-bold uppercase tracking-wider">
                <Award size={18} />
                <span>Selected Certifications</span>
              </div>
              <div className="space-y-2.5">
                {portfolioData.certifications.slice(0, 4).map((cert, cIdx) => (
                  <div key={cIdx} className="flex items-center justify-between text-xs py-2 border-b border-[#262626] last:border-none">
                    <span className="text-slate-300 font-medium">{cert.title}</span>
                    <span className="text-slate-500 font-semibold ml-2">{cert.year}</span>
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
