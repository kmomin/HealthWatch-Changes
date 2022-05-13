<?php require 'PHPMailer/PHPMailerAutoload.php'?>
<!-- START:: start-html -->
<?php include("start-html.php"); ?>
<!-- END:: start-html -->

<!-- START:: Header -->
<div class="header-white tb-header">
  <?php include("header.php"); ?>
</div>
<!-- END:: Header -->

<div class="test-booking">
  <!-- START:: booking-banner -->
  <section class="booking-banner">
    <div id="particles-js"></div>
    <img src="images/testBooking-bg.jpg" class="bg-img" />
    <img src="images/arrow-down-icon.png" class="arrow-down" />
  </section>
  <!-- END:: booking-banner -->


  <!-- START:: booking-form -->
  <section class="booking-form">
    <div class="container">
      <h1>Book an at-home holter or ABPM test online</h1>

      <form autocomplete="off" method="post" id="testBooking" name="bookingForm" class="">
        <div class="form-group">
          <label class='error'></label>
          <span class="input input--nao">
            <input class="input__field input__field--nao" name="name" type="text" id="fullName" onkeyup="checkValid('name')" />
            <label class="input__label input__label--nao" for="input-1">
              <span class="input__label-content input__label-content--nao"><span class="red">*</span> Full name</span>
            </label>
            <svg class="graphic graphic--nao" width="300%" height="100%" viewBox="0 0 1200 60" preserveAspectRatio="none">
              <path d="M0,56.5c0,0,298.666,0,399.333,0C448.336,56.5,513.994,46,597,46c77.327,0,135,10.5,200.999,10.5c95.996,0,402.001,0,402.001,0"/>
            </svg>
          </span>
        </div>  <!-- End form-group -->

        <div class="form-group">
          <label class='error'></label>
          <span class="input input--nao">
            <input class="input__field input__field--nao" name="phone" type="tel" id="phone" onkeyup="checkValid('phone')" />
            <label class="input__label input__label--nao" for="input-1">
              <span class="input__label-content input__label-content--nao"><span class="red">*</span> Mobile (+91)</span>
            </label>
            <svg class="graphic graphic--nao" width="300%" height="100%" viewBox="0 0 1200 60" preserveAspectRatio="none">
              <path d="M0,56.5c0,0,298.666,0,399.333,0C448.336,56.5,513.994,46,597,46c77.327,0,135,10.5,200.999,10.5c95.996,0,402.001,0,402.001,0"/>
            </svg>
          </span>
        </div>  <!-- End form-group -->

        <div class="form-group">
          <label class='error'></label>
          <span class="input input--nao">
            <input class="input__field input__field--nao" name="email" type="email" id="email" onkeyup="checkValid('email')" />
            <label class="input__label input__label--nao" for="input-1">
              <span class="input__label-content input__label-content--nao"><span class="red">*</span> Email</span>
            </label>
            <svg class="graphic graphic--nao" width="300%" height="100%" viewBox="0 0 1200 60" preserveAspectRatio="none">
              <path d="M0,56.5c0,0,298.666,0,399.333,0C448.336,56.5,513.994,46,597,46c77.327,0,135,10.5,200.999,10.5c95.996,0,402.001,0,402.001,0"/>
            </svg>
          </span>
        </div>  <!-- End form-group -->

        <div class="form-group">
          <label class='error'></label>
          <span class="input input--nao">
            <img src="images/arrow-down-icon.png" class="arrow-icon" />
            <select class="input__field input__field--nao select-dd select-test" name="option" id="option" onchange="checkValid('option')">
              <option value=""></option>
              <option value="Holter">Holter</option>
              <option value="ABPM">Ambulatory Blood Pressure Monitoring (ABPM)</option>
            </select>
            <label class="input__label input__label--nao" for="input-1">
              <span class="input__label-content input__label-content--nao"><span class="red">*</span> Test</span>
            </label>
            <svg class="graphic graphic--nao" width="300%" height="100%" viewBox="0 0 1200 60" preserveAspectRatio="none">
              <path d="M0,56.5c0,0,298.666,0,399.333,0C448.336,56.5,513.994,46,597,46c77.327,0,135,10.5,200.999,10.5c95.996,0,402.001,0,402.001,0"/>
            </svg>
          </span>
        </div>  <!-- End form-group -->

        <div class="form-group city-box">
          <label class='error'></label>
          <span class="input input--nao">
            <img src="images/arrow-down-icon.png" class="arrow-icon" />
            <select name="city" class="input__field input__field--nao select-dd city-dd" id="city" onchange="checkValid('city')"></select>
            <label class="input__label input__label--nao" for="input-1">
              <span class="input__label-content input__label-content--nao"><span class="red">*</span> City</span>
            </label>
            <svg class="graphic graphic--nao" width="300%" height="100%" viewBox="0 0 1200 60" preserveAspectRatio="none">
              <path d="M0,56.5c0,0,298.666,0,399.333,0C448.336,56.5,513.994,46,597,46c77.327,0,135,10.5,200.999,10.5c95.996,0,402.001,0,402.001,0"/>
            </svg>
          </span>
        </div>  <!-- End form-group -->

        <div class="form-group duration-box">
          <label class='error'></label>
          <span class="input input--nao">
            <img src="images/arrow-down-icon.png" class="arrow-icon" />
            <select name="days" class="input__field input__field--nao select-dd test-duration" id="duration" onchange="checkValid('duration')">
              <option value=""></option>
              <option>1 day</option>
              <option>2 days</option>
              <option>3 days</option>
              <option>4 days</option>
              <option>5 days</option>
              <option>6 days</option>
              <option>7 days</option>
              <option>8 days</option>
              <option>9 days</option>
              <option>10 days</option>
              <option>11 days</option>
              <option>12 days</option>
              <option>13 days</option>
              <option>14 days</option>
            </select>
            <label class="input__label input__label--nao" for="input-1">
              <span class="input__label-content input__label-content--nao"><span class="red">*</span> Test Duration</span>
            </label>
            <svg class="graphic graphic--nao" width="300%" height="100%" viewBox="0 0 1200 60" preserveAspectRatio="none">
              <path d="M0,56.5c0,0,298.666,0,399.333,0C448.336,56.5,513.994,46,597,46c77.327,0,135,10.5,200.999,10.5c95.996,0,402.001,0,402.001,0"/>
            </svg>
          </span>
        </div>  <!-- End form-group -->

        <p class="availability"><span>*</span>Available in Delhi-NCR, Mumbai, Chennai, Hyderabad and Bengaluru.</p>
        <p><span>*</span>All fields are mandatory</p>
        <h2>If you have the details of your referring physician handy, please enter them below (optional)</h2>

        <div class="form-group">
          <span class="input input--nao">
            <input name="physician" class="input__field input__field--nao" type="text">
            <label class="input__label input__label--nao" for="input-1">
              <span class="input__label-content input__label-content--nao">Physician's name</span>
            </label>
            <svg class="graphic graphic--nao" width="300%" height="100%" viewBox="0 0 1200 60" preserveAspectRatio="none">
              <path d="M0,56.5c0,0,298.666,0,399.333,0C448.336,56.5,513.994,46,597,46c77.327,0,135,10.5,200.999,10.5c95.996,0,402.001,0,402.001,0"/>
            </svg>
          </span>
        </div>  <!-- End form-group -->

        <div class="form-group">
          <span class="input input--nao">
            <input name="physician_phone" class="input__field input__field--nao" type="tel" />
            <label class="input__label input__label--nao" for="input-1">
              <span class="input__label-content input__label-content--nao">Physician's mobile number (+91)</span>
            </label>
            <svg class="graphic graphic--nao" width="300%" height="100%" viewBox="0 0 1200 60" preserveAspectRatio="none">
              <path d="M0,56.5c0,0,298.666,0,399.333,0C448.336,56.5,513.994,46,597,46c77.327,0,135,10.5,200.999,10.5c95.996,0,402.001,0,402.001,0"/>
            </svg>
          </span>
        </div>  <!-- End form-group -->

        <div class="text-center">
          <button type="submit" name="submitcontact" disabled class="btn btn-submit">Submit</button>
        </div>
      </form>
    </div>  <!-- End container -->
  </section>
  <!-- END:: booking-form -->


  <!-- START:: need-assistance -->
  <section class="need-assistance">
    <div class="container">
      <h1>Need assistance?</h1>
      <h2>Please call us on</h2>
      <a target="_blank" href="tel:+919999222554">+91-9999 222 554</a>
      <h2>or email us at</h2>
      <a target="_blank" href="mailto:mypatchsupport@chcgroup.in">mypatchsupport@chcgroup.in</a>
    </div>
  </section>
  <!-- END:: need-assistance -->

  <!-- START:: Alert Modal -->
  <div class="modal fade" id="alertModal" tabindex="-1" role="dialog">
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <div class="modal-body">
          <button type="button" class="btn-close" data-dismiss="modal">&times;</button>
          <div class="alert-icon animate__animated"></div>
          <h1></h1>
          <p></p>
          <button type="button" class="btn" data-dismiss="modal">Ok</button>
        </div>  <!-- End modal-body -->
      </div>
    </div>
  </div>
  <!-- END:: Alert Modal -->
</div>

<!-- START:: Footer -->
<?php include("footer.php"); ?>
<!-- END:: Footer -->

  <script type="text/javascript" src="js/test-booking-validation.js"></script>
  <script type="text/javascript">
    $(".arrow-down").click(function () {
      $('html, body').animate({
        scrollTop: $(".booking-form").offset().top - 60
      }, 1000);
    });
  </script>
  </body>
</html>

<?php
  //get post email
  $mail_sub = "Test Booking";
  $mail_one = 'mypatchsupport@chcgroup.in';
  $mail_two = 'snehas@chcgroup.in';
  $mail_three = 'kandeepan@chcgroup.in';
  $mail_four = 'ssantosh@chcgroup.in';
  $mail_five = 'pswapna@chcgroup.in';

  if(isset($_POST["submitcontact"])) {
    $mail_name =$_POST['name'];
    $mail_phone =$_POST['phone'];
    $mail_option =$_POST['option'];
    $mail_email =$_POST['email'];
    $mail_days =$_POST['days'];
    $mail_city =$_POST['city'];
    $mail_physician =$_POST['physician'];
    $mail_physician_p =$_POST['physician_phone'];
    $mail = new PHPMailer(); // Passing `true` enables exceptions
    // Server settings
    // Enable verbose debug output
    // $mail->isSMTP();                           // Set mailer to use SMTP
    // $mail->Host = 'smtp.gmail.com';            // Specify main and backup SMTP servers
    // $mail->SMTPAuth = true;                    // Enable SMTP authentication
    $mail->Username = 'plmforum2020@gmail.com';   // SMTP username
    $mail->Password = 'PlmForum@12345!';          // SMTP password
    // $mail->SMTPSecure = 'tls';
    // $mail->SMTPDebug=2;
    // $mail->Port = 587;
    //Content
    $mail->isHTML(true);  // Set email format to HTML
    $mail->Subject = $mail_sub;
    $mail->FromName = "Test Booking";
    $mail->Body = "
    <b>Name: </b>" .$mail_name.".<br><br>
    <b>Phone: </b>" .$mail_phone.".<br><br>
    <b>Test Name: </b>".$mail_option.".<br><br>
    <b>Email: </b>".$mail_email.".<br><br>
    <b>Days: </b>" .$mail_days.".<br><br>
    <b>City: </b>" .$mail_city.".<br><br>
    <b>Physician name: </b>" .$mail_physician.".<br><br>
    <b>Physician number: </b>" .$mail_physician_p;
    
    $mail->addAddress($mail_one);
    $mail->addAddress($mail_two);
    $mail->addAddress($mail_three);
    $mail->addAddress($mail_four);
    $mail->addAddress($mail_five);

    if($mail->send()) {
      echo "<script>
        setTimeout(() => {
          $('#alertModal .alert-icon').show().addClass('animate__bounceIn');
        }, 1000);
        $('#alertModal .alert-icon').html('<i class=\"fa fa-check\"></i>');
        $('#alertModal .alert-icon').removeClass('icon-danger').addClass('icon-success');
        $('#alertModal h1').html('Thank you');
        $('#alertModal p').html('We’ve received your enquiry. We will contact you shortly.');
        $('#alertModal .btn').removeClass('btn-danger').addClass('btn-success');
        $('#alertModal').modal();
      </script>";
    } else {
      echo "<script>
        setTimeout(() => {
          $('#alertModal .alert-icon').show().addClass('animate__bounceIn');
        }, 1000);
        $('#alertModal .alert-icon').html('<i class=\"fa fa-times\"></i>');
        $('#alertModal .alert-icon').removeClass('icon-success').addClass('icon-danger');
        $('#alertModal h1').html('Oops!');
        $('#alertModal p').html('Something went wrong. Please check your internet connection and submit your enquiry again. Don’t worry; the details you entered have been saved.');
        $('#alertModal .btn').removeClass('btn-success').addClass('btn-danger');
        $('#alertModal').modal();
        // alert('Error: Mail not Sent...!');
      </script>";
    }
  }
?>