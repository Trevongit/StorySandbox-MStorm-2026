# Active State Snapshot (2026-03-28)

## Branch And Recent Commits
- Branch: `main`
- Sync: local and origin aligned at time of writing.
- Recent commits:
  - `2e849ab`: removed deprecated `Start_Moviestorm.bat`.
  - `446b633`: runtime fallback, undo/redo fixes, Tauri scaffold normalization.

## What Works Now
- V2 builds successfully with `npm run build` after dependency install.
- Core V2 interaction loop exists:
  - Add actor/box/sphere.
  - Select in outliner or viewport.
  - Manipulate transforms using gizmo.
  - Basic undo/redo is now functional for add/remove, transform, and animation changes.
- Runtime resilience improved:
  - Missing `robot.glb` no longer hard-crashes actor rendering.
  - Actor fallback mesh is shown if model load fails.
- Tauri scaffold now has canonical top-level config/build files in `src-tauri/`.

## Known Gaps
- V2 topbar buttons (`Save`, `Capture`) and playback controls are mostly UI placeholders.
- No implemented V2 shot system equivalent to V1 yet.
- Asset ingestion command in Rust is still a stub.
- No canonical public asset pack in repo (`public/assets/...` not populated).
- Lint script references `eslint` but eslint configuration/tooling is incomplete.

## Documentation Gaps
- README links include references to docs that do not exist in current repo.
- Docs contain duplication and legacy path references.
- Docs describe both "current stable V1" and "V2 in development"; code reality has active work in V2 but V1 remains richer for certain features (shots/save/load parity).

## Dependency Risk
- `npm install` hits peer dependency conflict between:
  - `@react-three/postprocessing@3.0.4`
  - `@react-three/fiber` version currently used by repo.
- Workaround used: `npm install --legacy-peer-deps`.
- This should be normalized in dependency strategy to avoid onboarding friction.

## Current Technical Risk Profile
- Medium risk: architecture ambiguity (V1 vs V2 vs `v2_src` snapshot).
- Medium risk: onboarding confusion from stale or inconsistent docs.
- Low-to-medium risk: missing test coverage and no CI guardrails.
- Low risk: immediate runtime crash from missing actor model has been mitigated.
