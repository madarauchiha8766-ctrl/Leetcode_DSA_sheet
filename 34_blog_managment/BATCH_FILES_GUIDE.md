# Batch Files - Single Click Launchers

## Files Created

### 1. **run.bat** (Simple & Fast)
- **Purpose**: Quickest way to start the server
- **When to use**: After you've already run `npm install` once
- **What it does**: Directly runs `npm start`
- **Time**: ~2 seconds to launch

**Usage**: Double-click `run.bat`

---

### 2. **start-server.bat** (Recommended)
- **Purpose**: Full startup with automatic dependency check
- **When to use**: First time setup or when unsure about dependencies
- **What it does**:
  - Checks if `node_modules` folder exists
  - Runs `npm install` if needed
  - Starts the server
  - Keeps window open if there's an error
  - Shows friendly startup messages

**Usage**: Double-click `start-server.bat`

---

### 3. **start-with-postman.bat** (Full Testing Setup)
- **Purpose**: Start server AND automatically open Postman for testing
- **When to use**: When you want to start testing immediately
- **What it does**:
  - Checks and installs dependencies if needed
  - Starts server in a new window
  - Automatically opens Postman with the pre-configured collection
  - Displays server information

**Usage**: Double-click `start-with-postman.bat`

**Requirements**: Postman must be installed at one of these locations:
- `C:\Program Files\Postman\Postman.exe`
- `C:\Program Files (x86)\Postman\Postman.exe`

---

## Quick Start

### First Time Setup
1. Extract/open the project folder
2. Double-click **`start-server.bat`**
3. Wait for "Blog Management API running on http://localhost:3000" message

### Subsequent Runs
- **Just start the server**: Double-click **`run.bat`**
- **Start and test with Postman**: Double-click **`start-with-postman.bat`**

---

## What Happens When You Click

### start-server.bat
```
Step 1: Navigate to project folder
Step 2: Check if node_modules exists
Step 3: If missing → Run npm install
Step 4: Run npm start
Step 5: Display "API running on http://localhost:3000"
```

### start-with-postman.bat
```
Step 1-4: Same as start-server.bat
Step 5: Open Postman window
Step 6: Auto-load blog-api.postman_collection.json
Step 7: Show info and wait for you to press a key
```

---

## Troubleshooting

### Nothing happens when I click the .bat file?
- Right-click → Open with → Choose "Command Prompt"
- Or move the .bat file to a path without spaces

### Server says "Port 3000 already in use"?
- A previous instance is still running
- Open Task Manager → Find and kill any `node.exe` processes
- Then try running the .bat file again

### Postman doesn't open automatically?
- Install Postman from https://www.postman.com/downloads/
- Or manually import `blog-api.postman_collection.json`

### "npm: command not found"?
- Node.js is not installed
- Download and install from https://nodejs.org/ (LTS version)

---

## Creating a Desktop Shortcut

To make it even easier, create a Windows shortcut:

1. Right-click on `start-server.bat` → Send to → Desktop (create shortcut)
2. Or manually:
   - Right-click desktop → New → Shortcut
   - Target: `C:\Users\omkar\OneDrive\Desktop\34\start-server.bat`
   - Name: "Blog API Server"

Now you can start your API from the desktop!

---

## Server URLs

Once running, access the API at:
- **Health Check**: http://localhost:3000/api/health
- **All Posts**: http://localhost:3000/api/posts
- **Postman Collection**: Import `blog-api.postman_collection.json`

---

## Stopping the Server

- Press `Ctrl + C` in the command window
- Or close the command window
- Or use Task Manager to kill the node process

---

## File Descriptions

| File | Size | Purpose |
|------|------|---------|
| `run.bat` | ~200 bytes | Ultra-fast launcher |
| `start-server.bat` | ~1.5 KB | Recommended launcher |
| `start-with-postman.bat` | ~2 KB | Full testing setup |
