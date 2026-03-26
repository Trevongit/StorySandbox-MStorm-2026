import React from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, TransformControls } from '@react-three/drei'
import { useSceneStore, useSelectionStore, useAssetStore, usePlaybackStore } from './store'
import './styles.css'

export default function App() {
  return (
    <div className="app-container">
      <TopBar />
      <div className="main-layout">
        <AssetBrowser />
        <SceneView />
      </div>
      <BottomBar />
    </div>
  )
}

function TopBar() {
  return (
    <div className="topbar">
      <button>Save</button>
      <button>Undo</button>
      <button>Export</button>
    </div>
  )
}

function AssetBrowser() {
  const { characters } = useAssetStore()
  const addEntity = useSceneStore((s) => s.addEntity)

  return (
    <div className="sidebar">
      <h4>Characters</h4>
      {characters.map((char) => (
        <button
          key={char.id}
          onClick={() =>
            addEntity({
              id: Date.now().toString(),
              type: 'character',
              position: [0, 0, 0],
            })
          }
        >
          {char.name}
        </button>
      ))}
    </div>
  )
}

function SceneView() {
  const entities = useSceneStore((s) => s.entities)

  return (
    <div className="viewport">
      <Canvas shadows camera={{ position: [0, 4, 10], fov: 45 }}>
        <ambientLight intensity={0.4} />
        <directionalLight position={[10, 15, 10]} intensity={1.5} castShadow />
        <OrbitControls makeDefault />

        {entities.map((e) => (
          <Character key={e.id} entity={e} />
        ))}
      </Canvas>
    </div>
  )
}

function Character({ entity }) {
  const selectedId = useSelectionStore(s => s.selectedId)
  const select = useSelectionStore(s => s.select)
  const isSelected = selectedId === entity.id

  const meshContent = (
    <mesh castShadow receiveShadow>
      <boxGeometry args={[1, 2, 1]} />
      <meshStandardMaterial color="orange" />
    </mesh>
  )

  if (isSelected) {
      return (
          <TransformControls mode="translate" position={entity.position}>
              {meshContent}
          </TransformControls>
      )
  }

  return (
    <group position={entity.position} onClick={(e) => { e.stopPropagation(); select(entity.id) }}>
       {meshContent}
    </group>
  )
}

function BottomBar() {
  return (
    <div className="bottombar">
      <PlaybackControls />
    </div>
  )
}

function PlaybackControls() {
  const toggle = usePlaybackStore((s) => s.toggle)
  const playing = usePlaybackStore((s) => s.playing)

  return (
    <button onClick={toggle}>
      {playing ? 'Pause' : 'Play'}
    </button>
  )
}
