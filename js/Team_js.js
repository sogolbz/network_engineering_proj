$(document).ready(function () {
    var trigger = $('.hamburger'),
        TeamProfile = $('#TeamProfile'),
        Team_request = $('#Team_request'),

        overlay = $('.overlay'),
        isClosed = false;
 
	var new_mem_action = new_team_member = $('#new_team_member');
    new_mem_action.click(function () {
		$('#team_members').append('<p>نام عضو جدید</p><input type="" name="" class="form-control" style="background-color:gray;" id="" value="">');
    }); 
    trigger.click(function () {
        hamburger_cross();
    });

    TeamProfile.click(function () {
        hamburger_cross();
        $('#wrapper').toggleClass('toggled');
        $('#id4').addClass('choice1');

        $('#id2').addClass('choice1');

        $('#id1').removeClass('choice1');
    });
    Team_request.click(function () {
        hamburger_cross();
        $('#wrapper').toggleClass('toggled');
        $('#id4').addClass('choice1');

        $('#id1').addClass('choice1');

        $('#id2').removeClass('choice1');
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
