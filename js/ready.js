jQuery(function($){
	$("marquee").marquee();
	var timer = setInterval(function(){
		var r=Math.round(Math.random()*(256-0));
		var g=Math.round(Math.random()*(256-0));
		var b=Math.round(Math.random()*(256-0));
		$("h1").css({color:"rgb("+r+","+g+","+b+")"});
	},500);
});