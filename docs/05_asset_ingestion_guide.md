# 📂 Asset Ingestion Guide (For Team)

To start using your original Moviestorm assets in MStorm Studio 2026, we need to organize them so the GLTF loaders can find them.

## 1. Directory Structure
Create a folder named `public/assets` in the root. Inside, organize it as follows:

```
public/
    └── assets/
        ├── characters/   <-- Put .glb / .gltf files here
        ├── props/        <-- Put furniture/objects here
        └── animations/   <-- Put Mixamo / Legacy Moviestorm .fbx or .glb anims here
```

## 2. Character Requirements
*   **Format:** `.glb` (Binary GLTF) is preferred for performance.
*   **Rigging:** Must use a standard Humanoid bone structure (Mixamo-compatible).
*   **Textures:** Ensure textures are embedded in the `.glb` or located in a subfolder named `textures`.

## 3. Ingesting 'Original' Folders
If you have the raw legacy Moviestorm assets:
1. Copy the folders into `<repo-root>/moviestorm_originals`.
2. I will then write a Python script to "scan" these folders and attempt to map the textures and models into the modern 2026 format.

---
*Roadmap Item: Automated Rust-based ingestor in src-tauri will eventually handle this directly from the UI.*
