$(document).ready(function(){
	//Example
	loadCSS( "http://fonts.googleapis.com/css?family=Open+Sans:300italic,400italic,600italic,700italic,800italic,400,700,300,600,800" );

	new Imager({ availableWidths: [320, 640, 1024] });

	$.slidebars();	

	//$('.home').css('height', $(window).height());


	$('.bx_slider').bxSlider({
		pause: 4000,
		auto: true,
		mode: 'fade',
		speed: 1000,
		controls: true
	});

	$(function () {
  		$('[data-toggle="tooltip"]').tooltip();
	});

	$('.add-to-cart-product').tooltip('show')

});

