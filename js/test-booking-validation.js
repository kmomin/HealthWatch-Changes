var flagName = false, flagPhone = false, flagEmail = false, flagTest = false, flagCity = false, flagDuration = false;
var testOption;
function checkValid(field) {
  switch (field) {
    case 'name':
      var fName = document.getElementById('fullName').value;
      if (fName.trim() == '') {
        $("#fullName").parent().siblings('.error').text("Name is required");
        flagName = false;
      } else {
        $("#fullName").parent().siblings('.error').text("");
        flagName = true;
      }
      break;
    case 'phone':
      var phone = document.getElementById('phone').value;
      if (phone.trim() == '') {
        $("#phone").parent().siblings('.error').text("Mobile number is required");
        flagPhone = false;
      } else if (!(/^[0-9]+$/.test(phone))) {
        $("#phone").parent().siblings('.error').text("Mobile number should contain only digits");
        flagPhone = false;
      } else if (phone.length < 10 || phone.length > 10) {
        $("#phone").parent().siblings('.error').text("Mobile number must contain maximum 10 digits");
        flagPhone = false;
      } else {
        $("#phone").parent().siblings('.error').text("");
        flagPhone = true;
      }
      break;
    case 'email':
      var email = document.getElementById('email').value;
      const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      if (email.trim() == '') {
        $("#email").parent().siblings('.error').text("Email address is required");
        flagEmail = false;
      } else if (!re.test(String(email).toLowerCase())) {
        $("#email").parent().siblings('.error').text("Please enter valid email");
        flagEmail = false;
      } else {
        $("#email").parent().siblings('.error').text("");
        flagEmail = true;
      }
      break;
    case 'option':
      testOption = document.getElementById('option').value;
      if (testOption == '') {
        $("#option").parent().siblings('.error').text("Test is required");
        flagTest = false;
      } else {
        $("#option").parent().siblings('.error').text("");
        flagTest = true;
        flagCity = false;
      }
      break;
    case 'city':
      var testCity = document.getElementById('city').value;
      if (testCity == '') {
        $("#city").parent().siblings('.error').text("City is required");
        flagCity = false;
      } else {
        $("#city").parent().siblings('.error').text("");
        flagCity = true;
      }
      break;
    case 'duration':
      var testDuration = document.getElementById('duration').value;
      if (testDuration == '') {
        $("#duration").parent().siblings('.error').text("Test duration is required");
        flagDuration = false;
      } else {
        $("#duration").parent().siblings('.error').text("");
        flagDuration = true;
      }
      break;
  }

  if (testOption == 'Holter') {
    if (flagName && flagPhone && flagEmail && flagTest && flagCity && flagDuration) {
      $('#testBooking .btn-submit').prop('disabled', false);
    } else {
      $('#testBooking .btn-submit').prop('disabled', 'disabled');
    }
  } else {
    if (flagName && flagPhone && flagEmail && flagTest && flagCity) {
      $('#testBooking .btn-submit').prop('disabled', false);
    } else {
      $('#testBooking .btn-submit').prop('disabled', 'disabled');
    }
  }
}