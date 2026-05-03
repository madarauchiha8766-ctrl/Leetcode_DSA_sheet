<?php
session_start();

// Unset all of the session variables
$_SESSION = array();

// Destroy the session.
session_destroy();

// Unset the tracking cookie by setting its expiration to the past
if (isset($_COOKIE['user_tracking'])) {
    setcookie("user_tracking", "", time() - 3600, "/");
}

// Redirect to login page
header("location: login.php");
exit;
?>
