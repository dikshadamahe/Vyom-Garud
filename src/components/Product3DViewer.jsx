'use client';

import { Canvas } from '@react-three/fiber';
import { OrbitControls, PerspectiveCamera, Environment } from '@react-three/drei';
import { Suspense } from 'react';

function PlaceholderModel() {
  return (
    <mesh>
      <boxGeometry args={[2, 2, 2]} />
      <meshStandardMaterial color="#FF7B00" wireframe />
    </mesh>
  );
}

function Scene({ modelId }) {
  return (
    <>
      <PerspectiveCamera makeDefault position={[0, 0, 5]} />
      <OrbitControls
        enablePan={false}
        enableZoom={true}
        enableRotate={true}
        minDistance={3}
        maxDistance={8}
        autoRotate
        autoRotateSpeed={0.5}
      />
      <ambientLight intensity={0.5} />
      <directionalLight position={[10, 10, 5]} intensity={1} />
      <directionalLight position={[-10, -10, -5]} intensity={0.3} />
      <Suspense fallback={<PlaceholderModel />}>
        <PlaceholderModel />
      </Suspense>
      <Environment preset="city" />
    </>
  );
}

export default function Product3DViewer({ modelId }) {
  return (
    <div className="w-full h-96 bg-steel-900/50 rounded-xl overflow-hidden border border-whitesoft/10 relative">
      <Canvas>
        <Scene modelId={modelId} />
      </Canvas>
      <div className="absolute bottom-4 left-4 bg-charcoal/80 backdrop-blur-sm px-4 py-2 rounded-lg border border-brand-orange/30">
        <p className="font-inter text-xs text-whitesoft/70">
          Drag to rotate • Scroll to zoom
        </p>
      </div>
    </div>
  );
}
