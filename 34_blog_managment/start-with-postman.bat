@echo off
REM Blog Management API - Launcher with Auto-Open Postman
REM This batch file starts the Express.js server and opens Postman

setlocal enabledelayedexpansion

REM Get the directory where this batch file is located
set "PROJECT_DIR=%~dp0"

REM Change to project directory
cd /d "%PROJECT_DIR%"

REM Check if node_modules exists
if not exist "node_modules" (
    echo.
    echo ================================
    echo Installing dependencies...
    echo ================================
    call npm install
    if errorlevel 1 (
        echo.
        echo ERROR: Failed to install dependencies
        pause
        exit /b 1
    )
)

REM Clear screen and display startup message
cls
echo.
echo ================================
echo Blog Management API
echo ================================
echo.
echo Starting server...
echo.

REM Start the server in a new window
start "Blog API Server" cmd /k npm start

REM Wait a few seconds for server to start
timeout /t 3 /nobreak

REM Try to open Postman if collection file exists
if exist "blog-api.postman_collection.json" (
    echo.
    echo Opening Postman with API collection...
    
    REM Try to find and open Postman
    if exist "C:\Program Files\Postman\Postman.exe" (
        start "" "C:\Program Files\Postman\Postman.exe" "blog-api.postman_collection.json"
    ) else if exist "C:\Program Files (x86)\Postman\Postman.exe" (
        start "" "C:\Program Files (x86)\Postman\Postman.exe" "blog-api.postman_collection.json"
    ) else (
        echo.
        echo NOTE: Postman not found in default locations.
        echo Please open Postman manually and import: blog-api.postman_collection.json
        echo.
    )
)

echo.
echo ================================
echo Server is running!
echo API URL: http://localhost:3000
echo ================================
echo.

pause
