// HOV.JS
// no jay-z here, sorry :(
// changes img description on link hover

$(document).ready( function() {

	// hov1
	$( '#hov1' )
		.mouseover(function() { 
            $('#thumb').attr("src", 'img/landing/2.jpg');
        })

        .mouseout(function() {
            $('#thumb').attr("src", 'img/landing/1.jpg');
        });

    // hov2
	$( '#hov2' )
		.mouseover(function() { 
            $('#thumb').attr("src", 'img/landing/3.jpg');
        })

        .mouseout(function() {
            $('#thumb').attr("src", 'img/landing/1.jpg');
        });

    // hov3
	$( '#hov3' )
		.mouseover(function() { 
            $('#thumb').attr("src", 'img/landing/4.jpg');
        })

        .mouseout(function() {
            $('#thumb').attr("src", 'img/landing/1.jpg');
        });

    // hov4
	$( '#hov4' )
		.mouseover(function() { 
            $('#thumb').attr("src", 'img/landing/5.jpg');
        })

        .mouseout(function() {
            $('#thumb').attr("src", 'img/landing/1.jpg');
        });

    // hov5
	$( '#hov5' )
		.mouseover(function() { 
            $('#thumb').attr("src", 'img/landing/6.jpg');
        })

        .mouseout(function() {
            $('#thumb').attr("src", 'img/landing/1.jpg');
        });

    // hov6
	$( '#hov6' )
		.mouseover(function() { 
            $('#thumb').attr("src", 'img/landing/7.jpg');
        })

        .mouseout(function() {
            $('#thumb').attr("src", 'img/landing/1.jpg');
        });
});