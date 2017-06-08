'use strict';

var url = require('url');

var Metadata = require('./MetadataService');

module.exports.metadataBusinessActivity = function metadataBusinessActivity (req, res, next) {
  Metadata.metadataBusinessActivity(req.swagger.params, res, next);
};

module.exports.metadataDocumentableFields = function metadataDocumentableFields (req, res, next) {
  Metadata.metadataDocumentableFields(req.swagger.params, res, next);
};
