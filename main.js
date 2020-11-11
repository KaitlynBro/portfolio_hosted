$(document).ready(function(){
    $('.header').height($(window).height());
  })

  $('#openNav').on('click', function() {
    $('#myNav').css("width", "100%");
  });
  
  $('#closeNav').on('click', function() {
    $('#myNav').css("width", "0%");
  });