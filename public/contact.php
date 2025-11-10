<?php
// Lightweight PHP handler for the contact form (static hosting)
// - Validates fields
// - Verifies Cloudflare Turnstile token
// - Sends an email via PHP mail()

// CONFIG: set your recipient and Turnstile secret key
$TO_EMAIL = 'info@jh-virtuell.ch';
$FROM_EMAIL = 'webform@jh-virtuell.ch'; // envelope sender (optional)
$TURNSTILE_SECRET = getenv('TURNSTILE_SECRET_KEY') ?: '0x4AAAAAAAGdrnHnxgTgmHtlkE-ZGLSMDts';

header('Content-Type: text/html; charset=utf-8');

function h($s) { return htmlspecialchars((string)$s, ENT_QUOTES | ENT_SUBSTITUTE, 'UTF-8'); }

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
  http_response_code(405);
  echo '<!doctype html><meta charset="utf-8"><title>405</title><p>Methode nicht erlaubt.</p>';
  exit;
}

// Honeypot
if (!empty($_POST['company'] ?? '')) {
  http_response_code(400);
  echo '<!doctype html><meta charset="utf-8"><title>Spam blockiert</title><p>Spam erkannt.</p>';
  exit;
}

// Read fields
$name = trim((string)($_POST['name'] ?? ''));
$email = trim((string)($_POST['email'] ?? ''));
$phone = trim((string)($_POST['phone'] ?? ''));
$service = trim((string)($_POST['service'] ?? ''));
$message = trim((string)($_POST['message'] ?? ''));
$token = trim((string)($_POST['cf-turnstile-response'] ?? ''));

// Validate
if ($name === '' || $email === '' || $message === '') {
  http_response_code(400);
  echo '<!doctype html><meta charset="utf-8"><title>Fehler</title><p>Bitte füllen Sie alle Pflichtfelder aus.</p>';
  exit;
}
if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
  http_response_code(400);
  echo '<!doctype html><meta charset="utf-8"><title>Fehler</title><p>Bitte eine gültige E‑Mail-Adresse angeben.</p>';
  exit;
}

// Verify Turnstile (optional but recommended)
if ($TURNSTILE_SECRET && $TURNSTILE_SECRET !== 'REPLACE_WITH_YOUR_TURNSTILE_SECRET') {
  $data = http_build_query([
    'secret' => $TURNSTILE_SECRET,
    'response' => $token,
    'remoteip' => $_SERVER['REMOTE_ADDR'] ?? '',
  ]);
  $opts = [
    'http' => [
      'method' => 'POST',
      'header' => "Content-type: application/x-www-form-urlencoded\r\n",
      'content' => $data,
      'timeout' => 8,
    ],
  ];
  $context = stream_context_create($opts);
  $verify = @file_get_contents('https://challenges.cloudflare.com/turnstile/v0/siteverify', false, $context);
  $ok = false;
  if ($verify !== false) {
    $json = json_decode($verify, true);
    $ok = isset($json['success']) ? (bool)$json['success'] : false;
  }
  if (!$ok) {
    http_response_code(400);
    echo '<!doctype html><meta charset="utf-8"><title>Captcha fehlgeschlagen</title><p>Sicherheitsüberprüfung fehlgeschlagen. Bitte versuchen Sie es erneut.</p>';
    exit;
  }
}

// Prepare email
$subject = 'Neue Kontaktanfrage – ' . ($service !== '' ? $service : 'Allgemein');
$lines = [
  'Neue Nachricht über das Kontaktformular',
  '',
  'Name: ' . $name,
  'E‑Mail: ' . $email,
  'Telefon: ' . $phone,
  'Thema: ' . $service,
  '',
  'Nachricht:',
  $message,
];
$textBody = implode("\n", $lines);

$headers = [];
$headers[] = 'MIME-Version: 1.0';
$headers[] = 'Content-type: text/plain; charset=utf-8';
$headers[] = 'From: JH Virtuell <' . $FROM_EMAIL . '>';
$headers[] = 'Reply-To: ' . $name . ' <' . $email . '>';
$headersStr = implode("\r\n", $headers);

// Send
@mail($TO_EMAIL, '=?UTF-8?B?' . base64_encode($subject) . '?=', $textBody, $headersStr, '-f' . $FROM_EMAIL);

// Response page
echo '<!doctype html><html lang="de"><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1">'
  . '<title>Danke – Nachricht gesendet</title>'
  . '<body style="font-family: system-ui,-apple-system,Segoe UI,Roboto,Ubuntu,Cantarell,Noto Sans,sans-serif; padding:2rem; background:#f9f9f9; color:#111">'
  . '<h1 style="color:#d4af37">Vielen Dank!</h1>'
  . '<p>Ihre Nachricht wurde gesendet. Wir melden uns in der Regel noch am selben Werktag.</p>'
  . '<p><a href="/" style="color:#d4af37; text-decoration:underline">Zurück zur Startseite</a></p>'
  . '</body></html>';
<?php
