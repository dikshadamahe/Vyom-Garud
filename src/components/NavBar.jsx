'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function NavBar() {
  const [isCompact, setIsCompact] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsCompact(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '#about', label: 'About' },
    { href: '#technology', label: 'Technology' },
    { href: '#capabilities', label: 'Capabilities' },
    { href: '#contact', label: 'Contact' },
  ];

  return (
    <>
      {/* Skip to Content Link for Accessibility */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-brand-orange focus:text-white focus:rounded"
      >
        Skip to content
      </a>

      <nav
        className={`sticky top-0 z-30 bg-charcoal/80 backdrop-blur-md border-b border-line-gray/20 transition-all duration-300 ${
          isCompact ? 'py-3' : 'py-5'
        }`}
        role="navigation"
        aria-label="Main navigation"
      >
        <div className="container mx-auto px-6 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" aria-label="VyomGarud home" className="flex-shrink-0">
            <Image
              src="/images/vyomgarud_logo.jpg"
              alt="VyomGarud"
              width={48}
              height={48}
              className={`transition-all duration-300 ${
                isCompact ? 'h-10 w-10' : 'h-12 w-12'
              } object-contain`}
              priority
            />
          </Link>

          {/* Navigation Links - Desktop */}
          <ul className="hidden md:flex items-center gap-8" role="list">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="relative font-inter text-sm font-medium text-whitesoft/80 hover:text-whitesoft uppercase tracking-wider transition-colors duration-200 group focus:outline-none focus:text-brand-orange"
                >
                  {link.label}
                  <span
                    className="absolute -bottom-1 left-0 w-0 h-0.5 bg-brand-orange transition-all duration-300 group-hover:w-full group-focus:w-full"
                    aria-hidden="true"
                  ></span>
                </a>
              </li>
            ))}
          </ul>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-whitesoft/80 hover:text-whitesoft transition-colors focus:outline-none focus:ring-2 focus:ring-brand-orange rounded"
            aria-label="Toggle mobile menu"
            aria-expanded="false"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          </button>
        </div>
      </nav>
    </>
  );
}
