<!-- START:: subscribe -->
<section class="subscribe">
  <div class="container">
    <h1>Subscribe</h1>
    <p>Join our mailing list to never miss an article.</p>
     <form method="post" id="frmContact1" name="contactform1" class=" ">
	    <div class="email-input">
	      <input type="text" name="mail" placeholder="Enter your email address" required>
	      <button type="submit" name="submitcontact1" class="btn-send"><img src="images/paper-plane.svg" /></button>
	    </div>
	 </form>   
	 </div>
</section>
<!-- END:: subscribe -->

<?php
  
  //get post email
  $mail_sub = "Healthwatch Subsription";
  $mail_two = 'pulse@chcgroup.in';

  if(isset($_POST["submitcontact1"])){

  $mail_mail =$_POST['mail'];
    
  $mail = new PHPMailer();                              // Passing `true` enables exceptions
      //Server settings
                                   // Enable verbose debug output
      // $mail->isSMTP();                                      // Set mailer to use SMTP
      // $mail->Host = 'smtp.gmail.com';  // Specify main and backup SMTP servers
      // $mail->SMTPAuth = true;                   // Enable SMTP authentication
      $mail->Username = 'plmforum2020@gmail.com';                 // SMTP username
      $mail->Password = 'PlmForum@12345!';                          // SMTP password
     //  $mail->SMTPSecure = 'tls';
     // // $mail->SMTPDebug=2;
                   
     //  $mail->Port = 587;     
   
      //Content
      $mail->isHTML(true);                                  // Set email format to HTML
      $mail->Subject = $mail_sub;
      $mail->FromName = "Healthwatch Subsription";
      $mail->Body    = "
      <b>Mail Id: </b>" .$mail_mail;
      
      $mail->AddAddress($mail_two);
    

      if($mail->send())
      {
            //echo 'Message has been sent';
            echo "<script> alert('Mail sent successfully !');</script>";
      }
      else
      echo "<script> alert('Error: Mail not Sent...!');</script>";
  }

?>