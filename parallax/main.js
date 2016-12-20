document.getElementById("par").addEventListener("mousemove", function(e){
  var x = e.offsetX;
  var y = e.offsetY;
  var paralX = 49+(50/document.getElementById("par").clientWidth)*x;
  var paralY = 49+(50/document.getElementById("par").clientHeight)*y;
  console.log(paralX);
  document.getElementById("par").style.backgroundPosition = ""+paralX+"% "+paralY+"%";
});
