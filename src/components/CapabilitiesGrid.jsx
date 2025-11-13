'use client';

import CapabilityCard from './CapabilityCard';

export default function CapabilitiesGrid() {
  const capabilities = [
    {
      icon: '🎯',
      title: 'RF Detection',
      description: 'Advanced radio frequency scanning detects unauthorized drones within 5km radius. Real-time threat classification and tracking with military-grade precision.',
    },
    {
      icon: '⚡',
      title: 'Active Jamming',
      description: 'Targeted signal disruption neutralizes hostile UAVs without collateral interference. Multi-band jamming technology for maximum effectiveness.',
    },
    {
      icon: '🛡️',
      title: 'Autonomous Defense',
      description: 'AI-powered threat assessment and response protocols. Automated countermeasures deploy instantly upon confirmed hostile detection.',
    },
    {
      icon: '📡',
      title: 'Network Integration',
      description: 'Seamless integration with existing security infrastructure. Centralized command and control for multi-site deployment scenarios.',
    },
  ];

  return (
    <section
      id="capabilities"
      className="relative bg-charcoal py-32 overflow-hidden"
    >
      {/* Background Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(47,47,47,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(47,47,47,0.1)_1px,transparent_1px)] bg-[size:64px_64px]"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-montserrat font-bold text-4xl md:text-5xl text-white mb-6">
            Capabilities
          </h2>
          <p className="font-inter text-lg text-gray500 max-w-2xl mx-auto">
            Enterprise-grade UAV defense systems engineered for critical infrastructure protection
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {capabilities.map((capability, index) => (
            <CapabilityCard
              key={index}
              icon={capability.icon}
              title={capability.title}
              description={capability.description}
              delay={index * 0.1}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
