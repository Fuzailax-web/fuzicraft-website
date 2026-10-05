'use client';

import React from 'react';
import { motion, Variants } from 'framer-motion';
import { CatalogItem, Currency, StatusPill } from '@/lib/types';
import { BrowserMockupFrame } from './BrowserMockupFrame';
import { 
  Play, 
  ShoppingCart, 
  Sparkles, 
  Star, 
  CheckCircle2, 
  Flame,
  Award,
  ArrowUpRight,
  Image as ImageIcon
} from 'lucide-react';

interface ProductCardProps {
  product: CatalogItem;
  currency: Currency;
  onOpenPhotoGallery: (product: CatalogItem) => void;
  onOpenLiveDemo: (product: CatalogItem) => void;
  onOpenCheckout: (product: CatalogItem) => void;
}

export const cardItemVariants: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.5, ease: 'easeOut' }
  },
};

export const ProductCard: React.FC<ProductCardProps> = ({
  product,
  currency,
  onOpenPhotoGallery,
  onOpenLiveDemo,
  onOpenCheckout,
}) => {
  const formattedPrice = currency === 'USD' 
    ? `$${product.priceUSD}`
    : `₹${product.priceINR.toLocaleString('en-IN')}`;

  const renderStatusPill = (status?: StatusPill) => {
    if (!status) return null;

    switch (status) {
      case 'NEW':
        return (
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-mono font-bold tracking-wider uppercase bg-white text-black shadow-lg shadow-white/10">
            <span className="w-1.5 h-1.5 rounded-full bg-black animate-pulse" />
            <span>NEW</span>
          </span>
        );
      case 'MOST POPULAR':
        return (
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-mono font-bold tracking-wider uppercase bg-zinc-900/90 text-white border border-white/40 backdrop-blur-md shadow-md">
            <Flame className="w-3.5 h-3.5 text-white" />
            <span>MOST POPULAR</span>
          </span>
        );
      case 'TOP RATED':
        return (
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-mono font-bold tracking-wider uppercase bg-zinc-800/90 text-zinc-100 border border-white/20 backdrop-blur-md shadow-md">
            <Award className="w-3.5 h-3.5 text-zinc-300" />
            <span>TOP RATED</span>
          </span>
        );
    }
  };

  return (
    <motion.div
      variants={cardItemVariants}
      whileHover={{ y: -6, scale: 1.01 }}
      transition={{ duration: 0.3, ease: 'easeOut' }}
      className="group relative rounded-3xl glass-card overflow-hidden flex flex-col justify-between"
    >
      <div>
        {/* Top Badges Header */}
        <div className="p-4 pb-3 flex items-center justify-between">
          <div>
            {renderStatusPill(product.statusPill)}
          </div>
          <div className="px-2.5 py-1 rounded-full bg-black/70 border border-white/15 backdrop-blur-md text-[11px] font-mono text-zinc-300 flex items-center gap-1">
            <Star className="w-3 h-3 text-white fill-white" />
            <span className="font-bold text-white">{product.rating}</span>
            <span className="text-zinc-500">({product.reviewsCount})</span>
          </div>
        </div>

        {/* Apple-Style Browser Mockup with Hover Auto-Scrolling Screenshot */}
        <div className="px-4 pb-2">
          <BrowserMockupFrame
            product={product}
            onOpenPhotoGallery={onOpenPhotoGallery}
            onOpenLiveDemo={onOpenLiveDemo}
          />
        </div>

        {/* Card Content Area */}
        <div className="p-6 pt-3">
          {/* Category & Lighthouse Score */}
          <div className="flex items-center justify-between text-xs text-zinc-400 mb-2">
            <span className="font-mono text-zinc-400 font-medium tracking-wider uppercase text-[10px]">
              {product.categoryLabel}
            </span>
            <span className="flex items-center gap-1 text-[10px] font-mono text-zinc-300 bg-white/5 px-2 py-0.5 rounded border border-white/10">
              <span>LH:</span>
              <span className="font-bold text-white">{product.lighthouse.performance}/100</span>
            </span>
          </div>

          {/* Title and Tagline */}
          <h3 className="text-xl font-bold text-white group-hover:text-zinc-200 transition-colors tracking-tight font-sans">
            {product.title}
          </h3>
          <p className="text-xs text-zinc-400 font-medium mt-1">
            {product.tagline}
          </p>

          {/* Description snippet */}
          <p className="text-xs text-zinc-400 mt-3 line-clamp-2 leading-relaxed">
            {product.description}
          </p>

          {/* Tech Stack Pills - Monochrome */}
          <div className="mt-4 flex flex-wrap gap-1.5">
            {product.techStack.map((tech) => (
              <span
                key={tech.name}
                className="px-2 py-0.5 rounded-md text-[10px] font-mono font-medium bg-white/[0.04] text-zinc-300 border border-white/[0.08]"
              >
                {tech.name}
              </span>
            ))}
          </div>

          {/* Features Highlights Checklist */}
          <ul className="mt-4 space-y-1.5 pt-3 border-t border-white/[0.06]">
            {product.features.slice(0, 2).map((feat, idx) => (
              <li key={idx} className="flex items-center gap-2 text-[11px] text-zinc-300">
                <CheckCircle2 className="w-3.5 h-3.5 text-zinc-400 flex-shrink-0" />
                <span className="truncate">{feat}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Bottom Footer Price & Action Bar */}
      <div className="p-6 pt-0 mt-1">
        <div className="pt-4 border-t border-white/[0.08] flex items-center justify-between">
          <div className="flex flex-col">
            <span className="text-[10px] text-zinc-500 font-mono uppercase tracking-wider">
              Commercial License
            </span>
            <div className="flex items-baseline gap-2">
              <span className="text-2xl font-bold text-white font-mono tracking-tight">
                {formattedPrice}
              </span>
              {product.discountPercentage && (
                <span className="text-[11px] text-zinc-300 font-mono font-semibold">
                  {product.discountPercentage}% OFF
                </span>
              )}
            </div>
          </div>

          <div className="flex items-center gap-2">
            {/* Photo Showcase Trigger */}
            <button
              onClick={() => onOpenPhotoGallery(product)}
              title="Open Multi-Device Photo Showcase"
              className="p-2.5 rounded-xl bg-white/[0.05] hover:bg-white/10 border border-white/10 text-zinc-300 hover:text-white transition-all"
            >
              <ImageIcon className="w-4 h-4" />
            </button>

            {/* Live Interactive Sandbox Trigger */}
            <button
              onClick={() => onOpenLiveDemo(product)}
              title="Launch Live Interactive Sandbox"
              className="p-2.5 rounded-xl bg-white/[0.05] hover:bg-white/10 border border-white/10 text-zinc-300 hover:text-white transition-all flex items-center gap-1.5 text-xs font-mono"
            >
              <Play className="w-3.5 h-3.5 fill-current" />
              <span className="hidden sm:inline">Preview</span>
            </button>

            {/* Buy Now Trigger */}
            <button
              onClick={() => onOpenCheckout(product)}
              className="px-4 py-2.5 rounded-xl bg-white text-black hover:bg-zinc-200 text-xs font-bold shadow-md transition-all flex items-center gap-1.5 active:scale-95"
            >
              <span>Customize</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-black" />
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
};
