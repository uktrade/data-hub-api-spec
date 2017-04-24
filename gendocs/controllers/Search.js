'use strict';

var url = require('url');

var Search = require('./SearchService');

module.exports.datahubSearch = function datahubSearch (req, res, next) {
  Search.datahubSearch(req.swagger.params, res, next);
};
