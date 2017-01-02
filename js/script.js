$(document).ready(function() {

  setInterval(function() {
    $("#down-arrow").effect( "bounce", {times: 3}, 1000);
  }, 3000)

  $(".menu-wrapper").click(function(){
    $(".fullscreen-menu").fadeToggle();
    $("#menubutton").toggleClass("fa-bars hamburger-menu" || "fa-times menu-close");
  });

$("#menulink").click(function(){
  $(".fullscreen-menu").toggle();
  $(".menubutton").toggleClass("fa-bars hamburger-menu" || "fa-times menu-close");
})
















});
