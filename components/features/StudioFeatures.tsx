'use client';

import React from 'react';
import { 
  PenTool, 
  Zap, 
  TrendingUp, 
  Gauge, 
  Fingerprint, 
  MessageSquare
} from 'lucide-react';
import { motion } from 'framer-motion';

const features = [
  {
    icon: PenTool,
    title: 'DESIGN-FIRST DEVELOPMENT',
    description: 'We design the experience before we write the code.',
  },
  {
    icon: Zap,
    title: 'TEMPLATE SPEED, CUSTOM QUALITY',
    description: 'Start with a proven foundation and customize it around your brand.',
  },
  {
    icon: TrendingUp,
    title: 'CONVERSION-FOCUSED',
    description: 'Every section is designed to inform, engage, or convert.',
  },
  {
    icon: Gauge,
    title: 'PERFORMANCE BY DEFAULT',
    description: 'Clean implementation, responsive layouts, optimized assets, and fast experiences.',
  },
  {
    icon: Fingerprint,
    title: 'BUILT AROUND YOUR BRAND',
    description: "Your website should feel like your business, not someone else's template.",
  },
  {
    icon: MessageSquare,
    title: 'DIRECT COMMUNICATION',
    description: 'Clear communication throughout the design and development process.',
  },
];

export const StudioFeatures: React.FC = () => {
  return (
    <section id="features" className="py-24 relative z-10 scroll-mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white font-sans">
            Why <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-zinc-200 to-zinc-400">FUZICRAFT?</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, idx) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="p-8 rounded-3xl glass-card relative overflow-hidden group hover:border-white/20 transition-colors"
              >
                <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 text-white flex items-center justify-center mb-6">
                  <Icon className="w-5 h-5 text-zinc-300 group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-sm font-bold text-white tracking-wider uppercase mb-3">
                  {feature.title}
                </h3>
                <p className="text-sm text-zinc-400 leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
