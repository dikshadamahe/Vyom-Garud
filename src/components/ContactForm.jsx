'use client';

import { useState } from 'react';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    message: '',
  });
  
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    
    // Simulate successful submission
    setIsSubmitted(true);
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setFormData({ fullName: '', email: '', message: '' });
      setIsSubmitted(false);
    }, 3000);
  };

  return (
    <section id="contact" className="section bg-steel-900">
      <div className="container mx-auto px-6 max-w-4xl">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-brand-orange/10 border border-brand-orange/30 rounded-full mb-6">
            <span className="font-inter text-sm text-brand-orange font-medium uppercase tracking-wide">Contact Us</span>
          </div>

          <h2 className="font-montserrat font-bold text-4xl md:text-5xl text-white mb-4">
            Get in Touch
          </h2>
          <p className="font-inter text-lg text-whitesoft/90">
            Request a consultation or demo for your facility
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Full Name Input */}
          <div>
            <label
              htmlFor="fullName"
              className="block font-inter font-medium text-sm text-white mb-2"
            >
              Full Name
            </label>
            <input
              type="text"
              id="fullName"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              required
              aria-required="true"
              className="w-full px-6 py-4 bg-steel-800 border-2 border-line-gray text-white font-inter text-base rounded-lg focus:outline-none focus:border-brand-orange transition-colors duration-300"
              placeholder="John Doe"
            />
          </div>

          {/* Email Input */}
          <div>
            <label
              htmlFor="email"
              className="block font-inter font-medium text-sm text-white mb-2"
            >
              Email Address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              aria-required="true"
              className="w-full px-6 py-4 bg-steel-800 border-2 border-line-gray text-white font-inter text-base rounded-lg focus:outline-none focus:border-brand-orange transition-colors duration-300"
              placeholder="john@company.com"
            />
          </div>

          {/* Message Input */}
          <div>
            <label
              htmlFor="message"
              className="block font-inter font-medium text-sm text-white mb-2"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              aria-required="true"
              rows={6}
              className="w-full px-6 py-4 bg-steel-800 border-2 border-line-gray text-white font-inter text-base rounded-lg focus:outline-none focus:border-brand-orange transition-colors duration-300 resize-none"
              placeholder="Tell us about your security requirements..."
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={isSubmitted}
            className="w-full px-8 py-4 bg-brand-orange text-white font-inter font-semibold text-base rounded-lg transition-all duration-300 hover:bg-brand-orange/90 focus:outline-none focus:ring-2 focus:ring-brand-orange focus:ring-offset-2 focus:ring-offset-steel-900 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isSubmitted ? 'Message Sent!' : 'Send Message'}
          </button>

          {/* Success Message */}
          {isSubmitted && (
            <div className="text-center py-4">
              <p className="font-inter text-sm text-brand-orange">
                Thank you for your message. We'll get back to you soon.
              </p>
            </div>
          )}
        </form>
      </div>
    </section>
  );
}
