'use strict';

exports.createEvent = function(args, res, next) {
  /**
   * creates an event and inserts into the data hub database
   *
   * event Event The event to create
   * no response value expected for this operation
   **/
  res.end();
}

exports.getEvent = function(args, res, next) {
  /**
   * returns a single event
   *
   * eventId UUID UUID for a Data Hub event object
   * returns Event
   **/
  var examples = {};
  examples['application/json'] = {
  "end_date" : "2017-11-15",
  "uk_region" : {
    "name" : "South East",
    "id" : "d290f1ee-6c54-4b01-90e6-d701748f0851"
  },
  "notes" : "Webinar for new exporters",
  "teams" : [ {
    "name" : "Sector Advisory Services",
    "id" : "d290f1ee-6c54-4b01-90e6-d701748f0851"
  } ],
  "address_1" : "Birmingham Expo Centre",
  "address_country" : {
    "name" : "France",
    "id" : "d290f1ee-6c54-4b01-90e6-d701748f0851"
  },
  "related_programmes" : "",
  "address_2" : "Edgbaston Road",
  "lead_team" : "",
  "address_postcode" : "BN1 1AA",
  "location_type" : {
    "name" : "Post",
    "id" : "d290f1ee-6c54-4b01-90e6-d701748f0851"
  },
  "address_county" : "West Midlands",
  "organiser" : {
    "name" : "Annette Adviser",
    "last_name" : "Adviser",
    "id" : "d290f1ee-6c54-4b01-90e6-d701748f0851",
    "first_name" : "Annette"
  },
  "event_type" : {
    "name" : "Seminar",
    "id" : "d290f1ee-6c54-4b01-90e6-d701748f0851"
  },
  "service" : {
    "name" : "Investment – Services",
    "id" : "d290f1ee-6c54-4b01-90e6-d701748f0851"
  },
  "name" : "New York fashion webinar",
  "id" : "d290f1ee-6c54-4b01-90e6-d701748f0851",
  "address_town" : "Birmingham",
  "start_date" : "2017-11-15"
};
  if (Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  } else {
    res.end();
  }
}

exports.getEvents = function(args, res, next) {
  /**
   * returns a list of active events
   *
   * returns EventList
   **/
  var examples = {};
  examples['application/json'] = {
  "count" : 30,
  "results" : [ {
    "end_date" : "2017-11-15",
    "uk_region" : {
      "name" : "South East",
      "id" : "d290f1ee-6c54-4b01-90e6-d701748f0851"
    },
    "notes" : "Webinar for new exporters",
    "teams" : [ {
      "name" : "Sector Advisory Services",
      "id" : "d290f1ee-6c54-4b01-90e6-d701748f0851"
    } ],
    "address_1" : "Birmingham Expo Centre",
    "address_country" : {
      "name" : "France",
      "id" : "d290f1ee-6c54-4b01-90e6-d701748f0851"
    },
    "related_programmes" : "",
    "address_2" : "Edgbaston Road",
    "lead_team" : "",
    "address_postcode" : "BN1 1AA",
    "location_type" : {
      "name" : "Post",
      "id" : "d290f1ee-6c54-4b01-90e6-d701748f0851"
    },
    "address_county" : "West Midlands",
    "organiser" : {
      "name" : "Annette Adviser",
      "last_name" : "Adviser",
      "id" : "d290f1ee-6c54-4b01-90e6-d701748f0851",
      "first_name" : "Annette"
    },
    "event_type" : {
      "name" : "Seminar",
      "id" : "d290f1ee-6c54-4b01-90e6-d701748f0851"
    },
    "service" : {
      "name" : "Investment – Services",
      "id" : "d290f1ee-6c54-4b01-90e6-d701748f0851"
    },
    "name" : "New York fashion webinar",
    "id" : "d290f1ee-6c54-4b01-90e6-d701748f0851",
    "address_town" : "Birmingham",
    "start_date" : "2017-11-15"
  } ]
};
  if (Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  } else {
    res.end();
  }
}

exports.patchEvent = function(args, res, next) {
  /**
   * updates an event in the data hub database
   *
   * eventId UUID UUID for a Data Hub event object
   * event Event The event data to update
   * no response value expected for this operation
   **/
  res.end();
}

