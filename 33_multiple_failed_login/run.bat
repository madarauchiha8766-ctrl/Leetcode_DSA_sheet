@echo off
cd /d "%~dp0"
echo Starting Spring Boot Application...
.\mvnw.cmd spring-boot:run
pause
