jQuery(document).ready(function() {
	jQuery("ul").parent("li").children("a").append("<i class='fa fa-angle-down'></i>");
	jQuery(".menu ul li").click(function(){
		jQuery(this).children("ul").slideToggle(2000);
		return false;
	});


	/*jQuery body width */
	/*jQuery("#check").click(function(){
		var width = jQuery("body").width();
		alert(width);
	})*/

	var width = jQuery("body").width();
	if(width <= 768) {
		jQuery(".dropdown").show();
		jQuery(".menu").hide();
		jQuery(".close").hide();
		jQuery(".open").show();
		
	}else{
		jQuery(".dropdown").hide();
		jQuery(".menu").show();
	}


	jQuery(".open").click(function(){
		jQuery(".menu").slideDown(1000);
		jQuery(this).hide();
		jQuery(".close").show();
		return false;
	});

	jQuery(".close").click(function(){
		jQuery(".menu").hide(1000);
		jQuery(this).hide();
		jQuery(".open").show();
		return false;
	});

	jQuery(window).scroll(function(){
		var top = jQuery(window).scrollTop();
		jQuery(".tops").text(top);
	});

	jQuery(window).scroll(function(){
		var top = jQuery(window).scrollTop();
		if(top >= 122) {
			jQuery("nav").addClass("mysticky");
			jQuery(".scrolls").fadeIn(1000);
		}
		else{
			jQuery("nav").removeClass("mysticky");
			jQuery(".scrolls").fadeOut(1000);
		}
	});

	jQuery(".scrolls").click(function(){
    jQuery('html, body').animate({ scrollTop: 0 }, 1000);
	});

});