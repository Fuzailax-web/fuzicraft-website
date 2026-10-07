import { CatalogItem } from '../../lib/types';

export const WEBSITES: CatalogItem[] = [
  {
    id: 'fuzi-aura',
    slug: 'aura',
    name: 'AURA',
    title: 'AURA',
    tagline: 'Premium Fashion & E-Commerce',
    description: 'Designed for luxury fashion, boutique electronics, and artisanal goods. Features silky smooth page transitions and seamless e-commerce flows.',
    category: 'ecommerce',
    categoryLabel: 'E-Commerce',
    priceUSD: 179,
    priceINR: 14999,
    statusPill: 'NEW',
    thumbnail: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=1200&auto=format&fit=crop',
    previewImages: [
      'https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1472851294608-062f824d29cc?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1469334031218-e382a71b716b?q=80&w=1200&auto=format&fit=crop',
    ],
    demoUrl: 'https://aura-store.fuzicraft-website.vercel.app',
    demoRoute: '/websites/aura',
    techStack: [
      { name: 'Next.js 15', category: 'framework', color: '#ffffff' },
      { name: 'Tailwind CSS', category: 'styling', color: '#38bdf8' },
      { name: 'Framer Motion', category: 'animation', color: '#f43f5e' }
    ],
    features: [
      'Interactive 3D Product Zoom & Variant Switcher',
      'Sub-second cart calculation & optimistic updates',
      'Apple-grade Typography'
    ],
    included: [
      'Custom branding',
      'Fully responsive design',
      'Mobile optimization',
      'Contact / WhatsApp integration',
      'Basic SEO setup',
      'Production deployment',
      'Content customization',
      'Post-launch support'
    ],
    perfectFor: [
      'Fashion brands',
      'Clothing stores',
      'Boutique businesses',
      'Jewelry brands',
      'D2C brands'
    ],
    pagesCount: 18,
    lighthouse: { performance: 99, accessibility: 100, bestPractices: 100, seo: 100 },
    cmsIntegration: 'Available as an Add-on',
    rating: 4.95,
    reviewsCount: 38,
    releaseDate: '2026-08-20',
    highlights: ['Micro-interactions', 'Ultra-fast Checkout', 'Apple-grade Typography'],
    tags: ['luxury', 'ecommerce', 'fashion'],
    featured: true
  },
  {
    id: 'fuzi-vertex',
    slug: 'vertex',
    name: 'VERTEX',
    title: 'VERTEX',
    tagline: 'Startups & AI SaaS Platform',
    description: 'An elite showcase for technology products and startups. Packed with interactive WebGL shaders and modern AI aesthetic.',
    category: 'saas-ai',
    categoryLabel: 'SaaS & AI',
    priceUSD: 129,
    priceINR: 10999,
    statusPill: 'TOP RATED',
    thumbnail: 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?q=80&w=1200&auto=format&fit=crop',
    previewImages: [
      'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1542744094-3a31f272c490?q=80&w=1200&auto=format&fit=crop',
    ],
    demoUrl: 'https://vertex-studio.fuzicraft-website.vercel.app',
    demoRoute: '/websites/vertex',
    techStack: [
      { name: 'Next.js 15', category: 'framework', color: '#ffffff' },
      { name: 'Tailwind CSS', category: 'styling', color: '#38bdf8' },
    ],
    features: [
      'Interactive Case Study Timeline',
      'Magnetic Button & Fluid Glass Cursor',
      '100/100 Mobile & Desktop PageSpeed'
    ],
    included: [
      'Custom branding',
      'Fully responsive design',
      'Mobile optimization',
      'Contact / WhatsApp integration',
      'Basic SEO setup',
      'Production deployment',
      'Content customization',
      'Post-launch support'
    ],
    perfectFor: [
      'Startups',
      'SaaS companies',
      'Technology businesses',
      'AI products'
    ],
    pagesCount: 11,
    lighthouse: { performance: 100, accessibility: 100, bestPractices: 100, seo: 100 },
    cmsIntegration: 'Available as an Add-on',
    rating: 5.0,
    reviewsCount: 56,
    releaseDate: '2026-07-28',
    highlights: ['Awwwards-style transitions', 'Zero hydration lag', 'Rich OpenGraph tags'],
    tags: ['startup', 'saas', 'tech']
  },
  {
    id: 'fuzi-haven',
    slug: 'haven',
    name: 'HAVEN',
    title: 'HAVEN',
    tagline: 'Real Estate & Properties',
    description: 'Designed specifically for luxury real estate and property listings. Clear, elegant layout that highlights photography and space.',
    category: 'agency-portfolio',
    categoryLabel: 'Agency & Portfolio',
    priceUSD: 149,
    priceINR: 12499,
    thumbnail: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=1200&auto=format&fit=crop',
    previewImages: [
      'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=1200&auto=format&fit=crop',
    ],
    demoUrl: 'https://haven-realestate.fuzicraft-website.vercel.app',
    demoRoute: '/websites/haven',
    techStack: [
      { name: 'Next.js 15', category: 'framework', color: '#ffffff' },
      { name: 'Tailwind CSS', category: 'styling', color: '#38bdf8' },
    ],
    features: [
      'High-resolution image galleries',
      'Property search capabilities',
      'Elegant map integrations'
    ],
    included: [
      'Custom branding',
      'Fully responsive design',
      'Mobile optimization',
      'Contact / WhatsApp integration',
      'Basic SEO setup',
      'Production deployment',
      'Content customization',
      'Post-launch support'
    ],
    perfectFor: [
      'Real estate agents',
      'Property developers',
      'Brokers',
      'Property businesses'
    ],
    pagesCount: 10,
    lighthouse: { performance: 98, accessibility: 100, bestPractices: 100, seo: 100 },
    cmsIntegration: 'Available as an Add-on',
    rating: 4.8,
    reviewsCount: 22,
    releaseDate: '2026-09-10',
    highlights: ['Luxury typography', 'Image optimization', 'Clean aesthetic'],
    tags: ['realestate', 'property']
  },
  {
    id: 'fuzi-noir',
    slug: 'noir',
    name: 'NOIR',
    title: 'NOIR',
    tagline: 'Creative Agencies & Studios',
    description: 'A dark-mode first portfolio template for creative agencies, design studios and independent freelancers.',
    category: 'agency-portfolio',
    categoryLabel: 'Agency & Portfolio',
    priceUSD: 119,
    priceINR: 9999,
    thumbnail: 'https://images.unsplash.com/photo-1559526324-4b87b5e36e44?q=80&w=1200&auto=format&fit=crop',
    previewImages: [
      'https://images.unsplash.com/photo-1559526324-4b87b5e36e44?q=80&w=1200&auto=format&fit=crop',
    ],
    demoUrl: 'https://noir-studio.fuzicraft-website.vercel.app',
    demoRoute: '/websites/noir',
    techStack: [
      { name: 'Next.js 15', category: 'framework', color: '#ffffff' },
      { name: 'Tailwind CSS', category: 'styling', color: '#38bdf8' },
    ],
    features: [
      'Minimalist dark theme',
      'Bold typography',
      'Case study layouts'
    ],
    included: [
      'Custom branding',
      'Fully responsive design',
      'Mobile optimization',
      'Contact / WhatsApp integration',
      'Basic SEO setup',
      'Production deployment',
      'Content customization',
      'Post-launch support'
    ],
    perfectFor: [
      'Creative agencies',
      'Design studios',
      'Marketing agencies',
      'Freelancers'
    ],
    pagesCount: 8,
    lighthouse: { performance: 100, accessibility: 100, bestPractices: 100, seo: 100 },
    cmsIntegration: 'Available as an Add-on',
    rating: 4.9,
    reviewsCount: 41,
    releaseDate: '2026-05-15',
    highlights: ['Dark mode', 'Creative layouts', 'Fast performance'],
    tags: ['creative', 'agency', 'dark']
  },
  {
    id: 'fuzi-luxe',
    slug: 'luxe',
    name: 'LUXE',
    title: 'LUXE',
    tagline: 'Restaurants & Fine Dining',
    description: 'An immersive digital experience for restaurants, cafes, and fine dining establishments.',
    category: 'agency-portfolio',
    categoryLabel: 'Agency & Portfolio',
    priceUSD: 129,
    priceINR: 10999,
    thumbnail: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?q=80&w=1200&auto=format&fit=crop',
    previewImages: [
      'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?q=80&w=1200&auto=format&fit=crop',
    ],
    demoUrl: 'https://luxe-dining.fuzicraft-website.vercel.app',
    demoRoute: '/websites/luxe',
    techStack: [
      { name: 'Next.js 15', category: 'framework', color: '#ffffff' },
      { name: 'Tailwind CSS', category: 'styling', color: '#38bdf8' },
    ],
    features: [
      'Digital menus',
      'Reservation integration',
      'Immersive image headers'
    ],
    included: [
      'Custom branding',
      'Fully responsive design',
      'Mobile optimization',
      'Contact / WhatsApp integration',
      'Basic SEO setup',
      'Production deployment',
      'Content customization',
      'Post-launch support'
    ],
    perfectFor: [
      'Restaurants',
      'Cafes',
      'Fine dining',
      'Food brands'
    ],
    pagesCount: 6,
    lighthouse: { performance: 99, accessibility: 100, bestPractices: 100, seo: 100 },
    cmsIntegration: 'Available as an Add-on',
    rating: 4.7,
    reviewsCount: 18,
    releaseDate: '2026-06-20',
    highlights: ['Food photography focus', 'Clean menus', 'Elegant design'],
    tags: ['restaurant', 'food', 'dining']
  },
  {
    id: 'fuzi-forge',
    slug: 'forge',
    name: 'FORGE',
    title: 'FORGE',
    tagline: 'Software & Technology Startups',
    description: 'A robust and scalable foundation for SaaS products and software companies to showcase their features.',
    category: 'saas-ai',
    categoryLabel: 'SaaS & AI',
    priceUSD: 139,
    priceINR: 11499,
    statusPill: 'MOST POPULAR',
    thumbnail: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1200&auto=format&fit=crop',
    previewImages: [
      'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1200&auto=format&fit=crop',
    ],
    demoUrl: 'https://forge-software.fuzicraft-website.vercel.app',
    demoRoute: '/websites/forge',
    techStack: [
      { name: 'Next.js 15', category: 'framework', color: '#ffffff' },
      { name: 'Tailwind CSS', category: 'styling', color: '#38bdf8' },
    ],
    features: [
      'Feature grids',
      'Pricing tables',
      'Customer testimonial sections'
    ],
    included: [
      'Custom branding',
      'Fully responsive design',
      'Mobile optimization',
      'Contact / WhatsApp integration',
      'Basic SEO setup',
      'Production deployment',
      'Content customization',
      'Post-launch support'
    ],
    perfectFor: [
      'SaaS businesses',
      'Startups',
      'Software products',
      'Technology companies'
    ],
    pagesCount: 12,
    lighthouse: { performance: 100, accessibility: 100, bestPractices: 100, seo: 100 },
    cmsIntegration: 'Available as an Add-on',
    rating: 4.9,
    reviewsCount: 65,
    releaseDate: '2026-03-10',
    highlights: ['Conversion optimized', 'Feature rich', 'Trust building'],
    tags: ['software', 'saas', 'tech']
  },
  {
    id: 'fuzi-peak',
    slug: 'peak',
    name: 'PEAK',
    title: 'PEAK',
    tagline: 'Fitness & Wellness Brands',
    description: 'A high-energy, dynamic website template for gyms, personal trainers and fitness coaches.',
    category: 'agency-portfolio',
    categoryLabel: 'Agency & Portfolio',
    priceUSD: 99,
    priceINR: 8499,
    thumbnail: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=1200&auto=format&fit=crop',
    previewImages: [
      'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=1200&auto=format&fit=crop',
    ],
    demoUrl: 'https://peak-fitness.fuzicraft-website.vercel.app',
    demoRoute: '/websites/peak',
    techStack: [
      { name: 'Next.js 15', category: 'framework', color: '#ffffff' },
      { name: 'Tailwind CSS', category: 'styling', color: '#38bdf8' },
    ],
    features: [
      'Class schedules',
      'Trainer profiles',
      'Membership pricing'
    ],
    included: [
      'Custom branding',
      'Fully responsive design',
      'Mobile optimization',
      'Contact / WhatsApp integration',
      'Basic SEO setup',
      'Production deployment',
      'Content customization',
      'Post-launch support'
    ],
    perfectFor: [
      'Gyms',
      'Personal trainers',
      'Fitness coaches',
      'Wellness brands'
    ],
    pagesCount: 8,
    lighthouse: { performance: 100, accessibility: 100, bestPractices: 100, seo: 100 },
    cmsIntegration: 'Available as an Add-on',
    rating: 4.8,
    reviewsCount: 30,
    releaseDate: '2026-04-12',
    highlights: ['Dynamic layout', 'Bold colors', 'High energy'],
    tags: ['fitness', 'gym', 'wellness']
  },
  {
    id: 'fuzi-studio',
    slug: 'studio',
    name: 'STUDIO',
    title: 'STUDIO',
    tagline: 'Personal Creators & Photographers',
    description: 'A minimalist personal portfolio that puts your work front and center, perfect for designers and photographers.',
    category: 'agency-portfolio',
    categoryLabel: 'Agency & Portfolio',
    priceUSD: 89,
    priceINR: 7499,
    thumbnail: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1200&auto=format&fit=crop',
    previewImages: [
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1200&auto=format&fit=crop',
    ],
    demoUrl: 'https://studio-creator.fuzicraft-website.vercel.app',
    demoRoute: '/websites/studio',
    techStack: [
      { name: 'Next.js 15', category: 'framework', color: '#ffffff' },
      { name: 'Tailwind CSS', category: 'styling', color: '#38bdf8' },
    ],
    features: [
      'Masonry gallery',
      'About me page',
      'Contact form'
    ],
    included: [
      'Custom branding',
      'Fully responsive design',
      'Mobile optimization',
      'Contact / WhatsApp integration',
      'Basic SEO setup',
      'Production deployment',
      'Content customization',
      'Post-launch support'
    ],
    perfectFor: [
      'Designers',
      'Developers',
      'Photographers',
      'Creators'
    ],
    pagesCount: 5,
    lighthouse: { performance: 100, accessibility: 100, bestPractices: 100, seo: 100 },
    cmsIntegration: 'Available as an Add-on',
    rating: 5.0,
    reviewsCount: 45,
    releaseDate: '2026-02-18',
    highlights: ['Clean', 'Focus on content', 'Simple navigation'],
    tags: ['portfolio', 'creator', 'photography']
  }
];
