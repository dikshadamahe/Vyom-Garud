'use client';

import { m as motion } from 'framer-motion';

export default function Highlights() {
  return (
    <section className="section-padding bg-steel-900">
      <div className="container-custom">
        <motion.div
          className="glass-border glass-bg rounded-2xl"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-whitesoft/10">
            {/* Column 1 */}
            <div className="p-8">
              <h3 className="font-montserrat font-bold text-5xl text-brand-orange mb-3">
                5km+
              </h3>
              <p className="font-inter text-xs text-whitesoft/60 uppercase tracking-widest">
                DETECTION RANGE
              </p>
            </div>

            {/* Column 2 */}
            <div className="p-8">
              <h3 className="font-montserrat font-bold text-5xl text-brand-orange mb-3">
                99.8%
              </h3>
              <p className="font-inter text-xs text-whitesoft/60 uppercase tracking-widest">
                THREAT ACCURACY
              </p>
            </div>

            {/* Column 3 */}
            <div className="p-8">
              <h3 className="font-montserrat font-bold text-5xl text-brand-orange mb-3">
                24/7
              </h3>
              <p className="font-inter text-xs text-whitesoft/60 uppercase tracking-widest">
                AUTONOMOUS DEFENSE
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
