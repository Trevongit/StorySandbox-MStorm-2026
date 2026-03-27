import React from 'react'
import { useStore } from '../store/useStore'
import { Box, Circle, User, Trash2, Play, Activity, Layers } from 'lucide-react'

export function Sidebar() {
  const scenes = useStore((s) => s.scenes)
  const activeSceneId = useStore((s) => s.activeSceneId)
  const activeScene = scenes[activeSceneId]
  const addEntity = useStore((s) => s.addEntity)
  const removeEntity = useStore((s) => s.removeEntity)
  const selectedEntityId = useStore((s) => s.selectedEntityId)
  const selectEntity = useStore((s) => s.selectEntity)
  const setAnimation = useStore((s) => s.setAnimation)
  
  const selectedEntity = activeScene.entities.find(e => e.id === selectedEntityId)

  return (
    <aside className="sidebar glass-panel">
      <div className="sidebar-section">
        <h3>Library</h3>
        <div className="asset-grid">
           <button 
             className="asset-card"
             onClick={() => addEntity({ type: 'actor', name: 'New Actor', position: [0, 0, 0] })}
           >
             <User size={24} />
             <span>Add Actor</span>
           </button>
           <button 
             className="asset-card"
             onClick={() => addEntity({ type: 'prop', name: 'Box', primitive: 'box', position: [0, 0, 0] })}
           >
             <Box size={24} />
             <span>Add Box</span>
           </button>
           <button 
             className="asset-card"
             onClick={() => addEntity({ type: 'prop', name: 'Sphere', primitive: 'sphere', position: [0, 0, 0] })}
           >
             <Circle size={24} />
             <span>Add Sphere</span>
           </button>
        </div>
      </div>

      {selectedEntity && (
        <div className="sidebar-section highlight-section">
          <h3><Activity size={16} /> Interaction</h3>
          <div style={{ padding: '8px', fontSize: '0.9rem' }}>
             <strong>{selectedEntity.name}</strong>
          </div>
          {selectedEntity.type === 'actor' && (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', padding: '8px' }}>
               <button className="btn btn-primary" onClick={() => setAnimation(selectedEntity.id, 'Walking')}>
                  <Play size={14} /> Walk
               </button>
               <button className="btn btn-primary" onClick={() => setAnimation(selectedEntity.id, 'Wave')}>
                  <Play size={14} /> Wave
               </button>
               <button className="btn btn-primary" onClick={() => setAnimation(selectedEntity.id, 'Idle')}>
                  <Play size={14} /> Idle
               </button>
            </div>
          )}
          <div style={{ padding: '8px' }}>
            <button className="btn btn-danger" onClick={() => removeEntity(selectedEntity.id)}>
              <Trash2 size={14} /> Remove
            </button>
          </div>
        </div>
      )}

      <div className="sidebar-section">
        <h3><Layers size={16} /> Outliner</h3>
        <div className="outliner">
          {activeScene.entities.map((entity) => (
            <div 
              key={entity.id} 
              className={`outliner-item ${selectedEntityId === entity.id ? 'active' : ''}`}
              onClick={() => selectEntity(entity.id)}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                {entity.type === 'actor' ? <User size={14} /> : <Box size={14} />}
                <span>{entity.name}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </aside>
  )
}
