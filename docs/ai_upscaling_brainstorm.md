# 🔮 AI Cinematic Layer - Creative Brainstorm

## Concept
The "Interactive Layer" (Three.js) is for directing. The "Cinematic Layer" (AI) is for the final output. This is how we take a low-poly browser scene and make it look like a blockbuster.

## 1. Frame-to-Frame Consistency
We will use **ControlNet** (Canny or Depth) on the Three.js viewport frames. This ensures that the character's pose and position remain 100% stable while the AI replaces the textures and lighting with cinematic realism.

## 2. Style Prompts
The user doesn't write complex AI prompts. They select "Director Filters" in the UI:
*   **"Film Noir":** High contrast, black and white, rainy streets.
*   **"Pixar Style":** Soft lighting, vibrant colors, expressive plastic textures.
*   **"Cyberpunk 2077":** Neon glows, metallic surfaces, rainy night.
*   **"Hand-Drawn Anime":** Cel-shaded, vibrant line art.

## 3. Background Expansion (Outpainting)
Since the user's local scene might be limited, the AI can "expand" the environment beyond the rendered grid, adding mountains, cities, or skyboxes that match the mood.

## 4. Immediate Preview (LCM / Turbo)
Using **Latent Consistency Models (LCM)**, we can give a "Live AI Preview" of the scene at ~5 frames per second, allowing the user to direct while seeing the AI's final vision in real-time.

## 5. Voice-to-Animation (The Moviestorm Legacy)
Just like the original Moviestorm, we can take an audio recording, use **Whisper** for text-to-speech alignment, and then use **LiveLink/Face-AI** to automatically drive the character's mouth and gestures.

---
*Roadmap Item: Integrate a 'Render with AI' button in the TopBar that sends the current viewport + metadata to an API (ComfyUI or Replicate).*