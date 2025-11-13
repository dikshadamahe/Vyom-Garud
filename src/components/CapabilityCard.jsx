'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';

export default function CapabilityCard({ icon, title, description, delay = 0 }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.7, delay, ease: [0.4, 0, 0.2, 1] }}
      whileHover={{ scale: 1.03, y: -12 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      className="relative group bg-steel-900 border border-line-gray rounded-lg p-8 hover:border-brand-orange/50 transition-all duration-500 hover:shadow-glow-orange backdrop-blur-sm"
    >
      {/* Animated Corner Strokes - Four Corners */}
      {[
        { corner: 'top-0 left-0', borders: 'border-t-2 border-l-2', origin: 'top-left' },
        { corner: 'top-0 right-0', borders: 'border-t-2 border-r-2', origin: 'top-right' },
        { corner: 'bottom-0 left-0', borders: 'border-b-2 border-l-2', origin: 'bottom-left' },
        { corner: 'bottom-0 right-0', borders: 'border-b-2 border-r-2', origin: 'bottom-right' },
      ].map((item, index) => (
        <div key={index} className={`absolute ${item.corner} w-12 h-12 overflow-hidden`}>
          <motion.div
            className={`absolute ${item.corner} w-full h-full ${item.borders} border-brand-orange/0 transition-colors duration-500`}
            initial={{ scale: 0, opacity: 0 }}
            animate={isHovered ? { 
              scale: 1, 
              opacity: 1,
              borderColor: 'rgba(255, 123, 0, 1)' 
            } : { 
              scale: 0, 
              opacity: 0 
            }}
            transition={{ duration: 0.4, delay: index * 0.05 }}
            style={{ transformOrigin: item.origin }}
          />
        </div>
      ))}

      {/* Icon */}
      <motion.div
        className="mb-6"
        whileHover={{ rotate: [0, -10, 10, -10, 0], scale: 1.1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="w-16 h-16 bg-gradient-to-br from-brand-orange/20 to-brand-orange/5 rounded-lg flex items-center justify-center group-hover:from-brand-orange/30 group-hover:to-brand-orange/10 group-hover:shadow-glow-orange transition-all duration-300 relative overflow-hidden">
          <div className="text-brand-orange text-3xl relative z-10">
            {icon}
          </div>
          {/* Shine effect */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent"
            initial={{ x: '-100%' }}
            whileHover={{ x: '100%' }}
            transition={{ duration: 0.6 }}
          />
        </div>
      </motion.div>

      {/* Content */}
      <h3 className="font-montserrat font-semibold text-2xl text-white leading-[1.2] tracking-tight mb-4 group-hover:text-brand-orange transition-colors duration-300">
        {title}
      </h3>
      <p className="font-inter text-base text-gray500 leading-relaxed">
        {description}
      </p>

      {/* Bottom Glow on Hover */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-brand-orange to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

      {/* Hover Glow Effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-brand-orange/0 via-brand-orange/0 to-brand-orange/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-lg pointer-events-none"></div>
    </motion.div>
  );
}
