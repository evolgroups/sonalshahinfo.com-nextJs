'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { 
  Plane, 
  Monitor, 
  DollarSign, 
  Clock, 
  Users, 
  TrendingUp,
  ArrowRight
} from 'lucide-react';

/**
 * Services section with cursor movement hover effect on cards
 */

const services = [
  {
    icon: Plane,
    title: 'Immigration Services',
    description:
      'Since 1998, Migrate Zone has established itself as a premier visa consultancy specializing in Australian and Canadian immigration pathways. Our dedicated experts provide comprehensive support throughout your journey, conducting thorough profile assessments to recommend the most suitable immigration route for your international relocation.',
    featured: false,
  },
  {
    icon: Monitor,
    title: 'IT Services',
    description:
      'Evol Technobits Digital Pvt. Ltd., a cutting-edge technology division within the Evol Group, delivers comprehensive digital transformation solutions. Our expertise spans custom software development, responsive web and mobile applications, creative design, strategic digital marketing, infrastructure management, quality assurance, e-commerce platforms, and search optimization.',
    featured: true,
  },
  {
    icon: DollarSign,
    title: 'Financial Services',
    description:
      'Evol Trader provides sophisticated investment solutions through automated algorithmic trading systems and strategic value investing methodologies for global retail investors. Our intelligent trading algorithms continuously analyze market opportunities, complemented by fundamental analysis techniques to identify undervalued securities with growth potential.',
    featured: false,
  },
  {
    icon: Clock,
    title: 'CRM',
    description:
      'TrueValueCRM, an Evol Group company, offers advanced Customer Relationship Management solutions designed to streamline business operations. Our platform enhances sales efficiency, optimizes resource allocation, and expands your market reach through intelligent workflow automation.',
    featured: false,
  },
  {
    icon: Users,
    title: 'Human Resource Services',
    description:
      'As a specialized global recruitment consultancy, we partner with leading international organizations to fulfill their staffing requirements across permanent, contract, and temporary employment arrangements.',
    featured: true,
  },
  {
    icon: TrendingUp,
    title: 'Affiliate Marketing Service',
    description:
      'EVOL Network delivers a sophisticated affiliate marketing ecosystem enabling businesses to promote their products and services with maximum cost-efficiency and security. Our platform provides comprehensive tools for performance-driven marketing success.',
    featured: false,
  },
];

// 3D Tilt Card Component
function TiltCard({ children, className = '' }) {
  const cardRef = useRef(null);
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);
  const [glarePosition, setGlarePosition] = useState({ x: 50, y: 50 });

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;

    const card = cardRef.current;
    const rect = card.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    const mouseX = e.clientX - centerX;
    const mouseY = e.clientY - centerY;

    // Calculate rotation (max 15 degrees)
    const rotateXValue = (mouseY / (rect.height / 2)) * -10;
    const rotateYValue = (mouseX / (rect.width / 2)) * 10;

    setRotateX(rotateXValue);
    setRotateY(rotateYValue);

    // Calculate glare position
    const glareX = ((e.clientX - rect.left) / rect.width) * 100;
    const glareY = ((e.clientY - rect.top) / rect.height) * 100;
    setGlarePosition({ x: glareX, y: glareY });
  };

  const handleMouseLeave = () => {
    setRotateX(0);
    setRotateY(0);
    setGlarePosition({ x: 50, y: 50 });
  };

  return (
    <div
      ref={cardRef}
      className={`relative transition-transform duration-200 ease-out ${className}`}
      style={{
        transform: `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`,
        transformStyle: 'preserve-3d',
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {/* Glare effect */}
      <div
        className="absolute inset-0 rounded-2xl opacity-0 hover:opacity-20 transition-opacity duration-300 pointer-events-none"
        style={{
          background: `radial-gradient(circle at ${glarePosition.x}% ${glarePosition.y}%, rgba(255,255,255,0.8) 0%, transparent 60%)`,
        }}
      />
      {children}
    </div>
  );
}

export default function Services() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section ref={ref} className="section-padding bg-gray-50" id="services">
      <div className="container-custom">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary-900/5 rounded-full mb-6">
            <span className="w-2 h-2 bg-accent rounded-full" />
            <span className="text-sm font-medium text-primary-900 uppercase tracking-wider">
              What We Offer
            </span>
          </div>
          
          <h2 className="section-title">
            Take a Look Around Some of Our{' '}
            <span className="text-gradient">Services</span>
          </h2>
          
          <p className="section-subtitle mt-4">
            Comprehensive business solutions designed to drive growth, innovation, 
            and success across multiple industries.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 * index }}
              className="h-full"
            >
              <TiltCard className="h-full">
                <div
                  className={`group relative bg-white rounded-2xl p-8 shadow-sm hover:shadow-2xl transition-shadow duration-300 h-full flex flex-col ${
                    service.featured
                      ? 'ring-2 ring-primary-900'
                      : ''
                  }`}
                >
                  {/* Featured badge */}
                  {service.featured && (
                    <div className="absolute -top-3 left-8">
                      <span className="px-3 py-1 bg-primary-900 text-white text-xs font-semibold rounded-full">
                        Featured
                      </span>
                    </div>
                  )}

                  {/* Icon */}
                  <div
                    className={`inline-flex items-center justify-center w-14 h-14 rounded-xl mb-6 transition-all duration-300 ${
                      service.featured
                        ? 'bg-primary-900 text-white'
                        : 'bg-primary-900/5 text-primary-900 group-hover:bg-primary-900 group-hover:text-white'
                    }`}
                    style={{ transform: 'translateZ(30px)' }}
                  >
                    <service.icon className="w-7 h-7" />
                  </div>

                  {/* Content */}
                  <h3 
                    className="text-xl font-bold text-primary-900 mb-4 group-hover:text-accent transition-colors"
                    style={{ transform: 'translateZ(20px)' }}
                  >
                    {service.title}
                  </h3>

                  <p 
                    className="text-gray-600 leading-relaxed mb-6 flex-grow"
                    style={{ transform: 'translateZ(15px)' }}
                  >
                    {service.description}
                  </p>

                  {/* Learn more link */}
                  <div 
                    className="inline-flex items-center gap-2 text-primary-900 font-medium group-hover:text-accent transition-colors mt-auto"
                    style={{ transform: 'translateZ(25px)' }}
                  >
                    <span className="text-sm">Learn more</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </TiltCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
