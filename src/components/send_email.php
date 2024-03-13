<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    
    $name = $_POST["name"];
    $email = $_POST["email"];
    $message = $_POST["message"];

    $to = "kakyea13@gmail.com";
    $subject = "Submission from Portfolio Form";
    $body = "Name: $name\nEmail: $email\nMessage: $message";

    
    if (mail($to, $subject, $body)) {
        echo json_encode(array("status" => "success"));
    } else {
        echo json_encode(array("status" => "error"));
    }
} else {
    echo json_encode(array("status" => "error", "message" => "Invalid request method"));
}
?>
