'use client';

import React from 'react';

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-24 relative z-10 border-t border-white/[0.05]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white font-sans mb-8">
          Built With Purpose.
        </h2>
        
        <div className="space-y-6 text-base sm:text-lg text-zinc-400 font-normal leading-relaxed">
          <p>
            FUZICRAFT is a digital studio focused on creating modern, high-quality websites that combine thoughtful design with reliable technology.
          </p>
          <p>
            We believe businesses shouldn't have to choose between a beautiful website and one that actually works.
          </p>
          <p>
            Our goal is simple: create digital experiences that look exceptional, perform fast, and help brands grow.
          </p>
        </div>
      </div>
    </section>
  );
};
