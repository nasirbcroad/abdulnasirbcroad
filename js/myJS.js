$(document).ready(function() {
	$(".navbar-nav li").click(function(){
		$(".navbar-nav").children().removeClass("border-btm");
		$(this).addClass("border-btm");
		$("button").click();
	});
	$(".con-info").hover(function(){
		$(this).children().show();
	});
	$(".con-info").mouseleave(function(){
		$(".con-info a").hide();
	});
});



