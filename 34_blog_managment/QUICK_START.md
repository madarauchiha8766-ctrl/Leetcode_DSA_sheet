# Blog Management API - Quick Start Guide

## Installation & Setup

### Step 1: Install Dependencies
```bash
npm install
```

### Step 2: Start the Server
```bash
npm start
```

You should see:
```
🚀 Blog Management API running on http://localhost:3000
📚 Initial blog posts loaded: 2
```

## Testing with Postman

### Option 1: Import Pre-built Collection
1. Open Postman
2. Click "Import" button
3. Select "File" tab
4. Choose `blog-api.postman_collection.json`
5. The collection will be imported with all 6 endpoints

### Option 2: Manual Testing

#### 1. Test Health Check
```
GET http://localhost:3000/api/health
```
Expected Response:
```json
{
  "success": true,
  "message": "API is running",
  "timestamp": "2026-05-03T..."
}
```

#### 2. Get All Posts
```
GET http://localhost:3000/api/posts
```

#### 3. Create a New Post
```
POST http://localhost:3000/api/posts
Content-Type: application/json

{
  "title": "My Amazing Post",
  "content": "This is my first blog post created via the API!",
  "author": "Your Name"
}
```
**Save the returned `id`** for testing other endpoints.

#### 4. Get Specific Post
```
GET http://localhost:3000/api/posts/{id}
```
Replace `{id}` with the ID from step 3.

#### 5. Update Post
```
PUT http://localhost:3000/api/posts/{id}
Content-Type: application/json

{
  "title": "Updated Title",
  "content": "This content has been updated!",
  "author": "Updated Author"
}
```

#### 6. Delete Post
```
DELETE http://localhost:3000/api/posts/{id}
```

## Testing via cURL (Command Line)

If you prefer using cURL instead of Postman:

### Get all posts:
```bash
curl http://localhost:3000/api/posts
```

### Create a post:
```bash
curl -X POST http://localhost:3000/api/posts \
  -H "Content-Type: application/json" \
  -d '{"title":"New Post","content":"Post content","author":"Author Name"}'
```

### Get specific post:
```bash
curl http://localhost:3000/api/posts/POST_ID_HERE
```

### Update post:
```bash
curl -X PUT http://localhost:3000/api/posts/POST_ID_HERE \
  -H "Content-Type: application/json" \
  -d '{"title":"Updated","content":"Updated content"}'
```

### Delete post:
```bash
curl -X DELETE http://localhost:3000/api/posts/POST_ID_HERE
```

## API Response Format

All responses follow this format:

**Success Response:**
```json
{
  "success": true,
  "message": "Description of action",
  "data": { /* actual data */ },
  "count": 5
}
```

**Error Response:**
```json
{
  "success": false,
  "message": "Error description",
  "error": "Error details"
}
```

## HTTP Status Codes

| Status | Meaning |
|--------|---------|
| 200 | Success (GET, PUT, DELETE) |
| 201 | Created (POST) |
| 400 | Bad Request (invalid input) |
| 404 | Not Found |
| 500 | Server Error |

## Default Test Data

The API comes with 2 default posts:
1. "Welcome to My Blog" by Admin
2. "Getting Started with Express.js" by Tech Writer

## Troubleshooting

**Port already in use?**
```bash
# Change PORT in .env file
PORT=3001
# or use environment variable
set PORT=3001 && npm start
```

**Module not found?**
```bash
# Reinstall dependencies
npm install
```

**Server won't start?**
- Ensure Node.js is installed: `node --version`
- Check Node version is 14+
- Try deleting node_modules and reinstalling: `npm install`

## Project Files

- `server.js` - Main Express server with all routes
- `package.json` - Project dependencies and scripts
- `.env` - Environment configuration
- `blog-api.postman_collection.json` - Postman collection for easy testing
- `README.md` - Full API documentation
- `QUICK_START.md` - This file
