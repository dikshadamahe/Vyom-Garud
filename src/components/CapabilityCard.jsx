'use client';

import { m as motion } from 'framer-motion';
import Image from 'next/image';

export default function CapabilityCard({ title, icon, description, image, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
      viewport={{ once: true, margin: '-80px' }}
      className="premium-card group cursor-pointer h-full flex flex-col"
    >
      {/* Icon */}
      <div className="icon-wrapper bg-brand-orange/10 rounded-xl mb-6 text-brand-orange group-hover:bg-brand-orange group-hover:text-white transition-all duration-300">
        {icon}
      </div>

      {/* Title */}
      <h3 className="font-montserrat font-700 text-xl text-whitesoft mb-4">
        {title}
      </h3>

      {/* Description */}
      <p className="font-inter text-sm leading-relaxed text-whitesoft/70 mb-6 flex-grow">
        {description}
      </p>

      {/* Image with Fixed Aspect Ratio */}
      {image && (
        <div className="relative w-full aspect-[4/3] rounded-xl overflow-hidden mt-auto">
          <Image
            src={image}
            alt=""
            fill
            sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
            className="object-cover"
            aria-hidden="true"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 via-charcoal/40 to-transparent"></div>
          <div className="absolute bottom-0 left-0 right-0 p-4 glass-hud">
            <p className="text-xs text-whitesoft/80 font-inter uppercase tracking-wider">{title}</p>
          </div>
        </div>
      )}
    </motion.div>
  );
}
