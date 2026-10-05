'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { CatalogItem, Currency } from '@/lib/types';
import { 
  X, 
  Monitor, 
  Tablet, 
  Smartphone, 
  ShoppingCart, 
  Play, 
  Sparkles, 
  CheckCircle2, 
  ChevronLeft, 
  ChevronRight,
  Layers,
  Eye,
  Maximize2
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface PhotoGalleryModalProps {
  product: CatalogItem | null;
  currency: Currency;
  isOpen: boolean;
  onClose: () => void;
  onOpenLiveDemo: (product: CatalogItem) => void;
  onOpenCheckout: (product: CatalogItem) => void;
}

type DeviceTab = 'desktop' | 'tablet' | 'mobile' | 'all';

export const PhotoGalleryModal: React.FC<PhotoGalleryModalProps> = ({
  product,
  currency,
  isOpen,
  onClose,
  onOpenLiveDemo,
  onOpenCheckout,
}) => {
  const [deviceTab, setDeviceTab] = useState<DeviceTab>('desktop');
  const [activePhotoIdx, setActivePhotoIdx] = useState(0);

  if (!isOpen || !product) return null;

  const formattedPrice = currency === 'USD' 
    ? `$${product.priceUSD}` 
    : `₹${product.priceINR.toLocaleString('en-IN')}`;

  const photos = product.previewImages && product.previewImages.length > 0
    ? product.previewImages
    : [product.thumbnail];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 bg-black/90 backdrop-blur-2xl animate-in fade-in duration-200">
      <motion.div
        initial={{ opacity: 0, scale: 0.96, y: 10 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.96, y: 10 }}
        transition={{ duration: 0.25, ease: 'easeOut' }}
        className="w-full max-w-6xl max-h-[95vh] flex flex-col rounded-3xl glass-modal overflow-hidden border border-white/15 shadow-2xl"
      >
        {/* Header */}
        <div className="h-16 px-6 bg-zinc-950/90 border-b border-white/10 flex items-center justify-between flex-shrink-0">
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-white animate-pulse" />
              <h3 className="text-sm font-bold text-white tracking-tight font-sans">
                {product.title} • Multi-Device Visual Showcase
              </h3>
            </div>
            <span className="hidden sm:inline-block px-2.5 py-0.5 rounded text-[10px] font-mono bg-white/10 text-zinc-300 border border-white/10">
              High-Res Gallery
            </span>
          </div>

          {/* Device Tabs */}
          <div className="flex items-center p-1 rounded-2xl bg-white/5 border border-white/10">
            <button
              onClick={() => setDeviceTab('desktop')}
              className={`px-3 py-1 rounded-xl text-xs font-medium flex items-center gap-1.5 transition-all ${
                deviceTab === 'desktop'
                  ? 'bg-white text-black font-bold shadow-md'
                  : 'text-zinc-400 hover:text-white'
              }`}
            >
              <Monitor className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Desktop</span>
            </button>

            <button
              onClick={() => setDeviceTab('tablet')}
              className={`px-3 py-1 rounded-xl text-xs font-medium flex items-center gap-1.5 transition-all ${
                deviceTab === 'tablet'
                  ? 'bg-white text-black font-bold shadow-md'
                  : 'text-zinc-400 hover:text-white'
              }`}
            >
              <Tablet className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Tablet</span>
            </button>

            <button
              onClick={() => setDeviceTab('mobile')}
              className={`px-3 py-1 rounded-xl text-xs font-medium flex items-center gap-1.5 transition-all ${
                deviceTab === 'mobile'
                  ? 'bg-white text-black font-bold shadow-md'
                  : 'text-zinc-400 hover:text-white'
              }`}
            >
              <Smartphone className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Mobile</span>
            </button>

            <button
              onClick={() => setDeviceTab('all')}
              className={`px-3 py-1 rounded-xl text-xs font-medium flex items-center gap-1.5 transition-all ${
                deviceTab === 'all'
                  ? 'bg-white text-black font-bold shadow-md'
                  : 'text-zinc-400 hover:text-white'
              }`}
            >
              <Layers className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">All Devices</span>
            </button>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => {
                onClose();
                onOpenLiveDemo(product);
              }}
              className="px-3.5 py-1.5 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 text-white text-xs font-semibold transition-all flex items-center gap-1.5"
            >
              <Play className="w-3 h-3 fill-white text-white" />
              <span className="hidden sm:inline">Live Sandbox</span>
            </button>

            <button
              onClick={() => {
                onClose();
                onOpenCheckout(product);
              }}
              className="px-4 py-1.5 rounded-full bg-white text-black hover:bg-zinc-200 text-xs font-bold shadow-md transition-all flex items-center gap-1.5"
            >
              <ShoppingCart className="w-3.5 h-3.5 text-black" />
              <span>Buy ({formattedPrice})</span>
            </button>

            <button
              onClick={onClose}
              className="p-1.5 rounded-full bg-white/5 hover:bg-white/10 text-zinc-400 hover:text-white transition-all"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Gallery Content Area */}
        <div className="flex-1 overflow-y-auto p-6 bg-zinc-950/70 flex flex-col items-center justify-center">
          {deviceTab === 'desktop' && (
            <div className="w-full max-w-4xl rounded-2xl overflow-hidden border border-white/15 shadow-2xl bg-zinc-900">
              {/* Apple Window Header */}
              <div className="px-4 py-2 bg-zinc-900 border-b border-white/10 flex items-center justify-between">
                <div className="flex items-center gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-zinc-700" />
                  <div className="w-2.5 h-2.5 rounded-full bg-zinc-700" />
                  <div className="w-2.5 h-2.5 rounded-full bg-zinc-700" />
                </div>
                <div className="px-4 py-0.5 rounded bg-black/40 text-[10px] font-mono text-zinc-400">
                  fuzicraft.com/templates/{product.slug} (Desktop 1920x1080)
                </div>
                <div className="text-[10px] font-mono text-zinc-500">100/100 LH</div>
              </div>
              <div className="relative aspect-[16/10] w-full bg-zinc-950">
                <img
                  src={photos[activePhotoIdx]}
                  alt="Desktop Preview"
                  className="w-full h-full object-cover object-top grayscale contrast-125"
                />
              </div>
            </div>
          )}

          {deviceTab === 'tablet' && (
            <div className="w-full max-w-[640px] rounded-3xl overflow-hidden border-4 border-zinc-700 shadow-2xl bg-zinc-900">
              <div className="h-3 bg-zinc-800 flex items-center justify-center">
                <div className="w-8 h-1 rounded-full bg-zinc-600" />
              </div>
              <div className="relative aspect-[4/3] w-full bg-zinc-950">
                <img
                  src={photos[activePhotoIdx]}
                  alt="Tablet Preview"
                  className="w-full h-full object-cover object-top grayscale contrast-125"
                />
              </div>
            </div>
          )}

          {deviceTab === 'mobile' && (
            <div className="w-full max-w-[320px] rounded-[2.5rem] overflow-hidden border-4 border-zinc-700 shadow-2xl bg-zinc-900">
              <div className="h-4 bg-zinc-800 flex items-center justify-center">
                <div className="w-12 h-1 rounded-full bg-zinc-600" />
              </div>
              <div className="relative aspect-[9/16] w-full bg-zinc-950 max-h-[500px]">
                <img
                  src={photos[activePhotoIdx]}
                  alt="Mobile Preview"
                  className="w-full h-full object-cover object-top grayscale contrast-125"
                />
              </div>
            </div>
          )}

          {deviceTab === 'all' && (
            <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-6 items-end">
              {/* Desktop Tile */}
              <div className="rounded-2xl overflow-hidden border border-white/10 bg-zinc-900">
                <div className="px-3 py-1 bg-zinc-800 text-[10px] font-mono text-zinc-300">Desktop View</div>
                <div className="relative aspect-[16/10] w-full">
                  <img src={photos[0]} alt="Desktop Tile" className="w-full h-full object-cover object-top grayscale contrast-125" />
                </div>
              </div>

              {/* Tablet Tile */}
              <div className="rounded-2xl overflow-hidden border border-white/10 bg-zinc-900">
                <div className="px-3 py-1 bg-zinc-800 text-[10px] font-mono text-zinc-300">Tablet iPad View</div>
                <div className="relative aspect-[4/3] w-full">
                  <img src={photos[1] || photos[0]} alt="Tablet Tile" className="w-full h-full object-cover object-top grayscale contrast-125" />
                </div>
              </div>

              {/* Mobile Tile */}
              <div className="rounded-2xl overflow-hidden border border-white/10 bg-zinc-900">
                <div className="px-3 py-1 bg-zinc-800 text-[10px] font-mono text-zinc-300">Mobile iPhone View</div>
                <div className="relative aspect-[9/14] w-full">
                  <img src={photos[photos.length - 1]} alt="Mobile Tile" className="w-full h-full object-cover object-top grayscale contrast-125" />
                </div>
              </div>
            </div>
          )}

          {/* Photo Carousel Thumbnails */}
          {photos.length > 1 && deviceTab !== 'all' && (
            <div className="flex items-center gap-2 mt-6 overflow-x-auto pb-2">
              {photos.map((p, idx) => (
                <button
                  key={idx}
                  onClick={() => setActivePhotoIdx(idx)}
                  className={`relative w-20 h-14 rounded-xl overflow-hidden border-2 transition-all flex-shrink-0 ${
                    activePhotoIdx === idx
                      ? 'border-white scale-105 shadow-md'
                      : 'border-transparent opacity-50 hover:opacity-100'
                  }`}
                >
                  <img src={p} alt={`Thumbnail ${idx}`} className="w-full h-full object-cover grayscale" />
                </button>
              ))}
            </div>
          )}
        </div>
      </motion.div>
    </div>
  );
};
