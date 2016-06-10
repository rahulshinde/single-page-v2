// HOV.JS
// changes img/description on link hover

$(document).ready( function() {

	// hov1
	$( '#hov1' )
		.mouseover(function() {
            $('#thumb').css('background-image', 'url(../img/2.jpg)');  
            $('#thumb-desc').html('Branding and Visual Systems');
        })
        .mouseout(function() {
        	$('#thumb').css('background-image', 'url(../img/1.jpg)');
        	$('#thumb-desc').html('For u bailey');
        });

});