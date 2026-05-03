@echo off
REM Blog Management API - Single Click Launcher
REM This batch file starts the Express.js blog API server

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

REM Start the server
call npm start

REM Pause to keep window open if there's an error
if errorlevel 1 (
    echo.
    echo ERROR: Failed to start server
    pause
)
