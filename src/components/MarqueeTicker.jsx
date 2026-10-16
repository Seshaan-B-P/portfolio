import React from 'react';
import { Sparkles, CheckCircle2, Zap, ShieldCheck, Trophy, Layers } from 'lucide-react';

export default function MarqueeTicker() {
  const items = [
    { label: 'Full-Stack MERN Architecture', icon: <Layers size={14} className="text-brand-indigo" /> },
    { label: 'Genesis’26 Hackathon Winner', icon: <Trophy size={14} className="text-amber-500" /> },
    { label: '100% On-Time Sprint Milestones', icon: <CheckCircle2 size={14} className="text-emerald-500" /> },
    { label: 'Custom CRM & EHR Engineering', icon: <ShieldCheck size={14} className="text-cyan-600" /> },
    { label: 'Fast 1–3 Weeks Delivery Track', icon: <Zap size={14} className="text-amber-500" /> },
    { label: '100% Source Code & IP Transfer', icon: <Sparkles size={14} className="text-brand-indigo" /> },
    { label: 'TCS CodeVita Global Rank 15.5k', icon: <Trophy size={14} className="text-brand-indigo" /> },
    { label: 'Production Vercel & Cloud Deploys', icon: <CheckCircle2 size={14} className="text-emerald-500" /> },
  ];

  return (
    <div className="w-full py-4 bg-white/70 border-y border-slate-200/80 backdrop-blur-xl overflow-hidden my-4 relative">
      <div className="animate-marquee flex items-center gap-8 whitespace-nowrap">
        {/* Double the list for seamless continuous infinite marquee */}
        {[...items, ...items, ...items].map((item, idx) => (
          <div
            key={idx}
            className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-slate-50 border border-slate-200/70 text-xs font-semibold text-slate-700 shadow-2xs hover:border-indigo-300 hover:bg-white transition-all cursor-default"
          >
            {item.icon}
            <span>{item.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
