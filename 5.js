var fs = require('fs');
var path = require('path');

var args = process.argv.splice(2);
var dir = args[0];
var ext = args[1];

// get list of files
fs.readdir(dir, function(err, list) {
  // loop thru list
  list = list.filter(function(file) {
    return path.extname(file) === '.' + ext;
  });
  console.log(list.join('\n'));
});
