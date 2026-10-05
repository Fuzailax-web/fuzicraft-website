'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Currency } from '@/lib/types';
import { 
  User, 
  Menu, 
  X, 
  Globe, 
  ArrowUpRight,
  Code2,
  Sparkles
} from 'lucide-react';

interface NavbarProps {
  currency: Currency;
  onCurrencyToggle: () => void;
  onOpenAuthModal: () => void;
  onOpenCustomQuote: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  currency,
  onCurrencyToggle,
  onOpenAuthModal,
  onOpenCustomQuote,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'glass-nav py-3.5'
          : 'bg-transparent py-5 border-b border-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo - Monochrome Minimalist */}
        <Link 
          href="/" 
          className="flex items-center gap-3 group focus:outline-none"
        >
          <div className="relative flex items-center justify-center w-10 h-10 rounded-xl bg-white/[0.06] border border-white/15 backdrop-blur-md shadow-sm group-hover:border-white/40 group-hover:bg-white/[0.1] transition-all duration-300">
            <Code2 className="w-5 h-5 text-white group-hover:scale-105 transition-transform duration-300" />
          </div>
          <div className="flex flex-col">
            <div className="flex items-center gap-2">
              <span className="font-bold text-lg sm:text-xl tracking-tight text-white font-sans">
                FuziCraft
              </span>
              <span className="px-1.5 py-0.5 text-[9px] font-mono font-semibold tracking-widest uppercase rounded bg-white/10 text-zinc-300 border border-white/10">
                STUDIO
              </span>
            </div>
            <span className="text-[10px] text-zinc-500 tracking-wider font-mono">
              PRECISION ENGINEERING
            </span>
          </div>
        </Link>

        {/* Desktop Nav Links */}
        <nav className="hidden md:flex items-center gap-1 lg:gap-1.5 px-4 py-1.5 rounded-full bg-white/[0.03] border border-white/10 backdrop-blur-md">
          <a
            href="#catalog"
            className="px-3.5 py-1.5 text-xs font-medium text-zinc-300 hover:text-white hover:bg-white/[0.08] rounded-full transition-all duration-200"
          >
            Work
          </a>
          <a
            href="#services"
            className="px-3.5 py-1.5 text-xs font-medium text-zinc-300 hover:text-white hover:bg-white/[0.08] rounded-full transition-all duration-200"
          >
            Services
          </a>
          <a
            href="#process"
            className="px-3.5 py-1.5 text-xs font-medium text-zinc-300 hover:text-white hover:bg-white/[0.08] rounded-full transition-all duration-200"
          >
            Process
          </a>
          <a
            href="#about"
            className="px-3.5 py-1.5 text-xs font-medium text-zinc-300 hover:text-white hover:bg-white/[0.08] rounded-full transition-all duration-200"
          >
            About
          </a>
          <a
            href="#pricing"
            className="px-3.5 py-1.5 text-xs font-medium text-zinc-300 hover:text-white hover:bg-white/[0.08] rounded-full transition-all duration-200"
          >
            Pricing
          </a>
        </nav>

        {/* Right CTA Actions */}
        <div className="hidden sm:flex items-center gap-3">
          {/* Currency Toggle */}
          <button
            onClick={onCurrencyToggle}
            title={`Switch to ${currency === 'USD' ? 'INR (₹)' : 'USD ($)'}`}
            className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-full bg-white/[0.04] hover:bg-white/[0.08] border border-white/10 text-zinc-300 hover:text-white transition-all duration-200"
          >
            <Globe className="w-3.5 h-3.5 text-zinc-400" />
            <span className="font-mono font-semibold">{currency}</span>
            <span className="text-[10px] text-zinc-500">{currency === 'USD' ? '$' : '₹'}</span>
          </button>

          {/* Custom Quote CTA */}
          <button
            onClick={onOpenCustomQuote}
            className="px-4 py-2 rounded-full bg-white text-black hover:bg-zinc-200 text-xs font-bold shadow-md hover:shadow-white/10 transition-all duration-200 flex items-center gap-1.5 active:scale-95"
          >
            <span>Start a Project</span>
            <ArrowUpRight className="w-3.5 h-3.5 text-black" />
          </button>
        </div>

        {/* Mobile Hamburger Button */}
        <div className="flex items-center gap-2 sm:hidden">
          <button
            onClick={onCurrencyToggle}
            className="px-2.5 py-1 text-xs font-mono font-semibold rounded-full bg-white/5 border border-white/10 text-zinc-300"
          >
            {currency}
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
            className="p-2 rounded-lg bg-white/5 border border-white/10 text-zinc-300 hover:text-white focus:outline-none"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="sm:hidden glass-modal mx-4 mt-3 p-4 rounded-2xl border border-white/10 animate-in fade-in slide-in-from-top-2 duration-200 flex flex-col gap-3">
          <a
            href="#catalog"
            onClick={() => setMobileMenuOpen(false)}
            className="px-3 py-2 text-sm font-medium text-zinc-200 hover:bg-white/5 rounded-lg"
          >
            Work
          </a>
          <a
            href="#services"
            onClick={() => setMobileMenuOpen(false)}
            className="px-3 py-2 text-sm font-medium text-zinc-200 hover:bg-white/5 rounded-lg"
          >
            Services
          </a>
          <a
            href="#process"
            onClick={() => setMobileMenuOpen(false)}
            className="px-3 py-2 text-sm font-medium text-zinc-200 hover:bg-white/5 rounded-lg"
          >
            Process
          </a>
          <a
            href="#about"
            onClick={() => setMobileMenuOpen(false)}
            className="px-3 py-2 text-sm font-medium text-zinc-200 hover:bg-white/5 rounded-lg"
          >
            About
          </a>
          <a
            href="#pricing"
            onClick={() => setMobileMenuOpen(false)}
            className="px-3 py-2 text-sm font-medium text-zinc-200 hover:bg-white/5 rounded-lg"
          >
            Pricing
          </a>
          <a
            href="#contact"
            onClick={() => setMobileMenuOpen(false)}
            className="px-3 py-2 text-sm font-medium text-zinc-200 hover:bg-white/5 rounded-lg"
          >
            Contact
          </a>

          <div className="pt-3 border-t border-white/10 flex flex-col gap-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenCustomQuote();
              }}
              className="w-full py-2.5 rounded-xl bg-white text-black hover:bg-zinc-200 text-sm font-bold shadow-md transition-all flex items-center justify-center gap-2"
            >
              <span>Start a Project</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
