$(function() {
 
  // Create the dropdown base
  $("<select id='dropdown'></select>").appendTo("#filter-brands nav");

// Create default option ".."
  $("<option />", {
       "selected": "selected",
       "text"    : "Categorías..."
  }).appendTo("#filter-brands nav select");


  // Populate dropdown with menu items
  $("#filter-brands nav span").each(function() {
    var el = $(this);
    $("<option />", {
      "value"       : el.attr("value"),
      "text"        : el.text()
    }).appendTo("#filter-brands select");
  });

  var selected = document.getElementById('dropdown');

  function logValue() {
    switch (this.value) {
      case '1':
        $('#filters #todos').trigger('click');
        break;
      case '2':
        $('#filters #alimentos').trigger('click');
        break;
      case '3':
        $('#filters #hogar').trigger('click');
        break;
      case '4':
        $('#filters #auto').trigger('click');
        break;
      case '5':
        $('#filters #confites').trigger('click');
        break;
      case '6':
        $('#filters #escolar').trigger('click');
        break;
      case '7':
        $('#filters #mascota').trigger('click');
        break;
      case '8':
        $('#filters #desechables').trigger('click');
        break;
    }
  }
  
  selected.addEventListener('change', logValue, false);

});
