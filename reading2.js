var http = require('http');
var url = require('url');

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  var q = url.parse(req.url, true).query;
  if(!q.fname || !q.lname)
  {
    var txt = "Please pass 'fname' and 'lname'";
  }
  else txt = q.fname + " " + q.lname;
  res.end(txt);
}).listen(8080);