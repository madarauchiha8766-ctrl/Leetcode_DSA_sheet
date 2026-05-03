<?php
session_start();

// Check if the user is logged in, if not then redirect him to login page
if (!isset($_SESSION["loggedin"]) || $_SESSION["loggedin"] !== true) {
    header("location: login.php");
    exit;
}
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Dashboard - Secure Portal</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <div class="container dashboard-container">
        <div class="dashboard-header">
            <h2>Welcome, <?php echo htmlspecialchars($_SESSION["username"]); ?>!</h2>
            <a href="logout.php" class="btn btn-outline" style="width: auto; margin-top: 0;">Sign Out</a>
        </div>
        
        <p class="subtitle" style="text-align: left;">You are successfully logged in.</p>

        <div class="info-card">
            <h3>Session Information</h3>
            <div class="info-row">
                <div class="info-label">User ID:</div>
                <div class="info-value"><?php echo htmlspecialchars($_SESSION["id"]); ?></div>
            </div>
            <div class="info-row">
                <div class="info-label">Username:</div>
                <div class="info-value"><?php echo htmlspecialchars($_SESSION["username"]); ?></div>
            </div>
            <div class="info-row">
                <div class="info-label">Session ID:</div>
                <div class="info-value"><?php echo session_id(); ?></div>
            </div>
        </div>

        <div class="info-card">
            <h3>Cookie Tracking Data</h3>
            <?php if(isset($_COOKIE['user_tracking'])): ?>
                <div class="alert alert-success" style="margin-bottom: 1rem;">Tracking Cookie is Active</div>
                <div class="info-row">
                    <div class="info-label">Cookie Name:</div>
                    <div class="info-value">user_tracking</div>
                </div>
                <div class="info-row">
                    <div class="info-label">Cookie Value:</div>
                    <div class="info-value">
                        <?php 
                            // Partially mask cookie value for display purposes
                            $cookie_val = $_COOKIE['user_tracking']; 
                            echo substr($cookie_val, 0, 10) . "..." . substr($cookie_val, -10);
                        ?>
                    </div>
                </div>
                <div class="info-row">
                    <div class="info-label">Decoded Data:</div>
                    <div class="info-value"><?php echo htmlspecialchars(base64_decode($_COOKIE['user_tracking'])); ?></div>
                </div>
            <?php else: ?>
                <div class="alert alert-danger" style="margin-bottom: 0;">No tracking cookie found.</div>
            <?php endif; ?>
        </div>
    </div>
</body>
</html>
