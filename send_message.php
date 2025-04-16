<?php
  // Check if form is submitted
  if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Collect form data
    $name = htmlspecialchars($_POST['name']);
    $surname = htmlspecialchars($_POST['surname']);
    $phone = htmlspecialchars($_POST['phone']);
    $email = htmlspecialchars($_POST['email']);
    $feedback_type = htmlspecialchars($_POST['feedback-type']);
    $message = htmlspecialchars($_POST['message']);

    // Define the recipient email address
    $to = "info@newscafe.co.za"; // Replace with your email address
    $subject = "New Message from $name $surname - $feedback_type";

    // Create email body
    $body = "
    Name: $name $surname\n
    Phone: $phone\n
    Email: $email\n
    Feedback Type: $feedback_type\n
    Message: $message\n
    ";

    // Send email
    if (mail($to, $subject, $body)) {
      echo "Message sent successfully!";
    } else {
      echo "Error: Message not sent.";
    }
  }
?>
