'use client';

import React, { useState, useRef } from 'react';
import { CatalogItem, Currency } from '@/lib/types';
import { 
  X, 
  Monitor, 
  Tablet, 
  Smartphone, 
  ShoppingCart, 
  RotateCw, 
  Sparkles,
  ExternalLink,
  ShieldCheck
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface LiveDemoModalProps {
  product: CatalogItem | null;
  currency: Currency;
  isOpen: boolean;
  onClose: () => void;
  onOpenCheckout: (product: CatalogItem) => void;
}

type ViewportMode = 'desktop' | 'tablet' | 'mobile';

export const LiveDemoModal: React.FC<LiveDemoModalProps> = ({
  product,
  currency,
  isOpen,
  onClose,
  onOpenCheckout,
}) => {
  const [viewport, setViewport] = useState<ViewportMode>('desktop');
  const [isIframeLoading, setIsIframeLoading] = useState(true);
  const iframeRef = useRef<HTMLIFrameElement>(null);

  if (!isOpen || !product) return null;

  const formattedPrice = currency === 'USD' 
    ? `$${product.priceUSD}`
    : `₹${product.priceINR.toLocaleString('en-IN')}`;

  const handleReloadIframe = () => {
    if (iframeRef.current) {
      setIsIframeLoading(true);
      iframeRef.current.src = iframeRef.current.src;
    }
  };

  const getViewportContainerClass = () => {
    switch (viewport) {
      case 'desktop':
        return 'w-full h-full max-w-full';
      case 'tablet':
        return 'w-[768px] h-[96%] rounded-3xl border-4 border-zinc-700 shadow-2xl overflow-hidden my-auto';
      case 'mobile':
        return 'w-[375px] h-[94%] rounded-[2.5rem] border-4 border-zinc-700 shadow-2xl overflow-hidden my-auto';
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-0 sm:p-3 bg-black/90 backdrop-blur-2xl animate-in fade-in duration-200">
      <motion.div
        initial={{ opacity: 0, scale: 0.98, y: 8 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.98, y: 8 }}
        transition={{ duration: 0.25, ease: 'easeOut' }}
        className="w-full h-full sm:h-[95vh] sm:max-w-[98vw] flex flex-col rounded-none sm:rounded-3xl glass-modal overflow-hidden border-0 sm:border border-white/15 shadow-2xl"
      >
        {/* Top Viewport Switcher & Action Header */}
        <div className="h-16 px-4 sm:px-6 bg-zinc-950/95 border-b border-white/10 flex items-center justify-between flex-shrink-0 z-20">
          {/* Left: Brand / Title */}
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-white animate-pulse" />
              <span className="text-xs sm:text-sm font-bold text-white tracking-tight font-sans">
                {product.title}
              </span>
            </div>
            <span className="hidden md:inline-block px-2.5 py-0.5 rounded text-[10px] font-mono bg-white/10 text-zinc-300 border border-white/10">
              Interactive Live Sandbox
            </span>
          </div>

          {/* Center: Viewport Mode Switcher Bar */}
          <div className="flex items-center p-1 rounded-2xl bg-white/5 border border-white/10">
            <button
              onClick={() => setViewport('desktop')}
              title="Desktop Viewport (100%)"
              className={`px-3 py-1.5 rounded-xl text-xs font-medium flex items-center gap-1.5 transition-all ${
                viewport === 'desktop'
                  ? 'bg-white text-black font-bold shadow-md'
                  : 'text-zinc-400 hover:text-white'
              }`}
            >
              <Monitor className="w-3.5 h-3.5" />
              <span className="hidden sm:inline text-[11px]">Desktop (100%)</span>
            </button>

            <button
              onClick={() => setViewport('tablet')}
              title="Tablet Viewport (768px)"
              className={`px-3 py-1.5 rounded-xl text-xs font-medium flex items-center gap-1.5 transition-all ${
                viewport === 'tablet'
                  ? 'bg-white text-black font-bold shadow-md'
                  : 'text-zinc-400 hover:text-white'
              }`}
            >
              <Tablet className="w-3.5 h-3.5" />
              <span className="hidden sm:inline text-[11px]">Tablet (768px)</span>
            </button>

            <button
              onClick={() => setViewport('mobile')}
              title="Mobile Viewport (375px)"
              className={`px-3 py-1.5 rounded-xl text-xs font-medium flex items-center gap-1.5 transition-all ${
                viewport === 'mobile'
                  ? 'bg-white text-black font-bold shadow-md'
                  : 'text-zinc-400 hover:text-white'
              }`}
            >
              <Smartphone className="w-3.5 h-3.5" />
              <span className="hidden sm:inline text-[11px]">Mobile (375px)</span>
            </button>

            <button
              onClick={handleReloadIframe}
              title="Reload Preview Container"
              className="p-1.5 ml-1 rounded-lg text-zinc-400 hover:text-white hover:bg-white/10 transition-all"
            >
              <RotateCw className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Right: Prominent "Buy This Template" & "Close (X)" */}
          <div className="flex items-center gap-2 sm:gap-3">
            <button
              onClick={() => {
                onClose();
                onOpenCheckout(product);
              }}
              className="px-4 sm:px-5 py-2 rounded-full bg-white text-black hover:bg-zinc-200 text-xs font-bold shadow-md hover:shadow-white/20 transition-all flex items-center gap-1.5 active:scale-95"
            >
              <ShoppingCart className="w-3.5 h-3.5 text-black" />
              <span className="hidden sm:inline">Buy This Template ({formattedPrice})</span>
              <span className="sm:hidden">Buy ({formattedPrice})</span>
            </button>

            <button
              onClick={onClose}
              title="Close Preview (X)"
              className="p-2 rounded-full bg-white/5 hover:bg-white/15 text-zinc-400 hover:text-white transition-all"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Viewport Frame Display Area with Working Interactive Iframe */}
        <div className="flex-1 bg-zinc-950 flex items-center justify-center overflow-hidden relative p-0 sm:p-3">
          {/* Simulated loading indicator */}
          {isIframeLoading && (
            <div className="absolute inset-0 z-10 flex flex-col items-center justify-center bg-zinc-950 text-white space-y-3">
              <div className="w-6 h-6 border-2 border-white/20 border-t-white rounded-full animate-spin" />
              <p className="text-xs font-mono text-zinc-400">Loading {product.title} Interactive Sandbox...</p>
            </div>
          )}

          <div className={`transition-all duration-300 bg-[#0A0A0C] relative flex flex-col ${getViewportContainerClass()}`}>
            {/* Tablet / Mobile Speaker Notch */}
            {(viewport === 'tablet' || viewport === 'mobile') && (
              <div className="h-4 bg-zinc-900 flex items-center justify-center flex-shrink-0">
                <div className="w-12 h-1 rounded-full bg-zinc-700" />
              </div>
            )}

            {/* Interactive Live Iframe Container */}
            <iframe
              ref={iframeRef}
              src={`/preview/${product.slug}`}
              title={`${product.title} Live Preview`}
              onLoad={() => setIsIframeLoading(false)}
              className="w-full h-full border-0 bg-[#0D0D0F]"
              sandbox="allow-scripts allow-same-origin allow-forms allow-modals allow-popups"
            />
          </div>
        </div>
      </motion.div>
    </div>
  );
};
