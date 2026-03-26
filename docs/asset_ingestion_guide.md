# 📂 Asset Ingestion Guide (For Team)

To start using your original Moviestorm assets in the 2026 Studio, we need to organize them so the GLTF loaders can find them.

## 1. Directory Structure
Create a folder named `public/assets` in the root. Inside, organize it as follows:

```text
C:\REPOO\StarterX1\
└── public/
    └── assets/
        ├── characters/   <-- Put .glb / .gltf files here
        ├── props/        <-- Put furniture/objects here
        └── animations/   <-- Put Mixamo / Moviestorm .fbx or .glb anims here
```

## 2. Character Requirements
*   **Format:** Preferred `.glb` (Binary GLTF) for speed.
*   **Rigging:** We recommend the **Mixamo Bone Structure** (Humanoid).
*   **Textures:** Ensure textures are embedded in the `.glb` or located in a subfolder named `textures`.

## 3. Ingesting 'Original' Folders
If you have the raw Java/Moviestorm assets:
1. Please copy the folders into `C:\REPOO\StarterX1\moviestorm_originals`.
2. I will then write a Python script to "scan" these folders and attempt to map the textures and models into the modern 2026 format.

---
*Ready to begin ingestion once the user provides the files!*