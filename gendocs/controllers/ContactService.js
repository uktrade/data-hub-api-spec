'use strict';

exports.archiveContact = function(args, res, next) {
  /**
   * Archives a contact with a reason
   *
   * contactId UUID UUID of contact
   * body ArchiveReason 
   * no response value expected for this operation
   **/
  res.end();
}

exports.createContact = function(args, res, next) {
  /**
   * Creates a contact
   * Adds a Data Hub contact from a Companies House contact
   *
   * contact Contact Contact to add
   * no response value expected for this operation
   **/
  res.end();
}

exports.getAllContacts = function(args, res, next) {
  /**
   * Gets a list of contacts in the system
   * Gets a list of contacts, optionally filtered by company
   *
   * company_id UUID UUID of a company to filter results by (optional)
   * offset Integer Pagination parameter (optional)
   * limit Integer Pagination parameter (optional)
   * returns ContactList
   **/
  var examples = {};
  examples['application/json'] = {
  "count" : 30,
  "results" : ""
};
  if (Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  } else {
    res.end();
  }
}

exports.getContact = function(args, res, next) {
  /**
   * Gets a single contact
   * Passing in a contact UUID returns a Data Hub contact object 
   *
   * contactId UUID UUID for a Data Hub contact
   * returns Contact
   **/
  var examples = {};
  examples['application/json'] = {
  "archived_by" : "",
  "notes" : "Notes",
  "address_1" : "1 Woodlane",
  "address_2" : "1 Woodlane",
  "telephone_number" : "12345678",
  "title" : {
    "name" : "Mr",
    "id" : "046b6c7f-0b8a-43b9-b35d-6489e6daee91"
  },
  "telephone_alternative" : "Telegraph",
  "archived" : true,
  "archived_reason" : "Archived Reason",
  "contactable_by_phone" : true,
  "contactable_by_dit" : true,
  "company" : {
    "name" : "Company Registered Name Ltd",
    "id" : "046b6c7f-0b8a-43b9-b35d-6489e6daee91"
  },
  "id" : "d290f1ee-6c54-4b01-90e6-d701748f0851",
  "adviser" : {
    "name" : "Annette Adviser",
    "last_name" : "Adviser",
    "id" : "d290f1ee-6c54-4b01-90e6-d701748f0851",
    "first_name" : "Annette"
  },
  "first_name" : "Alison",
  "job_title" : "Director",
  "email" : "valid@email.address",
  "address_country" : {
    "name" : "France",
    "id" : "d290f1ee-6c54-4b01-90e6-d701748f0851"
  },
  "last_name" : "Contact",
  "address_postcode" : "ABC 123",
  "address_county" : "County",
  "telephone_countrycode" : "+44",
  "address_same_as_company" : true,
  "contactable_by_dit_partners" : true,
  "contactable_by_email" : true,
  "email_alternative" : "alternative@email.address",
  "address_town" : "London",
  "primary" : true
};
  if (Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  } else {
    res.end();
  }
}

exports.getContactAudit = function(args, res, next) {
  /**
   * Get audit log for a contact
   * Returns the audit log for a specified contact 
   *
   * contactId UUID UUID for a Data Hub contact
   * returns AuditItemList
   **/
  var examples = {};
  examples['application/json'] = {
  "results" : [ {
    "changes" : {
      "key" : [ "John" ]
    },
    "comment" : "Changed telephone_number.",
    "id" : 70,
    "user" : {
      "name" : "Annette Adviser",
      "last_name" : "Adviser",
      "id" : "d290f1ee-6c54-4b01-90e6-d701748f0851",
      "first_name" : "Annette"
    },
    "timestamp" : "2017-08-18T13:42:08.135+0000"
  } ]
};
  if (Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  } else {
    res.end();
  }
}

exports.unarchiveContact = function(args, res, next) {
  /**
   * Unarchives a contact
   *
   * contactId UUID UUID of contact
   * no response value expected for this operation
   **/
  res.end();
}

exports.updateContact = function(args, res, next) {
  /**
   * Updates a contact
   * Updates an existing contact, changing only the fields specified in the request
   *
   * contactId String UUID for a Data Hub contact
   * contact Contact Contact data to update
   * no response value expected for this operation
   **/
  res.end();
}

