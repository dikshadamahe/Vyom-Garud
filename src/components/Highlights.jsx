'use client';

const HIGHLIGHTS = [
  {
    title: 'NATO AQAP Alignment',
    description: 'Processes and hardware verified to align with NATO quality assurance standards for mission-critical systems.',
  },
  {
    title: 'Rapid Deployment',
    description: 'Modular kits install in days, integrating with existing surveillance, radar, and command-and-control infrastructures.',
  },
  {
    title: 'Operational Intelligence',
    description: 'Continuous telemetry with operator dashboards enables forensic analysis and real-time decision support.',
  },
];

export default function Highlights() {
  return (
    <section id="highlights" className="bg-steel-900 py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="space-y-4 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-brand-orange">Highlights</p>
          <h2 className="text-3xl font-semibold text-white sm:text-4xl">
            Operational Readiness Metrics
          </h2>
          <p className="mx-auto max-w-3xl text-base text-gray500">
            VyomGarud systems are engineered to meet the strictest defense and aerospace requirements while remaining maintainable for operators and integrators.
          </p>
        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {HIGHLIGHTS.map((item) => (
            <div key={item.title} className="rounded-xl border border-line-gray bg-charcoal/60 p-6 text-left">
              <h3 className="text-lg font-semibold text-white">{item.title}</h3>
              <p className="mt-4 text-sm text-gray500">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
