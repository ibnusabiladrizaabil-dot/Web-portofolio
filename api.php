<?php
header("Content-Type: application/json");
header("Access-Control-Allow-Origin: *");

$path = isset($_GET['path']) ? $_GET['path'] : '';

switch ($path) {
    case 'projects':
        echo file_get_contents(__DIR__ . '/data/projects.json');
        break;

    case 'about':
        echo file_get_contents(__DIR__ . '/data/about.json');
        break;

    default:
        http_response_code(404);
        echo json_encode(["error" => "Endpoint not found"]);
        break;
}