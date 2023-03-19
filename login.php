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

    // Check if data matches records within users table
    $sql = "SELECT * FROM users WHERE username = '$username' AND password = '$password'";

    $result = $conn->query($sql);

    if ($result->num_rows == 1) {
        // Close the MySQL connection
        $conn->close();
        // Redirect user to the home page
        $usercookie = hash("sha256", $username);
        setcookie("usercookie", $usercookie, time() + (86400 * 30), "/");
        header("Location: index.html");
        exit();
    } else {
        // Display error message if user does not exist
        echo "User does not exist";
    }
?>
