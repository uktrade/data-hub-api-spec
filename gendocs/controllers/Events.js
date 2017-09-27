'use strict';

var url = require('url');

var Events = require('./EventsService');

module.exports.createEvent = function createEvent (req, res, next) {
  Events.createEvent(req.swagger.params, res, next);
};

module.exports.getEvent = function getEvent (req, res, next) {
  Events.getEvent(req.swagger.params, res, next);
};

module.exports.getEvents = function getEvents (req, res, next) {
  Events.getEvents(req.swagger.params, res, next);
};

module.exports.patchEvent = function patchEvent (req, res, next) {
  Events.patchEvent(req.swagger.params, res, next);
};
