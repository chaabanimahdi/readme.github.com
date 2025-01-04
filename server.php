<?php
include 'server_config.php';

// Check if the form was submitted via POST method
if ($_SERVER['REQUEST_METHOD'] == 'POST') {

    // Check if each field exists in the $_POST array before using it
    $user_name = htmlspecialchars($_POST['user_name']);
    $twitter_username = htmlspecialchars($_POST['twitter_username']);
    $twitch_username = htmlspecialchars($_POST['twitch_username']);
    $linkedin_username = htmlspecialchars($_POST['linkedin_username']);
    $github_username = htmlspecialchars($_POST['github_username']);
    $instagram_username = htmlspecialchars($_POST['instagram_username']);
    $devto_username = htmlspecialchars($_POST['devto_username']);
    $threads_username = htmlspecialchars($_POST['threads_username']);
    $medium_username = htmlspecialchars($_POST['medium_username']);
    $email_address =  htmlspecialchars($_POST['email_address']);

    $exploring = implode(", ", $_POST['$exploring']);
    $interests = implode(", ", $_POST['interests']);
    $askMeAbout = implode(", ", $_POST['askMeAbout']);
    $goals = implode(", ", $_POST['goals']);
    $funFacts = implode(", ", $_POST['funFacts']);

    // Prepare the SQL query with placeholders for the values
    $stmt = $conn->prepare("INSERT INTO user_data (
        user_name, twitter_username, twitch_username, linkedin_username, 
        github_username, instagram_username, devto_username, threads_username, 
        medium_username, email_address, exploring, interests, ask_me_about, goals, fun_facts
    ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)");

    // Bind the parameters (ensure the number of placeholders matches the number of variables)
    $stmt->bind_param("sssssssssssssss", 
        $user_name, $twitter_username, $twitch_username, $linkedin_username, 
        $github_username, $instagram_username, $devto_username, $threads_username, 
        $medium_username, $email_address, $exploring, $interests, $askMeAbout, $goals, $funFacts
    );

    // Execute the query and check if it was successful
    if ($stmt->execute()) {
        header("Location: index.html");  
        exit();
    } else {
        echo "Erreur lors de l'inscription : " . $stmt->error;
    }

    // Close the statement and the database connection
    $stmt->close();
    $conn->close();
}
?>
