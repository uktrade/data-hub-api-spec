'use strict';

var url = require('url');

var Unimplemented = require('./UnimplementedService');

module.exports.getprojectssincetime = function getprojectssincetime (req, res, next) {
  Unimplemented.getprojectssincetime(req.swagger.params, res, next);
};
