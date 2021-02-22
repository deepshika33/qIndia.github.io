var menuBtn = document.querySelector('.js-menu-btn');
var body   = document.querySelector('body');

var nav = document.getElementsByClassName('nav-item-link');


// Responsive Nav Button Toggle

menuBtn.addEventListener('click', function() {
  body.classList.toggle('nav-shown');
});

//Smooth Scroll from Nav links

/*
console.log(nav);

(function(){

  var parallax = document.querySelectorAll(".slide"),
      speed = 0.5;

  window.onscroll = function(){
    [].slice.call(parallax).forEach(function(e,i){

      var windowYOffset = window.pageYOffset,
          elBackgrounPos = "50% " + (windowYOffset * speed) + "px";

      e.style.backgroundPosition = elBackgrounPos;

    });
  };

})();
*/

/*
nav.onclick = function() {
	event.preventDefault();
	var elementId = this.getAttribute('href');
	console.log(elementId);
	var scroll = getElementById(elementID).scrollTop;	
	body.scrollTop = scroll;
}
*/

/*
$(document).on('click', '.nav-item-link', function(event){
    event.preventDefault();

    $('html, body').animate({
        scrollTop: $( $.attr(this, 'href') ).offset().top
    }, 500);
});
*/




