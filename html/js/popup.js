//
// Gets ID buttons add event listner and excutes based on id
document.getElementById('portfoliolist').addEventListener('click', function(evt) {
  var target = evt.target;

  if (target.id === 'brand-1') {
    document.getElementById('bPop-1').style.display = 'block';
  }
  else if (target.id === 'brand-2') {
    document.getElementById('bPop-2').style.display = 'block';
  }
  else if (target.id === 'brand-3') {
    document.getElementById('bPop-3').style.display = 'block';
  }
  else if (target.id === 'brand-4') {
    document.getElementById('bPop-4').style.display = 'block';
  }
  /*else if (target.id === 'brand-5') {
    document.getElementById('bPop-5').style.display = 'block';
  }*/
  else {
    document.getElementById('bPop-1').style.display = 'none';
    document.getElementById('bPop-2').style.display = 'none';
    document.getElementById('bPop-3').style.display = 'none';
    document.getElementById('bPop-4').style.display = 'none';
   // document.getElementById('bPop-5').style.display = 'none';
  }
}, false);

