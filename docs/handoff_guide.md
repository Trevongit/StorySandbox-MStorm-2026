# StorySandbox - Handoff Guide

## Project Overview
StorySandbox (Codename for MStorm Studio 2026) is a zero-friction, browser-based storytelling sandbox. It separates the "World State" (Scenes) from the "Story Layer" (Shots).

## Cross-Platform Compatibility
This project is inherently **100% Cross-Platform**. Because it is built entirely on Web Technologies (HTML, React, Zustand, WebGL via Three.js), any team member can develop and run this project on **Windows, macOS, or Linux** without any compatibility issues. You just need a modern web browser.

## Component Architecture (V2)
Currently, the application runs via a standalone `babel-standalone` implementation in `index.html` to completely bypass Node.js requirements for rapid UI prototyping. In the final production state, this will be migrated to a Vite build system.

### Zustand Stores (`schema`)
*   `useSceneStore`: Central orchestrator for the Scene (World State). Stores `entities` inside an array with ID, transform, and type.
*   `useSelectionStore`: Tracks the currently clicked entity to attach the Drei `<TransformControls>` gizmo for translation/rotation/scaling.
*   `useAssetStore`: A stub store intended to hold the Master Manifest of all GLTF characters, props, and Mixamo animations available to the user.
*   `usePlaybackStore`: The core loop controller. Governs the "Play" state.

### Design Anti-patterns for Future Developers
*   **DO NOT** incorporate a timeline with keyframing.
*   **DO NOT** add modal popups over the 3D Canvas.
*   **DO NOT** break the "Golden Loop" (< 1 second to see the result of an action).