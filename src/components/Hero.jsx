'use client';

import { m as motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';
import { useRef } from 'react';

export default function Hero() {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end start']
  });

  const prefersReducedMotion = typeof window !== 'undefined' 
    ? window.matchMedia('(prefers-reduced-motion: reduce)').matches 
    : false;

  const y = useTransform(scrollYProgress, [0, 1], prefersReducedMotion ? [0, 0] : [0, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [1, 0.8, 0]);

  const fadeUp = {
    initial: prefersReducedMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
  };

  const fadeUpDelay = {
    initial: prefersReducedMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }
  };

  return (
    <section id="hero" className="hero-cinematic section" ref={sectionRef}>
      {/* Tactical Grid Overlay */}
      <div className="tactical-grid" aria-hidden="true"></div>

      {/* Background Video - Desktop */}
      <video 
        className="hero-bg-media hidden md:block"
        autoPlay 
        muted 
        loop 
        playsInline
        preload="metadata"
        poster="/images/drone1.jpg"
        aria-hidden="true"
        tabIndex={-1}
      >
        <source src="/videos/video1_hero_drone.mp4" type="video/mp4" />
      </video>

      {/* Background Image - Mobile */}
      <div className="md:hidden absolute inset-0 z-[1]">
        <Image
          src="/images/drone1.jpg"
          alt=""
          fill
          sizes="100vw"
          className="object-cover"
          priority
          aria-hidden="true"
        />
      </div>

      {/* Gradient Overlay */}
      <div className="hero-overlay"></div>

      {/* HUD Ring Decoration - with parallax */}
      <motion.div 
        className="hud-ring hidden lg:block" 
        style={{ 
          top: '15%', 
          right: '10%', 
          zIndex: 4,
          y: useTransform(scrollYProgress, [0, 1], prefersReducedMotion ? [0, 0] : [0, -50])
        }} 
        aria-hidden="true"
      ></motion.div>

      {/* Watermark Logo */}
      <div className="watermark-logo hidden xl:block" aria-hidden="true">
        <Image 
          src="/images/vyomgarud_logo.jpg" 
          alt="" 
          width={220} 
          height={220}
          sizes="220px"
          className="select-none"
        />
      </div>

      {/* Gradient Bottom Fade */}
      <div className="gradient-fade-bottom"></div>

      {/* Hero Content - with parallax */}
      <motion.div className="hero-content" style={{ y, opacity }}>
        <div className="container-custom">
          <div className="max-w-4xl">
            <motion.div
              initial="initial"
              animate="animate"
              variants={fadeUp}
            >
              {/* Accent Line */}
              <div className="accent-line"></div>

              {/* Headline */}
              <h1 className="text-5xl md:text-7xl font-montserrat font-700 text-whitesoft mb-6 leading-tight">
                Defend Your<br />
                <span className="text-brand-orange">Airspace</span>
              </h1>

              {/* Subheadline */}
              <p className="text-lg md:text-xl font-inter text-whitesoft/85 mb-10 max-w-2xl">
                Military-grade counter-UAV defense systems for critical infrastructure. 
                Trusted by defense forces and enterprise facilities worldwide.
              </p>
            </motion.div>

            <motion.div
              className="flex flex-col sm:flex-row gap-5"
              initial="initial"
              animate="animate"
              variants={fadeUpDelay}
            >
              <a
                href="#contact"
                className="inline-flex items-center justify-center px-10 py-5 bg-brand-orange text-white font-inter font-semibold text-base rounded-xl hover:bg-brand-orange/90 hover:shadow-2xl hover:shadow-brand-orange/30 transition-all duration-300 hover:scale-105"
              >
                Request Demo
                <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </a>
              <a
                href="#capabilities"
                className="inline-flex items-center justify-center px-10 py-5 bg-transparent border-2 border-whitesoft/20 text-whitesoft font-inter font-semibold text-base rounded-xl hover:border-whitesoft/40 hover:bg-whitesoft/5 transition-all duration-300"
              >
                Explore Technology
              </a>
            </motion.div>

            {/* KPIs */}
            <motion.div 
              className="grid grid-cols-3 gap-10 mt-20 pt-10 border-t border-whitesoft/10"
              initial="initial"
              animate="animate"
              variants={{
                initial: { opacity: 0 },
                animate: { 
                  opacity: 1,
                  transition: { duration: 0.8, delay: 0.4 }
                }
              }}
            >
              <div>
                <div className="font-montserrat font-700 text-4xl text-brand-orange mb-2">5km+</div>
                <div className="font-inter text-sm text-whitesoft/60 uppercase tracking-wide">Detection Range</div>
              </div>
              <div>
                <div className="font-montserrat font-700 text-4xl text-brand-orange mb-2">99.8%</div>
                <div className="font-inter text-sm text-whitesoft/60 uppercase tracking-wide">Accuracy</div>
              </div>
              <div>
                <div className="font-montserrat font-700 text-4xl text-brand-orange mb-2">24/7</div>
                <div className="font-inter text-sm text-whitesoft/60 uppercase tracking-wide">Active Defense</div>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
