'use client';

import { motion } from 'framer-motion';

export default function CapabilityCard({ icon, title, description, delay = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay, ease: [0.4, 0, 0.2, 1] }}
      whileHover={{ scale: 1.02 }}
      className="relative group bg-steel-900 border border-line-gray rounded-lg p-8 hover:border-brand-orange/50 transition-all duration-300 hover:shadow-card"
    >
      {/* Corner Accent */}
      <div className="absolute top-0 right-0 w-16 h-16 border-t-2 border-r-2 border-brand-orange/0 group-hover:border-brand-orange transition-all duration-500 rounded-tr-lg"></div>

      {/* Icon */}
      <div className="mb-6">
        <div className="w-16 h-16 bg-brand-orange/10 rounded-lg flex items-center justify-center group-hover:bg-brand-orange/20 transition-all duration-300">
          <div className="text-brand-orange text-3xl">
            {icon}
          </div>
        </div>
      </div>

      {/* Content */}
      <h3 className="font-montserrat font-semibold text-2xl text-white mb-4">
        {title}
      </h3>
      <p className="font-inter text-base text-gray500 leading-relaxed">
        {description}
      </p>

      {/* Hover Glow Effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-brand-orange/0 via-brand-orange/0 to-brand-orange/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-lg pointer-events-none"></div>
    </motion.div>
  );
}
