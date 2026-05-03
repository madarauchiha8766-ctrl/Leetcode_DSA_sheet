<?php
session_start();
include 'db.php';
?>

<link rel="stylesheet" href="style.css">

<div class="container">
<h2>Student Login</h2>

<form method="POST">
    <input type="text" name="username" placeholder="Username" required>
    <input type="password" name="password" placeholder="Password" required>
    <button type="submit" name="login">Login</button>
</form>

<?php
if (isset($_POST['login'])) {
    $user = $_POST['username'];
    $pass = $_POST['password'];

    $result = $conn->query("SELECT * FROM students WHERE username='$user' AND password='$pass'");

    if ($result->num_rows > 0) {
        $row = $result->fetch_assoc();
        $_SESSION['student_id'] = $row['id'];
        header("Location: student_dashboard.php");
    } else {
        echo "Invalid credentials";
    }
}
?>
</div>