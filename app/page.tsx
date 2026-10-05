'use client';

import React, { useState, useEffect } from 'react';
import { Navbar } from '@/components/navbar/Navbar';
import { Hero } from '@/components/hero/Hero';
import { CustomizationProcess } from '@/components/catalog/CustomizationProcess';
import { CatalogSection } from '@/components/catalog/CatalogSection';
import { StudioFeatures } from '@/components/features/StudioFeatures';
import { ServicesSection } from '@/components/services/ServicesSection';
import { ProcessSection } from '@/components/services/ProcessSection';
import { AboutSection } from '@/components/about/AboutSection';
import { PricingSection } from '@/components/pricing/PricingSection';
import { FAQSection } from '@/components/faq/FAQSection';
import { ClientReviews } from '@/components/reviews/ClientReviews';
import { ContactSection } from '@/components/contact/ContactSection';
import { FinalCTA } from '@/components/cta/FinalCTA';
import { Footer } from '@/components/footer/Footer';
import { FloatingWhatsApp } from '@/components/floating/FloatingWhatsApp';
import { LiveDemoModal } from '@/components/modals/LiveDemoModal';
import { PhotoGalleryModal } from '@/components/modals/PhotoGalleryModal';
import { CheckoutModal } from '@/components/modals/CheckoutModal';
import { AuthModal } from '@/components/modals/AuthModal';
import { CustomBuildModal } from '@/components/modals/CustomBuildModal';
import { CatalogItem, Currency, ReviewItem } from '@/lib/types';
import { CATALOG_PRODUCTS, CLIENT_REVIEWS } from '@/lib/data/catalog';
import { getProducts, getReviews } from '@/lib/sanity/client';

export default function HomePage() {
  const [currency, setCurrency] = useState<Currency>('USD');
  const [products, setProducts] = useState<CatalogItem[]>(CATALOG_PRODUCTS);
  const [reviews, setReviews] = useState<ReviewItem[]>(CLIENT_REVIEWS);
  const [selectedPhotoGallery, setSelectedPhotoGallery] = useState<CatalogItem | null>(null);
  const [selectedLiveDemo, setSelectedLiveDemo] = useState<CatalogItem | null>(null);
  const [selectedCheckout, setSelectedCheckout] = useState<CatalogItem | null>(null);
  const [isAuthOpen, setIsAuthOpen] = useState(false);
  const [isCustomQuoteOpen, setIsCustomQuoteOpen] = useState(false);

  useEffect(() => {
    // Attempt dynamic Sanity fetch with graceful fallback
    async function loadData() {
      try {
        const fetchedProducts = await getProducts();
        if (fetchedProducts && fetchedProducts.length > 0) {
          setProducts(fetchedProducts);
        }
        const fetchedReviews = await getReviews();
        if (fetchedReviews && fetchedReviews.length > 0) {
          setReviews(fetchedReviews);
        }
      } catch (err) {
        console.warn('Using local catalog fallback:', err);
      }
    }
    loadData();
  }, []);

  const toggleCurrency = () => {
    setCurrency((prev) => (prev === 'USD' ? 'INR' : 'USD'));
  };

  const scrollToCatalog = () => {
    const el = document.getElementById('catalog');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToContact = () => {
    const el = document.getElementById('contact');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <main className="relative flex-1 flex flex-col min-h-screen bg-[#0D0D0F] overflow-x-hidden">
      {/* Apple-style sticky navbar */}
      <Navbar
        currency={currency}
        onCurrencyToggle={toggleCurrency}
        onOpenAuthModal={() => setIsAuthOpen(true)}
        onOpenCustomQuote={scrollToContact}
      />

      <Hero
        onExploreClick={scrollToCatalog}
        onCustomBuildClick={scrollToContact}
      />

      <CustomizationProcess />

      <CatalogSection
        products={products}
        currency={currency}
        onOpenPhotoGallery={(prod) => setSelectedPhotoGallery(prod)}
        onOpenLiveDemo={(prod) => setSelectedLiveDemo(prod)}
        onOpenCheckout={(prod) => setSelectedCheckout(prod)}
      />

      <StudioFeatures />

      <ServicesSection />
      
      <ProcessSection />
      
      <AboutSection />
      
      <PricingSection />

      <FAQSection />

      <ClientReviews reviews={reviews} />

      <ContactSection />
      
      <FinalCTA />

      <Footer />

      <FloatingWhatsApp />

      <PhotoGalleryModal
        product={selectedPhotoGallery}
        currency={currency}
        isOpen={!!selectedPhotoGallery}
        onClose={() => setSelectedPhotoGallery(null)}
        onOpenLiveDemo={(prod) => setSelectedLiveDemo(prod)}
        onOpenCheckout={(prod) => setSelectedCheckout(prod)}
      />

      <LiveDemoModal
        product={selectedLiveDemo}
        currency={currency}
        isOpen={!!selectedLiveDemo}
        onClose={() => setSelectedLiveDemo(null)}
        onOpenCheckout={(prod) => setSelectedCheckout(prod)}
      />

      <CheckoutModal
        product={selectedCheckout}
        currency={currency}
        isOpen={!!selectedCheckout}
        onClose={() => setSelectedCheckout(null)}
      />

      <AuthModal
        isOpen={isAuthOpen}
        onClose={() => setIsAuthOpen(false)}
      />

      {/* Kept CustomBuildModal just in case, but no longer the primary contact method */}
      <CustomBuildModal
        isOpen={isCustomQuoteOpen}
        onClose={() => setIsCustomQuoteOpen(false)}
      />
    </main>
  );
}
