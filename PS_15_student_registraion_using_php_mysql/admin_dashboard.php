<?php
session_start();
require_once 'config.php';

// Check if user is logged in and is an admin
if (!isset($_SESSION['user_id']) || $_SESSION['role'] !== 'admin') {
    header("Location: login.php");
    exit;
}

// Handle status updates
if ($_SERVER['REQUEST_METHOD'] === 'POST' && isset($_POST['update_status'])) {
    $complaint_id = $_POST['complaint_id'];
    $new_status = $_POST['status'];
    
    $updateStmt = $pdo->prepare("UPDATE complaints SET status = ? WHERE id = ?");
    $updateStmt->execute([$new_status, $complaint_id]);
    
    header("Location: admin_dashboard.php");
    exit;
}

// Fetch all complaints with student usernames
$query = "
    SELECT c.id, c.title, c.description, c.status, c.created_at, u.username as student_name 
    FROM complaints c
    JOIN users u ON c.student_id = u.id
    ORDER BY c.created_at DESC
";
$stmt = $pdo->query($query);
$complaints = $stmt->fetchAll(PDO::FETCH_ASSOC);
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Admin Dashboard</title>
    <link rel="stylesheet" href="style.css">
    <style>
        .details-row {
            display: none;
            background: #F9FAFB;
        }
        .details-content {
            padding: 1rem;
            border-left: 4px solid var(--primary);
        }
        .status-form {
            display: flex;
            align-items: center;
            gap: 0.5rem;
        }
        select.form-control {
            width: auto;
            padding: 0.25rem 0.5rem;
            font-size: 0.875rem;
        }
        .btn-sm {
            padding: 0.25rem 0.5rem;
            font-size: 0.75rem;
            width: auto;
        }
    </style>
</head>
<body>
    <nav class="navbar">
        <a href="admin_dashboard.php" class="navbar-brand">Admin Portal</a>
        <div class="navbar-nav">
            <span>Admin</span>
            <a href="logout.php">Logout</a>
        </div>
    </nav>

    <div class="container">
        <div class="dashboard-header">
            <h2>All Student Complaints</h2>
        </div>

        <div class="card">
            <?php if (count($complaints) > 0): ?>
                <div class="table-responsive">
                    <table>
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Student</th>
                                <th>Title</th>
                                <th>Date</th>
                                <th>Status</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            <?php foreach ($complaints as $complaint): ?>
                                <tr>
                                    <td>#<?php echo $complaint['id']; ?></td>
                                    <td><strong><?php echo htmlspecialchars($complaint['student_name']); ?></strong></td>
                                    <td><?php echo htmlspecialchars($complaint['title']); ?></td>
                                    <td><?php echo date('M d, Y', strtotime($complaint['created_at'])); ?></td>
                                    <td>
                                        <?php if ($complaint['status'] === 'resolved'): ?>
                                            <span class="badge badge-resolved">Resolved</span>
                                        <?php else: ?>
                                            <span class="badge badge-pending">Pending</span>
                                        <?php endif; ?>
                                    </td>
                                    <td>
                                        <button class="btn btn-sm" onclick="toggleDetails(<?php echo $complaint['id']; ?>)">View</button>
                                    </td>
                                </tr>
                                <tr id="details-<?php echo $complaint['id']; ?>" class="details-row">
                                    <td colspan="6">
                                        <div class="details-content">
                                            <strong>Description:</strong>
                                            <p style="margin-bottom: 1rem; margin-top: 0.5rem; color: var(--text-muted);">
                                                <?php echo nl2br(htmlspecialchars($complaint['description'])); ?>
                                            </p>
                                            
                                            <form action="admin_dashboard.php" method="POST" class="status-form">
                                                <input type="hidden" name="complaint_id" value="<?php echo $complaint['id']; ?>">
                                                <label style="font-size: 0.875rem; font-weight: 500;">Update Status:</label>
                                                <select name="status" class="form-control">
                                                    <option value="pending" <?php echo $complaint['status'] === 'pending' ? 'selected' : ''; ?>>Pending</option>
                                                    <option value="resolved" <?php echo $complaint['status'] === 'resolved' ? 'selected' : ''; ?>>Resolved</option>
                                                </select>
                                                <button type="submit" name="update_status" class="btn btn-sm">Save</button>
                                            </form>
                                        </div>
                                    </td>
                                </tr>
                            <?php endforeach; ?>
                        </tbody>
                    </table>
                </div>
            <?php else: ?>
                <div class="empty-state">
                    <h3>No complaints found</h3>
                    <p>There are currently no complaints registered.</p>
                </div>
            <?php endif; ?>
        </div>
    </div>

    <script>
        function toggleDetails(id) {
            var row = document.getElementById('details-' + id);
            if (row.style.display === 'table-row') {
                row.style.display = 'none';
            } else {
                row.style.display = 'table-row';
            }
        }
    </script>
</body>
</html>
