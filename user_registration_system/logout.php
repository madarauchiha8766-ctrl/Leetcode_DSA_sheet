<?php
session_start();
session_destroy();

// Optional: delete cookie
setcookie("user", "", time() - 3600);

header("Location: login.php");
?>