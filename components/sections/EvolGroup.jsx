'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Globe, Building2, MapPin } from 'lucide-react';

/**
 * Evol Group section - converted from Django group-of-company section
 * Preserves all original content including company logos and descriptions
 */

const companies = [
  {
    name: 'Migrate Zone',
    logo: '/images/MZ.png',
    href: 'https://migratezone.com/',
  },
  {
    name: 'Technobits Digital',
    logo: '/images/TBD.png',
    href: 'https://technobitsdigital.com/',
  },
  {
    name: 'Evol Trader',
    logo: '/images/ET.png',
    href: 'https://evoltrader.com/',
  },
  {
    name: 'True Value CRM',
    logo: '/images/TVCRM.png',
    href: 'https://truevaluecrm.com/',
  },
  {
    name: 'EVOL Network',
    logo: '/images/EN.png',
    href: 'https://www.evolnetwork.com/',
  },
  {
    name: 'Evol Jobs',
    logo: '/images/EJ.png',
    href: 'http://evoljobs.com/',
  },
  {
    name: 'Evol Assistant',
    logo: '/images/EA.png',
    href: 'http://evolassistant.com/',
  },
  {
    name: 'Marketrill',
    logo: '/images/MT.png',
    href: 'https://marketrill.com/',
  },
];

const locations = [
  { country: 'India', cities: ['Ahmedabad', 'Vadodara'] },
  { country: 'Australia', cities: ['Sydney', 'Melbourne', 'Adelaide'] },
];

export default function EvolGroup() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section ref={ref} className="section-padding bg-gradient-to-br from-[#1C4D8D] to-[#0F2854] text-white relative overflow-hidden" id="evol-group">
      {/* Curved light gradient overlay */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div 
          className="absolute -left-[30%] top-0 w-[70%] h-full"
          style={{
            background: 'radial-gradient(ellipse 100% 100% at 30% 50%, rgba(189,232,245,0.2) 0%, rgba(189,232,245,0.1) 40%, transparent 70%)',
          }}
        />
      </div>
      
      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Left Column - About Evol Group */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            {/* Evol Group Logo */}
            <div className="mb-8">
              <Image
                src="/images/EGC.png"
                alt="Evol Group"
                width={120}
                height={120}
                className="w-24 h-24 md:w-28 md:h-28"
              />
            </div>

            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              Evol Group
            </h2>

            {/* Description - preserved from original */}
            <div className="space-y-4 text-white/80 text-lg leading-relaxed">
              <p>
                Evol Group is a group of multinational companies with multiple business 
                interests with offices located in Australia and India. We have branches 
                in Ahmedabad, and Vadodara in India, and Sydney, Melbourne, and Adelaide 
                in Australia.
              </p>
              <p>
                We understand that our reputation is entirely dependent on how well we 
                serve our customers, and nothing can replace our commitment to deliver 
                proactive, relevant, and receptive professional services.
              </p>
              <p>
                As we move along, we strive to strengthen our relationship with clients 
                and hold a firm footing in the domains we operate on.
              </p>
            </div>

            {/* Global Presence */}
            <div className="mt-10 flex flex-wrap gap-6">
              {locations.map((location) => (
                <div
                  key={location.country}
                  className="flex items-start gap-3 bg-white/10 rounded-xl px-5 py-4"
                >
                  <MapPin className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-white">{location.country}</p>
                    <p className="text-white/70 text-sm">
                      {location.cities.join(', ')}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right Column - Companies Grid */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-2 xl:grid-cols-3 gap-4 md:gap-6">
              {companies.map((company, index) => (
                <motion.a
                  key={company.name}
                  href={company.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.4, delay: 0.3 + index * 0.05 }}
                  className="group relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-4 md:p-5 text-center hover:bg-white/10 hover:border-white/30 transition-all duration-300 hover:scale-105"
                >
                  <div className="aspect-square relative mb-2 md:mb-3 flex items-center justify-center">
                    <Image
                      src={company.logo}
                      alt={company.name}
                      width={80}
                      height={80}
                      className="w-14 h-14 md:w-16 lg:w-20 md:h-16 lg:h-20 object-contain group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                  <p className="text-xs md:text-sm font-medium text-white/90 group-hover:text-white transition-colors">
                    {company.name}
                  </p>
                </motion.a>
              ))}
            </div>

            {/* Group of Companies label */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.7 }}
              className="mt-8 text-center"
            >
              <div className="inline-flex items-center gap-3 px-6 py-3 bg-white/10 rounded-full">
                <Building2 className="w-5 h-5 text-accent" />
                <span className="font-semibold text-lg">Group of Companies</span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
