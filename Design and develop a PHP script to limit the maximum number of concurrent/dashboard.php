<?php
include 'session_check.php';
?>

<h2>Welcome <?php echo $_SESSION['username']; ?></h2>
<p>You are logged in.</p>

<a href="logout.php">Logout</a>