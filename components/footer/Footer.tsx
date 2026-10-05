'use client';

import React from 'react';
import Link from 'next/link';
import { 
  Code2, 
  Mail, 
  MessageSquare, 
  Heart, 
  ArrowUpRight,
  ShieldCheck,
  Zap,
  Globe
} from 'lucide-react';

const GithubIcon = ({ className = "w-4 h-4" }: { className?: string }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
  </svg>
);

const InstagramIcon = ({ className = "w-4 h-4" }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
);

export const Footer: React.FC = () => {
  return (
    <footer className="bg-zinc-950/90 border-t border-white/10 pt-16 pb-12 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-white/[0.08]">
          {/* Brand Info - Monochrome */}
          <div className="lg:col-span-2 space-y-4">
            <Link href="/" className="flex items-center gap-3 group">
              <div className="flex items-center justify-center w-9 h-9 rounded-xl bg-white/[0.06] border border-white/15 backdrop-blur-md">
                <Code2 className="w-5 h-5 text-white" />
              </div>
              <div className="flex items-center gap-2">
                <span className="font-bold text-lg text-white font-sans">
                  FuziCraft
                </span>
                <span className="px-1.5 py-0.5 text-[9px] font-mono font-semibold uppercase rounded bg-white/10 text-zinc-300">
                  STUDIO
                </span>
              </div>
            </Link>

            <p className="text-xs sm:text-sm text-zinc-400 max-w-sm leading-relaxed">
              Websites, Crafted Different.
            </p>

            {/* Social Links Bar - Monochrome */}
            <div className="flex items-center gap-3 pt-2">
              <a
                href="https://github.com/fuza1lx"
                target="_blank"
                rel="noopener noreferrer"
                title="GitHub: fuza1lx"
                className="w-9 h-9 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-zinc-300 hover:text-white flex items-center justify-center transition-all hover:scale-105"
              >
                <GithubIcon className="w-4 h-4" />
              </a>

              <a
                href="https://instagram.com/fuza1lx"
                target="_blank"
                rel="noopener noreferrer"
                title="Instagram: @fuza1lx"
                className="w-9 h-9 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-zinc-300 hover:text-white flex items-center justify-center transition-all hover:scale-105"
              >
                <InstagramIcon className="w-4 h-4" />
              </a>

              <a
                href="mailto:sfuzailshaikh7@gmail.com"
                title="Email: sfuzailshaikh7@gmail.com"
                className="w-9 h-9 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-zinc-300 hover:text-white flex items-center justify-center transition-all hover:scale-105"
              >
                <Mail className="w-4 h-4" />
              </a>

              <a
                href="https://wa.me/918625993137?text=Hi%20Fuzail%2C%20I'm%20interested%20in%20FuziCraft"
                target="_blank"
                rel="noopener noreferrer"
                title="WhatsApp: +91 8625993137"
                className="w-9 h-9 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-zinc-300 hover:text-white flex items-center justify-center transition-all hover:scale-105"
              >
                <MessageSquare className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Column 1: Navigation */}
          <div>
            <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-zinc-300 mb-4">
              Navigation
            </h4>
            <ul className="space-y-2.5 text-xs text-zinc-400">
              <li>
                <a href="#catalog" className="hover:text-white transition-colors">
                  Work
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-white transition-colors">
                  Services
                </a>
              </li>
              <li>
                <a href="#process" className="hover:text-white transition-colors">
                  Process
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-white transition-colors">
                  About
                </a>
              </li>
              <li>
                <a href="#pricing" className="hover:text-white transition-colors">
                  Pricing
                </a>
              </li>
            </ul>
          </div>

          {/* Column 2: Legal / Extra */}
          <div>
            <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-zinc-300 mb-4">
              Company
            </h4>
            <ul className="space-y-2.5 text-xs text-zinc-400">
              <li>
                <a href="#contact" className="hover:text-white transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Contact & Direct Inquiries */}
          <div>
            <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-zinc-300 mb-4">
              Direct Contact
            </h4>
            <div className="space-y-2.5 text-xs text-zinc-400">
              <p>
                <span className="text-zinc-500 block text-[10px] font-mono uppercase">Lead Engineer</span>
                <span className="text-white font-medium">Fuzail Shaikh</span>
              </p>
              <p>
                <span className="text-zinc-500 block text-[10px] font-mono uppercase">WhatsApp / Call</span>
                <a href="https://wa.me/918625993137" className="text-zinc-200 hover:text-white hover:underline">
                  +91 8625993137
                </a>
              </p>
              <p>
                <span className="text-zinc-500 block text-[10px] font-mono uppercase">Direct Email</span>
                <a href="mailto:sfuzailshaikh7@gmail.com" className="text-zinc-300 hover:text-white">
                  sfuzailshaikh7@gmail.com
                </a>
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Strip - Monochrome */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2 text-xs text-zinc-500">
            <span>© 2026 FUZICRAFT. All rights reserved.</span>
            <span>•</span>
            <span className="text-zinc-400 font-mono">github.com/fuza1lx</span>
          </div>

          {/* Live System Status */}
          <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.03] border border-white/10 text-xs font-mono text-zinc-400">
            <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
            <span className="text-[11px] text-zinc-300">All Systems Operational</span>
            <span className="text-zinc-600">|</span>
            <span className="text-[10px] text-zinc-400">Next.js 15.2 Edge</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
