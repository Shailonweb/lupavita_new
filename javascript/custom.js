 $(document).ready(function() {
     var height = window.innerHeight;
     var width = window.innerWidth;
     //alert(width);
     var options = {
         direction: 'left'
     };
     var effect = 'slide';
     var duration = 500;
     $(".navbar-toggle").click(function(e) {
         e.stopPropagation();
         $("#navbar").toggle(effect, options, duration);
		 $('html').toggleClass('killscroll');

     })
     if (width < 768) {
         $(document).click(function() {
             $('html').removeClass('killscroll');
             $("#navbar").hide(effect, options, duration);
         });
     } else {
         $(window).resize(function() {

             $(document).click(function() {
                 $('html').removeClass('killscroll');
                 $("#navbar").hide();
             });

         });

     }

     $(window).scroll(function() {
         if ($(this).scrollTop() > 120) {
             $('#scrolltop').fadeIn();
			  $('html').addClass('fixed');
			  $('.banner').slideUp(300);
			  
         } else {
             $('#scrolltop').fadeOut();
			 
				 $('html').removeClass('fixed');
				$('.banner').fadeIn();
			  
         }
     });
     $("#scrolltop").click(function() {

         $("html, body").animate({
             scrollTop: 0
         }, 600);
         return false;
     });
 	$('.my-slider').unslider({
			infinite: true,
	});
 });