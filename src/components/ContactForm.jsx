'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [focusedField, setFocusedField] = useState(null);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
        ease: [0.4, 0, 0.2, 1],
      },
    },
  };

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
      className="relative bg-steel-900 py-[120px] overflow-hidden"
    >
      {/* Map Grid Pattern Background */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,123,0,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,123,0,0.1)_1px,transparent_1px)] bg-[size:40px_40px]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(255,123,0,0.15),transparent_50%)]"></div>
      </div>

      {/* Animated Grid Lines */}
      <motion.div
        animate={{ opacity: [0.1, 0.3, 0.1] }}
        transition={{ duration: 4, repeat: Infinity }}
        className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand-orange to-transparent"
      />
      <motion.div
        animate={{ opacity: [0.1, 0.3, 0.1] }}
        transition={{ duration: 4, repeat: Infinity, delay: 2 }}
        className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand-orange to-transparent"
      />

      <div className="relative z-10 max-w-4xl mx-auto px-8 lg:px-12">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-brand-orange/10 border border-brand-orange/30 rounded-full mb-6"
          >
            <span className="font-inter text-sm text-brand-orange font-medium">Contact Us</span>
          </motion.div>

          <h2 className="font-montserrat font-bold text-4xl md:text-5xl text-white leading-[1.1] tracking-tight mb-8">
            Get in Touch
          </h2>
          <p className="font-inter text-lg text-gray500">
            Request a consultation or demo for your facility
          </p>
        </motion.div>

        {/* Form */}
        <motion.form
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          onSubmit={handleSubmit}
          className="space-y-6"
        >
          {/* Name Input */}
          <motion.div
            variants={itemVariants}
            className="relative"
          >
            <label
              htmlFor="name"
              className="block font-inter font-medium text-sm text-whitesoft mb-2"
            >
              Full Name
            </label>
            <div className="relative">
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                onFocus={() => setFocusedField('name')}
                onBlur={() => setFocusedField(null)}
                required
                className="w-full px-6 py-4 bg-steel-800 border-2 border-line-gray text-white font-inter text-base rounded focus:outline-none focus:border-brand-orange transition-all duration-300"
                placeholder="John Doe"
              />
              {focusedField === 'name' && (
                <motion.div
                  layoutId="input-highlight"
                  className="absolute inset-0 border-2 border-brand-orange rounded pointer-events-none"
                  transition={{ duration: 0.3 }}
                />
              )}
            </div>
          </motion.div>

          {/* Email Input */}
          <motion.div
            variants={itemVariants}
            className="relative"
          >
            <label
              htmlFor="email"
              className="block font-inter font-medium text-sm text-whitesoft mb-2"
            >
              Email Address
            </label>
            <div className="relative">
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                onFocus={() => setFocusedField('email')}
                onBlur={() => setFocusedField(null)}
                required
                className="w-full px-6 py-4 bg-steel-800 border-2 border-line-gray text-white font-inter text-base rounded focus:outline-none focus:border-brand-orange transition-all duration-300"
                placeholder="john@company.com"
              />
              {focusedField === 'email' && (
                <motion.div
                  layoutId="input-highlight"
                  className="absolute inset-0 border-2 border-brand-orange rounded pointer-events-none"
                  transition={{ duration: 0.3 }}
                />
              )}
            </div>
          </motion.div>

          {/* Message Input */}
          <motion.div
            variants={itemVariants}
            className="relative"
          >
            <label
              htmlFor="message"
              className="block font-inter font-medium text-sm text-whitesoft mb-2"
            >
              Message
            </label>
            <div className="relative">
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                onFocus={() => setFocusedField('message')}
                onBlur={() => setFocusedField(null)}
                required
                rows={6}
                className="w-full px-6 py-4 bg-steel-800 border-2 border-line-gray text-white font-inter text-base rounded focus:outline-none focus:border-brand-orange transition-all duration-300 resize-none"
                placeholder="Tell us about your security requirements..."
              />
              {focusedField === 'message' && (
                <motion.div
                  layoutId="input-highlight"
                  className="absolute inset-0 border-2 border-brand-orange rounded pointer-events-none"
                  transition={{ duration: 0.3 }}
                />
              )}
            </div>
          </motion.div>

          {/* Submit Button */}
          <motion.button
            type="submit"
            variants={itemVariants}
            whileHover={{ scale: 1.02, y: -2 }}
            whileTap={{ scale: 0.98 }}
            className="group relative w-full px-8 py-4 bg-brand-orange text-white font-inter font-semibold text-base rounded hover:bg-brand-orange/90 hover:shadow-glow-orange transition-all duration-300 overflow-hidden"
          >
            <span className="relative z-10">Send Message</span>
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
              initial={{ x: '-100%' }}
              whileHover={{ x: '100%' }}
              transition={{ duration: 0.6 }}
            />
          </motion.button>
        </motion.form>
      </div>
    </section>
  );
}
