@echo off
echo Starting PHP Development Server...
echo The game should open in your default browser shortly.
echo To stop the server, press Ctrl+C in this window.

REM Open the browser
start http://localhost:8000/tic_tac_toe.php

REM Start the PHP server
php -S localhost:8000
