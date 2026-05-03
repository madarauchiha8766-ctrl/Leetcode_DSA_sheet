<?php
session_start();

// Initialize or reset the game board
if (!isset($_SESSION['board'])) {
    resetGame();
}

// Handle player moves
if (isset($_POST['move']) && !isset($_SESSION['winner'])) {
    $move = $_POST['move'];
    // Ensure the selected cell is empty
    if ($_SESSION['board'][$move] == '') {
        $_SESSION['board'][$move] = $_SESSION['turn'];
        
        // Check for win or tie
        if (checkWinner($_SESSION['turn'])) {
            $_SESSION['winner'] = $_SESSION['turn'];
        } elseif (isBoardFull()) {
            $_SESSION['winner'] = 'tie';
        } else {
            // Switch turn
            $_SESSION['turn'] = ($_SESSION['turn'] == 'X') ? 'O' : 'X';
        }
    }
}

// Handle game reset
if (isset($_POST['reset'])) {
    resetGame();
}

/**
 * Resets the game state
 */
function resetGame() {
    $_SESSION['board'] = array_fill(0, 9, '');
    $_SESSION['turn'] = 'X';
    $_SESSION['winner'] = null;
}

/**
 * Checks if a specific player has won the game
 */
function checkWinner($player) {
    $board = $_SESSION['board'];
    $winningCombos = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8], // Rows
        [0, 3, 6], [1, 4, 7], [2, 5, 8], // Columns
        [0, 4, 8], [2, 4, 6]             // Diagonals
    ];

    foreach ($winningCombos as $combo) {
        if ($board[$combo[0]] == $player && $board[$combo[1]] == $player && $board[$combo[2]] == $player) {
            return true;
        }
    }
    return false;
}

/**
 * Checks if the board is completely filled
 */
function isBoardFull() {
    return !in_array('', $_SESSION['board']);
}
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>PHP Tic-Tac-Toe</title>
    <style>
        body {
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
            background-color: #1a1a2e;
            margin: 0;
            color: #fff;
        }
        .game-container {
            text-align: center;
            background-color: #16213e;
            padding: 40px;
            border-radius: 15px;
            box-shadow: 0 10px 30px rgba(0,0,0,0.5);
        }
        h1 {
            margin-top: 0;
            color: #e94560;
        }
        .message {
            font-size: 24px;
            margin-bottom: 20px;
            font-weight: bold;
            height: 30px;
        }
        .board {
            display: grid;
            grid-template-columns: repeat(3, 100px);
            grid-template-rows: repeat(3, 100px);
            gap: 10px;
            margin: 20px auto;
        }
        .cell {
            width: 100px;
            height: 100px;
            font-size: 48px;
            font-weight: bold;
            display: flex;
            justify-content: center;
            align-items: center;
            background-color: #0f3460;
            border: none;
            border-radius: 10px;
            color: #fff;
            cursor: pointer;
            transition: all 0.3s ease;
        }
        .cell:not(:disabled):hover {
            background-color: #1a4b8c;
            transform: scale(1.05);
        }
        .cell:disabled {
            cursor: default;
        }
        .cell.X { 
            color: #e94560; 
        }
        .cell.O { 
            color: #4cd137; 
        }
        .reset-btn {
            padding: 12px 25px;
            font-size: 18px;
            font-weight: bold;
            background-color: #e94560;
            color: white;
            border: none;
            border-radius: 8px;
            cursor: pointer;
            transition: background-color 0.3s ease;
            margin-top: 15px;
        }
        .reset-btn:hover {
            background-color: #d13d56;
        }
    </style>
</head>
<body>

<div class="game-container">
    <h1>Tic-Tac-Toe</h1>
    
    <div class="message">
        <?php
        if ($_SESSION['winner'] === 'tie') {
            echo "<span style='color: #f1c40f;'>It's a Tie!</span>";
        } elseif ($_SESSION['winner']) {
            $winColor = ($_SESSION['winner'] == 'X') ? '#e94560' : '#4cd137';
            echo "<span style='color: {$winColor};'>Player " . $_SESSION['winner'] . " Wins!</span>";
        } else {
            $turnColor = ($_SESSION['turn'] == 'X') ? '#e94560' : '#4cd137';
            echo "Player <span style='color: {$turnColor};'>" . $_SESSION['turn'] . "</span>'s Turn";
        }
        ?>
    </div>

    <form method="post">
        <div class="board">
            <?php for ($i = 0; $i < 9; $i++): ?>
                <?php
                $val = $_SESSION['board'][$i];
                $class = $val ? 'cell ' . $val : 'cell';
                $disabled = ($val !== '' || $_SESSION['winner']) ? 'disabled' : '';
                ?>
                <button type="submit" name="move" value="<?= $i ?>" class="<?= $class ?>" <?= $disabled ?>>
                    <?= $val ?>
                </button>
            <?php endfor; ?>
        </div>
        <button type="submit" name="reset" class="reset-btn">Restart Game</button>
    </form>
</div>

</body>
</html>
