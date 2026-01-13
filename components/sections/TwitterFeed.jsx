'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';
import Image from 'next/image';
import { Twitter, Heart, Repeat2, ChevronLeft, ChevronRight } from 'lucide-react';

/**
 * Twitter Feed section with auto-scrolling horizontal carousel
 */

// Static tweets data - preserved from original Django site
const staticTweets = [
  {
    id: 1,
    author: 'Evol Network',
    handle: '@evolnetwork',
    date: '26 Feb',
    image: '/images/s1.PNG',
    text: 'If you are a member of the Migrate Zone We now accept EVOL Coins. Get in touch with us now for Immigration services.',
    likes: 45,
    retweets: 30,
  },
  {
    id: 2,
    author: 'Evol Network',
    handle: '@evolnetwork',
    date: '13 Feb',
    image: '/images/s2.PNG',
    text: 'Participate in #twitter #GIVEAWAY 10K free EVOL! Win EVOL #coins - Follow @evolnetwork and @sagarshah07',
    likes: 81,
    retweets: 60,
  },
  {
    id: 3,
    author: 'Evol Network',
    handle: '@evolnetwork',
    date: '13 Feb',
    image: '/images/s3.PNG',
    text: 'Want to learn more about our affiliate marketing platform? Then please read our white paper.',
    likes: 85,
    retweets: 67,
  },
  {
    id: 4,
    author: 'Evol Network',
    handle: '@evolnetwork',
    date: '13 Feb',
    image: '/images/s4.png',
    text: 'EVOL Network was created to address the needs of businesses looking to sell more cost-effectively while ensuring security.',
    likes: 89,
    retweets: 53,
  },
  {
    id: 5,
    author: 'Evol Network',
    handle: '@evolnetwork',
    date: '13 Feb',
    image: '/images/s5.PNG',
    text: 'Participate in #twitter #GIVEAWAY 10K free EVOL! Win EVOL #coins - Follow @evolnetwork',
    likes: 63,
    retweets: 43,
  },
];

// Duplicate tweets for infinite scroll effect
const allTweets = [...staticTweets, ...staticTweets];

export default function TwitterFeed() {
  const ref = useRef(null);
  const scrollRef = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [isPaused, setIsPaused] = useState(false);

  // Auto-scroll effect
  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    let animationId;
    let scrollPosition = 0;
    const scrollSpeed = 1; // pixels per frame

    const animate = () => {
      if (!isPaused) {
        scrollPosition += scrollSpeed;
        
        // Reset scroll when reaching halfway (where duplicates start)
        if (scrollPosition >= scrollContainer.scrollWidth / 2) {
          scrollPosition = 0;
        }
        
        scrollContainer.scrollLeft = scrollPosition;
      }
      animationId = requestAnimationFrame(animate);
    };

    animationId = requestAnimationFrame(animate);

    return () => {
      if (animationId) {
        cancelAnimationFrame(animationId);
      }
    };
  }, [isPaused]);

  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -320, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 320, behavior: 'smooth' });
    }
  };

  return (
    <section
      ref={ref}
      className="section-padding bg-gradient-to-br from-primary-900 via-primary-950 to-black text-white overflow-hidden"
      id="twitter"
    >
      <div className="container-custom">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-3 text-3xl md:text-4xl lg:text-5xl font-bold">
            <Twitter className="w-10 h-10 md:w-12 md:h-12 text-[#1DA1F2]" />
            <span>Twitter Feeds</span>
          </div>
        </motion.div>
      </div>

      {/* Carousel Container - Full width */}
      <div className="relative">
        {/* Navigation Arrows */}
        <button
          onClick={scrollLeft}
          className="absolute left-4 top-1/2 -translate-y-1/2 z-10 p-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors backdrop-blur-sm"
          aria-label="Previous tweets"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>

        <button
          onClick={scrollRight}
          className="absolute right-4 top-1/2 -translate-y-1/2 z-10 p-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors backdrop-blur-sm"
          aria-label="Next tweets"
        >
          <ChevronRight className="w-6 h-6" />
        </button>

        {/* Scrolling Container */}
        <div
          ref={scrollRef}
          className="flex gap-6 overflow-x-hidden px-8 py-4 scrollbar-hide"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {allTweets.map((tweet, index) => (
            <motion.div
              key={`${tweet.id}-${index}`}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.4, delay: 0.1 * (index % 5) }}
              className="flex-shrink-0 w-[300px] bg-white rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-shadow duration-300"
            >
              {/* Tweet Image */}
              {tweet.image && (
                <div className="relative h-40 overflow-hidden">
                  <Image
                    src={tweet.image}
                    alt="Tweet media"
                    fill
                    className="object-cover"
                  />
                  {/* Date badge */}
                  <div className="absolute top-3 left-3 bg-accent text-white px-3 py-1.5 rounded-lg font-bold text-center text-sm">
                    <span className="block">{tweet.date.split(' ')[0]}</span>
                    <span className="text-xs uppercase">{tweet.date.split(' ')[1]}</span>
                  </div>
                </div>
              )}

              {/* Tweet Content */}
              <div className="p-5">
                {/* Author */}
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-8 h-8 rounded-full bg-[#1DA1F2] flex items-center justify-center">
                    <Twitter className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900 text-sm">{tweet.author}</p>
                    <p className="text-xs text-[#1DA1F2]">{tweet.handle}</p>
                  </div>
                </div>

                {/* Tweet text */}
                <p className="text-gray-600 text-sm leading-relaxed line-clamp-3 mb-4">
                  {tweet.text}
                </p>

                {/* Engagement stats */}
                <div className="flex items-center gap-4 pt-3 border-t border-gray-100">
                  <span className="flex items-center gap-1.5 text-gray-500 text-sm">
                    <Heart className="w-4 h-4" />
                    {tweet.likes}
                  </span>
                  <span className="flex items-center gap-1.5 text-gray-500 text-sm">
                    <Repeat2 className="w-4 h-4" />
                    {tweet.retweets}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Gradient Overlays for fade effect */}
        <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-primary-900 to-transparent pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-black to-transparent pointer-events-none" />
      </div>

      {/* Pause indicator */}
      <div className="container-custom mt-6">
        <p className="text-center text-white/50 text-sm">
          {isPaused ? 'Paused - move mouse away to continue' : 'Hover to pause'}
        </p>
      </div>
    </section>
  );
}
