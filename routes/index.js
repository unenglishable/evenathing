var routes = module.exports = {};
var path = require('path');
var async = require('async');
var fs = require('fs');

routes.build = function(callback) {
  // get all files in the directory
  fs.readdir(path.join(__dirname), function(err, files) {
    if (err) {
      return callback(err);
    }
    // reduce those to all which are directories
    async.reduce(files, [], function(routeArray, file, reduceCb) {
      file = path.join(__dirname, file);
      fs.stat(file, function(err, stats) {
        if (stats && stats.isDirectory()) {
          routeArray.push(require(path.join(file, '/')));
        }
        return reduceCb(err, routeArray);
      });
    },
    // return all the directories
    function(err, routeArray) {
      return callback(err, routeArray);
    });
  });
};
