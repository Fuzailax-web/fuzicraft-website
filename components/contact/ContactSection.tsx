'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MessageSquare, Send } from 'lucide-react';

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    business: '',
    websiteType: 'Business Website',
    budget: '₹24,999 - ₹49,999',
    details: '',
  });

  const [status, setStatus] = useState<'idle' | 'loading' | 'success'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    
    // Simulate API call
    setTimeout(() => {
      setStatus('success');
      // In a real app, send to backend here
    }, 1500);
  };

  return (
    <section id="contact" className="py-24 relative z-10 border-t border-white/[0.05] bg-[#0A0A0C]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <h2 className="text-4xl sm:text-5xl font-bold tracking-tight text-white font-sans mb-6">
              Let's Build <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-zinc-200 to-zinc-400">
                Something Great.
              </span>
            </h2>
            <p className="text-lg text-zinc-400 mb-8 max-w-md">
              Tell us what you're building. We'll help turn your idea into a high-quality digital experience.
            </p>
            
            <div className="space-y-6">
              <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/[0.06]">
                <h4 className="text-white font-bold mb-2">Prefer WhatsApp?</h4>
                <p className="text-sm text-zinc-400 mb-4">Get a faster response by messaging us directly.</p>
                <a
                  href="https://wa.me/918625993137"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white/[0.05] hover:bg-white/[0.1] text-white text-sm font-medium border border-white/10 transition-all"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Chat With Us</span>
                </a>
              </div>
              
              <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/[0.06]">
                <h4 className="text-white font-bold mb-2">Email</h4>
                <a href="mailto:sfuzailshaikh7@gmail.com" className="text-sm text-zinc-400 hover:text-white transition-colors">
                  sfuzailshaikh7@gmail.com
                </a>
              </div>
            </div>
          </div>

          <div className="p-8 sm:p-10 rounded-3xl bg-white/[0.02] border border-white/[0.06]">
            {status === 'success' ? (
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-12"
              >
                <div className="w-16 h-16 rounded-full bg-white/10 flex items-center justify-center mx-auto mb-6 text-white">
                  <Send className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">Message Sent</h3>
                <p className="text-zinc-400">Thank you for reaching out. We will get back to you shortly.</p>
                <button 
                  onClick={() => setStatus('idle')}
                  className="mt-8 px-6 py-2 rounded-full bg-white/10 hover:bg-white/15 text-white text-sm font-medium transition-all"
                >
                  Send another message
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-xs text-zinc-400 mb-1.5 ml-1">Name</label>
                    <input
                      id="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      className="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/10 text-white text-sm placeholder-zinc-600 focus:outline-none focus:border-white/30 transition-colors"
                      placeholder="Jane Doe"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-xs text-zinc-400 mb-1.5 ml-1">Email</label>
                    <input
                      id="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      className="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/10 text-white text-sm placeholder-zinc-600 focus:outline-none focus:border-white/30 transition-colors"
                      placeholder="jane@company.com"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="business" className="block text-xs text-zinc-400 mb-1.5 ml-1">Business / Brand</label>
                  <input
                    id="business"
                    type="text"
                    value={formData.business}
                    onChange={(e) => setFormData({...formData, business: e.target.value})}
                    className="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/10 text-white text-sm placeholder-zinc-600 focus:outline-none focus:border-white/30 transition-colors"
                    placeholder="Company Name"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="websiteType" className="block text-xs text-zinc-400 mb-1.5 ml-1">Website Type</label>
                    <select
                      id="websiteType"
                      value={formData.websiteType}
                      onChange={(e) => setFormData({...formData, websiteType: e.target.value})}
                      className="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/10 text-white text-sm focus:outline-none focus:border-white/30 transition-colors cursor-pointer appearance-none"
                    >
                      <option value="Business Website" className="bg-zinc-900">Business Website</option>
                      <option value="Portfolio" className="bg-zinc-900">Portfolio</option>
                      <option value="E-commerce" className="bg-zinc-900">E-commerce</option>
                      <option value="Landing Page" className="bg-zinc-900">Landing Page</option>
                      <option value="SaaS" className="bg-zinc-900">SaaS</option>
                      <option value="Restaurant" className="bg-zinc-900">Restaurant</option>
                      <option value="Real Estate" className="bg-zinc-900">Real Estate</option>
                      <option value="Agency" className="bg-zinc-900">Agency</option>
                      <option value="Other" className="bg-zinc-900">Other</option>
                    </select>
                  </div>
                  <div>
                    <label htmlFor="budget" className="block text-xs text-zinc-400 mb-1.5 ml-1">Budget</label>
                    <select
                      id="budget"
                      value={formData.budget}
                      onChange={(e) => setFormData({...formData, budget: e.target.value})}
                      className="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/10 text-white text-sm focus:outline-none focus:border-white/30 transition-colors cursor-pointer appearance-none"
                    >
                      <option value="Under ₹24,999" className="bg-zinc-900">Under ₹24,999</option>
                      <option value="₹24,999 - ₹49,999" className="bg-zinc-900">₹24,999 - ₹49,999</option>
                      <option value="₹50,000 - ₹99,999" className="bg-zinc-900">₹50,000 - ₹99,999</option>
                      <option value="₹1,00,000+" className="bg-zinc-900">₹1,00,000+</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="details" className="block text-xs text-zinc-400 mb-1.5 ml-1">Project Details</label>
                  <textarea
                    id="details"
                    required
                    rows={4}
                    value={formData.details}
                    onChange={(e) => setFormData({...formData, details: e.target.value})}
                    className="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/10 text-white text-sm placeholder-zinc-600 focus:outline-none focus:border-white/30 transition-colors resize-none"
                    placeholder="Tell us about your project goals, features you need, etc."
                  />
                </div>

                <button
                  type="submit"
                  disabled={status === 'loading'}
                  className="w-full py-4 mt-2 rounded-xl bg-white text-black hover:bg-zinc-200 text-sm font-bold shadow-xl transition-all disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                >
                  {status === 'loading' ? (
                    <div className="w-5 h-5 border-2 border-black/20 border-t-black rounded-full animate-spin" />
                  ) : (
                    <span>Send Project Request</span>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
