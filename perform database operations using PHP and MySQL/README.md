# 📊 PHP + MySQL CRUD Operations

## 📌 Project Overview
This project demonstrates CRUD operations:
- Create Database & Table
- Insert data
- Display records
- Update records
- Delete records

---

## 📂 Files
- db.php → Database connection
- create_table.php → Create table
- index.php → UI + display
- insert.php → Insert data
- delete.php → Delete data
- edit.php → Edit form
- update.php → Update data

---

## ▶️ Setup Steps

### 1. Start XAMPP
Start Apache and MySQL

### 2. Create Database
Go to phpMyAdmin:
Create database:
student_db

### 3. Place Files
Put all files in:
C:\xampp\htdocs\student_project

### 4. Run
Open:
http://localhost/student_project/create_table.php
http://localhost/student_project/index.php

---

## 🧠 Explanation

### Database Connection
Uses mysqli:
$conn = new mysqli(...)

---

### Insert
INSERT INTO students (name, email)

---

### Display
SELECT * FROM students

---

### Update
UPDATE students SET ...

---

### Delete
DELETE FROM students WHERE id

---

## 📌 Conclusion
This project shows complete CRUD operations using PHP and MySQL.
