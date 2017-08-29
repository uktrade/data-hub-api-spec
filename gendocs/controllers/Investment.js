'use strict';

var url = require('url');

var Investment = require('./InvestmentService');

module.exports.addInvestmentDocument = function addInvestmentDocument (req, res, next) {
  Investment.addInvestmentDocument(req.swagger.params, res, next);
};

module.exports.addInvestmentDocument_1 = function addInvestmentDocument_1 (req, res, next) {
  Investment.addInvestmentDocument_1(req.swagger.params, res, next);
};

module.exports.addInvestmentTeamMember = function addInvestmentTeamMember (req, res, next) {
  Investment.addInvestmentTeamMember(req.swagger.params, res, next);
};

module.exports.archiveInvestment = function archiveInvestment (req, res, next) {
  Investment.archiveInvestment(req.swagger.params, res, next);
};

module.exports.createInvestment = function createInvestment (req, res, next) {
  Investment.createInvestment(req.swagger.params, res, next);
};

module.exports.getInvestmentAudit = function getInvestmentAudit (req, res, next) {
  Investment.getInvestmentAudit(req.swagger.params, res, next);
};

module.exports.getInvestmentDocument = function getInvestmentDocument (req, res, next) {
  Investment.getInvestmentDocument(req.swagger.params, res, next);
};

module.exports.getInvestmentDocument_2 = function getInvestmentDocument_2 (req, res, next) {
  Investment.getInvestmentDocument_2(req.swagger.params, res, next);
};

module.exports.getInvestmentDocuments = function getInvestmentDocuments (req, res, next) {
  Investment.getInvestmentDocuments(req.swagger.params, res, next);
};

module.exports.getInvestmentTeamMember = function getInvestmentTeamMember (req, res, next) {
  Investment.getInvestmentTeamMember(req.swagger.params, res, next);
};

module.exports.getinvestment = function getinvestment (req, res, next) {
  Investment.getinvestment(req.swagger.params, res, next);
};

module.exports.getprojectsforcompany = function getprojectsforcompany (req, res, next) {
  Investment.getprojectsforcompany(req.swagger.params, res, next);
};

module.exports.getprojectssincetime = function getprojectssincetime (req, res, next) {
  Investment.getprojectssincetime(req.swagger.params, res, next);
};

module.exports.metadataBusinessActivity = function metadataBusinessActivity (req, res, next) {
  Investment.metadataBusinessActivity(req.swagger.params, res, next);
};

module.exports.metadataDocumentableFields = function metadataDocumentableFields (req, res, next) {
  Investment.metadataDocumentableFields(req.swagger.params, res, next);
};

module.exports.patchInvestment = function patchInvestment (req, res, next) {
  Investment.patchInvestment(req.swagger.params, res, next);
};

module.exports.removeAllInvestmentTeamMember = function removeAllInvestmentTeamMember (req, res, next) {
  Investment.removeAllInvestmentTeamMember(req.swagger.params, res, next);
};

module.exports.removeInvestmentTeamMember = function removeInvestmentTeamMember (req, res, next) {
  Investment.removeInvestmentTeamMember(req.swagger.params, res, next);
};

module.exports.unarchiveInvestment = function unarchiveInvestment (req, res, next) {
  Investment.unarchiveInvestment(req.swagger.params, res, next);
};

module.exports.updateInvestmentTeamMember = function updateInvestmentTeamMember (req, res, next) {
  Investment.updateInvestmentTeamMember(req.swagger.params, res, next);
};
