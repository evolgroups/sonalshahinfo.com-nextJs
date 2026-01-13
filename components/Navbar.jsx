'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X } from 'lucide-react';

/**
 * Navbar component - with navigation tabs for sections
 */

const navLinks = [
  { name: 'About', href: '#about' },
  { name: 'Companies', href: '#evol-group' },
  { name: 'Services', href: '#services' },
  { name: 'Contact', href: '#contact' },
];

const socialLinks = [
  {
    name: 'Facebook',
    href: 'https://www.facebook.com/profile.php?id=100001417248153',
    iconClass: 'fab fa-facebook-square',
  },
  {
    name: 'Twitter',
    href: 'https://twitter.com/Shonashah30',
    iconClass: 'fab fa-twitter',
  },
  {
    name: 'LinkedIn',
    href: 'https://www.linkedin.com/in/sonal-shah-517179190/',
    iconClass: 'fab fa-linkedin-in',
  },
  {
    name: 'Instagram',
    href: 'https://www.instagram.com/sonalshah57/',
    iconClass: 'fab fa-instagram',
  },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e, href) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  return (
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#0F2854] backdrop-blur-md shadow-lg py-2'
            : 'bg-[#0F2854]/95 backdrop-blur-sm py-4'
        }`}
      >
        <div className="container-custom">
          <nav className="flex items-center justify-between">
            {/* Logo - shrinks on scroll */}
            <Link href="/" className="relative z-10 transition-all duration-300">
              <Image
                src="/images/logo.png"
                alt="Sonal Shah"
                width={240}
                height={85}
                className={`w-auto transition-all duration-300 ${
                  isScrolled ? 'h-10 md:h-12' : 'h-16 md:h-[85px]'
                }`}
                priority
              />
            </Link>

            {/* Desktop Navigation - Nav Links + Social Icons */}
            <div className="hidden lg:flex items-center gap-8">
              {/* Nav Links */}
              <ul className="flex items-center gap-6">
                {navLinks.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      onClick={(e) => handleNavClick(e, link.href)}
                      className={`font-medium transition-all duration-300 hover:text-[#BDE8F5] ${
                        isScrolled 
                          ? 'text-white text-sm' 
                          : 'text-white text-base'
                      }`}
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>

              {/* Divider */}
              <div className="w-px h-6 bg-white/30" />

              {/* Social Icons */}
              <div className="flex items-center gap-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`text-white/80 hover:text-[#BDE8F5] transition-all duration-300 ${
                      isScrolled ? 'text-base' : 'text-lg'
                    }`}
                    aria-label={`Follow on ${social.name}`}
                  >
                    <i className={social.iconClass}></i>
                  </a>
                ))}
              </div>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 rounded-lg text-white hover:bg-white/10 transition-colors"
              aria-label="Toggle mobile menu"
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </nav>

          {/* Mobile Menu */}
          <div
            className={`lg:hidden absolute top-full left-0 right-0 bg-[#0F2854] shadow-lg transition-all duration-300 ${
              isMobileMenuOpen
                ? 'opacity-100 visible translate-y-0'
                : 'opacity-0 invisible -translate-y-4'
            }`}
          >
            <div className="container-custom py-6">
              {/* Mobile Nav Links */}
              <ul className="flex flex-col items-center gap-4 mb-6">
                {navLinks.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      onClick={(e) => handleNavClick(e, link.href)}
                      className="text-white/90 hover:text-[#BDE8F5] font-medium text-lg transition-colors"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>

              {/* Divider */}
              <div className="w-16 h-px bg-white/30 mx-auto mb-6" />

              {/* Mobile Social Icons */}
              <div className="flex justify-center gap-6">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-full bg-white/10 text-white hover:bg-[#BDE8F5] hover:text-[#0F2854] transition-all duration-300 text-xl"
                    aria-label={`Follow on ${social.name}`}
                  >
                    <i className={social.iconClass}></i>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </header>
  );
}
