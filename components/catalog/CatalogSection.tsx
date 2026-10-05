'use client';

import React, { useState, useMemo } from 'react';
import { CatalogItem, CategoryType, Currency } from '@/lib/types';
import { ProductCard } from './ProductCard';
import { 
  Search, 
  Layers, 
  ShoppingBag,
  Cpu,
  Laptop,
  Coins,
  X,
  Sparkles
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface CatalogSectionProps {
  products: CatalogItem[];
  currency: Currency;
  onOpenPhotoGallery: (product: CatalogItem) => void;
  onOpenLiveDemo: (product: CatalogItem) => void;
  onOpenCheckout: (product: CatalogItem) => void;
}

const CATEGORIES: { id: CategoryType; label: string; icon: React.FC<{ className?: string }> }[] = [
  { id: 'all', label: 'All Architectures', icon: Layers },
  { id: 'saas-ai', label: 'SaaS & AI', icon: Cpu },
  { id: 'ecommerce', label: 'E-Commerce', icon: ShoppingBag },
  { id: 'agency-portfolio', label: 'Agency & Portfolio', icon: Laptop },
  { id: 'fintech-web3', label: 'FinTech & Web3', icon: Coins },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.1,
    },
  },
};

export const CatalogSection: React.FC<CatalogSectionProps> = ({
  products,
  currency,
  onOpenPhotoGallery,
  onOpenLiveDemo,
  onOpenCheckout,
}) => {
  const [activeCategory, setActiveCategory] = useState<CategoryType>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState<'featured' | 'price-asc' | 'price-desc' | 'rating'>('featured');

  const filteredProducts = useMemo(() => {
    let list = [...products];

    // Filter by Category
    if (activeCategory !== 'all') {
      list = list.filter((p) => p.category === activeCategory);
    }

    // Filter by Search
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      list = list.filter(
        (p) =>
          p.title.toLowerCase().includes(q) ||
          p.tagline.toLowerCase().includes(q) ||
          p.description.toLowerCase().includes(q) ||
          p.techStack.some((t) => t.name.toLowerCase().includes(q))
      );
    }

    // Sort
    if (sortBy === 'price-asc') {
      list.sort((a, b) => (currency === 'USD' ? a.priceUSD - b.priceUSD : a.priceINR - b.priceINR));
    } else if (sortBy === 'price-desc') {
      list.sort((a, b) => (currency === 'USD' ? b.priceUSD - a.priceUSD : b.priceINR - a.priceINR));
    } else if (sortBy === 'rating') {
      list.sort((a, b) => b.rating - a.rating);
    }

    return list;
  }, [products, activeCategory, searchQuery, sortBy, currency]);

  return (
    <section id="catalog" className="py-20 relative z-10 scroll-mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header - Monochrome Minimalist */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-zinc-300 text-xs font-mono mb-3">
              <Sparkles className="w-3.5 h-3.5 text-zinc-400" />
              <span>PORTFOLIO & DESIGNS</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white font-sans">
              Selected{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-zinc-200 to-zinc-400">
                Work
              </span>
            </h2>
            <p className="mt-3 text-sm sm:text-base text-zinc-400 max-w-xl">
              Explore our design foundations — built to be customized around your brand. Choose a starting point or commission a fully custom build.
            </p>
          </div>

          {/* Search & Sort Controls - Monochrome */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
            {/* Search input */}
            <div className="relative min-w-[240px]">
              <Search className="w-4 h-4 text-zinc-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search stacks, AI, e-com..."
                className="w-full pl-9 pr-8 py-2.5 rounded-2xl bg-white/[0.04] border border-white/10 text-white placeholder-zinc-500 text-xs focus:outline-none focus:border-white/40 focus:bg-white/[0.07] transition-all"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-zinc-500 hover:text-white"
                >
                  <X className="w-3.5 h-3.5" />
                </button>
              )}
            </div>

            {/* Sort Dropdown */}
            <div className="relative">
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as any)}
                aria-label="Sort products by"
                className="w-full sm:w-auto px-4 py-2.5 rounded-2xl bg-white/[0.04] border border-white/10 text-zinc-300 hover:text-white text-xs font-medium focus:outline-none focus:border-white/40 cursor-pointer transition-all"
              >
                <option value="featured" className="bg-zinc-900 text-white">Sort: Featured</option>
                <option value="rating" className="bg-zinc-900 text-white">Sort: Highest Rated</option>
                <option value="price-asc" className="bg-zinc-900 text-white">Price: Low to High</option>
                <option value="price-desc" className="bg-zinc-900 text-white">Price: High to Low</option>
              </select>
            </div>
          </div>
        </div>

        {/* Category Pill Tabs - Monochrome Active Pill */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 scrollbar-none mb-8 border-b border-white/[0.06]">
          {CATEGORIES.map((cat) => {
            const Icon = cat.icon;
            const isActive = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`flex items-center gap-2 px-4 py-2 rounded-full text-xs font-medium whitespace-nowrap transition-all duration-200 ${
                  isActive
                    ? 'bg-white text-black shadow-md font-bold'
                    : 'bg-white/[0.03] text-zinc-400 hover:text-white hover:bg-white/[0.06] border border-white/[0.07]'
                }`}
              >
                <Icon className={`w-3.5 h-3.5 ${isActive ? 'text-black' : 'text-zinc-400'}`} />
                <span>{cat.label}</span>
                {cat.id === 'all' && (
                  <span className={`px-1.5 py-0.2 rounded-full text-[10px] font-mono ${isActive ? 'bg-black/10 text-black' : 'bg-white/5 text-zinc-400'}`}>
                    {products.length}
                  </span>
                )}
              </button>
            );
          })}
        </div>

        {/* Products Grid with Framer Motion Staggered Enter Reveals */}
        {filteredProducts.length > 0 ? (
          <motion.div
            key={activeCategory + searchQuery + sortBy}
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
          >
            {filteredProducts.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                currency={currency}
                onOpenPhotoGallery={onOpenPhotoGallery}
                onOpenLiveDemo={onOpenLiveDemo}
                onOpenCheckout={onOpenCheckout}
              />
            ))}
          </motion.div>
        ) : (
          <div className="text-center py-20 rounded-3xl bg-white/[0.02] border border-white/[0.06] p-8">
            <Layers className="w-12 h-12 text-zinc-600 mx-auto mb-3" />
            <h3 className="text-lg font-bold text-white">No architectures found</h3>
            <p className="text-xs text-zinc-400 mt-1 max-w-sm mx-auto">
              No matching websites found for "{searchQuery}". Try selecting another category or resetting the search filter.
            </p>
            <button
              onClick={() => {
                setActiveCategory('all');
                setSearchQuery('');
              }}
              className="mt-4 px-4 py-2 rounded-full bg-white/10 hover:bg-white/15 text-xs font-semibold text-white transition-all"
            >
              Reset Filters
            </button>
          </div>
        )}
      </div>
    </section>
  );
};
