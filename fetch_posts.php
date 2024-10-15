<?php
session_start();

if (!isset($_SESSION['username'])) {
    echo json_encode([]);
    exit();
}

// Database connection
$servername = '127.0.0.1';
$dbname = 'craftogram';
$username = 'root';
$password = '';

$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

$current_user = $_SESSION['username'];
$sql = "SELECT * FROM posts WHERE user_id = '$current_user' ORDER BY created_at DESC"; // Assuming you have a 'created_at' column
$result = $conn->query($sql);

$posts = [];

if ($result->num_rows > 0) {
    while ($row = $result->fetch_assoc()) {
        $posts[] = $row;
    }
}

echo json_encode($posts);

// Close connection
$conn->close();
?>
