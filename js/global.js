/**
 * Created by borga on 28/02/17.
 */


$(function() {
    $(".main_slider").slick({
        centerMode: true,
        centerPadding: '20px',
        slidesToShow: 3,
        arrows: true,
        variableWidth: true,
        dots: true

    });

    $(".category_slider").slick({

        slidesToShow: 1,
        arrows: true,
        dots: true

    });

    $(".sale_slider").slick({
        slidesToShow: 3,
        slidesToScroll: 3,
        arrows: true
    });

    $('.slider-for').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        asNavFor: '.slider-nav'
    });
    $('.slider-nav').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        asNavFor: '.slider-for',
        dots: true,
        focusOnSelect: true,
        vertical: true
    });

    $('.category-button').mouseenter(function(){
        $('.overlay').toggle();
    }).mouseleave(function() {
        $('.overlay').toggle();
    });

    $('.inputFields input').blur(function()
    {
        if( $(this).val() ) {
            $(this).addClass("not-empty")
        } else {
            $(this).removeClass("not-empty");
        }
    });
});