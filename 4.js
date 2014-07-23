var fs = require('fs');
var args = process.argv.splice(2);

// read file asynchronusly
fs.readFile(args[0], 'utf-8', function(err, txt) {
  // if error exit function
  if (err) { return console.error(err); }
  // get lines 
  var lines = txt.split('\n').length - 1;
  // print lines
  console.log(lines);
});
