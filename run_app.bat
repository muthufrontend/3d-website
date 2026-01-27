@echo off
echo Setting up environment...
SET PATH=C:\Program Files\nodejs;%PATH%

echo Verifying Node.js...
node -v
if %errorlevel% neq 0 (
    echo Error: Node.js is still not found. Please reinstall Node.js from nodejs.org.
    pause
    exit /b
)

echo Installing dependencies...
call npm install

echo Starting Nano Banana website...
call npm run dev
pause
