#!/bin/bash
# MStorm Studio 2026 - Linux/macOS Launcher

# Verify Node.js
if ! command -v node &> /dev/null; then
    echo "[ERROR] Node.js not found! Please install it (v18+) from https://nodejs.org"
    exit 1
fi

# Verify npm
if ! command -v npm &> /dev/null; then
    echo "[ERROR] npm not found! Please install npm."
    exit 1
fi

# Check if port 1420 is already in use
if lsof -Pi :1420 -sTCP:LISTEN -t >/dev/null ; then
    echo "[WARNING] Port 1420 is already in use."
    echo "This may prevent MStorm from launching correctly."
    echo "To free it, you can run: fuser -k 1420/tcp"
    echo "------------------------------------------------------------"
fi

# First-time setup / node_modules check
if [ ! -d "node_modules" ]; then
    echo "============================================================"
    echo "[MStorm Studio] FIRST-TIME SYSTEM CHECK"
    echo "============================================================"
    echo "[1/2] Node.js version: $(node -v)"
    echo "[2/2] Installing storytelling engine dependencies..."
    npm install
    echo "[SUCCESS] System check complete!"
    echo "============================================================"
    sleep 1
fi

echo "[MStorm Studio] Launching Professional Storytelling Engine..."
npm run dev
