<?php include 'db.php'; ?>

<link rel="stylesheet" href="style.css">

<div class="container">
<h2>Register</h2>

<form method="POST">
    <input type="text" name="username" placeholder="Username" required>
    <input type="password" name="password" placeholder="Password" required>
    <button type="submit" name="register">Register</button>
</form>

<?php
if (isset($_POST['register'])) {
    $user = $_POST['username'];
    $pass = password_hash($_POST['password'], PASSWORD_DEFAULT);

    $stmt = $conn->prepare("INSERT INTO users(username, password) VALUES (?, ?)");
    $stmt->bind_param("ss", $user, $pass);

    if ($stmt->execute()) {
        echo "Registered successfully! <a href='login.php'>Login</a>";
    } else {
        echo "Username already exists!";
    }
}
?>
</div>