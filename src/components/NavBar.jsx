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
    <nav
      className={`sticky top-0 z-30 bg-[rgba(10,10,10,0.6)] backdrop-blur-md transition-all duration-300 ${
        isCompact ? 'py-3' : 'py-5'
      }`}
      role="navigation"
      aria-label="Main navigation"
    >
      <div className="container flex items-center justify-between">
        {/* Logo */}
        <Link href="/" aria-label="VyomGarud home">
          <Image
            src="/images/vyomgarud_logo.jpg"
            alt="VyomGarud"
            width={48}
            height={48}
            className={`transition-all duration-300 ${
              isCompact ? 'max-h-10' : 'max-h-12'
            } w-auto`}
            priority
          />
        </Link>

        {/* Navigation Links */}
        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="font-inter text-sm font-medium text-white/80 hover:text-white uppercase tracking-wide transition-colors duration-200 relative group"
              >
                {link.label}
                <span
                  className="absolute -bottom-1 left-0 w-0 h-0.5 bg-brand-orange transition-all duration-300 group-hover:w-full"
                  aria-hidden="true"
                ></span>
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 text-white/80 hover:text-white transition-colors"
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
  );
}
