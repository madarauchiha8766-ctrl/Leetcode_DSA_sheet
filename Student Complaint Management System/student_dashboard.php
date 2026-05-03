<?php
session_start();
if (!isset($_SESSION['student_id'])) {
    header("Location: student_login.php");
}
?>

<link rel="stylesheet" href="style.css">

<div class="container">
<h2>Student Dashboard</h2>

<a href="add_complaint.php"><button>Submit Complaint</button></a>
<a href="logout.php"><button>Logout</button></a>
</div>