'use client';

import { motion } from 'framer-motion';

export default function Highlights() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.25,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: [0.4, 0, 0.2, 1],
      },
    },
  };
  const highlights = [
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
      title: 'NATO Certified',
      description: 'AQAP-compliant systems trusted by defense forces globally',
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      title: 'Instant Response',
      description: 'Sub-second threat detection and autonomous countermeasures',
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
        </svg>
      ),
      title: 'Global Deployment',
      description: 'Protecting critical sites across 12+ countries worldwide',
    },
  ];

  return (
    <section className="relative bg-charcoal py-[120px] overflow-hidden">
      {/* Mech Hand Video Background */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover opacity-5"
        >
          <source src="/videos/video3_mech_hand.mp4" type="video/mp4" />
        </video>
      </div>

      {/* Connecting Line Animation */}
      <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-brand-orange/20 to-transparent transform -translate-x-1/2 z-[1] hidden md:block"></div>

      <motion.div 
        className="relative z-10 max-w-7xl mx-auto px-8 lg:px-12"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-16">
          {highlights.map((item, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ scale: 1.05, y: -8 }}
              className="relative group"
            >
              {/* Animated Dot on Line */}
              <motion.div
                initial={{ scale: 0, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.2 + 0.3 }}
                className="absolute -top-6 left-1/2 transform -translate-x-1/2 w-3 h-3 bg-brand-orange rounded-full shadow-glow-orange z-10 hidden md:block"
              />

              {/* HUD-Style Circular Icon Container */}
              <motion.div
                className="mb-6 relative"
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ duration: 0.3 }}
              >
                <div className="relative w-20 h-20 mx-auto">
                  {/* Rotating Ring */}
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 10, repeat: Infinity, ease: 'linear' }}
                    className="absolute inset-0 border-2 border-dashed border-brand-orange/30 rounded-full"
                  />
                  {/* Icon Container */}
                  <div className="absolute inset-2 bg-gradient-to-br from-brand-orange/20 to-brand-orange/5 rounded-full flex items-center justify-center text-brand-orange group-hover:from-brand-orange/30 group-hover:to-brand-orange/10 group-hover:shadow-glow-orange transition-all duration-300">
                    {item.icon}
                  </div>
                  {/* Pulse Effect */}
                  <motion.div
                    animate={{ scale: [1, 1.3, 1], opacity: [0.5, 0, 0.5] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="absolute inset-0 border-2 border-brand-orange rounded-full"
                  />
                </div>
              </motion.div>

              {/* Title */}
              <h3 className="font-montserrat font-semibold text-xl text-white leading-[1.2] tracking-tight mb-4 text-center group-hover:text-brand-orange transition-colors duration-300">
                {item.title}
              </h3>

              {/* Animated Line Accent */}
              <motion.div
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 + 0.4 }}
                className="w-16 h-[2px] bg-gradient-to-r from-transparent via-brand-orange to-transparent mb-4 mx-auto origin-center"
              />

              {/* Description */}
              <p className="font-inter text-base text-gray500 leading-relaxed text-center">
                {item.description}
              </p>

              {/* Corner Brackets */}
              <div className="absolute top-0 left-0 w-8 h-8 border-t border-l border-line-gray opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="absolute top-0 right-0 w-8 h-8 border-t border-r border-line-gray opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="absolute bottom-0 left-0 w-8 h-8 border-b border-l border-line-gray opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="absolute bottom-0 right-0 w-8 h-8 border-b border-r border-line-gray opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
