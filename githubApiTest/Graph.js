var containerAmount = 0;
var graphAmount = 0;
function Graph(name, graphContainer) {
  this.width;
  this.makeNewElement = function() {
    document.getElementById("graphContainer"+graphContainer).innerHTML +="<div class='graphElement'><div id=graphElementBar"+graphAmount+" class='graphElementBar'><div class='graphElementName'>"+name+"</div></div></div>";
    document.getElementById("graphElementBar"+graphAmount).style.width = this.width;
    graphAmount++;
  }
}

function makeGraphContainer(){
  document.body.innerHTML += "<div id='graphContainer"+containerAmount+"' class='graphContainer'></div>"
}
