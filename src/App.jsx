import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { ScrollControls } from '@react-three/drei';
import Experience from './components/Experience';
import ContentOverlay from './components/ContentOverlay';

export default function App() {
  return (
    <Canvas camera={{ position: [0, 0, 15], fov: 30 }}>
      <color attach="background" args={['#0f0c29']} />
      <Suspense fallback={null}>
        <ScrollControls pages={4} damping={0.1}>
          <Experience />
          <ContentOverlay />
        </ScrollControls>
      </Suspense>
    </Canvas>
  );
}
