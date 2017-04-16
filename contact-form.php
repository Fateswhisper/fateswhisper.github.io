<?php
 
/* Задаем переменные */
$name = htmlspecialchars($_POST["name"]);
$email = htmlspecialchars($_POST["email"]);
$message = htmlspecialchars($_POST["message"]);
$bezspama = htmlspecialchars($_POST["bezspama"]);
 
/* Ваш адрес и тема сообщения */
$address = "fatesvvhisper@gmail.com";
$sub = "Сообщение с сайта ХХХ";
 
/* Формат письма */
$mes = "Сообщение с сайта ХХХ.\n
Имя отправителя: $name 
Электронный адрес отправителя: $email
Текст сообщения:
$message";
 
 
if (empty($bezspama)) /* Оценка поля bezspama - должно быть пустым*/
{
/* Отправляем сообщение, используя mail() функцию */
$from  = "From: $name <$email> \r\n Reply-To: $email \r\n";
if (mail($address, $sub, $mes, $from)) {
// так получаем URL, с которого пришёл посетитель  
$back = $_SERVER['HTTP_REFERER']; // для справки, не обязательно создавать переменную

// Теперь создаём страницу, пересылающую
// в meta теге на предыдущую
echo "
<html>
  <head>
   <meta http-equiv='Refresh' content='0; URL=".$_SERVER['HTTP_REFERER']."'>
  </head>
  <body>Письмо отправлено, через 5 секунд вы вернетесь обратно на страницу</body>
</html>";}
else {
// так получаем URL, с которого пришёл посетитель  
$back = $_SERVER['HTTP_REFERER']; // для справки, не обязательно создавать переменную

// Теперь создаём страницу, пересылающую
// в meta теге на предыдущую
echo "
<html>
  <head>
   <meta http-equiv='Refresh' content='0; URL=".$_SERVER['HTTP_REFERER']."'>
  </head>
  <body>Письмо не отправлено, через 5 секунд вы вернетесь обратно на страницу</body>
</html>";}
}
exit; /* Выход без сообщения, если поле bezspama заполнено спам ботами */
?>