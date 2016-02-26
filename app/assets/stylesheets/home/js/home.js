/*!
 * Start Bootstrap - Creative Bootstrap Theme (http://startbootstrap.com)
 * Code licensed under the Apache License v2.0.
 * For details, see http://www.apache.org/licenses/LICENSE-2.0.
 */

// $(window).load(function() {  
// 	$(".loading").fadeOut(2000);
// });

$(document).ready(function(){

(function($) {
    "use strict"; // Start of use strict

    // jQuery for page scrolling feature - requires jQuery Easing plugin
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: ($($anchor.attr('href')).offset().top - 50)
        }, 1250, 'easeInOutExpo');
        event.preventDefault();
    });

    // Highlight the top nav as scrolling occurs
    $('body').scrollspy({
        target: '.navbar-fixed-top',
        offset: 51
    })

    // Closes the Responsive Menu on Menu Item Click
    $('.navbar-collapse ul li a').click(function() {
        $('.navbar-toggle:visible').click();
    });

    // Fit Text Plugin for Main Header
    $("h1").fitText(
        1.2, {
            minFontSize: '35px',
            maxFontSize: '65px'
        }
    );

    // Offset for Main Navigation
    $('#mainNav').affix({
        offset: {
            top: 100
        }
    })

    // Initialize WOW.js Scrolling Animations
    new WOW().init();

})(jQuery); // End of use strict

//mousemoved에 따른 header그림 움직임 제어
$('header').on('mousemove',function(e){
		var screenWidth = $(window).width();

		var ph = $('.paper').height();
		var ch = $('.coffee').height();

		var posX = e.pageX;
		var posY = e.pageY;
		
		$('.clip').css({'right':(screenWidth-(posX/30))*27/100, 'top':-(posY/30)});
		$('.paper').css({'right':(screenWidth+(posX/15))*11/100, 'top':($(this).height() - ph -50 + (posY/20)) });
		$('.coffee').css({'right':(screenWidth-(posX/20))*79/100, 'top':($(this).height() - ch -50 -(posY/40)) });
		$('.computer').css({'margin-top':+(posY/30), 'margin-bottom':-(posY/40), 'margin-right':+(posX/37) });
		$('#mouse').css({'margin-left':-(posX/30),'margin-right':-(posX/30), 'margin-top': -(posY/40) });
});

var screenHeight = $(window).height();

$('.mobile').css({'height': screenHeight });

});
