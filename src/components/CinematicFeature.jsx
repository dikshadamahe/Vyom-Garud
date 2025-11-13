'use client';

import { m as motion } from 'framer-motion';

export default function CinematicFeature({ videoSrc, title, description, index = 0 }) {
  return (
    <section className="h-screen min-h-[800px] relative flex items-center section-padding overflow-hidden">
      {/* Background Video */}
      <video
        className="absolute inset-0 z-0 w-full h-full object-cover"
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
      >
        <source src={videoSrc} type="video/mp4" />
      </video>

      {/* Overlay */}
      <div className="absolute inset-0 z-10 bg-charcoal/80"></div>

      {/* Content */}
      <div className="relative z-20 container-custom">
        <motion.div
          className={`max-w-lg ${index % 2 === 0 ? '' : 'ml-auto'}`}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <p className="kicker mb-6">Core Capability</p>
          <h2 className="headline-2 mb-6">{title}</h2>
          <p className="body-text">{description}</p>
        </motion.div>
      </div>
    </section>
  );
}
