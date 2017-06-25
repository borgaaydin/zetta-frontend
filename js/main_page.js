/**
 * Created by borga on 19/06/2017.
 */

$(function() {
    var mainslider = $("#mainSlider").lightSlider({
        item: 1,
        autoWidth: false,
        slideMove: 1,
        thumbItem:10,
        thumbMargin:4,
        easing: 'cubic-bezier(0.25, 0, 0.25, 1)',
        pager: true,
        gallery: true,
        speed: 400,
        auto: true,
        mode: "fade",
        loop: true,
        pause: 4600,
        pauseOnHover: false

    });

    $(".daily-product-slider").slick({
        centerMode: true,
        slidesToShow: 1,
        arrows: true,
        variableWidth: true,
        autoplay: true,
        autoplaySpeed: 4000

    });

    function hoverOut(){
        setTimeout(mainslider.play(), 5000);
        setTimeout(alert("Boom!"), 5000);
    }

    $(".main_slider_container .lSSlideOuter").hover(
        function() {
            mainslider.pause();
        }, function() {
            mainslider.play();
        }
    );
});