<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Get form data
    $name = $_POST["name"];
    $email = $_POST["email"];
    $message = $_POST["message"];

    // Set up email
    $to = "kakyea13@gmail.com";
    $subject = "New Submission from Portfolio";
    $body = "Name: $name\nEmail: $email\nMessage: $message";

    // Send email
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
