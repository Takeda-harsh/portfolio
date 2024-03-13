<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    
    $name = $_POST["name"];
    $email = $_POST["email"];
    $message = $_POST["message"];

  
    $to = "kakyea13@gmail.com";
    $subject = "New Submission from Portfolio";
    $body = "Name: $name\nEmail: $email\nMessage: $message";

  
    if (mail($to, $subject, $body)) {
        http_response_code(200);
        echo json_encode(array("message" => "Thank you for your submission"));
    } else {
        http_response_code(500);
        echo json_encode(array("message" => "Failed to send email"));
    }
} else {
    http_response_code(405);
    echo json_encode(array("message" => "Method Not Allowed"));
}
?>
