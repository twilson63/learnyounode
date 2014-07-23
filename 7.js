var http = require('http');
var args = process.argv.splice(2);

http.get(args[0], function(response) {
  response.setEncoding('utf-8');
  response.on('data', function(data) {
    console.log(data);
  });
  response.on('error', function(err) {
    console.error(err);
  });
});
