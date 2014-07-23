var args = process.argv.splice(2);
var http = require('http');
var urlParse = require('url').parse;

http.createServer(function(req,res) {
  var urlObj = urlParse(req.url);
  res.writeHead(200, {'Content-Type': 'application/json'});
  var iso = urlObj.query.split('=')[1];
  var date = new Date(iso);

  if (urlObj.pathname === '/api/parsetime') {
    res.end(JSON.stringify({
      hour: date.getHours(),
      minute: date.getMinutes(),
      second: date.getSeconds()
    }));
  } else if (urlObj.pathname === '/api/unixtime') {
    res.end(JSON.stringify({ unixtime: date.getTime() }));
  }
}).listen(args[0]);

