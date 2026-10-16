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
    <div className="relative min-h-screen bg-[#111111] text-slate-200 font-sans selection:bg-[#b6ff00] selection:text-[#111111] overflow-x-hidden">
      {/* 1. Real 3D Three.js Interactive Particle Background tuned for Dark Neon Theme */}
      <ThreeBackground />

      {/* 2. Soft Ambient Cursor Follower Glow for Electric Lime Aesthetics */}
      <div
        className="fixed w-[360px] h-[360px] rounded-full pointer-events-none -z-10 -translate-x-1/2 -translate-y-1/2 transition-transform duration-75 ease-out"
        style={{
          left: `${mousePos.x}px`,
          top: `${mousePos.y}px`,
          background: 'radial-gradient(circle, rgba(182, 255, 0, 0.12) 0%, rgba(182, 255, 0, 0.04) 40%, transparent 70%)',
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
        <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 px-6 py-3 rounded-full bg-[#181818] text-[#b6ff00] text-xs font-bold border border-[#b6ff00]/40 shadow-xl shadow-black/80 backdrop-blur-2xl animate-in fade-in slide-in-from-bottom-3 duration-200">
          {toast}
        </div>
      )}
    </div>
  );
}
