'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export default function Hero() {
  const fadeUpVariant = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, ease: [0.4, 0, 0.2, 1] }
  };

  return (
    <section id="main-content" className="hero-section relative flex min-h-screen items-center pt-32 pb-24">
      {/* Background Video - Desktop */}
      <video 
        className="bg-video absolute inset-0 object-cover w-full h-full z-0 hidden md:block"
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

      {/* Background Image - Mobile (SSR-safe) */}
      <div className="md:hidden absolute inset-0 w-full h-full z-0">
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

      {/* Dark Gradient Overlay */}
      <div className="overlay-dark absolute inset-0 bg-black/64 z-10" aria-hidden="true"></div>

      {/* Watermark Logo (top-right) */}
      <div className="absolute right-8 top-24 opacity-[0.06] pointer-events-none hidden lg:block z-10" aria-hidden="true">
        <Image 
          src="/images/vyomgarud_logo.jpg" 
          alt="" 
          width={180} 
          height={180}
          sizes="180px"
          className="select-none"
        />
      </div>

      {/* Main Content */}
      <div className="content-front relative z-20 w-full">
        <div className="container mx-auto px-6">
          <motion.div 
            className="max-w-4xl"
            initial="initial"
            animate="animate"
            variants={fadeUpVariant}
          >
            {/* Eyebrow Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-brand-orange/10 border border-brand-orange/30 rounded-full mb-6">
              <div className="w-2 h-2 bg-brand-orange rounded-full animate-pulse"></div>
              <span className="font-inter text-sm text-brand-orange font-medium uppercase tracking-wide">
                Military-Grade Defense
              </span>
            </div>

            {/* Headline */}
            <h1 className="font-montserrat font-bold text-5xl sm:text-6xl lg:text-7xl text-white leading-[1.05] tracking-tight uppercase mb-6">
              Defend Your<br />
              <span className="text-brand-orange">Airspace</span>
            </h1>

            {/* Subheading */}
            <p className="font-inter text-lg sm:text-xl text-whitesoft/90 mb-10 leading-relaxed max-w-2xl">
              Military-grade UAV detection and neutralization systems. 
              Trusted by defense forces and critical infrastructure worldwide.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 mb-16">
              <a
                href="#contact"
                className="inline-flex items-center justify-center px-8 py-4 bg-brand-orange text-white font-inter font-semibold text-base rounded transition-all duration-300 hover:bg-brand-orange/90 focus:outline-none focus:ring-2 focus:ring-brand-orange focus:ring-offset-2 focus:ring-offset-charcoal"
              >
                Request Demo
              </a>
              <a
                href="#capabilities"
                className="inline-flex items-center justify-center px-8 py-4 border-2 border-whitesoft/40 text-white font-inter font-semibold text-base rounded transition-all duration-300 hover:bg-whitesoft/5 hover:border-whitesoft/60 focus:outline-none focus:ring-2 focus:ring-whitesoft focus:ring-offset-2 focus:ring-offset-charcoal"
              >
                View Capabilities
              </a>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-3 gap-8 pt-8 border-t border-line-gray">
              <div>
                <div className="font-montserrat font-bold text-3xl text-brand-orange mb-1">5km</div>
                <div className="font-inter text-sm text-whitesoft/70">Detection Range</div>
              </div>
              <div>
                <div className="font-montserrat font-bold text-3xl text-brand-orange mb-1">99.8%</div>
                <div className="font-inter text-sm text-whitesoft/70">Accuracy</div>
              </div>
              <div>
                <div className="font-montserrat font-bold text-3xl text-brand-orange mb-1">24/7</div>
                <div className="font-inter text-sm text-whitesoft/70">Active Defense</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
