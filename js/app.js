$(document).ready(()=> {
	console.log('%c TEMPLATE INFO ', 'color: red; background-color: yellow; font-size: 20px;')
	console.log('Template Name        : AZ Template')
	console.log('Uploaded in          : Ngacode')
	console.log('Designed by          : Baharudin Zaelani')
	console.log('More Info            : https://baharudinzaelani.github.io/template/androzaw.html')

	$(".sparator a img").addClass("img-fluid")
	// started
	if ($.cookie('dark')){
		$('#dark').attr("checked", "true")
		dark(true)
	}else {
		$('#dark').removeAttr("checked")
		dark(false)
	}



	// dark mode
	$('#dark').click(() => {
		const dark = document.getElementById('dark')
		if (dark.checked == true) {
			$.cookie("dark", "true")
		}else {
			$.removeCookie('dark')
		}

		location.reload()
	})


	// scroll
	$(window).scroll(() => {
		let scroll = $(window).scrollTop()
		if (scroll >= 200) {
			$('.totop').css('bottom', '81px')
		}else{
			$('.totop').css('bottom', '-112px')
		}
	})

	// image DOM
	$("img").each(function() {
		$(this).wrap('<div class="img-thumbnail" style="width: 100%;"></div>');
	});	
})

// Function 
function dark(cond) {
	if (cond) {
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