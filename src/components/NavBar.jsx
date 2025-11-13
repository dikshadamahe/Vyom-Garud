'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', href: '#hero' },
    { label: 'About', href: '#about' },
    { label: 'Capabilities', href: '#capabilities' },
    { label: 'Highlights', href: '#highlights' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-30 border-b border-line-gray transition-all duration-300 ${scrolled ? 'bg-charcoal/95 py-3 shadow-sm backdrop-blur' : 'bg-charcoal/90 py-4 backdrop-blur-sm'}`}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between">
          <a href="#hero" className="flex items-center gap-3" aria-label="VyomGarud home">
            <div className="relative h-12 w-12">
              <Image
                src="/images/vyomgarud_logo.jpg"
                alt="VyomGarud logo"
                fill
                className="object-contain"
                priority
              />
            </div>
            <span className="text-xl font-semibold tracking-tight text-white">VyomGarud</span>
          </a>

          <nav className="hidden items-center gap-8 text-sm text-gray500 md:flex">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="hover:text-white transition-colors"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              className="rounded-md bg-brand-orange px-5 py-2 text-sm font-semibold text-white transition hover:bg-brand-orange/90"
            >
              Request Demo
            </a>
          </nav>

          <button
            type="button"
            className="flex h-10 w-10 items-center justify-center rounded md:hidden"
            onClick={() => setIsOpen((prev) => !prev)}
            aria-label="Toggle navigation"
          >
            <span className="relative block h-5 w-6">
              <span
                className="absolute left-0 h-0.5 w-full bg-white transition-transform"
                style={{ transform: isOpen ? 'translateY(10px) rotate(45deg)' : 'translateY(0px)' }}
              />
              <span
                className="absolute left-0 top-1/2 h-0.5 w-full bg-white transition-opacity"
                style={{ opacity: isOpen ? 0 : 1 }}
              />
              <span
                className="absolute left-0 h-0.5 w-full bg-white transition-transform"
                style={{ transform: isOpen ? 'translateY(-10px) rotate(-45deg)' : 'translateY(20px)' }}
              />
            </span>
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="mt-4 border-t border-line-gray bg-charcoal/95 md:hidden">
          <div className="space-y-4 px-6 py-6 text-sm text-gray300">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="block"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setIsOpen(false)}
              className="block rounded-md bg-brand-orange px-5 py-2 text-sm font-semibold text-white transition hover:bg-brand-orange/90"
            >
              Request Demo
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
