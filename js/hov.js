// HOV.JS
// no jay-z here, sorry :(
// changes img description on link hover

$(document).ready( function() {

	// hov1
	$( '#hov1' )
		.mouseover(function() { 
            $('#thumb').attr("src", 'img/landing/2.jpg');
            $('#thumb-desc').html('Branding and Visual Systems');
        })

        .mouseout(function() {
            $('#thumb').attr("src", 'img/landing/1.jpg');
            $('#thumb-desc').html('Above images generated using Image-Outliner, a Python script written in early 2016');  
        });

    // hov2
	$( '#hov2' )
		.hover(function() {
            $('#thumb').css('background-image', 'url(../img/landing/3.jpg)');  
            $('#thumb-desc').html('Branding and Visual Systems');
        });

    // hov3
	$( '#hov3' )
		.hover(function() {
            $('#thumb').css('background-image', 'url(../img/landing/4.jpg)');  
            $('#thumb-desc').html('Branding and Visual Systems');
        });

    // hov4
	$( '#hov4' )
		.hover(function() {
            $('#thumb').css('background-image', 'url(../img/landing/5.jpg)');  
            $('#thumb-desc').html('Branding and Visual Systems');
        });

    // hov5
	$( '#hov5' )
		.hover(function() {
            $('#thumb').css('background-image', 'url(../img/landing/6.jpg)');  
            $('#thumb-desc').html('Branding and Visual Systems');
        });

    // hov6
	$( '#hov6' )
		.hover(function() {
            $('#thumb').css('background-image', 'url(../img/landing/7.jpg)');  
            $('#thumb-desc').html('Branding and Visual Systems');
        });
});