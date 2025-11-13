'use client';

import './globals.css';
import { AnimatePresence, m as motion } from 'framer-motion';
import { usePathname } from 'next/navigation';

export default function RootLayout({ children }) {
  const pathname = usePathname();
  
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="canonical" href="https://vyomgarud.com" />
        <link rel="preload" href="/images/drone1.jpg" as="image" type="image/jpeg" />
        <link rel="preload" href="/images/vyomgarud_logo.jpg" as="image" type="image/jpeg" />
        <meta name="format-detection" content="telephone=no" />
        <title>VyomGarud | Military-Grade Counter-UAV Defense Systems</title>
        <meta name="description" content="Advanced counter-UAV defense systems for critical infrastructure. Trusted by defense forces worldwide. NATO AQAP certified. 5km+ detection range, 99.8% accuracy." />
        <meta name="keywords" content="counter-UAV, drone defense, military defense systems, airspace protection, critical infrastructure security" />
        <meta property="og:title" content="VyomGarud | Military-Grade Counter-UAV Defense Systems" />
        <meta property="og:description" content="Advanced counter-UAV defense systems for critical infrastructure. Trusted by defense forces worldwide." />
        <meta property="og:image" content="/images/drone1.jpg" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="VyomGarud" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="VyomGarud | Military-Grade Counter-UAV Defense Systems" />
        <meta name="twitter:description" content="Advanced counter-UAV defense systems for critical infrastructure. Trusted by defense forces worldwide." />
        <meta name="twitter:image" content="/images/drone1.jpg" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
        <meta name="robots" content="index, follow" />
        <meta name="theme-color" content="#0B0B0B" />
      </head>
      <body className="font-body antialiased">
        <AnimatePresence mode="wait" initial={false}>
          <motion.div
            key={pathname}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
          >
            {children}
          </motion.div>
        </AnimatePresence>
      </body>
    </html>
  );
}
