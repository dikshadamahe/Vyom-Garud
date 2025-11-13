'use client';

import Image from 'next/image';

export default function About() {
  return (
    <section id="about" className="bg-steel-900 py-24">
      <div className="mx-auto flex max-w-7xl flex-col gap-12 px-6 lg:flex-row lg:items-center">
        <div className="flex-1 space-y-6">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-brand-orange">About VyomGarud</p>
          <h2 className="text-3xl font-semibold text-white sm:text-4xl">
            Proven Counter-UAV Technology For Critical Infrastructure
          </h2>
          <p className="text-base text-gray500">
            VyomGarud develops integrated counter-UAV platforms that combine wide-area RF detection, precision radar, and autonomous neutralization. Our mission-critical systems protect airspace for defense, aerospace, energy, and high-security facilities.
          </p>
          <p className="text-base text-gray500">
            Deployed across 12+ countries, our solutions are engineered to NATO standards and integrate seamlessly with existing command and control networks. Each installation is supported by dedicated threat intelligence and lifecycle support teams.
          </p>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
            {[
              { value: '5km+', label: 'Detection Radius' },
              { value: '99.8%', label: 'Signal Fidelity' },
              { value: '12+', label: 'Nations Secured' },
            ].map((item) => (
              <div key={item.label} className="rounded-lg border border-line-gray p-4">
                <p className="text-2xl font-semibold text-white">{item.value}</p>
                <p className="text-sm text-gray500">{item.label}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="flex-1">
          <div className="relative aspect-[4/3] overflow-hidden rounded-xl border border-line-gray">
            <Image
              src="/images/drone2.jpg"
              alt="VyomGarud counter-UAV system"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
