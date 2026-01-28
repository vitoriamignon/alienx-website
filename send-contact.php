<?php
error_reporting(0);
ini_set('display_errors', 0);

// Headers de CORS
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST, GET, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');
header('Content-Type: application/json; charset=UTF-8');

// Tratamento do Preflight
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit();
}

// Receber dados
$input = file_get_contents('php://input');
$data = json_decode($input, true);

if (!$data) {
    http_response_code(400);
    echo json_encode(['error' => 'Nenhum dado recebido ou JSON inválido']);
    exit();
}

$name = htmlspecialchars($data['name'] ?? '', ENT_QUOTES, 'UTF-8');
$email = filter_var($data['email'] ?? '', FILTER_VALIDATE_EMAIL);
$message = htmlspecialchars($data['message'] ?? '', ENT_QUOTES, 'UTF-8');

if (!$name || !$email || !$message) {
    http_response_code(400);
    echo json_encode(['error' => 'Por favor, preencha todos os campos corretamente.']);
    exit();
}

// Configuração do E-mail
$to = "contact@alienphalanx.com"; 
$subject = "Novo contato do site - $name";

$body = "Nome: $name\n";
$body .= "Email: $email\n";
$body .= "Mensagem:\n$message\n";

// Headers
// Importante: No XAMPP/Gmail, o 'From' deve ser igual ao autenticado ou omitido (o sendmail.ini força)
$headers = "Reply-To: $email\r\n";
$headers .= "X-Mailer: PHP/" . phpversion();

// Enviar
if (mail($to, $subject, $body, $headers)) {
    // Sucesso
    echo json_encode(['success' => true, 'message' => 'Mensagem enviada com sucesso!']);
} else {
    // Erro do servidor de email
    http_response_code(500);
    echo json_encode(['error' => 'O servidor recebeu, mas falhou ao enviar o email via SMTP.']);
}
?>