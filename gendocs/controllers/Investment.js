'use strict';

var url = require('url');

var Investment = require('./InvestmentService');

module.exports.addBusinessActivity = function addBusinessActivity (req, res, next) {
  Investment.addBusinessActivity(req.swagger.params, res, next);
};

module.exports.createInvestment = function createInvestment (req, res, next) {
  Investment.createInvestment(req.swagger.params, res, next);
};

module.exports.createInvestmentValue = function createInvestmentValue (req, res, next) {
  Investment.createInvestmentValue(req.swagger.params, res, next);
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

module.exports.patchInvestmentValue = function patchInvestmentValue (req, res, next) {
  Investment.patchInvestmentValue(req.swagger.params, res, next);
};

module.exports.updateInvestment = function updateInvestment (req, res, next) {
  Investment.updateInvestment(req.swagger.params, res, next);
};

module.exports.updateInvestmentRequirements = function updateInvestmentRequirements (req, res, next) {
  Investment.updateInvestmentRequirements(req.swagger.params, res, next);
};

module.exports.updateInvestmentTeam = function updateInvestmentTeam (req, res, next) {
  Investment.updateInvestmentTeam(req.swagger.params, res, next);
};

module.exports.updateInvestmentValue = function updateInvestmentValue (req, res, next) {
  Investment.updateInvestmentValue(req.swagger.params, res, next);
};
