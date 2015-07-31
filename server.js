var Hapi = require('hapi');
var async = require('async');
var path = require('path');
var routes = require(path.join(__dirname, 'routes'));
var config = require(path.join(__dirname, 'config'));

module.exports = function(callback) {
  async.waterfall([
    function(waterfallCb) {
      routes.build(function(err, routes) {
        console.log(routes);
        return waterfallCb(err, new Hapi.Server(), routes);
      });
    },
    function(server, routes, waterfallCb) {
      server.connection({
        host: config.server.host,
        port: config.server.port
      });
      server.route(routes);
      server.start();
      return waterfallCb(null, server);
    }
  ],
  function(err, server) {
    callback(err, server);
  });
}
