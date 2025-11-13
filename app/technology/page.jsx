import NavBar from '../../src/components/NavBar';
import CapabilitiesGrid from '../../src/components/CapabilitiesGrid';
import { m as motion } from 'framer-motion';

export default function TechnologyPage() {
  return (
    <>
      <NavBar />
      <main className="bg-charcoal">
        {/* Hero Section */}
        <section className="section-spacing pt-32 bg-gradient-to-br from-charcoal via-steel-900 to-charcoal relative overflow-hidden">
          <div className="tactical-grid" aria-hidden="true"></div>
          <div className="container-custom relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <div className="accent-line mx-auto mb-8"></div>
              <h1 className="headline-hero text-whitesoft mb-8">
                Advanced <span className="text-brand-orange">Technology</span>
              </h1>
              <p className="body-large text-whitesoft/75 max-w-2xl mx-auto">
                Our counter-UAV systems leverage cutting-edge RF detection, AI-powered threat analysis, 
                and multi-layered countermeasures to provide comprehensive airspace protection.
              </p>
            </div>
          </div>
        </section>

        {/* Capabilities Grid */}
        <CapabilitiesGrid />

        {/* Technical Specifications */}
        <section className="section-spacing bg-steel-900 relative overflow-hidden">
          <div className="container-custom relative z-10">
            <div className="text-center mb-16">
              <div className="accent-line mx-auto"></div>
              <h2 className="headline-section text-whitesoft mb-6">
                Technical <span className="text-brand-orange">Specifications</span>
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: 'Detection Range',
                  specs: ['5km+ omnidirectional', '360° coverage', 'Multi-frequency scanning'],
                },
                {
                  title: 'Response Time',
                  specs: ['<2 seconds detection', 'Instant threat classification', 'Automated countermeasures'],
                },
                {
                  title: 'Accuracy',
                  specs: ['99.8% threat identification', 'False positive rate <0.1%', 'AI-enhanced recognition'],
                },
                {
                  title: 'Environmental',
                  specs: ['-40°C to +60°C operation', 'IP67 weatherproofing', 'Military-grade durability'],
                },
                {
                  title: 'Integration',
                  specs: ['Open API architecture', 'C2 system compatibility', 'Real-time telemetry'],
                },
                {
                  title: 'Power',
                  specs: ['Solar + battery backup', 'Low power consumption', '72h autonomous operation'],
                },
              ].map((spec, idx) => (
                <div key={idx} className="glass-hud p-6 rounded-xl">
                  <h3 className="font-montserrat font-700 text-xl text-whitesoft mb-4">{spec.title}</h3>
                  <ul className="space-y-2">
                    {spec.specs.map((item, i) => (
                      <li key={i} className="font-inter text-sm text-whitesoft/70 flex items-start">
                        <span className="text-brand-orange mr-2">▸</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="section-spacing bg-charcoal">
          <div className="container-custom">
            <div className="glass-hud p-12 rounded-2xl text-center max-w-3xl mx-auto">
              <h2 className="headline-section text-whitesoft mb-6">
                Ready to Deploy?
              </h2>
              <p className="body-large text-whitesoft/75 mb-8">
                Contact our team to discuss your specific requirements and deployment scenarios.
              </p>
              <a
                href="/#contact"
                className="inline-flex items-center px-10 py-5 bg-brand-orange text-white font-inter font-semibold text-base rounded-xl hover:bg-brand-orange/90 hover:shadow-2xl hover:shadow-brand-orange/30 transition-all duration-300 hover:scale-105"
              >
                Request Consultation
                <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </a>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer role="contentinfo" className="section-spacing bg-steel-900 border-t border-whitesoft/5">
          <div className="container-custom">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
              <div>
                <h3 className="font-montserrat font-700 text-xl text-whitesoft mb-4">VyomGarud</h3>
                <p className="font-inter text-sm text-whitesoft/60 leading-relaxed">
                  Military-grade counter-UAV defense systems for critical infrastructure worldwide.
                </p>
              </div>
              <nav aria-label="Footer navigation">
                <h4 className="font-montserrat font-600 text-sm text-whitesoft mb-4 uppercase tracking-wider">Navigation</h4>
                <ul className="space-y-3" role="list">
                  <li><a href="/#about" className="font-inter text-sm text-whitesoft/60 hover:text-brand-orange transition-colors">About</a></li>
                  <li><a href="/#capabilities" className="font-inter text-sm text-whitesoft/60 hover:text-brand-orange transition-colors">Capabilities</a></li>
                  <li><a href="/technology" className="font-inter text-sm text-whitesoft/60 hover:text-brand-orange transition-colors">Technology</a></li>
                  <li><a href="/products" className="font-inter text-sm text-whitesoft/60 hover:text-brand-orange transition-colors">Products</a></li>
                </ul>
              </nav>
              <div>
                <h4 className="font-montserrat font-600 text-sm text-whitesoft mb-4 uppercase tracking-wider">Contact</h4>
                <ul className="space-y-3" role="list">
                  <li className="font-inter text-sm text-whitesoft/60">defense@vyomgarud.com</li>
                  <li className="font-inter text-sm text-whitesoft/60">Global Operations</li>
                </ul>
              </div>
            </div>
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
