var fs = require('fs');

module.exports = function(dir, ext, callback) {
  var results = [];
  fs.readdir(dir, function(err, files) {
    files.forEach(function(f) {
      if (f.indexOf(ext) > -1) {
      //if (matcher.test(f)) {
        results.push(f);
      }
    });
    callback(null, results);
  });
};
