# Brainstorm Ideas

## Product Ideas
1. Director Presets
- One-click scene setup templates:
  - Dialogue close-up.
  - Two-shot conversation.
  - Stage wide.
- Benefit: faster first frame for new users.

2. Shot Graph Instead Of Timeline
- Preserve anti-timeline ethos while supporting structure.
- Model story as nodes:
  - Shot.
  - Transition.
  - Intent note.

3. Semantic Asset Tags
- Treat assets as behavioral units:
  - Character archetype.
  - Prop interaction affordances.
  - Lighting compatibility tags.

4. Constraint-Based Blocking
- "Stand here and face actor B" constraints for quick staging.
- Keep direct manipulation while adding intent-driven controls.

## AI Layer Ideas
1. AI Preview Toggle
- Low-latency stylized preview mode.
- Separate from final render queue.

2. Director Prompt Profiles
- Curated prompt packs mapped to style presets.
- Avoid open-ended prompt complexity for typical users.

3. Frame Metadata Contract
- Export scene depth, segmentation, and camera metadata with each frame.
- Enables deterministic AI post pipeline and reproducible outputs.

## Engineering Ideas
1. Scene Schema Versioning
- Embed schema version in `.mstorm` to support future migrations.

2. Deterministic Save/Load Tests
- Golden test assets that must roundtrip exactly.

3. Performance Budget
- Track frame time and interaction latency as first-class metrics.

4. Ingestion Dry-Run Mode
- Parse and map assets without mutating project files.
- Display report before import commit.

## Strategic Idea
Build MStorm as a two-layer creative system:
1. Fast interactive directing layer.
2. Optional cinematic enhancement layer.

This preserves the core ethos and unlocks higher-end output without sacrificing workflow speed.
