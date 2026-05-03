<?php
session_start();
if (!isset($_SESSION['user'])) {
    header("Location: login.php");
}
?>

<link rel="stylesheet" href="style.css">

<div class="container">
<h2>Dashboard</h2>

<a href="take_attendance.php"><button>Take Attendance (Teacher)</button></a>
<a href="view_attendance.php"><button>View Attendance</button></a>
<a href="logout.php"><button>Logout</button></a>
</div>