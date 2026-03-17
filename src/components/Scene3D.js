// src/components/Scene3D.js
import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { MeshDistortMaterial, Sphere } from '@react-three/drei';

const AnimatedBlob = () => {
  const sphereRef = useRef();

  // Slowly rotate the sphere over time
  useFrame(({ clock }) => {
    sphereRef.current.rotation.x = clock.getElapsedTime() * 0.1;
    sphereRef.current.rotation.y = clock.getElapsedTime() * 0.15;
  });

  return (
    <Sphere ref={sphereRef} visible args={[1, 100, 200]} scale={2.2}>
      <MeshDistortMaterial
        color="#ff4d24"     // Your theme's accent color
        attach="material"
        distort={0.4}       // How much the shape warps
        speed={1.5}         // How fast it warps
        roughness={0.2}
        metalness={0.8}
        wireframe={true}    // Gives it that tech/engineering look
      />
    </Sphere>
  );
};

const Scene3D = () => {
  return (
    // This wrapper ensures it stays perfectly in the background
    <div className="canvas-container">
      <Canvas camera={{ position: [0, 0, 5] }}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 10]} intensity={1} />
        <AnimatedBlob />
      </Canvas>
    </div>
  );
};

export default Scene3D;