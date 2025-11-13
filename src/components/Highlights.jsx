'use client';

import { m as motion } from 'framer-motion';

export default function Highlights() {
  const highlights = [
    {
      icon: (
        <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" width="24" height="24" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
        </svg>
      ),
      title: 'NATO AQAP Certified',
      description: 'Military-grade compliance trusted by defense forces',
    },
    {
      icon: (
        <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" width="24" height="24" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      title: 'Rapid Deployment',
      description: 'Operational within hours at any global location',
    },
    {
      icon: (
        <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" width="24" height="24" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      ),
      title: 'Operational Intelligence',
      description: 'Real-time threat analytics and predictive detection',
    },
  ];

  const prefersReducedMotion = typeof window !== 'undefined' 
    ? window.matchMedia('(prefers-reduced-motion: reduce)').matches 
    : false;

  return (
    <section id="highlights" className="section section-spacing bg-steel-900 relative">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16">
          {highlights.map((item, index) => (
            <motion.div
              key={index}
              initial={prefersReducedMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.15, ease: [0.16, 1, 0.3, 1] }}
              viewport={{ once: true, margin: '-100px' }}
              className="flex flex-col items-center text-center group"
            >
              <div className="icon-wrapper bg-gradient-to-br from-brand-orange/20 to-brand-orange/5 rounded-2xl mb-6 text-brand-orange group-hover:scale-110 transition-transform duration-300">
                {item.icon}
              </div>
              <h3 className="font-montserrat font-600 text-xl text-whitesoft mb-3">
                {item.title}
              </h3>
              <p className="font-inter text-sm text-whitesoft/70 leading-relaxed max-w-xs">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
