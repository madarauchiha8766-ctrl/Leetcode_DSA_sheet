<?php
session_start();
include 'db.php';

if (!isset($_SESSION['student_id'])) {
    header("Location: student_login.php");
}
?>

<link rel="stylesheet" href="style.css">

<div class="container">
<h2>Submit Complaint</h2>

<form method="POST">
    <textarea name="complaint" placeholder="Write your complaint..." required></textarea>
    <button type="submit" name="submit">Submit</button>
</form>

<?php
if (isset($_POST['submit'])) {
    $text = $_POST['complaint'];
    $sid = $_SESSION['student_id'];

    $conn->query("INSERT INTO complaints(student_id, complaint_text)
                  VALUES('$sid','$text')");

    echo "Complaint submitted!";
}
?>
</div>