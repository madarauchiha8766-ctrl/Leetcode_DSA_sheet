@echo off
echo =========================================
echo    Starting Lumina Books (Spring Boot)
echo =========================================
echo.

echo [1/3] Checking Maven Wrapper...
if not exist "mvnw.cmd" (
    echo Error: mvnw.cmd not found. Ensure you are in the bookstore directory.
    pause
    exit /b 1
)

echo [2/3] Starting Spring Boot Server on port 8080...
echo (This may take a minute to download dependencies on the first run)
echo.

:: Start the application in the background or same window
:: We will start it in the same window so we can see the logs
start "Lumina Books Server" cmd /c "mvnw.cmd spring-boot:run"

echo [3/3] Waiting for server to initialize...
timeout /t 15 /nobreak > nul

echo Opening browser to http://localhost:8080 ...
start http://localhost:8080

echo.
echo Application is running! 
echo Close the "Lumina Books Server" command window to stop the server.
pause
