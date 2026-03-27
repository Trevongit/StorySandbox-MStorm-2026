import React, { useEffect, useRef } from 'react'
import { useGLTF, useAnimations, PivotControls } from '@react-three/drei'
import { Group } from 'three'
import { useStore, Entity } from '../store/useStore'

const ACTOR_MODEL_URL = '/models/robot.glb'

interface Props {
  entity: Entity
}

export function EntityComponent({ entity }: Props) {
  const selectEntity = useStore((s) => s.selectEntity)
  const selectedEntityId = useStore((s) => s.selectedEntityId)
  const updateTransform = useStore((s) => s.updateEntityTransform)
  const isSelected = selectedEntityId === entity.id

  const group = useRef<Group>(null!)
  
  // 🛡️ Phase 3: Safe Local GLTF Loading
  const { scene, animations } = useGLTF(ACTOR_MODEL_URL) as any
  const { actions } = useAnimations(animations, group)

  // 🎬 Animation Controller
  useEffect(() => {
    if (entity.type === 'actor' && entity.animation) {
      // Handle different casing/naming conventions
      const clipName = entity.animation.charAt(0).toUpperCase() + entity.animation.slice(1)
      const action = actions[clipName] || actions[entity.animation]
      
      if (action) {
        action.reset().fadeIn(0.3).play()
        return () => { action.fadeOut(0.3) }
      }
    }
  }, [entity.animation, actions, entity.type])

  const handlePointerDown = (e: any) => {
    e.stopPropagation()
    selectEntity(entity.id)
    
    // 🕹️ Click-to-Animate Cycling
    if (entity.type === 'actor') {
      const modes = ['Idle', 'Walking', 'Wave']
      const currentIndex = modes.indexOf(entity.animation || 'Idle')
      const nextIndex = (currentIndex + 1) % modes.length
      const nextAnimation = modes[nextIndex]
      useStore.getState().setAnimation(entity.id, nextAnimation)
    }
  }

  const renderPrimitive = () => {
    if (entity.primitive === 'box') {
      return (
        <mesh castShadow receiveShadow>
          <boxGeometry args={[1, 1, 1]} />
          <meshStandardMaterial color={entity.color || '#cccccc'} />
        </mesh>
      )
    }
    if (entity.primitive === 'sphere') {
      return (
        <mesh castShadow receiveShadow>
          <sphereGeometry args={[0.5, 32, 32]} />
          <meshStandardMaterial color={entity.color || '#cccccc'} />
        </mesh>
      )
    }
    return <mesh><boxGeometry args={[0.1, 0.1, 0.1]} /><meshStandardMaterial color="red" /></mesh>
  }

  const content = (
    <group 
      ref={group}
      position={entity.position}
      rotation={entity.rotation}
      scale={entity.scale}
      onPointerDown={handlePointerDown}
    >
      {entity.type === 'actor' ? (
        <primitive object={scene.clone()} />
      ) : (
        renderPrimitive()
      )}
    </group>
  )

  if (isSelected) {
    return (
      <PivotControls
        depthTest={false}
        anchor={[0, 0, 0]}
        scale={0.75}
        activeAxes={[true, true, true]}
        autoTransform={true}
        onDragEnd={() => {
          if (group.current) {
            const { position, rotation, scale } = group.current
            updateTransform(
              entity.id,
              [position.x, position.y, position.z],
              [rotation.x, rotation.y, rotation.z],
              [scale.x, scale.y, scale.z]
            )
          }
        }}
      >
        {content}
      </PivotControls>
    )
  }

  return content
}
