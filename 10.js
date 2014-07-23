var net = require('net');
var args = process.argv.splice(2);
var strftime = require('strftime');

var server = net.createServer(function(socket) {
  var date = strftime('%F %H:%M', new Date() );
  socket.end(date.toString() + '\n');
});

server.listen(args[0]);
