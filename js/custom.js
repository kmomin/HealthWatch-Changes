$(document).ready(function () {
  var widnowWidth = $(window).width();
  setTimeout(() => {
    $(".loader").hide();
  }, 2000);

  /*****************************************
   * 		Go top  Script
   *****************************************/
  $(window).scroll(function (event) {
    if ($(window).scrollTop() > 400)
      $(".goTop").fadeIn();
    else
      $(".goTop").fadeOut();
  });
  $(".goTop").on('click', function (event) {
    $('html, body').animate({ scrollTop: 0 }, 600);
  });

  /*****************************************
   * 		Banner icon down click event
   *****************************************/
  $(".icon-down").click(function () {
    $('html, body').animate({
      scrollTop: $("#oldSection").offset().top - 110
    }, 1000);
  });

  $(".icon-down1").click(function () {
    $('html, body').animate({
      scrollTop: $("#polygon").offset().top - 60
    }, 1000);
  });

  /* Contact Form Script */
  var countryList = [];
  $.getJSON("json/countryCodes.json", function (res) {
    countryList = res;
    $(".cntry-drpdwn").append('<option>Select country</option>');
    countryList.forEach(e => {
      $(".cntry-drpdwn").append(`<option>${e.name}</option>`);
      $(".country-codes").append(`<option>${e.dial_code}</option>`);
    });
  }).fail(function () {
    console.log("An error has occurred while getting country list.");
  });

  $(window).scroll(function () {
    try {
      if ($(window).scrollTop() > 350) {
        $('.old-couple').show();
        $('.old-couple').addClass('animate__fadeIn');
      }
      if ($(window).scrollTop() > $("#outsource").offset().top - 300) {
        $('.girl-img').show();
        $('.girl-img').addClass('animate__slideInRight');
      }
    } catch (err) {
      // console.log(err);
    }

    /* Contact form Script */
    try {
      if ($(window).scrollTop() >= $("#contactForm").offset().top - 100) {
        $('.contact-form').addClass('slideTop');
        $('.form-bg').addClass('slideUp');
        setTimeout(function () {
          $('.envelope').addClass('remove-env');
        }, 1000);
        setTimeout(function () {
          $('.contact-form').css('z-index', '10');
        }, 2000);
      }
      if (widnowWidth >= 992) {
        if ($(window).scrollTop() < $("#contactForm").offset().top - 100) {
          $('.contact-form').removeClass('slideTop');
          $('.form-bg').removeClass('slideUp');
          $('.contact-form').css('z-index', '3');
        }
      }
    } catch (err) {
      // console.log(err);
    }

    /* Contact Page Script */
    try {
      if ($(window).scrollTop() >= $(".nearest-center").offset().top - 500) {
        $('.marker').addClass('animate__bounce');
      }
    } catch (err) {
      // console.log(err);
    }

    /*****************************************
     * 		Header color changes on scroll
     *****************************************/
    if ($(this).scrollTop() > 124) {
      $(".header-section").addClass("change-color");
      $("#logo").attr('src', 'images/Healthwatch_favicon@2x.png');

      $("#logo2").attr('src', 'images/Healthwatch_favicon@2x.png');
      if (widnowWidth <= 767) {
        $(".book-test").addClass("btn-show");
        $(".btn-bookTest").hide();
      }
    } else if ($(this).scrollTop() <= 124) {
      $(".header-section").removeClass("change-color");
      $("#logo").attr('src', 'images/Healthwatch_logo.png');

      $("#logo2").attr('src', 'images/Healthwatch_logo_white.png');
      if (widnowWidth <= 767) {
        $("#logo2").attr('src', 'images/Healthwatch_logo.png');
        $(".book-test").removeClass("btn-show");
        $(".btn-bookTest").show();
      }
    }

    /*****************************************
     * 		START:: Old Man listing music animation
     *****************************************/
    try {
      if (widnowWidth >= 992) {
        if ($(window).scrollTop() > $("#heartstrings").offset().top + 100) {
          $(".old-man").addClass("bigger1");
        }
        if ($(window).scrollTop() > $("#heartstrings").offset().top + 200) {
          $(".old-man").addClass("bigger2");
        }
        if ($(window).scrollTop() > $("#heartstrings").offset().top + 300) {

          $(".old-man").addClass("bigger3");
          $('.product').show();
          $('.product').addClass('animate__fadeIn');

          $('.product-desc').css('display', 'flex');
          $('.product-desc').addClass('animate__fadeInUp');
        }
      }
      if (widnowWidth <= 767) {
        if ($(window).scrollTop() > $("#heartstrings").offset().top - 100) {
          $('.product').show();
          $('.product').addClass('animate__fadeIn');

          $('.product-desc').css('display', 'flex');
          $('.product-desc').addClass('animate__fadeInUp');
        }
      }
      if (widnowWidth >= 768 && widnowWidth <= 991) {
        if ($(window).scrollTop() > $("#heartstrings").offset().top - 300) {
          $(".old-man").addClass("bigger1");
        }
        if ($(window).scrollTop() > $("#heartstrings").offset().top - 200) {
          $(".old-man").addClass("bigger2");
        }
        if ($(window).scrollTop() > $("#heartstrings").offset().top - 100) {

          $(".old-man").addClass("bigger3");
          $('.product').show();
          $('.product').addClass('animate__fadeIn');

          $('.product-desc').css('display', 'flex');
          $('.product-desc').addClass('animate__fadeInUp');
        }
      }
    } catch (err) {
      // console.log(err);
    }
    /* END:: Old Man listing music animation */

    if (widnowWidth >= 320 && widnowWidth <= 479) {
      $(".old-man").attr('src', 'images/old-man-479x400.jpg');
    }
    if (widnowWidth >= 480 && widnowWidth <= 767) {
      $(".old-man").attr('src', 'images/old-man-767x430.jpg');
    }

    try {
      if ($(window).scrollTop() > $(".what-we-do").offset().top - 200) {
        $(".tv-screen1 h2, .tv-screen2 h2, .tv-screen3 h2, .tv-screen4 h2").css('display', 'flex');
        $(".tv-screen1 h2, .tv-screen2 h2, .tv-screen3 h2, .tv-screen4 h2").addClass("animate__fadeIn");
      }

      if ($(window).scrollTop() > $(".two-section").offset().top - 500) {
        $(".icon-svg").css('visibility', 'visible');
        $(".icon-svg").addClass("animate__fadeIn");
      }
    } catch (err) {
      // console.log(err);
    }

    try {
      if ($(window).scrollTop() > $(".learn-more").offset().top - 300) {
        $(".learn-icon1, .learn-icon2, .learn-icon3").css('visibility', 'visible');
        $(".learn-icon1, .learn-icon2, .learn-icon3").addClass("animate__fadeIn");
      }
    } catch (err) {
      // console.log(err);
    }
  });

  /* START:: Contact Page Script */
  var citiesList = []
  $.getJSON("json/cities.json", function (res) {
    citiesList = res;
  }).fail(function () {
    console.log("An error has occurred while getting cities list.");
  });
  $('.srchCity').on("input", function () {
    var input = $(this).val().toLowerCase();
    if (input.length > 1) {
      var filteredCities = citiesList.filter(e => {
        return e.city.includes(input) || e.state.includes(input);
      });

      var createLi = '';
      for (let i = 0; i < filteredCities.length; i++) {
        createLi += `<li>${filteredCities[i].city}, <span>${filteredCities[i].state}</span></li>`;
      }
      $(".search-list").html(createLi);

      if ($(".search-list").length > 0 && filteredCities.length) { $(".search-list").show(); } else { $(".search-list").hide(); }
    } else {
      $(".search-list").hide();
    }
  });

  $(document).on('click', '.search-list li', function () {
    $(".search-list").hide();
    $('.srchCity').val($(this).text());
  });

  $(".scrollContact").click(function () {
    $('html, body').animate({
      scrollTop: $("#contactForm").offset().top
    }, 1000);
  });
  /* END:: Contact Page Script */

  /*****************************************
   * 		Credentials Parallax Effect
   *****************************************/
  jarallax(document.querySelectorAll('.jarallax'), {
    imgWidth: 1920,
    imgHeight: 1080
  });

  /*****************************************
   * 		Counter Plugin
   *****************************************/
  $('.counter').countUp();
  $('.counter1').countUp({ time: 3000 });

  /* Water drop image script */
  /* Desktop View */
  if (widnowWidth >= 992) {
    $("area").hover(function () {
      if (this.title === 'Drop 1') {
        $(".infographics .heading1").html("We deploy dedicated multiple monitoring and delivery centres with data security, high-speed internet and power backups to make sure we’re always on and always secure.");
        $(".infographics .heading1").addClass("showDesc1");
      } else if (this.title === 'Drop 2') {
        $(".infographics .heading2").html("We handle patient data with extreme sensitivity and confidentiality. We’re fully compliant with HIPAA guidelines and run regular audits.");
        $(".infographics .heading2").addClass("showDesc2");
      } else if (this.title === 'Drop 3') {
        $(".infographics .heading3").html("We allow clients to implement their unique standards and procedures.");
        $(".infographics .heading3").addClass("showDesc3");
      } else if (this.title === 'Drop 4') {
        $(".infographics .heading4").html("Having served the American, Australian and Asian geographies, we’ve interpreted over 2 billion hours of ECG.");
        $(".infographics .heading4").addClass("showDesc4");
      }
    }, function () {
      if (this.title === 'Drop 1') {
        $(".infographics .heading1").removeClass("showDesc1").html(`Flawless <br>reliability`);
      } else if (this.title === 'Drop 2') {
        $(".infographics .heading2").removeClass("showDesc2").html(`Guaranteed <br>privacy`);
      } else if (this.title === 'Drop 3') {
        $(".infographics .heading3").removeClass("showDesc3").html(`High <br>customizability`);
      } else if (this.title === 'Drop 4') {
        $(".infographics .heading4").removeClass("showDesc4").html(`Immense <br>experience`);
      }
    });

    $(".heading1").hover(function () {
      $(".heading1").html("We deploy dedicated multiple monitoring and delivery centres with data security, high-speed internet and power backups to make sure we’re always on and always secure.");
      $(".heading1").addClass("showDesc1");
    }, function () {
      $(".heading1").removeClass("showDesc1").html(`Flawless <br>reliability`);
    });
    $(".heading2").hover(function () {
      $(".heading2").html("We handle patient data with extreme sensitivity and confidentiality. We’re fully compliant with HIPAA guidelines and run regular audits.");
      $(".heading2").addClass("showDesc2");
    }, function () {
      $(".heading2").removeClass("showDesc2").html(`Guaranteed <br>privacy`);
    });
    $(".heading3").hover(function () {
      $(".heading3").html("We allow clients to implement their unique standards and procedures.");
      $(".heading3").addClass("showDesc3");
    }, function () {
      $(".heading3").removeClass("showDesc3").html(`High <br>customizability`);
    });
    $(".heading4").hover(function () {
      $(".heading4").html("Having served the American, Australian and Asian geographies, we’ve interpreted over 2 billion hours of ECG.");
      $(".heading4").addClass("showDesc4");
    }, function () {
      $(".heading4").removeClass("showDesc4").html(`Immense <br>experience`);
    });
  }

  /* Mobile View */
  if (widnowWidth <= 991) {
    var head1 = 1;
    $(".heading1").click(function () {
      if (head1 == 1) {
        $(".heading1").html("We deploy dedicated multiple monitoring and delivery centres with data security, high-speed internet and power backups to make sure we’re always on and always secure.");
        $(".heading1").addClass("showDesc1");
        head1 = 0;
      } else {
        $(".heading1").removeClass("showDesc1").html(`Flawless <br>reliability`);
        head1 = 1;
      }
    });
    var head2 = 1;
    $(".heading2").click(function () {
      if (head2 == 1) {
        $(".heading2").html("We handle patient data with extreme sensitivity and confidentiality. We’re fully compliant with HIPAA guidelines and run regular audits.");
        $(".heading2").addClass("showDesc2");
        head2 = 0;
      } else {
        $(".heading2").removeClass("showDesc2").html(`Guaranteed <br>privacy`);
        head2 = 1;
      }
    });
    var head3 = 1;
    $(".heading3").click(function () {
      if (head3 == 1) {
        $(".heading3").html("We allow clients to implement their unique standards and procedures.");
        $(".heading3").addClass("showDesc3");
        head3 = 0;
      } else {
        $(".heading3").removeClass("showDesc3").html(`High <br>customizability`);
        head3 = 1;
      }
    });
    var head4 = 1;
    $(".heading4").click(function () {
      if (head4 == 1) {
        $(".heading4").html("Having served the American, Australian and Asian geographies, we’ve interpreted over 2 billion hours of ECG.");
        $(".heading4").addClass("showDesc4");
        head4 = 0;
      } else {
        $(".heading4").removeClass("showDesc4").html(`Immense <br>experience`);
        head4 = 1;
      }
    });
  }

  /*****************************************
   * 		Slick Slider
   *****************************************/
  const slider = $('.health-slider');
  slider.slick({
    centerMode: true,
    centerPadding: '300px',
    slidesToShow: 3,
    arrows: true,
    autoplay: false,
    responsive: [{
      breakpoint: 992,
      settings: {
        arrows: false,
        centerMode: true,
        slidesToShow: 3
      }
    },
    {
      breakpoint: 768,
      settings: {
        dots: true,
        arrows: false,
        centerMode: true,
        slidesToShow: 1
      }
    }
    ]
  });

  $('.slick-prev').hover(function () {
    $('.health-slider').slick('slickPrev');
  });
  $('.slick-next').hover(function () {
    $('.health-slider').slick('slickNext');
  });

  $('.blog-slider').slick({
    centerMode: true,
    slidesToShow: 1,
    centerPadding: '300px',
    arrows: true,
    dots: true,
    responsive: [{
      breakpoint: 992,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '0px',
        slidesToShow: 2
      }
    },
    {
      breakpoint: 768,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '0px',
        slidesToShow: 1
      }
    }
    ]
  });

  $('.info-slider').slick({
    slidesToShow: 1,
    arrows: false,
    dots: true
  });

  $('.graph-slider').slick({
    slidesToShow: 1,
    arrows: false,
    dots: true
  });


  if (widnowWidth <= 767) {
    $('.client-logos').slick({
      slidesToShow: 2,
      arrows: false,
      dots: true
    });

    $('.learnSlider, .map-slider').slick({
      slidesToShow: 1,
      arrows: false,
      dots: true
    });
  }


  /* START:: About Us Page Script */
  var degree = 0;
  $(".right-icon").click(function () {
    degree = degree + 60;
    $(".slides").css({ 'transform': 'rotate(' + degree + 'deg)' });
  });
  $(".left-icon").click(function () {
    degree = degree - 60;
    $(".slides").css({ 'transform': 'rotate(' + degree + 'deg)' });
  });

  $(".btn-readmore").click(function () {
    $(".social-links").hide();
    var pic, heading, subhead, content;
    if ($(this).hasClass("btn-rm1")) {
      pic = $(".user-img1").data('pic');
      console.log(pic)
      heading = $(".team-dtl1 h2").text();
      subhead = $(".team-dtl1 h3").text();
      content = $(".team-dtl1 .team-desc").html();
      $(".social-links").show();
    } else if ($(this).hasClass("btn-rm2")) {
      pic = $(".user-img2").data('pic');
      heading = $(".team-dtl2 h2").text();
      subhead = $(".team-dtl2 h3").text();
      content = $(".team-dtl2 .team-desc").html();
    } else if ($(this).hasClass("btn-rm3")) {
      pic = $(".user-img3").data('pic');
      heading = $(".team-dtl3 h2").text();
      subhead = $(".team-dtl3 h3").text();
      content = $(".team-dtl3 .team-desc").html();
    } else if ($(this).hasClass("btn-rm4")) {
      pic = $(".user-img4").data('pic');
      heading = $(".team-dtl4 h2").text();
      subhead = $(".team-dtl4 h3").text();
      content = $(".team-dtl4 .team-desc").html();
    } else if ($(this).hasClass("btn-rm5")) {
      pic = $(".user-img5").data('pic');
      heading = $(".team-dtl5 h2").text();
      subhead = $(".team-dtl5 h3").text();
      content = $(".team-dtl5 .team-desc").html();
    } else if ($(this).hasClass("btn-rm6")) {
      pic = $(".user-img6").data('pic');
      heading = $(".team-dtl6 h2").text();
      subhead = $(".team-dtl6 h3").text();
      content = $(".team-dtl6 .team-desc").html();
    } else if ($(this).hasClass("btn-rm7")) {
      pic = $(".user-img7").data('pic');
      heading = $(".team-dtl7 h2").text();
      subhead = $(".team-dtl7 h3").text();
      content = $(".team-dtl7 .team-desc").html();
    } else if ($(this).hasClass("btn-rm8")) {
      pic = $(".user-img8").data('pic');
      heading = $(".team-dtl8 h2").text();
      subhead = $(".team-dtl8 h3").text();
      content = $(".team-dtl8 .team-desc").html();
    } else if ($(this).hasClass("btn-rm9")) {
      pic = $(".user-img9").data('pic');
      heading = $(".team-dtl9 h2").text();
      subhead = $(".team-dtl9 h3").text();
      content = $(".team-dtl9 .team-desc").html();
    } else if ($(this).hasClass("btn-rm10")) {
      pic = $(".user-img10").data('pic');
      heading = $(".team-dtl10 h2").text();
      subhead = $(".team-dtl10 h3").text();
      content = $(".team-dtl10 .team-desc").html();
    } else if ($(this).hasClass("btn-rm11")) {
      pic = $(".user-img11").data('pic');
      heading = $(".team-dtl11 h2").text();
      subhead = $(".team-dtl11 h3").text();
      content = $(".team-dtl11 .team-desc").html();
    }

    $(".modal-dtls .user-img").css('background-image', "url('" + pic + "')");
    $(".modal-dtls h2").html(heading);
    $(".modal-dtls h3").text(subhead);
    $(".modal-dtls .team-desc").html(content);
    $('#readMore').modal();
  });

  var intrvl;

  $('.btn-right').click(function (e) {
    e.preventDefault();
    if ($('.timeline-scroll').scrollLeft() < 1100) {
      $('.btn-left, .btn-right').removeClass('disable-btn');
      $('.timeline-scroll').animate({
        scrollLeft: "+=200px"
      }, "slow");
    } else {
      $('.btn-right').addClass('disable-btn');
    }
  });

  $('.btn-left').click(function (e) {
    e.preventDefault();
    console.log($('.timeline-scroll').scrollLeft());
    if ($('.timeline-scroll').scrollLeft() > 0) {
      $('.btn-left, .btn-right').removeClass('disable-btn');
      $('.timeline-scroll').animate({
        scrollLeft: "-=200px"
      }, "slow");
    } else {
      $('.btn-left').addClass('disable-btn');
    }
  });

  var circleCounter = true;
  $(window).scroll(function () {
    try {
      if (widnowWidth >= 767) {
        if ($(window).scrollTop() > $("#ourVision").offset().top - 350) {
          $('.vision-content').show();
          $('.vision-content').addClass('animate__slideInRight');
        }
      }

      if ($(window).scrollTop() > $(".our-values").offset().top - 100) {
        $('.slides').addClass('rotateIt');
      }

      if ($(window).scrollTop() > $("#qualityPolicy").offset().top - 100) {
        if (circleCounter) {
          if (widnowWidth > 479) {
            $(".circle").circleProgress({
              startAngle: 0,
              reverse: true,
              value: 1,
              size: 150,
              thickness: 2,
              fill: { gradient: ['#f6b8b5', '#e22a36'] }
            });
          } else {
            $(".circle").circleProgress({
              startAngle: 0,
              reverse: true,
              value: 1,
              size: 100,
              thickness: 2,
              fill: { gradient: ['#f6b8b5', '#e22a36'] }
            });
          }
          circleCounter = false;
        }
      }

      if ($(window).scrollTop() > $(".our-mission").offset().top - 500) {
        $('.rocket').show();
        $('.rocket').addClass('animate__fadeInUp');
      }
    } catch (err) {
      // console.log(err);
    }
  });
  /* END:: About Us Page Script */

  /* START:: CRM Page Script */
  setTimeout(() => {
    $('.man-img').show();
    $('.man-img').addClass('animate__fadeIn');
  }, 2300);
  setTimeout(() => {
    $('.heart-img').show();
    $('.heart-img').addClass('animate__fadeIn');
  }, 3000);
  setTimeout(() => {
    $('.banner-content').show();
    $('.banner-content').addClass('animate__fadeIn');
  }, 3300);

  if (widnowWidth <= 1023) {
    $('.heart-img img').attr('src', 'images/particle-heart-withStar.png');
  }

  if (widnowWidth <= 767) {
    $(".top-right .empty-img").attr('src', 'images/drop-tr-empty-mobile.svg');
    $(".bottom-right .empty-img").attr('src', 'images/drop-br-empty-mobile.svg');
    $(".top-left .empty-img").attr('src', 'images/drop-tl-empty-mobile.svg');
    $(".bottom-left .empty-img").attr('src', 'images/drop-bl-empty-mobile.svg');

    $(".top-right .filled-img").attr('src', 'images/drop-tr-mobile.svg');
    $(".bottom-right .filled-img").attr('src', 'images/drop-br-mobile.svg');
    $(".top-left .filled-img").attr('src', 'images/drop-tl-mobile.svg');
    $(".bottom-left .filled-img").attr('src', 'images/drop-bl-mobile.svg');
  }

  /* 3 Clocks script */
  var clockDeg1 = 0,
    clockDeg2 = 0,
    clockDeg3 = 0;
  setInterval(() => {
    clockDeg1 = clockDeg1 + 10;
    if (clockDeg1 > 375) {
      clockDeg1 = 0;
      $(".clock1 .needle").removeClass("smooth");
    } else {
      $(".clock1 .needle").addClass("smooth");
    }
    $(".clock1 .needle").css({ 'transform': 'rotate(' + clockDeg1 + 'deg)' });
  }, 200);
  setInterval(() => {
    clockDeg2 = clockDeg2 + 10;
    if (clockDeg1 > 380) {
      clockDeg1 = 0;
      $(".clock2 .needle").removeClass("smooth");
    } else {
      $(".clock2 .needle").addClass("smooth");
    }
    $(".clock2 .needle").css({ 'transform': 'rotate(' + clockDeg2 + 'deg)' });
  }, 300);
  setInterval(() => {
    clockDeg3 = clockDeg3 + 10;
    if (clockDeg1 > 370) {
      clockDeg1 = 0;
      $(".clock3 .needle").removeClass("smooth");
    } else {
      $(".clock3 .needle").addClass("smooth");
    }
    $(".clock3 .needle").css({ 'transform': 'rotate(' + clockDeg3 + 'deg)' });
  }, 800);

  var circleCounter1 = true;
  $(window).scroll(function () {
    try {
      if ($(window).scrollTop() > $(".trusted").offset().top - 100) {
        $(".rotator").addClass("rotateIt");
      }

      if ($(window).scrollTop() > $(".why-chc").offset().top - 100) {
        $(".icon-svg").css('visibility', 'visible');
        $(".icon-svg").addClass("animate__fadeIn");
      }

      if ($(window).scrollTop() > $(".cut-costs").offset().top - 200) {
        $(".greenBar, .greyBar").addClass("increase");
      }

      if ($(window).scrollTop() > $(".how-we-work").offset().top - 100) {
        if (circleCounter1) {
          if (widnowWidth > 479) {
            $(".circle").circleProgress({
              startAngle: 0,
              reverse: true,
              value: 1,
              size: 150,
              thickness: 2,
              fill: { gradient: ['#f6b8b5', '#e22a36'] }
            });
          } else {
            $(".circle").circleProgress({
              startAngle: 0,
              reverse: true,
              value: 1,
              size: 100,
              thickness: 2,
              fill: { gradient: ['#f6b8b5', '#e22a36'] }
            });
          }
          circleCounter1 = false;
        }
      }
    } catch (err) {
      // console.log(err);
    }
  });
  /* END:: CRM Page Script */

  /* START:: myPatch Page Script */
  if (widnowWidth <= 479) {
    setTimeout(() => {
      $(".old-manB").addClass('bigger1');
    }, 2500);
    setTimeout(() => {
      $(".old-manB").addClass('bigger2');
    }, 3500);
    setTimeout(() => {
      $(".patch-img").show().addClass("animate__fadeIn");
    }, 4500);
    setTimeout(() => {
      $(".patch-img").addClass("slideRight");
      $(".old-manB").addClass("animate__fadeOut");
    }, 5500);
    setTimeout(() => {
      $(".bannerP .content").show().addClass("animate__fadeIn");
    }, 6000);
  } else if (widnowWidth >= 480 && widnowWidth <= 767) {
    setTimeout(() => {
      $(".old-manB").addClass('bigger1');
    }, 2500);
    setTimeout(() => {
      $(".old-manB").addClass('bigger2');
    }, 3500);
    setTimeout(() => {
      $(".patch-img").show().addClass("animate__fadeIn");
    }, 4500);
    setTimeout(() => {
      $(".patch-img").addClass("slideRight");
      $(".old-manB").addClass("animate__fadeOut");
    }, 5500);
    setTimeout(() => {
      $(".bannerP .content").show().addClass("animate__fadeIn");
    }, 6000);
  } else if (widnowWidth >= 768 && widnowWidth <= 1023) {
    setTimeout(() => {
      $(".old-manB").addClass('bigger1');
    }, 2500);
    setTimeout(() => {
      $(".old-manB").addClass('bigger2');
    }, 3500);
    setTimeout(() => {
      $(".patch-img").show().addClass("animate__fadeIn");
    }, 4500);
    setTimeout(() => {
      $(".patch-img").addClass("slideRight");
      $(".old-manB").addClass("animate__fadeOut");
    }, 5500);
    setTimeout(() => {
      $(".bannerP .content").show().addClass("animate__fadeIn");
    }, 6000);
  } else if (widnowWidth > 1023) {
    setTimeout(() => {
      $(".old-manB").addClass('bigger1');
    }, 2500);
    setTimeout(() => {
      $(".old-manB").addClass('bigger2');
    }, 3500);
    setTimeout(() => {
      $(".old-manB").addClass('bigger3');
    }, 4500);
    setTimeout(() => {
      $(".patch-img").show().addClass("animate__fadeIn");
    }, 5500);
    setTimeout(() => {
      $(".patch-img").addClass("slideRight");
      $(".old-manB").addClass("animate__fadeOut");
    }, 6500);
    setTimeout(() => {
      $(".bannerP .content").show().addClass("animate__fadeIn");
    }, 7000);
  }

  $(".unmatch-con .btn-head, .unmatch-con .btn-expnd").click(function () {
    $(".toggleDiv").toggleClass('slideDiv');
    if ($(".btn-expnd").text() == "Expand") {
      $(".btn-expnd").text("Collapse");
      $(".unmatch-con .btn-head").text("- See all diagnosable conditions -");
    } else {
      $(".btn-expnd").text("Expand");
      $(".unmatch-con .btn-head").text("+ See all diagnosable conditions +");
    }
  });

  $('.symptom-slider').slick({
    slidesToShow: 1,
    arrows: true,
    dots: true,
    responsive: [{
      breakpoint: 992,
      settings: {
        arrows: false
      }
    },
    {
      breakpoint: 768,
      settings: {
        arrows: false
      }
    }
    ]
  });



  $("#accordion .card-header").click(function () {
    $("#accordion .card-header").removeClass("minusSign");
    setTimeout(() => {
      if (!$(this).hasClass("collapsed")) { $(this).addClass("minusSign"); }
    }, 50);
  });
  $("#accordion1 .card-header").click(function () {
    $("#accordion1 .card-header").removeClass("minusSign");
    setTimeout(() => {
      if (!$(this).hasClass("collapsed")) { $(this).addClass("minusSign"); }
    }, 50);
  });

  if (widnowWidth <= 767) {
    $(window).scroll(function () {
      try {
        if ($(window).scrollTop() > $(".doctor-choice").offset().top + 100) {
          $(".doctor-choice .heart1").css('display', 'flex').addClass("animate__bounceIn");
          setTimeout(() => { $(".doctor-choice .heart2").css('display', 'flex').addClass("animate__bounceIn"); }, 300);
          setTimeout(() => { $(".doctor-choice .heart3").css('display', 'flex').addClass("animate__bounceIn"); }, 600);
          setTimeout(() => { $(".doctor-choice .heart4").css('display', 'flex').addClass("animate__bounceIn"); }, 900);
          setTimeout(() => { $(".doctor-choice .heart5").css('display', 'flex').addClass("animate__bounceIn"); }, 1200);
          setTimeout(() => { $(".doctor-choice .heart6").css('display', 'flex').addClass("animate__bounceIn"); }, 1500);
        }
      } catch (err) {
        // console.log(err);
      }
    });

    $(".doctor-choice .heart").hover(function () {
      $(this).removeClass("animate__bounceIn");
      $(this).toggleClass("animate__heartBeat");
    });
  } else {
    $(".doctor-choice .heart").hover(function () {
      $(this).toggleClass("animate__heartBeat")
    });
  }

  var circleCntr = true;
  $(window).scroll(function () {
    try {
      if ($(window).scrollTop() > $(".symptoms").offset().top - 300) {
        if (circleCntr) {
          $(".circle1, .circle2, .circle3").circleProgress({
            value: 1,
            size: 200,
            thickness: 3,
            fill: { gradient: ['#6CB063'] }
          });
          circleCntr = false;
        }
      }

      if ($(window).scrollTop() > $(".fly-on-wall").offset().top - 100) {
        $('.man-one').show();
        $('.man-one').addClass('animate__slideInLeft');

        $('.man-two').show();
        $('.man-two').addClass('animate__slideInRight');
      }

      if ($(window).scrollTop() > $(".sizes").offset().top - 100) {
        $(".sizes .blue-man, .blue-paediatric, .blue-neonate").css('visibility', 'visible');
        $(".sizes .blue-man, .blue-paediatric, .blue-neonate").addClass("animate__fadeIn");

        $(".sizes .mypatch, .paediatric, .neonate").css('visibility', 'visible');
        $(".sizes .mypatch, .paediatric, .neonate").addClass("animate__bounceIn");
      }

      if ($(window).scrollTop() > $(".putting-ears").offset().top - 300) {
        $(".number28").addClass("removeLayer");
      }

      if ($(window).scrollTop() > $(".india-map").offset().top - 100) {
        $(".ladakh").show().addClass("animate__fadeIn");
        setTimeout(() => { $(".jnk").show().addClass("animate__fadeIn"); }, 100);
        setTimeout(() => { $(".amritsar").show().addClass("animate__fadeIn"); }, 200);
        setTimeout(() => { $(".ludhiana").show().addClass("animate__fadeIn"); }, 300);
        setTimeout(() => { $(".chandigarh").show().addClass("animate__fadeIn"); }, 400);
        setTimeout(() => { $(".dehradun").show().addClass("animate__fadeIn"); }, 500);
        setTimeout(() => { $(".bareilly").show().addClass("animate__fadeIn"); }, 600);
        setTimeout(() => { $(".kanpur").show().addClass("animate__fadeIn"); }, 700);
        setTimeout(() => { $(".lucknow").show().addClass("animate__fadeIn"); }, 800);
        setTimeout(() => { $(".allahabad").show().addClass("animate__fadeIn"); }, 900);
        setTimeout(() => { $(".durgapur").show().addClass("animate__fadeIn"); }, 1000);

        setTimeout(() => { $(".siliguri").show().addClass("animate__fadeIn"); }, 1100);
        setTimeout(() => { $(".guwahati").show().addClass("animate__fadeIn"); }, 1200);
        setTimeout(() => { $(".dibrugarh").show().addClass("animate__fadeIn"); }, 1300);
        setTimeout(() => { $(".dimapur").show().addClass("animate__fadeIn"); }, 1400);
        setTimeout(() => { $(".silchar").show().addClass("animate__fadeIn"); }, 1500);
        setTimeout(() => { $(".kolkata").show().addClass("animate__fadeIn"); }, 1600);
        setTimeout(() => { $(".rourkela").show().addClass("animate__fadeIn"); }, 1700);
        setTimeout(() => { $(".bilaspur").show().addClass("animate__fadeIn"); }, 1800);
        setTimeout(() => { $(".raipur").show().addClass("animate__fadeIn"); }, 1900);
        setTimeout(() => { $(".bhubaneshwar").show().addClass("animate__fadeIn"); }, 2000);

        setTimeout(() => { $(".behrampur").show().addClass("animate__fadeIn"); }, 2100);
        setTimeout(() => { $(".ahmedabad").show().addClass("animate__fadeIn"); }, 2200);
        setTimeout(() => { $(".surat").show().addClass("animate__fadeIn"); }, 2300);
        setTimeout(() => { $(".bhopal").show().addClass("animate__fadeIn"); }, 2400);
        setTimeout(() => { $(".indore").show().addClass("animate__fadeIn"); }, 2500);
        setTimeout(() => { $(".jabalpur").show().addClass("animate__fadeIn"); }, 2600);
        setTimeout(() => { $(".nagpur").show().addClass("animate__fadeIn"); }, 2700);
        setTimeout(() => { $(".goa").show().addClass("animate__fadeIn"); }, 2800);
        setTimeout(() => { $(".hubbali").show().addClass("animate__fadeIn"); }, 2900);
        setTimeout(() => { $(".hyderabad").show().addClass("animate__fadeIn"); }, 3000);

        setTimeout(() => { $(".visakhapatnam").show().addClass("animate__fadeIn"); }, 3100);
        setTimeout(() => { $(".vijaywada").show().addClass("animate__fadeIn"); }, 3200);
        setTimeout(() => { $(".tirupati").show().addClass("animate__fadeIn"); }, 3300);
        setTimeout(() => { $(".mysuru").show().addClass("animate__fadeIn"); }, 3400);
        setTimeout(() => { $(".mangalore").show().addClass("animate__fadeIn"); }, 3500);
        setTimeout(() => { $(".coimbatore").show().addClass("animate__fadeIn"); }, 3600);
        setTimeout(() => { $(".ernakulam").show().addClass("animate__fadeIn"); }, 3700);
        setTimeout(() => { $(".kollam").show().addClass("animate__fadeIn"); }, 3800);
        setTimeout(() => { $(".trichy").show().addClass("animate__fadeIn"); }, 3900);
        setTimeout(() => { $(".puducherry").show().addClass("animate__fadeIn"); }, 4000);

        setTimeout(() => { $(".newDelhi").show().addClass("animate__fadeIn"); }, 4100);
        setTimeout(() => { $(".mumbai").show().addClass("animate__fadeIn"); }, 4200);
        setTimeout(() => { $(".banglore").show().addClass("animate__fadeIn"); }, 4300);
        setTimeout(() => { $(".salem").show().addClass("animate__fadeIn"); }, 4400);
        setTimeout(() => { $(".chennai").show().addClass("animate__fadeIn"); }, 4500);
      }

      if ($(window).scrollTop() > $(".reports-section").offset().top) {
        $('.bgImg1').show();
        $('.bgImg1').addClass('animate__slideInLeft');
      }
      if ($(window).scrollTop() > $(".reports-section").offset().top + 400) {
        $('.bgImg2').show();
        $('.bgImg2').addClass('animate__slideInRight');
      }
      if ($(window).scrollTop() > $(".reports-section").offset().top + 800) {
        $('.bgImg3').show();
        $('.bgImg3').addClass('animate__slideInLeft');
      }
    } catch (err) {
      // console.log(err);
    }
  });
  /* END:: myPatch Page Script */

  /* START:: test-booking Page Script */
  try {
    $('.select-dd').on('change', function () {
      if (this.value == '') {
        $(this).css('color', '#999');
        $(this).parent().removeClass('input--filled');
      } else {
        $(this).css('color', '#000');
        $(this).parent().addClass('input--filled');
      }
    });

    var holterCities = []
    $.getJSON("json/holterCities.json", function (res) {
      holterCities = res;
    }).fail(function () {
      console.log("An error has occurred while getting cities list.");
    });

    $('.select-test').on('change', function () {
      if (this.value == 'Holter') { $('.duration-box').show(); } else { $('.duration-box').hide(); }

      $(".availability").hide();
      $(".city-dd").empty();
      if (this.value == 'Holter') {
        $('.city-box').show();
        $(".city-dd").append(`<option value=""></option>`);

        function compare(a, b) {
          if (a.city < b.city) { return -1; }
          if (a.city > b.city) { return 1; }
          return 0;
        }
        let sortedCity = holterCities.sort(compare);
        sortedCity.forEach(e => {
          $(".city-dd").append(`<option>${e.city}</option>`);
        });
      } else if (this.value == 'ABPM') {
        $(".availability").show();
        $('.city-box').show();
        $(".city-dd").append(`<option value=""></option>  
                              <option>Delhi-NCR</option>
                              <option>Mumbai</option>
                              <option>Chennai</option>
			      <option>Hyderabad</option>
                              <option>Bengaluru</option>`);
      } else {
        $('.city-box').hide();
      }
    });

    /* Input Script */
    (function () {
      [].slice.call(document.querySelectorAll('input.input__field')).forEach(function (inputEl) {
        inputEl.addEventListener('focus', onInputFocus);
        inputEl.addEventListener('blur', onInputBlur);
      });

      function onInputFocus(ev) {
        classie.add(ev.target.parentNode, 'input--filled');
      }

      function onInputBlur(ev) {
        if (ev.target.value.trim() === '') {
          classie.remove(ev.target.parentNode, 'input--filled');
        }
      }
    })();

    /* Particle Script */
    $.getJSON("json/bookingParticle.json", function (res) {
      particlesJS('particles-js', res);
    }).fail(function () {
      console.log("An error has occurred while getting particle json.");
    });

  } catch (err) {
    // console.log(err);
  }
  /* END:: test-booking Page Script */

  /* START:: ABPM Page Script */
  try {
    $('.banner-para').showMore({
      speedDown: 300,
      speedUp: 300,
      height: '170px',
      showText: 'Read more',
      hideText: 'Read less'
    });

    /* Particle Script */
    $.getJSON("json/abpmParticle.json", function (res) {
      try {
        particlesJS('polygon', res);
      } catch (err) {
        // console.log(err);
      }
    }).fail(function () {
      console.log("An error has occurred while getting particle json.");
    });

    $(window).scroll(function () {
      try {
        if (widnowWidth >= 768) {
          if ($(window).scrollTop() > $(".abpm-service").offset().top - 100) {
            $(".abpm-service .content1").show().addClass('animate__slideInLeft');
            $(".abpm-service .content2").show().addClass('animate__slideInLeft');
            $(".abpm-service .content3").show().addClass('animate__slideInRight');
            $(".abpm-service .content4").show().addClass('animate__slideInLeft');
            $(".abpm-service .content5").show().addClass('animate__slideInRight');
          }
        }

        if (widnowWidth <= 767) {
          if ($(window).scrollTop() > $(".abpm-service").offset().top - 200) {
            $(".abpm-service .content1 img").show().addClass('animate__slideInLeft');
          }
          if ($(window).scrollTop() > $(".abpm-service").offset().top - 100) {
            $(".abpm-service .content4 img").show().addClass('animate__slideInRight');
          }
          if ($(window).scrollTop() > $(".abpm-service").offset().top) {
            $(".abpm-service .content2 img").show().addClass('animate__slideInLeft');
          }
          if ($(window).scrollTop() > $(".abpm-service").offset().top + 100) {
            $(".abpm-service .content5 img").show().addClass('animate__slideInRight');
          }
          if ($(window).scrollTop() > $(".abpm-service").offset().top + 200) {
            $(".abpm-service .content3 img").show().addClass('animate__slideInLeft');
          }
        }

      } catch (err) {
        // console.log(err);
      }
    });
  } catch (err) {
    // console.log(err);
  }
  /* END:: ABPM Page Script */



  /* START:: Careers Page Script */
  try {
    $('.emp-slider').slick({
      centerMode: true,
      slidesToShow: 1,
      centerPadding: '340px',
      arrows: true,
      dots: true,
      responsive: [{
        breakpoint: 992,
        settings: {
          arrows: true,
          centerMode: true,
          centerPadding: '190px',
          slidesToShow: 1
        }
      },
      {
        breakpoint: 768,
        settings: {
          arrows: true,
          centerMode: true,
          centerPadding: '0px',
          slidesToShow: 1
        }
      }]
    });

    $(".sendCV").on('click', function (event) {
      $('html, body').animate({
        scrollTop: $("#kickstart").offset().top - 60
      }, 600);
    });

    if (widnowWidth > 767) {
      $(".careers .banner").addClass("jarallax");

      jarallax(document.querySelectorAll('.jarallax'), {
        imgWidth: 1920,
        imgHeight: 1080
      });
    }

    if (widnowWidth <= 767) {
      setTimeout(() => {
        $(".banner h1").show().addClass('animate__slideInUp');
      }, 2000);
      setTimeout(() => {
        $(".banner p:nth-child(2)").show().addClass('animate__slideInUp');
      }, 2300);
      setTimeout(() => {
        $(".banner p:nth-child(3)").show().addClass('animate__slideInUp');
      }, 2500);
      setTimeout(() => {
        $(".banner p:nth-child(4)").show().addClass('animate__slideInUp');
      }, 2700);

      $('.benefits-slider').slick({
        slidesToShow: 1,
        arrows: false,
        dots: true
      });
    }

    $(window).scroll(function () {
      try {
        if (widnowWidth >= 768) {
          if ($(window).scrollTop() > $(".who-we-are").offset().top - 100) {
            $(".who-we-are .image").show().addClass('animate__slideInLeft');
          }

          if ($(window).scrollTop() > $(".founder").offset().top - 100) {
            $(".founder .founder-bg").show().addClass('animate__slideInRight');
          }

          if ($(window).scrollTop() > $(".emp-policy").offset().top - 100) {
            $(".emp-policy .image").show().addClass('animate__slideInLeft');
          }

          if ($(window).scrollTop() > $(".tree-section").offset().top - 100) {
            $(".tree-section .leaf1").css('display', 'flex').addClass('animate__fadeIn');
            setTimeout(() => {
              $(".tree-section .leaf2").css('display', 'flex').addClass('animate__fadeIn');
            }, 500);
            setTimeout(() => {
              $(".tree-section .leaf3").css('display', 'flex').addClass('animate__fadeIn');
            }, 1000);
            setTimeout(() => {
              $(".tree-section .leaf4").css('display', 'flex').addClass('animate__fadeIn');
            }, 1500);
            setTimeout(() => {
              $(".tree-section .leaf5").css('display', 'flex').addClass('animate__fadeIn');
            }, 2000);
          }
        }
  
        if (widnowWidth <= 767) {
          
        }
      } catch (err) {
        // console.log(err);
      }
    });
  } catch (err) {
    // console.log(err);
  }
  /* END:: Careers Page Script */
  
});