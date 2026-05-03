<?php include 'db.php'; ?>

<link rel="stylesheet" href="style.css">

<h2>Airplane Seat Booking</h2>

<div class="seat-grid">
<?php
$rows = 5;
$cols = ['A','B','C','D','E','F'];

for ($i = 1; $i <= $rows; $i++) {
    foreach ($cols as $c) {
        $seat = $i . $c;

        $result = $conn->query("SELECT * FROM seats WHERE seat_no='$seat'");

        if ($result->num_rows > 0) {
            echo "<div class='seat booked'>$seat</div>";
        } else {
            echo "<div class='seat available'>$seat</div>";
        }
    }
}
?>
</div>

<form action="book.php" method="POST">
    <h3>Book Seat</h3>
    <input type="text" name="name" placeholder="Passenger Name" required>
    <input type="text" name="seat" placeholder="Seat (e.g., 1A)" required>
    <button type="submit">Book</button>
</form>