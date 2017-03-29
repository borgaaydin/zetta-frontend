/**
 * Created by borga on 28/02/17.
 */


$(function() {
    'use strict';
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

    $(".recent-products-slider").slick({
        slidesToShow: 5,
        slidesToScroll: 5,
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
        slidesToShow: 5,
        slidesToScroll: 1,
        asNavFor: '.slider-for',
        dots: false,
        focusOnSelect: true,
        vertical: true,
        arrows: false
    });

    var mobileMenuButton = $('.category-button');
    var mobileClose = $('.category-close');

    $('.inputFields input').blur(function()
    {
        if( $(this).val() ) {
            $(this).addClass("not-empty");
            $(this).siblings().addClass("floating");
        } else {
            $(this).removeClass("not-empty");
            $(this).siblings().removeClass("floating");
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


    // mobileMenuButton.on("touchstart", function (e) {
    //     var link = $(this); //preselect the link
    //     if (link.hasClass('hover')) {
    //         return true;
    //     }
    //     else {
    //         link.addClass('hover');
    //         $('ul > li').not(this).removeClass('hover');
    //         e.preventDefault();
    //         return false; //extra, and to make sure the function has consistent return points
    //     }
    // });

    mobileClose.on("click", function (e) {
        mobileMenuButton.removeClass("hover");
        $('.overlay').hide();
        $('html').removeClass("stuck");
    });

    var mobileBack = $(".category-back");

    mobileBack.on("click", function (e) {
        $(".nav-list-lv1>li").removeClass("hover");
        e.stopPropagation();
    });

    $(".nav-list-lv1>li").on("click", function (e) {
        // $(".menu-lv2").show();
        $(this).addClass("hover");
        $(this).children(".menu-lv2").show();
    });

    mobileClose.on("touchstart", function (e) {
        mobileMenuButton.removeClass("hover");
        $('.overlay').hide();
        $('html').removeClass("stuck");
        e.stopPropagation();
    });

    mobileMenuButton.on("touchstart", function (e) {
        mobileMenuButton.addClass("hover");
        $('.overlay').show();
        $('html').addClass("stuck");
        e.stopPropagation();
    });

    // mobileMenuButton.mouseenter(function(){
    //     $('.category-button').addClass("hover");
    //     $('.overlay').show();
    //     $('html').addClass("stuck");
    // }).mouseleave(function() {
    //     $('.category-button').removeClass("hover");
    //     $('.overlay').hide();
    //     $('html').removeClass("stuck");
    // });

    if($(window).width()>768){
        mobileMenuButton.mouseenter(function(){
            $('.category-button').addClass("hover");
            $('.overlay').show();
        }).mouseleave(function() {
            $('.category-button').removeClass("hover");
            $('.overlay').hide();
        });

        $(".nav-list-lv1>li").mouseenter(function(){
            $(this).children(".menu-lv2").addClass("hover");
            $('.overlay').show();
        }).mouseleave(function() {
            $(this).children(".menu-lv2").removeClass("hover");
            $('.overlay').hide();
        });
    }

    $('.close-banner').click(function(){
        $('.promotion-container').slideToggle();
    });

    $(":input").inputmask();

});