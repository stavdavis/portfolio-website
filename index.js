// Scrolling animation (velocity is faster than jQuery's "animate")
$(".about-nav").click(function () {
    $("#about-section").velocity("scroll", 1000);
});

$(".web-dev-nav").click(function () {
    $("#web-dev-section").velocity("scroll", 1000);
});

$(".data-sci-nav").click(function () {
    $("#data-sci-section").velocity("scroll", 1000);
});

$(".contact-nav").click(function () {
    $("#contact-section").velocity("scroll", 1000);
});

$(".navbar-brand").click(function () {
    $("#pagetop").velocity("scroll", 1000);
});