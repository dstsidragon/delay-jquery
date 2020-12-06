$(document).ready(function() {
	$('a').click(function(e){
		e.preventDefault();
		$('.box1').stop().slideToggle(0);
		$('.box2').stop().slideToggle(200);
		$('.box3').stop().slideToggle(400);
		$('.box4').stop().slideToggle(600);
		$('.box5').stop().slideToggle(800);
		$('.box6').stop().slideToggle(1000);
		$('.box7').stop().slideToggle(1200);
	})
	
});