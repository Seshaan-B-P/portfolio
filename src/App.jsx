import React, { useState, useEffect } from 'react';
import ThreeBackground from './components/ThreeBackground';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import MarqueeTicker from './components/MarqueeTicker';
import Services from './components/Services';
import Projects from './components/Projects';
import Process from './components/Process';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Education from './components/Education';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  const [toast, setToast] = useState('');
  const [mousePos, setMousePos] = useState({ x: -100, y: -100 });
  const [prefillContact, setPrefillContact] = useState(null);

  const showToast = (msg) => {
    setToast(msg);
    setTimeout(() => {
      setToast('');
    }, 2800);
  };

  const handleSelectService = (serviceName) => {
    setPrefillContact({
      subject: `Inquiry regarding: ${serviceName}`,
      message: `Hi Seshaan, I'm interested in discussing a project for: ${serviceName}. Here are some initial details...`,
    });
    const contactEl = document.getElementById('contact');
    if (contactEl) {
      contactEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="relative min-h-screen bg-slate-50 text-slate-800 font-sans selection:bg-brand-indigo/15 selection:text-brand-indigo overflow-x-hidden">
      {/* 1. Real 3D Three.js Interactive Particle Background tuned for Light Theme */}
      <ThreeBackground />

      {/* 2. Soft Ambient Cursor Follower Glow for Light Aesthetics */}
      <div
        className="fixed w-[360px] h-[360px] rounded-full pointer-events-none -z-10 -translate-x-1/2 -translate-y-1/2 transition-transform duration-75 ease-out"
        style={{
          left: `${mousePos.x}px`,
          top: `${mousePos.y}px`,
          background: 'radial-gradient(circle, rgba(99, 102, 241, 0.08) 0%, rgba(2, 132, 199, 0.04) 40%, transparent 70%)',
        }}
      />

      {/* 3. Sticky Frosted Glass Navigation */}
      <Navbar />

      {/* 4. Main Freelance Portfolio Content */}
      <main className="relative z-10">
        <Hero />
        <MarqueeTicker />
        <Services onSelectService={handleSelectService} />
        <Projects />
        <Process />
        <About />
        <Skills />
        <Experience />
        <Education />
        <Testimonials />
        <Contact onShowToast={showToast} prefillData={prefillContact} />
      </main>

      {/* 5. Footer */}
      <Footer />

      {/* 6. Interactive Toast Alert */}
      {toast && (
        <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 px-6 py-3 rounded-full bg-slate-900 text-white text-xs font-bold border border-slate-700 shadow-xl shadow-slate-900/30 backdrop-blur-2xl animate-in fade-in slide-in-from-bottom-3 duration-200">
          {toast}
        </div>
      )}
    </div>
  );
}
