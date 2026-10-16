import React from 'react';
import { GraduationCap, Award, CheckCircle, Sparkles } from 'lucide-react';
import Tilt3DCard from './Tilt3DCard';
import { portfolioData } from '../data/portfolioData';

export default function Education() {
  return (
    <section id="education" className="py-24 border-t border-[#222222] relative">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        {/* Section Heading */}
        <div className="max-w-2xl mb-12">
          <span className="text-xs font-bold text-[#b6ff00] uppercase tracking-widest flex items-center gap-1.5">
            <Sparkles size={14} />
            05 — EDUCATION & CERTIFICATIONS
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white mt-2">
            Education & <span className="text-[#b6ff00]">Certifications.</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base mt-2 font-normal">
            Formal computer application studies, technical specializations, and verified skill badges.
          </p>
        </div>

        {/* Education Grid with 3D Tilt */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {portfolioData.education.map((edu, idx) => (
            <Tilt3DCard
              key={idx}
              maxTilt={12}
              className="p-8 rounded-3xl bg-[#181818] border border-[#262626] hover:border-[#b6ff00]/60 flex flex-col justify-between shadow-card-soft hover:shadow-card-hover transition-all duration-300"
            >
              <div>
                <div
                  style={{ transform: 'translateZ(25px)' }}
                  className="flex items-center justify-between mb-5"
                >
                  <div className="p-3.5 rounded-2xl bg-[#222222] text-[#b6ff00] border border-[#2e2e2e] shadow-inner">
                    <GraduationCap size={22} />
                  </div>
                  <span className="px-3 py-1 rounded-full text-xs bg-[#b6ff00]/10 text-[#b6ff00] border border-[#b6ff00]/30 font-bold">
                    Score: {edu.score}
                  </span>
                </div>
                <h3
                  style={{ transform: 'translateZ(25px)' }}
                  className="text-xl font-bold text-white mb-2 leading-snug"
                >
                  {edu.degree}
                </h3>
                <p
                  style={{ transform: 'translateZ(15px)' }}
                  className="text-sm text-slate-400 font-medium mb-1"
                >
                  {edu.institution}
                </p>
              </div>

              <div
                style={{ transform: 'translateZ(20px)' }}
                className="mt-8 pt-4 border-t border-[#262626] flex items-center justify-between text-xs text-slate-500"
              >
                <span className="font-medium">{edu.period}</span>
                <span className="text-[#b6ff00] font-bold">{edu.status}</span>
              </div>
            </Tilt3DCard>
          ))}
        </div>

        {/* Full Certifications Table Grid */}
        <div className="rounded-3xl bg-[#181818] border border-[#262626] p-8 shadow-card-soft">
          <div className="flex items-center gap-3 mb-6">
            <Award className="text-[#b6ff00]" size={22} />
            <h3 className="text-lg font-bold text-white">Verified Badges & Technical Credentials</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
            {portfolioData.certifications.map((item, idx) => (
              <div
                key={idx}
                className="p-4 rounded-2xl bg-[#202020] border border-[#2b2b2b] flex items-center justify-between hover:border-[#b6ff00]/50 transition-all"
              >
                <div className="flex items-center gap-3.5">
                  <CheckCircle size={16} className="text-[#b6ff00] flex-shrink-0" />
                  <div>
                    <h4 className="text-sm font-semibold text-slate-200">{item.title}</h4>
                    <p className="text-xs text-slate-400 font-normal">{item.issuer}</p>
                  </div>
                </div>
                <span className="text-xs font-semibold text-slate-500 ml-3 flex-shrink-0">{item.year}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
