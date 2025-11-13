// src/components/About.jsx
'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';

export default function About() {
  const features = [
    { 
      icon: '🚁', 
      title: 'Advanced UAV Technology', 
      description: 'Next-gen autonomous systems',
      gradient: 'from-orange-500 to-red-500'
    },
    { 
      icon: '🛡️', 
      title: 'Military-Grade Security', 
      description: 'Uncompromising protection',
      gradient: 'from-blue-500 to-purple-500'
    },
    { 
      icon: '⚡', 
      title: 'Real-Time Response', 
      description: 'Millisecond threat detection',
      gradient: 'from-yellow-500 to-orange-500'
    },
    { 
      icon: '🌐', 
      title: 'Global Deployment', 
      description: 'Operational worldwide',
      gradient: 'from-green-500 to-emerald-500'
    },
  ];

  return (
    <section id="about" className="section-padding relative overflow-hidden bg-gradient-to-b from-charcoal via-steel-900 to-charcoal">
      {/* Background Video - Full Coverage */}
      <div className="absolute inset-0 w-full h-full opacity-10 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute top-0 left-0 w-full h-full object-cover"
          style={{ objectFit: 'cover' }}
        >
          <source src="/videos/video2_rolling_elements.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-charcoal/50 to-charcoal/50 z-10" />
      </div>
      
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, #ff7b00 1px, transparent 1px)`,
          backgroundSize: '40px 40px',
        }} />
      </div>
      
      {/* Gradient Orbs */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-gradient-to-br from-orange-500/20 to-red-500/20 rounded-full blur-[120px]" />
      <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-full blur-[120px]" />

      <div className="container-custom relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left: Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, margin: '-100px' }}
          >
            <p className="kicker mb-6">Our Mission</p>
            <h2 className="headline-2 mb-8">
              Engineering the Future of <span className="text-brand-orange">Airspace Security</span>
            </h2>
            {/* PDF Req: Short summary of VyomGarud's mission */}
            <p className="body-text mb-8">
              VyomGarud's mission is to provide precision autonomy and advanced drone
              systems for mission-critical operations, ensuring high reliability
              and security for our defense and enterprise clients worldwide.
            </p>
            <p className="body-text">
              We combine cutting-edge AI, advanced sensor fusion, and military-grade
              hardware to deliver counter-UAV systems that protect critical infrastructure,
              secure borders, and safeguard lives.
            </p>
          </motion.div>

          {/* Right: Feature Grid */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, margin: '-100px' }}
            className="grid grid-cols-2 gap-6"
          >
            {features.map((feature, index) => (
              <motion.div
                key={index}
                className="relative glass-bg glass-border rounded-xl p-6 hover:border-brand-orange/50 transition-all duration-300 group overflow-hidden"
                initial={{ opacity: 0, y: 20, rotateX: -15 }}
                whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
                transition={{ 
                  duration: 0.5, 
                  delay: index * 0.1,
                  type: 'spring',
                  stiffness: 100
                }}
                viewport={{ once: true, margin: '-100px' }}
                whileHover={{ 
                  y: -8, 
                  scale: 1.05,
                  transition: { duration: 0.3 }
                }}
              >
                {/* Gradient Background on Hover */}
                <motion.div 
                  className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
                />
                
                {/* Icon with Gradient Glow */}
                <motion.div 
                  className="relative text-4xl mb-4"
                  whileHover={{ 
                    scale: 1.2, 
                    rotate: [0, -10, 10, -10, 0],
                    transition: { duration: 0.5 }
                  }}
                >
                  <div className={`absolute inset-0 blur-xl bg-gradient-to-r ${feature.gradient} opacity-50`} />
                  <span className="relative">{feature.icon}</span>
                </motion.div>

                {/* Title - keep bright on hover */}
                <h3 className="relative font-montserrat font-bold text-lg text-whitesoft mb-2 transition-colors duration-300 group-hover:text-whitesoft">
                  {feature.title}
                </h3>

                {/* Description - brighten on hover */}
                <p className="relative font-inter text-sm text-whitesoft/70 transition-colors duration-300 group-hover:text-whitesoft">
                  {feature.description}
                </p>
                
                {/* Bottom Gradient Line */}
                <motion.div
                  className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${feature.gradient} opacity-0 group-hover:opacity-100`}
                  transition={{ duration: 0.3 }}
                />
                
                {/* Corner Glow */}
                <div className={`absolute top-0 right-0 w-24 h-24 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-20 blur-2xl transition-opacity duration-500`} />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
