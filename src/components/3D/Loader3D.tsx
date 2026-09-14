import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Sphere, Torus, PerspectiveCamera } from '@react-three/drei';
import * as THREE from 'three';

function AnimatedTorus() {
  const torusRef = useRef<THREE.Mesh>(null);

  useFrame(({ clock }) => {
    if (torusRef.current) {
      torusRef.current.rotation.x += 0.01;
      torusRef.current.rotation.y += 0.015;
    }
  });

  return (
    <Torus ref={torusRef} args={[2, 0.6, 64, 100]}>
      <meshStandardMaterial
        color="#6c5ce7"
        emissive="#00d4ff"
        emissiveIntensity={0.5}
        wireframe={false}
      />
    </Torus>
  );
}

export function Loader3D() {
  return (
    <div className="w-20 h-20">
      <Canvas>
        <PerspectiveCamera makeDefault position={[0, 0, 4]} />
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={1} />
        <AnimatedTorus />
      </Canvas>
    </div>
  );
}
