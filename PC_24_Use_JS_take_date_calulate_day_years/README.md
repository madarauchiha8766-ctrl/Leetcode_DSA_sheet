# Exact Age Calculator

A beautifully designed, interactive web application that calculates your exact age in years, months, and days based on your date of birth.

## 🌟 Basic Concept
The core concept of this project is to use standard JavaScript Date objects to accurately determine the time difference between the current date and a user-provided past date (Date of Birth). 

### How it works mathematically:
1. **Years:** The difference between the current year and the birth year.
2. **Months:** The difference between the current month and the birth month.
3. **Days:** The difference between the current day of the month and the birth day of the month.
4. **Correction:** If the days are negative, it means the current day of the month hasn't reached the birth day yet. The script borrows a month (decrements month by 1) and adds the total number of days from the previous month to the days count. If the months become negative, it borrows a year (decrements year by 1) and adds 12 to the months count.

## 🚀 How to Run the Project

This project is built purely with Frontend technologies (HTML, CSS, JS) and does not require any backend server or dependencies.

**Method 1: Using the Run File (Windows Only)**
1. Navigate to the project folder `24`.
2. Double click the `run.bat` file.
3. Your default web browser will automatically open and launch the application.

**Method 2: Manual Launch (Any OS)**
1. Open the project folder `24` in your file explorer.
2. Find the file named `index.html`.
3. Double-click `index.html`, or right-click and choose "Open with" -> select your preferred web browser (Chrome, Firefox, Safari, Edge).

## 🛠️ Project Structure
- `index.html`: The main structural layout and user interface.
- `style.css`: Modern, glassmorphism-inspired dark mode styling for a premium aesthetic.
- `script.js`: The core logic that calculates the precise age.
- `run.bat`: A simple batch script to quickly execute the project.

## 🎨 Features
- **Accurate Calculation**: Handles leap years and variable month lengths automatically.
- **Form Validation**: Ensures users cannot select a date in the future.
- **Modern UI**: Uses a beautiful gradient background and sleek animations.
