var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");
var mouseDown = false;
var x, y;
function update() {
  if (mouseDown) {
    ctx.beginPath();
    ctx.fillStyle = "#55f";
    ctx.rect(x,y,10,10);
    ctx.fill();
    ctx.closePath();
  }
  requestAnimationFrame(update);
}

canvas.addEventListener("mousemove", getPosition, false);
canvas.addEventListener("mousedown", getClicked, false);
canvas.addEventListener("mouseup", notClicked, false);
function getPosition(event) {
  x = event.x;
  y = event.y;

  x -= canvas.offsetLeft;
  y -= canvas.offsetTop;

  console.log("X: "+x+" Y: "+y);
}
function getClicked(event) {
  mouseDown = true;
  console.log(mouseDown);
}
function notClicked(event) {
  mouseDown = false;
  console.log(mouseDown);
}
update();
