'use client';

import { motion } from 'framer-motion';

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

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
          >
            <h2 className="font-montserrat font-bold text-4xl md:text-5xl text-white mb-6">
              About VyomGarud
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
              <div>
                <div className="font-montserrat font-bold text-3xl text-brand-orange mb-2">
                  5km
                </div>
                <div className="font-inter text-sm text-gray500">
                  Detection Range
                </div>
              </div>
              <div>
                <div className="font-montserrat font-bold text-3xl text-brand-orange mb-2">
                  99.8%
                </div>
                <div className="font-inter text-sm text-gray500">
                  Accuracy Rate
                </div>
              </div>
              <div>
                <div className="font-montserrat font-bold text-3xl text-brand-orange mb-2">
                  24/7
                </div>
                <div className="font-inter text-sm text-gray500">
                  Active Defense
                </div>
              </div>
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
              {/* Placeholder Image Box */}
              <div className="absolute inset-0 bg-steel-800 border border-line-gray rounded-lg overflow-hidden">
                <div className="w-full h-full flex items-center justify-center">
                  <svg
                    className="w-48 h-48 text-brand-orange/20"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                    />
                  </svg>
                </div>
              </div>

              {/* Corner Borders */}
              <div className="absolute top-0 left-0 w-16 h-16 border-t-2 border-l-2 border-brand-orange"></div>
              <div className="absolute bottom-0 right-0 w-16 h-16 border-b-2 border-r-2 border-brand-orange"></div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
