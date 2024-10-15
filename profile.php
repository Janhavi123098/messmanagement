<?php
// Database connection settings
$servername = '127.0.0.1'; // or your DB host
$dbname = 'craftogram'; // your database name
$username = 'root'; // your MySQL username
$password = ''; // your MySQL password

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    http_response_code(500); // Return error status
    echo json_encode(["success" => false, "message" => "Connection failed: " . $conn->connect_error]);
    exit();
}

// When the form is submitted
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Capture form inputs
    $user_id = $conn->real_escape_string($_POST['username']);
    $first_name = $conn->real_escape_string($_POST['first_name']);
    $last_name = $conn->real_escape_string($_POST['last_name']);
    $email = $conn->real_escape_string($_POST['email']);
    $phone = $conn->real_escape_string($_POST['phone']);
    $dob = $conn->real_escape_string($_POST['dob']);
    $gender = $conn->real_escape_string($_POST['gender']);
    $bio = $conn->real_escape_string($_POST['bio']);

    // Profile picture upload handling
    if (isset($_FILES['profile_pic']) && $_FILES['profile_pic']['error'] === UPLOAD_ERR_OK) {
        $file_tmp = $_FILES['profile_pic']['tmp_name'];
        $file_name = basename($_FILES['profile_pic']['name']);
        $target_dir = "uploads/"; // Directory to store uploaded images
        $target_file = $target_dir . $file_name;

        // Move uploaded file to the target directory
        if (move_uploaded_file($file_tmp, $target_file)) {
            $profile_pic = $target_file;
        } else {
            $profile_pic = "default-profile.jpg"; // If upload fails, use default image
        }
    } else {
        $profile_pic = "default-profile.jpg"; // If no file uploaded, use default
    }

    // Insert form data into the database
    $sql = "INSERT INTO users (user_id, first_name, last_name, email, phone, dob, gender, bio, profile_pic)
            VALUES ('$user_id', '$first_name', '$last_name', '$email', '$phone', '$dob', '$gender', '$bio', '$profile_pic')";

    if ($conn->query($sql) === TRUE) {
        http_response_code(200); // Success response
        echo json_encode(["success" => true, "message" => "Profile saved successfully!"]);
    } else {
        http_response_code(500); // Error response
        echo json_encode(["success" => false, "message" => "Error: " . $sql . "<br>" . $conn->error]);
    }
}

// Close connection
$conn->close();
?>
