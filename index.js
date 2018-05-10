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

//I don't want my email in plain html on the web...
emailUserFirst = "stav";
emailUserLast = "davis";
emailProvider = "gmail";
fullAddress = `${emailUserFirst}.${emailUserLast}@${emailProvider}.com`;


$(".email-link").html(
	`<a href='mailto:${fullAddress}'  target="_blank"><img class="email-logo" src="./images/email-logo.JPG" alt="Email icon"></a>`
);

//A function to set the height of the images as a % of their width
$(function() {
    $('.image').css('height', 1.778 * $('.image').width());
});
