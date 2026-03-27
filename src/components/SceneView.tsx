import React, { Suspense, useRef, useEffect } from 'react'
import { Canvas } from '@react-three/fiber'
import { CameraControls, Sky, ContactShadows, Html } from '@react-three/drei'
import { useStore } from '../store/useStore'
import { EntityComponent } from './Entity'
import { Bloom, EffectComposer } from '@react-three/postprocessing'

export function SceneView() {
  const activeSceneId = useStore((s) => s.activeSceneId)
  const scene = useStore((s) => s.scenes[activeSceneId])
  const selectedEntityId = useStore((s) => s.selectedEntityId)
  const controls = useRef<CameraControls>(null!)

  // 🎥 Cinematic Focus Logic
  useEffect(() => {
    if (selectedEntityId && controls.current) {
      const entity = scene.entities.find(e => e.id === selectedEntityId)
      if (entity) {
        controls.current.setLookAt(
          entity.position[0] + 5, entity.position[1] + 3, entity.position[2] + 5,
          entity.position[0], entity.position[1], entity.position[2],
          true
        )
      }
    }
  }, [selectedEntityId, scene.entities])

  // ⌨️ Focus Shortcut (F key)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key.toLowerCase() === 'f' && selectedEntityId && controls.current) {
        const entity = scene.entities.find(ev => ev.id === selectedEntityId)
        if (entity) {
           controls.current.setLookAt(
            entity.position[0] + 3, entity.position[1] + 2, entity.position[2] + 3,
            entity.position[0], entity.position[1], entity.position[2],
            true
          )
        }
      }
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [selectedEntityId, scene.entities])

  return (
    <Canvas shadows camera={{ position: [0, 2, 5], fov: 45 }}>
      <Suspense fallback={<Html center>Loading Scene Assets...</Html>}>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} />
        
        {/* 🧪 VISIBILITY ANCHOR: Orange Cube */}
        <mesh position={[2, 0, 0]}>
          <boxGeometry args={[1, 1, 1]} />
          <meshStandardMaterial color="orange" />
        </mesh>

        <Sky sunPosition={[100, 20, 100]} />
        <CameraControls ref={controls} makeDefault minPolarAngle={0} maxPolarAngle={Math.PI / 1.75} />
        
        {scene.entities.map((entity) => (
          <EntityComponent key={entity.id} entity={entity} />
        ))}

        <mesh rotation={[-Math.PI / 2, 0, 0]} receiveShadow position={[0, -0.01, 0]}>
          <planeGeometry args={[50, 50]} />
          <meshStandardMaterial color={scene.env.floor} roughness={0.8} />
        </mesh>
        
        <gridHelper args={[50, 50, 0x444455, 0x222233]} position={[0, 0.01, 0]} />

        {/* Post-processing and advanced shadows remain disabled for stability phase
        <ContactShadows 
          opacity={0.4} 
          scale={30} 
          blur={2.4} 
          far={10} 
          resolution={256} 
          color="#000000" 
        />
        <EffectComposer>
           <Bloom 
             intensity={1.0} 
             luminanceThreshold={0.9} 
             luminanceSmoothing={0.025} 
           />
        </EffectComposer>
        */}
      </Suspense>
    </Canvas>
  )
}
