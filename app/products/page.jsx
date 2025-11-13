'use client';

import NavBar from '../../src/components/NavBar';
import dynamic from 'next/dynamic';

const Product3DViewer = dynamic(() => import('../../src/components/Product3DViewer'), {
  ssr: false,
  loading: () => (
    <div className="w-full h-64 bg-steel-900/50 rounded-xl flex items-center justify-center">
      <div className="text-whitesoft/50 font-inter text-sm">Loading 3D Viewer...</div>
    </div>
  ),
});

export default function ProductsPage() {
  const products = [
    {
      id: 'vg-alpha',
      name: 'VyomGarud Alpha',
      category: 'Fixed Installation',
      description: 'Permanent counter-UAV defense system for critical infrastructure and military bases.',
      specs: {
        range: '5km omnidirectional',
        power: 'Hardwired + Solar backup',
        deployment: 'Fixed installation',
        coverage: '360° azimuth',
      },
      features: [
        'Multi-layered RF detection',
        'AI-powered threat classification',
        'Automated countermeasures',
        'C2 system integration',
      ],
    },
    {
      id: 'vg-bravo',
      name: 'VyomGarud Bravo',
      category: 'Mobile Unit',
      description: 'Rapid deployment counter-UAV system for tactical operations and temporary security.',
      specs: {
        range: '3km omnidirectional',
        power: 'Battery + Generator',
        deployment: '< 15 minutes setup',
        coverage: '360° azimuth',
      },
      features: [
        'Portable ruggedized design',
        'Quick deployment capability',
        'Battery autonomous operation',
        'Vehicle-mounted option',
      ],
    },
    {
      id: 'vg-charlie',
      name: 'VyomGarud Charlie',
      category: 'Handheld Unit',
      description: 'Man-portable counter-UAV device for close-range protection and tactical teams.',
      specs: {
        range: '1km directional',
        power: 'Rechargeable battery',
        deployment: 'Instant operation',
        coverage: '90° cone',
      },
      features: [
        'Lightweight design (< 3kg)',
        'Single-operator capable',
        'Directional jamming',
        'Extended battery life',
      ],
    },
  ];

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
                Our <span className="text-brand-orange">Products</span>
              </h1>
              <p className="body-large text-whitesoft/75 max-w-2xl mx-auto">
                Explore our range of counter-UAV defense systems designed for various operational environments 
                and deployment scenarios.
              </p>
            </div>
          </div>
        </section>

        {/* Products Grid */}
        <section className="section-spacing bg-charcoal">
          <div className="container-custom">
            <div className="space-y-24">
              {products.map((product, idx) => (
                <div
                  key={product.id}
                  className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                    idx % 2 === 1 ? 'lg:grid-flow-dense' : ''
                  }`}
                >
                  {/* 3D Viewer */}
                  <div className={idx % 2 === 1 ? 'lg:col-start-2' : ''}>
                    <Product3DViewer modelId={product.id} />
                  </div>

                  {/* Product Info */}
                  <div className={idx % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''}>
                    <div className="glass-hud p-8 rounded-2xl">
                      <div className="text-brand-orange font-inter text-xs uppercase tracking-wider mb-3">
                        {product.category}
                      </div>
                      <h2 className="font-montserrat font-700 text-3xl md:text-4xl text-whitesoft mb-4">
                        {product.name}
                      </h2>
                      <p className="body-large text-whitesoft/75 mb-8">{product.description}</p>

                      {/* Specs */}
                      <div className="mb-8 grid grid-cols-2 gap-4">
                        {Object.entries(product.specs).map(([key, value]) => (
                          <div key={key}>
                            <div className="font-inter text-xs text-whitesoft/50 uppercase tracking-wider mb-1">
                              {key}
                            </div>
                            <div className="font-inter text-sm text-whitesoft font-500">{value}</div>
                          </div>
                        ))}
                      </div>

                      {/* Features */}
                      <div className="mb-8">
                        <h3 className="font-montserrat font-600 text-sm text-whitesoft mb-4 uppercase tracking-wider">
                          Key Features
                        </h3>
                        <ul className="space-y-2">
                          {product.features.map((feature, i) => (
                            <li key={i} className="font-inter text-sm text-whitesoft/70 flex items-start">
                              <span className="text-brand-orange mr-2">▸</span>
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* CTA */}
                      <a
                        href="/#contact"
                        className="inline-flex items-center px-8 py-4 bg-brand-orange text-white font-inter font-semibold text-sm rounded-xl hover:bg-brand-orange/90 hover:shadow-2xl hover:shadow-brand-orange/30 transition-all duration-300 hover:scale-105"
                      >
                        Request Specs
                        <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Comparison Table */}
        <section className="section-spacing bg-steel-900">
          <div className="container-custom">
            <div className="text-center mb-16">
              <div className="accent-line mx-auto"></div>
              <h2 className="headline-section text-whitesoft mb-6">
                Product <span className="text-brand-orange">Comparison</span>
              </h2>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="border-b border-whitesoft/10">
                    <th className="text-left p-4 font-montserrat font-600 text-sm text-whitesoft uppercase tracking-wider">
                      Feature
                    </th>
                    {products.map((p) => (
                      <th
                        key={p.id}
                        className="p-4 font-montserrat font-600 text-sm text-whitesoft uppercase tracking-wider"
                      >
                        {p.name.split(' ')[1]}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-whitesoft/5">
                    <td className="p-4 font-inter text-sm text-whitesoft/60">Detection Range</td>
                    <td className="p-4 text-center font-inter text-sm text-whitesoft">5km</td>
                    <td className="p-4 text-center font-inter text-sm text-whitesoft">3km</td>
                    <td className="p-4 text-center font-inter text-sm text-whitesoft">1km</td>
                  </tr>
                  <tr className="border-b border-whitesoft/5">
                    <td className="p-4 font-inter text-sm text-whitesoft/60">Setup Time</td>
                    <td className="p-4 text-center font-inter text-sm text-whitesoft">Permanent</td>
                    <td className="p-4 text-center font-inter text-sm text-whitesoft">&lt; 15 min</td>
                    <td className="p-4 text-center font-inter text-sm text-whitesoft">Instant</td>
                  </tr>
                  <tr className="border-b border-whitesoft/5">
                    <td className="p-4 font-inter text-sm text-whitesoft/60">Power Source</td>
                    <td className="p-4 text-center font-inter text-sm text-whitesoft">Hardwired</td>
                    <td className="p-4 text-center font-inter text-sm text-whitesoft">Battery</td>
                    <td className="p-4 text-center font-inter text-sm text-whitesoft">Battery</td>
                  </tr>
                  <tr>
                    <td className="p-4 font-inter text-sm text-whitesoft/60">Coverage</td>
                    <td className="p-4 text-center font-inter text-sm text-whitesoft">360°</td>
                    <td className="p-4 text-center font-inter text-sm text-whitesoft">360°</td>
                    <td className="p-4 text-center font-inter text-sm text-whitesoft">90°</td>
                  </tr>
                </tbody>
              </table>
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
