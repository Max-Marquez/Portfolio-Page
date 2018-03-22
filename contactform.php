<?php

if (isset($_POST['submit'])) {
  $name = $_POST['name'];
  $mailFROM = $_POST['email'];
  $phone = $_POST['phone'];
  $message = $_POST['message'];

  $mailTo = "marqedev@maxmarquez.me";
  $headers = "From: ".$mailFrom;
  $txt = "You have received an e-mail from ".$name.".\n\n".$message;

  mail($mailTo, $txt, $headers);
  header("Location: contact.html?mailsend");

}

 ?>
