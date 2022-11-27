<?php
header('Access-Control-Allow-Origin: *');
$name = $_POST['name'];
$email = $_POST['email'];
$desk = $_POST['desk'];


$token = "5978443433:AAEA0KxhnseRSDbpkq19C1pE276FcGWy1rY";
$chat_id = "-652133811";
$arr = array(
  '<b>Name:</b> ' => $name ? $name : "none",
  '<b>Telegram:</b> ' => $email ? $email : "none",
  '<b>Message:</b> ' => $desk ? $desk : "none",
);

foreach($arr as $key => $value) {
  $txt .= "<b>".$key."</b> ".$value."%0A";
};

$sendToTelegram = fopen("https://api.telegram.org/bot{$token}/sendMessage?chat_id={$chat_id}&parse_mode=html&text={$txt}","r");
?>