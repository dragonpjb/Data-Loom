<?php
$to = "patrick@data-loom.com";
$name = $_POST['grab_name'];
$from = $_POST['grab_email'];
$subject = $_POST['grab_subject'];
$message = wordwrap($_POST['grab_text'], 70);

$headers = "From: $from";
$res = mail($to,$subject,$message,$headers);
//
if($res)
{
	header('location:contact.php?m=1');
}
else
{
	header('location:contact.php?m=0');
}

?> 