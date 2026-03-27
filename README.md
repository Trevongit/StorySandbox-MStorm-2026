# MStorm Studio 2026 (StorySandbox)

> Cinematic storytelling at the speed of play.

MStorm Studio 2026 is a director-first storytelling sandbox inspired by Moviestorm.  
The core product rule is the **Golden Loop**: creative actions should produce visible results in under one second.

## Current Runtime Status
- Primary runtime: `src/` (React + Zustand + React Three Fiber + Vite).
- Legacy runtime: `index.html` (standalone V1 reference/prototype path).
- Native scaffold: `src-tauri/` (Tauri command bridge, ingestion path in progress).

## What Works Today
- 3D viewport rendering and scene grounding.
- Entity add/select/remove (actors and props).
- Direct transform manipulation via gizmo.
- Actor interaction hooks (animation state changes).
- Undo/redo for add/remove/transform/animation changes.
- Safe fallback actor rendering when model assets are missing.

## Quick Start
### Prerequisites
- Node.js 18+
- npm 9+

### Run Dev
```bash
npm install
npm run dev
```

### Build
```bash
npm run build
```

### Launchers
- Windows: `START_MSTORM.bat`
- Linux/macOS: `./START_MSTORM.sh`

## Project Structure
- `src/`: active V2 app.
- `src-tauri/`: native desktop scaffold.
- `index.html`: legacy V1 standalone sandbox.
- `docs/`: product/technical notes.
- `OA-Codex-brain/`: operational understanding, execution plans, and team assessment docs.

## Documentation
- [Docs Index](docs/README.md)
- [Technical Roadmap](docs/02_technical_roadmap.md)
- [Technical Knowledge Base](docs/06_technical_knowledge_base.md)
- [Handoff Guide](docs/handoff_guide.md)
- [Setup Guide](docs/setup_guide.md)
- [OA Codex Brain Index](OA-Codex-brain/00_INDEX.md)

## Roadmap Focus
- Phase A: repo coherence and documentation consolidation.
- Phase B: V2 parity for save/load and shot system.
- Phase C: quality baseline (dependency alignment, lint, CI, smoke tests).
- Phase D: asset ingestion MVP via Tauri.
- Phase E: optional AI cinematic render layer.
