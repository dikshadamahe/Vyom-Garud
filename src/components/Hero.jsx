// src/components/Hero.jsx
'use client';
import { motion, useScroll, useTransform } from 'framer-motion';
import MagneticButton from './MagneticButton';
import Image from 'next/image';

export default function Hero() {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 150]);
  const y2 = useTransform(scrollY, [0, 500], [0, -150]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  // Framer Motion variants for staggered animation
  const containerStagger = {
    animate: { transition: { staggerChildren: 0.1, delayChildren: 0.2 } }
  };
  const fadeUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } }
  };

  return (
    <section 
      id="hero" 
      className="relative flex items-center justify-center h-screen min-h-[700px] w-full overflow-hidden"
    >
      {/* Video Background - Full Screen */}
      <div className="absolute inset-0 z-0 w-full h-full">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute top-0 left-0 w-full h-full object-cover"
          style={{ objectFit: 'cover' }}
        >
          <source src="/videos/video1_hero_drone.mp4" type="video/mp4" />
        </video>
        
        {/* Dark Overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-charcoal/90 via-charcoal/70 to-charcoal z-10" />
        <div className="absolute inset-0 bg-gradient-to-r from-charcoal/80 via-transparent to-charcoal/80 z-10" />
      </div>

      {/* Animated Grid Overlay */}
      <motion.div 
        className="absolute inset-0 z-[15] opacity-10 pointer-events-none"
        style={{ 
          backgroundImage: `linear-gradient(#ff7b00 1px, transparent 1px), linear-gradient(90deg, #ff7b00 1px, transparent 1px)`,
          backgroundSize: '50px 50px',
        }}
        animate={{
          backgroundPosition: ['0px 0px', '50px 50px'],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: 'linear',
        }}
      />

      {/* Multiple Orange Accent Glows */}
      <motion.div 
        className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-brand-orange/30 rounded-full blur-[120px] z-[15] pointer-events-none"
        style={{ y: y1 }}
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />
      <motion.div 
        className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-blue-500/20 rounded-full blur-[100px] z-[15] pointer-events-none"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: 1,
        }}
      />

      {/* Content */}
            <motion.div
        className="relative z-20 container-custom text-center"
              initial="initial"
              animate="animate"
        variants={containerStagger}
        style={{ y: y2, opacity }}
      >
        {/* PDF Req: Company Name 'VyomGarud' */}
        <motion.p className="kicker mb-6" variants={fadeUp}>
          VyomGarud Defense Systems
        </motion.p>
        
        {/* Decorative Line */}
        <motion.div 
          className="w-24 h-1 bg-brand-orange mx-auto mb-8"
              variants={fadeUp}
        />
        
        {/* PDF Req: Tagline */}
        <motion.h1 className="headline-hero mb-8" variants={fadeUp}>
          PRECISION <br />
          <span className="bg-gradient-to-r from-orange-500 via-red-500 to-orange-600 bg-clip-text text-transparent">
            AUTONOMY
          </span>
        </motion.h1>
        <motion.p className="body-text max-w-2xl mx-auto mb-10" variants={fadeUp}>
          Military-grade counter-UAV solutions for mission-critical operations.
          Engineering the future of airspace security.
        </motion.p>
        
        {/* PDF Req: CTA (Call to Action) */}
        <motion.div className="flex flex-col sm:flex-row gap-4 justify-center mb-16" variants={fadeUp}>
          <MagneticButton href="#contact" className="btn-primary group">
            Request Demo
            <motion.svg 
              className="w-5 h-5 ml-2" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
              animate={{ x: [0, 3, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </motion.svg>
          </MagneticButton>
          <MagneticButton href="#capabilities" className="btn-secondary">
            Explore Capabilities
          </MagneticButton>
            </motion.div>

        {/* Scroll Indicator */}
            <motion.div
          className="absolute bottom-12 left-1/2 -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          variants={fadeUp}
        >
          <div className="w-6 h-10 border-2 border-whitesoft/30 rounded-full flex items-start justify-center p-2">
            <motion.div 
              className="w-1.5 h-1.5 bg-brand-orange rounded-full"
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
