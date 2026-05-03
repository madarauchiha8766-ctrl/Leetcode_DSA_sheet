<?php
session_start();
require_once 'config.php';

// Check if user is logged in and is a student
if (!isset($_SESSION['user_id']) || $_SESSION['role'] !== 'student') {
    header("Location: login.php");
    exit;
}

$error = '';
$success = '';

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $title = trim($_POST['title']);
    $description = trim($_POST['description']);

    if (empty($title) || empty($description)) {
        $error = "Please fill in all fields.";
    } else {
        $stmt = $pdo->prepare("INSERT INTO complaints (student_id, title, description) VALUES (?, ?, ?)");
        if ($stmt->execute([$_SESSION['user_id'], $title, $description])) {
            $success = "Complaint submitted successfully!";
            // Optional: redirect back to dashboard after a delay or just show success msg.
        } else {
            $error = "Failed to submit complaint.";
        }
    }
}
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Submit Complaint</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <nav class="navbar">
        <a href="student_dashboard.php" class="navbar-brand">Student Portal</a>
        <div class="navbar-nav">
            <a href="student_dashboard.php">Dashboard</a>
            <a href="logout.php">Logout</a>
        </div>
    </nav>

    <div class="container">
        <div class="card" style="max-width: 600px; margin: 0 auto; margin-top: 2rem;">
            <div class="auth-header">
                <h2 style="font-size: 1.5rem; margin-bottom: 0.5rem;">Submit a Complaint</h2>
                <p>Describe your issue in detail</p>
            </div>

            <?php if ($error): ?>
                <div class="alert alert-error"><?php echo htmlspecialchars($error); ?></div>
            <?php endif; ?>
            
            <?php if ($success): ?>
                <div class="alert alert-success"><?php echo htmlspecialchars($success); ?></div>
            <?php endif; ?>

            <form action="submit_complaint.php" method="POST">
                <div class="form-group">
                    <label for="title">Complaint Title</label>
                    <input type="text" id="title" name="title" class="form-control" placeholder="e.g., WiFi Issue in Library" required>
                </div>
                <div class="form-group">
                    <label for="description">Detailed Description</label>
                    <textarea id="description" name="description" class="form-control" rows="5" required></textarea>
                </div>
                <button type="submit" class="btn">Submit Complaint</button>
            </form>
        </div>
    </div>
</body>
</html>
