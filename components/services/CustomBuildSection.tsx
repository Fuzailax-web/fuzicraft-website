'use client';

import React, { useState } from 'react';
import { Currency } from '@/lib/types';
import { 
  Sparkles, 
  ArrowRight, 
  Layers, 
  Code, 
  MessageSquare, 
  Check, 
  Calculator,
  Calendar,
  Clock,
  Coins
} from 'lucide-react';

interface CustomBuildSectionProps {
  currency: Currency;
  onOpenCustomQuote: () => void;
}

export const CustomBuildSection: React.FC<CustomBuildSectionProps> = ({
  currency,
  onOpenCustomQuote,
}) => {
  const [selectedTier, setSelectedTier] = useState<'sprint' | 'full' | 'enterprise'>('full');
  const [includeCms, setIncludeCms] = useState(true);
  const [includePayments, setIncludePayments] = useState(true);
  const [include3D, setInclude3D] = useState(false);

  // Dynamic cost & timeline calculator
  const calculateEstimate = () => {
    let baseUsd = selectedTier === 'sprint' ? 899 : selectedTier === 'full' ? 1899 : 3499;
    let baseInr = selectedTier === 'sprint' ? 75000 : selectedTier === 'full' ? 155000 : 285000;
    let days = selectedTier === 'sprint' ? 7 : selectedTier === 'full' ? 18 : 30;

    if (includeCms) {
      baseUsd += 250;
      baseInr += 20000;
      days += 2;
    }
    if (includePayments) {
      baseUsd += 300;
      baseInr += 25000;
      days += 2;
    }
    if (include3D) {
      baseUsd += 450;
      baseInr += 35000;
      days += 4;
    }

    const priceFormatted = currency === 'USD' 
      ? `$${baseUsd}` 
      : `₹${baseInr.toLocaleString('en-IN')}`;

    return { price: priceFormatted, days };
  };

  const { price, days } = calculateEstimate();

  return (
    <section id="custom-build" className="py-24 relative z-10 scroll-mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl glass-modal p-8 sm:p-12 lg:p-16 border border-white/15 relative overflow-hidden">
          {/* Ambient monochrome background glow */}
          <div className="absolute -top-24 -right-24 w-96 h-96 bg-white/[0.03] rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-white/[0.02] rounded-full blur-3xl pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
            {/* Left Narrative */}
            <div className="lg:col-span-6 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-zinc-300 text-xs font-mono">
                <Sparkles className="w-3.5 h-3.5 text-zinc-400" />
                <span>BESPOKE ENGINEERING COMMISSIONS</span>
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-tight font-sans">
                Need a Custom <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-zinc-200 to-zinc-400">
                  Web Application or SaaS?
                </span>
              </h2>

              <p className="text-sm sm:text-base text-zinc-400 leading-relaxed">
                Work directly with Lead Full-Stack Engineers. We design and develop tailor-made Next.js 15 web applications, headless e-commerce stores, and high-converting marketing experiences from scratch.
              </p>

              <div className="space-y-3 pt-2">
                <div className="flex items-center gap-3 text-xs sm:text-sm text-zinc-300">
                  <span className="w-5 h-5 rounded-full bg-white/10 text-white flex items-center justify-center flex-shrink-0">
                    <Check className="w-3.5 h-3.5" />
                  </span>
                  <span>Direct Slack/WhatsApp channel with Lead Engineers</span>
                </div>
                <div className="flex items-center gap-3 text-xs sm:text-sm text-zinc-300">
                  <span className="w-5 h-5 rounded-full bg-white/10 text-white flex items-center justify-center flex-shrink-0">
                    <Check className="w-3.5 h-3.5" />
                  </span>
                  <span>100% Guaranteed 95+ PageSpeed & Lighthouse Score</span>
                </div>
                <div className="flex items-center gap-3 text-xs sm:text-sm text-zinc-300">
                  <span className="w-5 h-5 rounded-full bg-white/10 text-white flex items-center justify-center flex-shrink-0">
                    <Check className="w-3.5 h-3.5" />
                  </span>
                  <span>Complete Intellectual Property Transfer & Clean Repo</span>
                </div>
              </div>

              <div className="pt-4 flex flex-wrap gap-4">
                <button
                  onClick={onOpenCustomQuote}
                  className="px-8 py-3.5 rounded-full bg-white text-black hover:bg-zinc-200 text-xs sm:text-sm font-bold shadow-xl shadow-white/5 transition-all flex items-center gap-2"
                >
                  <MessageSquare className="w-4 h-4 text-black" />
                  <span>Start Project Consultation</span>
                </button>
              </div>
            </div>

            {/* Right Interactive Scope Estimator */}
            <div className="lg:col-span-6 p-6 sm:p-8 rounded-3xl bg-zinc-950/80 border border-white/10 space-y-6">
              <div className="flex items-center justify-between border-b border-white/10 pb-4">
                <div className="flex items-center gap-2">
                  <Calculator className="w-4 h-4 text-white" />
                  <span className="text-xs font-bold font-mono uppercase tracking-wider text-white">
                    Live Scope & Cost Estimator
                  </span>
                </div>
                <span className="text-[10px] text-zinc-500 font-mono">Instant Quote</span>
              </div>

              {/* Tier Selection */}
              <div>
                <label className="block text-xs text-zinc-400 mb-2 font-medium">1. Project Tier</label>
                <div className="grid grid-cols-3 gap-2">
                  <button
                    type="button"
                    onClick={() => setSelectedTier('sprint')}
                    className={`p-3 rounded-2xl border text-xs text-left transition-all ${
                      selectedTier === 'sprint'
                        ? 'bg-white text-black font-bold'
                        : 'bg-white/5 border-white/10 text-zinc-400 hover:text-white'
                    }`}
                  >
                    <div>Sprint</div>
                    <div className={`text-[10px] mt-0.5 ${selectedTier === 'sprint' ? 'text-zinc-700' : 'text-zinc-500'}`}>Landing + 3 Pages</div>
                  </button>

                  <button
                    type="button"
                    onClick={() => setSelectedTier('full')}
                    className={`p-3 rounded-2xl border text-xs text-left transition-all ${
                      selectedTier === 'full'
                        ? 'bg-white text-black font-bold'
                        : 'bg-white/5 border-white/10 text-zinc-400 hover:text-white'
                    }`}
                  >
                    <div>Full Build</div>
                    <div className={`text-[10px] mt-0.5 ${selectedTier === 'full' ? 'text-zinc-700' : 'text-zinc-500'}`}>Complete Platform</div>
                  </button>

                  <button
                    type="button"
                    onClick={() => setSelectedTier('enterprise')}
                    className={`p-3 rounded-2xl border text-xs text-left transition-all ${
                      selectedTier === 'enterprise'
                        ? 'bg-white text-black font-bold'
                        : 'bg-white/5 border-white/10 text-zinc-400 hover:text-white'
                    }`}
                  >
                    <div>Enterprise</div>
                    <div className={`text-[10px] mt-0.5 ${selectedTier === 'enterprise' ? 'text-zinc-700' : 'text-zinc-500'}`}>SaaS / Web3 App</div>
                  </button>
                </div>
              </div>

              {/* Add-ons Checkboxes */}
              <div>
                <label className="block text-xs text-zinc-400 mb-2 font-medium">2. Specialized Modules</label>
                <div className="space-y-2">
                  <label className="flex items-center justify-between p-3 rounded-xl bg-white/[0.03] border border-white/5 cursor-pointer hover:bg-white/[0.05]">
                    <span className="text-xs text-zinc-300">Sanity.io Headless CMS Studio</span>
                    <input
                      type="checkbox"
                      checked={includeCms}
                      onChange={(e) => setIncludeCms(e.target.checked)}
                      className="w-4 h-4 rounded text-zinc-900 focus:ring-0 cursor-pointer accent-white"
                    />
                  </label>

                  <label className="flex items-center justify-between p-3 rounded-xl bg-white/[0.03] border border-white/5 cursor-pointer hover:bg-white/[0.05]">
                    <span className="text-xs text-zinc-300">Stripe / Razorpay Checkout & Webhooks</span>
                    <input
                      type="checkbox"
                      checked={includePayments}
                      onChange={(e) => setIncludePayments(e.target.checked)}
                      className="w-4 h-4 rounded text-zinc-900 focus:ring-0 cursor-pointer accent-white"
                    />
                  </label>

                  <label className="flex items-center justify-between p-3 rounded-xl bg-white/[0.03] border border-white/5 cursor-pointer hover:bg-white/[0.05]">
                    <span className="text-xs text-zinc-300">3D Interactive WebGL / Shader Canvas</span>
                    <input
                      type="checkbox"
                      checked={include3D}
                      onChange={(e) => setInclude3D(e.target.checked)}
                      className="w-4 h-4 rounded text-zinc-900 focus:ring-0 cursor-pointer accent-white"
                    />
                  </label>
                </div>
              </div>

              {/* Output Result Card */}
              <div className="p-4 rounded-2xl bg-white/[0.06] border border-white/20 flex items-center justify-between">
                <div>
                  <span className="text-[10px] uppercase font-mono tracking-wider text-zinc-400 block">
                    Estimated Timeline & Investment
                  </span>
                  <div className="flex items-baseline gap-3 mt-1">
                    <span className="text-2xl font-mono font-bold text-white">
                      {price}
                    </span>
                    <span className="text-xs text-zinc-300 font-mono">
                      ~ {days} Business Days
                    </span>
                  </div>
                </div>

                <button
                  onClick={onOpenCustomQuote}
                  className="px-4 py-2 rounded-xl bg-white hover:bg-zinc-200 text-black text-xs font-bold transition-all shadow-md"
                >
                  Book Slot
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
