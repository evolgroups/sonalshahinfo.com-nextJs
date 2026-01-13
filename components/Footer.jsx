'use client';

import Image from 'next/image';
import { Facebook, Twitter, Linkedin, Instagram, Mail } from 'lucide-react';

/**
 * Footer component - converted from Django template
 * Preserves all original content and contact information
 */

const navLinks = [
  { name: 'About', href: '#about' },
  { name: 'Companies', href: '#evol-group' },
  { name: 'Services', href: '#services' },
  { name: 'Contact', href: '#contact' },
];

const servicesList = [
  'Immigration Services',
  'IT Services',
  'Financial Services',
  'CRM',
  'Human Resource Services',
  'Affiliate Marketing Service',
];

const companiesList = [
  { name: 'Migrate Zone', href: 'https://migratezone.com/' },
  { name: 'Technobits Digital', href: 'https://technobitsdigital.com/' },
  { name: 'Evol Trader', href: 'https://evoltrader.com/' },
  { name: 'True Value CRM', href: 'https://truevaluecrm.com/' },
  { name: 'EVOL Network', href: 'https://www.evolnetwork.com/' },
  { name: 'Evol Jobs', href: 'http://evoljobs.com/' },
  { name: 'Evol Assistant', href: 'http://evolassistant.com/' },
  { name: 'Marketrill', href: 'https://marketrill.com/' },
];

const socialLinks = [
  {
    name: 'Facebook',
    href: 'https://www.facebook.com/profile.php?id=100001417248153',
    icon: Facebook,
  },
  {
    name: 'Twitter',
    href: 'https://twitter.com/Shonashah30',
    icon: Twitter,
  },
  {
    name: 'LinkedIn',
    href: 'https://www.linkedin.com/in/sonal-shah-517179190/',
    icon: Linkedin,
  },
  {
    name: 'Instagram',
    href: 'https://www.instagram.com/sonalshah57/',
    icon: Instagram,
  },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-br from-[#0F2854] to-[#1C4D8D] text-white relative overflow-hidden">
      {/* Curved light gradient overlay */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div 
          className="absolute -left-[30%] top-0 w-[70%] h-full"
          style={{
            background: 'radial-gradient(ellipse 100% 100% at 30% 50%, rgba(189,232,245,0.2) 0%, rgba(189,232,245,0.1) 40%, transparent 70%)',
          }}
        />
      </div>
      
      {/* Main Footer Content */}
      <div className="container-custom py-12 md:py-16 lg:py-20 relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          {/* Contact Section */}
          <div className="space-y-4 md:space-y-6 flex flex-col items-center sm:items-start">
            {/* Logo */}
            <Image
              src="/images/logo.png"
              alt="Sonal Shah"
              width={220}
              height={80}
              className="w-auto h-16 md:h-20"
            />
            
            <div className="space-y-2 md:space-y-3 text-center sm:text-left">
              <p className="text-white/70 text-sm md:text-base">Discuss your concern now</p>
              <a
                href="mailto:hello@sonalshahinfo.com"
                className="group inline-flex items-center justify-center sm:justify-start gap-2 text-base md:text-lg font-bold hover:text-accent transition-colors duration-300"
              >
                <Mail className="w-4 h-4 md:w-5 md:h-5 group-hover:scale-110 transition-transform flex-shrink-0" />
                <span className="break-all">hello@sonalshahinfo.com</span>
              </a>
              <p className="text-white/60 text-xs">
                Alternative: sonalsshah80@gmail.com
              </p>
            </div>
          </div>

          {/* Services Section */}
          <div className="text-center sm:text-left">
            <h4 className="text-base md:text-lg font-semibold mb-3 md:mb-4">Services</h4>
            <ul className="space-y-2 flex flex-col items-center sm:items-start">
              {servicesList.map((service) => (
                <li key={service}>
                  <a
                    href="#services"
                    className="text-white/70 hover:text-white text-sm transition-colors duration-300"
                  >
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Companies Section */}
          <div className="text-center sm:text-left">
            <h4 className="text-base md:text-lg font-semibold mb-3 md:mb-4">Companies</h4>
            <ul className="space-y-2 flex flex-col items-center sm:items-start">
              {companiesList.map((company) => (
                <li key={company.name}>
                  <a
                    href={company.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white/70 hover:text-white text-sm transition-colors duration-300 inline-flex items-center gap-1 group"
                  >
                    <span className="break-words">{company.name}</span>
                    <svg 
                      className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity flex-shrink-0" 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* QR Code and Social Links */}
          <div className="flex flex-col items-center sm:items-start lg:items-end space-y-4 md:space-y-6">
            {/* QR Code for contact - preserved from original */}
            <div className="bg-white p-3 md:p-4 rounded-xl shadow-lg">
              <Image
                src="/images/sonal-shah-contact.png"
                alt="Scan to save contact information"
                width={160}
                height={160}
                className="w-28 h-28 md:w-32 md:h-32"
              />
            </div>
            <p className="text-white/80 text-xs md:text-sm text-center sm:text-left lg:text-right">
              Scan to save my contact information
            </p>

            {/* Social Links */}
            <div className="flex gap-3 md:gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 md:p-3 rounded-full bg-white/10 hover:bg-white hover:text-primary-900 transition-all duration-300 hover:scale-110"
                  aria-label={`Follow on ${social.name}`}
                >
                  <social.icon className="w-4 h-4 md:w-5 md:h-5" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Copyright Bar */}
      <div className="border-t border-white/10 relative z-10">
        <div className="container-custom py-4 md:py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            {/* Nav Links */}
            <nav className="flex flex-wrap justify-center gap-4 md:gap-6">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-white/70 hover:text-white text-xs md:text-sm font-medium transition-colors duration-300"
                >
                  {link.name}
                </a>
              ))}
            </nav>
            
            {/* Copyright */}
            <p className="text-white/60 text-xs md:text-sm text-center">
              Copyright © {currentYear} Sonal Shah. All rights reserved
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
