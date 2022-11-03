$(window).scroll(function (event) {
    let scroll = $(window).scrollTop()
    console.log('zaw');
    if ( scroll > 47 ) {
        $("header").addClass("header-scroll-modif")
    }else {
        $("header").removeClass("header-scroll-modif")
    }
});