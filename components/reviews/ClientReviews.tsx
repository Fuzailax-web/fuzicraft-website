'use client';

import React from 'react';
import Image from 'next/image';
import { ReviewItem } from '@/lib/types';
import { Star, Quote, Sparkles, CheckCircle2 } from 'lucide-react';
import { motion } from 'framer-motion';

interface ClientReviewsProps {
  reviews: ReviewItem[];
}

export const ClientReviews: React.FC<ClientReviewsProps> = ({ reviews }) => {
  return (
    <section id="reviews" className="py-20 relative z-10 scroll-mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header - Monochrome */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-zinc-300 text-xs font-mono mb-3">
            <Sparkles className="w-3.5 h-3.5 text-zinc-400" />
            <span>FOUNDER TESTIMONIALS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white font-sans">
            Trusted by Creators & <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-zinc-200 to-zinc-400">
              High-Velocity Startups
            </span>
          </h2>
          <p className="mt-4 text-sm sm:text-base text-zinc-400">
            See how teams transformed their digital presence and achieved 2x conversions with FuziCraft web architectures.
          </p>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {reviews.map((rev) => (
            <motion.div
              key={rev.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="p-8 rounded-3xl glass-card relative flex flex-col justify-between"
            >
              <div>
                {/* Rating Stars - Monochrome */}
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(rev.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-white fill-white" />
                  ))}
                  <span className="ml-2 text-xs font-mono font-bold text-zinc-300">5.0</span>
                </div>

                {/* Comment */}
                <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed italic">
                  "{rev.comment}"
                </p>
              </div>

              {/* Author Profile */}
              <div className="mt-6 pt-6 border-t border-white/10 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="relative w-10 h-10 rounded-full overflow-hidden border border-white/15 bg-zinc-800 flex-shrink-0">
                    <Image
                      src={rev.avatar}
                      alt={rev.authorName}
                      fill
                      className="object-cover grayscale"
                    />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-white">{rev.authorName}</h4>
                    <p className="text-[10px] text-zinc-400 font-mono">
                      {rev.authorRole}, {rev.company}
                    </p>
                  </div>
                </div>

                <div className="text-right">
                  <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded text-[9px] font-mono bg-white/5 text-zinc-300 border border-white/10">
                    <CheckCircle2 className="w-2.5 h-2.5 text-white" />
                    <span>Verified</span>
                  </span>
                  <span className="block text-[9px] text-zinc-500 mt-0.5 font-mono">
                    {rev.purchasedProduct}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
