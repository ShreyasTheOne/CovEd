$(document).ready(function(){
	var $window = $(window);
	var $navbar = $(".navbar");
	
	$(window).on('scroll',function(){
		var windowTop = $window.scrollTop();
		if(windowTop>=1){
			$navbar.removeClass('bg-dark');
			$navbar.removeClass('navbar-dark');
			$navbar.addClass('bg-light');
			$navbar.addClass('navbar-light');
		}

		else{
			$navbar.removeClass('bg-light');
			$navbar.removeClass('navbar-light');
			$navbar.addClass('bg-dark');
			$navbar.addClass('navbar-dark');
			
		}
	})
})