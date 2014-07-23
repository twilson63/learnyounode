var http = require('http');
var args = process.argv.splice(2);

http.get(args[0], function(res) {
  var body = '';
  res.setEncoding('utf-8');
  res.on('data', function(data) {
    body += data;
  });
  res.on('end', function() {
    console.log(body.length);
    console.log(body);
  });
  res.on('error', console.error);
});
