'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import Image from 'next/image';

export default function Hero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  });

  const y = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);
  const yFast = useTransform(scrollYProgress, [0, 1], ['0%', '80%']);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.4, 0, 0.2, 1],
      },
    },
  };

  return (
    <section
      ref={ref}
      id="hero"
      className="relative min-h-screen flex items-center justify-center bg-charcoal overflow-hidden pt-20"
    >
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 overflow-hidden">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 w-full h-full object-cover opacity-40 animate-ultra-slow-zoom"
            poster="/images/drone1.jpg"
          >
            <source src="/videos/video1_hero_drone.mp4.mp4" type="video/mp4" />
            {/* Fallback image */}
            <Image
              src="/images/drone1.jpg"
              alt="Hero background"
              fill
              className="object-cover"
              priority
            />
          </video>
        </div>
        <div className="absolute inset-0 bg-gradient-to-br from-charcoal/95 via-charcoal/85 to-steel-900/90"></div>
      </div>

      {/* Tactical Grid Overlay */}
      <div className="absolute inset-0 z-[1] bg-[linear-gradient(rgba(47,47,47,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(47,47,47,0.05)_1px,transparent_1px)] bg-[size:80px_80px]"></div>
      
      {/* Animated HUD Rings */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 80, repeat: Infinity, ease: 'linear' }}
        className="absolute top-1/4 right-1/4 w-[700px] h-[700px] border border-line-gray/10 rounded-full z-[1]"
      />
      <motion.div
        animate={{ rotate: -360 }}
        transition={{ duration: 100, repeat: Infinity, ease: 'linear' }}
        className="absolute top-1/3 right-1/3 w-[550px] h-[550px] border border-brand-orange/15 rounded-full z-[1]"
      />
      
      {/* Radar Sweep Animation */}
      <div className="absolute top-1/4 right-1/4 w-[700px] h-[700px] z-[1] overflow-hidden rounded-full">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
          className="absolute inset-0"
          style={{ transformOrigin: '50% 50%' }}
        >
          <div
            className="absolute top-1/2 left-1/2 w-full h-[2px] origin-left"
            style={{
              background: 'linear-gradient(90deg, rgba(255,123,0,0.6) 0%, rgba(255,123,0,0) 100%)',
              transform: 'translate(-50%, -50%)',
              boxShadow: '0 0 20px rgba(255,123,0,0.4)',
            }}
          />
        </motion.div>
      </div>
      
      {/* Blue Blob HUD Overlay */}
      <div className="absolute inset-0 z-[1] opacity-10">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover mix-blend-screen"
        >
          <source src="/videos/video4_blue_blob.mp4" type="video/mp4" />
        </video>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <motion.div
            style={{ y, opacity }}
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {/* Small Badge */}
            <motion.div
              variants={itemVariants}
              className="inline-flex items-center gap-2 px-4 py-2 bg-brand-orange/10 border border-brand-orange/30 rounded-full mb-6"
            >
              <motion.div 
                animate={{ scale: [1, 1.2, 1], opacity: [1, 0.7, 1] }}
                transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
                className="w-2 h-2 bg-brand-orange rounded-full"
              />
              <span className="font-inter text-sm text-brand-orange font-medium">Military-Grade Defense</span>
            </motion.div>

            <motion.h1
              variants={itemVariants}
              className="font-montserrat font-bold text-5xl md:text-6xl lg:text-7xl text-white leading-tight mb-6"
            >
              Defend Your<br />
              <span className="text-brand-orange">Airspace</span>
            </motion.h1>
            
            <motion.p
              variants={itemVariants}
              className="font-inter text-lg md:text-xl text-gray500 mb-10 leading-relaxed max-w-xl"
            >
              Military-grade UAV detection and neutralization systems. 
              Trusted by defense forces and critical infrastructure worldwide.
            </motion.p>

            {/* CTAs */}
            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-4"
            >
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="group px-8 py-4 bg-brand-orange text-white font-inter font-semibold text-base rounded hover:bg-brand-orange/90 hover:shadow-glow-orange transition-all duration-300 text-center relative overflow-hidden"
              >
                <span className="relative z-10">Request Demo</span>
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
              </motion.a>
              <motion.a
                href="#capabilities"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 border-2 border-brand-orange text-brand-orange font-inter font-semibold text-base rounded hover:bg-brand-orange/10 transition-all duration-300 text-center"
              >
                View Capabilities
              </motion.a>
            </motion.div>

            {/* Stats Bar */}
            <motion.div
              variants={itemVariants}
              className="grid grid-cols-3 gap-6 mt-12 pt-8 border-t border-line-gray"
            >
              {[
                { value: '5km', label: 'Detection Range' },
                { value: '99.8%', label: 'Accuracy' },
                { value: '24/7', label: 'Active Defense' },
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.05, y: -2 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="font-montserrat font-bold text-2xl text-brand-orange mb-1">{stat.value}</div>
                  <div className="font-inter text-xs text-gray500">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Side - Drone Visual with Parallax */}
          <motion.div
            className="relative"
            style={{ y: yFast, scale }}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.4, ease: [0.4, 0, 0.2, 1] }}
          >
            <div className="relative w-full aspect-square max-w-lg mx-auto">
              {/* Drone Image */}
              <div className="absolute inset-0 rounded-lg overflow-hidden">
                <Image
                  src="/images/drone1.jpg"
                  alt="VyomGarud Defense Drone"
                  fill
                  className="object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-brand-orange/20 via-transparent to-transparent"></div>
              </div>

              {/* Corner Accents with Animation */}
              {[
                { position: 'top-0 left-0', borders: 'border-t-2 border-l-2', delay: 1.2 },
                { position: 'top-0 right-0', borders: 'border-t-2 border-r-2', delay: 1.3 },
                { position: 'bottom-0 left-0', borders: 'border-b-2 border-l-2', delay: 1.4 },
                { position: 'bottom-0 right-0', borders: 'border-b-2 border-r-2', delay: 1.5 },
              ].map((corner, index) => (
                <motion.div
                  key={index}
                  className={`absolute ${corner.position} w-16 h-16 ${corner.borders} border-brand-orange`}
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ 
                    duration: 0.6, 
                    delay: corner.delay,
                    ease: [0.4, 0, 0.2, 1]
                  }}
                  whileHover={{ scale: 1.1 }}
                />
              ))}

              {/* Pulsing Scan Lines */}
              <motion.div
                animate={{ y: ['0%', '100%'] }}
                transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
                className="absolute left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-brand-orange to-transparent opacity-50"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
