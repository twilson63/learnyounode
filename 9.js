var http = require('http');
var bl = require('bl');
var args = process.argv.splice(2);

var count = 3;
var results = [];

function printResults() {
  results.forEach(function(result) { console.log(result); });
}

function httpGet(index) {
  http.get(args[index], function(response) {
    response.pipe(bl(function(err, data) {
      if (err) { return console.error(err); }
      results[index] = data.toString();
      count -= 1;
      if (count === 0) { printResults() }
    }));
  });
} 

[2,1,0].forEach(httpGet);

