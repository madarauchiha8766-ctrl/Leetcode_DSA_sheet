<?php
session_start();

$name = $_POST['name'];
$email = $_POST['email'];
$password = $_POST['password'];

// Email validation
if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    echo "Invalid email format";
    exit();
}

// Cookie creation
setcookie("username", $name, time()+3600);

// Store session
$_SESSION['user'] = $name;

echo "Login successful<br>";
echo "<a href='dashboard.php'>Go to Dashboard</a>";
?>
