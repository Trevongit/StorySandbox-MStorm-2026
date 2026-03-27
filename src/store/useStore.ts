import { create } from 'zustand'
import { persist } from 'zustand/middleware'

export interface Entity {
  id: string
  type: 'actor' | 'prop' | 'light'
  name: string
  position: [number, number, number]
  rotation: [number, number, number]
  scale: [number, number, number]
  color?: string
  animation?: string
  primitive?: string
}

export interface Scene {
  id: string
  name: string
  entities: Entity[]
  env: {
    floor: string
    light: number
  }
}

interface ProjectState {
  scenes: Record<string, Scene>
  activeSceneId: string
  selectedEntityId: string | null
  history: string[] // JSON snapshots for undo
  redoStack: string[]
  
  // Actions
  addEntity: (entity: Omit<Entity, 'id' | 'rotation' | 'scale'>) => void
  removeEntity: (id: string) => void
  updateEntityTransform: (id: string, position?: [number, number, number], rotation?: [number, number, number], scale?: [number, number, number]) => void
  selectEntity: (id: string | null) => void
  setAnimation: (entityId: string, animation: string) => void
  setActiveScene: (id: string) => void
  addScene: (name: string) => void
  undo: () => void
  redo: () => void
}

const GOLDEN_SCENE_ID = 'default'

function createGoldenScene(): Scene {
  return {
    id: GOLDEN_SCENE_ID,
    name: '✨ Golden Scene',
    entities: [
      {
        id: 'guide-1',
        type: 'actor',
        name: 'MStorm Guide',
        position: [0, 0, 0],
        rotation: [0, 0, 0],
        scale: [1, 1, 1],
        color: '#ffcc00',
        animation: 'idle'
      },
      {
        id: 'stage-1',
        type: 'prop',
        name: 'Stage Block',
        position: [0, -0.5, 0],
        rotation: [0, 0, 0],
        scale: [10, 1, 10],
        color: '#333333',
        primitive: 'box'
      },
      {
        id: 'sphere-1',
        type: 'prop',
        name: 'Magic Sphere',
        position: [2, 1, -2],
        rotation: [0, 0, 0],
        scale: [1, 1, 1],
        color: '#00ffff',
        primitive: 'sphere'
      }
    ],
    env: {
      floor: '#1a1c23',
      light: 2.0
    }
  }
}

export const useStore = create<ProjectState>()(
  persist(
    (set, get) => ({
      scenes: {
        [GOLDEN_SCENE_ID]: createGoldenScene(),
      },
      activeSceneId: GOLDEN_SCENE_ID,
      selectedEntityId: null,
      history: [],
      redoStack: [],

      selectEntity: (id) => set({ selectedEntityId: id }),

      setAnimation: (entityId, animation) => set((state) => {
        const scene = state.scenes[state.activeSceneId]
        const targetEntity = scene.entities.find((e) => e.id === entityId)
        if (!targetEntity || targetEntity.animation === animation) {
          return state
        }

        const snapshot = JSON.stringify(state.scenes)
        const newEntities = scene.entities.map(e => 
          e.id === entityId ? { ...e, animation } : e
        )
        return {
          history: [snapshot, ...state.history.slice(0, 19)],
          redoStack: [],
          scenes: {
            ...state.scenes,
            [state.activeSceneId]: { ...scene, entities: newEntities }
          }
        }
      }),

      updateEntityTransform: (id, position, rotation, scale) => set((state) => {
        const scene = state.scenes[state.activeSceneId]
        const targetEntity = scene.entities.find((e) => e.id === id)
        if (!targetEntity) {
          return state
        }

        const nextPosition = position || targetEntity.position
        const nextRotation = rotation || targetEntity.rotation
        const nextScale = scale || targetEntity.scale

        const hasChanged =
          targetEntity.position.some((value, index) => value !== nextPosition[index]) ||
          targetEntity.rotation.some((value, index) => value !== nextRotation[index]) ||
          targetEntity.scale.some((value, index) => value !== nextScale[index])

        if (!hasChanged) {
          return state
        }

        const snapshot = JSON.stringify(state.scenes)
        const newEntities = scene.entities.map(e => 
          e.id === id ? { 
            ...e, 
            position: nextPosition,
            rotation: nextRotation,
            scale: nextScale
          } : e
        )
        return {
          history: [snapshot, ...state.history.slice(0, 19)],
          redoStack: [],
          scenes: {
            ...state.scenes,
            [state.activeSceneId]: { ...scene, entities: newEntities }
          }
        }
      }),

      addEntity: (entityData) => set((state) => {
        const scene = state.scenes[state.activeSceneId]
        const snapshot = JSON.stringify(state.scenes)
        
        const newEntity: Entity = {
          ...entityData,
          id: `${entityData.type}-${Date.now()}`,
          rotation: [0, 0, 0],
          scale: [1, 1, 1],
        }

        return {
          history: [snapshot, ...state.history.slice(0, 19)],
          redoStack: [],
          scenes: {
            ...state.scenes,
            [state.activeSceneId]: {
              ...scene,
              entities: [...scene.entities, newEntity]
            }
          },
          selectedEntityId: newEntity.id
        }
      }),

      removeEntity: (id) => set((state) => {
        const scene = state.scenes[state.activeSceneId]
        const snapshot = JSON.stringify(state.scenes)
        const newEntities = scene.entities.filter(e => e.id !== id)
        
        return {
          history: [snapshot, ...state.history.slice(0, 19)],
          redoStack: [],
          scenes: {
            ...state.scenes,
            [state.activeSceneId]: { ...scene, entities: newEntities }
          },
          selectedEntityId: state.selectedEntityId === id ? null : state.selectedEntityId
        }
      }),

      setActiveScene: (id) => set({ activeSceneId: id, selectedEntityId: null }),

      addScene: (name) => set((state) => {
        const id = Date.now().toString()
        return {
          scenes: {
            ...state.scenes,
            [id]: {
              id,
              name,
              entities: [],
              env: { floor: '#1a1c23', light: 1.5 }
            }
          }
        }
      }),

      undo: () => {
        const { history, redoStack, scenes } = get()
        if (history.length === 0) return

        const previous = history[0]
        const currentSnapshot = JSON.stringify(scenes)

        set({
          scenes: JSON.parse(previous),
          history: history.slice(1),
          redoStack: [currentSnapshot, ...redoStack]
        })
      },

      redo: () => {
        const { history, redoStack, scenes } = get()
        if (redoStack.length === 0) return

        const next = redoStack[0]
        const currentSnapshot = JSON.stringify(scenes)

        set({
          scenes: JSON.parse(next),
          history: [currentSnapshot, ...history],
          redoStack: redoStack.slice(1)
        })
      }
    }),
    {
      name: 'mstorm-store',
      partialize: (state) => ({ scenes: state.scenes, activeSceneId: state.activeSceneId }),
    }
  )
)
