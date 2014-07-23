var args = process.argv.splice(2);
var http = require('http');
var fs = require('fs');

http.createServer(function(req, res) {
  res.writeHead(200, {'Content-type': 'plain/text'});
  fs.createReadStream(args[1]).pipe(res);
}).listen(args[0]);


