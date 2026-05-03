# Task Manager REST API - Project & Viva Preparation Guide

A simple and efficient Task Manager REST API built with Express.js for managing daily tasks. This README includes full project documentation as well as a comprehensive **Oral Exam (Viva) Preparation Guide** to help you explain the project in interviews or exams.

---

## 🎓 Oral Exam (Viva) Preparation Section

This section contains common definitions, concepts, and questions that an examiner might ask about this specific project.

### 1. What is a REST API?
**REST** stands for **Representational State Transfer**. It is an architectural style for designing networked applications. A REST API allows different systems to communicate over HTTP by sending and receiving data (usually in JSON format).
* **Key Principles:**
  * **Stateless:** Each request from the client to server must contain all the information needed to understand and process the request. The server doesn't store client context between requests.
  * **Client-Server Architecture:** Separation of user interface concerns (frontend) from data storage concerns (backend).
  * **Uniform Interface:** Standardized way of interacting with the resources (using standard HTTP methods).

### 2. What is Express.js?
**Express.js** is a fast, unopinionated, minimalist web framework for **Node.js**. 
* **Why use it here?** Node.js natively provides an `http` module, but it is verbose and complex. Express simplifies the process of creating a server, defining routes, handling HTTP requests, and managing middleware.

### 3. What are HTTP Methods? Which ones did you use?
HTTP methods define the action to be performed on a resource. In this project, you implemented:
* **GET:** Used to retrieve data (e.g., fetching all tasks or a single task by ID).
* **POST:** Used to submit new data to the server (e.g., creating a new task).
* **PUT:** Used to completely replace/update an existing resource (e.g., updating a task's title, description, and status).
* **PATCH:** Used to apply partial modifications to a resource (e.g., updating *only* the status of a task to 'completed').
* **DELETE:** Used to remove a resource (e.g., deleting a specific task or all completed tasks).

### 4. What is the difference between PUT and PATCH?
* **PUT** replaces the entire resource. If you send a PUT request, you usually send the complete updated object.
* **PATCH** applies a partial update. You only send the fields you want to change (like just sending the `status` field to update it).

### 5. What is JSON?
**JSON (JavaScript Object Notation)** is a lightweight format for storing and transporting data. It is easy for humans to read and write, and easy for machines to parse and generate. In this project, the API accepts JSON as input and returns JSON as output.

### 6. What is Middleware?
Middleware functions are functions that have access to the request object (`req`), the response object (`res`), and the `next` middleware function in the application's request-response cycle.
* **In this project:** You used `body-parser` (or `express.json()`). This middleware parses incoming requests with JSON payloads so that you can access the data inside `req.body`.

### 7. Explain the HTTP Status Codes used in your API.
Status codes tell the client the result of their request.
* **200 OK:** The request was successful (Used for GET, PUT, PATCH, DELETE).
* **201 Created:** The request was successful, and a new resource was created (Used for POST).
* **400 Bad Request:** The server could not understand the request due to invalid syntax or missing data (e.g., missing task title).
* **404 Not Found:** The server cannot find the requested resource (e.g., requesting a task ID that doesn't exist).
* **500 Internal Server Error:** A generic error message when the server encounters an unexpected condition.

### 8. How is data stored in this project? What are the pros and cons?
* **Storage:** Data is stored in an **in-memory array** (`let tasks = []`).
* **Pros:** Very fast, easy to set up, requires no external database configuration. Perfect for simple demonstrations.
* **Cons:** **Data is volatile.** The moment the Node.js server restarts or crashes, all task data is permanently lost. Real-world applications use databases like MongoDB or PostgreSQL for persistent storage.

---

## 🚀 Project Features & Technical Details

✅ **Create tasks** - Add new tasks with title and description (POST)
✅ **Retrieve all tasks** - Get all tasks in JSON format (GET)
✅ **Get specific task** - Fetch a task by ID (GET)
✅ **Update tasks** - Update task title, description, and status (PUT)
✅ **Update status** - Change task status (pending/completed) (PATCH)
✅ **Delete tasks** - Remove individual tasks (DELETE)
✅ **Bulk delete** - Remove all completed tasks at once (DELETE)
✅ **Error handling** - Comprehensive validation and exact error messages

### Installation

1. Install dependencies:
```bash
npm install
```

### Running the API

**Development mode** (with auto-restart):
```bash
npm run dev
```

**Production mode**:
```bash
npm start
```
The API will be available at: `http://localhost:3000`

---

## 🌐 API Endpoints Reference

### 1. Get All Tasks
**GET** `/api/tasks`
```text
Returns all tasks in JSON format
Response: { success: true, count: number, data: [...] }
```

### 2. Get Specific Task
**GET** `/api/tasks/:id`
```text
Returns a specific task by ID
Example: GET /api/tasks/1
Response: { success: true, data: {...} }
```

### 3. Create New Task
**POST** `/api/tasks`
```text
Request Body:
{
  "title": "Buy groceries",
  "description": "Milk, eggs, bread"
}
Response: { success: true, message: "Task created successfully", data: {...} }
```

### 4. Update Task (Full Update)
**PUT** `/api/tasks/:id`
```text
Request Body:
{
  "title": "Updated title",
  "description": "Updated description",
  "status": "completed"
}
Response: { success: true, message: "Task updated successfully", data: {...} }
```

### 5. Update Task Status (Partial Update)
**PATCH** `/api/tasks/:id/status`
```text
Request Body: {"status": "completed"}
Valid statuses: "pending", "completed"
Response: { success: true, message: "Task status updated successfully", data: {...} }
```

### 6. Delete Task
**DELETE** `/api/tasks/:id`
```text
Deletes a specific task
Response: { success: true, message: "Task deleted successfully", data: {...} }
```

### 7. Delete All Completed Tasks
**DELETE** `/api/tasks`
```text
Deletes all tasks with status "completed"
Response: { success: true, message: "X completed task(s) deleted", remainingTasks: number, data: [...] }
```

---

## 📦 Task Object Structure Example
```json
{
  "id": 1,
  "title": "Complete Oral Exam Prep",
  "description": "Study REST APIs, Express.js, and HTTP methods",
  "status": "pending",
  "createdAt": "2026-05-03T10:30:00.000Z",
  "updatedAt": "2026-05-03T10:30:00.000Z"
}
```

## 🛠 Project Structure
```text
task-manager-api/
├── server.js          # Main Express server, endpoints, and logic
├── package.json       # Project dependencies (Express, Body-parser)
├── index.html         # Frontend interface
├── README.md          # This documentation file
└── .gitignore         # Git ignore file
```
