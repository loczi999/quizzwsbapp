<?php
require 'db.php';
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');

// Pobierz wszystkie pytania (lub losowe 10)
$stmt = $pdo->query("SELECT * FROM questions ORDER BY RAND() LIMIT 10");
$questions = $stmt->fetchAll();

echo json_encode($questions);
?>