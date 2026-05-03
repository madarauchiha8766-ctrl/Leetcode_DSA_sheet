<?php
include 'db.php';

$date = date("Y-m-d");

$students = $conn->query("SELECT id FROM students");

while ($row = $students->fetch_assoc()) {
    $id = $row['id'];
    
    if (isset($_POST['attendance'][$id])) {
        $status = "Present";
    } else {
        $status = "Absent";
    }

    $conn->query("INSERT INTO attendance(student_id, date, status)
                  VALUES('$id','$date','$status')");
}

echo "Attendance saved!";
?>