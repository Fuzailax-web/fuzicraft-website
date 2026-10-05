'use client';

import React, { useState } from 'react';
import { MessageSquare, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export const FloatingWhatsApp: React.FC = () => {
  const [showTooltip, setShowTooltip] = useState(true);
  const phoneNumber = '918625993137';
  const defaultMessage = encodeURIComponent("Hi Fuzail / FuziCraft Studio! 🚀 I'm interested in commissioning a high-performance website.");
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${defaultMessage}`;

  return (
    <div className="fixed bottom-6 right-6 z-50 flex items-end gap-3 pointer-events-auto">
      {/* Interactive Tooltip Card - Monochrome */}
      <AnimatePresence>
        {showTooltip && (
          <motion.div
            initial={{ opacity: 0, x: 20, scale: 0.9 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            className="hidden sm:flex items-center gap-3 p-3.5 rounded-2xl glass-modal border border-white/15 shadow-2xl max-w-xs"
          >
            <div className="flex-1">
              <div className="flex items-center gap-1.5 mb-0.5">
                <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
                <span className="text-xs font-bold text-white font-sans">Lead Engineer Online</span>
              </div>
              <p className="text-[11px] text-zinc-400 leading-tight">
                Need a custom website or have a question? Chat directly with Fuzail.
              </p>
            </div>
            <button
              onClick={() => setShowTooltip(false)}
              className="text-zinc-500 hover:text-white p-1"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Floating WhatsApp Bubble - Monochrome Dark Glass with White Glyph */}
      <motion.a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.94 }}
        className="relative group flex items-center justify-center w-14 h-14 rounded-full bg-zinc-900/90 text-white shadow-2xl border border-white/20 hover:border-white/50 hover:bg-zinc-800 transition-all duration-300 backdrop-blur-xl"
        title="Chat on WhatsApp (+91 8625993137)"
      >
        {/* WhatsApp SVG Icon */}
        <svg
          className="w-6 h-6 relative z-10 fill-current text-white"
          viewBox="0 0 24 24"
        >
          <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.711 2.598 2.664-.699c.971.53 1.77.813 2.796.814 3.183 0 5.768-2.587 5.768-5.766 0-3.18-2.586-5.766-5.768-5.766zm9.969 5.766c0 5.518-4.482 10-10 10-1.748 0-3.385-.45-4.819-1.237l-5.181 1.36 1.385-5.059c-.86-1.488-1.385-3.218-1.385-5.064 0-5.518 4.482-10 10-10s10 4.482 10 10z" />
        </svg>

        {/* Online Status Dot - White */}
        <span className="absolute top-0 right-0 w-3 h-3 rounded-full bg-white border-2 border-zinc-950" />
      </motion.a>
    </div>
  );
};
