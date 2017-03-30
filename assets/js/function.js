// Painting List - Hover Effect

//$(function() {
//  alert('hello')
//});

// Scroll To Top Button
//$(document).ready(function(){
  //$('.scrollButton').jKit('show', { 'delay': '2000', 'speed': '500', 'duration': '5000' });
//});

// Expanding Nav2 (Visual Art and Design Toggle)
//Visual Art Side
$(document).ready(function() {
  $('#nav2Button').click(function(){
      $('#nav2').slideToggle('slow', function(){
           //This will toggle the div
      });
  });
});

$(document).ready(function() {
  var btt = $('.back-to-top');

  btt.on('click', function(e) {
      $('html, body').animate({
          scrollTop: 0
      }, 500);

      e.preventDefault();
  });

  $(window).on('scroll', function() {
      var self = $(this),
          height = self.height(),
          top = self.scrollTop();

      if(top > height){
          if(!btt.is(':visible')) {
              btt.fadeIn();
          }
      } else {
          btt.fadeOut();
      }
  });
});

// Lightbox
$('#myelement').jKit('lightbox', { '.rlslides': 'myalbum' });

//responsiveSlideShow
$(document).ready(function(){
  $(function(){
    $(".rslides").responsiveSlides({
      auto: true,             // Boolean: Animate automatically, true or false
      speed: 500,            // Integer: Speed of the transition, in milliseconds
      timeout: 4000,          // Integer: Time between slide transitions, in milliseconds
      pager: false,           // Boolean: Show pager, true or false
      nav: true,             // Boolean: Show navigation, true or false
      random: false,          // Boolean: Randomize the order of the slides, true or false
      pause: true,           // Boolean: Pause on hover, true or false
      pauseControls: true,    // Boolean: Pause when hovering controls, true or false
      prevText: "<h3> <",   // String: Text for the "previous" button
      nextText: "<h3> >",       // String: Text for the "next" button
      maxwidth: "",           // Integer: Max-width of the slideshow, in pixels
      navContainer: "",       // Selector: Where controls should be appended to, default is after the 'ul'
      manualControls: "",     // Selector: Declare custom pager navigation
      namespace: "rslides",   // String: Change the default namespace used
      before: function(){},   // Function: Before callback
      after: function(){}     // Function: After callback
    });
  });
});

//On Hover Work List Animations
//
//Painting List - Detail Animation
$(document).ready(function(){
    $('.active').mouseover(function(){
      $(".paintingListPopUp").fadeIn();
    });

    $('.active').mouseout(function(){
      $(".paintingListPopUp").fadeOut();

    });
});


$(document).ready(function(){
    $(".active2").mouseover(function(){
        $(".paintingListPopUp2").fadeIn();
    });

    $('.active2').mouseout(function(){
      $(".paintingListPopUp2").fadeOut();

    });
});

$(document).ready(function(){
    $(".active3").mouseover(function(){
        $(".paintingListPopUp3").fadeIn();
    });

    $('.active3').mouseout(function(){
      $(".paintingListPopUp3").fadeOut();

    });
});

$(document).ready(function(){
    $(".active4").mouseover(function(){
        $(".paintingListPopUp4").fadeIn();
    });

    $('.active4').mouseout(function(){
      $(".paintingListPopUp4").fadeOut();

    });
});

//
//Sculpture List - Detail Animation
$(document).ready(function(){
    $('.active-s').mouseover(function(){
      $(".sculptureListPopUp").fadeIn();
    });

    $('.active-s').mouseout(function(){
      $(".sculptureListPopUp").fadeOut();

    });
});


$(document).ready(function(){
    $(".active2-s").mouseover(function(){
        $(".sculptureListPopUp2").fadeIn();
    });

    $('.active2-s').mouseout(function(){
      $(".sculptureListPopUp2").fadeOut();

    });
});

$(document).ready(function(){
    $(".active3-s").mouseover(function(){
        $(".sculptureListPopUp3").fadeIn();
    });

    $('.active3-s').mouseout(function(){
      $(".sculptureListPopUp3").fadeOut();

    });
});

$(document).ready(function(){
    $(".active4-s").mouseover(function(){
        $(".sculptureListPopUp4").fadeIn();
    });

    $('.active4-s').mouseout(function(){
      $(".sculptureListPopUp4").fadeOut();

    });
});

$(document).ready(function(){
    $(".active5-s").mouseover(function(){
        $(".sculptureListPopUp5").fadeIn();
    });

    $('.active5-s').mouseout(function(){
      $(".sculptureListPopUp5").fadeOut();

    });
});

$(document).ready(function(){
    $(".active6-s").mouseover(function(){
        $(".sculptureListPopUp6").fadeIn();
    });

    $('.active6-s').mouseout(function(){
      $(".sculptureListPopUp6").fadeOut();

    });
});

$(document).ready(function(){
    $(".active7-s").mouseover(function(){
        $(".sculptureListPopUp7").fadeIn();
    });

    $('.active7-s').mouseout(function(){
      $(".sculptureListPopUp7").fadeOut();

    });
});

$(document).ready(function(){
    $(".active8-s").mouseover(function(){
        $(".sculptureListPopUp8").fadeIn();
    });

    $('.active8-s').mouseout(function(){
      $(".sculptureListPopUp8").fadeOut();

    });
});

$(document).ready(function(){
    $(".active9-s").mouseover(function(){
        $(".sculptureListPopUp9").fadeIn();
    });

    $('.active9-s').mouseout(function(){
      $(".sculptureListPopUp9").fadeOut();

    });
});

$(document).ready(function(){
    $(".active10-s").mouseover(function(){
        $(".sculptureListPopUp10").fadeIn();
    });

    $('.active10-s').mouseout(function(){
      $(".sculptureListPopUp10").fadeOut();

    });
});
//Video List - Detail Animation
$(document).ready(function(){
    $('.active-v').mouseover(function(){
      $(".videoListPopUp").fadeIn();
    });

    $('.active-v').mouseout(function(){
      $(".videoListPopUp").fadeOut();

    });
});


$(document).ready(function(){
    $(".active2-v").mouseover(function(){
        $(".videoListPopUp2").fadeIn();
    });

    $('.active2-v').mouseout(function(){
      $(".videoListPopUp2").fadeOut();

    });
});

$(document).ready(function(){
    $(".active3-v").mouseover(function(){
        $(".videoListPopUp3").fadeIn();
    });

    $('.active3-v').mouseout(function(){
      $(".videoListPopUp3").fadeOut();

    });
});

$(document).ready(function(){
    $(".active4-v").mouseover(function(){
        $(".videoListPopUp4").fadeIn();
    });

    $('.active4-v').mouseout(function(){
      $(".videoListPopUp4").fadeOut();

    });
});

$(document).ready(function(){
    $(".active5-v").mouseover(function(){
        $(".videoListPopUp5").fadeIn();
    });

    $('.active5-v').mouseout(function(){
      $(".videoListPopUp5").fadeOut();

    });
});

$(document).ready(function(){
    $(".active6-v").mouseover(function(){
        $(".videoListPopUp6").fadeIn();
    });

    $('.active6-v').mouseout(function(){
      $(".videoListPopUp6").fadeOut();

    });
});

$(document).ready(function(){
    $(".active7-v").mouseover(function(){
        $(".videoListPopUp7").fadeIn();
    });

    $('.active7-v').mouseout(function(){
      $(".videoListPopUp7").fadeOut();

    });
});

$(document).ready(function(){
    $(".active8-v").mouseover(function(){
        $(".videoListPopUp8").fadeIn();
    });

    $('.active8-v').mouseout(function(){
      $(".videoListPopUp8").fadeOut();

    });
});

$(document).ready(function(){
    $(".active9-v").mouseover(function(){
        $(".videoListPopUp9").fadeIn();
    });

    $('.active9-v').mouseout(function(){
      $(".videoListPopUp9").fadeOut();

    });
});

$(document).ready(function(){
    $(".active10-v").mouseover(function(){
        $(".videoListPopUp10").fadeIn();
    });

    $('.active10-v').mouseout(function(){
      $(".videoListPopUp10").fadeOut();

    });
});
//Design List - Detail Animation
$(document).ready(function(){
    $('.active-d').mouseover(function(){
      $(".designListPopUp").fadeIn();
    });

    $('.active-d').mouseout(function(){
      $(".designListPopUp").fadeOut();

    });
});


$(document).ready(function(){
    $(".active2-d").mouseover(function(){
        $(".designListPopUp2").fadeIn();
    });

    $('.active2-d').mouseout(function(){
      $(".designListPopUp2").fadeOut();

    });
});

$(document).ready(function(){
    $(".active3-d").mouseover(function(){
        $(".designListPopUp3").fadeIn();
    });

    $('.active3-d').mouseout(function(){
      $(".designListPopUp3").fadeOut();

    });
});

$(document).ready(function(){
    $(".active4-d").mouseover(function(){
        $(".designListPopUp4").fadeIn();
    });

    $('.active4-d').mouseout(function(){
      $(".designListPopUp4").fadeOut();

    });
});

// Design Page
// Fade Out On Scroll

// Animation on Scroll - Landing Page 2
$(document).ready(function(){

  $(window).scroll(function(){

    var y = $(this).scrollTop();

    var container_pos = $('.animation_container').position();

    var container_height = $('.animation_container').height();

    if ( y >= (container_pos.top - container_height + 100)){

      $('.animation_container #workTitle, #contentTitle, #contentTitleB, #contentTitleC').addClass('slide fadeIn');

    }else{
      $('.animation_container #workTitle, #contentTitle, #contentTitleB, #contentTitleC').removeClass('slide fadeIn');
    }
  });
});

//Design Landing 2 - Fade Out When Exit Window
// Design Landing -- Work 1 Seciton (Paper)
$(document).ready(function(){
  var $designLanding2p2 = $('.designLanding2-p2');

  $designLanding2p2.waypoint(function (direction) {
    if (direction == 'down') {
    $designLanding2p2.addClass('js-designLanding2p2-animate slideUp');
  } else {
    $designLanding2p2.removeClass('js-designLanding2p2-animate slideUp');
  }
  }, { offset: '50%' });
});

// Design Landing -- Work 1 Seciton (Shadow)
$(document).ready(function(){
  var $designLanding2p1 = $('.designLanding2-p1');

  $designLanding2p1.waypoint(function (direction) {
    if (direction == 'down') {
    $designLanding2p1.addClass('js-designLanding2p1-animate fadeIn');
  } else {
    $designLanding2p1.removeClass('js-designLanding2p1-animate fadeIn');
  }
  }, { offset: '50%' });
});

//Design Landing 3 - Enter on Scroll Animations/ Fade Out When Exit Window
// Design Landing 3
$(document).ready(function(){

  $(window).scroll(function(){

    var y = $(this).scrollTop();

    var container_pos = $('.col-5').position();

    var container_height = $('.col-5').height();

    if ( y >= (container_pos.top - container_height + 250)){

      $('.col-5 #designLanding3A, #designLanding3B, #designLandingbutton2').addClass('fadeIn');

    }else{
      $('.col-5 #designLanding3A, #designLanding3B, #designLandingbutton2').removeClass('fadeIn');
    }
  });
});

// Animation on Scroll - Landing Page 4
$(document).ready(function(){

  $(window).scroll(function(){

    var y = $(this).scrollTop();

    var container_pos = $('.animation_container3').position();

    var container_height = $('.animation_container3').height();

    if ( y >= (container_pos.top - container_height + 200)){

      $('.animation_container3 #workTitle3, #contentTitle3, #content4TitleB3, #designLandingbutton3').addClass('slide fadeIn');

    }else{
      $('.animation_container3 #workTitle3, #contentTitle3, #content4TitleB3, #designLandingbutton3').removeClass('slide fadeIn');
    }
  });
});

// Design Landing 4
$(document).ready(function(){

  $(window).scroll(function(){

    var y = $(this).scrollTop();

    var container_pos = $('.col-5').position();

    var container_height = $('.col-5').height();

    if ( y >= (container_pos.top - container_height + 850)){

      $('.col-6 #designLanding4A, #designLanding4B, #designLanding4C, #designLanding4D').addClass('fadeIn');

    }else{
      $('.col-6 #designLanding4A, #designLanding4B, #designLanding4C, #designLanding4D').removeClass('fadeIn');
    }
  });
});
