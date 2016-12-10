var repoRequest = new XMLHttpRequest;
var statsRequest = [];
var statsRequestData =[];
var data;
var elements = [];
var totalcommits = [];
makeGraphContainer();

repoRequest.onreadystatechange = function() {
  if(this.readyState == 4 && this.status == 200) {
    data = JSON.parse(this.responseText);
    //console.log(data);
    for (var i = 0; i < data.length; i++) {
      statsRequest.push(new XMLHttpRequest);
    }
    for (var i = 0; i < statsRequest.length; i++) {
      //console.log("in forloop");;
      statsRequest[i].onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
          statsRequestData.push(JSON.parse(this.responseText));
          //console.log(statsRequestData);
          for (var j = 0; j < statsRequestData.length; j++) {
            for (var k = 0; k < statsRequestData[j].length; k++) {
              console.log(statsRequestData[j][k]);
              if (statsRequestData[j][k].author.login == "leon-4A6C") {
                console.log(statsRequestData[j][k].total);
                totalcommits.push(statsRequestData[j][k].total);
              }
            }
          }
        }
      }
      statsRequest[i].open("GET", "https://api.github.com/repos/leon-4A6C/"+data[i].name+"/stats/contributors");
      statsRequest[i].send();
    }
    for (var i = 0; i < data.length; i++) {
      console.log(totalcommits);
      elements.push(new Graph(data[i].name, 0));
      for (var j = 6; j < 10; j++) {
        console.log(totalcommits[j]);
        elements[i].width = "10em";
      }
      elements[i].makeNewElement();
    }
  }
}
repoRequest.open("GET","https://api.github.com/users/leon-4A6C/repos");
repoRequest.send();
