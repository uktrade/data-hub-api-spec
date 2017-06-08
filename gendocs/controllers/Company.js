'use strict';

var url = require('url');

var Company = require('./CompanyService');

module.exports.addCompany = function addCompany (req, res, next) {
  Company.addCompany(req.swagger.params, res, next);
};

module.exports.archiveCompany = function archiveCompany (req, res, next) {
  Company.archiveCompany(req.swagger.params, res, next);
};

module.exports.getchcompany = function getchcompany (req, res, next) {
  Company.getchcompany(req.swagger.params, res, next);
};

module.exports.getcompany = function getcompany (req, res, next) {
  Company.getcompany(req.swagger.params, res, next);
};

module.exports.unarchiveCompany = function unarchiveCompany (req, res, next) {
  Company.unarchiveCompany(req.swagger.params, res, next);
};

module.exports.updateCompany = function updateCompany (req, res, next) {
  Company.updateCompany(req.swagger.params, res, next);
};
