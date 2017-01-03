$(document).ready(function() {

  setInterval(function() {
    $("#down-arrow").effect( "bounce", {times: 3}, 1000);
  }, 3000)

  $(".menu-wrapper").click(function(){
    $(".fullscreen-menu").fadeToggle();
    $("#menubutton").toggleClass("fa-bars hamburger-menu" || "fa-times menu-close");
  });

$(".menulink").click(function(){
  $(".fullscreen-menu").toggle();
  $("#menubutton").attr("class", "fa fa-bars fa-2x hamburger-menu fa fa-times fa-2x menu-close");
})
















});
