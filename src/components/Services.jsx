import React from 'react';
import { Layers, Database, Activity, Layout, Terminal, CheckCircle2, ArrowRight, Sparkles } from 'lucide-react';
import Tilt3DCard from './Tilt3DCard';
import { portfolioData } from '../data/portfolioData';

export default function Services({ onSelectService }) {
  const serviceIcons = {
    'saas-apps': <Layers className="text-[#b6ff00]" size={26} />,
    'crm-portals': <Database className="text-[#b6ff00]" size={26} />,
    'healthcare-ehr': <Activity className="text-[#b6ff00]" size={26} />,
    'landing-websites': <Layout className="text-[#b6ff00]" size={26} />,
    'api-backend': <Terminal className="text-[#b6ff00]" size={26} />
  };

  return (
    <section id="services" className="py-24 border-t border-[#222222] relative">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <div className="max-w-2xl">
            <span className="text-xs font-bold text-[#b6ff00] uppercase tracking-widest flex items-center gap-1.5">
              <Sparkles size={14} />
              01 — FREELANCE OFFERINGS
            </span>
            <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white mt-2">
              Solutions engineered to <span className="text-[#b6ff00]">deliver business results.</span>
            </h2>
            <p className="text-slate-400 text-sm sm:text-base mt-2 font-normal">
              From MVP ideation to production CRM engineering, each system is crafted with clean architecture, high scalability, and 100% code ownership.
            </p>
          </div>

          <div className="flex items-center gap-2 self-start md:self-auto text-xs font-semibold text-slate-300 bg-[#181818] px-4 py-2 rounded-full border border-[#2a2a2a] shadow-md">
            <span className="w-2 h-2 rounded-full bg-[#b6ff00]"></span>
            <span>Fixed Scope Proposals or Sprint Retainers</span>
          </div>
        </div>

        {/* Services Cards Grid with 3D Tilt */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
          {portfolioData.services.map((service) => (
            <Tilt3DCard
              key={service.id}
              maxTilt={12}
              className={`rounded-3xl p-8 bg-[#181818] border transition-all duration-300 flex flex-col justify-between shadow-card-soft hover:shadow-card-hover group ${
                service.popular ? 'border-[#b6ff00]/60 ring-1 ring-[#b6ff00]/40' : 'border-[#262626]'
              }`}
            >
              <div>
                {/* Header: Icon & Tag popped in 3D */}
                <div
                  style={{ transform: 'translateZ(25px)' }}
                  className="flex items-center justify-between mb-6"
                >
                  <div className="p-3.5 rounded-2xl bg-[#222222] border border-[#2e2e2e] shadow-inner group-hover:scale-110 group-hover:border-[#b6ff00]/40 transition-all">
                    {serviceIcons[service.id]}
                  </div>
                  <span
                    className={`text-xs font-bold px-3 py-1 rounded-full border ${
                      service.popular
                        ? 'bg-[#b6ff00] text-[#111111] font-black border-transparent shadow-glow-lime'
                        : 'bg-[#222222] text-slate-300 border-[#2f2f2f]'
                    }`}
                  >
                    {service.tag}
                  </span>
                </div>

                {/* Subtitle & Title */}
                <span
                  style={{ transform: 'translateZ(15px)' }}
                  className="text-xs font-bold uppercase tracking-wider text-slate-500 block mb-1"
                >
                  {service.subtitle}
                </span>
                <h3
                  style={{ transform: 'translateZ(25px)' }}
                  className="text-xl font-bold text-white mb-3 group-hover:text-[#b6ff00] transition-colors"
                >
                  {service.title}
                </h3>
                <p
                  style={{ transform: 'translateZ(10px)' }}
                  className="text-sm text-slate-400 mb-6 leading-relaxed font-normal"
                >
                  {service.description}
                </p>

                {/* Deliverables Checklist */}
                <div
                  style={{ transform: 'translateZ(15px)' }}
                  className="space-y-2.5 pt-4 border-t border-[#262626]"
                >
                  <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wider block">
                    Deliverables Included:
                  </span>
                  {service.deliverables.map((item, dIdx) => (
                    <div key={dIdx} className="flex items-start gap-2.5 text-xs text-slate-300">
                      <CheckCircle2 size={15} className="text-[#b6ff00] flex-shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Button */}
              <div
                style={{ transform: 'translateZ(20px)' }}
                className="pt-6 mt-6 border-t border-[#262626]"
              >
                <a
                  href="#contact"
                  onClick={() => onSelectService && onSelectService(service.title)}
                  className="w-full py-3 px-4 rounded-2xl text-xs font-black uppercase tracking-wider text-slate-200 bg-[#222222] border border-[#2f2f2f] hover:border-[#b6ff00] flex items-center justify-center gap-2 transition-all group-hover:bg-[#b6ff00] group-hover:text-[#111111] group-hover:border-[#b6ff00] shadow-sm"
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
