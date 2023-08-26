$(document).ready(()=> {
    $(window).scroll(function () {
        let scroll = $(window).scrollTop()
        if ( scroll > 54 ) {
            $("header").addClass("header-scroll-modif")
        }else {
            $("header").removeClass("header-scroll-modif")
        }
    })

    const projectCdTeam = getProject()
    if ( projectCdTeam.data.length > 0 )
        $("#loop").html("")
    projectCdTeam.data.forEach(res => {
        $("#loop").append('<a href="'+ res.link +'" target="_blank" class="card"> <img src="'+ res.image +'" alt="'+ res.name +'" class="img-fluid"> <div class="card-body"> <h2>'+ res.name +'</h2> <p>'+ res.description +'</p> </div> </a>')
    })
})


function getProject() {
	return {
		"data": [
			{
				"id": "1",
				"image": "/image/zawnime.png",
				"name": "ZawNIME",
				"description": "ZStream App Adalah situs streaming/download anime bersubtitle indonesia, semua proses pembuatan website upload anime di lakukan oleh dua orang.",
				"link": "https://thezaww.blogspot.com/2022/07/streaming-anime.html"
			},
			{
				"id": "3",
				"image": "/image/bloggerapi.png",
				"name": "Blogger Api - ZawBLOG Project",
				"description": "ZawBLOG adalah project saya setelah ZawNIME/ZStream App, Dimana project ini saya mendapatkan ide dari pengalaman saya dari ngeblog blogger. Disaat saya upload artikel ke blogger itu sangat susah harus tempel-tempel template dari artikel sebelumnya, dikarenakan itu sangat menjengkelkan dan sangat ribet untuk disunting.",
				"link": "https://thezaww.blogspot.com/2022/09/blogger-api-zawblog-project.html"
			}
		]
	}
}