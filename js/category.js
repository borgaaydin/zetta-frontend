$(function() {
    $(".category-filter-button").click(function () {
        window.scrollTo(0,0);
        $(".category-left").toggle();
        $("html").toggleClass("stuck");
        $(".overlay").toggle();
    });

    $(".mobile-filter-close").click(function () {
        window.scrollTo(0,0);
        $(".category-left").toggle();
        $("html").toggleClass("stuck");
        $(".overlay").toggle();
    });
});