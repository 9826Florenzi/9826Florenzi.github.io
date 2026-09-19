import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Float, useScroll } from '@react-three/drei';
import AIBot from './AIBot';

export default function Experience() {
  const scrollData = useScroll();
  const groupRef = useRef();

  useFrame((state) => {
    if (groupRef.current && scrollData) {
      const offset = scrollData.offset; // goes from 0 to 1 as you scroll
      
      // 1. Base vertical movement to follow the scroll
      // The total scroll distance for 4 pages is roughly 15 units down
      const baseY = -offset * 15;
      
      // 2. Dynamic X movement (swapping sides)
      // Page 1 (0): Right side (x = 3)
      // Page 2 (0.33): Left side (x = -3)
      // Page 3 (0.66): Right side (x = 3)
      // Page 4 (1.0): Center (x = 0)
      let targetX = 3;
      if (offset < 0.15) targetX = 4;
      else if (offset < 0.5) targetX = -4;
      else if (offset < 0.85) targetX = 4;
      else targetX = 0;

      // 3. Smooth interpolation (lerp) for X and Y to make it feel natural
      groupRef.current.position.x += (targetX - groupRef.current.position.x) * 0.05;
      groupRef.current.position.y += (baseY - groupRef.current.position.y) * 0.1;

      // 4. Dynamic Rotation (turning to "point/look" at the text)
      // If it's on the right (x > 0), it should look left (negative Y rotation)
      const targetRotationY = groupRef.current.position.x > 0 ? -0.5 : 0.5;
      groupRef.current.rotation.y += (targetRotationY - groupRef.current.rotation.y) * 0.05;
      
      // Add a slight tilt based on vertical movement
      groupRef.current.rotation.x = Math.sin(state.clock.elapsedTime) * 0.1;
    }
  });

  return (
    <>
      <ambientLight intensity={0.8} />
      <directionalLight position={[10, 10, 5]} intensity={1.5} />
      
      <group ref={groupRef}>
        <Float speed={2} rotationIntensity={0.2} floatIntensity={1}>
          <AIBot />
        </Float>
      </group>
    </>
  );
}
