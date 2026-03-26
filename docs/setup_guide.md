# StorySandbox - Developer Setup Guide

## Running the Application
Currently, the V2 Architecture runs entirely in the browser via ES Module Import Maps and Babel Standalone.

### To Run Locally (Any OS: Linux, Windows, Mac):
1. Navigate to the project root directory.
2. Double-click `index.html` to open it in your default browser (Chrome, Firefox, Edge, Safari).
3. If your browser blocks local CORS requests for ES Modules, simply run a static server in the directory:
   * **Python:** `python3 -m http.server 8000`
   * **Node:** `npx serve .`
   * **PHP:** `php -m S 127.0.0.1:8000`

### Future Migration to Vite:
When the team is ready to introduce complex unbundled dependencies, the stack will transition to Vite.
At that stage:
1. Ensure `Node.js` v18+ is installed on your Linux/Windows/Mac machine.
2. Run `npm install` in the root.
3. Run `npm run dev`.