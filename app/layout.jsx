import './globals.css';
import 'nprogress/nprogress.css';
import { Suspense } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ProgressBar from '@/components/ProgressBar';
import ScrollProgress from '@/components/ScrollProgress';

/**
 * SEO Metadata for sonalshahinfo.com
 * Optimized for personal brand authority and business leadership positioning
 */
export const metadata = {
  metadataBase: new URL('https://sonalshahinfo.com'),
  title: {
    default: 'Sonal Shah | Founder & Director of Evol Group | Business Leader',
    template: '%s | Sonal Shah',
  },
  description:
    'Sonal Shah is a visionary business leader with 17+ years of experience, serving as Founder & Director of Evol Group – a multinational conglomerate with operations in Australia and India. Expertise in immigration services, IT solutions, financial technology, and business development.',
  keywords: [
    'Sonal Shah',
    'Evol Group',
    'Business Leader',
    'Founder',
    'Director',
    'Entrepreneur',
    'Immigration Services',
    'Migrate Zone',
    'Technobits Digital',
    'TrueValueCRM',
    'Evol Network',
    'EVOL Coin',
    'Marketrill',
    'Australian Immigration',
    'Canadian Immigration',
    'Business Development',
    'IT Services',
    'CRM Solutions',
    'Financial Technology',
    'Ahmedabad',
    'Sydney',
    'Melbourne',
    'Adelaide',
    'Vadodara',
    'Multinational Company',
    'Business Consultant',
    'Entrepreneurship',
  ],
  authors: [{ name: 'Sonal Shah', url: 'https://sonalshahinfo.com' }],
  creator: 'Sonal Shah',
  publisher: 'Evol Group',
  applicationName: 'Sonal Shah Portfolio',
  referrer: 'origin-when-cross-origin',
  formatDetection: {
    email: true,
    address: true,
    telephone: true,
  },
  manifest: '/manifest.json',
  openGraph: {
    type: 'profile',
    firstName: 'Sonal',
    lastName: 'Shah',
    username: 'sonalshah',
    title: 'Sonal Shah | Founder & Director of Evol Group',
    description:
      'Visionary business leader with 17+ years of experience. Founder & Director of Evol Group – a multinational conglomerate with diverse business interests across Australia and India.',
    url: 'https://sonalshahinfo.com',
    siteName: 'Sonal Shah - Official Portfolio',
    images: [
      {
        url: '/images/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Sonal Shah - Founder & Director of Evol Group',
      },
    ],
    locale: 'en_US',
    countryName: 'Australia, India',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Sonal Shah | Founder & Director of Evol Group',
    description:
      'Visionary business leader with 17+ years of experience. Founder of Evol Network, Director of TrueValueCRM, and leader of multinational Evol Group.',
    site: '@Shonashah30',
    creator: '@Shonashah30',
    images: ['/images/twitter-card.png'],
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: 'https://sonalshahinfo.com',
    languages: {
      'en-US': 'https://sonalshahinfo.com',
    },
  },
  verification: {
    // TODO: Add verification codes when available
    // google: 'google-site-verification-code',
    // yandex: 'yandex-verification-code',
    // bing: 'msvalidate.01',
  },
  category: 'Business',
  classification: 'Business Portfolio',
  other: {
    'mobile-web-app-capable': 'yes',
    'apple-mobile-web-app-capable': 'yes',
    'apple-mobile-web-app-status-bar-style': 'black-translucent',
    'apple-mobile-web-app-title': 'Sonal Shah',
  },
};

/**
 * JSON-LD Structured Data for enhanced SEO
 * Multiple schemas for better search engine understanding
 */

// Person Schema
const personSchema = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  '@id': 'https://sonalshahinfo.com/#person',
  name: 'Sonal Shah',
  url: 'https://sonalshahinfo.com',
  image: 'https://sonalshahinfo.com/images/banner_bg_1.png',
  sameAs: [
    'https://twitter.com/Shonashah30',
    'https://www.linkedin.com/in/sonal-shah-517179190/',
    'https://www.facebook.com/profile.php?id=100001417248153',
    'https://www.instagram.com/sonalshah57/',
  ],
  jobTitle: ['Founder', 'Director', 'Business Development Manager'],
  worksFor: [
    {
      '@type': 'Organization',
      name: 'Evol Network',
      url: 'https://www.evolnetwork.com/',
    },
    {
      '@type': 'Organization',
      name: 'TrueValue CRM',
      url: 'https://truevaluecrm.com/',
    },
    {
      '@type': 'Organization',
      name: 'Technobits Digital',
      url: 'https://technobitsdigital.com/',
    },
  ],
  description:
    'Experienced founder and director with 17+ years in business development, entrepreneurship, and team building. Leading multinational Evol Group with operations in Australia and India.',
  knowsAbout: [
    'Business Development',
    'Immigration Services',
    'IT Solutions',
    'CRM Software',
    'Financial Technology',
    'Affiliate Marketing',
    'Human Resources',
    'Entrepreneurship',
    'Team Leadership',
  ],
  email: 'mailto:hello@sonalshahinfo.com',
  address: {
    '@type': 'PostalAddress',
    addressCountry: ['IN', 'AU'],
    addressLocality: 'Ahmedabad, Sydney, Melbourne, Adelaide, Vadodara',
  },
};

// Organization Schema - Evol Group
const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  '@id': 'https://sonalshahinfo.com/#organization',
  name: 'Evol Group',
  url: 'https://sonalshahinfo.com',
  logo: 'https://sonalshahinfo.com/images/EGC.png',
  description:
    'Evol Group is a multinational conglomerate with diverse business interests across Australia and India, offering services in immigration, IT, finance, CRM, HR, and affiliate marketing.',
  founder: {
    '@type': 'Person',
    '@id': 'https://sonalshahinfo.com/#person',
  },
  address: [
    {
      '@type': 'PostalAddress',
      addressCountry: 'IN',
      addressLocality: 'Ahmedabad, Vadodara',
    },
    {
      '@type': 'PostalAddress',
      addressCountry: 'AU',
      addressLocality: 'Sydney, Melbourne, Adelaide',
    },
  ],
  contactPoint: {
    '@type': 'ContactPoint',
    email: 'hello@sonalshahinfo.com',
    contactType: 'Business Inquiries',
  },
  sameAs: [
    'https://www.linkedin.com/in/sonal-shah-517179190/',
    'https://twitter.com/Shonashah30',
  ],
};

// Website Schema
const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  '@id': 'https://sonalshahinfo.com/#website',
  name: 'Sonal Shah - Official Portfolio',
  url: 'https://sonalshahinfo.com',
  description:
    'Official portfolio of Sonal Shah, Founder & Director of Evol Group. Explore multinational business ventures, leadership insights, and professional services.',
  publisher: {
    '@type': 'Organization',
    '@id': 'https://sonalshahinfo.com/#organization',
  },
  inLanguage: 'en-US',
};

// ProfilePage Schema
const profileSchema = {
  '@context': 'https://schema.org',
  '@type': 'ProfilePage',
  '@id': 'https://sonalshahinfo.com/#profilepage',
  mainEntity: {
    '@type': 'Person',
    '@id': 'https://sonalshahinfo.com/#person',
  },
  url: 'https://sonalshahinfo.com',
  name: 'Sonal Shah - Professional Profile',
  description:
    'Professional profile of Sonal Shah, showcasing 17+ years of leadership experience across multiple industries.',
};

// Combine all schemas
const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [personSchema, organizationSchema, websiteSchema, profileSchema],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        {/* Manifest for PWA */}
        <link rel="manifest" href="/manifest.json" />
        
        {/* Favicon */}
        <link rel="icon" href="/favicon.png" sizes="any" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        
        {/* Theme Color */}
        <meta name="theme-color" content="#0F2854" />
        <meta name="msapplication-TileColor" content="#0F2854" />
        
        {/* Preconnect to external resources for performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://cdnjs.cloudflare.com" />
        <link rel="dns-prefetch" href="https://challenges.cloudflare.com" />
        
        {/* Font Awesome for social icons - matching original site */}
        <link 
          rel="stylesheet" 
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css"
          crossOrigin="anonymous"
        />
        
        {/* JSON-LD Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen flex flex-col">
        <ScrollProgress />
        <Suspense fallback={null}>
          <ProgressBar />
        </Suspense>
        <Navbar />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
