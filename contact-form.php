<?php require 'PHPMailer/PHPMailerAutoload.php'?>
<!-- START:: contact-us -->
<section class="contact-us" id="contactForm">
  <div class="container">
    <h1>Contact Us</h1>
    <p>We’re Just a Few Keys Away.</p>
    <div class="email-box">
      <div class="contact-form">
        <h2>Please fill this form, and we'll get back to you in a heartbeat.</h2>
        <form method="post" id="frmContact" name="contactform1" class=" ">
          <div class="row">
            <div class="col-md-6">
              <input type="text" class="form-control" name="first" placeholder="First name" required>
            </div>
            <div class="col-md-6">
              <input type="text" class="form-control" name="last" placeholder="Last name" required>
            </div>
          </div>  <!-- End row -->
          <div class="row">
            <div class="col-md-12">
              <input type="email" class="form-control" name="email" placeholder="Email Address" required>
            </div>
          </div>  <!-- End row -->
          <div class="row">
            <div class="col-md-5">
              <div class="select-div">
                <select  name="country" class="form-control cntry-drpdwn"  placeholder="country" required>
                  <option value="">Select country</option>
                  <option>India</option>
                  <option>America</option>
                  <option>UAE</option>
                  <option>Australia</option>
                  <option>Singapore</option>
                  <option>Japan</option>
                </select>
              </div>
            </div>
            <div class="col-md-2 col-4">
              <div class="select-div">
                <select name="country_code" class="form-control country-codes" placeholder="+91" style="padding: 0 0px 0 15px;" required>
                  <option>+91</option>
                  <option>+92</option>
                  <option>+93</option>
                  <option>+94</option>
                  <option>+95</option>
                  <option>+96</option>
                  <option>+35</option>
                </select>
              </div>
            </div>
            <div class="col-md-5 col-8">
              <input type="tel" class="form-control" name="phone" placeholder="Phone number"  pattern="+[0-9]{12}" required>
            </div>
          </div>  <!-- End row -->
          <div class="row">
            <div class="col-md-12">
              <textarea class="form-control txt-area" name="message" placeholder="Your message"></textarea>
            </div>
          </div>  <!-- End row -->
          <div class="text-center">
            <button type="submit" name="submitcontact" class="btn-send">Send</button>
          </div>  <!-- End row -->
        </form>
      </div>  <!-- End contact-form -->
      
      <div class="envelope">
        <div class="env-top">
          <img src="images/env-top.svg" />
        </div>
        <div class="left-traingle">
          <img src="images/left-traingle.svg" />
        </div>
        <div class="right-traingle">
          <img src="images/right-traingle.svg" />
        </div>
        <div class="form-bg"></div>
      </div>  <!-- End envelope -->
    </div>  <!-- End email-box -->

  </div>
</section>
<!-- END:: contact-us -->

<?php
  
  //get post email
  $mail_sub = "Healthwatch Enquiry";
  $mail_one = 'kandeepan@chcgroup.in';
  $mail_two = 'jk@chcgroup.in';

  if(isset($_POST["submitcontact"])){

  $mail_first =$_POST['first'];
  $mail_last =$_POST['last'];
  $mail_code =$_POST['country_code'];
  $mail_country =$_POST['country'];
  $mail_phone =$_POST['phone'];
  $mail_email =$_POST['email'];
  $mail_message =$_POST['message'];
    
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
      $mail->FromName = "Healthwatch Enquiry";
      $mail->Body    = "
      <b>First name: </b>" .$mail_first.".<br><br>
      <b>Last name: </b>" .$mail_last.".<br><br>
      <b>Email ID: </b>" .$mail_email.".<br><br>
      <b>Country code: </b>" .$mail_code.".<br><br>
      <b>Country: </b>" .$mail_country.".<br><br>
      <b>Phone number: </b>" .$mail_phone.".<br><br>
      <b>Message: </b>" .$mail_message;
      
      $mail->addAddress($mail_one);
      $mail->addAddress($mail_two);
    

      if($mail->send())
      {
            //echo 'Message has been sent';
            echo "<script> alert('Mail sent successfully !');</script>";
      }
      else
      echo "<script> alert('Error: Mail not Sent...!');</script>";
  }

?>