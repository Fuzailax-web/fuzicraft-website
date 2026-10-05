'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  X, 
  Sparkles, 
  Send, 
  MessageSquare, 
  CheckCircle2, 
  Layers, 
  Clock, 
  Coins, 
  ArrowUpRight 
} from 'lucide-react';

interface CustomBuildModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CustomBuildModal: React.FC<CustomBuildModalProps> = ({ isOpen, onClose }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [projectType, setProjectType] = useState('SaaS & AI Web Application');
  const [budget, setBudget] = useState('$1,500 - $3,500 (₹1.2L - ₹3L)');
  const [timeline, setTimeline] = useState('2-3 Weeks');
  const [description, setDescription] = useState('');

  if (!isOpen) return null;

  const handleWhatsAppSend = (e: React.FormEvent) => {
    e.preventDefault();
    const text = `Hi Fuzail / FuziCraft Team! 🚀\n\nI would like to commission a custom high-performance website build.\n\n*Name:* ${name}\n*Email:* ${email}\n*Phone:* ${phone || 'N/A'}\n*Project Type:* ${projectType}\n*Budget:* ${budget}\n*Timeline:* ${timeline}\n*Details:* ${description || 'Let us discuss on call.'}`;
    
    const encoded = encodeURIComponent(text);
    window.open(`https://wa.me/918625993137?text=${encoded}`, '_blank');
    onClose();
  };

  const handleEmailSend = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`[FuziCraft Custom Build] Inquiry from ${name}`);
    const body = encodeURIComponent(`Hi FuziCraft Studio,\n\nI am interested in a custom website build:\n\nName: ${name}\nEmail: ${email}\nPhone: ${phone}\nProject Type: ${projectType}\nBudget: ${budget}\nTimeline: ${timeline}\n\nProject Scope:\n${description}\n\nLooking forward to hearing from you.\n\nBest,\n${name}`);
    
    window.location.href = `mailto:sfuzailshaikh7@gmail.com?subject=${subject}&body=${body}`;
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-xl animate-in fade-in duration-200">
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 10 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 10 }}
        className="w-full max-w-2xl max-h-[92vh] flex flex-col rounded-3xl glass-modal overflow-hidden border border-white/15 shadow-2xl"
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 bg-zinc-950/80 border-b border-white/10">
          <div className="flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-white" />
            <span className="text-sm font-bold text-white tracking-tight">
              Commission Bespoke Engineering
            </span>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-full bg-white/5 hover:bg-white/10 text-zinc-400 hover:text-white transition-all"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Form Body */}
        <div className="flex-1 overflow-y-auto p-6 space-y-5">
          <div>
            <h3 className="text-2xl font-bold text-white tracking-tight font-sans">
              Let's Build Something Exceptional
            </h3>
            <p className="text-xs text-zinc-400 mt-1">
              Direct access to Lead Full-Stack Engineers. Zero junior handoffs, pure performance optimization.
            </p>
          </div>

          <form onSubmit={handleWhatsAppSend} className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="block text-xs text-zinc-400 mb-1">Your Name *</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Elena Rostova"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-white/[0.04] border border-white/10 text-white text-xs placeholder-zinc-500 focus:outline-none focus:border-white/40"
                />
              </div>

              <div>
                <label className="block text-xs text-zinc-400 mb-1">Email Address *</label>
                <input
                  type="email"
                  required
                  placeholder="elena@studio.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-white/[0.04] border border-white/10 text-white text-xs placeholder-zinc-500 focus:outline-none focus:border-white/40"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              <div>
                <label className="block text-xs text-zinc-400 mb-1">Project Type</label>
                <select
                  value={projectType}
                  onChange={(e) => setProjectType(e.target.value)}
                  className="w-full px-3 py-2.5 rounded-xl bg-white/[0.04] border border-white/10 text-white text-xs focus:outline-none focus:border-white/40 cursor-pointer"
                >
                  <option value="SaaS & AI Web Application" className="bg-zinc-900">SaaS & AI Platform</option>
                  <option value="Luxury E-Commerce" className="bg-zinc-900">Luxury E-Commerce</option>
                  <option value="Agency / Portfolio Showcase" className="bg-zinc-900">Agency / 3D Portfolio</option>
                  <option value="FinTech & Web3 Terminal" className="bg-zinc-900">FinTech & Web3</option>
                  <option value="Enterprise Headless Migration" className="bg-zinc-900">Headless Sanity Rebuild</option>
                </select>
              </div>

              <div>
                <label className="block text-xs text-zinc-400 mb-1">Budget Bracket</label>
                <select
                  value={budget}
                  onChange={(e) => setBudget(e.target.value)}
                  className="w-full px-3 py-2.5 rounded-xl bg-white/[0.04] border border-white/10 text-white text-xs focus:outline-none focus:border-white/40 cursor-pointer"
                >
                  <option value="$1,000 - $2,500 (₹80k - ₹2L)" className="bg-zinc-900">$1,000 - $2,500 (₹80k - ₹2L)</option>
                  <option value="$2,500 - $5,000 (₹2L - ₹4L)" className="bg-zinc-900">$2,500 - $5,000 (₹2L - ₹4L)</option>
                  <option value="$5,000+ (₹4L+)" className="bg-zinc-900">$5,000+ (Enterprise)</option>
                </select>
              </div>

              <div>
                <label className="block text-xs text-zinc-400 mb-1">Target Timeline</label>
                <select
                  value={timeline}
                  onChange={(e) => setTimeline(e.target.value)}
                  className="w-full px-3 py-2.5 rounded-xl bg-white/[0.04] border border-white/10 text-white text-xs focus:outline-none focus:border-white/40 cursor-pointer"
                >
                  <option value="1-2 Weeks (Urgent)" className="bg-zinc-900">1-2 Weeks (Sprint)</option>
                  <option value="2-4 Weeks (Standard)" className="bg-zinc-900">2-4 Weeks (Standard)</option>
                  <option value="1-2 Months (Enterprise)" className="bg-zinc-900">1-2 Months</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-xs text-zinc-400 mb-1">Project Scope & Vision</label>
              <textarea
                rows={3}
                placeholder="Describe your desired features, inspirations, and key goals..."
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                className="w-full px-3.5 py-2.5 rounded-xl bg-white/[0.04] border border-white/10 text-white text-xs placeholder-zinc-500 focus:outline-none focus:border-white/40"
              />
            </div>

            {/* Dual Submit Buttons - Monochrome */}
            <div className="pt-2 grid grid-cols-1 sm:grid-cols-2 gap-3">
              <button
                type="submit"
                className="py-3 px-4 rounded-xl bg-white text-black hover:bg-zinc-200 text-xs font-bold shadow-md transition-all flex items-center justify-center gap-2"
              >
                <MessageSquare className="w-4 h-4 text-black" />
                <span>Chat Instantly on WhatsApp</span>
              </button>

              <button
                type="button"
                onClick={handleEmailSend}
                className="py-3 px-4 rounded-xl bg-white/10 hover:bg-white/15 border border-white/10 text-white text-xs font-semibold transition-all flex items-center justify-center gap-2"
              >
                <Send className="w-4 h-4 text-white" />
                <span>Send via Direct Email</span>
              </button>
            </div>
          </form>

          <div className="p-3 rounded-xl bg-white/[0.02] border border-white/5 text-[11px] text-zinc-400 flex items-center justify-between font-mono">
            <span>Direct: +91 8625993137</span>
            <span>sfuzailshaikh7@gmail.com</span>
          </div>
        </div>
      </motion.div>
    </div>
  );
};
