# Development Status

## Snapshot Date
2026-03-28

## Branch State
- `main` is the canonical branch.
- Recent stabilization completed:
  - actor model fallback safety,
  - undo/redo correctness fixes,
  - Tauri scaffold normalization,
  - deprecated launcher cleanup.

## Active Focus (Week 1 Execution)
1. Repository coherence:
- README aligned with real code structure.
- Canonical docs index and status document added.
- Duplicate docs removed.
2. Dependency normalization:
- Removed conflicting `@react-three/postprocessing` dependency for current stack.
3. Quality baseline:
- ESLint configuration introduced for TS/TSX source.

## Immediate Next Focus
1. Make `npm install`, `npm run build`, and `npm run lint` pass consistently in a clean environment.
2. Implement V2 save/load `.mstorm`.
3. Implement V2 shot capture/apply flow for parity with V1 capabilities.

## Known Risks
- V1 and V2 both remain in repo; contributors may target wrong runtime without clear guidance.
- Tauri ingestion path is currently a stub and not yet integrated into UI workflows.
