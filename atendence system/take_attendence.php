<?php include 'db.php'; ?>

<link rel="stylesheet" href="style.css">

<h2 style="text-align:center;">Take Attendance</h2>

<form method="POST" action="save_attendance.php">
<table>
<tr>
    <th>Roll No</th>
    <th>Name</th>
    <th>Present</th>
</tr>

<?php
$result = $conn->query("SELECT * FROM students");

while ($row = $result->fetch_assoc()) {
    echo "<tr>
        <td>{$row['roll_no']}</td>
        <td>{$row['name']}</td>
        <td>
            <input type='checkbox' name='attendance[{$row['id']}]' value='present'>
        </td>
    </tr>";
}
?>

</table>

<div style="width:200px;margin:auto;">
<button type="submit">Submit Attendance</button>
</div>
</form>