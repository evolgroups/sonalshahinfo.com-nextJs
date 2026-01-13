/**
 * Home Page - sonalshahinfo.com
 * 
 * Main landing page converted from Django template to Next.js
 * Preserves all original content while adding professional enhancements
 * 
 * Section Order:
 * 1. Hero - Introduction (from banner_part)
 * 2. About - Biography and experience (from about_part)
 * 3. Vision - Leadership philosophy (NEW - professional enhancement)
 * 4. Evol Group - Company portfolio (from group-of-company)
 * 5. Global Presence - Multinational reach (NEW - professional enhancement)
 * 6. Services - Business offerings (from service_part)
 * 7. Core Values - Ethics and principles (NEW - professional enhancement)
 * 8. Twitter Feed - Social media presence (from breadcrumb Twitter section)
 * 9. Contact - Get in touch form (NEW - professional enhancement)
 */

import {
  Hero,
  About,
  Vision,
  EvolGroup,
  GlobalPresence,
  Services,
  CoreValues,
  TwitterFeed,
  Contact,
} from '@/components/sections';
import BackToTop from '@/components/BackToTop';

export default function HomePage() {
  return (
    <>
      {/* Hero Section - Main introduction */}
      <Hero />

      {/* About Section - Biography and professional experience */}
      <About />

      {/* Vision Section - Leadership philosophy and approach */}
      <Vision />

      {/* Evol Group Section - Company portfolio and multinational presence */}
      <EvolGroup />

      {/* Global Presence - Statistics and industry coverage */}
      <GlobalPresence />

      {/* Services Section - Business offerings */}
      <Services />

      {/* Core Values - Ethics and principles */}
      <CoreValues />

      {/* Twitter Feed - Social media engagement */}
      <TwitterFeed />

      {/* Contact Form - Professional inquiry form */}
      <Contact />

      {/* Back to Top Button */}
      <BackToTop />
    </>
  );
}
