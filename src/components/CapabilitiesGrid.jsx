'use client';

import CapabilityCard from './CapabilityCard';
import { motion } from 'framer-motion';

export default function CapabilitiesGrid() {
  const headerVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.4, 0, 0.2, 1],
      },
    },
  };
  const capabilities = [
    {
      icon: '🎯',
      title: 'RF Detection',
      description: 'Advanced radio frequency scanning detects unauthorized drones within 5km radius. Real-time threat classification and tracking with military-grade precision.',
    },
    {
      icon: '⚡',
      title: 'Active Jamming',
      description: 'Targeted signal disruption neutralizes hostile UAVs without collateral interference. Multi-band jamming technology for maximum effectiveness.',
    },
    {
      icon: '🛡️',
      title: 'Autonomous Defense',
      description: 'AI-powered threat assessment and response protocols. Automated countermeasures deploy instantly upon confirmed hostile detection.',
    },
    {
      icon: '📡',
      title: 'Network Integration',
      description: 'Seamless integration with existing security infrastructure. Centralized command and control for multi-site deployment scenarios.',
    },
  ];

  return (
    <section
      id="capabilities"
      className="relative bg-charcoal py-[120px] overflow-hidden"
    >
      {/* Background Video */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover opacity-5"
        >
          <source src="/videos/video2_rolling_elements.mp4" type="video/mp4" />
        </video>
      </div>

      {/* Tactical Grid Pattern */}
      <div className="absolute inset-0 tactical-grid z-[1]"></div>

      {/* Animated Scanning Line */}
      <motion.div
        animate={{ x: ['-100%', '200%'] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
        className="absolute top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-brand-orange/30 to-transparent z-[2]"
      />

      <div className="relative z-10 max-w-7xl mx-auto px-8 lg:px-12">
        {/* Section Header */}
        <motion.div 
          className="text-center mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          <motion.div
            variants={headerVariants}
            className="inline-flex items-center gap-2 px-4 py-2 bg-brand-orange/10 border border-brand-orange/30 rounded-full mb-6"
          >
            <span className="font-inter text-sm text-brand-orange font-medium">Our Capabilities</span>
          </motion.div>
          
          <motion.h2
            variants={headerVariants}
            transition={{ delay: 0.1 }}
            className="font-montserrat font-bold text-4xl md:text-5xl text-white leading-[1.1] tracking-tight mb-8"
          >
            Enterprise-Grade<br />Defense Systems
          </motion.h2>
          <motion.p
            variants={headerVariants}
            transition={{ delay: 0.2 }}
            className="font-inter text-lg text-gray500 max-w-2xl mx-auto"
          >
            Advanced UAV defense engineered for critical infrastructure protection
          </motion.p>
        </motion.div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {capabilities.map((capability, index) => (
            <CapabilityCard
              key={index}
              icon={capability.icon}
              title={capability.title}
              description={capability.description}
              delay={index * 0.1}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
