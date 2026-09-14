import React, { useRef, useEffect, useState } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { Sphere, OrbitControls, PerspectiveCamera, Text } from '@react-three/drei';
import * as THREE from 'three';

interface FloatingOrbProps {
  position: [number, number, number];
  color: string;
  speed: number;
  size: number;
}

function FloatingOrb({ position, color, speed, size }: FloatingOrbProps) {
  const meshRef = useRef<THREE.Mesh>(null);
  const posY = position[1];

  useFrame(({ clock }) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += speed * 0.001;
      meshRef.current.rotation.y += speed * 0.0015;
      meshRef.current.position.y = posY + Math.sin(clock.elapsedTime * speed * 0.3) * 0.5;
    }
  });

  return (
    <Sphere ref={meshRef} args={[size, 128, 128]} position={position}>
      <meshStandardMaterial
        color={color}
        emissive={color}
        emissiveIntensity={0.6}
        metalness={0.85}
        roughness={0.15}
        wireframe={false}
      />
    </Sphere>
  );
}

function Particles() {
  const particlesRef = useRef<THREE.Points>(null);
  const particleCount = 100;

  useFrame(({ clock }) => {
    if (particlesRef.current) {
      particlesRef.current.rotation.x += 0.0001;
      particlesRef.current.rotation.y += 0.00015;
    }
  });

  const particlePositions = new Float32Array(particleCount * 3);
  for (let i = 0; i < particleCount * 3; i++) {
    particlePositions[i] = (Math.random() - 0.5) * 20;
  }

  return (
    <points ref={particlesRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={particleCount}
          array={particlePositions}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial size={0.1} color="#6c5ce7" sizeAttenuation />
    </points>
  );
}

export function Hero3DAdvanced() {
  return (
    <div className="w-full h-[600px] relative bg-gradient-to-b from-dark-bg to-dark-bg-2 rounded-3xl overflow-hidden">
      <Canvas>
        <PerspectiveCamera makeDefault position={[0, 0, 12]} fov={45} />
        <ambientLight intensity={0.6} />
        <pointLight position={[15, 10, 10]} intensity={1.2} color="#6c5ce7" />
        <pointLight position={[-15, -10, 10]} intensity={0.8} color="#00d4ff" />
        <pointLight position={[0, 20, 0]} intensity={0.5} />

        <Particles />
        
        <FloatingOrb position={[-4, 0, 0]} color="#6c5ce7" speed={1.2} size={1.2} />
        <FloatingOrb position={[4, 0, 0]} color="#00d4ff" speed={1.5} size={1} />
        <FloatingOrb position={[0, 4, -2]} color="#a29bfe" speed={2} size={0.8} />
        <FloatingOrb position={[0, -3, 0]} color="#fd79a8" speed={1.8} size={0.9} />

        <OrbitControls
          enableZoom={false}
          enablePan={false}
          autoRotate
          autoRotateSpeed={1.5}
          rotateSpeed={0.5}
        />
      </Canvas>

      <div className="absolute inset-0 bg-gradient-to-t from-dark-bg/50 to-transparent pointer-events-none" />
    </div>
  );
}
