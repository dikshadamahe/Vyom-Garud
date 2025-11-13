import NavBar from '../src/components/NavBar';
import Hero from '../src/components/Hero';
import About from '../src/components/About';
import CapabilitiesGrid from '../src/components/CapabilitiesGrid';
import Highlights from '../src/components/Highlights';
import ContactForm from '../src/components/ContactForm';

export default function Home() {
  return (
    <main className="min-h-screen bg-charcoal">
      <NavBar />
      <Hero />
      <About />
      <CapabilitiesGrid />
      <Highlights />
      <ContactForm />
      
      {/* Footer */}
      <footer className="bg-charcoal border-t border-line-gray py-16">
        <div className="max-w-7xl mx-auto px-8 lg:px-12">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="text-center md:text-left">
              <h3 className="font-montserrat font-bold text-xl text-white mb-2">
                VyomGarud
              </h3>
              <p className="font-inter text-sm text-gray500">
                Military-grade UAV defense systems
              </p>
            </div>
            
            <div className="flex gap-8">
              <a
                href="#about"
                className="font-inter text-sm text-gray500 hover:text-brand-orange transition-colors duration-300"
              >
                About
              </a>
              <a
                href="#capabilities"
                className="font-inter text-sm text-gray500 hover:text-brand-orange transition-colors duration-300"
              >
                Capabilities
              </a>
              <a
                href="#contact"
                className="font-inter text-sm text-gray500 hover:text-brand-orange transition-colors duration-300"
              >
                Contact
              </a>
            </div>
          </div>
          
          <div className="mt-8 pt-8 border-t border-line-gray text-center">
            <p className="font-inter text-sm text-gray500">
              © 2025 VyomGarud. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </main>
  );
}
