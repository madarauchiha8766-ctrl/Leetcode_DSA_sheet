<?php
session_start();
include 'db.php';

if (!isset($_SESSION['username'])) {
    header("Location: login.php");
    exit();
}

$username = $_SESSION['username'];
$session_id = session_id();
$current_time = time();

// ⏱️ 5-minute timeout
if (isset($_SESSION['last_activity']) && ($current_time - $_SESSION['last_activity'] > 300)) {

    // Remove session from DB
    $conn->query("DELETE FROM user_sessions WHERE session_id='$session_id'");

    session_unset();
    session_destroy();

    echo "⏳ Session expired!";
    header("Location: login.php");
    exit();
}

// Update activity
$_SESSION['last_activity'] = $current_time;

// Update DB timestamp
$conn->query("UPDATE user_sessions SET last_activity = NOW() WHERE session_id='$session_id'");
?>