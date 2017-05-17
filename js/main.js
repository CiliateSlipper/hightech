$(document).ready(function() {

    $(".nav-trigger").on("click", function(){
        $(this).toggleClass("on");
        $(".main-nav").slideToggle();
    });

    $(".title-footer-nav").on("click", function() {
        $(this).siblings(".footer-nav").toggleClass("open");
    })
});