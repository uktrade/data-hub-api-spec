'use strict';

var url = require('url');

var Contact = require('./ContactService');

module.exports.archiveContact = function archiveContact (req, res, next) {
  Contact.archiveContact(req.swagger.params, res, next);
};

module.exports.createContact = function createContact (req, res, next) {
  Contact.createContact(req.swagger.params, res, next);
};

module.exports.getAllContacts = function getAllContacts (req, res, next) {
  Contact.getAllContacts(req.swagger.params, res, next);
};

module.exports.getContact = function getContact (req, res, next) {
  Contact.getContact(req.swagger.params, res, next);
};

module.exports.getContactAudit = function getContactAudit (req, res, next) {
  Contact.getContactAudit(req.swagger.params, res, next);
};

module.exports.unarchiveContact = function unarchiveContact (req, res, next) {
  Contact.unarchiveContact(req.swagger.params, res, next);
};

module.exports.updateContact = function updateContact (req, res, next) {
  Contact.updateContact(req.swagger.params, res, next);
};
