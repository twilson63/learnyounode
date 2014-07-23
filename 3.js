// require internal module fs or filesystem
var fs = require('fs');
// get arguments
var args = process.argv.splice(2);

// read contents of file sync
var txt = fs.readFileSync(args[0], 'utf-8');
// convert to an array and count the number of elements sub 1
console.log((txt.split('\n').length - 1));
