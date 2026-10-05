import { createClient } from 'next-sanity';
import { CATALOG_PRODUCTS, CLIENT_REVIEWS } from '../data/catalog';
import { CatalogItem, ReviewItem } from '../types';

export const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || 'fuzicraft-prod';
export const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || 'production';
export const apiVersion = process.env.NEXT_PUBLIC_SANITY_API_VERSION || '2026-08-01';

export const sanityClient = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: true,
});

export const productsQuery = `*[_type == "websiteProduct"] | order(releaseDate desc) {
  _id,
  "id": _id,
  title,
  "slug": slug.current,
  tagline,
  description,
  category,
  categoryLabel,
  priceUSD,
  priceINR,
  discountPercentage,
  statusPill,
  "thumbnail": thumbnail.asset->url,
  "previewImages": previewImages[].asset->url,
  demoUrl,
  techStack,
  features,
  pagesCount,
  lighthouse,
  cmsIntegration,
  rating,
  reviewsCount,
  releaseDate,
  highlights
}`;

export const reviewsQuery = `*[_type == "review"] | order(_createdAt desc) {
  _id,
  "id": _id,
  authorName,
  authorRole,
  company,
  "avatar": avatar.asset->url,
  rating,
  comment,
  purchasedProduct,
  date
}`;

/**
 * Fetches products dynamically from Sanity if configured,
 * or gracefully falls back to optimized offline catalog items.
 */
export async function getProducts(): Promise<CatalogItem[]> {
  try {
    if (process.env.NEXT_PUBLIC_SANITY_PROJECT_ID) {
      const data = await sanityClient.fetch(productsQuery);
      if (data && data.length > 0) return data;
    }
  } catch (error) {
    console.warn('Sanity client fallback to local catalog:', error);
  }
  return CATALOG_PRODUCTS;
}

export async function getProductBySlug(slug: string): Promise<CatalogItem | undefined> {
  const products = await getProducts();
  return products.find((p) => p.slug === slug);
}

export async function getReviews(): Promise<ReviewItem[]> {
  try {
    if (process.env.NEXT_PUBLIC_SANITY_PROJECT_ID) {
      const data = await sanityClient.fetch(reviewsQuery);
      if (data && data.length > 0) return data;
    }
  } catch (error) {
    console.warn('Sanity client fallback to local reviews:', error);
  }
  return CLIENT_REVIEWS;
}
