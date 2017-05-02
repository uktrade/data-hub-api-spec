'use strict';

var url = require('url');

var Search = require('./SearchService');

module.exports.datahubSearch = function datahubSearch (req, res, next) {
  Search.datahubSearch(req.swagger.params, res, next);
};

module.exports.datahubSearch_1 = function datahubSearch_1 (req, res, next) {
  Search.datahubSearch_1(req.swagger.params, res, next);
};

module.exports.datahubSearch_2 = function datahubSearch_2 (req, res, next) {
  Search.datahubSearch_2(req.swagger.params, res, next);
};
