'use strict';

var url = require('url');

var Interaction = require('./InteractionService');

module.exports.createInteraction = function createInteraction (req, res, next) {
  Interaction.createInteraction(req.swagger.params, res, next);
};

module.exports.getAllInteractions = function getAllInteractions (req, res, next) {
  Interaction.getAllInteractions(req.swagger.params, res, next);
};

module.exports.getInteraction = function getInteraction (req, res, next) {
  Interaction.getInteraction(req.swagger.params, res, next);
};

module.exports.updateInteraction = function updateInteraction (req, res, next) {
  Interaction.updateInteraction(req.swagger.params, res, next);
};
