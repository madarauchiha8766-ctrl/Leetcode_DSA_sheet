<?php
session_start();
include 'db.php';

$session_id = session_id();

// Remove session from DB
$conn->query("DELETE FROM user_sessions WHERE session_id='$session_id'");

session_unset();
session_destroy();

header("Location: login.php");
?>