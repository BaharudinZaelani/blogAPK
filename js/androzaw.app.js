$(window).scroll(function (event) {
    let scroll = $(window).scrollTop()
    if ( scroll > 47 ) {
        $("header").addClass("header-scroll-modif")
    }else {
        $("header").removeClass("header-scroll-modif")
    }
});