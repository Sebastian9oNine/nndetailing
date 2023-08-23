<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST["name"];
    $email = $_POST["email"];
    $message = $_POST["message"];
    
    $to = "gaalsebastian12@email.com"; 
    $subject = "New Form Submission";
    $headers = "From: $email";
    
    mail($to, $subject, $message, $headers);
    
    echo "Form submitted successfully!";
}
?>