'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';

const plans = [
  {
    name: 'STARTER',
    description: 'For getting online',
    price: '₹24,999+',
    suitableFor: ['Personal brands', 'Freelancers', 'Small businesses'],
    popular: false,
    cta: 'Get Started'
  },
  {
    name: 'PROFESSIONAL',
    description: 'For growing businesses',
    price: '₹49,999+',
    suitableFor: ['Startups', 'Established businesses', 'Service companies'],
    popular: true,
    cta: 'Get Started'
  },
  {
    name: 'CUSTOM',
    description: 'For ambitious brands',
    price: "Let's Talk",
    suitableFor: ['E-commerce', 'Complex websites', 'Advanced integrations', 'Custom experiences'],
    popular: false,
    cta: 'Discuss Your Project'
  }
];

export const PricingSection: React.FC = () => {
  return (
    <section id="pricing" className="py-24 relative z-10 border-t border-white/[0.05]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white font-sans">
            Transparent Pricing
          </h2>
          <p className="mt-4 text-sm sm:text-base text-zinc-400">
            Clear decision-making systems tailored to your stage of growth.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
          {plans.map((plan, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className={`relative p-8 rounded-3xl border flex flex-col h-full ${
                plan.popular 
                  ? 'bg-white/[0.04] border-white/20 shadow-2xl shadow-white/5' 
                  : 'bg-white/[0.01] border-white/[0.05]'
              }`}
            >
              {plan.popular && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 px-3 py-1 rounded-full bg-white text-black text-[10px] font-bold tracking-wider uppercase">
                  Most Popular
                </div>
              )}
              
              <div className="mb-6">
                <h3 className="text-sm font-mono font-bold text-zinc-400 tracking-wider mb-2">
                  {plan.name}
                </h3>
                <div className="text-2xl sm:text-3xl font-bold text-white mb-2">{plan.price}</div>
                <p className="text-sm text-zinc-400">{plan.description}</p>
              </div>

              <div className="flex-1">
                <p className="text-xs font-bold text-white mb-4 uppercase tracking-wider">Suitable For:</p>
                <ul className="space-y-3 mb-8">
                  {plan.suitableFor.map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm text-zinc-300">
                      <Check className="w-4 h-4 text-zinc-500 flex-shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <button 
                onClick={() => {
                  const el = document.getElementById('contact');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                }}
                className={`w-full py-3.5 rounded-xl text-sm font-bold transition-all ${
                  plan.popular 
                    ? 'bg-white text-black hover:bg-zinc-200 shadow-md' 
                    : 'bg-white/5 text-white border border-white/10 hover:bg-white/10'
                }`}
              >
                {plan.cta}
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
