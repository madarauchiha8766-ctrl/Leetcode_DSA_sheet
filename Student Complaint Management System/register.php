<?php
include 'db.php';
?>

<!DOCTYPE html>
<html>
<head>
    <title>Student Registration</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>

<div class="container">
    <h2>Student Registration</h2>

    <form method="POST">
        <input type="text" name="username" placeholder="Enter Username" required>
        <input type="password" name="password" placeholder="Enter Password" required>
        <button type="submit" name="register">Register</button>
    </form>

    <p style="text-align:center;">
        Already have an account? <a href="student_login.php">Login</a>
    </p>

    <?php
    if (isset($_POST['register'])) {

        $username = $_POST['username'];
        $password = $_POST['password'];

        // Check if user already exists
        $check = $conn->query("SELECT * FROM students WHERE username='$username'");

        if ($check->num_rows > 0) {
            echo "<p style='color:red;'>Username already exists!</p>";
        } else {

            // Insert new student
            $conn->query("INSERT INTO students (username, password)
                          VALUES ('$username', '$password')");

            echo "<p style='color:green;'>Registered successfully! 
                  <a href='student_login.php'>Login now</a></p>";
        }
    }
    ?>
</div>

</body>
</html>