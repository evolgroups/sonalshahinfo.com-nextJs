'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Shield, Heart, Zap, Users, Award, Rocket } from 'lucide-react';

/**
 * Core Values & Ethics section
 * NEW SECTION - Added to enhance professional brand authority
 * Establishes trust and demonstrates organizational values
 */

const values = [
  {
    icon: Shield,
    title: 'Integrity',
    description:
      'Operating with honesty and transparency in all business dealings, building trust with clients and partners.',
  },
  {
    icon: Zap,
    title: 'Innovation',
    description:
      'Continuously seeking new solutions and approaches to deliver exceptional value and stay ahead of industry trends.',
  },
  {
    icon: Heart,
    title: 'Client-Centric',
    description:
      'Putting client success at the center of everything we do, delivering proactive and responsive services.',
  },
  {
    icon: Users,
    title: 'Collaboration',
    description:
      'Fostering teamwork and partnerships that amplify our collective capabilities and create shared success.',
  },
  {
    icon: Award,
    title: 'Excellence',
    description:
      'Striving for the highest standards of quality in every project, product, and interaction.',
  },
  {
    icon: Rocket,
    title: 'Growth',
    description:
      'Committed to continuous learning and development, both for ourselves and the people we work with.',
  },
];

export default function CoreValues() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section ref={ref} className="section-padding bg-white" id="values">
      <div className="container-custom">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-accent/10 rounded-full mb-6">
            <Heart className="w-4 h-4 text-accent" />
            <span className="text-sm font-medium text-accent uppercase tracking-wider">
              What We Stand For
            </span>
          </div>

          <h2 className="section-title">
            Core Values & <span className="text-gradient">Ethics</span>
          </h2>

          <p className="section-subtitle mt-4">
            The principles that guide our decisions, shape our culture, 
            and define how we create value for all stakeholders.
          </p>
        </motion.div>

        {/* Values Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 * index }}
              className="group relative"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary-900 to-accent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              <div className="relative bg-gray-50 group-hover:bg-transparent rounded-2xl p-8 transition-colors duration-300">
                <div className="w-14 h-14 rounded-xl bg-primary-900/10 group-hover:bg-white/20 flex items-center justify-center mb-6 transition-colors">
                  <value.icon className="w-7 h-7 text-primary-900 group-hover:text-white transition-colors" />
                </div>

                <h3 className="text-xl font-bold text-primary-900 group-hover:text-white mb-3 transition-colors">
                  {value.title}
                </h3>

                <p className="text-gray-600 group-hover:text-white/80 leading-relaxed transition-colors">
                  {value.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
