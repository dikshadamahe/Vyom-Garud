'use client';

import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center bg-charcoal overflow-hidden pt-20"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-charcoal via-steel-900/30 to-charcoal"></div>
      
      {/* Animated Gyroscopic Rings */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 60, repeat: Infinity, ease: 'linear' }}
        className="absolute top-1/4 right-1/4 w-[600px] h-[600px] border border-line-gray/20 rounded-full"
      />
      <motion.div
        animate={{ rotate: -360 }}
        transition={{ duration: 80, repeat: Infinity, ease: 'linear' }}
        className="absolute top-1/3 right-1/3 w-[500px] h-[500px] border border-brand-orange/10 rounded-full"
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
          >
            <motion.h1
              className="font-montserrat font-bold text-5xl md:text-6xl lg:text-7xl text-white leading-tight mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.4, 0, 0.2, 1] }}
            >
              Defend Your Airspace
            </motion.h1>
            
            <motion.p
              className="font-inter text-lg md:text-xl text-gray500 mb-8 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4, ease: [0.4, 0, 0.2, 1] }}
            >
              Military-grade UAV detection and neutralization systems. 
              Trusted by defense forces and critical infrastructure worldwide.
            </motion.p>

            {/* CTAs */}
            <motion.div
              className="flex flex-col sm:flex-row gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6, ease: [0.4, 0, 0.2, 1] }}
            >
              <a
                href="#contact"
                className="px-8 py-4 bg-brand-orange text-white font-inter font-semibold text-base rounded hover:bg-brand-orange/90 hover:shadow-glow-orange transition-all duration-300 text-center"
              >
                Request Demo
              </a>
              <a
                href="#capabilities"
                className="px-8 py-4 border-2 border-brand-orange text-brand-orange font-inter font-semibold text-base rounded hover:bg-brand-orange/10 transition-all duration-300 text-center"
              >
                View Capabilities
              </a>
            </motion.div>
          </motion.div>

          {/* Right Side - Drone Visual */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.4, 0, 0.2, 1] }}
          >
            <div className="relative w-full aspect-square max-w-lg mx-auto">
              {/* Placeholder for drone image */}
              <div className="absolute inset-0 bg-steel-900 border border-line-gray rounded-lg flex items-center justify-center overflow-hidden group">
                <motion.div
                  animate={{ scale: [1, 1.05, 1] }}
                  transition={{ duration: 4, repeat: Infinity, ease: [0.4, 0, 0.2, 1] }}
                  className="w-full h-full flex items-center justify-center"
                >
                  <svg
                    className="w-64 h-64 text-brand-orange/20"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2L4 5v6.09c0 5.05 3.41 9.76 8 10.91 4.59-1.15 8-5.86 8-10.91V5l-8-3z" />
                  </svg>
                </motion.div>
                <div className="absolute inset-0 bg-gradient-to-tr from-brand-orange/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>

              {/* Corner Accents */}
              <motion.div
                className="absolute top-0 left-0 w-12 h-12 border-t-2 border-l-2 border-brand-orange"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 1 }}
              />
              <motion.div
                className="absolute bottom-0 right-0 w-12 h-12 border-b-2 border-r-2 border-brand-orange"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 1 }}
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
