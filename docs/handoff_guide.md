# StorySandbox - Handoff Guide

## Project Overview
StorySandbox (Codename for MStorm Studio 2026) is a zero-friction, browser-based storytelling sandbox. It separates the "World State" (Scenes) from the "Story Layer" (Shots).

## Cross-Platform Compatibility
This project is inherently **100% Cross-Platform**. Because it is built entirely on Web Technologies (HTML, React, Zustand, WebGL via Three.js), any team member can develop and run this project on **Windows, macOS, or Linux** without any compatibility issues. You just need a modern web browser.

## Component Architecture (V2)
The active V2 runtime is now in `src/` (React + Zustand + R3F) and is built via Vite.  
The standalone `index.html` path remains as a legacy V1 reference implementation.

### Zustand Stores (`src/store/useStore.ts`)
*   `scenes`: world-state scene map and active scene selection.
*   `selectedEntityId`: focused entity for manipulation and interaction.
*   `history` / `redoStack`: snapshot-based undo/redo.
*   Store actions: add/remove/update entity, animation state, scene switching, undo/redo.

### Design Anti-patterns for Future Developers
*   **DO NOT** incorporate a timeline with keyframing.
*   **DO NOT** add modal popups over the 3D Canvas.
*   **DO NOT** break the "Golden Loop" (< 1 second to see the result of an action).
