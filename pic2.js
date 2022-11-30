var Index = 0;
myslide2();

function myslide2() {
  var i;
  var x = document.getElementsByClassName("dpmob");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  Index++;
  if (Index > x.length) {Index = 1}    
  x[Index-1].style.display = "block";  
  setTimeout(myslide2, 1500); // Change image every 2 seconds
}

