<?php
header('Content-Type: application/json');
$text=$_POST['text'] ?? '';
echo json_encode([
  'translation'=>'[Railway Demo] '.$text
]);
