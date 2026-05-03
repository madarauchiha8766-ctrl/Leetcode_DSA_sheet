## Quick Start Guide

### 1. Install Dependencies
```bash
npm install
```

### 2. Start the Server
```bash
npm start
```
Or for development with auto-restart:
```bash
npm run dev
```

### 3. Test the API

You can use any of these methods:

#### Option A: Using cURL (Command Line)
```bash
# Create a task
curl -X POST http://localhost:3000/tasks \
  -H "Content-Type: application/json" \
  -d '{"title":"My First Task","description":"Learning Express"}'

# Get all tasks
curl http://localhost:3000/tasks

# Update task status
curl -X PATCH http://localhost:3000/tasks/1/status \
  -H "Content-Type: application/json" \
  -d '{"status":"completed"}'

# Delete a task
curl -X DELETE http://localhost:3000/tasks/1
```

#### Option B: Using REST Client Extension (VSCode)
1. Install the "REST Client" extension by Huachao Mao
2. Open `requests.http` file
3. Click "Send Request" button above each request

#### Option C: Using Postman
1. Download Postman: https://www.postman.com/downloads/
2. Import requests from `requests.http` or create them manually
3. Send requests to `http://localhost:3000`

---

## API Testing Workflow

### Step 1: Create Tasks
```bash
POST /tasks
Body: { "title": "Buy groceries", "description": "Milk, bread, eggs" }
```

### Step 2: View All Tasks
```bash
GET /tasks
```

### Step 3: Update Task Status
```bash
PATCH /tasks/1/status
Body: { "status": "completed" }
```

### Step 4: Delete Completed Tasks
```bash
DELETE /tasks
```

---

## Complete Example

```bash
# 1. Start server (in terminal 1)
npm start

# 2. In terminal 2, create a task
curl -X POST http://localhost:3000/tasks \
  -H "Content-Type: application/json" \
  -d '{"title":"Learn Node.js"}'

# Response:
# {
#   "success": true,
#   "message": "Task created successfully",
#   "data": {
#     "id": 1,
#     "title": "Learn Node.js",
#     "description": "",
#     "status": "pending",
#     "createdAt": "2026-05-03T10:30:00.000Z",
#     "updatedAt": "2026-05-03T10:30:00.000Z"
#   }
# }

# 3. Get all tasks
curl http://localhost:3000/tasks

# 4. Mark task as completed
curl -X PATCH http://localhost:3000/tasks/1/status \
  -H "Content-Type: application/json" \
  -d '{"status":"completed"}'

# 5. Delete all completed tasks
curl -X DELETE http://localhost:3000/tasks
```

---

## Troubleshooting

### Port Already in Use
If port 3000 is already in use:
1. Change PORT in `server.js` to another number (e.g., 3001)
2. Use: `lsof -i :3000` to find what's using the port
3. Kill the process: `kill -9 <PID>`

### Module Not Found
```bash
# Make sure dependencies are installed
npm install
```

### Server Not Responding
1. Check if server is running
2. Verify the URL is correct
3. Check console for errors
4. Restart the server with: `npm start`

---

## Features Implemented

✅ Task 1: Create API routes for adding tasks (POST /tasks)
✅ Task 2: Retrieve all tasks using GET requests (GET /tasks)
✅ Task 3: Update task status (PATCH /tasks/:id/status and PUT /tasks/:id)
✅ Task 4: Delete tasks when completed (DELETE /tasks/:id and DELETE /tasks)
✅ Task 5: Return task data in JSON format (All responses are JSON)

---

## Next Steps

After testing the API, you can:
1. Deploy to a cloud platform (Heroku, AWS, Azure, etc.)
2. Add database integration (MongoDB, PostgreSQL)
3. Implement authentication
4. Add task filtering and pagination
5. Create a frontend UI
