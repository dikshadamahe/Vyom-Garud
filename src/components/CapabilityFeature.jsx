'use client';

import Image from 'next/image';
import { m as motion } from 'framer-motion';

const prefersReducedMotion = typeof window !== 'undefined' 
  ? window.matchMedia('(prefers-reduced-motion: reduce)').matches 
  : false;

const textVariant = {
  hidden: prefersReducedMotion ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 },
  visible: { 
    opacity: 1, 
    x: 0,
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
  }
};

const imageVariant = {
  hidden: prefersReducedMotion ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 },
  visible: { 
    opacity: 1, 
    x: 0,
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
  }
};

export default function CapabilityFeature({ title, description, image, stat, index }) {
  // This makes the layout alternate
  const isReversed = index % 2 !== 0;

  return (
    <motion.div 
      className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16 items-center"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-150px" }}
      transition={{ staggerChildren: 0.2 }}
    >
      {/* === IMAGE COLUMN === */}
      <motion.div 
        className={`relative w-full aspect-[4/3] rounded-xl overflow-hidden border border-line-gray ${isReversed ? 'lg:order-last' : ''}`}
        variants={isReversed ? textVariant : imageVariant}
      >
        <Image
          src={image}
          alt={title}
          fill
          sizes="(max-width: 1024px) 100vw, 50vw"
          className="object-cover transition-transform duration-500 ease-in-out hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 via-charcoal/30 to-transparent"></div>
        
        {/* HUD Element */}
        <div className="absolute top-4 right-4 p-2 bg-charcoal/50 backdrop-blur-sm border border-whitesoft/10 rounded-lg">
          <svg className="w-6 h-6 text-brand-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h7" />
          </svg>
        </div>
      </motion.div>

      {/* === TEXT COLUMN === */}
      <motion.div 
        className="flex flex-col justify-center"
        variants={isReversed ? imageVariant : textVariant}
      >
        <div className="accent-line mb-6"></div>
        <h3 className="font-montserrat font-700 text-3xl md:text-4xl text-whitesoft mb-5">
          {title}
        </h3>
        <p className="font-inter text-base md:text-lg text-whitesoft/80 leading-relaxed mb-8">
          {description}
        </p>
        
        {/* Stat / Highlight */}
        <div className="pt-6 border-t border-line-gray">
          <p className="font-inter text-sm text-brand-orange uppercase tracking-widest font-semibold">{stat}</p>
        </div>
      </motion.div>
    </motion.div>
  );
}
