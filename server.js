var Hapi = require('hapi');
var routes = require('./routes');
var config = require('./config');

var server = module.exports = new Hapi.Server();
server.connection({
  host: config.server.host,
  port: config.server.port
});
server.routes(routes);
