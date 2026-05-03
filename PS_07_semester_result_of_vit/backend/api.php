<?php
require 'db.php';

$method = $_SERVER['REQUEST_METHOD'];

if ($method === 'GET') {
    $stmt = $pdo->query("SELECT * FROM students ORDER BY created_at DESC");
    $students = $stmt->fetchAll();
    echo json_encode($students);
} elseif ($method === 'POST') {
    $data = json_decode(file_get_contents("php://input"), true);
    
    if (isset($data['name']) && isset($data['course']) && isset($data['marks'])) {
        $marks = $data['marks'];
        $sql = "INSERT INTO students (name, course, sub1_mse, sub1_ese, sub2_mse, sub2_ese, sub3_mse, sub3_ese, sub4_mse, sub4_ese) 
                VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)";
        $stmt = $pdo->prepare($sql);
        try {
            $stmt->execute([
                $data['name'], 
                $data['course'], 
                $marks[0]['mse'], $marks[0]['ese'],
                $marks[1]['mse'], $marks[1]['ese'],
                $marks[2]['mse'], $marks[2]['ese'],
                $marks[3]['mse'], $marks[3]['ese']
            ]);
            $data['id'] = $pdo->lastInsertId();
            echo json_encode(["status" => "success", "message" => "Student added successfully.", "student" => $data]);
        } catch (Exception $e) {
            http_response_code(500);
            echo json_encode(["error" => "Failed to add student. " . $e->getMessage()]);
        }
    } else {
        http_response_code(400);
        echo json_encode(["error" => "Invalid input data."]);
    }
} else {
    http_response_code(405);
    echo json_encode(["error" => "Method not allowed."]);
}
?>
