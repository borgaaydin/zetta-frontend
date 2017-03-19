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
        dots: true,
        responsive: [
            {
                breakpoint: 932,
                settings: {
                    centerMode:false,
                    variableWidth: false,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true,
                    arrows: false
                }
            }
        ]
    });

    $(".category_slider").slick({

        slidesToShow: 1,
        arrows: true,
        dots: true,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    centerMode:false,
                    variableWidth: false,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true,
                    arrows: false
                }
            }
        ]

    });

    $(".sale_slider").slick({
        slidesToShow: 3,
        slidesToScroll: 3,
        arrows: true,
        responsive: [
            {
                breakpoint: 640,
                settings: {
                    centerMode:false,
                    variableWidth: false,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true,
                    arrows: false
                }
            }
        ]
    });

    $('.slider-for').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        asNavFor: '.slider-nav',
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    centerMode:false,
                    variableWidth: false,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true,
                    arrows: false
                }
            }
        ]
    });
    $('.slider-nav').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        asNavFor: '.slider-for',
        dots: true,
        focusOnSelect: true,
        vertical: true
    });

    $('.category-button.hover').mouseenter(function(){
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

    $('.list-styler button').click(function(){
        if($(this).hasClass("box")){
            $(this).addClass("active");
            $('.list-styler button.list').removeClass("active");
            $('.product').removeClass("listed");
        }else if($(this).hasClass("list")){
            $(this).addClass("active");
            $('.list-styler button.box').removeClass("active");
            $('.product').addClass("listed");
        }
    });

    $(window).resize(function() {
        if($(this).width()<768){
            $('.list-styler button.list').removeClass("active");
            $('.product').removeClass("listed");
        }
    });
});