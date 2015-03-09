/**
 * The nav stuff
 */
(function( window ){
	
	'use strict';

	var body = document.body,
		mask = document.createElement("div"),
		toggleSlideLeft = document.querySelector( ".toggle-slide-left" ),
/*		toggleSlideRight = document.querySelector( ".toggle-slide-right" ),
		toggleSlideTop = document.querySelector( ".toggle-slide-top" ),
		toggleSlideBottom = document.querySelector( ".toggle-slide-bottom" ),
		togglePushLeft = document.querySelector( ".toggle-push-left" ),
		togglePushRight = document.querySelector( ".toggle-push-right" ),
		togglePushTop = document.querySelector( ".toggle-push-top" ),
		togglePushBottom = document.querySelector( ".toggle-push-bottom" ),*/
		slideMenuLeft = document.querySelector( ".slide-menu-left" ),
/*		slideMenuRight = document.querySelector( ".slide-menu-right" ),
		slideMenuTop = document.querySelector( ".slide-menu-top" ),
		slideMenuBottom = document.querySelector( ".slide-menu-bottom" ),
		pushMenuLeft = document.querySelector( ".push-menu-left" ),
		pushMenuRight = document.querySelector( ".push-menu-right" ),
		pushMenuTop = document.querySelector( ".push-menu-top" ),
		pushMenuBottom = document.querySelector( ".push-menu-bottom" ),*/
		activeNav
	;
	mask.className = "mask";

	/* slide menu left */
	toggleSlideLeft.addEventListener( "click", function(){
		classie.add( body, "sml-open" );
		document.body.appendChild(mask);
		activeNav = "sml-open";
	} );

	/* hide active menu if mask is clicked */
	mask.addEventListener( "click", function(){
		classie.remove( body, activeNav );
		activeNav = "";
		document.body.removeChild(mask);
	} );

	/* hide active menu if close menu button is clicked */
	[].slice.call(document.querySelectorAll(".close-menu")).forEach(function(el,i){
		el.addEventListener( "click", function(){
			classie.remove( body, activeNav );
			activeNav = "";
			document.body.removeChild(mask);
		} );
	});


})( window );