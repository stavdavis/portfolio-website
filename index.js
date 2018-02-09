// Scrolling animation (velocity is faster than jQuery's "animate")
$(".navbar-brand").click(function () {
    $("#pagetop").velocity("scroll", 1000);
});

$(".about-nav").click(function () {
    $("#about-section").velocity("scroll", 1000);
});

$(".portfolio-nav").click(function () {
    $("#portfolio-section").velocity("scroll", 1000);
});

$(".contact-nav").click(function () {
    $("#contact-section").velocity("scroll", 1000);
});

// $(".navbar-option").on('click', function(){
//     $(".navbar-toggle").click() //bootstrap 3.x by Richard
// });