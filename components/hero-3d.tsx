'use client'

import { useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls, Float } from '@react-three/drei'
import * as THREE from 'three'

function RotatingCube() {
  const meshRef = useRef<THREE.Mesh>(null!)

  useFrame(() => {
    meshRef.current.rotation.x += 0.003
    meshRef.current.rotation.y += 0.005
  })

  return (
    <mesh ref={meshRef} position={[0, 0, 0]} scale={1.5}>
      <boxGeometry args={[2, 2, 2]} />
      <meshStandardMaterial
        color="#ff3333"
        emissive="#ff3333"
        emissiveIntensity={0.2}
        wireframe={false}
      />
    </mesh>
  )
}

function Scene3D() {
  return (
    <Canvas
      className="w-full h-full"
      camera={{ position: [0, 0, 5], fov: 75 }}
      style={{ background: 'transparent' }}
      gl={{ alpha: true, antialias: true }}
    >
      <ambientLight intensity={0.6} />
      <pointLight position={[10, 10, 10]} intensity={1} color="#ff3333" />
      <pointLight position={[-10, -10, 10]} intensity={0.8} color="#ff8533" />
      <Float speed={4} rotationIntensity={1} floatIntensity={2}>
        <RotatingCube />
      </Float>
      <OrbitControls autoRotate autoRotateSpeed={2} enableZoom={false} />
    </Canvas>
  )
}

export function Hero3D() {
  return (
    <div className="relative w-full h-screen flex items-center justify-center overflow-hidden">
      {/* 3D Background Canvas */}
      <div className="absolute inset-0 w-full h-full">
        <Scene3D />
      </div>

      {/* Grid background effect */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5" />

      {/* Content Overlay */}
      <div className="relative z-10 text-center max-w-4xl px-6">
        <div className="mb-6 inline-block">
          <div className="text-sm font-mono text-orange-500 mb-4 tracking-widest">
            WELCOME TO MY PORTFOLIO
          </div>
        </div>

        <h1 className="text-7xl md:text-8xl font-bold mb-6 text-balance">
          <span className="text-white">Nishanth</span>{' '}
          <span className="bg-gradient-to-r from-red-500 to-orange-500 bg-clip-text text-transparent">
            B
          </span>
        </h1>

        <p className="text-xl md:text-2xl text-gray-300 mb-8 font-light max-w-2xl mx-auto">
          Software Engineer specializing in backend systems, AI frameworks, and Web3 security
        </p>

        <div className="flex gap-4 justify-center items-center flex-wrap">
          <a
            href="#projects"
            className="px-8 py-3 bg-red-600 hover:bg-red-700 text-white font-semibold rounded transition-all duration-300 hover:shadow-lg hover:shadow-red-600/50"
          >
            View Work
          </a>
          <a
            href="#contact"
            className="px-8 py-3 border-2 border-orange-500 text-orange-500 hover:bg-orange-500/10 font-semibold rounded transition-all duration-300"
          >
            Get In Touch
          </a>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-red-500 rounded-full flex items-center justify-center">
            <div className="w-1 h-3 bg-red-500 rounded-full animate-pulse" />
          </div>
        </div>
      </div>

      {/* Grid Pattern CSS */}
      <style>{`
        .bg-grid-pattern {
          background-image:
            linear-gradient(to right, rgba(255, 51, 51, 0.1) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255, 51, 51, 0.1) 1px, transparent 1px);
          background-size: 50px 50px;
        }
      `}</style>
    </div>
  )
}
