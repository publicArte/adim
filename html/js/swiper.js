$(function () {

  $("<div class='swipeView'></div>").appendTo("#gallery");
  
  $("#gallery img.gallery_img").each(function() {
    var el = $(this);
    $("<img />", {
      "class" : "swipe-img",
      "src"   : el.attr("src")
    }).appendTo("#gallery div.swipeView");
  });
  

});
