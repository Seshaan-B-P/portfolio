import React from 'react';
import { Sparkles, CheckCircle2, Zap, ShieldCheck, Trophy, Layers } from 'lucide-react';

export default function MarqueeTicker() {
  const items = [
    { label: 'MCA Candidate — 79% Aggregate', icon: <Sparkles size={14} className="text-[#b6ff00]" /> },
    { label: 'Genesis’26 Hackathon Winner (1st Place)', icon: <Trophy size={14} className="text-[#b6ff00]" /> },
    { label: 'Full-Stack MERN Architecture', icon: <Layers size={14} className="text-[#b6ff00]" /> },
    { label: 'TCS CodeVita Global Rank 15.5k', icon: <Trophy size={14} className="text-[#b6ff00]" /> },
    { label: 'Production Web Systems (EEGA CRM & SmileCare)', icon: <ShieldCheck size={14} className="text-[#b6ff00]" /> },
    { label: 'Open for Software, Web & IT Roles', icon: <Zap size={14} className="text-[#b6ff00]" /> },
    { label: 'React.js, Node.js, Express & MongoDB', icon: <CheckCircle2 size={14} className="text-[#b6ff00]" /> },
    { label: 'Clean Code & Algorithmic Problem Solving', icon: <Sparkles size={14} className="text-[#b6ff00]" /> },
  ];

  return (
    <div className="w-full py-4 bg-[#141414]/90 border-y border-[#222222] backdrop-blur-xl overflow-hidden my-4 relative">
      <div className="animate-marquee flex items-center gap-8 whitespace-nowrap">
        {/* Double the list for seamless continuous infinite marquee */}
        {[...items, ...items, ...items].map((item, idx) => (
          <div
            key={idx}
            className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-[#1a1a1a] border border-[#2b2b2b] text-xs font-semibold text-slate-300 shadow-sm hover:border-[#b6ff00]/60 hover:text-white hover:bg-[#202020] transition-all cursor-default"
          >
            {item.icon}
            <span>{item.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
