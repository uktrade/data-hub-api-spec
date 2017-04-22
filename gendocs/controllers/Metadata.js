'use strict';

var url = require('url');

var Metadata = require('./MetadataService');

module.exports.metadataBusinessActibvity = function metadataBusinessActibvity (req, res, next) {
  Metadata.metadataBusinessActibvity(req.swagger.params, res, next);
};
