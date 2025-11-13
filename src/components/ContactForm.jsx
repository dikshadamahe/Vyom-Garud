'use client';

import { useState } from 'react';

export default function ContactForm() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Integration point for form submission
  };

  return (
    <section id="contact" className="bg-charcoal py-24">
      <div className="mx-auto max-w-4xl px-6">
        <div className="space-y-4 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-brand-orange">Contact</p>
          <h2 className="text-3xl font-semibold text-white sm:text-4xl">Request A Strategic Assessment</h2>
          <p className="text-base text-gray500">
            Share your operational requirements and our defense specialists will arrange a tailored demonstration.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="mt-12 space-y-6 rounded-xl border border-line-gray bg-steel-900/70 p-8">
          <div className="grid gap-6 sm:grid-cols-2">
            <div className="flex flex-col gap-2">
              <label htmlFor="name" className="text-xs font-semibold uppercase tracking-wide text-gray500">
                Full Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                required
                value={formData.name}
                onChange={handleChange}
                className="rounded-md border border-line-gray bg-charcoal px-4 py-3 text-sm text-white focus:border-brand-orange focus:outline-none"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="email" className="text-xs font-semibold uppercase tracking-wide text-gray500">
                Email Address
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                value={formData.email}
                onChange={handleChange}
                className="rounded-md border border-line-gray bg-charcoal px-4 py-3 text-sm text-white focus:border-brand-orange focus:outline-none"
              />
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="message" className="text-xs font-semibold uppercase tracking-wide text-gray500">
              Mission Overview
            </label>
            <textarea
              id="message"
              name="message"
              rows={6}
              required
              value={formData.message}
              onChange={handleChange}
              className="rounded-md border border-line-gray bg-charcoal px-4 py-3 text-sm text-white focus:border-brand-orange focus:outline-none"
            />
          </div>

          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-xs text-gray500">Response within 24 hours. Secure handling of all submitted intelligence.</p>
            <button
              type="submit"
              className="rounded-md bg-brand-orange px-6 py-3 text-sm font-semibold text-white transition hover:bg-brand-orange/90"
            >
              Engage With VyomGarud
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
