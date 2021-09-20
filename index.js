var static = require('node-static');
var http = require('http');

var file = new(static.Server)(__dirname + "/dist/");

const port = 8081;

function format_date(){
  var date = new Date();
  var month = date.getMonth() + 1;
  var day = date.getDate();
  var year = date.getFullYear();
  var hour = date.getHours();
  var minute = date.getMinutes();
  var second = date.getSeconds();

  return day + '/' + month + '/' + year + ' - ' + hour + ':' + minute + ':' + second;
}

http.createServer(function (req, res) {

  console.log( format_date() +' request at port: ' + port)
  file.serve(req, res);

}).listen(port);

console.log( format_date() + " Server started")