'use strict';

exports.datahubSearch = function(args, res, next) {
  /**
   * Basic search endpoint for Data Hub
   * Top level search for datahub
   *
   * term String phrase to search for
   * entity String which top level entity to search (optional)
   * returns AggregateSearchResults
   **/
  var examples = {};
  examples['application/json'] = {
  "next" : "http://{HOST}/v3/search/company?query={query_text}&limit=10&offset=5",
  "companies" : [ {
    "archived_by" : "",
    "parent" : {
      "name" : "Company Registered Name Ltd",
      "id" : "046b6c7f-0b8a-43b9-b35d-6489e6daee91"
    },
    "trading_address_country" : "",
    "employee_range" : {
      "name" : "10 - 100",
      "id" : "d290f1ee-6c54-4b01-90e6-d701748f0851"
    },
    "archived_on" : "2014-07-23T10:36:04.000+0000",
    "description" : "MANUFACTURER OF WIDGETS AND DOODADS",
    "registered_address_county" : "ANYSHIRE",
    "trading_address_postcode" : "AB1 2CD",
    "interactions" : "",
    "registered_address_postcode" : "AB1 2CD",
    "archived" : true,
    "archived_reason" : "Company dissolved",
    "account_manager" : {
      "name" : "A N Advisor",
      "id" : "d290f1ee-6c54-4b01-90e6-d701748f0851"
    },
    "headquarter_type" : {
      "name" : "HeadquarterType",
      "id" : "046b6c7f-0b8a-43b9-b35d-6489e6daee91"
    },
    "export_to_countries" : "",
    "trading_address_town" : "ANYTOWN",
    "children" : "",
    "business_type" : {
      "name" : "Limited Company",
      "id" : "d290f1ee-6c54-4b01-90e6-d701748f0851"
    },
    "trading_address_county" : "ANYSHIRE",
    "uk_based" : true,
    "id" : "d290f1ee-6c54-4b01-90e6-d701748f0851",
    "sector" : {
      "name" : "Advanced Engineering",
      "id" : "d290f1ee-6c54-4b01-90e6-d701748f0851"
    },
    "turnover_range" : {
      "name" : "10 -100",
      "id" : "046b6c7f-0b8a-43b9-b35d-6489e6daee91"
    },
    "modified_on" : "2014-07-23T10:36:04.000+0000",
    "trading_address_4" : "SUBREGION",
    "trading_address_3" : "SUBTOWN",
    "uk_region" : {
      "name" : "South East",
      "id" : "d290f1ee-6c54-4b01-90e6-d701748f0851"
    },
    "website" : "http://www.example.com",
    "trading_address_2" : "AREA",
    "trading_address_1" : "123 HIGH STREET",
    "future_interest_countries" : "",
    "registered_address_1" : "123 HIGH STREET",
    "one_list_owner" : "",
    "registered_address_3" : "SUBTOWN",
    "registered_address_2" : "AREA",
    "registered_address_town" : "ANYTOWN",
    "classification" : {
      "name" : "D - Post managed",
      "id" : "d290f1ee-6c54-4b01-90e6-d701748f0851"
    },
    "companies_house_data" : {
      "company_number" : "SCO-123456",
      "id" : "d290f1ee-6c54-4b01-90e6-d701748f0851"
    },
    "registered_address_4" : "SUBREGION",
    "lead" : true,
    "registered_address_country" : {
      "name" : "France",
      "id" : "d290f1ee-6c54-4b01-90e6-d701748f0851"
    },
    "created_on" : "2014-07-23T10:36:04.000+0000",
    "trading_name" : "Example Trading",
    "name" : "EXAMPLE Ltd",
    "contacts" : ""
  } ],
  "previous" : "http://{HOST}/v3/search/company?query={query_text}&limit=10&offset=5",
  "count" : 30,
  "aggregates" : [ {
    "count" : 3015,
    "entity" : "Events"
  } ],
  "contacts" : [ {
    "last_name" : "Contact",
    "id" : "d290f1ee-6c54-4b01-90e6-d701748f0851",
    "first_name" : "Alison"
  } ]
};
  if (Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  } else {
    res.end();
  }
}

exports.datahubSearch_0 = function(args, res, next) {
  /**
   * Basic search endpoint for Data Hub
   * Top level search for datahub
   *
   * filter CompanyFilteredSearch 
   * returns CompanySearchResults
   **/
  var examples = {};
  examples['application/json'] = {
  "next" : "http://{HOST}/v3/search/company?query={query_text}&limit=10&offset=5",
  "previous" : "http://{HOST}/v3/search/company?query={query_text}&limit=10&offset=5",
  "count" : 30,
  "results" : [ {
    "archived_by" : "",
    "parent" : {
      "name" : "Company Registered Name Ltd",
      "id" : "046b6c7f-0b8a-43b9-b35d-6489e6daee91"
    },
    "trading_address_country" : "",
    "employee_range" : {
      "name" : "10 - 100",
      "id" : "d290f1ee-6c54-4b01-90e6-d701748f0851"
    },
    "archived_on" : "2014-07-23T10:36:04.000+0000",
    "description" : "MANUFACTURER OF WIDGETS AND DOODADS",
    "registered_address_county" : "ANYSHIRE",
    "trading_address_postcode" : "AB1 2CD",
    "interactions" : "",
    "registered_address_postcode" : "AB1 2CD",
    "archived" : true,
    "archived_reason" : "Company dissolved",
    "account_manager" : {
      "name" : "A N Advisor",
      "id" : "d290f1ee-6c54-4b01-90e6-d701748f0851"
    },
    "headquarter_type" : {
      "name" : "HeadquarterType",
      "id" : "046b6c7f-0b8a-43b9-b35d-6489e6daee91"
    },
    "export_to_countries" : "",
    "trading_address_town" : "ANYTOWN",
    "children" : "",
    "business_type" : {
      "name" : "Limited Company",
      "id" : "d290f1ee-6c54-4b01-90e6-d701748f0851"
    },
    "trading_address_county" : "ANYSHIRE",
    "uk_based" : true,
    "id" : "d290f1ee-6c54-4b01-90e6-d701748f0851",
    "sector" : {
      "name" : "Advanced Engineering",
      "id" : "d290f1ee-6c54-4b01-90e6-d701748f0851"
    },
    "turnover_range" : {
      "name" : "10 -100",
      "id" : "046b6c7f-0b8a-43b9-b35d-6489e6daee91"
    },
    "modified_on" : "2014-07-23T10:36:04.000+0000",
    "trading_address_4" : "SUBREGION",
    "trading_address_3" : "SUBTOWN",
    "uk_region" : {
      "name" : "South East",
      "id" : "d290f1ee-6c54-4b01-90e6-d701748f0851"
    },
    "website" : "http://www.example.com",
    "trading_address_2" : "AREA",
    "trading_address_1" : "123 HIGH STREET",
    "future_interest_countries" : "",
    "registered_address_1" : "123 HIGH STREET",
    "one_list_owner" : "",
    "registered_address_3" : "SUBTOWN",
    "registered_address_2" : "AREA",
    "registered_address_town" : "ANYTOWN",
    "classification" : {
      "name" : "D - Post managed",
      "id" : "d290f1ee-6c54-4b01-90e6-d701748f0851"
    },
    "companies_house_data" : {
      "company_number" : "SCO-123456",
      "id" : "d290f1ee-6c54-4b01-90e6-d701748f0851"
    },
    "registered_address_4" : "SUBREGION",
    "lead" : true,
    "registered_address_country" : {
      "name" : "France",
      "id" : "d290f1ee-6c54-4b01-90e6-d701748f0851"
    },
    "created_on" : "2014-07-23T10:36:04.000+0000",
    "trading_name" : "Example Trading",
    "name" : "EXAMPLE Ltd",
    "contacts" : ""
  } ]
};
  if (Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  } else {
    res.end();
  }
}

exports.datahubSearch_1 = function(args, res, next) {
  /**
   * Basic search endpoint for Data Hub
   * Top level search for datahub
   *
   * filter ContactFilteredSearch 
   * returns ContactSearchResults
   **/
  var examples = {};
  examples['application/json'] = {
  "next" : "http://{HOST}/v3/search/contact?query={query_text}&limit=10&offset=5",
  "previous" : "http://{HOST}/v3/search/contact?query={query_text}&limit=10&offset=5",
  "count" : 30,
  "results" : [ {
    "archived_by" : "",
    "parent" : {
      "name" : "Company Registered Name Ltd",
      "id" : "046b6c7f-0b8a-43b9-b35d-6489e6daee91"
    },
    "trading_address_country" : "",
    "employee_range" : {
      "name" : "10 - 100",
      "id" : "d290f1ee-6c54-4b01-90e6-d701748f0851"
    },
    "archived_on" : "2014-07-23T10:36:04.000+0000",
    "description" : "MANUFACTURER OF WIDGETS AND DOODADS",
    "registered_address_county" : "ANYSHIRE",
    "trading_address_postcode" : "AB1 2CD",
    "interactions" : "",
    "registered_address_postcode" : "AB1 2CD",
    "archived" : true,
    "archived_reason" : "Company dissolved",
    "account_manager" : {
      "name" : "A N Advisor",
      "id" : "d290f1ee-6c54-4b01-90e6-d701748f0851"
    },
    "headquarter_type" : {
      "name" : "HeadquarterType",
      "id" : "046b6c7f-0b8a-43b9-b35d-6489e6daee91"
    },
    "export_to_countries" : "",
    "trading_address_town" : "ANYTOWN",
    "children" : "",
    "business_type" : {
      "name" : "Limited Company",
      "id" : "d290f1ee-6c54-4b01-90e6-d701748f0851"
    },
    "trading_address_county" : "ANYSHIRE",
    "uk_based" : true,
    "id" : "d290f1ee-6c54-4b01-90e6-d701748f0851",
    "sector" : {
      "name" : "Advanced Engineering",
      "id" : "d290f1ee-6c54-4b01-90e6-d701748f0851"
    },
    "turnover_range" : {
      "name" : "10 -100",
      "id" : "046b6c7f-0b8a-43b9-b35d-6489e6daee91"
    },
    "modified_on" : "2014-07-23T10:36:04.000+0000",
    "trading_address_4" : "SUBREGION",
    "trading_address_3" : "SUBTOWN",
    "uk_region" : {
      "name" : "South East",
      "id" : "d290f1ee-6c54-4b01-90e6-d701748f0851"
    },
    "website" : "http://www.example.com",
    "trading_address_2" : "AREA",
    "trading_address_1" : "123 HIGH STREET",
    "future_interest_countries" : "",
    "registered_address_1" : "123 HIGH STREET",
    "one_list_owner" : "",
    "registered_address_3" : "SUBTOWN",
    "registered_address_2" : "AREA",
    "registered_address_town" : "ANYTOWN",
    "classification" : {
      "name" : "D - Post managed",
      "id" : "d290f1ee-6c54-4b01-90e6-d701748f0851"
    },
    "companies_house_data" : {
      "company_number" : "SCO-123456",
      "id" : "d290f1ee-6c54-4b01-90e6-d701748f0851"
    },
    "registered_address_4" : "SUBREGION",
    "lead" : true,
    "registered_address_country" : {
      "name" : "France",
      "id" : "d290f1ee-6c54-4b01-90e6-d701748f0851"
    },
    "created_on" : "2014-07-23T10:36:04.000+0000",
    "trading_name" : "Example Trading",
    "name" : "EXAMPLE Ltd",
    "contacts" : ""
  } ]
};
  if (Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  } else {
    res.end();
  }
}

