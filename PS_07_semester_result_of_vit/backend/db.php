<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET, POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");

if ($_SERVER['REQUEST_METHOD'] == 'OPTIONS') {
    http_response_code(200);
    exit();
}

$host = '127.0.0.1';
$db   = 'vit_results';
$user = 'root';
$pass = ''; // Default XAMPP/WAMP/local MySQL password is often empty
$charset = 'utf8mb4';

$dsn = "mysql:host=$host;dbname=$db;charset=$charset";
$options = [
    PDO::ATTR_ERRMODE            => PDO::ERRMODE_EXCEPTION,
    PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC,
    PDO::ATTR_EMULATE_PREPARES   => false,
];

try {
    $pdo = new PDO($dsn, $user, $pass, $options);
} catch (\PDOException $e) {
    // If we cannot connect, it might be because the DB doesn't exist yet, or MySQL is not running.
    // For the sake of the front-end, we will return an error json but won't crash hard if possible.
    http_response_code(500);
    echo json_encode(["error" => "Database connection failed. Ensure MySQL is running and vit_results database is created."]);
    exit();
}
?>
