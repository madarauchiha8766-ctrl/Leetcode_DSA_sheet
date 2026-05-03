<?php
session_start();
include 'db.php';

if (!isset($_SESSION['admin'])) {
    header("Location: admin_login.php");
}
?>

<link rel="stylesheet" href="style.css">

<h2 style="text-align:center;">All Complaints</h2>

<table>
<tr>
    <th>Student ID</th>
    <th>Complaint</th>
    <th>Date</th>
</tr>

<?php
$result = $conn->query("SELECT * FROM complaints");

while ($row = $result->fetch_assoc()) {
    echo "<tr>
        <td>{$row['student_id']}</td>
        <td>{$row['complaint_text']}</td>
        <td>{$row['date']}</td>
    </tr>";
}
?>
</table>

<div style="text-align:center;">
<a href="logout.php"><button>Logout</button></a>
</div>