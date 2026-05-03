# Secure PHP Authentication System

This project is a complete PHP and MySQL based user authentication module. It includes user registration, secure login, session management, and cookie tracking, wrapped in a beautiful, modern UI.

## Features
- **User Registration**: Create a new account with a unique username and email.
- **Secure Passwords**: Passwords are cryptographically hashed using PHP's `password_hash()` (bcrypt) before being stored in the database.
- **Login System**: Verifies credentials and creates a secure session upon successful login.
- **Session Handling**: Uses PHP sessions (`session_start()`) to maintain user state across pages.
- **Cookie Tracking**: Sets a long-lived cookie upon login to demonstrate tracking a user's device/browser.
- **Dashboard**: A protected page that displays current session information and decodes the active tracking cookie.
- **Modern Aesthetics**: Built with custom, high-quality CSS featuring a beautiful gradient background, glassmorphism card effects, and clean typography.

## Tools Used & How They Work

### 1. PHP (Server-Side Logic)
PHP is used to handle form submissions, interact with the database, and manage sessions and cookies.
- **Sessions**: The `session_start()` function creates a unique ID for the user on the server. We store the user's `id` and `username` in the `$_SESSION` superglobal to keep them logged in as they navigate.
- **Cookies**: The `setcookie()` function is used to drop a small piece of data (`user_tracking`) into the user's browser. This cookie persists even if the browser is closed, allowing the application to "remember" or track the user on subsequent visits.
- **Security**: Prepared statements (PDO) are used for all database queries to prevent SQL injection.

### 2. MySQL (Database)
MySQL stores user information persistently.
- **PDO**: PHP Data Objects is the interface we use to connect to MySQL securely.
- **Data Stored**: Usernames, emails, and hashed passwords are saved in the `users` table.

### 3. HTML/CSS (Frontend)
- **HTML5**: Provides the structural forms and dashboard layout.
- **CSS3**: Styles the application. We used CSS variables for easy theming, flexbox for centering, and backdrop-filters to create the premium "glassmorphism" card effect.

## How to Run the Project

### Prerequisites
You need a local web server environment that supports PHP and MySQL. We recommend **XAMPP**, **WAMP**, or **MAMP**.

### Step-by-Step Instructions

1. **Start your server**
   - Open your XAMPP/WAMP control panel.
   - Start the **Apache** and **MySQL** modules.

2. **Set up the Database**
   - Open your browser and go to `http://localhost/phpmyadmin`
   - Create a new database named `login_module`.
   - Select the `login_module` database, go to the "Import" tab, and choose the `database.sql` file included in this project. Click "Go" to execute the script. This will create the `users` table.
   *(Alternatively, you can just copy the text inside `database.sql` and run it in the SQL tab).*

3. **Configure the Application**
   - Open `config.php` in a text editor.
   - Verify the database credentials. By default, XAMPP uses `root` as the username and an empty string `''` for the password. If your local setup is different, update these variables.

4. **Run the Application**
   - Make sure this project folder is located inside your server's public directory (e.g., `C:\xampp\htdocs\13`).
   - Open your web browser and navigate to: `http://localhost/13`

### Usage Flow
1. You will be redirected to the **Login** page.
2. Click "Sign up now" to go to the **Registration** page.
3. Create an account.
4. Log in with your new account credentials.
5. You will be taken to the **Dashboard**, where you can see your active session variables and the tracking cookie data.
6. Click **Sign Out** to destroy the session and clear the cookie.
