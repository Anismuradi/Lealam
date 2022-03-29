
$(".carousel").carousel({
	interval:2000
});


$(window).scroll(function(){
	var distance = $(".navbar").offset().top;

	if(distance > 100){
		$(".m-navbr").removeClass("navbar-light");
		$(".m-navbr").addClass("navbar-dark");
	}else{
		$(".m-navbr").removeClass("navbar-dark");
		$(".m-navbr").addClass("navbar-light");
	}

	

});

$(".navbar-toggle").click(function(){
	$(".navbar , #menu").toggleClass("m-dark");
});

	


var text = "ahmad warisa";

var arr = text.split('');

console.log(500 - arr.length);






