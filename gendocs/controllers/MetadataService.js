'use strict';

exports.metadataBusinessActivity = function(args, res, next) {
  /**
   * retrieves Business Activity metadata array
   *
   * returns BusinessActivities
   **/
  var examples = {};
  examples['application/json'] = "";
  if (Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  } else {
    res.end();
  }
}

exports.metadataDocumentableFields = function(args, res, next) {
  /**
   * retrieves the list of fields which require documents
   *
   * returns DocumentableFields
   **/
  var examples = {};
  examples['application/json'] = "";
  if (Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  } else {
    res.end();
  }
}

