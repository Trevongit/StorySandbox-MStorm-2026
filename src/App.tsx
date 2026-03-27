import React from 'react'
import { SceneView } from './components/SceneView'
import { Sidebar } from './components/Sidebar'
import { useStore } from './store/useStore'
import { ErrorBoundary } from './components/ErrorBoundary'
import { Save, Undo, Redo, Play, Pause, Camera, Plus } from 'lucide-react'

export default function App() {
  const undo = useStore((s) => s.undo)
  const redo = useStore((s) => s.redo)
  const history = useStore((s) => s.history)
  const redoStack = useStore((s) => s.redoStack)

  return (
    <ErrorBoundary>
      <div className="app-container">
        <header className="glass-panel topbar">
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <h1>MStorm Studio</h1>
            <span className="text-muted" style={{ fontSize: '0.8rem' }}>Professional 2026</span>
          </div>
          
          <div style={{ display: 'flex', gap: '8px' }}>
            <button 
              className="btn btn-small" 
              onClick={undo} 
              disabled={history.length === 0}
              style={{ opacity: history.length === 0 ? 0.3 : 1 }}
            >
              <Undo size={16} /> Undo
            </button>
            <button 
              className="btn btn-small" 
              onClick={redo} 
              disabled={redoStack.length === 0}
              style={{ opacity: redoStack.length === 0 ? 0.3 : 1 }}
            >
              <Redo size={16} /> Redo
            </button>
            <div style={{ width: '1px', background: 'var(--panel-border)', margin: '0 4px' }} />
            <button className="btn btn-small"><Save size={16} /> Save</button>
            <div style={{ width: '1px', background: 'var(--panel-border)', margin: '0 4px' }} />
            <button className="btn btn-small"><Camera size={16} /> Capture</button>
          </div>
        </header>

        <div className="main-layout">
          <Sidebar />
          <div className="viewport glass-panel">
             <SceneView />
          </div>
        </div>

        <footer className="glass-panel bottombar">
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
            <button className="btn btn-danger action-btn">
               <Play size={20} fill="currentColor" />
            </button>
            <div style={{ flex: 1, height: '6px', background: 'rgba(255,255,255,0.1)', borderRadius: '3px' }}>
               <div style={{ width: '30%', height: '100%', background: 'var(--accent)', borderRadius: '3px' }} />
            </div>
          </div>
        </footer>
      </div>
    </ErrorBoundary>
  )
}
