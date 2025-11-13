'use client';

import { m as motion } from 'framer-motion';
import CapabilityFeature from './CapabilityFeature';

export default function CapabilitiesGrid() {
  const capabilities = [
    {
      title: 'RF Detection',
      description: 'Advanced radio frequency detection identifies unauthorized drone signals across multiple frequency bands with military-grade precision.',
      image: '/images/drone1.jpg',
      stat: 'Multi-Band',
    },
    {
      title: 'Smart Countermeasures',
      description: 'Intelligent jamming and disruption protocols neutralize threats without collateral interference to authorized communications.',
      image: '/images/drone2.jpg',
      stat: 'Targeted Neutralization',
    },
    {
      title: 'AI-Driven Classification',
      description: 'Real-time automated threat assessment and classification protocols engage within milliseconds of detection, filtering friend from foe.',
      image: '/images/drone1.jpg',
      stat: 'Millisecond Response',
    },
    {
      title: 'Command Integration',
      description: 'Seamless integration with existing command and control systems (C2) for unified operational awareness and coordination.',
      image: '/images/drone2.jpg',
      stat: 'C2 Integrated',
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
    <section id="capabilities" className="section section-spacing bg-charcoal relative overflow-hidden">
      {/* Background Grid Decoration */}
      <div className="absolute inset-0 z-0 opacity-5" style={{
        backgroundImage: 'linear-gradient(rgba(255, 255, 255, 0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.05) 1px, transparent 1px)',
        backgroundSize: '50px 50px',
      }}></div>

      <div className="container-custom relative z-10">
        <motion.div className="text-left max-w-3xl mb-16 md:mb-24" {...fadeIn}>
          <div className="accent-line"></div>
          <h2 className="headline-section text-whitesoft mb-6">
            Advanced <span className="text-brand-orange">Capabilities</span>
          </h2>
          <p className="body-large text-whitesoft/75">
            Military-grade technology engineered for comprehensive airspace protection and threat neutralization.
          </p>
        </motion.div>

        {/* This is the new layout */}
        <div className="flex flex-col gap-24 md:gap-32">
          {capabilities.map((capability, index) => (
            <CapabilityFeature 
              key={index}
              index={index}
              {...capability}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
