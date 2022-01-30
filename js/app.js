
    $(".sparator a img").addClass("img-fluid")
$(document).ready(() => {
    // started
    if( $.cookie('dark') ){
        $('#dark').attr("checked", "true")
        dark(true)
    }else {
        $('#dark').removeAttr("checked")
        dark(false)
    }



    // dark mode
    $('#dark').click(()=>{
        const dark = document.getElementById('dark')
        if( dark.checked == true ){
            $.cookie("dark", "true");
        }else {
            $.removeCookie('dark');
        }
        location.reload();
    })

    function dark(cond){
        if( cond ){
            // dark mode
            $('body').toggleClass('body-dark')

            // navbar dark
            $('.navbar').toggleClass('navbar-light')
            $('.navbar').toggleClass('bg-light')
            $('.navbar').toggleClass('navbar-dark')
            $('.navbar').toggleClass('bg-dark')
            $('.dropdown-menu').css("background-color", "#212529")

            // title
            $('a.navbar-brand').toggleClass('navbar-brand-dark')

            // search
            $('.offcanvas').css('background', '#111')

            // template
            $('.bg-light').toggleClass('bg-light')
            $('.bg-light').toggleClass('bg-dark')
            $('a').css('color', 'white')

            $('.content').css('color', 'white !important')

        }
    }   


    // scroll
    $(window).scroll(() => {
        let scroll = $(window).scrollTop()
        if( scroll >= 200 ){
            $('.totop').css('bottom', '81px')
        }else {
            $('.totop').css('bottom', '-112px')
        }
    })


})
