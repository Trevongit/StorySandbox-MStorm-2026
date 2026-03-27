# Repo Understanding

## Project Identity
- Name: MStorm Studio 2026 (codename/history: StorySandbox).
- Core mission: fast, low-friction cinematic scene direction.
- Product promise: every creative interaction should produce visible feedback in under one second.

## Runtime Layers
- V1 runtime: `index.html` standalone Three.js app.
- V2 runtime: `src/` React + Zustand + React Three Fiber (current active build path with Vite).
- Native shell: `src-tauri/` Rust + Tauri scaffold with command stubs.

## Current Directory Structure (Meaningful)
- `README.md`: high-level project narrative, getting started, roadmap summary.
- `docs/`: mixed handoff and roadmap notes, including legacy and duplicated files.
- `index.html`: full V1 app in one file, includes UI + scene + save/load + shot logic.
- `src/`: V2 code that currently builds with `npm run build`.
- `src-tauri/`: native desktop scaffold and command entrypoint.
- `v2_src/`: older/experimental React architecture snapshot.

## V1 Architecture (from code + docs)
- Single scene runtime with Three.js, OrbitControls, TransformControls.
- Entity operations: add actor, add prop, transform, delete, color edit.
- Project persistence: save/load `.mstorm` JSON.
- Shot system: capture camera snapshots and jump to shot.
- Playback loop: procedural actor animation modes (`idle`, `talk`, `wave`).

## V2 Architecture (current dev path)
- React composition:
  - `App` top-level shell.
  - `SceneView` for R3F canvas and camera behavior.
  - `Sidebar` for asset add, outliner, and interactions.
  - `EntityComponent` for actor/prop rendering and transform controls.
- Zustand store in `src/store/useStore.ts`:
  - Scene and entity state.
  - Selection state.
  - Undo/redo history snapshots.
  - Persistence via zustand middleware `persist` (`mstorm-store`).

## Native Layer Understanding
- Tauri command `scan_mstorm_assets(path: String) -> String` exists as a stub.
- Intended direction: local asset scanning and ingestion bridge from legacy Moviestorm sources.
- Actual ingestion logic is not implemented yet.

## Documentation Reality
- Docs clearly encode product ethos and conceptual roadmap.
- Some docs still reference prior repo paths (example Windows local path references).
- Some README doc links point to files not currently present in `docs/`.
- There are duplicated docs (`04_ai_upscaling_brainstorm.md` vs `ai_upscaling_brainstorm.md`, and ingestion guides).

## Operational Conclusion
- Repo contains a real functioning codebase with momentum.
- It also contains historical strata (V1, old V2 snapshot, evolving docs) that need consolidation.
- Next maturity step is not "more features first"; it is reducing architecture/documentation ambiguity so every new feature lands on one canonical path.
