const express = require('express');
const { v4: uuidv4 } = require('uuid');
const path = require('path');

// Initialize Express app
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json());
app.use(express.static(path.join(__dirname, '.')));

// CORS middleware
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
  if (req.method === 'OPTIONS') {
    return res.sendStatus(200);
  }
  next();
});

// In-memory database for blog posts
let blogPosts = [
  {
    id: uuidv4(),
    title: 'Welcome to My Blog',
    content: 'This is the first blog post. Feel free to create, read, update, or delete posts.',
    author: 'Admin',
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    id: uuidv4(),
    title: 'Getting Started with Express.js',
    content: 'Express.js is a minimal and flexible Node.js web application framework.',
    author: 'Tech Writer',
    createdAt: new Date(),
    updatedAt: new Date()
  }
];

// ==================== ROUTES ====================

// Serve index.html as root
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

// GET - Read all blog posts
app.get('/api/posts', (req, res) => {
  try {
    res.status(200).json({
      success: true,
      message: 'Blog posts retrieved successfully',
      data: blogPosts,
      count: blogPosts.length
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Error retrieving blog posts',
      error: error.message
    });
  }
});

// GET - Read a single blog post by ID
app.get('/api/posts/:id', (req, res) => {
  try {
    const post = blogPosts.find(p => p.id === req.params.id);

    if (!post) {
      return res.status(404).json({
        success: false,
        message: 'Blog post not found'
      });
    }

    res.status(200).json({
      success: true,
      message: 'Blog post retrieved successfully',
      data: post
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Error retrieving blog post',
      error: error.message
    });
  }
});

// POST - Create a new blog post
app.post('/api/posts', (req, res) => {
  try {
    const { title, content, author } = req.body;

    // Validation
    if (!title || !content || !author) {
      return res.status(400).json({
        success: false,
        message: 'Missing required fields: title, content, and author'
      });
    }

    // Create new post
    const newPost = {
      id: uuidv4(),
      title,
      content,
      author,
      createdAt: new Date(),
      updatedAt: new Date()
    };

    blogPosts.push(newPost);

    res.status(201).json({
      success: true,
      message: 'Blog post created successfully',
      data: newPost
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Error creating blog post',
      error: error.message
    });
  }
});

// PUT - Update a blog post
app.put('/api/posts/:id', (req, res) => {
  try {
    const { title, content, author } = req.body;
    const post = blogPosts.find(p => p.id === req.params.id);

    if (!post) {
      return res.status(404).json({
        success: false,
        message: 'Blog post not found'
      });
    }

    // Update fields if provided
    if (title) post.title = title;
    if (content) post.content = content;
    if (author) post.author = author;
    post.updatedAt = new Date();

    res.status(200).json({
      success: true,
      message: 'Blog post updated successfully',
      data: post
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Error updating blog post',
      error: error.message
    });
  }
});

// DELETE - Delete a blog post
app.delete('/api/posts/:id', (req, res) => {
  try {
    const postIndex = blogPosts.findIndex(p => p.id === req.params.id);

    if (postIndex === -1) {
      return res.status(404).json({
        success: false,
        message: 'Blog post not found'
      });
    }

    const deletedPost = blogPosts.splice(postIndex, 1);

    res.status(200).json({
      success: true,
      message: 'Blog post deleted successfully',
      data: deletedPost[0]
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Error deleting blog post',
      error: error.message
    });
  }
});

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.status(200).json({
    success: true,
    message: 'API is running',
    timestamp: new Date()
  });
});

// 404 handler for undefined routes
app.use((req, res) => {
  res.status(404).json({
    success: false,
    message: 'Route not found'
  });
});

// Start the server
app.listen(PORT, () => {
  console.log(`🚀 Blog Management API running on http://localhost:${PORT}`);
  console.log(`📚 Initial blog posts loaded: ${blogPosts.length}`);
});
