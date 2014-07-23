var mymodule = require('./6a');
var args = process.argv.splice(2);

mymodule(args[0], args[1], function(err, list) {
  if (err) { return console.error('There was an error: ', err); }
  console.log(list.join('\n'));
});

