<?php
// Получение на PHP коде json данных и работа с ними
$_POST = json_decode(file_get_contents("php://input"), true);
echo var_dump($_POST); 