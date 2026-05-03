<?php include 'db.php'; ?>

<link rel="stylesheet" href="style.css">

<div class="container">
<h2>Student Registration</h2>

<form method="POST">
    <input type="text" name="name" placeholder="Name" required>
    <input type="text" name="roll_no" placeholder="Roll No" required>
    <input type="password" name="password" placeholder="Password" required>
    <button type="submit" name="register">Register</button>
</form>

<?php
if (isset($_POST['register'])) {
    $name = $_POST['name'];
    $roll = $_POST['roll_no'];
    $pass = $_POST['password'];

    $conn->query("INSERT INTO students(name, roll_no, password) VALUES('$name','$roll','$pass')");
    echo "Registered successfully!";
}
?>
</div>