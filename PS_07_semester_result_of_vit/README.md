# VIT Semester Result Preparation System

This is a full-stack, responsive web application designed to calculate and manage the semester results of VIT students. It uses a **React (Vite)** frontend, a **PHP** RESTful backend, and a **MySQL** database.

## Architecture & Folder Structure

- **`frontend/`**: Contains the React application. It acts as the interactive user interface, passing data between components and communicating with the backend.
- **`backend/`**: Contains the core PHP logic and API endpoints for securely managing database connections and saving/retrieving data from MySQL.
- **`package.json`**: The central orchestrator that allows us to run both the React Dev Server and PHP Built-in Server concurrently with a single command.

## How Core Functionalities Are Implemented

1. **Creating Multiple Components**:
   - `App.jsx` (Parent): Serves as the main container and manages the global state (students data, form inputs).
   - `Student.jsx` (Child): Renders individual student cards.
   - `Result.jsx` (Child): A nested child of `Student` that renders the subject marks table and calculates the final pass/fail result.

2. **Passing Data (Props)**:
   - Data is fetched or created in `App.jsx` and passed down to `Student.jsx` as props (`name`, `course`, `marks`). 
   - `Student.jsx` subsequently passes the `marks` prop down to `Result.jsx` for calculation.

3. **Managing State (`useState`)**:
   - In `App.jsx`, `useState()` manages two primary pieces of state:
     - `students`: An array holding the list of all fetched/created student records.
     - `formData`: The controlled state for the input form to track the student name, course, and individual subject marks (MSE and ESE).

4. **Dynamic UI Updates**:
   - When the user submits the form, the data is pushed to the PHP API and simultaneously appended to the `students` state using `setStudents()`.
   - The React DOM dynamically re-renders to display the newly added student card instantly.
   - `Result.jsx` dynamically calculates `(MSE * 30%) + (ESE * 70%)` on the fly to determine and render the `PASS`/`FAIL` badge.

## API Endpoints (`backend/api.php`)

- **`GET /api.php`**: Retrieves all student records and marks from the database in JSON format.
- **`POST /api.php`**: Accepts a JSON payload containing `name`, `course`, and an array of `marks`. It inserts this data into the `students` table and returns a success confirmation.

---

## Getting Started

### 1. Database Setup

Before running the application, you must configure the MySQL database.
1. Ensure your local MySQL server (like XAMPP or WAMP) is running on port `3306`.
2. Open your MySQL client (e.g., phpMyAdmin or CLI).
3. Execute the SQL script provided in `backend/init.sql`. This will automatically create the `vit_results` database and the `students` table.
Start the Apache and MySQL modules from your XAMPP/WAMP control panel.
Open your web browser and go to http://localhost/phpmyadmin.
At the top of the screen, click the "Import" tab.
Click the "Choose File" button and select the init.sql file located inside your project's backend folder (d:\wt\PS_07_semester_result_of_vit\backend\init.sql).
Scroll to the bottom and click the "Import" (or "Go") button. It will automatically create the vit_results database and the students table

   *Note: If your local MySQL setup requires a password for the `root` user, you must update the credentials inside `backend/db.php`.*

### 2. Single Command to Run

Once your database is prepared, simply run this **single command** from the root of the project to install dependencies and launch both servers:

```bash
npm install && npm start
```

*(This command uses `concurrently` to spin up Vite on port 5173 and the PHP server on port 8000).*

Open your browser to `http://localhost:5173` to view the application!
