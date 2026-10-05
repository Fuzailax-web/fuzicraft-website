import type { Metadata, Viewport } from 'next';
import './globals.css';

export const viewport: Viewport = {
  themeColor: '#0D0D0F',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  title: 'FUZICRAFT | Premium Digital Agency & Custom Websites',
  description: 'FUZICRAFT is a premium digital agency specializing in high-performance, conversion-optimized websites and bespoke digital experiences. We turn visitors into customers.',
  keywords: [
    'Next.js 15 Templates',
    'High Performance Websites',
    'Sanity CMS Studio',
    'Monochrome Minimalist UI',
    'Tailwind CSS',
    'Framer Motion',
    'Web Studio Marketplace',
    'FuziCraft',
    'Fuzail Shaikh',
  ],
  authors: [{ name: 'Fuzail Shaikh', url: 'https://github.com/fuza1lx' }],
  creator: 'Fuzail Shaikh',
  openGraph: {
    title: 'FUZICRAFT | Premium Digital Agency & Custom Websites',
    description: 'FUZICRAFT is a premium digital agency specializing in high-performance, conversion-optimized websites and bespoke digital experiences.',
    url: 'https://fuzicraft.com',
    siteName: 'FuziCraft Studio',
    locale: 'en_US',
    type: 'website',
  },
  icons: {
    icon: '/favicon.ico',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body className="bg-[#0D0D0F] text-[#F5F5F7] min-h-screen flex flex-col antialiased selection:bg-white selection:text-black">
        {children}
      </body>
    </html>
  );
}
