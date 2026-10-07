import { CatalogItem, ReviewItem } from '../types';

import { WEBSITES } from '../../src/data/websites';

export const CATALOG_PRODUCTS: CatalogItem[] = WEBSITES;

export const CLIENT_REVIEWS: ReviewItem[] = [
  {
    id: 'rev-1',
    authorName: 'Alexander Vance',
    authorRole: 'Founder & CEO',
    company: 'HyperScale AI',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=200&auto=format&fit=crop',
    rating: 5,
    comment: 'FuziCraft is on another level. We launched our AI platform with NovaAI and our conversion rates doubled overnight. The 100/100 Lighthouse score and Apple-like micro-interactions blew our investors away.',
    purchasedProduct: 'NovaAI Enterprise',
    date: '2 days ago',
  },
  {
    id: 'rev-2',
    authorName: 'Rohan Mehta',
    authorRole: 'Head of Product',
    company: 'Zenvia Pay India',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop',
    rating: 5,
    comment: 'The Razorpay UPI integration and instant QR checkout in AURA saved us 3 weeks of engineering. Clean code, pristine TypeScript types, and Sanity CMS setup is effortless to customize.',
    purchasedProduct: 'AURA Luxury Store',
    date: '1 week ago',
  },
  {
    id: 'rev-3',
    authorName: 'Elena Rostova',
    authorRole: 'Creative Director',
    company: 'Studio Kroma (London)',
    avatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=200&auto=format&fit=crop',
    rating: 5,
    comment: 'The smoothest Framer Motion animations I have ever experienced in a production template. Pure craftsmanship. Fuzail and the FuziCraft team are setting the golden standard.',
    purchasedProduct: 'Vertex Studio OS',
    date: '2 weeks ago',
  },
];

export const STUDIO_METRICS = {
  averageLighthouse: 99.8,
  templatesDelivered: 420,
  clientSatisfaction: '99.4%',
  averageLoadTime: '0.38s',
  happyFounders: 850,
};
