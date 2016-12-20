var board = new Board(10);
board.makeBoard();

document.getElementById("row0").addEventListener("click", function(e) {
  board.addPlayerTag(e.target.id);
});
