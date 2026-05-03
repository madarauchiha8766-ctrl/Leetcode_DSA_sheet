<?php
include 'db.php';

$name = $_POST['name'];
$email = $_POST['email'];

$sql = "INSERT INTO students (name, email) VALUES ('$name', '$email')";

$conn->query($sql);

header("Location: index.php");
?>
