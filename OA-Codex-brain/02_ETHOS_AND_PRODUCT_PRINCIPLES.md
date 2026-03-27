# Ethos And Product Principles

## Core Ethos
- MStorm is a director-first storytelling tool, not a technical DCC.
- Interaction speed and creative flow are more important than feature volume.
- Users should be able to stage and iterate without wrestling timelines, keyframes, or modal-heavy workflows.

## The Golden Loop
- Definition: user action to visual feedback should happen in under one second.
- This is the primary product quality metric.
- Any technical decision that harms this loop should be treated as suspect.

## Foundational Principles Carried From Moviestorm
- Separate world state from story layer (scene vs shots).
- Prefer prebuilt animation semantics over raw low-level rig control.
- Provide immediate visible results and avoid long render waits in directing flow.
- Treat assets as semantic entities (characters, props, behaviors), not just meshes.
- Keep workflow accessible to creators with low technical overhead.

## Explicit Anti-Patterns
- Do not introduce timeline-keyframe complexity into core directing loop.
- Do not rely on modal UX that blocks canvas interaction.
- Do not architect features that require heavy setup before users can create first shots.

## Technical Implications
- State model should cleanly separate:
  - Scene entities and environment.
  - Camera shots and sequencing.
  - Playback/animation intent.
- Undo/redo must be reliable for all direct manipulation actions.
- Asset loading must fail safely and preserve creative continuity.
- Desktop/native and AI features should augment workflow, not slow it down.

## Product Positioning
- V1 validated interaction primitives quickly.
- V2 should become the stable, extensible implementation.
- AI layer should be an optional cinematic enhancement stage, not a required gate for normal creation.
