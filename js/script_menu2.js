$(document).ready(function() {
	$('.header__burger2').click(function(event) {
		$('.header__burger2,.header__menu2').toggleClass('active');
		// $('body').toggleClass('lock'); //Блокирует контент скрытый за меню
	});
});