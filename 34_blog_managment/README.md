# Blog Management REST API

A RESTful API for managing blog posts built with Express.js. This API supports complete CRUD operations for blog posts with in-memory data storage.

## Features

- ✅ Create new blog posts
- ✅ Read all blog posts or a specific post
- ✅ Update blog posts
- ✅ Delete blog posts
- ✅ JSON response format
- ✅ Error handling and validation
- ✅ Unique post IDs using UUID
- ✅ Timestamps (createdAt, updatedAt)

## Installation

1. Navigate to the project directory:
   ```bash
   cd c:\Users\omkar\OneDrive\Desktop\34
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

## Running the Server

### Development mode (with auto-reload):
```bash
npm run dev
```

### Production mode:
```bash
npm start
```

The server will start at `http://localhost:3000`

## API Endpoints

### 1. Health Check
**GET** `/api/health`
- Check if the API is running
- Response:
```json
{
  "success": true,
  "message": "API is running",
  "timestamp": "2026-05-03T10:30:00.000Z"
}
```

### 2. Get All Blog Posts
**GET** `/api/posts`
- Retrieve all blog posts
- Response:
```json
{
  "success": true,
  "message": "Blog posts retrieved successfully",
  "data": [
    {
      "id": "550e8400-e29b-41d4-a716-446655440000",
      "title": "Welcome to My Blog",
      "content": "This is the first blog post...",
      "author": "Admin",
      "createdAt": "2026-05-03T10:00:00.000Z",
      "updatedAt": "2026-05-03T10:00:00.000Z"
    }
  ],
  "count": 1
}
```

### 3. Get a Specific Blog Post
**GET** `/api/posts/:id`
- Retrieve a blog post by ID
- Parameters:
  - `id` (path parameter): UUID of the blog post
- Response:
```json
{
  "success": true,
  "message": "Blog post retrieved successfully",
  "data": {
    "id": "550e8400-e29b-41d4-a716-446655440000",
    "title": "Welcome to My Blog",
    "content": "This is the first blog post...",
    "author": "Admin",
    "createdAt": "2026-05-03T10:00:00.000Z",
    "updatedAt": "2026-05-03T10:00:00.000Z"
  }
}
```

### 4. Create a New Blog Post
**POST** `/api/posts`
- Create a new blog post
- Required fields in request body:
  - `title` (string): Title of the blog post
  - `content` (string): Content of the blog post
  - `author` (string): Author name
- Request body example:
```json
{
  "title": "My First Blog Post",
  "content": "This is an amazing blog post about Express.js",
  "author": "John Doe"
}
```
- Response (Status 201):
```json
{
  "success": true,
  "message": "Blog post created successfully",
  "data": {
    "id": "550e8400-e29b-41d4-a716-446655440001",
    "title": "My First Blog Post",
    "content": "This is an amazing blog post about Express.js",
    "author": "John Doe",
    "createdAt": "2026-05-03T11:00:00.000Z",
    "updatedAt": "2026-05-03T11:00:00.000Z"
  }
}
```

### 5. Update a Blog Post
**PUT** `/api/posts/:id`
- Update an existing blog post
- Parameters:
  - `id` (path parameter): UUID of the blog post
- Request body (all fields optional):
```json
{
  "title": "Updated Title",
  "content": "Updated content",
  "author": "Jane Doe"
}
```
- Response:
```json
{
  "success": true,
  "message": "Blog post updated successfully",
  "data": {
    "id": "550e8400-e29b-41d4-a716-446655440001",
    "title": "Updated Title",
    "content": "Updated content",
    "author": "Jane Doe",
    "createdAt": "2026-05-03T11:00:00.000Z",
    "updatedAt": "2026-05-03T11:30:00.000Z"
  }
}
```

### 6. Delete a Blog Post
**DELETE** `/api/posts/:id`
- Delete a blog post by ID
- Parameters:
  - `id` (path parameter): UUID of the blog post
- Response:
```json
{
  "success": true,
  "message": "Blog post deleted successfully",
  "data": {
    "id": "550e8400-e29b-41d4-a716-446655440001",
    "title": "Updated Title",
    "content": "Updated content",
    "author": "Jane Doe",
    "createdAt": "2026-05-03T11:00:00.000Z",
    "updatedAt": "2026-05-03T11:30:00.000Z"
  }
}
```

## Testing with Postman

### Setup Postman Collection

1. **Download Postman** from https://www.postman.com/downloads/ (if not already installed)

2. **Import the collection**:
   - Open Postman
   - Click "Import" → "Raw text"
   - Paste the collection JSON (see below) or create requests manually

### Quick Manual Testing Guide

#### Request 1: Health Check
- **Method**: GET
- **URL**: `http://localhost:3000/api/health`
- **Click Send**

#### Request 2: Get All Posts
- **Method**: GET
- **URL**: `http://localhost:3000/api/posts`
- **Click Send**

#### Request 3: Create a New Post
- **Method**: POST
- **URL**: `http://localhost:3000/api/posts`
- **Headers**: Set `Content-Type: application/json`
- **Body** (Raw JSON):
```json
{
  "title": "Learning Express.js",
  "content": "Express.js is a minimal and flexible Node.js web application framework that provides a robust set of features for web and mobile applications.",
  "author": "Jane Smith"
}
```
- **Click Send** → Note the returned `id` for next steps

#### Request 4: Get a Specific Post
- **Method**: GET
- **URL**: `http://localhost:3000/api/posts/{id}` (replace {id} with ID from previous request)
- **Click Send**

#### Request 5: Update a Post
- **Method**: PUT
- **URL**: `http://localhost:3000/api/posts/{id}` (use same ID)
- **Headers**: Set `Content-Type: application/json`
- **Body** (Raw JSON):
```json
{
  "title": "Mastering Express.js",
  "content": "This is updated content about mastering Express.js for production applications."
}
```
- **Click Send**

#### Request 6: Delete a Post
- **Method**: DELETE
- **URL**: `http://localhost:3000/api/posts/{id}` (use same ID)
- **Click Send**

### Postman Collection (Import this for quick setup)

Copy the following JSON into a file named `blog-api.postman_collection.json`:

```json
{
  "info": {
    "name": "Blog Management API",
    "description": "Collection for testing Blog Management REST API",
    "schema": "https://schema.getpostman.com/json/collection/v2.1.0/collection.json"
  },
  "item": [
    {
      "name": "Health Check",
      "request": {
        "method": "GET",
        "header": [],
        "url": {
          "raw": "http://localhost:3000/api/health",
          "protocol": "http",
          "host": ["localhost"],
          "port": "3000",
          "path": ["api", "health"]
        }
      },
      "response": []
    },
    {
      "name": "Get All Posts",
      "request": {
        "method": "GET",
        "header": [],
        "url": {
          "raw": "http://localhost:3000/api/posts",
          "protocol": "http",
          "host": ["localhost"],
          "port": "3000",
          "path": ["api", "posts"]
        }
      },
      "response": []
    },
    {
      "name": "Create Post",
      "request": {
        "method": "POST",
        "header": [
          {
            "key": "Content-Type",
            "value": "application/json"
          }
        ],
        "body": {
          "mode": "raw",
          "raw": "{\n  \"title\": \"Learning Express.js\",\n  \"content\": \"Express.js is a minimal and flexible Node.js web application framework.\",\n  \"author\": \"Jane Smith\"\n}"
        },
        "url": {
          "raw": "http://localhost:3000/api/posts",
          "protocol": "http",
          "host": ["localhost"],
          "port": "3000",
          "path": ["api", "posts"]
        }
      },
      "response": []
    },
    {
      "name": "Get Post by ID",
      "request": {
        "method": "GET",
        "header": [],
        "url": {
          "raw": "http://localhost:3000/api/posts/:id",
          "protocol": "http",
          "host": ["localhost"],
          "port": "3000",
          "path": ["api", "posts", ":id"],
          "variable": [
            {
              "key": "id",
              "value": ""
            }
          ]
        }
      },
      "response": []
    },
    {
      "name": "Update Post",
      "request": {
        "method": "PUT",
        "header": [
          {
            "key": "Content-Type",
            "value": "application/json"
          }
        ],
        "body": {
          "mode": "raw",
          "raw": "{\n  \"title\": \"Mastering Express.js\",\n  \"content\": \"This is updated content about mastering Express.js\"\n}"
        },
        "url": {
          "raw": "http://localhost:3000/api/posts/:id",
          "protocol": "http",
          "host": ["localhost"],
          "port": "3000",
          "path": ["api", "posts", ":id"],
          "variable": [
            {
              "key": "id",
              "value": ""
            }
          ]
        }
      },
      "response": []
    },
    {
      "name": "Delete Post",
      "request": {
        "method": "DELETE",
        "header": [],
        "url": {
          "raw": "http://localhost:3000/api/posts/:id",
          "protocol": "http",
          "host": ["localhost"],
          "port": "3000",
          "path": ["api", "posts", ":id"],
          "variable": [
            {
              "key": "id",
              "value": ""
            }
          ]
        }
      },
      "response": []
    }
  ]
}
```

## Error Handling

The API returns appropriate HTTP status codes:

- `200 OK`: Successful GET, PUT, DELETE requests
- `201 Created`: Successful POST request
- `400 Bad Request`: Missing required fields
- `404 Not Found`: Blog post not found
- `500 Internal Server Error`: Server error

Error response format:
```json
{
  "success": false,
  "message": "Description of the error",
  "error": "Error details (if available)"
}
```

## Project Structure

```
blog-management-api/
├── server.js           # Main Express server and routes
├── package.json        # Project dependencies
├── .env               # Environment configuration
├── README.md          # This file
└── blog-api.postman_collection.json  # Postman collection (optional)
```

## Technologies Used

- **Express.js**: Web application framework
- **UUID**: For generating unique post IDs
- **Node.js**: JavaScript runtime

## Next Steps (Optional Enhancements)

- Add database integration (MongoDB, PostgreSQL)
- Implement authentication and authorization
- Add pagination and filtering
- Add search functionality
- Implement rate limiting
- Add logging
- Deploy to cloud (Heroku, AWS, Azure)
