@echo off
title Start PHP Login Module
color 0A

echo =========================================
echo       PHP Login Module Launcher
echo =========================================
echo.

echo [1/3] Starting XAMPP services (Apache and MySQL)...
:: Run XAMPP start script silently
start "" /MIN "c:\xampp\xampp_start.exe"

echo Waiting for database to initialize (5 seconds)...
timeout /t 5 /nobreak > nul

echo [2/3] Setting up the database...
:: Execute the SQL script to ensure database and tables exist
"c:\xampp\mysql\bin\mysql.exe" -u root -e "CREATE DATABASE IF NOT EXISTS login_module;"
"c:\xampp\mysql\bin\mysql.exe" -u root login_module < "%~dp0database.sql"
echo Database setup complete.
echo.

echo [3/3] Opening your browser...
start http://localhost/13

echo.
echo =========================================
echo All done! The project is now running.
echo You can safely close this terminal window.
echo =========================================
pause
