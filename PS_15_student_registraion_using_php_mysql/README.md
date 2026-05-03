# Student Complaint Registration System

This is a modern web application built with PHP and MySQL that allows students to register, log in, and submit complaints. Administrators can log in to view and update the status of all submitted complaints.

## Features
- **Student Portal**: Secure login and registration. Students can view their past complaints and submit new ones.
- **Admin Portal**: A centralized dashboard for administrators to view all student complaints, read detailed descriptions, and mark them as resolved or pending.
- **Premium UI**: Uses a clean, modern aesthetic with CSS custom properties, responsive tables, and elegant typography (Inter font).
- **Security**: Utilizes PHP Data Objects (PDO) for secure, prepared SQL statements to prevent SQL injection. Passwords are cryptographically hashed using `password_hash()`.

## Tools & Technologies Used
1. **PHP (Backend)**: Processes form data, manages secure user sessions (`session_start()`), and communicates with the database using PDO.
2. **MySQL (Database)**: Relational database to persist user credentials and complaint records. We use foreign keys to tie complaints to specific users.
3. **Vanilla CSS (Styling)**: The `style.css` file contains a custom design system that avoids heavy frameworks while still providing a premium, accessible, and responsive user interface.
4. **HTML5 (Frontend Structure)**: Semantic markup for forms, tables, and navigation elements.

## How to Run the Project

### Option 1: One-Click Execution (Recommended)
1. Ensure your local MySQL server (via XAMPP) is running.
2. Double-click the `run.bat` file.
3. This script will automatically:
   - Import the `database.sql` to setup the necessary tables.
   - Start the built-in PHP development server on port 8015.
   - Open your default web browser to the application.

### Option 2: Manual Setup (via XAMPP Apache)
1. Make sure both **Apache** and **MySQL** are running in the XAMPP Control Panel.
2. Navigate to `http://localhost/phpmyadmin` and create a database named `student_complaints`.
3. Import the `database.sql` file into this new database.
4. Open your browser and navigate to `http://localhost/15/`.

## Default Accounts
- **Admin Login**: 
  - Username: `admin`
  - Password: `admin123`
- **Student Login**: You can create a new student account using the "Register" link on the login page.
