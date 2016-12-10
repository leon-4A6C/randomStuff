var request = new XMLHttpRequest;
var data;
request.onreadystatechange = function() {
  if(this.readyState == 4 && this.status == 200) {
    data = JSON.parse(this.responseText);
    console.log(data);
  }
}
request.open("GET","https://api.github.com/users/leon-4A6C/repos");
request.send();
