# Library Management System

A full-stack Node.js application for a library to store and manage book records.

## Features
- Add new books to the database (Title, Author, Year).
- View all available books in a beautifully designed, modern UI.
- Powered by an SQLite database for seamless data persistence.
- Built with a vibrant, premium "glassmorphism" design using vanilla CSS.

## Architecture & Folder Structure

The project follows a simple client-server architecture:

- **`server.js`**: The main Node.js backend entry point. It initializes the Express server, sets up the SQLite database (`library.db`), and exposes REST API endpoints.
- **`library.db`**: The SQLite database file (auto-generated on first run) containing the `Book` table.
- **`package.json`**: Contains the project metadata and dependencies.
- **`start.bat`**: A convenient Windows batch script to install dependencies and run the server with a single command.
- **`public/`**: This directory contains all the static frontend files served to the browser.
  - **`index.html`**: The main user interface structure.
  - **`style.css`**: The design system, including vibrant gradients, responsive layouts, and modern aesthetics.
  - **`script.js`**: The frontend logic that fetches data from the API and dynamically updates the DOM.

## Core Functionalities Implementation

1. **Database Storage (SQLite)**: 
   The application uses `sqlite3` to create a lightweight, in-memory/file-based database. Upon running `server.js`, it automatically checks for a file named `library.db` and establishes a connection. It executes a `CREATE TABLE IF NOT EXISTS Book` command, ensuring the required fields (`book_id`, `title`, `author`, `year`) are ready for data insertion.

2. **Inserting Book Records (POST /api/books)**:
   When a user submits the "Add a New Book" form in the browser, the frontend script sends an asynchronous `fetch` POST request containing the book details as a JSON payload. The Express server receives this payload, extracts the fields, and executes an `INSERT INTO Book` SQL query with parameterized values to safely store the record.

3. **Retrieving Book Data (GET /api/books)**:
   The backend exposes a GET endpoint that performs a `SELECT * FROM Book` SQL query. The `sqlite3` driver fetches all the rows, and Express formats the result into a JSON response which is sent back to the client.

4. **Displaying Book Details (Frontend JS)**:
   The frontend runs a `fetchBooks()` function on page load and after every successful insertion. It asynchronously fetches the JSON data from `/api/books`, iterates over the returned `books` array, and dynamically builds HTML table rows (`<tr>`) injecting the text into the `<tbody>` of our main table (`#books-tbody`).

## API Endpoints

The backend exposes the following RESTful endpoints:

### 1. Retrieve all books
- **URL**: `/api/books`
- **Method**: `GET`
- **Description**: Retrieves a list of all book records from the database.
- **Response**:
  ```json
  {
    "message": "Success",
    "books": [
      {
        "book_id": 1,
        "title": "The Great Gatsby",
        "author": "F. Scott Fitzgerald",
        "year": 1925
      }
    ]
  }
  ```

### 2. Add a new book
- **URL**: `/api/books`
- **Method**: `POST`
- **Description**: Inserts a new book record into the database.
- **Body**:
  ```json
  {
    "title": "1984",
    "author": "George Orwell",
    "year": 1949
  }
  ```
- **Response**:
  ```json
  {
    "message": "Book added successfully",
    "book": {
      "book_id": 2,
      "title": "1984",
      "author": "George Orwell",
      "year": 1949
    }
  }
  ```

## How to Run

You only need **one command** to run the entire project! 

1. Open your terminal in the project directory (`d:\wt\PS_27_library_node`).
2. Run the following command:

```bash
.\start.bat
```

This single command will:
- Automatically install the required Node.js dependencies (`express`, `sqlite3`, `cors`) if they are not present.
- Start the backend API server.
- Initialize the SQLite database.

Once the server is running, open your web browser and navigate to:
**[http://localhost:3000](http://localhost:3000)**
