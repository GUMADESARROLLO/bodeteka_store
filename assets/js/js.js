jQuery(document).ready(function($) {
	$('.parallax').parallax();
	$(".button-collapse").sideNav();
    $('.scrollspy').scrollSpy();

    $('#inicio,#SMART,#BENEFICIOS').mouseover(function() {

        $("#li-inicio").removeClass('active')
        $("#li-SMART").removeClass('active')
        $("#li-BENEFICIOS").removeClass('active')

        $("#li-" +this.id).addClass('active')


    });





    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('#navbar-id').addClass('navbarFixed')
            $('#navbar-id').removeClass('navbar-fixed');
        }else{
            $('#navbar-id').removeClass('navbarFixed')
            $('#navbar-id').addClass('navbar-fixed');
		}
    })



});