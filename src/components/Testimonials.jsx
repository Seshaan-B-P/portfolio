import React from 'react';
import { Quote, Star, Sparkles } from 'lucide-react';
import Tilt3DCard from './Tilt3DCard';
import { portfolioData } from '../data/portfolioData';

export default function Testimonials() {
  return (
    <section className="py-24 border-t border-[#222222] relative bg-[#131313]">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        {/* Section Header */}
        <div className="max-w-2xl mb-14">
          <span className="text-xs font-bold text-[#b6ff00] uppercase tracking-widest flex items-center gap-1.5">
            <Sparkles size={14} />
            08 — SOCIAL PROOF & FEEDBACK
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white mt-2">
            What collaborators <span className="text-[#b6ff00]">say about my work.</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base mt-2 font-normal">
            Feedback from team members, project stakeholders, and hackathon adjudicators on technical reliability and execution speed.
          </p>
        </div>

        {/* Testimonials Cards Grid with 3D Tilt */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {portfolioData.testimonials.map((test, idx) => (
            <Tilt3DCard
              key={idx}
              maxTilt={12}
              className="p-8 rounded-3xl bg-[#181818] border border-[#262626] hover:border-[#b6ff00]/60 shadow-card-soft hover:shadow-card-hover transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                {/* Top Quote & Rating Stars popped in 3D */}
                <div
                  style={{ transform: 'translateZ(25px)' }}
                  className="flex items-center justify-between mb-6"
                >
                  <div className="p-3 rounded-2xl bg-[#222222] text-[#b6ff00] border border-[#2e2e2e] shadow-inner">
                    <Quote size={20} />
                  </div>
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, sIdx) => (
                      <Star key={sIdx} size={15} className="fill-[#b6ff00] text-[#b6ff00]" />
                    ))}
                  </div>
                </div>

                {/* Quote Text */}
                <p
                  style={{ transform: 'translateZ(15px)' }}
                  className="text-sm text-slate-300 leading-relaxed font-normal italic mb-6"
                >
                  "{test.quote}"
                </p>
              </div>

              {/* Author Info */}
              <div
                style={{ transform: 'translateZ(20px)' }}
                className="pt-5 border-t border-[#262626] flex items-center justify-between"
              >
                <div>
                  <h4 className="text-sm font-bold text-white">{test.author}</h4>
                  <p className="text-xs text-slate-400 font-medium mt-0.5">{test.role}</p>
                </div>
                <span className="text-[11px] font-bold px-3 py-1 rounded-full bg-[#222222] text-[#b6ff00] border border-[#2f2f2f]">
                  {test.tag}
                </span>
              </div>
            </Tilt3DCard>
          ))}
        </div>
      </div>
    </section>
  );
}
