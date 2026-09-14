import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Sphere, PerspectiveCamera } from '@react-three/drei';
import * as THREE from 'three';

interface ServiceCardProps {
  color: string;
  icon: string;
}

function RotatingService({ color, icon }: ServiceCardProps) {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame(({ clock }) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = Math.sin(clock.elapsedTime) * 0.3;
      meshRef.current.rotation.y += 0.01;
    }
  });

  return (
    <Sphere ref={meshRef} args={[0.8, 64, 64]}>
      <meshStandardMaterial color={color} emissive={color} emissiveIntensity={0.4} />
    </Sphere>
  );
}

export function Service3D({ color }: { color: string }) {
  return (
    <div className="w-full h-48 relative">
      <Canvas>
        <PerspectiveCamera makeDefault position={[0, 0, 3]} />
        <ambientLight intensity={0.7} />
        <pointLight position={[5, 5, 5]} intensity={1} />
        <RotatingService color={color} icon="" />
      </Canvas>
    </div>
  );
}
