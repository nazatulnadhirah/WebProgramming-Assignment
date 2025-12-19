<?php
// Connect to database
$conn = new mysqli("sql200.infinityfree.com", "if0_39113249", "HelloSvt17", "if0_39113249_portfolio_db");

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Get data from form
$name = $_POST['name'];
$email = $_POST['email'];
$message = $_POST['message'];

// Insert data into contacts table
$sql = "INSERT INTO contacts (name, email, message) VALUES ('$name', '$email', '$message')";

if ($conn->query($sql) === TRUE) {
    // Redirect to thank you page
    header("Location: thankyou.html");
    exit();
} else {
    echo "Error: " . $conn->error;
}

$conn->close();
?>
