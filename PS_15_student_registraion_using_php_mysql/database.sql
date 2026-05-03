CREATE DATABASE IF NOT EXISTS student_complaints;
USE student_complaints;

CREATE TABLE IF NOT EXISTS users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(50) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL,
    role ENUM('student', 'admin') NOT NULL DEFAULT 'student',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS complaints (
    id INT AUTO_INCREMENT PRIMARY KEY,
    student_id INT NOT NULL,
    title VARCHAR(150) NOT NULL,
    description TEXT NOT NULL,
    status ENUM('pending', 'resolved') DEFAULT 'pending',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (student_id) REFERENCES users(id) ON DELETE CASCADE
);

-- Insert default admin (password: admin123)
-- The password hash is generated using password_hash('admin123', PASSWORD_DEFAULT)
INSERT IGNORE INTO users (username, password, role) VALUES ('admin', '$2y$10$wE/.7h5E2G8k7Fw5K.U7r.O.b3W.z.H./1B1J6X.p.Q1r9D9a9L0W', 'admin');
