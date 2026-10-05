'use client';

import React from 'react';
import Image from 'next/image';
import { Lock, Eye, Play, Sparkles, Image as ImageIcon } from 'lucide-react';
import { CatalogItem } from '@/lib/types';

interface BrowserMockupFrameProps {
  product: CatalogItem;
  onOpenPhotoGallery: (product: CatalogItem) => void;
  onOpenLiveDemo: (product: CatalogItem) => void;
}

export const BrowserMockupFrame: React.FC<BrowserMockupFrameProps> = ({
  product,
  onOpenPhotoGallery,
  onOpenLiveDemo,
}) => {
  return (
    <div className="relative w-full rounded-2xl overflow-hidden bg-zinc-950 border border-white/10 shadow-xl group/browser">
      {/* Apple-Style Window Bar */}
      <div className="h-8 px-3.5 bg-zinc-900/90 border-b border-white/10 flex items-center justify-between z-10 relative select-none">
        {/* Window Action Dots */}
        <div className="flex items-center gap-1.5">
          <div className="w-2.5 h-2.5 rounded-full bg-zinc-700 group-hover/browser:bg-zinc-600 transition-colors" />
          <div className="w-2.5 h-2.5 rounded-full bg-zinc-700 group-hover/browser:bg-zinc-600 transition-colors" />
          <div className="w-2.5 h-2.5 rounded-full bg-zinc-700 group-hover/browser:bg-zinc-600 transition-colors" />
        </div>

        {/* Dynamic URL Bar */}
        <div className="px-3 py-0.5 rounded-md bg-black/50 border border-white/10 flex items-center gap-1.5 text-[10px] font-mono text-zinc-400 max-w-[200px] sm:max-w-xs truncate">
          <Lock className="w-2.5 h-2.5 text-zinc-500 flex-shrink-0" />
          <span className="truncate">fuzicraft.com/{product.slug}</span>
        </div>

        {/* Status indicator */}
        <div className="flex items-center gap-1 text-[9px] font-mono text-zinc-500">
          <span className="w-1.5 h-1.5 rounded-full bg-white/60 animate-pulse" />
          <span className="hidden sm:inline">LIVE</span>
        </div>
      </div>

      {/* Auto-Scrolling Viewport Container */}
      <div 
        onClick={() => onOpenPhotoGallery(product)}
        className="relative h-56 sm:h-64 w-full overflow-hidden bg-zinc-950 cursor-pointer"
        title="Hover to auto-scroll full page | Click for Multi-Device Photo Gallery"
      >
        {/* The Tall Full-Page Screenshot Image */}
        <div className="w-full h-auto transform translate-y-0 group-hover/browser:-translate-y-[62%] transition-transform duration-[6000ms] ease-in-out will-change-transform">
          <img
            src={product.thumbnail}
            alt={`${product.title} Full Page Architecture`}
            className="w-full h-auto object-cover object-top grayscale contrast-125 block"
          />
          {/* Extension for seamless full height mockup */}
          {product.previewImages && product.previewImages.length > 1 && (
            <img
              src={product.previewImages[1]}
              alt={`${product.title} Section View`}
              className="w-full h-auto object-cover object-top grayscale contrast-125 block border-t border-zinc-800"
            />
          )}
        </div>

        {/* Subtle Top & Bottom Gradient Vignette */}
        <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/80 via-transparent to-transparent pointer-events-none opacity-60 group-hover/browser:opacity-20 transition-opacity" />

        {/* Bottom Floating Hint Bar */}
        <div className="absolute bottom-2.5 left-3 right-3 flex items-center justify-between pointer-events-none group-hover/browser:opacity-0 transition-opacity duration-300">
          <span className="px-2 py-0.5 rounded text-[9px] font-mono bg-black/70 text-zinc-400 border border-white/10 backdrop-blur-md">
            Hover to Auto-Scroll ↓
          </span>
          <span className="px-2 py-0.5 rounded text-[9px] font-mono bg-black/70 text-zinc-300 border border-white/10 backdrop-blur-md">
            Click for Photos
          </span>
        </div>

        {/* Action Overlay Button Stack on Hover */}
        <div className="absolute inset-0 bg-zinc-950/60 backdrop-blur-[2px] opacity-0 group-hover/browser:opacity-100 transition-opacity duration-200 flex items-center justify-center gap-2.5 p-4 pointer-events-none group-hover/browser:pointer-events-auto">
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              onOpenPhotoGallery(product);
            }}
            className="px-3.5 py-2 rounded-xl bg-white/15 hover:bg-white/25 border border-white/20 text-white text-xs font-semibold shadow-lg transition-all flex items-center gap-1.5 backdrop-blur-md active:scale-95"
          >
            <ImageIcon className="w-3.5 h-3.5 text-white" />
            <span>Device Gallery</span>
          </button>

          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              onOpenLiveDemo(product);
            }}
            className="px-3.5 py-2 rounded-xl bg-white text-black hover:bg-zinc-200 text-xs font-bold shadow-lg transition-all flex items-center gap-1.5 active:scale-95"
          >
            <Play className="w-3.5 h-3.5 fill-black text-black" />
            <span>Interactive Sandbox</span>
          </button>
        </div>
      </div>
    </div>
  );
};
