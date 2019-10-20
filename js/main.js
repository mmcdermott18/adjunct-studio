$(document).ready(function() {
    // run function on initial page load
    teamSlide();
    colors();
    topPadding();
    mobileHeight();
    // run function on resize of the window
    $(window).resize(function() {
        topPadding();
    });

    // run function on scroll
    $(window).scroll(function() {

    });
});
function mobileHeight() {
  //this is probably a bad solution but let's try it out
  var height = $(window).innerHeight();
  var vh = height + 'px';
  var html = document.getElementsByTagName('html')[0];
  html.style.setProperty("--vh", vh);
  console.log(vh);
}
function teamSlide() {
  $('.button').click(function() {
    // $('body').toggleClass('lock-y');
    // $('.hamburger').toggleClass('is-active');
    $('.team').toggleClass('team-animate', 500);
    $('.slide').toggleClass('slide-animate', 500);
    $('#team').toggleClass('hidden');
    $('#close').toggleClass('hidden');
  });
}

function colors() {
    //get hours of the day in 24Hr format (0-23)
    var hr = (new Date()).getHours();
    if (hr > 6 && hr < 18) {
        //in between these two times
        $('body').removeClass('dark');
        $('body').addClass('light');
        $('.team').removeClass('light');
        $('.team').addClass('dark');
    } else {
        $('body').removeClass('light');
        $('body').addClass('dark');
        $('.team').removeClass('dark');
        $('.team').addClass('light');
    }
}
function topPadding() {
    var cHeight = $('main').outerHeight();
    var wHeight = $(window).height();
    var tPadding = ((wHeight - cHeight) / 2);
    $('main').css("padding-top", tPadding);
}
