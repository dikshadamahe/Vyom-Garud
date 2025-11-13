'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export default function Hero() {
  const sectionFade = {
    initial: { opacity: 0, y: 12 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5, ease: [0.4, 0, 0.2, 1] }
  };

  const staggerContainer = {
    animate: {
      transition: {
        delayChildren: 0.1,
        staggerChildren: 0.1
      }
    }
  };

  const childFade = {
    initial: { opacity: 0, y: 8 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5, ease: [0.4, 0, 0.2, 1] }
  };

  return (
    <section className="hero-section relative flex min-h-screen items-center pt-32 pb-24">
      {/* Background Video - Desktop */}
      <video 
        className="bg-video hidden md:block"
        autoPlay 
        muted 
        loop 
        playsInline
        preload="metadata"
        poster="/images/drone1.jpg"
        aria-hidden="true"
        tabIndex="-1"
      >
        <source src="/videos/video1_hero_drone.mp4.mp4" type="video/mp4" />
      </video>

      {/* Background Image - Mobile (SSR-safe) */}
      <img 
        src="/images/drone1.jpg" 
        alt=""
        className="bg-video md:hidden"
        aria-hidden="true"
        tabIndex="-1"
      />

      {/* Dark Gradient Overlay */}
      <div className="overlay-dark" aria-hidden="true"></div>

      {/* Optional: Logo Watermark (top-right) */}
      <div className="absolute right-8 top-24 opacity-[0.06] pointer-events-none hidden lg:block z-10" aria-hidden="true">
        <Image 
          src="/images/vyomgarud_logo.jpg" 
          alt="" 
          width={180} 
          height={180}
          className="select-none"
        />
      </div>

      {/* Main Content */}
      <div className="content-front">
        <div className="container">
          <motion.div 
            className="max-w-3xl"
            variants={staggerContainer}
            initial="initial"
            animate="animate"
          >
            {/* Eyebrow Badge */}
            <motion.div 
              className="inline-flex items-center gap-2 px-4 py-2 bg-brand-orange/10 border border-brand-orange/30 rounded-full mb-6"
              variants={childFade}
            >
              <div className="w-2 h-2 bg-brand-orange rounded-full animate-pulse"></div>
              <span className="font-inter text-sm text-brand-orange font-medium uppercase tracking-wide">
                Military-Grade Defense
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1 
              className="font-montserrat font-bold text-5xl sm:text-6xl lg:text-7xl text-white leading-[1.05] tracking-tight uppercase mb-6"
              variants={childFade}
            >
              Defend Your<br />
              <span className="text-brand-orange">Airspace</span>
            </motion.h1>

            {/* Subheading */}
            <motion.p 
              className="font-inter text-lg sm:text-xl text-gray500 mb-10 leading-relaxed max-w-2xl"
              variants={childFade}
            >
              Military-grade UAV detection and neutralization systems. 
              Trusted by defense forces and critical infrastructure worldwide.
            </motion.p>

            {/* CTAs */}
            <motion.div 
              className="flex flex-col sm:flex-row gap-4 mb-16"
              variants={childFade}
            >
              <a
                href="#contact"
                className="inline-flex items-center justify-center px-8 py-4 bg-brand-orange text-white font-inter font-semibold text-base rounded hover:bg-brand-orange/90 transition-all duration-300"
              >
                Request Demo
              </a>
              <a
                href="#capabilities"
                className="inline-flex items-center justify-center px-8 py-4 border-2 border-white/40 text-white font-inter font-semibold text-base rounded hover:bg-white/5 transition-all duration-300"
              >
                View Capabilities
              </a>
            </motion.div>

            {/* Stats Grid */}
            <motion.div 
              className="grid grid-cols-3 gap-8 pt-8 border-t border-line-gray"
              variants={childFade}
            >
              <div>
                <div className="font-montserrat font-bold text-3xl text-brand-orange mb-1">5km</div>
                <div className="font-inter text-sm text-gray500">Detection Range</div>
              </div>
              <div>
                <div className="font-montserrat font-bold text-3xl text-brand-orange mb-1">99.8%</div>
                <div className="font-inter text-sm text-gray500">Accuracy</div>
              </div>
              <div>
                <div className="font-montserrat font-bold text-3xl text-brand-orange mb-1">24/7</div>
                <div className="font-inter text-sm text-gray500">Active Defense</div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
