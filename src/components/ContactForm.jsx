'use client';

export default function ContactForm() {
  return (
    <section id="contact" className="section-padding bg-steel-900">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          {/* Left Column */}
          <div>
            <p className="kicker mb-6">Get in Touch</p>
            <h2 className="headline-2">Contact Operations</h2>
          </div>

          {/* Right Column - Form */}
          <div>
            <form className="flex flex-col gap-6">
              <input
                type="text"
                name="name"
                placeholder="Name"
                required
                className="bg-steel-800 border border-whitesoft/10 text-whitesoft rounded-lg px-6 py-4 focus:ring-2 focus:ring-brand-orange focus:border-brand-orange outline-none transition-all"
              />
              <input
                type="email"
                name="email"
                placeholder="Email"
                required
                className="bg-steel-800 border border-whitesoft/10 text-whitesoft rounded-lg px-6 py-4 focus:ring-2 focus:ring-brand-orange focus:border-brand-orange outline-none transition-all"
              />
              <input
                type="text"
                name="organization"
                placeholder="Organization"
                className="bg-steel-800 border border-whitesoft/10 text-whitesoft rounded-lg px-6 py-4 focus:ring-2 focus:ring-brand-orange focus:border-brand-orange outline-none transition-all"
              />
              <textarea
                name="message"
                placeholder="Message"
                rows={6}
                required
                className="bg-steel-800 border border-whitesoft/10 text-whitesoft rounded-lg px-6 py-4 focus:ring-2 focus:ring-brand-orange focus:border-brand-orange outline-none transition-all resize-none"
              ></textarea>
              <button type="submit" className="btn-primary">
                Submit Request
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
