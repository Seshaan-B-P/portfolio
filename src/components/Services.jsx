import React from 'react';
import { Layers, Database, Activity, Layout, Terminal, CheckCircle2, ArrowRight, Sparkles } from 'lucide-react';
import Tilt3DCard from './Tilt3DCard';
import { portfolioData } from '../data/portfolioData';

export default function Services({ onSelectService }) {
  const serviceIcons = {
    'saas-apps': <Layers className="text-brand-indigo" size={26} />,
    'crm-portals': <Database className="text-emerald-600" size={26} />,
    'healthcare-ehr': <Activity className="text-rose-500" size={26} />,
    'landing-websites': <Layout className="text-cyan-600" size={26} />,
    'api-backend': <Terminal className="text-amber-500" size={26} />
  };

  return (
    <section id="services" className="py-24 border-t border-slate-200/80 relative">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <div className="max-w-2xl">
            <span className="text-xs font-bold text-brand-indigo uppercase tracking-widest flex items-center gap-1.5">
              <Sparkles size={14} />
              01 — FREELANCE OFFERINGS
            </span>
            <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-slate-900 mt-2">
              Solutions engineered to <span className="text-gradient-indigo">deliver business results.</span>
            </h2>
            <p className="text-slate-600 text-sm sm:text-base mt-2 font-normal">
              From MVP ideation to production CRM engineering, each system is crafted with clean architecture, high scalability, and 100% code ownership.
            </p>
          </div>

          <div className="flex items-center gap-2 self-start md:self-auto text-xs font-semibold text-slate-700 bg-white px-4 py-2 rounded-full border border-slate-200 shadow-2xs">
            <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
            <span>Fixed Scope Proposals or Sprint Retainers</span>
          </div>
        </div>

        {/* Services Cards Grid with 3D Tilt */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
          {portfolioData.services.map((service) => (
            <Tilt3DCard
              key={service.id}
              maxTilt={12}
              className={`rounded-3xl p-8 bg-white border transition-all duration-300 flex flex-col justify-between shadow-card-soft hover:shadow-card-hover group ${
                service.popular ? 'border-indigo-300 ring-2 ring-indigo-500/10' : 'border-slate-200/90'
              }`}
            >
              <div>
                {/* Header: Icon & Tag popped in 3D */}
                <div
                  style={{ transform: 'translateZ(25px)' }}
                  className="flex items-center justify-between mb-6"
                >
                  <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200/70 shadow-2xs group-hover:scale-110 transition-transform">
                    {serviceIcons[service.id]}
                  </div>
                  <span
                    className={`text-xs font-bold px-3 py-1 rounded-full border ${
                      service.popular
                        ? 'bg-brand-indigo text-white border-brand-indigo'
                        : 'bg-slate-100 text-slate-700 border-slate-200'
                    }`}
                  >
                    {service.tag}
                  </span>
                </div>

                {/* Subtitle & Title */}
                <span
                  style={{ transform: 'translateZ(15px)' }}
                  className="text-xs font-bold uppercase tracking-wider text-slate-400 block mb-1"
                >
                  {service.subtitle}
                </span>
                <h3
                  style={{ transform: 'translateZ(25px)' }}
                  className="text-xl font-bold text-slate-900 mb-3 group-hover:text-brand-indigo transition-colors"
                >
                  {service.title}
                </h3>
                <p
                  style={{ transform: 'translateZ(10px)' }}
                  className="text-sm text-slate-600 mb-6 leading-relaxed font-normal"
                >
                  {service.description}
                </p>

                {/* Deliverables Checklist */}
                <div
                  style={{ transform: 'translateZ(15px)' }}
                  className="space-y-2.5 pt-4 border-t border-slate-100"
                >
                  <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block">
                    Deliverables Included:
                  </span>
                  {service.deliverables.map((item, dIdx) => (
                    <div key={dIdx} className="flex items-start gap-2.5 text-xs text-slate-700">
                      <CheckCircle2 size={15} className="text-emerald-500 flex-shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Button */}
              <div
                style={{ transform: 'translateZ(20px)' }}
                className="pt-6 mt-6 border-t border-slate-100"
              >
                <a
                  href="#contact"
                  onClick={() => onSelectService && onSelectService(service.title)}
                  className="w-full py-3 px-4 rounded-2xl text-xs font-bold uppercase tracking-wider text-slate-700 hover:text-brand-indigo bg-slate-50 hover:bg-indigo-50 border border-slate-200/80 hover:border-indigo-200 flex items-center justify-center gap-2 transition-all group-hover:bg-brand-indigo group-hover:text-white group-hover:border-brand-indigo shadow-2xs"
                >
                  <span>Inquire This Service</span>
                  <ArrowRight size={14} />
                </a>
              </div>
            </Tilt3DCard>
          ))}
        </div>
      </div>
    </section>
  );
}
