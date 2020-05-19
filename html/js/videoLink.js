$(document).ready(function() {

   $('#videoss a').click(function() {
      $('#loaderr').append('<iframe width="1459" height="769" src="https://www.youtube.com/embed/iY2shNa12Fc" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>');
      $('#overlayy').fadeIn(250);
   });

   $('#closee').click(function() {
      $('#overlayy').fadeOut(250,function() {
         $('#loaderr').html('');
      });
   });
});

