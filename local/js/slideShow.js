// Slider

$("#slideshow > div:gt(0)").hide();

setInterval(function() { 
  $('#slideshow > div:first')
    .fadeOut(1000)
    .next()
    .fadeIn(1000)
    .end()
    .appendTo('#slideshow');
},  3000);

// Parallax

  var txtHigh = $(".slide-txt-top");
  var cssHigh = parseFloat(txtHigh.css('top'));

  var txtMid = $("#banner-txt");
  const cssMid = parseFloat(txtMid.css('top'));

  var txtLow =  $(".slide-but");
  const cssLow = parseFloat(txtLow.css('top'));

$(document).on('scroll', function() {

	txtHigh.css("top", Math.max(cssHigh + 0.3 * window.scrollY, 0) + "px");

	txtMid.css("top", Math.max(cssMid + 0.3 * window.scrollY, 0) + "px");

	txtLow.css("top", Math.max(cssLow + 0.3 * window.scrollY, 0) + "px");

})
