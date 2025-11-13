import Image from 'next/image';

export default function About() {
  return (
    <section id="about" className="section bg-steel-900 relative">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="relative">
            {/* Vertical Orange Accent Bar */}
            <div 
              className="absolute -left-6 top-0 w-2 h-12 bg-brand-orange rounded-full" 
              aria-hidden="true"
            ></div>

            <div className="inline-flex items-center gap-2 px-4 py-2 bg-brand-orange/10 border border-brand-orange/30 rounded-full mb-6">
              <span className="font-inter text-sm text-brand-orange font-medium uppercase tracking-wide">About Us</span>
            </div>

            <h2 className="text-3xl md:text-4xl font-heading tracking-wide text-white mb-6">
              VyomGarud Defense Systems
            </h2>

            <div className="space-y-6">
              <p className="text-base md:text-lg leading-relaxed text-whitesoft/90">
                VyomGarud delivers military-grade counter-UAV systems designed for defense agencies, 
                critical infrastructure, and high-security facilities worldwide. Our solutions combine 
                RF detection, active jamming, and autonomous threat response.
              </p>
              <p className="text-base md:text-lg leading-relaxed text-whitesoft/90">
                With deployments across government installations and enterprise sites, we provide 
                proven protection against unauthorized drone incursions. Our systems integrate 
                seamlessly with existing security architectures while maintaining zero false positives.
              </p>
              <p className="text-base md:text-lg leading-relaxed text-whitesoft/90">
                Trusted by defense forces in 12+ countries. Certified to NATO AQAP standards.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 mt-12 pt-8 border-t border-line-gray">
              <div>
                <div className="font-montserrat font-bold text-3xl text-brand-orange mb-2">5km+</div>
                <div className="font-inter text-sm text-whitesoft/80">Detection Range</div>
              </div>
              <div>
                <div className="font-montserrat font-bold text-3xl text-brand-orange mb-2">99.8%</div>
                <div className="font-inter text-sm text-whitesoft/80">Accuracy Rate</div>
              </div>
              <div>
                <div className="font-montserrat font-bold text-3xl text-brand-orange mb-2">12+</div>
                <div className="font-inter text-sm text-whitesoft/80">Countries</div>
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative">
            <div className="relative w-full aspect-square max-w-lg mx-auto rounded-xl overflow-hidden shadow-2xl shadow-black/40">
              <Image
                src="/images/drone2.jpg"
                alt="VyomGarud Defense Technology"
                fill
                sizes="(min-width: 1024px) 40vw, 100vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-brand-orange/10 via-transparent to-steel-900/30" aria-hidden="true"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
