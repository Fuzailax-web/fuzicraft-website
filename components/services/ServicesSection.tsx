'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Monitor, Code, ShoppingCart, Layout, RefreshCw, PenTool } from 'lucide-react';

const services = [
  {
    icon: Monitor,
    title: 'Custom Website Design',
    description: 'Bespoke designs tailored to your brand identity, target audience, and business goals.',
  },
  {
    icon: Code,
    title: 'Web Development',
    description: 'Robust, fast, and scalable front-end and back-end development using modern tech stacks.',
  },
  {
    icon: ShoppingCart,
    title: 'E-commerce',
    description: 'High-converting online stores engineered for seamless shopping experiences and performance.',
  },
  {
    icon: Layout,
    title: 'Landing Pages',
    description: 'Focused, conversion-optimized landing pages designed for your marketing campaigns.',
  },
  {
    icon: RefreshCw,
    title: 'Website Redesign',
    description: 'Modernize your outdated website with improved UX, faster load times, and better aesthetics.',
  },
  {
    icon: PenTool,
    title: 'Maintenance & Support',
    description: 'Ongoing technical support, updates, and optimization to keep your website running perfectly.',
  },
];

export const ServicesSection: React.FC = () => {
  return (
    <section id="services" className="py-24 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-zinc-300 text-xs font-mono mb-4">
            <span>OUR CAPABILITIES</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white font-sans">
            Premium Digital <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-zinc-200 to-zinc-400">Services</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, idx) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="p-8 rounded-3xl bg-white/[0.02] border border-white/[0.06] hover:bg-white/[0.04] hover:border-white/[0.1] transition-all group"
              >
                <div className="w-12 h-12 rounded-2xl bg-white/[0.05] border border-white/10 flex items-center justify-center mb-6 text-zinc-300 group-hover:text-white group-hover:scale-110 transition-all">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3 tracking-tight">{service.title}</h3>
                <p className="text-sm text-zinc-400 leading-relaxed">
                  {service.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
