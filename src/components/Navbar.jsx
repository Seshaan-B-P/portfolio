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

      const sections = ['home', 'services', 'projects', 'process', 'skills', 'experience', 'contact'];
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
    { name: 'Services', href: '#services', id: 'services' },
    { name: 'Work', href: '#projects', id: 'projects' },
    { name: 'Process', href: '#process', id: 'process' },
    { name: 'Skills', href: '#skills', id: 'skills' },
    { name: 'Experience', href: '#experience', id: 'experience' },
    { name: 'Contact', href: '#contact', id: 'contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/85 backdrop-blur-2xl border-b border-slate-200/80 shadow-md shadow-slate-200/40 py-3.5'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8 flex items-center justify-between">
        {/* Brand & Freelance Live Status */}
        <div className="flex items-center gap-3">
          <a href="#home" className="group flex items-center gap-2">
            <span className="font-black text-2xl tracking-tight text-slate-900 group-hover:text-brand-indigo transition-colors">
              SB<span className="text-brand-indigo">.</span>
            </span>
          </a>

          <a
            href="#contact"
            className="hidden sm:inline-flex items-center gap-2 text-xs font-semibold tracking-wide text-emerald-800 bg-emerald-50 border border-emerald-200/80 px-3 py-1 rounded-full hover:bg-emerald-100 transition-colors"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span>Available for Hire</span>
          </a>
        </div>

        {/* Desktop Nav Links */}
        <nav className="hidden lg:flex items-center gap-1 p-1 rounded-full bg-white/80 border border-slate-200/80 shadow-xs backdrop-blur-xl">
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <a
                key={link.name}
                href={link.href}
                className={`text-xs font-semibold tracking-wider px-3.5 py-1.5 rounded-full transition-all duration-200 ${
                  isActive
                    ? 'bg-brand-indigo text-white shadow-sm font-bold'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
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
            className="flex items-center gap-1.5 px-4 py-2 text-xs font-semibold text-slate-700 bg-white hover:bg-slate-50 border border-slate-200 rounded-full transition-all duration-200 hover:border-slate-300 shadow-2xs"
          >
            <FileDown size={14} className="text-slate-500" />
            <span>CV</span>
          </a>

          <a
            href="#contact"
            className="flex items-center gap-1.5 px-5 py-2 text-xs font-bold text-white bg-brand-indigo hover:bg-brand-indigo-dark rounded-full transition-all duration-300 shadow-md shadow-brand-indigo/25 hover:shadow-glow-indigo hover:scale-[1.02]"
          >
            <span>Get a Quote</span>
            <ArrowUpRight size={14} />
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden text-slate-700 hover:text-slate-900 p-2 rounded-xl bg-white border border-slate-200 shadow-2xs focus:outline-none transition-colors"
          aria-label="Toggle Navigation"
        >
          {isOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {isOpen && (
        <div className="lg:hidden bg-white/95 backdrop-blur-2xl border-b border-slate-200 px-6 py-6 space-y-3.5 shadow-xl animate-in fade-in slide-in-from-top-4 duration-200">
          <div className="flex items-center gap-2 pb-2 text-xs font-bold text-emerald-700">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
            Available for Freelance Projects
          </div>
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="block text-sm font-semibold text-slate-700 hover:text-brand-indigo py-1.5"
            >
              {link.name}
            </a>
          ))}
          <div className="pt-3 border-t border-slate-100 flex flex-col gap-2">
            <a
              href="#contact"
              onClick={() => setIsOpen(false)}
              className="flex items-center justify-center gap-2 w-full py-2.5 text-xs font-bold text-white bg-brand-indigo rounded-full shadow-sm"
            >
              <span>Start a Project / Hire Me</span>
              <ArrowUpRight size={14} />
            </a>
            <a
              href={portfolioData.personal.resumeUrl}
              download="Seshaan_B_P_Resume.pdf"
              className="flex items-center justify-center gap-2 w-full py-2.5 text-xs font-semibold text-slate-700 bg-slate-100 hover:bg-slate-200 rounded-full"
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
