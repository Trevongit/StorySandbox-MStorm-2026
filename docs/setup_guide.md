# StorySandbox - Developer Setup Guide

## Running the Application
The active runtime is V2 via Vite (`src/`).  
The standalone `index.html` path remains as a legacy V1 reference/prototype.

### To Run Locally (Any OS: Linux, Windows, Mac):
1. Navigate to the project root directory.
2. Ensure `Node.js` v18+ is installed.
3. Run `npm install`.
4. Run `npm run dev`.

### Legacy V1 Runtime (Reference)
1. Open `index.html` directly in browser for the standalone V1 sandbox.
2. If local module loading is blocked, run a static server:
   * **Python:** `python3 -m http.server 8000`
   * **Node:** `npx serve .`
