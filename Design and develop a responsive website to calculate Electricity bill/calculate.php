<?php
$units = $_POST['units'];
$bill = 0;

if($units <= 50){
    $bill = $units * 3.50;
}
else if($units <= 150){
    $bill = (50 * 3.50) + (($units - 50) * 4.00);
}
else if($units <= 250){
    $bill = (50 * 3.50) + (100 * 4.00) + (($units - 150) * 5.20);
}
else{
    $bill = (50 * 3.50) + (100 * 4.00) + (100 * 5.20) + (($units - 250) * 6.50);
}
?>

<!DOCTYPE html>
<html>
<head>
    <title>Bill Result</title>
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css">
</head>
<body style="background:#222;color:white;">

<div class="container mt-5">
    <div class="card p-4 bg-dark text-center">
        <h2>Total Units: <?php echo $units; ?></h2>
        <h3>Total Bill: ₹ <?php echo number_format($bill,2); ?></h3>
        <a href="index.html" class="btn btn-success mt-3">Calculate Again</a>
    </div>
</div>

</body>
</html>
