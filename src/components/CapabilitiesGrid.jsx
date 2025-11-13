'use client';

import { m as motion } from 'framer-motion';
import CapabilityCard from './CapabilityCard';

export default function CapabilitiesGrid() {
  const capabilities = [
    {
      title: 'RF Detection',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" width="24" height="24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9.348 14.651a3.75 3.75 0 010-5.303m5.304 0a3.75 3.75 0 010 5.303m-7.425 2.122a6.75 6.75 0 010-9.546m9.546 0a6.75 6.75 0 010 9.546M5.106 18.894c-3.808-3.808-3.808-9.98 0-13.789m13.788 0c3.808 3.808 3.808 9.98 0 13.789" />
        </svg>
      ),
      description: 'Advanced radio frequency detection identifies unauthorized drone signals across multiple frequency bands with military-grade precision.',
      image: '/images/drone1.jpg',
    },
    {
      title: 'Smart Countermeasures',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" width="24" height="24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
        </svg>
      ),
      description: 'Intelligent jamming and disruption protocols neutralize threats without collateral interference to authorized communications.',
      image: '/images/drone2.jpg',
    },
    {
      title: 'Threat Response',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" width="24" height="24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" />
        </svg>
      ),
      description: 'Real-time automated threat assessment and response protocols engage within milliseconds of detection.',
      image: '/images/drone1.jpg',
    },
    {
      title: 'Command Integration',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" width="24" height="24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M14.25 9.75L16.5 12l-2.25 2.25m-4.5 0L7.5 12l2.25-2.25M6 20.25h12A2.25 2.25 0 0020.25 18V6A2.25 2.25 0 0018 3.75H6A2.25 2.25 0 003.75 6v12A2.25 2.25 0 006 20.25z" />
        </svg>
      ),
      description: 'Seamless integration with existing command and control systems for unified operational awareness and coordination.',
      image: '/images/drone2.jpg',
    },
  ];

  const prefersReducedMotion = typeof window !== 'undefined' 
    ? window.matchMedia('(prefers-reduced-motion: reduce)').matches 
    : false;

  const fadeIn = {
    initial: prefersReducedMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
    viewport: { once: true, margin: '-100px' }
  };

  return (
    <section id="capabilities" className="section section-spacing bg-charcoal relative">
      <div className="container-custom">
        <motion.div className="text-center max-w-3xl mx-auto mb-20" {...fadeIn}>
          <div className="accent-line mx-auto"></div>
          <h2 className="headline-section text-whitesoft mb-6">
            Advanced <span className="text-brand-orange">Capabilities</span>
          </h2>
          <p className="body-large text-whitesoft/75">
            Military-grade technology engineered for comprehensive airspace protection and threat neutralization.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {capabilities.map((capability, index) => (
            <CapabilityCard
              key={index}
              title={capability.title}
              icon={capability.icon}
              description={capability.description}
              image={capability.image}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
