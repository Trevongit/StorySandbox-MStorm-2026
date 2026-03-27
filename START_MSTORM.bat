@echo off
set "CONFIDENCE_FILE=.mstorm_confidence"
:: Optional Windows fallback if Node is not in PATH
set "NODE_PATH=C:\Program Files\nodejs"
if exist "%NODE_PATH%\node.exe" (
    set "PATH=%NODE_PATH%;%PATH%"
)

if not exist "%CONFIDENCE_FILE%" (
    echo ============================================================
    echo [MStorm Studio] FIRST-TIME SYSTEM CHECK
    echo ============================================================
    
    echo [1/3] Verifying Node.js environment...
    node -v >nul 2>&1
    if %errorlevel% neq 0 (
        echo [ERROR] Node.js not found! 
        echo Please ensure Node.js is installed from https://nodejs.org
        pause
        exit /b 1
    )
    node -v
    
    echo [2/3] Synchronizing storytelling engine dependencies...
    echo This may take a moment on the first run.
    call npm install
    
    echo [3/3] Establishing confidence...
    echo %DATE% %TIME% > "%CONFIDENCE_FILE%"
    echo [SUCCESS] System check complete!
    echo ============================================================
    timeout /t 2 >nul
)

echo [MStorm Studio] Launching Professional Storytelling Engine...
npm run dev
