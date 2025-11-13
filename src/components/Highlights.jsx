// src/components/Highlights.jsx
'use client';
import { motion, useInView } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';

function AnimatedNumber({ value, duration = 2 }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  
  // Extract number from value string (e.g., "5km+" -> 5, "99.8%" -> 99.8)
  const numericValue = parseFloat(value.replace(/[^0-9.]/g, ''));
  const suffix = value.replace(/[0-9.]/g, '');
  
  useEffect(() => {
    if (!isInView) return;
    
    let startTime;
    let animationFrame;
    
    const animate = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / (duration * 1000), 1);
      
      setCount(Math.floor(progress * numericValue * 10) / 10);
      
      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };
    
    animationFrame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrame);
  }, [isInView, numericValue, duration]);
  
  return <span ref={ref}>{count}{suffix}</span>;
}

export default function Highlights() {
  // PDF Req: 3 concise feature bullets
  const stats = [
    { 
      value: '5km+', 
      label: 'Detection Range', 
      icon: '📡',
      gradient: 'from-orange-500 to-red-500'
    },
    { 
      value: '99.8%', 
      label: 'Threat Accuracy', 
      icon: '🎯',
      gradient: 'from-blue-500 to-cyan-500'
    },
    { 
      value: '24/7', 
      label: 'Autonomous Defense', 
      icon: '🛡️',
      gradient: 'from-purple-500 to-pink-500'
    },
  ];

  return (
    <section className="section-padding relative overflow-hidden bg-gradient-to-br from-charcoal via-steel-900 to-steel-800">
      {/* Background Video - Full Coverage */}
      <div className="absolute inset-0 w-full h-full opacity-20 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute top-0 left-0 w-full h-full object-cover"
          style={{ objectFit: 'cover' }}
        >
          <source src="/videos/video4_blue_blob.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-charcoal/80 to-charcoal/80 z-10" />
      </div>
      
      {/* Multiple Background Accents */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-brand-orange/10 rounded-full blur-[120px]" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-500/10 rounded-full blur-[120px]" />
      
      <div className="container-custom relative z-10">
        {/* Section Header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: '-100px' }}
        >
          <p className="kicker mb-4">Performance Metrics</p>
          <h2 className="headline-2">Mission-Critical Specifications</h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <motion.div 
              key={index} 
              className="relative group"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true, margin: '-100px' }}
            >
              <div className="relative glass-bg glass-border rounded-2xl p-10 text-center overflow-hidden transition-all duration-300 hover:border-brand-orange/50 hover:shadow-2xl hover:shadow-brand-orange/20">
                {/* Animated Gradient Background */}
                <motion.div 
                  className={`absolute inset-0 bg-gradient-to-br ${stat.gradient} opacity-0 group-hover:opacity-20 transition-opacity duration-500`}
                  animate={{
                    backgroundPosition: ['0% 0%', '100% 100%'],
                  }}
                  transition={{
                    duration: 5,
                    repeat: Infinity,
                    repeatType: 'reverse',
                  }}
                />
                
                {/* Icon with Glow */}
                <motion.div 
                  className="text-6xl mb-6 relative"
                  whileHover={{ scale: 1.2, rotate: [0, -10, 10, 0] }}
                  transition={{ duration: 0.5 }}
                >
                  <div className={`absolute inset-0 blur-2xl bg-gradient-to-r ${stat.gradient} opacity-50`} />
                  <span className="relative">{stat.icon}</span>
                </motion.div>
                
                {/* Animated Value with Gradient */}
                <h3 className={`relative font-montserrat font-bold text-6xl bg-gradient-to-r ${stat.gradient} bg-clip-text text-transparent mb-4`}>
                  <AnimatedNumber value={stat.value} />
                </h3>
                
                {/* Label */}
                <p className="relative font-inter text-sm text-whitesoft/80 uppercase tracking-widest font-semibold">
                  {stat.label}
                </p>
                
                {/* Bottom Accent Line with Gradient */}
                <motion.div 
                  className={`absolute bottom-0 left-0 h-1 bg-gradient-to-r ${stat.gradient}`}
                  initial={{ width: 0 }}
                  whileInView={{ width: '100%' }}
                  transition={{ duration: 0.8, delay: index * 0.1 + 0.3 }}
                  viewport={{ once: true }}
                />
                
                {/* Corner Glow */}
                <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${stat.gradient} opacity-10 blur-3xl`} />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
