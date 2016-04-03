$(document).ready(function () {
  var trigger = $('.hamburger'),
      change_ersonal_data = $('#personal_data'),
	  edit_resume = $('#resume'),
	  post_new_ad = $('#new_addvertisement'),
	  send_msg = $('#send_msg'),
	  job_search = $('#jobsearch'),
	   outsourcing = $('#outsourcing'),
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
$('#id5').addClass('choice1');
$('#id3').addClass('choice1');    
$('#id1').removeClass('choice1');      
    });
	
outsourcing.click(function(){
  hamburger_cross();
  $('#wrapper').toggleClass('toggled');
  $('#id4').addClass('choice1');
  $('#id3').addClass('choice1');
  $('#id1').addClass('choice1');
  $('#id2').addClass('choice1');
$('#id5').removeClass('choice1');});
  
	 edit_resume.click(function () {
      hamburger_cross();
$('#wrapper').toggleClass('toggled');
$('#id4').addClass('choice1'); 
$('#id5').addClass('choice1');    
$('#id3').addClass('choice1');    
$('#id1').addClass('choice1'); 
 $('#id2').removeClass('choice1');     
    });
	
	 post_new_ad.click(function () {
      hamburger_cross();
$('#wrapper').toggleClass('toggled');
$('#id4').addClass('choice1'); 
$('#id1').addClass('choice1');  
$('#id5').addClass('choice1');  
$('#id3').addClass('choice1');    
$('#id2').removeClass('choice1');      
    });
	 send_msg.click(function () {
      hamburger_cross();
$('#wrapper').toggleClass('toggled');
$('#id4').addClass('choice1'); 
$('#id1').addClass('choice1');    
$('#id2').addClass('choice1'); 
$('#id5').addClass('choice1');  
$('#id3').removeClass('choice1');      
    });
	 search_res.click(function () {
      hamburger_cross();
$('#wrapper').toggleClass('toggled');
$('#id4').addClass('choice1'); 
$('#id1').addClass('choice1');   
$('#id5').addClass('choice1'); 
$('#id2').addClass('choice1');    
$('#id3').removeClass('choice1');      
    });
 job_search.click(function () {
      hamburger_cross();
$('#wrapper').toggleClass('toggled');
$('#id4').addClass('choice1'); 
$('#id1').addClass('choice1');    
$('#id2').addClass('choice1');
$('#id3').addClass('choice1');   
$('#id5').removeClass('choice1');      
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

  $('.filter').click(function(){
	  this.nextSibling.toggle();
  });
  
  });


