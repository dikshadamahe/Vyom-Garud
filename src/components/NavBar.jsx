'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function NavBar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 36);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') setMobileMenuOpen(false);
    };
    if (mobileMenuOpen) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  const navLinks = [
    { href: '#about', label: 'About' },
    { href: '#capabilities', label: 'Capabilities' },
    { href: '/technology', label: 'Technology' },
    { href: '/products', label: 'Products' },
    { href: '#contact', label: 'Contact' },
  ];

  const handleNavClick = (e, href) => {
    if (href.startsWith('#')) {
      e.preventDefault();
      const element = document.getElementById(href.substring(1));
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
        element.focus({ preventScroll: true });
        setMobileMenuOpen(false);
      }
    } else {
      setMobileMenuOpen(false);
    }
  };

  return (
    <>
      <a
        href="#hero"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] focus:px-6 focus:py-3 focus:bg-brand-orange focus:text-white focus:rounded-lg focus:font-semibold"
      >
        Skip to content
      </a>

      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-charcoal/95 backdrop-blur-xl border-b border-whitesoft/5 py-3'
            : 'bg-transparent py-5'
        }`}
        role="navigation"
        aria-label="Main navigation"
      >
        <div className="container-custom flex items-center justify-between">
          <Link href="/" className="flex-shrink-0 group" aria-label="VyomGarud home">
            <Image
              src="/images/vyomgarud_logo.jpg"
              alt="VyomGarud"
              width={scrolled ? 40 : 52}
              height={scrolled ? 40 : 52}
              sizes="52px"
              className={`object-contain transition-all duration-300 group-hover:scale-105 ${scrolled ? 'max-h-10' : ''}`}
              priority
            />
          </Link>

          <ul className="hidden lg:flex items-center gap-8" role="list">
            {navLinks.map((link) => (
              <li key={link.href}>
                {link.href.startsWith('#') ? (
                  <a
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className="relative font-montserrat text-sm font-600 text-whitesoft/80 hover:text-whitesoft uppercase tracking-wider transition-colors duration-300 link-underline"
                  >
                    {link.label}
                  </a>
                ) : (
                  <Link
                    href={link.href}
                    className="relative font-montserrat text-sm font-600 text-whitesoft/80 hover:text-whitesoft uppercase tracking-wider transition-colors duration-300 link-underline"
                  >
                    {link.label}
                  </Link>
                )}
              </li>
            ))}
          </ul>

          <a
            href="#contact"
            onClick={(e) => handleNavClick(e, '#contact')}
            className="hidden lg:inline-flex items-center px-6 py-3 bg-brand-orange/10 border border-brand-orange/30 text-brand-orange font-inter font-semibold text-sm rounded-lg hover:bg-brand-orange hover:text-white hover:border-brand-orange transition-all duration-300"
          >
            Request Demo
          </a>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-whitesoft/70 hover:text-whitesoft transition-colors"
            aria-label="Toggle mobile menu"
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-menu"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="w-6 h-6"
            >
              {mobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div
            id="mobile-menu"
            className="lg:hidden absolute top-full left-0 right-0 bg-charcoal/98 backdrop-blur-xl border-b border-whitesoft/5 py-6"
          >
            <div className="container-custom">
              <ul className="space-y-4" role="list">
                {navLinks.map((link) => (
                  <li key={link.href}>
                    {link.href.startsWith('#') ? (
                      <a
                        href={link.href}
                        onClick={(e) => handleNavClick(e, link.href)}
                        className="block font-montserrat text-base font-600 text-whitesoft/80 hover:text-brand-orange uppercase tracking-wider py-2 transition-colors duration-300"
                      >
                        {link.label}
                      </a>
                    ) : (
                      <Link
                        href={link.href}
                        onClick={() => setMobileMenuOpen(false)}
                        className="block font-montserrat text-base font-600 text-whitesoft/80 hover:text-brand-orange uppercase tracking-wider py-2 transition-colors duration-300"
                      >
                        {link.label}
                      </Link>
                    )}
                  </li>
                ))}
                <li className="pt-4 border-t border-whitesoft/10">
                  <a
                    href="#contact"
                    onClick={(e) => handleNavClick(e, '#contact')}
                    className="block w-full text-center px-6 py-3 bg-brand-orange text-white font-inter font-semibold text-sm rounded-lg hover:bg-brand-orange/90 transition-all duration-300"
                  >
                    Request Demo
                  </a>
                </li>
              </ul>
            </div>
          </div>
        )}
      </nav>
    </>
  );
}
