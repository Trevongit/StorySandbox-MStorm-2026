# Action Plan And Roadmap

## Goal
Create one coherent production path for MStorm V2 while preserving the Golden Loop and selectively porting V1 strengths.

## Phase A: Repository Coherence (High Priority)
1. Declare canonical runtime:
- `src/` (V2) is primary.
- `index.html` is legacy reference/demo unless explicitly maintained.
2. Rewrite README to reflect real current structure and valid docs links.
3. Consolidate duplicate docs and remove path references to external/local legacy locations.
4. Add one "development status" document that is updated each sprint.

## Phase B: V2 Feature Parity For Core Directing
1. Implement V2 save/load `.mstorm` project flow.
2. Implement V2 shot capture, shot list, and shot apply behavior.
3. Connect playback control to entity animation state.
4. Add transform inspector and material editor (existing roadmap Phase 4).

## Phase C: Quality And Stability
1. Normalize dependency versions to eliminate `--legacy-peer-deps` requirement.
2. Add lint configuration and a minimal CI pipeline:
- Install check.
- Type check/build check.
- Lint check.
3. Add smoke tests for:
- Entity add/remove/select.
- Undo/redo.
- Save/load roundtrip.

## Phase D: Asset Ingestion Milestone
1. Define ingestion manifest schema:
- Source path.
- Asset type.
- Rig compatibility.
- Material mapping.
2. Implement `scan_mstorm_assets` Rust command to return structured metadata.
3. Build V2 UI for import preview and mapping.
4. Add deterministic conversion pipeline and logging.

## Phase E: AI Cinematic Layer (Optional Pipeline)
1. Add "Render With AI" as a non-blocking export workflow.
2. Start with still-frame style transfer for proof.
3. Add temporal consistency for shot sequences.
4. Keep interaction layer independent from final AI rendering layer.

## 30-Day Tactical Plan (Suggested)
1. Week 1:
- Repo/doc coherence + dependency normalization + CI baseline.
2. Week 2:
- V2 save/load and shot capture/apply.
3. Week 3:
- Transform inspector and material editor.
4. Week 4:
- Asset ingestion MVP in Tauri with metadata preview.

## Success Metrics
- First interaction visible within 1 second on typical dev hardware.
- New engineer can run and understand repo in under 30 minutes.
- Save/load roundtrip is deterministic and lossless for core scene state.
- At least one ingestion flow works end-to-end on local sample assets.
