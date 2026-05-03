<?php
include 'db.php';

$name = $_POST['name'];
$seat = strtoupper($_POST['seat']);

// Check if seat already booked
$result = $conn->query("SELECT * FROM seats WHERE seat_no='$seat'");

if ($result->num_rows > 0) {
    echo "❌ Seat already booked! <a href='index.php'>Go Back</a>";
} else {
    $conn->query("INSERT INTO seats (seat_no, passenger_name)
                  VALUES ('$seat', '$name')");
    echo "✅ Seat booked successfully! <a href='index.php'>View Seats</a>";
}
?>