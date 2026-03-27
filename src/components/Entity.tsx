import React, { Component, ReactNode, useEffect, useRef } from 'react'
import { useGLTF, useAnimations, PivotControls } from '@react-three/drei'
import { Group } from 'three'
import { useStore, Entity } from '../store/useStore'

const ACTOR_MODEL_URL = '/models/robot.glb'

interface Props {
  entity: Entity
}

interface ActorAssetBoundaryProps {
  children: ReactNode
  fallback: ReactNode
}

interface ActorAssetBoundaryState {
  hasError: boolean
}

class ActorAssetBoundary extends Component<ActorAssetBoundaryProps, ActorAssetBoundaryState> {
  public state: ActorAssetBoundaryState = { hasError: false }

  public static getDerivedStateFromError(): ActorAssetBoundaryState {
    return { hasError: true }
  }

  public componentDidCatch(error: Error) {
    console.warn(`Failed to load actor model at ${ACTOR_MODEL_URL}. Using fallback mesh instead.`, error)
  }

  public render() {
    if (this.state.hasError) {
      return this.props.fallback
    }
    return this.props.children
  }
}

function ActorModel({ entity, group }: { entity: Entity; group: React.RefObject<Group> }) {
  const { scene, animations } = useGLTF(ACTOR_MODEL_URL) as any
  const { actions } = useAnimations(animations, group)

  useEffect(() => {
    if (!entity.animation) return

    const clipName = entity.animation.charAt(0).toUpperCase() + entity.animation.slice(1)
    const action = actions[clipName] || actions[entity.animation]
    if (!action) return

    action.reset().fadeIn(0.3).play()
    return () => {
      action.fadeOut(0.3)
    }
  }, [actions, entity.animation])

  return <primitive object={scene.clone()} />
}

function ActorFallback({ color = '#ffcc00' }: { color?: string }) {
  return (
    <group>
      <mesh castShadow receiveShadow position={[0, 0.8, 0]}>
        <capsuleGeometry args={[0.25, 0.7, 8, 16]} />
        <meshStandardMaterial color={color} />
      </mesh>
      <mesh castShadow receiveShadow position={[0, 1.45, 0]}>
        <sphereGeometry args={[0.22, 24, 24]} />
        <meshStandardMaterial color="#f5d7b5" />
      </mesh>
      <mesh castShadow receiveShadow position={[0, 0.25, 0]}>
        <cylinderGeometry args={[0.35, 0.45, 0.12, 24]} />
        <meshStandardMaterial color="#2f3340" />
      </mesh>
    </group>
  )
}

export function EntityComponent({ entity }: Props) {
  const selectEntity = useStore((s) => s.selectEntity)
  const selectedEntityId = useStore((s) => s.selectedEntityId)
  const updateTransform = useStore((s) => s.updateEntityTransform)
  const isSelected = selectedEntityId === entity.id

  const group = useRef<Group>(null!)

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
        <ActorAssetBoundary fallback={<ActorFallback color={entity.color} />}>
          <ActorModel entity={entity} group={group} />
        </ActorAssetBoundary>
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
