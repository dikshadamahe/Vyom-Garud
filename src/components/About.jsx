'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export default function About() {
  return (
    <section
      id="about"
      className="relative bg-steel-900 py-32 overflow-hidden"
    >
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,123,0,0.1),transparent_50%)]"></div>
      </div>

      {/* Vertical Orange Accent Bar */}
      <motion.div
        initial={{ scaleY: 0 }}
        whileInView={{ scaleY: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1, ease: [0.4, 0, 0.2, 1] }}
        className="absolute left-0 top-32 bottom-32 w-1 bg-gradient-to-b from-transparent via-brand-orange to-transparent origin-top"
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-brand-orange/10 border border-brand-orange/30 rounded-full mb-6"
            >
              <span className="font-inter text-sm text-brand-orange font-medium">About Us</span>
            </motion.div>

            <h2 className="font-montserrat font-bold text-4xl md:text-5xl text-white mb-6">
              VyomGarud Defense Systems
            </h2>
            <div className="space-y-6">
              <p className="font-inter text-base md:text-lg text-gray500 leading-relaxed">
                VyomGarud delivers military-grade counter-UAV systems designed for defense agencies, 
                critical infrastructure, and high-security facilities worldwide. Our solutions combine 
                RF detection, active jamming, and autonomous threat response.
              </p>
              <p className="font-inter text-base md:text-lg text-gray500 leading-relaxed">
                With deployments across government installations and enterprise sites, we provide 
                proven protection against unauthorized drone incursions. Our systems integrate 
                seamlessly with existing security architectures while maintaining zero false positives.
              </p>
              <p className="font-inter text-base md:text-lg text-gray500 leading-relaxed">
                Trusted by defense forces in 12+ countries. Certified to NATO AQAP standards.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 mt-12">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                <div className="font-montserrat font-bold text-3xl text-brand-orange mb-2">
                  5km
                </div>
                <div className="font-inter text-sm text-gray500">
                  Detection Range
                </div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <div className="font-montserrat font-bold text-3xl text-brand-orange mb-2">
                  99.8%
                </div>
                <div className="font-inter text-sm text-gray500">
                  Accuracy Rate
                </div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.5 }}
              >
                <div className="font-montserrat font-bold text-3xl text-brand-orange mb-2">
                  24/7
                </div>
                <div className="font-inter text-sm text-gray500">
                  Active Defense
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Right Image */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.4, 0, 0.2, 1] }}
            className="relative"
          >
            <div className="relative w-full aspect-square max-w-md mx-auto">
              {/* Drone Manufacturing Image */}
              <div className="absolute inset-0 rounded-lg overflow-hidden border border-line-gray">
                <Image
                  src="/images/drone2.jpg"
                  alt="VyomGarud Technology"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-brand-orange/10 via-transparent to-steel-900/50"></div>
              </div>

              {/* Corner Borders */}
              <div className="absolute top-0 left-0 w-16 h-16 border-t-2 border-l-2 border-brand-orange"></div>
              <div className="absolute bottom-0 right-0 w-16 h-16 border-b-2 border-r-2 border-brand-orange"></div>
              
              {/* Floating Tech Badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="absolute -bottom-6 -right-6 bg-steel-900 border-2 border-brand-orange rounded-lg p-6 shadow-card"
              >
                <div className="font-montserrat font-bold text-2xl text-white">12+</div>
                <div className="font-inter text-xs text-gray500">Countries</div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
