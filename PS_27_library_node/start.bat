@echo off
echo Starting Library Management System...

IF NOT EXIST "node_modules\" (
    echo Installing dependencies...
    npm install
)

echo Starting server...
npm start
