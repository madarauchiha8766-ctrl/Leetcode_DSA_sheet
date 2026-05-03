<?php
session_start();
require_once 'config.php';

// Check if user is logged in and is a student
if (!isset($_SESSION['user_id']) || $_SESSION['role'] !== 'student') {
    header("Location: login.php");
    exit;
}

// Fetch user's complaints
$stmt = $pdo->prepare("SELECT * FROM complaints WHERE student_id = ? ORDER BY created_at DESC");
$stmt->execute([$_SESSION['user_id']]);
$complaints = $stmt->fetchAll(PDO::FETCH_ASSOC);
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Student Dashboard</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <nav class="navbar">
        <a href="student_dashboard.php" class="navbar-brand">Student Portal</a>
        <div class="navbar-nav">
            <span>Welcome, <?php echo htmlspecialchars($_SESSION['username']); ?></span>
            <a href="logout.php">Logout</a>
        </div>
    </nav>

    <div class="container">
        <div class="dashboard-header">
            <h2>My Complaints</h2>
            <a href="submit_complaint.php" class="btn" style="width: auto;">+ New Complaint</a>
        </div>

        <div class="card">
            <?php if (count($complaints) > 0): ?>
                <div class="table-responsive">
                    <table>
                        <thead>
                            <tr>
                                <th>Title</th>
                                <th>Date Submitted</th>
                                <th>Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            <?php foreach ($complaints as $complaint): ?>
                                <tr>
                                    <td><strong><?php echo htmlspecialchars($complaint['title']); ?></strong></td>
                                    <td><?php echo date('M d, Y g:i A', strtotime($complaint['created_at'])); ?></td>
                                    <td>
                                        <?php if ($complaint['status'] === 'resolved'): ?>
                                            <span class="badge badge-resolved">Resolved</span>
                                        <?php else: ?>
                                            <span class="badge badge-pending">Pending</span>
                                        <?php endif; ?>
                                    </td>
                                </tr>
                            <?php endforeach; ?>
                        </tbody>
                    </table>
                </div>
            <?php else: ?>
                <div class="empty-state">
                    <h3>No complaints found</h3>
                    <p>You haven't submitted any complaints yet.</p>
                </div>
            <?php endif; ?>
        </div>
    </div>
</body>
</html>
