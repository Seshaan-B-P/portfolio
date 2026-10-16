import React from 'react';
import { GraduationCap, Award, CheckCircle, Sparkles } from 'lucide-react';
import Tilt3DCard from './Tilt3DCard';
import { portfolioData } from '../data/portfolioData';

export default function Education() {
  return (
    <section id="education" className="py-24 border-t border-slate-200/80 relative">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        {/* Section Heading */}
        <div className="max-w-2xl mb-12">
          <span className="text-xs font-bold text-brand-indigo uppercase tracking-widest flex items-center gap-1.5">
            <Sparkles size={14} />
            07 — ACADEMIC FOUNDATION
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-slate-900 mt-2">
            Education & <span className="text-gradient-indigo">Certifications.</span>
          </h2>
          <p className="text-slate-600 text-sm sm:text-base mt-2 font-normal">
            Formal computer application studies, technical specializations, and verified skill badges.
          </p>
        </div>

        {/* Education Grid with 3D Tilt */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {portfolioData.education.map((edu, idx) => (
            <Tilt3DCard
              key={idx}
              maxTilt={12}
              className="p-8 rounded-3xl bg-white border border-slate-200/90 hover:border-indigo-300 flex flex-col justify-between shadow-card-soft hover:shadow-card-hover transition-all duration-300"
            >
              <div>
                <div
                  style={{ transform: 'translateZ(25px)' }}
                  className="flex items-center justify-between mb-5"
                >
                  <div className="p-3.5 rounded-2xl bg-indigo-50 text-brand-indigo border border-indigo-100 shadow-2xs">
                    <GraduationCap size={22} />
                  </div>
                  <span className="px-3 py-1 rounded-full text-xs bg-emerald-50 text-emerald-700 border border-emerald-200 font-bold">
                    Score: {edu.score}
                  </span>
                </div>
                <h3
                  style={{ transform: 'translateZ(25px)' }}
                  className="text-xl font-bold text-slate-900 mb-2 leading-snug"
                >
                  {edu.degree}
                </h3>
                <p
                  style={{ transform: 'translateZ(15px)' }}
                  className="text-sm text-slate-600 font-medium mb-1"
                >
                  {edu.institution}
                </p>
              </div>

              <div
                style={{ transform: 'translateZ(20px)' }}
                className="mt-8 pt-4 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500"
              >
                <span className="font-medium">{edu.period}</span>
                <span className="text-brand-indigo font-bold">{edu.status}</span>
              </div>
            </Tilt3DCard>
          ))}
        </div>

        {/* Full Certifications Table Grid */}
        <div className="rounded-3xl bg-white border border-slate-200/90 p-8 shadow-card-soft">
          <div className="flex items-center gap-3 mb-6">
            <Award className="text-brand-indigo" size={22} />
            <h3 className="text-lg font-bold text-slate-900">Verified Badges & Technical Credentials</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
            {portfolioData.certifications.map((item, idx) => (
              <div
                key={idx}
                className="p-4 rounded-2xl bg-slate-50/70 border border-slate-200/60 flex items-center justify-between hover:bg-indigo-50/30 hover:border-indigo-200 transition-all"
              >
                <div className="flex items-center gap-3.5">
                  <CheckCircle size={16} className="text-emerald-500 flex-shrink-0" />
                  <div>
                    <h4 className="text-sm font-semibold text-slate-800">{item.title}</h4>
                    <p className="text-xs text-slate-500 font-normal">{item.issuer}</p>
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
