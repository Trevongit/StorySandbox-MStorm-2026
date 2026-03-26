# MStorm Studio 2026 - Technical Knowledge Base (AI-Ingestable)

## 0. System Overview
MStorm Studio 2026 is a low-latency, "Zero-Friction" 3D storytelling sandbox, inspired by the legacy of Moviestorm.
- **V1 (Current Stable):** Standalone Vanilla JS + Three.js [index.html](file:///C:/REPOO/StarterX1/index.html).
- **V2 (In-Development):** React + Zustand + R3F + Tauri [v2_src/](file:///C:/REPOO/StarterX1/v2_src/).

---

## 1. V1 Architecture (Self-Contained Sandbox)
The V1 environment is designed for **instant portability**. It requires zero dependencies and bypasses CORS via inlining.

### 1.1 Data Model
Current scene state is managed via a global `objects` array.
- **Serialization:** Scene is serialized to `.mstorm` (JSON).
- **Schema:**
  ```json
  {
    "name": "Project Name",
    "objects": [{ "type": "actor|prop", "position": [x,y,z], "animation": "id" }],
    "shots": [{ "id": 1, "cameraPos": [x,y,z], "orbitTarget": [x,y,z] }],
    "env": { "lightIntensity": float, "floorColor": "hex" }
  }
  ```

### 1.2 Rendering Engine
- **Three.js Core:** Uses a single `WebGLRenderer` with `PCFSoftShadowMap`.
- **Lighting:** Three-point setup (Ambient + Directional Main + Directional Fill).
- **Controls:** `OrbitControls` for view manipulation, synced with `TransformControls` for object manipulation. 
- **Interaction:** Raycasting from mouse coordinates to identifying objects in the `objects` array.

---

## 2. Animation System (Procedural)
The current MVP uses **Procedural Vertex/Transform Manipulation** rather than skeletal rigging for performance and simplicity in the V1 build.
- **Idle:** Sine-wave bobbing on the Y-axis.
- **Talk:** High-frequency Y-scaling and Z-rotation (Wobble).
- **Wave:** Sine-wave rotation on the Z-axis.

---

## 3. Cinematic Shot System
Shots are **Camera State Snapshots**.
- Captures: `camera.position`, `camera.quaternion`, and `orbit.target`.
- Retrieval: Overwrites current camera/orbit state. Smooth interpolation (Lerp) is prepped for Phase 3.

---

## 4. Development Strategy & Native Pivot
We are transitioning to a **Native Tauri Application** to solve:
1. **Local Asset Access:** Direct directory scanning of legacy Moviestorm asset folders (mapping to MStorm format).
2. **AI Processing:** Rust-based bridge to local Stable Diffusion/ComfyUI instances.
3. **Threading:** Offloading heavy pathfinding or asset ingestion to the Rust backend.

---

## 5. Known Integration Points
- **GLTF Loaders:** Prepped in `v2_src` for real character models.
- **Zustand Stores:** Used in V2 for state separation.
- **Mixamo Bridge:** Planned for high-fidelity animations.
