// Fall-Down initial view
(function() {
  var elements;
  var windowHeight;

  function init() {
    elements = document.querySelectorAll('.hidden');
    windowHeight = window.innerHeight;
  }

  function checkPosition() {
    for (var i = 0; i < elements.length; i++) {
      var element = elements[i];
      var positionFromTop = elements[i].getBoundingClientRect().top;

      if (positionFromTop - windowHeight <= 0) {
        element.classList.add('fall-down');
        element.classList.remove('hidden');
      }
    }
  }

  window.addEventListener('scroll', checkPosition);
  window.addEventListener('resize', init);

  init();
  checkPosition();
})();

// Bounce when in view
$(window).scroll(function() {
   var oT = $('.scroll-anim').offset().top,
       oH = $('.scroll-anim').outerHeight(),
       wH = $(window).height(),
       wS = $(this).scrollTop();
   if (wS > (oT+oH-wH) && (oT > wS) && (wS+wH > oT+oH)){
      $('.scroll-anim').addClass('bounce')
   } else {
      $('.scroll-anim').removeClass('bounce')
   }
});

