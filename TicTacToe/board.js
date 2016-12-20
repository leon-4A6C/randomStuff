var amountOfBoards = 0;
function Board(size) {
  this.size = size || 3;
  this.board = [];
  this.playerTag = 1;
  for (var i = 0; i < (this.size * this.size); i++) {
    this.board.push(0);
  }
  this.makeBoard = function() {
    document.body.innerHTML += "<div id='row"+amountOfBoards+"' class='row'></div>";
    document.getElementById("row"+amountOfBoards).style.width = this.size*2+"em";
    for (var i = 0; i < this.board.length; i++) {
      document.getElementById("row"+amountOfBoards).innerHTML += "<div id='col_"+amountOfBoards+"-"+i+"' class='col'></div>";
    }
    amountOfBoards++;
  }
  this.addPlayerTag = function(id) {
    var iId = id.substring(id.indexOf("-")+1, id.length);
    this.board[iId] = this.playerTag;
    this.addPlayerTagToBoard(id);
    if (this.playerTag == 2) {
      this.playerTag = 1;
    }else {
      this.playerTag++;
    }
  }
  this.addPlayerTagToBoard = function(id) {
    var iId = id.substring(0, id.indexOf("-")+1);
    for (var i = 0; i < this.board.length; i++) {
      document.getElementById(iId+i).innerHTML = this.board[i];
    }
    this.winCheck();
  }

  this.winCheck = function() {
    //x axis check
    var counterx = 0;
    for (var i = 0; i < this.size; i++) {
      var streak1 = 0;
      var streak2 = 0;
      for (var j = 0; j < this.size; j++) {
        var current = this.board[counterx];
        if (current == 1) {
          streak1++;
        }
        if (current == 2) {
          streak2++;
        }
        if (streak1 == this.size) {
          alert("player one won!");
        }
        if (streak2 == this.size) {
          alert("player two won!");
        }
        counterx++;
      }
    }
    //y axis check
    for (var a = 0; a < this.size; a++) {
      var countery = a;
      for (var i = 0; i < this.size; i++) {
        var streak1 = 0;
        var streak2 = 0;
        for (var j = 0; j < this.size; j++) {
          var current = this.board[countery];
          if (current == 1) {
            streak1++;
          }
          if (current == 2) {
            streak2++;
          }
          if (streak1 == this.size) {
            alert("player one won!");
          }
          if (streak2 == this.size) {
            alert("player two won!");
          }
          countery += this.size;
        }
      }
    }
    //TODO diagonal check

  }
}
