'use client';

import { motion } from 'framer-motion';

export default function Highlights() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5, ease: [0.4, 0, 0.2, 1] }
    }
  };

  const highlights = [
    {
      icon: (
        <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" width="24" height="24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
      title: 'NATO AQAP Certified',
      description: 'Military-grade compliance trusted by defense forces globally',
    },
    {
      icon: (
        <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" width="24" height="24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      title: 'Rapid Deployment',
      description: 'Operational within hours at any global location',
    },
    {
      icon: (
        <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" width="24" height="24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      ),
      title: 'Operational Intelligence',
      description: 'Real-time threat analytics and predictive detection',
    },
  ];

  return (
    <section className="section bg-charcoal">
      <div className="container mx-auto px-6 max-w-7xl">
        <motion.ul 
          className="grid grid-cols-1 md:grid-cols-3 gap-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          role="list"
        >
          {highlights.map((item, index) => (
            <motion.li
              key={index}
              className="text-center"
              variants={itemVariants}
            >
              {/* Icon */}
              <div className="mb-6 flex justify-center">
                <div className="icon w-16 h-16 bg-gradient-to-br from-brand-orange/20 to-brand-orange/5 rounded-full flex items-center justify-center text-brand-orange" aria-hidden="true">
                  {item.icon}
                </div>
              </div>

              {/* Title */}
              <h3 className="font-montserrat font-semibold text-2xl text-white mb-3">
                {item.title}
              </h3>

              {/* Description */}
              <p className="font-inter text-base text-whitesoft/80 leading-relaxed">
                {item.description}
              </p>
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </section>
  );
}
