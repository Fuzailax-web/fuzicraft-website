'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Layers, Sliders, Palette, Rocket } from 'lucide-react';

const steps = [
  { id: '01', title: 'CHOOSE', description: 'Select a design foundation', icon: Layers },
  { id: '02', title: 'CUSTOMIZE', description: 'Adapt layout and features', icon: Sliders },
  { id: '03', title: 'BRAND', description: 'Apply your colors and typography', icon: Palette },
  { id: '04', title: 'LAUNCH', description: 'Deploy your premium website', icon: Rocket },
];

export const CustomizationProcess: React.FC = () => {
  return (
    <section className="py-20 relative z-10 border-t border-white/[0.05] bg-[#0A0A0C]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white font-sans mb-6">
            Start With a Design.{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-zinc-200 to-zinc-400">
              Finish With Your Brand.
            </span>
          </h2>
          <p className="text-base sm:text-lg text-zinc-400 font-normal leading-relaxed">
            Choose a proven design foundation and make it completely yours. Change the colors, typography, content, sections, branding, and functionality to match your business.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={step.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative p-6 rounded-2xl bg-white/[0.02] border border-white/[0.06] flex flex-col items-center text-center group"
              >
                <div className="w-12 h-12 rounded-full bg-white/[0.05] border border-white/10 flex items-center justify-center mb-4 text-zinc-300 group-hover:text-white group-hover:scale-110 transition-all">
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">{step.title}</h3>
                <p className="text-sm text-zinc-400">{step.description}</p>
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 -right-4 w-8 h-[1px] bg-white/[0.1] -translate-y-1/2" />
                )}
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
