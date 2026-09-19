import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Sphere, Cylinder, MeshDistortMaterial } from '@react-three/drei';

export default function AIBot() {
  const eyeRef = useRef();

  useFrame((state) => {
    // Make the "eye" look around
    if (eyeRef.current) {
      eyeRef.current.position.x = Math.sin(state.clock.elapsedTime * 2) * 0.2;
      eyeRef.current.position.y = Math.cos(state.clock.elapsedTime * 1.5) * 0.2;
    }
  });

  return (
    <group>
      {/* Bot Body */}
      <Sphere args={[1, 32, 32]}>
        <MeshDistortMaterial color="#7c3aed" attach="material" distort={0.2} speed={2} roughness={0.2} metalness={0.8} />
      </Sphere>

      {/* Bot Glowing Eye */}
      <Sphere ref={eyeRef} args={[0.3, 16, 16]} position={[0, 0, 0.9]}>
        <meshBasicMaterial color="#2dd4bf" />
      </Sphere>

      {/* Bot Antenna */}
      <Cylinder args={[0.05, 0.05, 1, 8]} position={[0, 1.2, 0]}>
        <meshStandardMaterial color="#cbd5e1" />
      </Cylinder>
      <Sphere args={[0.15, 16, 16]} position={[0, 1.7, 0]}>
        <meshBasicMaterial color="#ec4899" />
      </Sphere>
    </group>
  );
}
