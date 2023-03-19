<?php
  $servername = "localhost";
  $dbusername = "root";
  $dbpassword = "";
  $dbname = "marwan_cw1";

  // Create connection
  $conn = new mysqli($servername, $dbusername, $dbpassword, $dbname);

  // Check connection
  if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
  }

  // Get form data
  $username = $_POST["username"];
  $password = hash("sha256", $_POST["password"]);

  // Insert data into users table
  $sql = "INSERT INTO users (username, password) VALUES ('$username', '$password')";

  if ($conn->query($sql) === TRUE) {
    // Close the MySQL connection
    $conn->close();
    // Output JavaScript code that displays a popup message
    echo '<script>alert("New record created successfully");document.getElementById("create-account-form").reset();</script>';
  } else {
    echo "Error: " . $sql . "<br>" . $conn->error;
  }

  header("Location: create.html");
  exit();
?>
