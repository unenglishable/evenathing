var Hapi = require('hapi');
var routes = require('./routes');
var serverConfig = require('./config').server;

var server = module.exports = new Hapi.Server();
server.connection(config.host);
server.routes(routes);
