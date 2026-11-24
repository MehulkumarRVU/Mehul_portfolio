import React, { useEffect, useRef, useMemo } from 'react'
import { Canvas, useFrame, useThree } from '@react-three/fiber'
import * as THREE from 'three'
import { useMousePosition } from '../../hooks/useMousePosition'
import { getDeviceTier, getParticleCount } from '../../utils/deviceCapability'

// Vertex Shader
const vertexShader = `
  attribute float aSize;
  attribute float aAlpha;
  attribute vec3 aTarget;
  
  uniform float uTime;
  uniform float uMorphProgress;
  uniform vec2 uMouse;
  uniform float uMouseRadius;
  uniform float uMouseStrength;
  
  varying float vAlpha;
  varying float vSize;
  
  void main() {
    vAlpha = aAlpha;
    vSize = aSize;
    
    // Morphing between current and target positions
    vec3 pos = mix(position, aTarget, uMorphProgress);
    
    // Organic floating motion
    float timeOffset = aSize * 10.0;
    pos.x += sin(uTime * 0.42 + timeOffset) * 0.42;
    pos.y += cos(uTime * 0.34 + timeOffset * 1.3) * 0.32;
    pos.z += sin(uTime * 0.27 + timeOffset * 0.7) * 0.2;
    
    // Mouse repulsion
    vec4 worldPos = modelMatrix * vec4(pos, 1.0);
    vec2 toMouse = worldPos.xy - uMouse;
    float dist = length(toMouse);
    if (dist < uMouseRadius) {
      float force = (1.0 - dist / uMouseRadius) * uMouseStrength;
      pos.xy += normalize(toMouse) * force;
    }
    
    vec4 mvPosition = modelViewMatrix * vec4(pos, 1.0);
    gl_Position = projectionMatrix * mvPosition;
    
    // Size attenuation
    gl_PointSize = aSize * (300.0 / -mvPosition.z);
    gl_PointSize = clamp(gl_PointSize, 0.5, 8.0);
  }
`

// Fragment Shader
const fragmentShader = `
  uniform vec3 uColorA;
  uniform vec3 uColorB;
  uniform float uTime;
  
  varying float vAlpha;
  varying float vSize;
  
  void main() {
    // Circular point
    vec2 uv = gl_PointCoord - 0.5;
    float dist = length(uv);
    if (dist > 0.5) discard;
    
    // Soft edge
    float alpha = smoothstep(0.5, 0.0, dist) * vAlpha;
    
    // Color mix based on size
    float colorMix = vSize * 0.5 + sin(uTime * 0.5) * 0.1;
    vec3 color = mix(uColorA, uColorB, clamp(colorMix, 0.0, 1.0));
    
    gl_FragColor = vec4(color, alpha);
  }
`

// Generate random scattered positions
function generateScatterPositions(count: number, spread: number = 15): Float32Array {
  const positions = new Float32Array(count * 3)
  for (let i = 0; i < count; i++) {
    positions[i * 3] = (Math.random() - 0.5) * spread
    positions[i * 3 + 1] = (Math.random() - 0.5) * spread
    positions[i * 3 + 2] = (Math.random() - 0.5) * spread * 0.5
  }
  return positions
}

// Generate neural network positions
function generateNeuralPositions(count: number): Float32Array {
  const positions = new Float32Array(count * 3)
  const layers = 7
  for (let i = 0; i < count; i++) {
    const layer = Math.floor(Math.random() * layers)
    const x = (layer / (layers - 1)) * 14 - 7
    const y = (Math.random() - 0.5) * 8
    const z = (Math.random() - 0.5) * 4
    positions[i * 3] = x + (Math.random() - 0.5) * 1.5
    positions[i * 3 + 1] = y
    positions[i * 3 + 2] = z
  }
  return positions
}

// Generate connected geometric positions
function generateGeometricPositions(count: number): Float32Array {
  const positions = new Float32Array(count * 3)
  for (let i = 0; i < count; i++) {
    const theta = Math.random() * Math.PI * 2
    const phi = Math.acos(2 * Math.random() - 1)
    const r = 3 + Math.random() * 4
    positions[i * 3] = r * Math.sin(phi) * Math.cos(theta)
    positions[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta)
    positions[i * 3 + 2] = r * Math.cos(phi) * 0.5
  }
  return positions
}

// Generate camera aperture positions
function generateAperturePositions(count: number): Float32Array {
  const positions = new Float32Array(count * 3)
  for (let i = 0; i < count; i++) {
    const blades = 8
    const blade = Math.floor(Math.random() * blades)
    const angle = (blade / blades) * Math.PI * 2 + Math.random() * 0.3
    const r = Math.random() * 5
    positions[i * 3] = Math.cos(angle) * r
    positions[i * 3 + 1] = Math.sin(angle) * r
    positions[i * 3 + 2] = (Math.random() - 0.5) * 2
  }
  return positions
}

// Generate universe expansion positions
function generateUniversePositions(count: number): Float32Array {
  const positions = new Float32Array(count * 3)
  for (let i = 0; i < count; i++) {
    const r = Math.pow(Math.random(), 0.5) * 20
    const theta = Math.random() * Math.PI * 2
    const phi = Math.acos(2 * Math.random() - 1)
    positions[i * 3] = r * Math.sin(phi) * Math.cos(theta)
    positions[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta) * 0.5
    positions[i * 3 + 2] = r * Math.cos(phi) * 0.3
  }
  return positions
}

export type ParticleScene = 'scatter' | 'neural' | 'geometric' | 'aperture' | 'universe'

interface ParticleSystemProps {
  scene: ParticleScene
  morphing?: boolean
}

function ParticleSystem({ scene, morphing = false }: ParticleSystemProps) {
  const meshRef = useRef<THREE.Points>(null!)
  const mouse = useMousePosition()
  const { size } = useThree()
  
  const tier = useMemo(() => getDeviceTier(), [])
  const count = useMemo(() => getParticleCount(tier), [tier])
  const palette = useMemo(() => {
    const styles = getComputedStyle(document.documentElement)
    const read = (name: string) => styles.getPropertyValue(name).trim()
    return {
      blue: read('--accent-blue'),
      violet: read('--accent-violet'),
      steel: read('--steel-grey'),
      cyan: read('--accent-cyan'),
      white: read('--warm-ivory'),
    }
  }, [])
  
  const { geometry, material } = useMemo(() => {
    const positions = generateScatterPositions(count)
    const sizes = new Float32Array(count)
    const alphas = new Float32Array(count)
    const targets = generateScatterPositions(count)
    
    for (let i = 0; i < count; i++) {
      sizes[i] = Math.random() * 2 + 0.5
      alphas[i] = Math.random() * 0.6 + 0.2
    }
    
    const geo = new THREE.BufferGeometry()
    geo.setAttribute('position', new THREE.BufferAttribute(positions, 3))
    geo.setAttribute('aSize', new THREE.BufferAttribute(sizes, 1))
    geo.setAttribute('aAlpha', new THREE.BufferAttribute(alphas, 1))
    geo.setAttribute('aTarget', new THREE.BufferAttribute(targets, 3))
    
    const mat = new THREE.ShaderMaterial({
      vertexShader,
      fragmentShader,
      uniforms: {
        uTime: { value: 0 },
        uMorphProgress: { value: 0 },
        uMouse: { value: new THREE.Vector2(0, 0) },
        uMouseRadius: { value: 3.0 },
        uMouseStrength: { value: 0.5 },
        uColorA: { value: new THREE.Color(palette.blue) },
        uColorB: { value: new THREE.Color(palette.violet) },
      },
      transparent: true,
      depthWrite: false,
      blending: THREE.AdditiveBlending,
    })
    
    return { geometry: geo, material: mat }
  }, [count, palette])
  
  // Update target positions when scene changes
  useEffect(() => {
    let targets: Float32Array
    switch (scene) {
      case 'neural': targets = generateNeuralPositions(count); break
      case 'geometric': targets = generateGeometricPositions(count); break
      case 'aperture': targets = generateAperturePositions(count); break
      case 'universe': targets = generateUniversePositions(count); break
      default: targets = generateScatterPositions(count)
    }
    geometry.setAttribute('aTarget', new THREE.BufferAttribute(targets, 3))
    material.uniforms.uMorphProgress.value = 0
  }, [scene, geometry, material, count])
  
  useFrame((state, delta) => {
    if (!meshRef.current) return
    
    material.uniforms.uTime.value += delta
    meshRef.current.rotation.y += delta * 0.04
    meshRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.12) * 0.04
    
    // Animate morph progress
    if (material.uniforms.uMorphProgress.value < 1) {
      material.uniforms.uMorphProgress.value = Math.min(
        material.uniforms.uMorphProgress.value + delta * 0.5,
        1
      )
    }
    
    // Update mouse
    const mouseX = (mouse.normalizedX * size.width) / 100
    const mouseY = (mouse.normalizedY * size.height) / 100
    material.uniforms.uMouse.value.set(mouseX, mouseY)
    
    // Slow camera drift
    state.camera.position.x += (mouse.normalizedX * 0.5 - state.camera.position.x) * 0.02
    state.camera.position.y += (mouse.normalizedY * 0.5 - state.camera.position.y) * 0.02
    state.camera.lookAt(0, 0, 0)
    
    // Update colors based on scene
    const sceneColors: Record<ParticleScene, [string, string]> = {
      scatter: [palette.blue, palette.violet],
      neural: [palette.cyan, palette.blue],
      geometric: [palette.violet, palette.cyan],
      aperture: [palette.white, palette.violet],
      universe: [palette.blue, palette.cyan],
    }
    const [colorA, colorB] = sceneColors[scene]
    material.uniforms.uColorA.value.set(colorA)
    material.uniforms.uColorB.value.set(colorB)
  })
  
  return <primitive object={new THREE.Points(geometry, material)} ref={meshRef} />
}

interface ParticleCanvasProps {
  scene?: ParticleScene
  className?: string
}

export function ParticleCanvas({ scene = 'scatter', className = '' }: ParticleCanvasProps) {
  return (
    <Canvas
      className={className}
      camera={{ position: [0, 0, 12], fov: 60 }}
      gl={{
        antialias: false,
        alpha: true,
        powerPreference: 'high-performance',
      }}
      dpr={[1, Math.min(window.devicePixelRatio, 2)]}
    >
      <ParticleSystem scene={scene} />
    </Canvas>
  )
}
