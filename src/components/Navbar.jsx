import React, { useState, useEffect } from 'react';
import { Menu, X, FileDown, Sparkles, MessageSquare, ArrowUpRight } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const sections = ['home', 'about', 'skills', 'projects', 'experience', 'education', 'contact'];
      const scrollY = window.scrollY + 180;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollY >= top && scrollY < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about', id: 'about' },
    { name: 'Skills', href: '#skills', id: 'skills' },
    { name: 'Projects', href: '#projects', id: 'projects' },
    { name: 'Experience', href: '#experience', id: 'experience' },
    { name: 'Education', href: '#education', id: 'education' },
    { name: 'Contact', href: '#contact', id: 'contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#111111]/90 backdrop-blur-2xl border-b border-[#222222] shadow-xl shadow-black/50 py-3.5'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8 flex items-center justify-between">
        {/* Brand & Student Live Status */}
        <div className="flex items-center gap-3">
          <a href="#home" className="group flex items-center gap-2">
            <span className="font-black text-2xl tracking-tight text-white group-hover:text-[#b6ff00] transition-colors">
              SB<span className="text-[#b6ff00]">.</span>
            </span>
          </a>

          <a
            href="#contact"
            className="hidden sm:inline-flex items-center gap-2 text-xs font-semibold tracking-wide text-[#b6ff00] bg-[#b6ff00]/10 border border-[#b6ff00]/30 px-3 py-1 rounded-full hover:bg-[#b6ff00]/20 transition-colors"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#b6ff00] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#b6ff00]"></span>
            </span>
            <span>Open to Software & IT Roles</span>
          </a>
        </div>

        {/* Desktop Nav Links */}
        <nav className="hidden lg:flex items-center gap-1 p-1 rounded-full bg-[#181818]/90 border border-[#2a2a2a] shadow-lg backdrop-blur-xl">
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <a
                key={link.name}
                href={link.href}
                className={`text-xs font-semibold tracking-wider px-3 py-1.5 rounded-full transition-all duration-200 ${
                  isActive
                    ? 'bg-[#b6ff00] text-[#111111] shadow-glow-lime font-black'
                    : 'text-slate-400 hover:text-white hover:bg-white/5'
                }`}
              >
                {link.name}
              </a>
            );
          })}
        </nav>

        {/* Quick Action CTAs */}
        <div className="hidden sm:flex items-center gap-3">
          <a
            href={portfolioData.personal.resumeUrl}
            download="Seshaan_B_P_Resume.pdf"
            className="flex items-center gap-1.5 px-4 py-2 text-xs font-semibold text-slate-300 bg-[#1a1a1a] hover:bg-[#222222] border border-[#2f2f2f] rounded-full transition-all duration-200 hover:border-[#b6ff00]/50"
          >
            <FileDown size={14} className="text-[#b6ff00]" />
            <span>Resume</span>
          </a>

          <a
            href="#contact"
            className="flex items-center gap-1.5 px-5 py-2 text-xs font-black text-[#111111] bg-[#b6ff00] hover:bg-[#c6ff24] rounded-full transition-all duration-300 shadow-glow-lime hover:scale-[1.02]"
          >
            <span>Get in Touch</span>
            <ArrowUpRight size={14} />
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden text-white hover:text-[#b6ff00] p-2 rounded-xl bg-[#1a1a1a] border border-[#2a2a2a] focus:outline-none transition-colors"
          aria-label="Toggle Navigation"
        >
          {isOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {isOpen && (
        <div className="lg:hidden bg-[#141414]/98 backdrop-blur-2xl border-b border-[#252525] px-6 py-6 space-y-3.5 shadow-2xl animate-in fade-in slide-in-from-top-4 duration-200">
          <div className="flex items-center gap-2 pb-2 text-xs font-bold text-[#b6ff00]">
            <span className="w-2 h-2 rounded-full bg-[#b6ff00] animate-pulse"></span>
            Open for Software, Web & IT Roles
          </div>
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="block text-sm font-semibold text-slate-300 hover:text-[#b6ff00] py-1.5"
            >
              {link.name}
            </a>
          ))}
          <div className="pt-3 border-t border-[#252525] flex flex-col gap-2">
            <a
              href="#contact"
              onClick={() => setIsOpen(false)}
              className="flex items-center justify-center gap-2 w-full py-2.5 text-xs font-black text-[#111111] bg-[#b6ff00] rounded-full shadow-glow-lime"
            >
              <span>Contact / Connect</span>
              <ArrowUpRight size={14} />
            </a>
            <a
              href={portfolioData.personal.resumeUrl}
              download="Seshaan_B_P_Resume.pdf"
              className="flex items-center justify-center gap-2 w-full py-2.5 text-xs font-semibold text-slate-300 bg-[#1c1c1c] hover:bg-[#252525] rounded-full"
            >
              <FileDown size={14} />
              <span>Download Resume (PDF)</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
