# 🌌 MStorm Studio 2026 (aka StorySandbox)

> **"Cinematic Storytelling at the Speed of Play."**

MStorm Studio 2026 is a professional-grade, high-performance cinematic storytelling engine built for rapid scene creation, character interaction, and stage blocking. It is inspired by the legendary **Moviestorm** heritage, redesigned from the ground up for the modern web and native desktop.

---

## 🎭 The "Golden Loop" Philosophy
MStorm is built to maintain a "Golden Loop": every creative action—from moving a character to changing an animation—must result in a visual update in **less than one second**. No heavy renders, no "baking" wait times.

## 🚀 Current Features (Verified)
- **Cinematic Viewport**: High-fidelity 3D rendering via Three.js/R3F.
- **Click-to-Animate**: Intuitive character interaction (Cycle through Idle, Walk, and Wave).
- **Direct Manipulation**: Professional 3D gizmos (Drei PivotControls) for millimetric entity placement.
- **Stage Grounding**: Integrated grid and floor system for spatial reference.
- **Multi-Entity Support**: Manage complex scenes with actors and props.

## 📦 Getting Started

### Prerequisites
- [Node.js](https://nodejs.org/) (v18+)
- [npm](https://www.npmjs.com/) (v9+)

### 🪟 Windows (Recommended)
Double-click `START_MSTORM.bat` in the root directory. This script will automatically verify your environment, install dependencies, and launch the dev server.

### 🐧 Linux Mint / 🍎 macOS
```bash
chmod +x START_MSTORM.sh
./START_MSTORM.sh
```

### 💻 Development Commands
- `npm install` - Setup project
- `npm run dev` - Launch local development viewport (`http://localhost:1420`)
- `npm run build` - Create production bundle

## 🛠️ Project Roadmap
- [x] **Phase 3 (Interaction Core)**: Click-to-animate and direct manipulation. (Completed)
- [ ] **Phase 4 (UI Overhaul)**: Transform Inspector & Material Editor.
- [ ] **Phase 5 (Cinematic Lighting)**: Bloom, SSR, Contact Shadows.
- [ ] **Phase 6 (Camera Control)**: Bezier-path camera tracks and shot sequencing.

## 📜 Documentation
- [Linux Mint Bring-Up Guide](docs/linux-mint-bring-up.md)
- [Cross-Platform Development](docs/cross-platform-development.md)
- [Architecture Overview](docs/02_core_architecture.md)
- [Handoff Guide](docs/handoff_guide.md)

## 🤝 Contributing
This is an open "Story Sandbox". Contributions to the core engine or additional GLTF assets are welcome.

## ⚖️ License
*License pending (MIT recommended for public release).*

---
**Status**: Interaction Loop Verified 🟢 | **GitHub Ready**
