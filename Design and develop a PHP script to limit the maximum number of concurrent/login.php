<?php
session_start();
include 'db.php';

if ($_SERVER["REQUEST_METHOD"] == "POST") {

    $username = $_POST['username'];
    $password = $_POST['password'];

    // Dummy authentication (replace with real validation)
    if ($username == "admin" && $password == "1234") {

        // Remove expired sessions (older than 5 minutes)
        $conn->query("DELETE FROM user_sessions WHERE last_activity < (NOW() - INTERVAL 5 MINUTE)");

        // Count active sessions
        $result = $conn->query("SELECT COUNT(*) as total FROM user_sessions WHERE username='$username'");
        $row = $result->fetch_assoc();

        if ($row['total'] >= 3) {
            echo "❌ Maximum 3 active sessions allowed!";
        } else {
            session_regenerate_id(true);

            $_SESSION['username'] = $username;
            $_SESSION['last_activity'] = time();

            $session_id = session_id();

            // Insert session
            $stmt = $conn->prepare("INSERT INTO user_sessions (username, session_id) VALUES (?, ?)");
            $stmt->bind_param("ss", $username, $session_id);
            $stmt->execute();

            header("Location: dashboard.php");
        }
    } else {
        echo "Invalid credentials";
    }
}
?>

<form method="POST">
    Username: <input type="text" name="username"><br>
    Password: <input type="password" name="password"><br>
    <button type="submit">Login</button>
</form>