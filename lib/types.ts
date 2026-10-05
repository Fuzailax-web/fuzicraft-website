export type StatusPill = 'NEW' | 'MOST POPULAR' | 'TOP RATED';

export type CategoryType = 'all' | 'saas-ai' | 'ecommerce' | 'agency-portfolio' | 'fintech-web3';

export interface TechStackItem {
  name: string;
  category: 'framework' | 'styling' | 'cms' | 'database' | 'payment' | 'animation' | 'tool';
  color?: string;
  iconName?: string;
}

export interface LighthouseMetrics {
  performance: number;
  accessibility: number;
  bestPractices: number;
  seo: number;
}

export interface CatalogItem {
  id: string;
  slug: string;
  title: string;
  tagline: string;
  description: string;
  category: 'saas-ai' | 'ecommerce' | 'agency-portfolio' | 'fintech-web3';
  categoryLabel: string;
  priceUSD: number;
  priceINR: number;
  discountPercentage?: number;
  statusPill?: StatusPill;
  thumbnail: string;
  previewImages: string[];
  demoUrl: string;
  mockPreviewHtml?: string;
  techStack: TechStackItem[];
  features: string[];
  pagesCount: number;
  lighthouse: LighthouseMetrics;
  cmsIntegration: string;
  rating: number;
  reviewsCount: number;
  releaseDate: string;
  highlights: string[];
}

export interface ReviewItem {
  id: string;
  authorName: string;
  authorRole: string;
  company: string;
  avatar: string;
  rating: number;
  comment: string;
  purchasedProduct: string;
  date: string;
}

export type Currency = 'USD' | 'INR';

export interface CustomQuotePayload {
  name: string;
  email: string;
  phone?: string;
  projectType: string;
  budgetRange: string;
  timeline: string;
  description: string;
}
