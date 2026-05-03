const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
const PORT = 3000;

// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Serve static files (HTML, CSS, JS)
app.use(express.static(path.join(__dirname)));

// In-memory storage for tasks
let tasks = [];
let nextTaskId = 1;

// Routes

// Serve frontend HTML
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

// API Routes (with /api prefix)

// 1. GET all tasks
app.get('/api/tasks', (req, res) => {
  res.json({
    success: true,
    count: tasks.length,
    data: tasks
  });
});

// 2. GET a specific task by ID
app.get('/api/tasks/:id', (req, res) => {
  const task = tasks.find(t => t.id === parseInt(req.params.id));
  
  if (!task) {
    return res.status(404).json({
      success: false,
      message: 'Task not found'
    });
  }
  
  res.json({
    success: true,
    data: task
  });
});

// 3. POST - Add a new task
app.post('/api/tasks', (req, res) => {
  const { title, description } = req.body;

  // Validation
  if (!title || title.trim() === '') {
    return res.status(400).json({
      success: false,
      message: 'Title is required'
    });
  }

  const newTask = {
    id: nextTaskId++,
    title: title.trim(),
    description: description || '',
    status: 'pending',
    createdAt: new Date(),
    updatedAt: new Date()
  };

  tasks.push(newTask);

  res.status(201).json({
    success: true,
    message: 'Task created successfully',
    data: newTask
  });
});

// 4. PUT - Update task status
app.put('/api/tasks/:id', (req, res) => {
  const task = tasks.find(t => t.id === parseInt(req.params.id));

  if (!task) {
    return res.status(404).json({
      success: false,
      message: 'Task not found'
    });
  }

  // Update allowed fields
  if (req.body.title !== undefined) {
    task.title = req.body.title.trim();
  }
  if (req.body.description !== undefined) {
    task.description = req.body.description;
  }
  if (req.body.status !== undefined) {
    const validStatuses = ['pending', 'completed'];
    if (!validStatuses.includes(req.body.status)) {
      return res.status(400).json({
        success: false,
        message: 'Invalid status. Allowed: pending, completed'
      });
    }
    task.status = req.body.status;
  }

  task.updatedAt = new Date();

  res.json({
    success: true,
    message: 'Task updated successfully',
    data: task
  });
});

// 5. PATCH - Update task status (alternative lighter endpoint)
app.patch('/api/tasks/:id/status', (req, res) => {
  const task = tasks.find(t => t.id === parseInt(req.params.id));

  if (!task) {
    return res.status(404).json({
      success: false,
      message: 'Task not found'
    });
  }

  const { status } = req.body;
  
  if (!status) {
    return res.status(400).json({
      success: false,
      message: 'Status is required'
    });
  }

  const validStatuses = ['pending', 'completed'];
  if (!validStatuses.includes(status)) {
    return res.status(400).json({
      success: false,
      message: 'Invalid status. Allowed: pending, completed'
    });
  }

  task.status = status;
  task.updatedAt = new Date();

  res.json({
    success: true,
    message: 'Task status updated successfully',
    data: task
  });
});

// 6. DELETE - Delete a task
app.delete('/api/tasks/:id', (req, res) => {
  const taskIndex = tasks.findIndex(t => t.id === parseInt(req.params.id));

  if (taskIndex === -1) {
    return res.status(404).json({
      success: false,
      message: 'Task not found'
    });
  }

  const deletedTask = tasks.splice(taskIndex, 1);

  res.json({
    success: true,
    message: 'Task deleted successfully',
    data: deletedTask[0]
  });
});

// 7. DELETE - Delete all completed tasks
app.delete('/api/tasks', (req, res) => {
  const initialCount = tasks.length;
  tasks = tasks.filter(task => task.status !== 'completed');
  const deletedCount = initialCount - tasks.length;

  res.json({
    success: true,
    message: `${deletedCount} completed task(s) deleted`,
    remainingTasks: tasks.length,
    data: tasks
  });
});

// API Documentation endpoint
app.get('/api', (req, res) => {
  res.json({
    message: 'Task Manager API',
    version: '1.0.0',
    endpoints: {
      'GET /': 'Task Manager Web UI',
      'GET /api': 'API Documentation',
      'GET /api/tasks': 'Get all tasks',
      'GET /api/tasks/:id': 'Get a specific task',
      'POST /api/tasks': 'Create a new task',
      'PUT /api/tasks/:id': 'Update a task',
      'PATCH /api/tasks/:id/status': 'Update task status only',
      'DELETE /api/tasks/:id': 'Delete a specific task',
      'DELETE /api/tasks': 'Delete all completed tasks'
    }
  });
});

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.json({
    status: 'ok',
    message: 'Task Manager API is running',
    version: '1.0.0'
  });
});

// 404 handler
app.use((req, res) => {
  res.status(404).json({
    success: false,
    message: 'Endpoint not found'
  });
});

// Error handler
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({
    success: false,
    message: 'Internal Server Error',
    error: err.message
  });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Task Manager API running on http://localhost:${PORT}`);
  console.log(`Press CTRL+C to stop the server`);
});
