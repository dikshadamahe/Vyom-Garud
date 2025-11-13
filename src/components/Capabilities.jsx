// src/components/Capabilities.jsx
'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';

// This is the new sub-component for each feature
function FeatureSection({ title, description, specs, index, image, video, gradient }) {
  const isReversed = index % 2 !== 0;
  
  const textVariants = {
    initial: { opacity: 0, x: isReversed ? 20 : -20 },
    whileInView: { opacity: 1, x: 0 },
    transition: { duration: 0.6, ease: 'easeOut' },
    viewport: { once: true, margin: '-100px' }
  };
  
  const visualVariants = {
    initial: { opacity: 0, x: isReversed ? -20 : 20 },
    whileInView: { opacity: 1, x: 0 },
    transition: { duration: 0.6, ease: 'easeOut', delay: 0.1 },
    viewport: { once: true, margin: '-100px' }
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center">
      {/* Text Column */}
      <motion.div 
        className={isReversed ? 'md:order-last' : ''}
        variants={textVariants}
        initial="initial"
        whileInView="whileInView"
      >
        <p className="kicker mb-6">Core Capability {index + 1}</p>
        <h3 className="headline-3 mb-6">{title}</h3>
        <p className="body-text mb-8">{description}</p>
        
        {/* Specs List */}
        <ul className="space-y-3 mb-8">
          {specs.map((spec, idx) => (
            <motion.li 
              key={idx}
              className="flex items-center gap-3 font-inter text-whitesoft/70"
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              viewport={{ once: true }}
            >
              <svg className="w-5 h-5 text-brand-orange flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span>{spec}</span>
            </motion.li>
          ))}
        </ul>
        
        <a href="#contact" className="btn-secondary !px-6 !py-3 group">
          Request Details
          <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </a>
      </motion.div>
      
      {/* Visual Column with Real Assets */}
      <motion.div 
        className="relative w-full h-96 rounded-2xl overflow-hidden glass-border group"
        variants={visualVariants}
        initial="initial"
        whileInView="whileInView"
        whileHover={{ scale: 1.02 }}
        transition={{ duration: 0.3 }}
      >
        {/* Video or Image Background - Full Coverage */}
        {video ? (
          <motion.video
            autoPlay
            loop
            muted
            playsInline
            className="absolute top-0 left-0 w-full h-full"
            style={{ objectFit: 'cover' }}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.5 }}
          >
            <source src={video} type="video/mp4" />
          </motion.video>
        ) : (
          <motion.div
            className="absolute inset-0 w-full h-full"
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.5 }}
          >
            <Image
              src={image}
              alt={title}
              fill
              className="object-cover"
              style={{ objectFit: 'cover' }}
              sizes="(max-width: 768px) 100vw, 50vw"
              priority
            />
          </motion.div>
        )}
        
        {/* Dynamic Gradient Overlay */}
        <motion.div 
          className={`absolute inset-0 bg-gradient-to-tr ${gradient} opacity-60`}
          initial={{ opacity: 0.6 }}
          whileHover={{ opacity: 0.3 }}
          transition={{ duration: 0.5 }}
        />
        
        {/* Corner Accents with Animation */}
        <motion.div 
          className={`absolute top-4 right-4 w-16 h-16 border-t-2 border-r-2 bg-gradient-to-br ${gradient}`}
          initial={{ opacity: 0.5 }}
          whileHover={{ opacity: 1, scale: 1.1 }}
          transition={{ duration: 0.3 }}
          style={{ borderColor: 'currentColor' }}
        />
        <motion.div 
          className={`absolute bottom-4 left-4 w-16 h-16 border-b-2 border-l-2 bg-gradient-to-tl ${gradient}`}
          initial={{ opacity: 0.5 }}
          whileHover={{ opacity: 1, scale: 1.1 }}
          transition={{ duration: 0.3 }}
          style={{ borderColor: 'currentColor' }}
        />
        
        {/* Scan Line Effect */}
        <motion.div
          className={`absolute inset-0 bg-gradient-to-b from-transparent ${gradient.includes('orange') ? 'via-orange-500/30' : gradient.includes('blue') ? 'via-blue-500/30' : gradient.includes('purple') ? 'via-purple-500/30' : 'via-green-500/30'} to-transparent h-24`}
          animate={{ y: ['-100%', '200%'] }}
          transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
        />
        
        {/* Glowing Particles */}
        <div className="absolute inset-0">
          {[...Array(5)].map((_, i) => (
            <motion.div
              key={i}
              className={`absolute w-1 h-1 bg-gradient-to-r ${gradient} rounded-full`}
              style={{
                left: `${20 + i * 15}%`,
                top: `${30 + i * 10}%`,
              }}
              animate={{
                y: [0, -20, 0],
                opacity: [0, 1, 0],
              }}
              transition={{
                duration: 2 + i * 0.5,
                repeat: Infinity,
                delay: i * 0.3,
              }}
            />
          ))}
        </div>
      </motion.div>
    </div>
  );
}

export default function Capabilities() {
  // PDF Req: 3-4 offerings
  const capabilities = [
    {
      title: 'RF Detection & Tracking',
      description: 'Advanced radio frequency detection identifies unauthorized drone signals across multiple frequency bands with military-grade precision, providing real-time threat intelligence.',
      specs: [
        'Multi-band RF spectrum analysis (0.4-6 GHz)',
        'Simultaneous tracking of 50+ targets',
        'Direction finding with ±2° accuracy',
        'Remote ID protocol detection'
      ],
      image: '/images/drone1.jpg',
      gradient: 'from-orange-500/80 via-red-500/60 to-charcoal/90'
    },
    {
      title: 'Smart Countermeasures',
      description: 'Intelligent jamming and disruption protocols neutralize threats without collateral interference to authorized communications, ensuring controlled airspace integrity.',
      specs: [
        'Precision GPS/GNSS jamming',
        'Protocol-specific disruption',
        'Geofencing enforcement',
        'Non-kinetic threat neutralization'
      ],
      video: '/videos/video3_mech_hand.mp4',
      gradient: 'from-blue-500/80 via-purple-500/60 to-charcoal/90'
    },
    {
      title: 'AI-Driven Classification',
      description: 'Real-time automated threat assessment and classification protocols engage within milliseconds of detection, filtering friend from foe using advanced machine learning.',
      specs: [
        'Neural network threat identification',
        'Behavioral pattern recognition',
        'Automated response protocols',
        'Integration with C2 systems'
      ],
      image: '/images/drone2.jpg',
      gradient: 'from-purple-500/80 via-pink-500/60 to-charcoal/90'
    },
    {
      title: 'Command & Control',
      description: 'Centralized command and control platform provides operators with comprehensive situational awareness and streamlined threat management across distributed sensor networks.',
      specs: [
        'Real-time 3D airspace visualization',
        'Multi-site coordination',
        'Automated alert generation',
        'Forensic data logging & replay'
      ],
      video: '/videos/video2_rolling_elements.mp4',
      gradient: 'from-green-500/80 via-emerald-500/60 to-charcoal/90'
    }
  ];

  return (
    <section id="capabilities" className="section-padding relative overflow-hidden bg-gradient-to-b from-steel-900 via-charcoal to-steel-900">
      {/* Background Elements */}
      <div className="absolute top-1/4 left-0 w-[500px] h-[500px] bg-gradient-to-br from-orange-500/20 to-red-500/10 rounded-full blur-[120px]" />
      <div className="absolute bottom-1/4 right-0 w-[500px] h-[500px] bg-gradient-to-br from-blue-500/20 to-purple-500/10 rounded-full blur-[120px]" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-full blur-[150px]" />
      
      <div className="container-custom relative z-10">
        {/* Section Header */}
        <motion.div 
          className="text-center mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: '-100px' }}
        >
          <p className="kicker mb-4">Our Solutions</p>
          <h2 className="headline-2 mb-6">Counter-UAV Capabilities</h2>
          <p className="body-text max-w-2xl mx-auto">
            Comprehensive drone defense systems engineered for mission-critical operations
          </p>
        </motion.div>

        <div className="flex flex-col gap-32">
          {capabilities.map((cap, index) => (
            <FeatureSection
              key={cap.title}
              index={index}
              title={cap.title}
              description={cap.description}
              specs={cap.specs}
              image={cap.image}
              video={cap.video}
              gradient={cap.gradient}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

