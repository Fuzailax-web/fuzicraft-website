'use client';

import React from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';

export const FinalCTA: React.FC = () => {
  const scrollToContact = () => {
    const el = document.getElementById('contact');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToCatalog = () => {
    const el = document.getElementById('catalog');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="py-32 relative z-10 border-t border-white/[0.05] overflow-hidden">
      {/* Background ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-white/[0.03] blur-[120px] pointer-events-none rounded-full" />
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative text-center">
        <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white font-sans mb-6">
          Ready to Build <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-zinc-200 to-zinc-400">
            Something Different?
          </span>
        </h2>
        <p className="text-base sm:text-lg text-zinc-400 max-w-xl mx-auto mb-10 leading-relaxed">
          Let's create a website that looks exceptional and works even harder. Start with a proven design foundation or commission a fully custom build.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={scrollToContact}
            className="w-full sm:w-auto px-8 py-4 rounded-full bg-white text-black hover:bg-zinc-200 text-sm font-bold shadow-xl shadow-white/5 transition-all flex items-center justify-center gap-2 group active:scale-95"
          >
            <span>Start a Project</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>

          <button
            onClick={scrollToCatalog}
            className="w-full sm:w-auto px-8 py-4 rounded-full bg-white/[0.04] hover:bg-white/[0.08] border border-white/15 text-white text-sm font-medium transition-all flex items-center justify-center gap-2 group active:scale-95"
          >
            <Sparkles className="w-4 h-4 text-zinc-300 group-hover:rotate-12 transition-transform" />
            <span>View Our Work</span>
          </button>
        </div>
      </div>
    </section>
  );
};
