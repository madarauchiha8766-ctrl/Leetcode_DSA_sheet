<?php
session_start();
include 'db.php';
?>

<link rel="stylesheet" href="style.css">

<div class="container">
<h2>Login</h2>

<form method="POST">
    <input type="text" name="username" placeholder="Username"
        value="<?php echo $_COOKIE['user'] ?? ''; ?>">
        
    <input type="password" name="password" placeholder="Password">
    
    <label>
        <input type="checkbox" name="remember"> Remember Me
    </label>

    <button type="submit" name="login">Login</button>
</form>

<?php
if (isset($_POST['login'])) {
    $user = $_POST['username'];
    $pass = $_POST['password'];

    $stmt = $conn->prepare("SELECT * FROM users WHERE username=?");
    $stmt->bind_param("s", $user);
    $stmt->execute();
    $result = $stmt->get_result();

    if ($row = $result->fetch_assoc()) {
        if (password_verify($pass, $row['password'])) {

            // Session
            $_SESSION['user'] = $user;

            // Cookie (7 days)
            if (isset($_POST['remember'])) {
                setcookie("user", $user, time() + (7 * 24 * 60 * 60));
            }

            header("Location: dashboard.php");
        } else {
            echo "Invalid password";
        }
    } else {
        echo "User not found";
    }
}
?>
</div>