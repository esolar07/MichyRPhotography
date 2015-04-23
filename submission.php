<?php	
	if (!empty($_POST)){
	$name = strip_tags($_POST['cus_name']);
	$email = strip_tags($_POST['cus_email']);
	$phone = strip_tags($_POST['cus_email']);
	$text = strip_tags($_POST['cus_text'])
 	mail( "esolar@nerd.com", "Contact Form Submission", "Name: $name\nEmail: $email\nPhone: $phone\n Comments:$text");}

?>
