'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Globe, Building2, Users2, Briefcase, Award, TrendingUp } from 'lucide-react';

/**
 * Global Presence & Impact section
 * NEW SECTION - Added to enhance professional brand authority
 * Highlights multinational reach and business impact
 */

const stats = [
  {
    icon: Building2,
    value: '8+',
    label: 'Companies',
    description: 'Across diverse industries',
  },
  {
    icon: Globe,
    value: '2',
    label: 'Countries',
    description: 'Australia & India',
  },
  {
    icon: Users2,
    value: '5',
    label: 'Cities',
    description: 'Global office locations',
  },
  {
    icon: Briefcase,
    value: '17+',
    label: 'Years',
    description: 'Of industry experience',
  },
];

const industries = [
  'Immigration & Visa Services',
  'Information Technology',
  'Financial Technology',
  'CRM Solutions',
  'Human Resources',
  'Affiliate Marketing',
  'Virtual Assistance',
  'Digital Marketing',
];

export default function GlobalPresence() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section ref={ref} className="pt-16 md:pt-24 lg:pt-32 pb-8 md:pb-12 bg-gray-50" id="global">
      <div className="container-custom">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary-900/5 rounded-full mb-6">
            <Globe className="w-4 h-4 text-primary-900" />
            <span className="text-sm font-medium text-primary-900 uppercase tracking-wider">
              Global Footprint
            </span>
          </div>

          <h2 className="section-title">
            Building a <span className="text-gradient">Global Business Ecosystem</span>
          </h2>

          <p className="section-subtitle mt-4">
            Leading a multinational conglomerate with presence across two continents, 
            serving clients worldwide with excellence and innovation.
          </p>
        </motion.div>

        {/* Stats Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
              className="bg-white rounded-2xl p-6 text-center shadow-sm hover:shadow-lg transition-all duration-300 group"
            >
              <div className="w-14 h-14 rounded-xl bg-primary-900/5 group-hover:bg-primary-900 flex items-center justify-center mx-auto mb-4 transition-colors">
                <stat.icon className="w-7 h-7 text-primary-900 group-hover:text-white transition-colors" />
              </div>
              <p className="text-4xl md:text-5xl font-bold text-primary-900 mb-1">
                {stat.value}
              </p>
              <p className="text-lg font-semibold text-gray-800 mb-1">
                {stat.label}
              </p>
              <p className="text-sm text-gray-500">
                {stat.description}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Industries Auto-Scroll */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <h3 className="text-2xl font-bold text-primary-900 text-center mb-8">
            Industries We Operate In
          </h3>
          
          {/* Marquee Container */}
          <div className="relative overflow-hidden">
            {/* Fade edges */}
            <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-gray-50 to-transparent z-10" />
            <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-gray-50 to-transparent z-10" />
            
            {/* Scrolling content */}
            <div className="flex animate-marquee">
              {/* First set */}
              <div className="flex gap-4 shrink-0">
                {industries.map((industry) => (
                  <span
                    key={industry}
                    className="px-6 py-3 bg-white rounded-full text-gray-700 font-medium shadow-sm whitespace-nowrap"
                  >
                    {industry}
                  </span>
                ))}
              </div>
              {/* Duplicate for seamless loop */}
              <div className="flex gap-4 shrink-0 ml-4">
                {industries.map((industry) => (
                  <span
                    key={`${industry}-dup`}
                    className="px-6 py-3 bg-white rounded-full text-gray-700 font-medium shadow-sm whitespace-nowrap"
                  >
                    {industry}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
