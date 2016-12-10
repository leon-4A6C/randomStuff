
//it got too messy and it didn't work
/*var repoRequest = new XMLHttpRequest;
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
      elements.push(new Graph(data[i].name, 0));
      elements[i].makeNewElement();
      graphAmount++;
    }
    graphAmount = 0;
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
                console.log(elements);
                elements[k].width = statsRequestData[j][k].total+"em";
                elements[k].update();
                console.log(graphAmount);
                graphAmount++;
              }
            }
          }
        }
      }
      statsRequest[i].open("GET", "https://api.github.com/repos/leon-4A6C/"+data[i].name+"/stats/contributors");
      statsRequest[i].send();
    }
  }
}
repoRequest.open("GET","https://api.github.com/users/leon-4A6C/repos");
repoRequest.send();
*/

makeGraphContainer();
showStats();
var repoData, statsData, parsedStatsData, elements;


function repoRequest() {
  var xmlhttp = new XMLHttpRequest();
  xmlhttp.open("GET", "https://api.github.com/users/leon-4A6C/repos",  false);
  xmlhttp.send();
  repoData = JSON.parse(xmlhttp.responseText);
  return repoData;
}

function statsRequest() {
  var data = repoRequest();
  statsData = [];
  //console.log(data);
  //console.log(data[i].name);
  for (var i = 0; i < data.length; i++) {
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.open("GET", "https://api.github.com/repos/leon-4A6C/"+data[i].name+"/stats/contributors", false);
    xmlhttp.send();
    statsData.push(JSON.parse(xmlhttp.responseText));
  }
  return statsData;
}

function parseStats() {
  parsedStatsData = [];
  var data = statsRequest();
  console.log(data);
  for (var i = 0; i < data.length; i++) {
    for (var j = 0; j < data[i].length; j++) {
      if (data[i][j].author.login == "leon-4A6C" || data[i][j].author.login == "leon3110l") {
        parsedStatsData.push(data[i][j].total);
      }
    }
  }
  console.log(parsedStatsData);
  return parsedStatsData;
}

function showStats() {
  var data = parseStats();
  elements = [];
  for (var i = 0; i < data.length; i++) {
    elements.push(new Graph(repoData[i].name, 0));
    elements[i].width = data[i];
    elements[i].makeNewElement();
  }
}
