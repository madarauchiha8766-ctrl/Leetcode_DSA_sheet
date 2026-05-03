@echo off
REM Task Manager API - Single Click Run Script
REM This batch file installs dependencies and starts the API server

echo.
echo ======================================
echo  Task Manager REST API
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

REM Start the server
echo.
echo [+] Starting Task Manager API Server...
echo.
echo Server running on: http://localhost:3000
echo.
echo API Endpoints:
echo   GET  /tasks              - Get all tasks
echo   GET  /tasks/:id          - Get specific task
echo   POST /tasks              - Create new task
echo   PATCH /tasks/:id/status  - Update task status
echo   DELETE /tasks/:id        - Delete specific task
echo   DELETE /tasks            - Delete all completed tasks
echo.
echo Press CTRL+C to stop the server
echo.

call npm start

pause
