'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const faqs = [
  {
    question: 'Can I customize an existing FUZICRAFT design?',
    answer: 'Yes. Every design foundation in our collection is built to be customized. We adapt the colors, typography, layout, content, and functionality to perfectly match your brand and requirements.'
  },
  {
    question: 'Do you build completely custom websites?',
    answer: 'Absolutely. For ambitious brands, SaaS products, and complex e-commerce stores, we design and engineer bespoke web applications from the ground up.'
  },
  {
    question: 'How long does a website take?',
    answer: 'A customized foundation typically takes 2-4 weeks to launch. Fully custom web applications usually require 4-8 weeks depending on the complexity and scope of the project.'
  },
  {
    question: 'Do you provide hosting?',
    answer: 'We deploy your website using modern, high-performance infrastructure (like Vercel) which ensures blazing-fast speeds and reliable uptime globally. We will handle the entire setup process.'
  },
  {
    question: 'Do you provide maintenance?',
    answer: 'Yes, we offer ongoing maintenance and support packages to ensure your website remains secure, up-to-date, and continues to perform optimally.'
  },
  {
    question: 'Can you integrate WhatsApp, payment gateways, forms, booking systems, or other tools?',
    answer: 'Yes. We seamlessly integrate essential business tools including WhatsApp widgets, Stripe/Razorpay for payments, custom forms, CRMs, and third-party booking systems.'
  },
  {
    question: 'Can you redesign my existing website?',
    answer: 'Yes. We frequently work with businesses to modernize their outdated websites, significantly improving their user experience, performance, and conversion rates.'
  },
  {
    question: 'How does the project process work?',
    answer: 'Our process is simple and transparent: 01 Discover (understanding your goals), 02 Design (visual direction), 03 Develop (engineering), 04 Launch (deployment), and 05 Support (maintenance).'
  }
];

export const FAQSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-24 relative z-10 border-t border-white/[0.05]">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white font-sans mb-4">
            Common Questions
          </h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index}
              className="rounded-2xl bg-white/[0.02] border border-white/[0.06] overflow-hidden"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-5 text-left flex items-center justify-between focus:outline-none"
                aria-expanded={openIndex === index}
              >
                <span className="text-base font-bold text-white pr-4">{faq.question}</span>
                <ChevronDown 
                  className={`w-5 h-5 text-zinc-500 transition-transform duration-300 flex-shrink-0 ${openIndex === index ? 'rotate-180 text-white' : ''}`}
                />
              </button>
              
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-5 text-sm text-zinc-400 leading-relaxed">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
