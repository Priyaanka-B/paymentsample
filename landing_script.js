$(document).ready(function () {
  $(".download").css("background-color", "white");

  $(".fees-receipt").hide();

  $(".otp-popup").hide();

  $(".download").click(function () {
    $(".input-tags").hide();
    $(".otp-popup").hide();
    $(".download").css("background-color", "rgb(85 218 255)");
    $(".register").css("background-color", "white");
    $(".fees-receipt").show();
  });

  $(".register").click(function () {
    $(".input-tags").show();
    $(".fees-receipt").hide();
    $(".download").css("background-color", "white");
    $(".register").css("background-color", "rgb(85 218 255)");
  });

  $(".input-tags-submit").click(function () {
    var mobile = $("#mobile").val();
    var email = $("#email").val();

    var mobilePattern = /^\d{10}$/;
    var emailPattern = /\S+@\S+\.\S+/;

    if (!mobile.match(mobilePattern)) {
      alert("Please enter a valid 10-digit mobile number.");
      return false;
    }

    if (!email.match(emailPattern)) {
      alert("Please enter a valid email address.");
      return false;
    }
    $(".otp-popup").show();
  });

  $(".otp-popup-submit").click(function () {
    alert("Registered Successfully");
  });

  $(".input-tags-submit-receipt").click(function () {
    var mobile = $("#mobile1").val();
    var email = $("#email1").val();

    var mobilePattern = /^\d{10}$/;
    var emailPattern = /\S+@\S+\.\S+/;

    if (!mobile.match(mobilePattern)) {
      alert("Please enter a valid 10-digit mobile number.");
      return false;
    }

    if (!email.match(emailPattern)) {
      alert("Please enter a valid email address.");
      return false;
    }
    alert("Downloaded Successfully");
  });
});
