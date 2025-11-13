'use client';

import { useState } from 'react';
import { m as motion } from 'framer-motion';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    organization: '',
    message: '',
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setError('');
  };

  const validateForm = () => {
    if (!formData.fullName.trim()) return 'Full name is required';
    if (!formData.email.trim()) return 'Email is required';
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) return 'Invalid email format';
    if (!formData.message.trim()) return 'Message is required';
    return null;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const validationError = validateForm();
    if (validationError) {
      setError(validationError);
      return;
    }

    setIsSubmitting(true);
    setError('');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setIsSubmitted(true);
        setFormData({ fullName: '', email: '', organization: '', message: '' });
        setTimeout(() => setIsSubmitted(false), 5000);
      } else {
        setError(data.message || 'Failed to send message. Please try again.');
      }
    } catch (err) {
      setError('Network error. Please check your connection and try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const prefersReducedMotion = typeof window !== 'undefined' 
    ? window.matchMedia('(prefers-reduced-motion: reduce)').matches 
    : false;

  const fadeIn = {
    initial: prefersReducedMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
    viewport: { once: true, margin: '-100px' }
  };

  return (
    <section id="contact" className="section section-spacing bg-charcoal relative overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-brand-orange/5 via-transparent to-transparent opacity-50"></div>

      <div className="container-custom relative z-10">
        <motion.div className="max-w-3xl mx-auto" {...fadeIn}>
          <div className="text-center mb-12">
            <div className="accent-line mx-auto"></div>
            <h2 className="text-3xl md:text-5xl font-montserrat font-700 text-whitesoft mb-6">
              Request a <span className="text-brand-orange">Consultation</span>
            </h2>
            <p className="text-lg md:text-xl font-inter text-whitesoft/75">
              Get in touch to discuss your security requirements and explore how VyomGarud can protect your critical infrastructure.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="fullName" className="block font-inter font-500 text-sm text-whitesoft mb-3">
                  Full Name <span className="text-brand-orange">*</span>
                </label>
                <input
                  type="text"
                  id="fullName"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  required
                  aria-required="true"
                  className="w-full px-6 py-4 bg-steel-900 border-2 border-line-gray text-whitesoft font-inter text-base rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-orange transition-all duration-300"
                  placeholder="John Doe"
                />
              </div>

              <div>
                <label htmlFor="email" className="block font-inter font-500 text-sm text-whitesoft mb-3">
                  Email Address <span className="text-brand-orange">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  aria-required="true"
                  className="w-full px-6 py-4 bg-steel-900 border-2 border-line-gray text-whitesoft font-inter text-base rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-orange transition-all duration-300"
                  placeholder="john@company.com"
                />
              </div>
            </div>

            <div>
              <label htmlFor="organization" className="block font-inter font-500 text-sm text-whitesoft mb-3">
                Organization
              </label>
              <input
                type="text"
                id="organization"
                name="organization"
                value={formData.organization}
                onChange={handleChange}
                className="w-full px-6 py-4 bg-steel-900 border-2 border-line-gray text-whitesoft font-inter text-base rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-orange transition-all duration-300"
                placeholder="Company / Agency"
              />
            </div>

            <div>
              <label htmlFor="message" className="block font-inter font-500 text-sm text-whitesoft mb-3">
                Message <span className="text-brand-orange">*</span>
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                aria-required="true"
                rows={5}
                className="w-full px-6 py-4 bg-steel-900 border-2 border-line-gray text-whitesoft font-inter text-base rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-orange transition-all duration-300 resize-none"
                placeholder="Tell us about your security requirements..."
              />
            </div>

            {error && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="p-4 bg-red-500/10 border border-red-500/30 rounded-xl"
              >
                <p className="font-inter text-sm text-red-400">{error}</p>
              </motion.div>
            )}

            {isSubmitted && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="p-4 bg-brand-orange/10 border border-brand-orange/30 rounded-xl"
              >
                <p className="font-inter text-sm text-brand-orange">
                  ✓ Message sent successfully! Our team will respond within 24 hours.
                </p>
              </motion.div>
            )}

            <button
              type="submit"
              disabled={isSubmitting || isSubmitted}
              className="w-full px-10 py-5 bg-brand-orange text-white font-inter font-600 text-base rounded-xl hover:bg-brand-orange/90 hover:shadow-2xl hover:shadow-brand-orange/30 focus:outline-none focus:ring-2 focus:ring-brand-orange focus:ring-offset-2 focus:ring-offset-charcoal transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed hover:enabled:scale-[1.02]"
            >
              {isSubmitting ? 'Sending...' : isSubmitted ? 'Message Sent!' : 'Send Message'}
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
