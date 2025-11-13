import NavBar from '../src/components/NavBar';
import Hero from '../src/components/Hero';
import About from '../src/components/About';
import CapabilitiesGrid from '../src/components/CapabilitiesGrid';
import Highlights from '../src/components/Highlights';
import ContactForm from '../src/components/ContactForm';

export default function Home() {
  return (
    <>
      <NavBar />
      <main className="bg-charcoal">
        <Hero />
        <About />
        <CapabilitiesGrid />
        <Highlights />
        <ContactForm />
        
        {/* Footer */}
        <footer role="contentinfo" className="section-spacing bg-steel-900 border-t border-whitesoft/5">
          <div className="container-custom">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
              {/* Brand */}
              <div>
                <h3 className="font-montserrat font-700 text-xl text-whitesoft mb-4">VyomGarud</h3>
                <p className="font-inter text-sm text-whitesoft/60 leading-relaxed">
                  Military-grade counter-UAV defense systems for critical infrastructure worldwide.
                </p>
              </div>

              {/* Quick Links */}
              <nav aria-label="Footer navigation">
                <h4 className="font-montserrat font-600 text-sm text-whitesoft mb-4 uppercase tracking-wider">Navigation</h4>
                <ul className="space-y-3" role="list">
                  <li><a href="#about" className="font-inter text-sm text-whitesoft/60 hover:text-brand-orange transition-colors">About</a></li>
                  <li><a href="#capabilities" className="font-inter text-sm text-whitesoft/60 hover:text-brand-orange transition-colors">Capabilities</a></li>
                  <li><a href="/technology" className="font-inter text-sm text-whitesoft/60 hover:text-brand-orange transition-colors">Technology</a></li>
                  <li><a href="/products" className="font-inter text-sm text-whitesoft/60 hover:text-brand-orange transition-colors">Products</a></li>
                  <li><a href="#contact" className="font-inter text-sm text-whitesoft/60 hover:text-brand-orange transition-colors">Contact</a></li>
                </ul>
              </nav>

              {/* Contact Info */}
              <div>
                <h4 className="font-montserrat font-600 text-sm text-whitesoft mb-4 uppercase tracking-wider">Contact</h4>
                <ul className="space-y-3" role="list">
                  <li className="font-inter text-sm text-whitesoft/60">defense@vyomgarud.com</li>
                  <li className="font-inter text-sm text-whitesoft/60">Global Operations</li>
                </ul>
                {/* Social Icons - 24x24 */}
                <div className="flex gap-4 mt-6">
                  <a href="#" aria-label="LinkedIn" className="text-whitesoft/40 hover:text-brand-orange transition-colors">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                    </svg>
                  </a>
                  <a href="#" aria-label="Twitter" className="text-whitesoft/40 hover:text-brand-orange transition-colors">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                    </svg>
                  </a>
                </div>
              </div>
            </div>

            {/* Bottom Bar */}
            <div className="pt-8 border-t border-whitesoft/5 flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="font-inter text-xs text-whitesoft/50">
                © 2025 VyomGarud Defense Systems. All rights reserved.
              </p>
              <div className="flex gap-6">
                <a href="#" className="font-inter text-xs text-whitesoft/50 hover:text-brand-orange transition-colors">Privacy Policy</a>
                <a href="#" className="font-inter text-xs text-whitesoft/50 hover:text-brand-orange transition-colors">Terms of Service</a>
              </div>
            </div>
          </div>
        </footer>
      </main>
    </>
  );
}
