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
            <div className="flex items-center gap-3 mb-4">
              <img 
                src="/images/vyomgarud_logo.jpg" 
                alt="VyomGarud Logo" 
                className="w-12 h-12 rounded-lg object-cover"
              />
              <h3 className="font-montserrat font-bold text-2xl text-whitesoft">
                VYOMGARUD
              </h3>
            </div>
            <p className="font-inter text-sm text-whitesoft/60 mb-6 max-w-xs">
              Precision autonomy for mission-critical counter-UAV operations.
            </p>
            <div className="flex gap-4">
              {/* LinkedIn */}
              <a
                href="#"
                className="w-10 h-10 rounded-lg bg-steel-800 border border-line-gray flex items-center justify-center text-whitesoft/60 hover:text-brand-orange hover:border-brand-orange/50 transition-all duration-300 group"
                aria-label="LinkedIn"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
              </a>
              
              {/* Twitter/X */}
              <a
                href="#"
                className="w-10 h-10 rounded-lg bg-steel-800 border border-line-gray flex items-center justify-center text-whitesoft/60 hover:text-brand-orange hover:border-brand-orange/50 transition-all duration-300 group"
                aria-label="Twitter"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </a>
              
              {/* GitHub */}
              <a
                href="#"
                className="w-10 h-10 rounded-lg bg-steel-800 border border-line-gray flex items-center justify-center text-whitesoft/60 hover:text-brand-orange hover:border-brand-orange/50 transition-all duration-300 group"
                aria-label="GitHub"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
              </a>
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
          <div className="flex items-center gap-3 text-whitesoft/40 text-sm">
            <span>Engineered in India</span>
            <div className="flex items-center justify-center w-8 h-6 rounded overflow-hidden shadow-lg">
              <svg viewBox="0 0 900 600" className="w-full h-full">
                <rect fill="#FF9933" width="900" height="200"/>
                <rect fill="#FFFFFF" y="200" width="900" height="200"/>
                <rect fill="#138808" y="400" width="900" height="200"/>
                <circle fill="#000080" cx="450" cy="300" r="50"/>
                <circle fill="none" stroke="#000080" strokeWidth="3" cx="450" cy="300" r="50"/>
                {[...Array(24)].map((_, i) => {
                  const angle = (i * 15 - 90) * (Math.PI / 180);
                  const x1 = 450 + 50 * Math.cos(angle);
                  const y1 = 300 + 50 * Math.sin(angle);
                  const x2 = 450 + 40 * Math.cos(angle);
                  const y2 = 300 + 40 * Math.sin(angle);
                  return `<line key=${i} x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}" stroke="#000080" strokeWidth="2"/>`;
                }).join('')}
              </svg>
            </div>
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

