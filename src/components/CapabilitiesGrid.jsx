'use client';

const CAPABILITIES = [
  {
    title: 'RF Detection & Tracking',
    description:
      'Multi-band RF analytics identify unauthorized UAV signals within a 5km perimeter and provide continuous telemetry for command units.',
  },
  {
    title: 'Electromagnetic Countermeasures',
    description:
      'Directional jamming disrupts hostile links without affecting civilian networks. Response profiles are tailored to mission rules of engagement.',
  },
  {
    title: 'Autonomous Threat Response',
    description:
      'Adaptive AI classifies flight patterns and deploys countermeasures with operator oversight, ensuring immediate neutralization when required.',
  },
  {
    title: 'Command Integration',
    description:
      'Standards-based interfaces connect to existing C2 and SOC environments, providing unified situational awareness across multiple facilities.',
  },
];

export default function CapabilitiesGrid() {
  return (
    <section id="capabilities" className="bg-charcoal py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="space-y-4 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-brand-orange">Capabilities</p>
          <h2 className="text-3xl font-semibold text-white sm:text-4xl">
            Integrated Counter-UAV Architecture
          </h2>
          <p className="mx-auto max-w-3xl text-base text-gray500">
            VyomGarud platforms deploy modular sensors, secure communications, and coordinated countermeasures designed for layered airspace defense.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
          {CAPABILITIES.map((capability) => (
            <div key={capability.title} className="h-full rounded-xl border border-line-gray bg-steel-900/60 p-6">
              <h3 className="text-lg font-semibold text-white">{capability.title}</h3>
              <p className="mt-4 text-sm text-gray500">{capability.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
