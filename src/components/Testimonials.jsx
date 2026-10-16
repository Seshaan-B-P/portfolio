import React from 'react';
import { Quote, Star, Sparkles } from 'lucide-react';
import Tilt3DCard from './Tilt3DCard';
import { portfolioData } from '../data/portfolioData';

export default function Testimonials() {
  return (
    <section className="py-24 border-t border-slate-200/80 relative bg-slate-50/50">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        {/* Section Header */}
        <div className="max-w-2xl mb-14">
          <span className="text-xs font-bold text-brand-indigo uppercase tracking-widest flex items-center gap-1.5">
            <Sparkles size={14} />
            08 — SOCIAL PROOF & FEEDBACK
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-slate-900 mt-2">
            What collaborators <span className="text-gradient-indigo">say about my work.</span>
          </h2>
          <p className="text-slate-600 text-sm sm:text-base mt-2 font-normal">
            Feedback from team members, project stakeholders, and hackathon adjudicators on technical reliability and execution speed.
          </p>
        </div>

        {/* Testimonials Cards Grid with 3D Tilt */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {portfolioData.testimonials.map((test, idx) => (
            <Tilt3DCard
              key={idx}
              maxTilt={12}
              className="p-8 rounded-3xl bg-white border border-slate-200/90 shadow-card-soft hover:shadow-card-hover transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                {/* Top Quote & Rating Stars popped in 3D */}
                <div
                  style={{ transform: 'translateZ(25px)' }}
                  className="flex items-center justify-between mb-6"
                >
                  <div className="p-3 rounded-2xl bg-indigo-50 text-brand-indigo shadow-2xs">
                    <Quote size={20} />
                  </div>
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, sIdx) => (
                      <Star key={sIdx} size={15} className="fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                </div>

                {/* Quote Text */}
                <p
                  style={{ transform: 'translateZ(15px)' }}
                  className="text-sm text-slate-700 leading-relaxed font-normal italic mb-6"
                >
                  "{test.quote}"
                </p>
              </div>

              {/* Author Info */}
              <div
                style={{ transform: 'translateZ(20px)' }}
                className="pt-5 border-t border-slate-100 flex items-center justify-between"
              >
                <div>
                  <h4 className="text-sm font-bold text-slate-900">{test.author}</h4>
                  <p className="text-xs text-slate-500 font-medium mt-0.5">{test.role}</p>
                </div>
                <span className="text-[11px] font-bold px-3 py-1 rounded-full bg-slate-50 text-slate-600 border border-slate-200">
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
