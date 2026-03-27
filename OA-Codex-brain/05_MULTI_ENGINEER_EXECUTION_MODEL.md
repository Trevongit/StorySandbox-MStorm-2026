# Multi-Engineer Execution Model

## Objective
Use a small engineering pod to ship faster without losing architectural coherence.

## Suggested Team Shape (4 Engineers)
1. Product/Architecture Engineer
- Owns state model, feature sequencing, and system consistency.
- Approves schema changes and cross-module contracts.

2. Frontend Interaction Engineer
- Owns `src/` UI flow, editing interactions, sidebar/topbar/bottombar behavior.
- Owns Golden Loop responsiveness instrumentation.

3. 3D Pipeline Engineer
- Owns scene rendering, entity behavior, animation controls, asset loading strategy.
- Owns shot system integration and viewport performance.

4. Native/Platform Engineer
- Owns `src-tauri/`, ingestion pipeline, filesystem interfaces, and desktop packaging.
- Owns cross-platform build reliability.

## Coordination Model
- Weekly plan with 3-5 measurable goals.
- Daily async standup in markdown:
  - Yesterday outcomes.
  - Today targets.
  - Risks/blockers.
- PRs must include:
  - Problem statement.
  - Design note.
  - Test/validation evidence.
  - Backward compatibility notes.

## Branching And Merge Discipline
- `main` remains releasable.
- Short-lived feature branches per engineer.
- Rebase frequently; merge only with passing checks.
- No direct commits to `main` for large features unless explicitly agreed.

## Workstream Split (Near-Term)
1. Engineer A:
- Save/load + project schema hardening.

2. Engineer B:
- Shot capture/apply/sequencing in V2 UI.

3. Engineer C:
- Rendering reliability and asset loader behaviors.

4. Engineer D:
- Tauri ingestion metadata command + UI bridge contract.

## Definition Of Done
- Feature shipped with docs update in `OA-Codex-brain`.
- No unresolved console errors in normal path.
- Type/build checks pass.
- Known limitations are explicitly recorded.
