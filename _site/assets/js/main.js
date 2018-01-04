$(document).ready(function() {
  // Text Slideshow that Iterates of Job Titles
  var genres = [
      'VISUAL ARTIST',
      'DESIGNER',
      'INNOVATOR'
  ];

  (function displayGenres(i) {
      $('#jobTitle p').text(genres[i]).fadeIn(1000, function() {
          $(this).delay(600).fadeOut(1000, function() {
              displayGenres((i + 1) % genres.length);
          });
      });
  })(0);


  // Page Load - Remove Fade Out class
  $(function() {
    $('body').removeClass('fade-out');
  });

  // Click Inits
  $(".nav-icon").click(function() {
    $(this).toggleClass('open');
  });

  // Toggle Skill Button On Top Of Slideout Navigation Dynamically Changes When Clicked
  $(".toggleSkill li a").on('click', function() {
    $('li a.toggleSkill-active').removeClass('toggleSkill-active');
    $(this).addClass('toggleSkill-active');

    if ($('li#toggleSkill2')) {
      $('.list1').css('opacity', '0');
      $('.list2').css('opacity', '1');
    };

    $("li#toggleSkill1").click(function() {
      $('.list1').css('opacity', '1');
      $('.list2').css('opacity', '0');
    });
  });

  // Add Click Function - Next and Previous - To Working Anchors For
  // Landing Page Slideshow
  // Prev Button
  $('a.control_prev').click(function() {
    moveLeft();

    //Page Count - Decrement
    var currentVal = parseInt($('#slideCount').html());
        // If is not undefined
        if (!isNaN(currentVal) && currentVal > 1) {
            // Decrement
            $('#slideCount').html(currentVal - 1);
        }
        else if (currentVal <= 1) {
          $('#slideCount').html(5);
        }
        else {
            // Otherwise put a 1 there
            $('#slideCount').html(1);
        };
        //End of Page Count - Decrement

    return false;
  });

  // Next Button
  $('a.control_next').click(function() {
    moveRight();

    //Page Count - Increment
    var currentVal = parseInt($('#slideCount').html());
        // If is not undefined
        if (currentVal == 10) {
            $('#slideCount').html(currentVal);
        }
        else if (!isNaN(currentVal) && currentVal < 5) {
            // Increment
            $('#slideCount').html(currentVal + 1);
        }
        else {
            // Otherwise put a 1 there
            $('#slideCount').html(1);
        };
        //End of Page Count - Increment

    return false;
  });

  // Init Materalize Carousel
  var carousel_interval = 4000;
    $('.carousel-slider').carousel({fullWidth: true});
    var int;
    function run(){
        int = setInterval(function()
        {
            $('.carousel-slider').carousel('next');
        }, carousel_interval);
    }
    function stop(){
    clearInterval(int);
    }
    $('.carousel-slider').hover(stop, run);

  // Portfolio Copy toggle display
  $('.togglePortfolioCopy').on('click', function() {
    $(this).toggleClass('rotate');

    if ($(this).hasClass('rotate')) {
      $('i.fa.fa-chevron-up').css('color', 'darkgrey');
      $('.portfolioCopy').fadeIn('slow');
      $('#workSubHeading').fadeOut('slow');
      $('#portfolioPageNext').fadeOut('slow');
      $('.footer').removeClass('footer-visible');
      $('.footer').addClass('footer-hidden');
      $('html, body').animate({
        scrollTop: 700
      }, 1500);
    } else {
      $('i.fa.fa-chevron-up').css('color', 'lightgrey');
      $('.portfolioCopy').fadeOut('slow');
      $('html, body').animate({
          scrollTop: 100
      }, 1500);
      $('#workSubHeading').fadeIn(3000);
      $('#portfolioPageNext').fadeIn(4000);
      $('.footer').removeClass('footer-hidden');
      $('.footer').addClass('footer-visible');
    };
  });

  checkOpenPage();

// End of Click Inits
});

// Changing Nav Hamburger Menu Span Color on hover
$(".nav-icon span").hover(function() {
  $('span.nav-icon').addClass( "spanHover" );
}, function() {
  $('span.nav-icon').removeClass( "spanHover" );
});


// Checking Page ID
// If page carries ID of "default", open Slideout Navigation with Design
// If page does not carry the ID, open with the Visual Art Side

function checkOpenPage() {
  var page = $('.container');

  if(!page.hasClass('default')) {
    $(".toggleSkill li#toggleSkill2 a").addClass('toggleSkill-active');
    $('.list1').css('opacity', '0');
    $('.list2').css('opacity', '1');
    console.log('Default class is not observed');
  } else {
    $(".toggleSkill li#toggleSkill1 a").addClass('toggleSkill-active');
    $('.list2').css('opacity', '0');
    $('.list1').css('opacity', '1');
  }

};

// Closing Sidebar - Navigation when clicked outside
$('#open').click(function() {
  $('.sidebar').toggleClass('active')
})

$(document).click(function(e) {
  var sidebar = $(".sidebar, #open");
  var navIcon = $(".nav-icon");

  if (!sidebar.is(e.target) && sidebar.has(e.target).length === 0) {
    sidebar.removeClass('active');
    navIcon.removeClass('open'); // Changes the nav icon back to default state
  }

});

// Home Page - Landing Slider 1 & 2 Co-Functionality
var slideCount = $('.slideshow-container1 ul li').length;
var slideWidth = $('.slideshow-container1 ul li').width();
var slideHeight = $('.slideshow-container1 ul li').height();
var slideCount2 = $('.slideshow-container2 ul li').length;
var slideWidth2 = $('.slideshow-container2 ul li').width();
var slideHeight2 = $('.slideshow-container2 ul li').height();
var sliderUlWidth = slideCount * slideWidth;
var sliderUlWidth2 = slideCount2 * slideWidth2;

$('.slideshow-container1').css({ width: slideWidth, height: slideHeight });
$('.slideshow-container2').css({ width: slideWidth2, height: slideHeight2 });
$('.slideshow-container1 ul').css({ width: sliderUlWidth, marginLeft: - slideWidth});
$('.slideshow-container2 ul').css({ width: sliderUlWidth2, marginLeft: - slideWidth2});
  $('.slideshow-container1 ul li:last-child').prependTo('.slideshow-container1 ul');
  $('.slideshow-container2 ul li:last-child').prependTo('.slideshow-container2 ul');

  // Main Slide Show Controls - Next and Previous
  function moveLeft() {
    $('.slideshow-container1 ul').animate({
      left: + slideWidth
    }, 400, function () {
      $('.slideshow-container1 ul li:last-child').prependTo('.slideshow-container1 ul');
      $('.slideshow-container1 ul').css('left', '');
    });
    $('.slideshow-container2 ul').animate({
      left: + slideWidth2
    }, 300, function () {
      $('.slideshow-container2 ul li:last-child').prependTo('.slideshow-container2 ul');
      $('.slideshow-container2 ul').css('left', '');
    });
  };

  function moveRight() {
    $('.slideshow-container1 ul').animate({
      left: - slideWidth
    }, 400, function(){
      $('.slideshow-container1 ul li:first-child').appendTo('.slideshow-container1 ul');
      $('.slideshow-container1 ul').css('left', '');
    });
    $('.slideshow-container2 ul').animate({
      left: - slideWidth2
    }, 300, function(){
      $('.slideshow-container2 ul li:first-child').appendTo('.slideshow-container2 ul');
      $('.slideshow-container2 ul').css('left', '');
    });
  };


// Scroll To function
$.fn.scrollView = function () {
  return this.each(function () {
      if ($('html, body').offset().top == 0) {
        $('html, body').animate({
            scrollTop: $('.togglePortfolioCopy').offset().top
        }, 1500);
      }
  });
}
