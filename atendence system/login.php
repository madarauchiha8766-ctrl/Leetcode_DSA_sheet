<?php
session_start();
include 'db.php';
?>

<link rel="stylesheet" href="style.css">

<div class="container">
<h2>Login</h2>

<form method="POST">
    <input type="text" name="roll_no" placeholder="Roll No">
    <input type="password" name="password" placeholder="Password">
    <button type="submit" name="login">Login</button>
</form>

<?php
if (isset($_POST['login'])) {
    $roll = $_POST['roll_no'];
    $pass = $_POST['password'];

    $result = $conn->query("SELECT * FROM students WHERE roll_no='$roll' AND password='$pass'");
    
    if ($result->num_rows > 0) {
        $_SESSION['user'] = $roll;
        header("Location: dashboard.php");
    } else {
        echo "Invalid credentials";
    }
}
?>
</div>