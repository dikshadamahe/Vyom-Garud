'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  return (
    <section
      id="contact"
      className="relative bg-steel-900 py-32 overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(255,123,0,0.03),transparent_70%)]"></div>

      <div className="relative z-10 max-w-4xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
          className="text-center mb-16"
        >
          <h2 className="font-montserrat font-bold text-4xl md:text-5xl text-white mb-6">
            Get in Touch
          </h2>
          <p className="font-inter text-lg text-gray500">
            Request a consultation or demo for your facility
          </p>
        </motion.div>

        {/* Form */}
        <motion.form
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.4, 0, 0.2, 1] }}
          onSubmit={handleSubmit}
          className="space-y-6"
        >
          {/* Name Input */}
          <div>
            <label
              htmlFor="name"
              className="block font-inter font-medium text-sm text-whitesoft mb-2"
            >
              Full Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-6 py-4 bg-steel-800 border border-line-gray text-white font-inter text-base rounded focus:outline-none focus:border-brand-orange transition-all duration-300"
              placeholder="John Doe"
            />
          </div>

          {/* Email Input */}
          <div>
            <label
              htmlFor="email"
              className="block font-inter font-medium text-sm text-whitesoft mb-2"
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
              className="w-full px-6 py-4 bg-steel-800 border border-line-gray text-white font-inter text-base rounded focus:outline-none focus:border-brand-orange transition-all duration-300"
              placeholder="john@company.com"
            />
          </div>

          {/* Message Input */}
          <div>
            <label
              htmlFor="message"
              className="block font-inter font-medium text-sm text-whitesoft mb-2"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows={6}
              className="w-full px-6 py-4 bg-steel-800 border border-line-gray text-white font-inter text-base rounded focus:outline-none focus:border-brand-orange transition-all duration-300 resize-none"
              placeholder="Tell us about your security requirements..."
            />
          </div>

          {/* Submit Button */}
          <motion.button
            type="submit"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="w-full px-8 py-4 bg-brand-orange text-white font-inter font-semibold text-base rounded hover:bg-brand-orange/90 hover:shadow-glow-orange transition-all duration-300"
          >
            Send Message
          </motion.button>
        </motion.form>
      </div>
    </section>
  );
}
