<?php
session_start(); // Start the session

// Check if the user is logged in
if (!isset($_SESSION['username'])) {
    header("Location: profile.php"); // Redirect to profile if not logged in
    exit();
}

// Database connection settings
$servername = '127.0.0.1'; // or your DB host
$dbname = 'craftogram'; // your database name
$username = 'root'; // your MySQL username
$password = ''; // your MySQL password

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Fetch user information
$current_user = $_SESSION['username'];
$sql_user = "SELECT * FROM users WHERE user_id = '$current_user'"; // Fetch user details based on user_id
$result_user = $conn->query($sql_user);
$user_info = $result_user->fetch_assoc();
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Portfolio</title>
    <link rel="stylesheet" href="portfolio.css" />
</head>
<body>
    <header>
        <div class="header-container">
            <nav>
                <button id="edit-profile">
                    <a href="profile.php">Edit Profile</a>
                </button>
                <button id="logout-button">Go to home page</button>
            </nav>
        </div>
    </header>

    <main>
        <div class="profile-and-posts">
            <div class="profile-header">
                <img id="profile-pic" src="<?= htmlspecialchars($user_info['profile_pic']) ?>" alt="Profile Picture" />
                <div class="profile-info">
                    <strong>
                        <p style="font-size: 40px">
                            Hi I am <span id="first-name"><?= htmlspecialchars($user_info['first_name']) ?></span>
                            <span id="last-name"><?= htmlspecialchars($user_info['last_name']) ?></span>
                        </p>
                    </strong>
                    <p><span id="bio"><?= htmlspecialchars($user_info['bio']) ?></span></p>
                    <p>Email: <span id="email"><?= htmlspecialchars($user_info['email']) ?></span></p>
                    <p>Phone: <span id="phone"><?= htmlspecialchars($user_info['phone']) ?></span></p>
                    <div class="button-container">
                        <button class="scroll-button">Go to Create Post</button>
                        <button class="blog-button">
                            <a style="background-color: transparent; color: #fff" href="blog.html">Go to Blog</a>
                        </button>
                    </div>
                </div>
            </div>

            <!-- Create Post Section -->
            <div class="create-post">
                <h2>Create a Post</h2>
                <form id="post-form" method="POST" action="add_post.php" enctype="multipart/form-data">
                    <label for="post-image" class="custom-file-upload">Upload Image:</label>
                    <input type="file" name="image" id="post-image" accept="image/*" required />
                    <label for="post-caption">Caption:</label>
                    <textarea name="caption" id="post-caption" placeholder="Add a caption..." required></textarea>
                    <button type="submit" id="add-post">Add Post</button>
                </form>
            </div>
        </div>

        <!-- Posts gallery -->
        <div id="posts-container">
            <h1><b>Your Posts</b></h1>
            <!-- Posts will be dynamically loaded here via JavaScript -->
        </div>
    </main>

    <!-- Include JS file -->
    <script src="portfolio_1.js"></script>
</body>
</html>

<?php
// Close connection
$conn->close();
?>
