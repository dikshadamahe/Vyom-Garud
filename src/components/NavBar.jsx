// src/components/NavBar.jsx
'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion'; 

export default function NavBar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { scrollY } = useScroll();
  const navOpacity = useTransform(scrollY, [0, 100], [0.95, 1]);
  const navBlur = useTransform(scrollY, [0, 100], [8, 16]);

  // Handle navbar background on scroll
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = mobileMenuOpen ? 'hidden' : '';
  }, [mobileMenuOpen]);

  const navLinks = [
    { href: '#about', label: 'About' },
    { href: '#capabilities', label: 'Capabilities' },
    { href: '#contact', label: 'Contact' },
  ];

  return (
    <>
      <motion.header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 
          ${scrolled ? 'glass-bg border-b glass-border' : 'bg-transparent'}`}
        style={{ 
          opacity: navOpacity,
          backdropFilter: scrolled ? `blur(${navBlur}px)` : 'none'
        }}
      >
        <nav className="container-custom flex items-center justify-between py-5">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-3"
          >
            <Link href="/" className="flex items-center gap-3 group">
              <div className="relative w-10 h-10">
                <div className="absolute inset-0 bg-gradient-to-br from-orange-500 to-red-500 rounded-lg blur-md opacity-50 group-hover:opacity-75 transition-opacity" />
                <div className="relative w-full h-full bg-gradient-to-br from-orange-500 to-red-600 rounded-lg flex items-center justify-center font-montserrat font-bold text-white text-xl">
                  V
                </div>
              </div>
              <span className="font-montserrat font-bold text-xl bg-gradient-to-r from-whitesoft to-brand-orange bg-clip-text text-transparent">
                VYOMGARUD
              </span>
            </Link>
          </motion.div>
          
          {/* Desktop Nav */}
          <ul className="hidden md:flex items-center gap-8">
            {navLinks.map((link, index) => (
              <motion.li 
                key={link.href}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <a 
                  href={link.href} 
                  className="relative font-inter font-medium text-sm text-whitesoft/80 hover:text-whitesoft transition-colors group"
                >
                  {link.label}
                  <motion.span
                    className="absolute -bottom-1 left-0 h-0.5 bg-brand-orange"
                    initial={{ width: 0 }}
                    whileHover={{ width: '100%' }}
                    transition={{ duration: 0.3 }}
                  />
                </a>
              </motion.li>
            ))}
          </ul>
          
          <motion.a 
            href="#contact" 
            className="hidden md:inline-flex btn-secondary !px-6 !py-3"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Request Demo
          </motion.a>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden z-[101] text-whitesoft" 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {/* Simple X/Hamburger Icon */}
            {mobileMenuOpen ? 'Close' : 'Menu'}
          </button>
        </nav>
      </motion.header>
      
      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-charcoal p-6"
          >
            <ul className="flex flex-col items-center justify-center h-full gap-8">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a 
                    href={link.href} 
                    className="text-3xl font-montserrat font-bold text-whitesoft"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
              <li className="pt-8">
                <a 
                  href="#contact" 
                  className="btn-primary"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Request Demo
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
