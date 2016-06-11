// HOV.JS
// no jay-z here, sorry :(
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
        	$('#thumb-desc').html('Above images generated using Image-Outliner, a Python script written in early 2016');
        });

    // hov2
	$( '#hov2' )
		.mouseover(function() {
            $('#thumb').css('background-image', 'url(../img/3.jpg)');  
            $('#thumb-desc').html('Branding and Visual Systems');
        })
        .mouseout(function() {
        	$('#thumb').css('background-image', 'url(../img/1.jpg)');
        	$('#thumb-desc').html('Above images generated using Image-Outliner, a Python script written in early 2016');
        });

    // hov3
	$( '#hov3' )
		.mouseover(function() {
            $('#thumb').css('background-image', 'url(../img/4.jpg)');  
            $('#thumb-desc').html('Branding and Visual Systems');
        })
        .mouseout(function() {
        	$('#thumb').css('background-image', 'url(../img/1.jpg)');
        	$('#thumb-desc').html('Above images generated using Image-Outliner, a Python script written in early 2016');
        });

    // hov4
	$( '#hov4' )
		.mouseover(function() {
            $('#thumb').css('background-image', 'url(../img/5.jpg)');  
            $('#thumb-desc').html('Branding and Visual Systems');
        })
        .mouseout(function() {
        	$('#thumb').css('background-image', 'url(../img/1.jpg)');
        	$('#thumb-desc').html('Above images generated using Image-Outliner, a Python script written in early 2016');
        });

    // hov5
	$( '#hov5' )
		.mouseover(function() {
            $('#thumb').css('background-image', 'url(../img/6.jpg)');  
            $('#thumb-desc').html('Branding and Visual Systems');
        })
        .mouseout(function() {
        	$('#thumb').css('background-image', 'url(../img/1.jpg)');
        	$('#thumb-desc').html('Above images generated using Image-Outliner, a Python script written in early 2016');
        });

    // hov6
	$( '#hov6' )
		.mouseover(function() {
            $('#thumb').css('background-image', 'url(../img/7.jpg)');  
            $('#thumb-desc').html('Branding and Visual Systems');
        })
        .mouseout(function() {
        	$('#thumb').css('background-image', 'url(../img/1.jpg)');
        	$('#thumb-desc').html('Above images generated using Image-Outliner, a Python script written in early 2016');
        });
});