'use client';

import { m as motion } from 'framer-motion';
import Image from 'next/image';

export default function About() {
  const prefersReducedMotion = typeof window !== 'undefined' 
    ? window.matchMedia('(prefers-reduced-motion: reduce)').matches 
    : false;

  const fadeInLeft = {
    initial: prefersReducedMotion ? { opacity: 1, x: 0 } : { opacity: 0, x: -40 },
    whileInView: { opacity: 1, x: 0 },
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
    viewport: { once: true, margin: '-100px' }
  };

  const fadeInRight = {
    initial: prefersReducedMotion ? { opacity: 1, x: 0 } : { opacity: 0, x: 40 },
    whileInView: { opacity: 1, x: 0 },
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
    viewport: { once: true, margin: '-100px' }
  };

  return (
    <section id="about" className="section section-spacing bg-steel-900 relative overflow-hidden">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          {/* Left Content */}
          <motion.div {...fadeInLeft}>
            <div className="accent-line"></div>
            
            <h2 className="headline-section text-whitesoft mb-8">
              VyomGarud <span className="text-brand-orange">Defense Systems</span>
            </h2>

            <div className="space-y-6">
              <p className="body-large text-whitesoft/80">
                VyomGarud delivers military-grade counter-UAV systems engineered for defense agencies, 
                critical infrastructure, and high-security facilities worldwide. Our solutions combine 
                advanced RF detection, active jamming, and autonomous threat response.
              </p>
              <p className="body-large text-whitesoft/80">
                With deployments across government installations and enterprise sites in 12+ countries, 
                we provide proven protection against unauthorized drone incursions. Our systems integrate 
                seamlessly with existing security architectures while maintaining zero false positives.
              </p>
              <p className="body-large text-whitesoft/80 font-semibold">
                Certified to NATO AQAP standards. Trusted by defense forces globally.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 mt-12 pt-10 border-t border-whitesoft/10">
              <div>
                <div className="font-montserrat font-700 text-3xl text-brand-orange mb-2">5km+</div>
                <div className="font-inter text-xs text-whitesoft/60 uppercase tracking-wider">Range</div>
              </div>
              <div>
                <div className="font-montserrat font-700 text-3xl text-brand-orange mb-2">99.8%</div>
                <div className="font-inter text-xs text-whitesoft/60 uppercase tracking-wider">Accuracy</div>
              </div>
              <div>
                <div className="font-montserrat font-700 text-3xl text-brand-orange mb-2">12+</div>
                <div className="font-inter text-xs text-whitesoft/60 uppercase tracking-wider">Countries</div>
              </div>
            </div>
          </motion.div>

          {/* Right Image */}
          <motion.div {...fadeInRight} className="relative">
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/images/drone2.jpg"
                alt="VyomGarud Defense Technology"
                fill
                sizes="(min-width: 1024px) 45vw, 100vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-brand-orange/15 via-transparent to-charcoal/40 mix-blend-overlay"></div>
              <div className="absolute inset-0 border border-brand-orange/20 rounded-2xl"></div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
