
$(document).ready(()=> {
    $("img").each(function() {
        $(this).addClass("img-thumbnail");
    });
    $(".separator").each(function() {
        $(this).addClass("rounded");
        $(this).addClass("shadow");
        $(this).addClass("bg-dark");
    });
    $(".post").each(function() {
        $(this).addClass("shadow");
        $(this).addClass("p-4");
    });
    $(".download").each(function() {
        $(this).addClass("btn");
        $(this).addClass("btn-primary");
    });
    $("#header-inner").addClass("shadow");
    $("#header-inner").addClass("rounded");
})