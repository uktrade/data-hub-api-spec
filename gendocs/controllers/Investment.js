'use strict';

var url = require('url');

var Investment = require('./InvestmentService');

module.exports.addBusinessActivity = function addBusinessActivity (req, res, next) {
  Investment.addBusinessActivity(req.swagger.params, res, next);
};

module.exports.createInvestment = function createInvestment (req, res, next) {
  Investment.createInvestment(req.swagger.params, res, next);
};

module.exports.getinvestment = function getinvestment (req, res, next) {
  Investment.getinvestment(req.swagger.params, res, next);
};

module.exports.getinvestmentrequirements = function getinvestmentrequirements (req, res, next) {
  Investment.getinvestmentrequirements(req.swagger.params, res, next);
};

module.exports.getinvestmentteam = function getinvestmentteam (req, res, next) {
  Investment.getinvestmentteam(req.swagger.params, res, next);
};

module.exports.getinvestmentvalue = function getinvestmentvalue (req, res, next) {
  Investment.getinvestmentvalue(req.swagger.params, res, next);
};

module.exports.getprojectsforcompany = function getprojectsforcompany (req, res, next) {
  Investment.getprojectsforcompany(req.swagger.params, res, next);
};

module.exports.metadataBusinessActibvity = function metadataBusinessActibvity (req, res, next) {
  Investment.metadataBusinessActibvity(req.swagger.params, res, next);
};

module.exports.patchInvestment = function patchInvestment (req, res, next) {
  Investment.patchInvestment(req.swagger.params, res, next);
};

module.exports.patchInvestmentRequirements = function patchInvestmentRequirements (req, res, next) {
  Investment.patchInvestmentRequirements(req.swagger.params, res, next);
};

module.exports.patchInvestmentTeam = function patchInvestmentTeam (req, res, next) {
  Investment.patchInvestmentTeam(req.swagger.params, res, next);
};

module.exports.patchInvestmentValue = function patchInvestmentValue (req, res, next) {
  Investment.patchInvestmentValue(req.swagger.params, res, next);
};
