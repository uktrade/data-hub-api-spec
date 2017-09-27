'use strict';

var url = require('url');

var Implemented = require('./ImplementedService');

module.exports.addInvestmentTeamMember = function addInvestmentTeamMember (req, res, next) {
  Implemented.addInvestmentTeamMember(req.swagger.params, res, next);
};

module.exports.archiveCompany = function archiveCompany (req, res, next) {
  Implemented.archiveCompany(req.swagger.params, res, next);
};

module.exports.archiveInvestment = function archiveInvestment (req, res, next) {
  Implemented.archiveInvestment(req.swagger.params, res, next);
};

module.exports.createInvestment = function createInvestment (req, res, next) {
  Implemented.createInvestment(req.swagger.params, res, next);
};

module.exports.getchcompany = function getchcompany (req, res, next) {
  Implemented.getchcompany(req.swagger.params, res, next);
};

module.exports.getcompany = function getcompany (req, res, next) {
  Implemented.getcompany(req.swagger.params, res, next);
};

module.exports.getinvestment = function getinvestment (req, res, next) {
  Implemented.getinvestment(req.swagger.params, res, next);
};

module.exports.getprojectsforcompany = function getprojectsforcompany (req, res, next) {
  Implemented.getprojectsforcompany(req.swagger.params, res, next);
};

module.exports.patchInvestment = function patchInvestment (req, res, next) {
  Implemented.patchInvestment(req.swagger.params, res, next);
};

module.exports.removeInvestmentTeamMember = function removeInvestmentTeamMember (req, res, next) {
  Implemented.removeInvestmentTeamMember(req.swagger.params, res, next);
};

module.exports.unarchiveCompany = function unarchiveCompany (req, res, next) {
  Implemented.unarchiveCompany(req.swagger.params, res, next);
};

module.exports.unarchiveInvestment = function unarchiveInvestment (req, res, next) {
  Implemented.unarchiveInvestment(req.swagger.params, res, next);
};

module.exports.updateCompany = function updateCompany (req, res, next) {
  Implemented.updateCompany(req.swagger.params, res, next);
};
