import Image from 'next/image';

export default function Hero() {
  return (
    <section className="hero-section relative flex min-h-screen items-center pt-32 pb-24">
      {/* Background Video - Desktop */}
      <video 
        className="bg-video hidden md:block"
        autoPlay 
        muted 
        loop 
        playsInline
        poster="/images/drone1.jpg"
      >
        <source src="/videos/video1_hero_drone.mp4.mp4" type="video/mp4" />
      </video>

      {/* Background Image - Mobile */}
      <img 
        src="/images/drone1.jpg" 
        alt="Hero background"
        className="bg-video md:hidden"
      />

      {/* Dark Gradient Overlay */}
      <div className="overlay-dark" aria-hidden="true"></div>

      {/* Optional: Logo Watermark (top-right) */}
      <div className="absolute right-8 top-24 opacity-[0.06] pointer-events-none hidden lg:block z-10">
        <Image 
          src="/images/vyomgarud_logo.jpg" 
          alt="VyomGarud Watermark" 
          width={180} 
          height={180}
          className="select-none"
        />
      </div>

      {/* Main Content */}
      <div className="content-front">
        <div className="container">
          <div className="max-w-3xl">
            {/* Eyebrow Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-brand-orange/10 border border-brand-orange/30 rounded-full mb-6">
              <div className="w-2 h-2 bg-brand-orange rounded-full animate-pulse"></div>
              <span className="font-inter text-sm text-brand-orange font-medium uppercase tracking-wide">
                Military-Grade Defense
              </span>
            </div>

            {/* Headline */}
            <h1 className="font-montserrat font-bold text-5xl sm:text-6xl lg:text-7xl text-white leading-[1.05] tracking-tight uppercase mb-6">
              Defend Your<br />
              <span className="text-brand-orange">Airspace</span>
            </h1>

            {/* Subheading */}
            <p className="font-inter text-lg sm:text-xl text-gray500 mb-10 leading-relaxed max-w-2xl">
              Military-grade UAV detection and neutralization systems. 
              Trusted by defense forces and critical infrastructure worldwide.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 mb-16">
              <a
                href="#contact"
                className="inline-flex items-center justify-center px-8 py-4 bg-brand-orange text-white font-inter font-semibold text-base rounded hover:bg-brand-orange/90 transition-all duration-300"
              >
                Request Demo
              </a>
              <a
                href="#capabilities"
                className="inline-flex items-center justify-center px-8 py-4 border-2 border-white/40 text-white font-inter font-semibold text-base rounded hover:bg-white/5 transition-all duration-300"
              >
                View Capabilities
              </a>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-3 gap-8 pt-8 border-t border-line-gray">
              <div>
                <div className="font-montserrat font-bold text-3xl text-brand-orange mb-1">5km</div>
                <div className="font-inter text-sm text-gray500">Detection Range</div>
              </div>
              <div>
                <div className="font-montserrat font-bold text-3xl text-brand-orange mb-1">99.8%</div>
                <div className="font-inter text-sm text-gray500">Accuracy</div>
              </div>
              <div>
                <div className="font-montserrat font-bold text-3xl text-brand-orange mb-1">24/7</div>
                <div className="font-inter text-sm text-gray500">Active Defense</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
