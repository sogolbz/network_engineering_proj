$(document).ready(function () {
  var trigger = $('.hamburger'),
      change_ersonal_data = $('#personal_data'),
	  post_new_ad = $('#new_addvertisement'),
	   search_res = $('#resume_search'),
      overlay = $('.overlay'),
     isClosed = false;

    trigger.click(function () {
      hamburger_cross();      
    });

	 change_ersonal_data.click(function () {
      hamburger_cross();
$('#wrapper').toggleClass('toggled');
$('#id4').addClass('choice1'); 
$('#id2').addClass('choice1');    
$('#id3').addClass('choice1');    
$('#id1').removeClass('choice1');      
    });
	 post_new_ad.click(function () {
      hamburger_cross();
$('#wrapper').toggleClass('toggled');
$('#id4').addClass('choice1'); 
$('#id1').addClass('choice1');    
$('#id3').addClass('choice1');    
$('#id2').removeClass('choice1');      
    });
	 search_res.click(function () {
      hamburger_cross();
$('#wrapper').toggleClass('toggled');
$('#id4').addClass('choice1'); 
$('#id1').addClass('choice1');    
$('#id2').addClass('choice1');    
$('#id3').removeClass('choice1');      
    });

	
    function hamburger_cross() {

      if (isClosed == true) {          
        overlay.hide();
        trigger.removeClass('is-open');
        trigger.addClass('is-closed');
        isClosed = false;
      } else {   
        overlay.show();
        trigger.removeClass('is-closed');
        trigger.addClass('is-open');
        isClosed = true;
      }
	  
  }
  
  
  
  $('[data-toggle="offcanvas"]').click(function () {
        $('#wrapper').toggleClass('toggled');
  });  
});
