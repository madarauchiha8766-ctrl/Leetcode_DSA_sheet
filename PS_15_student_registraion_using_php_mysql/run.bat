@echo off
echo Setting up Student Complaint Registration System...

:: Import database using XAMPP MySQL client
echo Importing database schema...
c:\xampp\mysql\bin\mysql.exe -u root -e "SOURCE database.sql"

echo Starting PHP Built-in Server on port 8015...
start http://localhost:8015/

:: Run PHP Server in the foreground
php -S localhost:8015
pause
