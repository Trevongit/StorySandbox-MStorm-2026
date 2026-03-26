import { create } from 'zustand'

// 🎬 Scene Store
export const useSceneStore = create((set) => ({
  entities: [],
  addEntity: (entity) =>
    set((state) => ({ entities: [...state.entities, entity] })),
  updateEntity: (id, updates) =>
    set((state) => ({
      entities: state.entities.map((e) =>
        e.id === id ? { ...e, ...updates } : e
      ),
    })),
}))

// 🎯 Selection Store
export const useSelectionStore = create((set) => ({
  selectedId: null,
  select: (id) => set({ selectedId: id }),
}))

// 🎥 Camera Store
export const useCameraStore = create(() => ({
  position: [0, 2, 5],
  target: [0, 1, 0],
  fov: 50,
}))

// ▶ Playback Store
export const usePlaybackStore = create((set) => ({
  playing: false,
  toggle: () => set((s) => ({ playing: !s.playing })),
}))

// 📦 Asset Store (stub)
export const useAssetStore = create(() => ({
  characters: [
    { id: 'char1', name: 'Default Character' },
  ],
}))
