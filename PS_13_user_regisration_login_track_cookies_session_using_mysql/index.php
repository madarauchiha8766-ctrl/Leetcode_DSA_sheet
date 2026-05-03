<?php
session_start();

// Check if user is already logged in via session
if (isset($_SESSION['user_id'])) {
    header("Location: dashboard.php");
    exit;
}

// Check if user has a valid tracking cookie (Remember Me basic implementation)
if (isset($_COOKIE['user_tracking'])) {
    // In a real production app, you'd validate this token against the database
    // For this module, we'll just redirect to login if there's no session, 
    // or you could auto-login if the cookie token matches a DB record.
    // We'll keep it simple: if cookie exists but no session, let them log in.
}

header("Location: login.php");
exit;
?>
