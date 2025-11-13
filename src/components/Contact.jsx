// src/components/Contact.jsx
'use client';
import { motion } from 'framer-motion';
import { useState } from 'react';

export default function Contact() {
  const [formState, setFormState] = useState({ name: '', email: '', message: '', organization: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      alert('Thank you for your inquiry. Our team will contact you within 24 hours.');
      setFormState({ name: '', email: '', message: '', organization: '' });
      setIsSubmitting(false);
    }, 1000);
  };

  const contactInfo = [
    { icon: '📧', label: 'Email', value: 'defense@vyomgarud.com' },
    { icon: '📞', label: 'Phone', value: '+91 8881444693' },
    { icon: '📍', label: 'Location', value: 'Bangalore, India' },
  ];

  return (
    <section id="contact" className="section-padding relative overflow-hidden bg-gradient-to-b from-steel-900 via-charcoal to-steel-900">
      {/* Background Video - Full Coverage */}
      <div className="absolute inset-0 w-full h-full opacity-10 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute top-0 left-0 w-full h-full object-cover"
          style={{ objectFit: 'cover' }}
        >
          <source src="/videos/video4_blue_blob.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-charcoal/50 to-charcoal/50 z-10" />
      </div>
      
      {/* Background Gradient Orbs */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-br from-orange-500/20 to-red-500/10 rounded-full blur-[150px]" />
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-br from-blue-500/20 to-purple-500/10 rounded-full blur-[120px]" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-gradient-to-br from-purple-500/20 to-pink-500/10 rounded-full blur-[120px]" />
      
      <div className="container-custom relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Text Column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, margin: '-100px' }}
          >
            <p className="kicker mb-6">Contact Operations</p>
            <h2 className="headline-2 mb-8">
              Request a Demo or <span className="text-brand-orange">Speak with our Team</span>
            </h2>
            <p className="body-text mb-12">
              Speak with our defense solutions team to get a quote,
              request a live demo, or inquire about system integration.
              We respond to all inquiries within 24 hours.
            </p>

            {/* Contact Info Cards */}
            <div className="space-y-4">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={index}
                  className="glass-bg glass-border rounded-xl p-6 hover:border-brand-orange/50 transition-all duration-300"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="flex items-center gap-4">
                    <div className="text-3xl">{info.icon}</div>
                    <div>
                      <p className="font-inter text-sm text-whitesoft/60 mb-1">{info.label}</p>
                      <p className="font-montserrat font-semibold text-whitesoft">{info.value}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Form Column */}
          <motion.form 
            className="glass-bg glass-border rounded-2xl p-8 space-y-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true, margin: '-100px' }}
            onSubmit={handleSubmit}
          >
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <label className="block font-inter text-sm text-whitesoft/60 mb-2">
                Full Name *
              </label>
              <motion.input 
                type="text" 
                name="name" 
                placeholder="John Doe" 
                className="form-input" 
                required 
                value={formState.name}
                onChange={(e) => setFormState({...formState, name: e.target.value})}
                whileFocus={{ scale: 1.02, borderColor: '#FF7B00' }}
                transition={{ duration: 0.2 }}
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <label className="block font-inter text-sm text-whitesoft/60 mb-2">
                Work Email *
              </label>
              <motion.input 
                type="email" 
                name="email" 
                placeholder="john@company.com" 
                className="form-input" 
                required 
                value={formState.email}
                onChange={(e) => setFormState({...formState, email: e.target.value})}
                whileFocus={{ scale: 1.02, borderColor: '#FF7B00' }}
                transition={{ duration: 0.2 }}
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <label className="block font-inter text-sm text-whitesoft/60 mb-2">
                Organization
              </label>
              <motion.input 
                type="text" 
                name="organization" 
                placeholder="Your Organization" 
                className="form-input" 
                value={formState.organization}
                onChange={(e) => setFormState({...formState, organization: e.target.value})}
                whileFocus={{ scale: 1.02, borderColor: '#FF7B00' }}
                transition={{ duration: 0.2 }}
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <label className="block font-inter text-sm text-whitesoft/60 mb-2">
                Message *
              </label>
              <motion.textarea 
                name="message" 
                placeholder="Tell us about your requirements..." 
                rows={5} 
                className="form-input resize-none"
                required
                value={formState.message}
                onChange={(e) => setFormState({...formState, message: e.target.value})}
                whileFocus={{ scale: 1.02, borderColor: '#FF7B00' }}
                transition={{ duration: 0.2 }}
              />
            </motion.div>

            <motion.button 
              type="submit" 
              className="btn-primary w-full group disabled:opacity-50 disabled:cursor-not-allowed"
              disabled={isSubmitting}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.5 }}
              viewport={{ once: true }}
            >
              {isSubmitting ? (
                <motion.span
                  animate={{ rotate: 360 }}
                  transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                >
                  ⏳
                </motion.span>
              ) : (
                <>
                  Submit Request
                  <motion.svg 
                    className="w-5 h-5 ml-2" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                    animate={{ x: [0, 3, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </motion.svg>
                </>
              )}
            </motion.button>

            <p className="text-center font-inter text-xs text-whitesoft/40">
              By submitting, you agree to our privacy policy and terms of service.
            </p>
          </motion.form>
        </div>
      </div>
    </section>
  );
}

