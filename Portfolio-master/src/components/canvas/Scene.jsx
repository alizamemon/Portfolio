import React, { useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls, Stars, Float } from '@react-three/drei'

function SpinningKnot() {
  const knotRef = useRef()

  // Smooth rotation
  useFrame(() => {
    if (knotRef.current) {
      knotRef.current.rotation.x += 0.001
      knotRef.current.rotation.y += 0.002
    }
  })

  return (
    <Float floatIntensity={0.5} speed={0.8} rotationIntensity={0.3}>
      <mesh ref={knotRef} position={[0, 0, -5]} scale={[4, 4, 4]}>
        <torusKnotGeometry args={[3, 0.9, 400, 32]} />
        <meshStandardMaterial
          metalness={0.6}
          roughness={0.2}
          color="#1ac4d9"
          emissive="#1ac4d9"
          emissiveIntensity={0.1}
          transparent
          opacity={0.3} // Subtle transparency
        />
      </mesh>
    </Float>
  )
}

export default function Scene() {
  return (
    <Canvas
      style={{ position: 'absolute', top: 0, left: 0 }}
      camera={{ position: [0, 0, 12], fov: 55 }}
      className="w-full h-full"
    >
      {/* Lights */}
      <ambientLight intensity={0.5} />
      <directionalLight position={[5, 5, 5]} intensity={1.2} />
      <pointLight position={[-5, -3, 2]} intensity={0.6} />

      {/* Knot */}
      <SpinningKnot />

      {/* Stars for depth */}
      <Stars
        radius={180}
        depth={120}
        count={2500}
        factor={5}
        saturation={0.6}
        fade
      />

      {/* Camera auto-rotate */}
      <OrbitControls enablePan={false} enableZoom={false} autoRotate autoRotateSpeed={0.2} />
    </Canvas>
  )
}
