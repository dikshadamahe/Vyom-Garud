'use client';

import { motion } from 'framer-motion';

export default function CapabilityCard({ icon, title, description, delay = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay, ease: [0.4, 0, 0.2, 1] }}
      whileHover={{ scale: 1.03, y: -8 }}
      className="relative group bg-steel-900 border border-line-gray rounded-lg p-8 hover:border-brand-orange/50 transition-all duration-500 hover:shadow-glow-orange"
    >
      {/* Animated Corner Strokes */}
      <svg className="absolute top-0 left-0 w-full h-full pointer-events-none" style={{ strokeDasharray: 1000, strokeDashoffset: 1000 }}>
        <motion.rect
          x="0"
          y="0"
          width="100%"
          height="100%"
          rx="8"
          fill="none"
          stroke="url(#corner-gradient)"
          strokeWidth="2"
          initial={{ strokeDashoffset: 1000 }}
          whileInView={{ strokeDashoffset: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 2, delay: delay + 0.3, ease: 'linear' }}
        />
        <defs>
          <linearGradient id="corner-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="rgba(255,123,0,0)" />
            <stop offset="50%" stopColor="rgba(255,123,0,0.5)" />
            <stop offset="100%" stopColor="rgba(255,123,0,0)" />
          </linearGradient>
        </defs>
      </svg>

      {/* Top Corner Accent */}
      <div className="absolute top-0 right-0 w-20 h-20 overflow-hidden">
        <motion.div
          className="absolute top-0 right-0 w-full h-full border-t-2 border-r-2 border-brand-orange/0 group-hover:border-brand-orange transition-all duration-500 origin-top-right"
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: delay + 0.2 }}
        />
      </div>

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
      <h3 className="font-montserrat font-semibold text-2xl text-white mb-4 group-hover:text-brand-orange transition-colors duration-300">
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
