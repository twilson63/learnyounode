var args = process.argv.splice(2);
var http = require('http');
var map = require('through2-map');

http.createServer(function(req,res) {
  if (req.method.toLowerCase() === 'post') {
    req.pipe(map(function(data) {
      return data.toString().toUpperCase();
    })).pipe(res);
  }
}).listen(args[0]);
