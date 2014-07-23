var args = process.argv.slice(2);
var dir = args[0];
var ext = args[1];

var mymodule = require('./mymodule');

mymodule(dir, ext, function(err, list) {
  list.forEach(function(file) {
    console.log(file);
  });
});
