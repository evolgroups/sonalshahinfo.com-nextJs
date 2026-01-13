'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Briefcase, Award, Users, TrendingUp } from 'lucide-react';

/**
 * About section - converted from Django about_part
 * Preserves all original content with enhanced professional presentation
 */

const experiences = [
  {
    title: 'Founder at',
    company: 'Evol Network (EVOL Crypto Coin)',
    icon: Award,
  },
  {
    title: 'Director at',
    company: 'TrueValue CRM',
    icon: Briefcase,
  },
  {
    title: 'Business Development Manager at',
    companies: ['Technobits Pvt ltd', 'Marketrill (MKT Crypto Coin)'],
    icon: TrendingUp,
  },
];

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section ref={ref} className="pt-16 md:pt-24 lg:pt-32 pb-8 md:pb-12 bg-white" id="about">
      <div className="container-custom">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16">
          {/* About Text - Left Column */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7"
          >
            {/* Section label */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary-900/5 rounded-full mb-6">
              <Users className="w-4 h-4 text-primary-900" />
              <span className="text-sm font-medium text-primary-900 uppercase tracking-wider">
                About Me
              </span>
            </div>

            {/* Main heading */}
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary-900 mb-6">
              Building Businesses,{' '}
              <span className="text-gradient">Empowering People</span>
            </h2>

            {/* Bio text - paraphrased professional content */}
            <div className="prose prose-lg max-w-none text-gray-600 space-y-4">
              <p>
                Accomplished entrepreneur and executive leader with extensive expertise across the 
                consumer services sector. Proficient in strategic negotiation, comprehensive business 
                strategy development, innovative entrepreneurship, and effective team leadership. 
                A seasoned professional with substantial business growth and development credentials.
              </p>
              <p>
                Beyond building enterprises, I am passionate about developing talent within our 
                industry, helping professionals unlock their full potential and excel in their careers. 
                My vision centers on establishing resilient business frameworks that create lasting 
                value for stakeholders, partners, and communities worldwide.
              </p>
            </div>

            {/* Experience counter - preserved from original */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="mt-10 inline-flex items-center gap-4 p-6 bg-gradient-to-r from-primary-900 to-primary-950 rounded-2xl text-white"
            >
              <span className="text-5xl md:text-6xl font-bold">17</span>
              <div className="text-left">
                <p className="text-lg font-medium">Years of</p>
                <p className="text-2xl font-bold text-accent">Experience</p>
              </div>
            </motion.div>
          </motion.div>

          {/* Experience List - Right Column */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-5"
          >
            <div className="bg-gray-50 rounded-3xl p-8 lg:p-10">
              <h3 className="text-2xl font-bold text-primary-900 mb-8 flex items-center gap-3">
                <Briefcase className="w-6 h-6 text-accent" />
                Professional Experience
              </h3>

              <div className="space-y-6">
                {experiences.map((exp, index) => (
                  <motion.div
                    key={exp.title}
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                    className="group p-5 bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300 border-l-4 border-primary-900 hover:border-accent"
                  >
                    <div className="flex items-start gap-4">
                      <div className="p-2 bg-primary-900/5 rounded-lg group-hover:bg-accent/10 transition-colors">
                        <exp.icon className="w-5 h-5 text-primary-900 group-hover:text-accent transition-colors" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-primary-900 group-hover:text-accent transition-colors">
                          {exp.title}
                        </h4>
                        {exp.company && (
                          <p className="text-gray-600 mt-1">{exp.company}</p>
                        )}
                        {exp.companies && (
                          <div className="text-gray-600 mt-1 space-y-1">
                            {exp.companies.map((company) => (
                              <p key={company}>{company}</p>
                            ))}
                          </div>
                        )}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
