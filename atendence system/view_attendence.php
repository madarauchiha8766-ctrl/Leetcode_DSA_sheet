<?php include 'db.php'; ?>

<link rel="stylesheet" href="style.css">

<h2 style="text-align:center;">Attendance Records</h2>

<table>
<tr>
    <th>Roll No</th>
    <th>Name</th>
    <th>Date</th>
    <th>Status</th>
</tr>

<?php
$query = "SELECT students.roll_no, students.name, attendance.date, attendance.status
          FROM attendance
          JOIN students ON attendance.student_id = students.id";

$result = $conn->query($query);

while ($row = $result->fetch_assoc()) {
    echo "<tr>
        <td>{$row['roll_no']}</td>
        <td>{$row['name']}</td>
        <td>{$row['date']}</td>
        <td>{$row['status']}</td>
    </tr>";
}
?>
</table>