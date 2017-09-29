'use strict';

exports.createInteraction = function(args, res, next) {
  /**
   * Creates an interaction
   * Adds an interaction against a company, contact and/or investment project
   *
   * interaction Interaction Interaction data
   * no response value expected for this operation
   **/
  res.end();
}

exports.getAllInteractions = function(args, res, next) {
  /**
   * Gets a list of interactions in the system
   * Gets a list of interactions, optionally filtered by company, contact or investment project
   *
   * _class String Interaction class (interaction or service_delivery) (optional)
   * company_id UUID UUID of a company (optional)
   * contact_id UUID UUID of a contact (optional)
   * investment_project_id UUID UUID of a investment project (optional)
   * offset Integer Pagination parameter (optional)
   * limit Integer Pagination parameter (optional)
   * returns InteractionList
   **/
  var examples = {};
  examples['application/json'] = {
  "count" : 30,
  "results" : [ {
    "date" : "2020-01-01T00:00:00.000+0000",
    "communication_channel" : {
      "name" : "Face to face",
      "id" : "d290f1ee-6c54-4b01-90e6-d701748f0851"
    },
    "dit_adviser" : {
      "name" : "Annette Adviser",
      "last_name" : "Adviser",
      "id" : "d290f1ee-6c54-4b01-90e6-d701748f0851",
      "first_name" : "Annette"
    },
    "investment_project" : {
      "name" : "Marriot Hotels - New hotel in Manchester",
      "project_code" : "P-01234567",
      "id" : "d290f1ee-6c54-4b01-90e6-d701748f0851"
    },
    "notes" : "null",
    "subject" : "Exporting exhibition meeting",
    "dit_team" : {
      "name" : "Investment Services Team",
      "id" : "d290f1ee-6c54-4b01-90e6-d701748f0851"
    },
    "service" : {
      "name" : "Investment – Services",
      "id" : "d290f1ee-6c54-4b01-90e6-d701748f0851"
    },
    "contact" : {
      "name" : "George Theo",
      "id" : "d290f1ee-6c54-4b01-90e6-d701748f0851"
    },
    "company" : {
      "name" : "Company Registered Name Ltd",
      "id" : "046b6c7f-0b8a-43b9-b35d-6489e6daee91"
    },
    "id" : "d290f1ee-6c54-4b01-90e6-d701748f0851",
    "event" : {
      "name" : "New York fashion webinar",
      "id" : "d290f1ee-6c54-4b01-90e6-d701748f0851"
    },
    "class" : "aeiou"
  } ]
};
  if (Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  } else {
    res.end();
  }
}

exports.getInteraction = function(args, res, next) {
  /**
   * Gets an individual interaction
   * Gets an individual interaction given an interaction ID 
   *
   * interactionId UUID An interaction UUID
   * returns Interaction
   **/
  var examples = {};
  examples['application/json'] = {
  "date" : "2020-01-01T00:00:00.000+0000",
  "communication_channel" : {
    "name" : "Face to face",
    "id" : "d290f1ee-6c54-4b01-90e6-d701748f0851"
  },
  "dit_adviser" : {
    "name" : "Annette Adviser",
    "last_name" : "Adviser",
    "id" : "d290f1ee-6c54-4b01-90e6-d701748f0851",
    "first_name" : "Annette"
  },
  "investment_project" : {
    "name" : "Marriot Hotels - New hotel in Manchester",
    "project_code" : "P-01234567",
    "id" : "d290f1ee-6c54-4b01-90e6-d701748f0851"
  },
  "notes" : "null",
  "subject" : "Exporting exhibition meeting",
  "dit_team" : {
    "name" : "Investment Services Team",
    "id" : "d290f1ee-6c54-4b01-90e6-d701748f0851"
  },
  "service" : {
    "name" : "Investment – Services",
    "id" : "d290f1ee-6c54-4b01-90e6-d701748f0851"
  },
  "contact" : {
    "name" : "George Theo",
    "id" : "d290f1ee-6c54-4b01-90e6-d701748f0851"
  },
  "company" : {
    "name" : "Company Registered Name Ltd",
    "id" : "046b6c7f-0b8a-43b9-b35d-6489e6daee91"
  },
  "id" : "d290f1ee-6c54-4b01-90e6-d701748f0851",
  "event" : {
    "name" : "New York fashion webinar",
    "id" : "d290f1ee-6c54-4b01-90e6-d701748f0851"
  },
  "class" : "aeiou"
};
  if (Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  } else {
    res.end();
  }
}

exports.updateInteraction = function(args, res, next) {
  /**
   * Updates an interaction
   * Updates an existing interaction, only changing fields specified in the request
   *
   * interactionId String UUID for a Data Hub interaction
   * interaction Interaction Interaction data to update
   * no response value expected for this operation
   **/
  res.end();
}

