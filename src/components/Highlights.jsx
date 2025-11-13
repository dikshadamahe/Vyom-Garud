'use client';

import { motion } from 'framer-motion';

export default function Highlights() {
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
    <section className="relative bg-charcoal py-24 overflow-hidden">
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {highlights.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15, ease: [0.4, 0, 0.2, 1] }}
              className="relative group"
            >
              {/* Icon */}
              <div className="mb-4">
                <div className="w-14 h-14 bg-brand-orange/10 rounded flex items-center justify-center text-brand-orange group-hover:bg-brand-orange/20 transition-all duration-300">
                  {item.icon}
                </div>
              </div>

              {/* Title */}
              <h3 className="font-montserrat font-semibold text-xl text-white mb-2">
                {item.title}
              </h3>

              {/* Line Accent */}
              <div className="w-12 h-[2px] bg-brand-orange mb-4"></div>

              {/* Description */}
              <p className="font-inter text-base text-gray500 leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
