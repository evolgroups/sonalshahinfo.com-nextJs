'use client';

import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

/**
 * Hero section with typing animation and interactive effects
 */

const socialStats = [
  {
    name: 'Facebook',
    href: 'https://www.facebook.com/profile.php?id=100001417248153',
    icon: Facebook,
    followers: '7.1k',
  },
  {
    name: 'Twitter',
    href: 'https://twitter.com/Shonashah30',
    icon: Twitter,
    followers: '2.6k',
  },
  {
    name: 'Instagram',
    href: 'https://www.instagram.com/sonalshah57/',
    icon: Instagram,
    followers: '1.8k',
  },
  {
    name: 'LinkedIn',
    href: 'https://www.linkedin.com/in/sonal-shah-517179190/',
    icon: Linkedin,
    followers: '500+',
  },
];

// Typing animation component
function TypeWriter({ text, speed = 100, delay = 0 }) {
  const [displayedText, setDisplayedText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const startTimeout = setTimeout(() => {
      setStarted(true);
    }, delay);

    return () => clearTimeout(startTimeout);
  }, [delay]);

  useEffect(() => {
    if (!started) return;

    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setDisplayedText((prev) => prev + text[currentIndex]);
        setCurrentIndex((prev) => prev + 1);
      }, speed);

      return () => clearTimeout(timeout);
    }
  }, [currentIndex, text, speed, started]);

  return (
    <span>
      {displayedText}
      {currentIndex < text.length && (
        <span className="animate-pulse">|</span>
      )}
    </span>
  );
}

// Particle component
function Particle({ delay, index }) {
  const [dimensions, setDimensions] = useState({ width: 1920, height: 1080 });

  useEffect(() => {
    // Set actual window dimensions after mount
    setDimensions({
      width: window.innerWidth,
      height: window.innerHeight,
    });
  }, []);

  const randomX = (index * 137.5) % dimensions.width; // Distribute particles
  const randomDuration = 10 + (index % 10);

  return (
    <motion.div
      className="absolute w-1 h-1 bg-[#BDE8F5]/60 rounded-full"
      initial={{
        x: randomX,
        y: dimensions.height + 10,
        opacity: 0,
      }}
      animate={{
        y: -10,
        opacity: [0, 1, 1, 0],
      }}
      transition={{
        duration: randomDuration,
        delay: delay,
        repeat: Infinity,
        ease: 'linear',
      }}
    />
  );
}

export default function Hero() {
  const [showSecondLine, setShowSecondLine] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const heroRef = useRef(null);

  // Calculate years of experience dynamically (starting from 2007)
  const startYear = 2007;
  const currentYear = new Date().getFullYear();
  const yearsOfExperience = currentYear - startYear;

  useEffect(() => {
    // Start second line after first line finishes
    const timeout = setTimeout(() => {
      setShowSecondLine(true);
    }, 1500);

    return () => clearTimeout(timeout);
  }, []);

  // Mouse tracking for spotlight effect
  const handleMouseMove = (e) => {
    if (heroRef.current) {
      const rect = heroRef.current.getBoundingClientRect();
      setMousePosition({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      });
    }
  };

  return (
    <section 
      ref={heroRef}
      onMouseMove={handleMouseMove}
      className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-[#08132a]"
    >
      {/* Animated gradient background - subtle overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#08132a] via-[#0F2854]/70 to-[#08132a] animate-gradient-shift" />
      
      {/* Mouse-following spotlight */}
      <div 
        className="absolute pointer-events-none transition-opacity duration-300"
        style={{
          left: mousePosition.x,
          top: mousePosition.y,
          width: '600px',
          height: '600px',
          transform: 'translate(-50%, -50%)',
          background: 'radial-gradient(circle, rgba(76,136,196,0.25) 0%, transparent 70%)',
        }}
      />
      
      {/* Animated particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(30)].map((_, i) => (
          <Particle key={i} delay={i * 0.3} index={i} />
        ))}
      </div>
      
      {/* Curved light gradient overlay */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div 
          className="absolute -left-[30%] top-0 w-[70%] h-full"
          style={{
            background: 'radial-gradient(ellipse 100% 100% at 30% 50%, rgba(76,136,196,0.15) 0%, rgba(189,232,245,0.08) 40%, transparent 70%)',
          }}
        />
      </div>

      <div className="container-custom py-12 md:py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="order-2 lg:order-1"
          >
            {/* Main heading with typing animation */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
              <TypeWriter text="Hi there," speed={80} delay={300} />
              <span className="block mt-2">
                {showSecondLine && (
                  <TypeWriter text="This is Sonal Shah" speed={80} delay={0} />
                )}
              </span>
            </h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 3 }}
              className="text-xl md:text-2xl text-white/90 mb-6"
            >
              Founder & Director Of Multiple Companies
            </motion.p>

            {/* Description */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 3.4 }}
              className="text-base md:text-lg text-white/80 mb-8 max-w-2xl space-y-3"
            >
              <p>
                Visionary entrepreneur with <span className="text-[#BDE8F5] font-semibold">{yearsOfExperience}+ years of experience</span> leading 
                multinational businesses across Australia and India.
              </p>
              <p>
                Specializing in immigration services, IT solutions, CRM technology, and business development, 
                I&apos;ve built a diverse portfolio of successful ventures under the <span className="text-[#BDE8F5] font-semibold">Evol Group</span> umbrella.
              </p>
            </motion.div>

            {/* Social Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 3.2 }}
              className="flex flex-wrap gap-6 md:gap-8"
            >
              {socialStats.map((social, index) => (
                <motion.a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: 3.3 + index * 0.1 }}
                  className="group flex flex-col items-center"
                >
                  <div className="w-12 h-12 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center text-white group-hover:scale-110 group-hover:bg-[#BDE8F5] group-hover:text-[#0F2854] transition-all duration-300">
                    <social.icon className="w-5 h-5" />
                  </div>
                  <span className="mt-2 text-sm font-medium text-white/80">
                    {social.followers}
                  </span>
                </motion.a>
              ))}
            </motion.div>
          </motion.div>

          {/* Hero Image */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="order-1 lg:order-2 relative flex items-center justify-center"
          >
            <div className="relative w-full max-w-md lg:max-w-lg mx-auto">
              <Image
                src="/images/banner_bg_1.png"
                alt="Sonal Shah - Founder & Director of Evol Group"
                width={600}
                height={700}
                className="w-full h-auto"
                priority
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
