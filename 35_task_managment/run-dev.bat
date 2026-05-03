@echo off
REM Task Manager API - Development Mode with Auto-Restart
REM This batch file runs the server with auto-reload on file changes

echo.
echo ======================================
echo  Task Manager REST API (Dev Mode)
echo ======================================
echo.

REM Navigate to project directory
cd /d "%~dp0"

REM Check if node_modules exists, if not install dependencies
if not exist "node_modules" (
    echo.
    echo [*] Installing dependencies...
    echo.
    call npm install
    if errorlevel 1 (
        echo.
        echo [ERROR] Failed to install dependencies!
        echo Make sure Node.js and npm are installed.
        echo Download from: https://nodejs.org/
        echo.
        pause
        exit /b 1
    )
)

REM Start the server in development mode with auto-restart
echo.
echo [+] Starting Task Manager API Server in Development Mode...
echo.
echo Server running on: http://localhost:3000
echo.
echo The server will automatically restart when you save changes.
echo.
echo Press CTRL+C to stop the server
echo.

call npm run dev

pause
