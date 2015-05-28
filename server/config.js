'use strict';

// TODO: Select correct configuration with gulp argv or from environment
var config = require('./testing.config.js');

module.exports = {
  baseUrl: config.baseUrl,
  port: config.port,
  steamApiKey: config.steamApiKey,
  secret: config.secret,
  adminCode: config.adminCode,
  dbHost: config.dbHost,
  dbPort: config.dbPort,
  dbUser: config.dbUser,
  dbPass: config.dbPass,
  dbName: config.dbName
};
