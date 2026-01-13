'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Lightbulb, Target, Compass, Sparkles } from 'lucide-react';

/**
 * Vision & Leadership Philosophy section
 * NEW SECTION - Added to enhance professional brand authority
 * Content derived from existing site information and professional standards
 */

const philosophyPoints = [
  {
    icon: Lightbulb,
    title: 'Visionary Thinking',
    description:
      'Identifying emerging opportunities and building sustainable business models that create long-term value for stakeholders across diverse industries.',
  },
  {
    icon: Target,
    title: 'Results-Driven Approach',
    description:
      'Focusing on measurable outcomes while maintaining the highest standards of quality, ethics, and professional excellence in every endeavor.',
  },
  {
    icon: Compass,
    title: 'Strategic Leadership',
    description:
      'Guiding teams and organizations through complex challenges with clarity, decisiveness, and a commitment to continuous improvement.',
  },
  {
    icon: Sparkles,
    title: 'Empowering Others',
    description:
      'Training and mentoring professionals to reach their full potential, creating leaders who can drive innovation and growth.',
  },
];

export default function Vision() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section ref={ref} className="section-padding bg-white" id="vision">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Column - Main Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-accent/10 rounded-full mb-6">
              <Lightbulb className="w-4 h-4 text-accent" />
              <span className="text-sm font-medium text-accent uppercase tracking-wider">
                Leadership Philosophy
              </span>
            </div>

            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary-900 mb-6">
              Vision & <span className="text-gradient">Strategic Approach</span>
            </h2>

            <div className="prose prose-lg text-gray-600 space-y-4">
              <p>
                As a leader with over 17 years of experience across multiple industries, 
                my approach centers on building organizations that deliver exceptional value 
                while fostering innovation and growth.
              </p>
              <p>
                I believe that true success comes from empowering teams, nurturing talent, 
                and creating business ecosystems that benefit all stakeholders—from clients 
                and partners to employees and communities.
              </p>
            </div>

            {/* Quote */}
            <blockquote className="mt-8 pl-6 border-l-4 border-accent">
              <p className="text-xl md:text-2xl font-medium text-primary-900 italic">
                &ldquo;Success is not just about building companies, it&rsquo;s about building people 
                who can build companies.&rdquo;
              </p>
              <cite className="mt-4 block text-gray-600 not-italic">
                Sonal Shah
              </cite>
            </blockquote>
          </motion.div>

          {/* Right Column - Philosophy Points */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid sm:grid-cols-2 gap-6"
          >
            {philosophyPoints.map((point, index) => (
              <motion.div
                key={point.title}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                className="group p-6 bg-gray-50 rounded-2xl hover:bg-primary-900 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-primary-900/10 group-hover:bg-white/20 flex items-center justify-center mb-4 transition-colors">
                  <point.icon className="w-6 h-6 text-primary-900 group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-lg font-bold text-primary-900 group-hover:text-white mb-2 transition-colors">
                  {point.title}
                </h3>
                <p className="text-gray-600 group-hover:text-white/80 text-sm leading-relaxed transition-colors">
                  {point.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
