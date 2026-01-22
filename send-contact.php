<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST, GET, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');
header('Content-Type: application/json');

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit();
}

// Receber dados do formulário
$data = json_decode(file_get_contents('php://input'), true);

// Validar dados
$name = filter_var($data['name'] ?? '', FILTER_SANITIZE_STRING);
$email = filter_var($data['email'] ?? '', FILTER_VALIDATE_EMAIL);
$message = filter_var($data['message'] ?? '', FILTER_SANITIZE_STRING);

if (!$name || !$email || !$message) {
    http_response_code(400);
    echo json_encode(['error' => 'Por favor, preencha todos os campos corretamente.']);
    exit();
}

// Configurar email
$to = "contact@alienphalanx.com";
$subject = "Novo contato do site - $name";
$body = "Nome: $name\n";
$body .= "Email: $email\n";
$body .= "Mensagem:\n$message\n";

$headers = "From: $email\r\n";
$headers .= "Reply-To: $email\r\n";
$headers .= "X-Mailer: PHP/" . phpversion();

// Enviar email
if (mail($to, $subject, $body, $headers)) {
    echo json_encode(['success' => true, 'message' => 'Email enviado com sucesso!']);
} else {
    http_response_code(500);
    echo json_encode(['error' => 'Erro ao enviar email. Tente novamente.']);
}
?>