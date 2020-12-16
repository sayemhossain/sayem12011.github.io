$(document).ready(function(){
	$(window).scroll(function(){
		if (this.scrollY > 20 ) {
			$('.navbar').addClass("sticky");

		}else {
			$('.navbar').removeClass("sticky");
		}
 });

 // toggle menu
 $('.menu-btn').click(function(){

	 $('.navbar .manu').toggleClass("active");

});

//typing

var typed = new Typed(".typing",{
	strings: ["YouTuber", "Developer", "Blogger", "Designer", "Freelancer"],
	typeSpeed: 100,
	backSpeed: 60,
	loop: true,
});



var typed = new Typed(".lovemis",{
	strings: ["YouTuber", "Developer", "Blogger", "Designer", "Freelancer"],
	typeSpeed: 100,
	backSpeed: 60,
	loop: true,
});

$(document).ready(function () {
  $('.accordion-header').click(function () {
    $('.accordion .accordion-body').slideUp();
    $(this).next('.accordion-body').slideDown();
    $('.accordion .accordion-header .icon').text('+');
    $(this).children('.icon').text('-');

  });
});

//

});
