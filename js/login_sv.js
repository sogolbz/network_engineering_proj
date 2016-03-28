	$(function() {

    $('#login-form-link').click(function(e) {
		$("#login-form").delay(100).fadeIn(100);
 		$("#register-form").fadeOut(100);
		$('#register-form-link').removeClass('active');
		$(this).addClass('active');
		e.preventDefault();
	});
	$('#register-form-link').click(function(e) {
		$("#register-form").delay(100).fadeIn(100);
 		$("#login-form").fadeOut(100);
		$('#login-form-link').removeClass('active');
		$(this).addClass('active');
		e.preventDefault();
	});

	
	
});
function fadeout() {
		
		var radio_btn = document.getElementsByName('signup_radio');
		var radio_text = document.getElementsByClassName('radio_text');
		var usr_null = document.getElementsByName('signup_username')[0].innerHTML;

		
		if(radio_btn[0].checked)
		{
			window.location.replace("./karjuyan.html");
			window.alert("ثبت نام با موفقیت انجام شد");
		}
		else if(radio_btn[1].checked)
		{
			window.location.replace("./karfarmayan.html");
			window.alert("ثبت نام با موفقیت انجام شد");
		}
		else
		{
			window.alert("لطفا یکی از انواع کاربران را وارد کنید");
			radio_text[0].classList.add('warning_class');
			radio_text[1].classList.add('warning_class');
			
			
			
		}
		
	};
	
	function login_func()
	{
		window.location.replace("./karjuyan.html");
	}