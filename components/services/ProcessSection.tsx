'use client';

import React from 'react';
import { motion } from 'framer-motion';

const steps = [
  { num: '01', title: 'DISCOVER', desc: 'We understand your business, audience, goals, and requirements.' },
  { num: '02', title: 'DESIGN', desc: 'We create the visual direction and user experience.' },
  { num: '03', title: 'DEVELOP', desc: 'We build, test, optimize, and integrate your website.' },
  { num: '04', title: 'LAUNCH', desc: 'We deploy your website and make sure everything works.' },
  { num: '05', title: 'SUPPORT', desc: 'We help maintain, improve, and evolve your website.' },
];

export const ProcessSection: React.FC = () => {
  return (
    <section id="process" className="py-24 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-zinc-300 text-xs font-mono mb-4">
            <span>HOW WE WORK</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white font-sans">
            Our Process
          </h2>
        </div>

        <div className="relative border-l border-white/10 md:border-l-0 md:flex md:items-start md:gap-4 md:overflow-x-auto pb-8 scrollbar-none pl-6 md:pl-0">
          {steps.map((step, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="relative mb-12 md:mb-0 md:flex-shrink-0 md:w-64"
            >
              {/* Timeline dot for mobile */}
              <div className="md:hidden absolute -left-[31px] top-1 w-4 h-4 rounded-full bg-[#0D0D0F] border-2 border-white/30" />
              
              <div className="mb-4 text-xs font-mono font-bold text-zinc-500">
                {step.num}
              </div>
              
              {/* Horizontal line for desktop */}
              <div className="hidden md:block w-full h-[1px] bg-white/10 mb-6 relative">
                <div className="absolute left-0 top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-white/30" />
              </div>

              <h3 className="text-lg font-bold text-white mb-2">{step.title}</h3>
              <p className="text-sm text-zinc-400 leading-relaxed pr-4">{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
