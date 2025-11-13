// src/components/Footer.jsx
'use client';
import { motion } from 'framer-motion';

export default function Footer() {
  const footerLinks = {
    Product: ['RF Detection', 'Countermeasures', 'AI Classification', 'Command & Control'],
    Company: ['About', 'Careers', 'Press', 'Partners'],
    Resources: ['Documentation', 'Case Studies', 'Blog', 'Support'],
    Legal: ['Privacy Policy', 'Terms of Service', 'Security', 'Compliance'],
  };

  return (
    <footer className="relative bg-gradient-to-b from-steel-900 to-charcoal border-t border-line-gray overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(#2f2f33 1px, transparent 1px), linear-gradient(90deg, #2f2f33 1px, transparent 1px)`,
          backgroundSize: '30px 30px',
        }} />
      </div>
      
      {/* Gradient Orbs */}
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-gradient-to-br from-orange-500/10 to-red-500/5 rounded-full blur-[100px]" />
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-gradient-to-br from-blue-500/10 to-purple-500/5 rounded-full blur-[100px]" />

      <div className="container-custom relative z-10 py-16">
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-12 mb-12">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <h3 className="font-montserrat font-bold text-2xl text-whitesoft mb-4">
              VYOMGARUD
            </h3>
            <p className="font-inter text-sm text-whitesoft/60 mb-6 max-w-xs">
              Precision autonomy for mission-critical counter-UAV operations.
            </p>
            <div className="flex gap-4">
              {['LinkedIn', 'Twitter', 'GitHub'].map((social) => (
                <a
                  key={social}
                  href="#"
                  className="w-10 h-10 rounded-lg bg-steel-800 border border-line-gray flex items-center justify-center text-whitesoft/60 hover:text-brand-orange hover:border-brand-orange/50 transition-all duration-300"
                  aria-label={social}
                >
                  <span className="text-xs font-bold">{social[0]}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Links Columns */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="font-montserrat font-semibold text-whitesoft mb-4 text-sm uppercase tracking-wider">
                {category}
              </h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="font-inter text-sm text-whitesoft/60 hover:text-whitesoft transition-colors"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Divider */}
        <div className="w-full h-px bg-line-gray mb-8" />

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="font-inter text-sm text-whitesoft/40">
            © {new Date().getFullYear()} VyomGarud Defense Systems. All rights reserved.
          </p>
          <div className="flex items-center gap-2 text-whitesoft/40 text-xs">
            <span>Engineered in India</span>
            <span className="text-brand-orange">🇮🇳</span>
          </div>
        </div>
      </div>

      {/* Corner Accent */}
      <motion.div
        className="absolute bottom-0 right-0 w-64 h-64 bg-brand-orange/5 rounded-full blur-[80px]"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.05, 0.1, 0.05],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />
    </footer>
  );
}

