<?php
include 'db.php';

$sql = "CREATE TABLE IF NOT EXISTS students (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100),
    email VARCHAR(100)
)";

if ($conn->query($sql) === TRUE) {
    echo "Table created successfully";
} else {
    echo "Error: " . $conn->error;
}
?>
