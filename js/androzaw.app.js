$(window).scroll(function (event) {
    let scroll = $(window).scrollTop()
    if ( scroll > 47 ) {
        $("header").addClass("header-scroll-modif")
    }else {
        $("header").removeClass("header-scroll-modif")
    }
});

$(document).ready(()=> {
    // get project
    axios.get('/js/data/cdtProject.json').then(function(res){
        // res.data
        // console.log(res.data.data[0]);
        $("#loop").html("")
        // console.log(Object.keys(res.data.data).length);
        for( let i = 0; i < Object.keys(res.data.data).length;) {
            $("#loop").append('<a href="'+ res.data.data[i].link +'" target="_blank" class="card"> <img src="'+ res.data.data[i].image +'" alt="'+ res.data.data[i].name +'" class="img-fluid"> <div class="card-body"> <h2>'+ res.data.data[i].name +'</h2> <p>'+ res.data.data[i].description +'</p> </div> </a>');
            i++;
        }
    })
})