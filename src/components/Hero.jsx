'use client';

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative flex min-h-screen items-center pt-32 pb-24"
    >
      <div className="absolute inset-0 z-0 overflow-hidden">
        <video
          autoPlay
          muted
          loop
          playsInline
          poster="/images/drone1.jpg"
          className="h-full w-full object-cover"
        >
          <source src="/videos/video1_hero_drone.mp4.mp4" type="video/mp4" />
        </video>
      </div>
      <div className="absolute inset-0 z-10 bg-gradient-to-b from-black/80 via-black/70 to-black/80" />

      <div className="relative z-20 w-full">
        <div className="mx-auto flex max-w-7xl flex-col gap-12 px-6 lg:flex-row lg:items-center">
          <div className="max-w-2xl space-y-6">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-orange">Military-Grade Defense</p>
            <h1 className="text-4xl font-semibold leading-tight text-white sm:text-5xl lg:text-6xl">
              Secure The Skies With Precision Counter-UAV Systems
            </h1>
            <p className="text-base text-gray500 sm:text-lg">
              VyomGarud delivers end-to-end UAV detection, tracking, and neutralization for critical infrastructure and defense agencies. Proven reliability in the most demanding environments.
            </p>
            <div className="flex flex-col gap-4 sm:flex-row">
              <a
                href="#contact"
                className="rounded-md bg-brand-orange px-6 py-3 text-center text-sm font-semibold text-white transition hover:bg-brand-orange/90"
              >
                Request a Consultation
              </a>
              <a
                href="#capabilities"
                className="rounded-md border border-white/40 px-6 py-3 text-center text-sm font-semibold text-white transition hover:border-white"
              >
                Explore Capabilities
              </a>
            </div>
          </div>

          <div className="grid w-full gap-6 text-sm text-gray300 sm:grid-cols-3 lg:w-auto lg:flex lg:flex-col">
            <div>
              <p className="text-3xl font-semibold text-white">5km</p>
              <p>Detection radius with real-time telemetry.</p>
            </div>
            <div>
              <p className="text-3xl font-semibold text-white">99.8%</p>
              <p>Signal classification accuracy in live deployments.</p>
            </div>
            <div>
              <p className="text-3xl font-semibold text-white">24/7</p>
              <p>Operational coverage with autonomous response.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
