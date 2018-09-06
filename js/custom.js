$(document).ready(function(){


	$('#example').DataTable({
        "paging":   false,
		"info":     false,
		"searching": false,
		"ordering": true
    });


	//Mobile Menu
	$('.nav-icon').click(function(){
		$('ul.menu').stop().slideToggle('fast');
		$('.dashboard-menu').stop().slideUp('fast');
	});
	
	//Dashboard Menu
	$('.more-menu').click(function(){
		$('.dashboard-menu').stop().slideToggle('fast');
		$('ul.menu').stop().slideUp('fast');
	});
	
});