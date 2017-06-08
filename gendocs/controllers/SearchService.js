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
    "registered_address_postcode" : "AB1 2CD",
    "archived" : true,
    "archived_reason" : "Company dissolved",
    "account_manager" : {
      "last_name" : "Adviser",
      "id" : "d290f1ee-6c54-4b01-90e6-d701748f0851",
      "first_name" : "Annette"
    },
    "headquarter_type" : {
      "name" : "HeadquarterType",
      "id" : "046b6c7f-0b8a-43b9-b35d-6489e6daee91"
    },
    "export_to_countries" : "",
    "trading_address_town" : "ANYTOWN",
    "children" : "",
    "investment_projects_invested_in" : {
      "count" : 30,
      "results" : [ {
        "name" : "Marriot Hotels - New hotel in Manchester",
        "project_code" : "P-01234567",
        "id" : "d290f1ee-6c54-4b01-90e6-d701748f0851"
      } ]
    },
    "business_type" : {
      "name" : "Limited Company",
      "id" : "d290f1ee-6c54-4b01-90e6-d701748f0851"
    },
    "one_list_account_owner" : "",
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
    "uk_region" : {
      "name" : "South East",
      "id" : "d290f1ee-6c54-4b01-90e6-d701748f0851"
    },
    "website" : "http://www.example.com",
    "trading_address_2" : "AREA",
    "trading_address_1" : "123 HIGH STREET",
    "future_interest_countries" : "",
    "investment_projects_invested_in_count" : 5,
    "registered_address_1" : "123 HIGH STREET",
    "registered_address_2" : "AREA",
    "registered_address_town" : "ANYTOWN",
    "classification" : {
      "name" : "D - Post managed",
      "id" : "d290f1ee-6c54-4b01-90e6-d701748f0851"
    },
    "companies_house_data" : {
      "company_category" : "Private Limited Company",
      "registered_address_1" : "123 HIGH STREET",
      "registered_address_2" : "AREA",
      "registered_address_county" : "ANYSHIRE",
      "registered_address_town" : "ANYTOWN",
      "uri" : "http://www.example.com",
      "registered_address_postcode" : "AB1 2CD",
      "company_number" : "SCO-123456",
      "name" : "aeiou",
      "company_status" : "Active - Proposal to Strike off",
      "sic_code_4" : "96030 - Funeral and related activities",
      "sic_code_2" : "52211 - Operation of rail freight terminals",
      "sic_code_3" : "71111 - Architectural activities",
      "incorporation_date" : "2014-07-23T10:36:04.000+0000",
      "sic_code_1" : "20600 - Manufacture of man-made fibres"
    },
    "registered_address_country" : {
      "name" : "France",
      "id" : "d290f1ee-6c54-4b01-90e6-d701748f0851"
    },
    "created_on" : "2014-07-23T10:36:04.000+0000",
    "trading_name" : "Example Trading",
    "name" : "EXAMPLE Ltd",
    "contacts" : ""
  } ],
  "count" : 30,
  "aggregates" : [ {
    "count" : 3015,
    "entity" : "Events"
  } ],
  "investments" : [ {
    "estimated_land_date" : "2017-05-01",
    "description" : "Marriott hotels wishes to open in a new part of Manchester under-served by its existing hotels",
    "approved_landed" : true,
    "referral_source_activity_event" : "Moscow Hotels Expo 2017",
    "fdi_type" : {
      "name" : "Merger",
      "id" : "d290f1ee-6c54-4b01-90e6-d701748f0851"
    },
    "operations_commenced_documents" : "",
    "not_shareable_reason" : "Company has asked us to keep project quiet until official announcement",
    "approved_high_value" : true,
    "referral_source_activity_marketing" : {
      "name" : "Press advertisement",
      "id" : "d290f1ee-6c54-4b01-90e6-d701748f0851"
    },
    "client_contacts" : "",
    "client_relationship_manager" : "",
    "id" : "d290f1ee-6c54-4b01-90e6-d701748f0851",
    "approved_non_fdi" : true,
    "sector" : "",
    "fdi_type_documents" : "",
    "approved_commitment_to_invest" : true,
    "phase" : {
      "name" : "Active",
      "id" : "d290f1ee-6c54-4b01-90e6-d701748f0851"
    },
    "approved_fdi" : true,
    "referral_source_activity_website" : {
      "name" : "DIT Regional Website",
      "id" : "d290f1ee-6c54-4b01-90e6-d701748f0851"
    },
    "actual_land_date" : "2018-11-01",
    "investor_company" : "",
    "project_code" : "P-01234567",
    "referral_source_activity" : {
      "name" : "Cold Call",
      "id" : "d290f1ee-6c54-4b01-90e6-d701748f0851"
    },
    "project_shareable" : true,
    "referral_source_advisor" : "",
    "nda_signed" : false,
    "investment_type" : {
      "name" : "FDI",
      "id" : "d290f1ee-6c54-4b01-90e6-d701748f0851"
    },
    "non_fdi_type" : {
      "name" : "Advanced Engineering Supply Chain",
      "id" : "d290f1ee-6c54-4b01-90e6-d701748f0851"
    },
    "name" : "Marriot Hotels - New hotel in Manchester",
    "approved_good_value" : true,
    "actual_land_date_documents" : "",
    "business_activities" : "",
    "intermediate_company" : ""
  } ],
  "contacts" : [ {
    "archived_by" : "",
    "notes" : "Notes",
    "address_1" : "1 Woodlane",
    "address_2" : "1 Woodlane",
    "telephone_number" : "12345678",
    "address_3" : "1 Woodlane",
    "address_4" : "1 Woodlane",
    "title" : {
      "name" : "Mr.",
      "id" : "046b6c7f-0b8a-43b9-b35d-6489e6daee91"
    },
    "telephone_alternative" : "Telegraph",
    "archived" : true,
    "archived_reason" : "Archived Reason",
    "contactable_by_phone" : true,
    "advisor" : "",
    "contactable_by_dit" : true,
    "company" : "",
    "id" : "d290f1ee-6c54-4b01-90e6-d701748f0851",
    "first_name" : "Alison",
    "job_title" : "Director",
    "email" : "valid@email.address",
    "address_country" : "",
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
    "registered_address_postcode" : "AB1 2CD",
    "archived" : true,
    "archived_reason" : "Company dissolved",
    "account_manager" : {
      "last_name" : "Adviser",
      "id" : "d290f1ee-6c54-4b01-90e6-d701748f0851",
      "first_name" : "Annette"
    },
    "headquarter_type" : {
      "name" : "HeadquarterType",
      "id" : "046b6c7f-0b8a-43b9-b35d-6489e6daee91"
    },
    "export_to_countries" : "",
    "trading_address_town" : "ANYTOWN",
    "children" : "",
    "investment_projects_invested_in" : {
      "count" : 30,
      "results" : [ {
        "name" : "Marriot Hotels - New hotel in Manchester",
        "project_code" : "P-01234567",
        "id" : "d290f1ee-6c54-4b01-90e6-d701748f0851"
      } ]
    },
    "business_type" : {
      "name" : "Limited Company",
      "id" : "d290f1ee-6c54-4b01-90e6-d701748f0851"
    },
    "one_list_account_owner" : "",
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
    "uk_region" : {
      "name" : "South East",
      "id" : "d290f1ee-6c54-4b01-90e6-d701748f0851"
    },
    "website" : "http://www.example.com",
    "trading_address_2" : "AREA",
    "trading_address_1" : "123 HIGH STREET",
    "future_interest_countries" : "",
    "investment_projects_invested_in_count" : 5,
    "registered_address_1" : "123 HIGH STREET",
    "registered_address_2" : "AREA",
    "registered_address_town" : "ANYTOWN",
    "classification" : {
      "name" : "D - Post managed",
      "id" : "d290f1ee-6c54-4b01-90e6-d701748f0851"
    },
    "companies_house_data" : {
      "company_category" : "Private Limited Company",
      "registered_address_1" : "123 HIGH STREET",
      "registered_address_2" : "AREA",
      "registered_address_county" : "ANYSHIRE",
      "registered_address_town" : "ANYTOWN",
      "uri" : "http://www.example.com",
      "registered_address_postcode" : "AB1 2CD",
      "company_number" : "SCO-123456",
      "name" : "aeiou",
      "company_status" : "Active - Proposal to Strike off",
      "sic_code_4" : "96030 - Funeral and related activities",
      "sic_code_2" : "52211 - Operation of rail freight terminals",
      "sic_code_3" : "71111 - Architectural activities",
      "incorporation_date" : "2014-07-23T10:36:04.000+0000",
      "sic_code_1" : "20600 - Manufacture of man-made fibres"
    },
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
  "count" : 30,
  "results" : [ {
    "archived_by" : "",
    "notes" : "Notes",
    "address_1" : "1 Woodlane",
    "address_2" : "1 Woodlane",
    "telephone_number" : "12345678",
    "address_3" : "1 Woodlane",
    "address_4" : "1 Woodlane",
    "title" : {
      "name" : "Mr.",
      "id" : "046b6c7f-0b8a-43b9-b35d-6489e6daee91"
    },
    "telephone_alternative" : "Telegraph",
    "archived" : true,
    "archived_reason" : "Archived Reason",
    "contactable_by_phone" : true,
    "advisor" : {
      "last_name" : "Adviser",
      "id" : "d290f1ee-6c54-4b01-90e6-d701748f0851",
      "first_name" : "Annette"
    },
    "contactable_by_dit" : true,
    "company" : {
      "name" : "Company Registered Name Ltd",
      "id" : "046b6c7f-0b8a-43b9-b35d-6489e6daee91"
    },
    "id" : "d290f1ee-6c54-4b01-90e6-d701748f0851",
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
  } ]
};
  if (Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  } else {
    res.end();
  }
}

exports.datahubSearch_2 = function(args, res, next) {
  /**
   * Basic search endpoint for Data Hub
   * Top level search for datahub
   *
   * filter InvestmentFilteredSearch 
   * returns InvestmentSearchResults
   **/
  var examples = {};
  examples['application/json'] = {
  "count" : 30,
  "results" : [ {
    "estimated_land_date" : "2017-05-01",
    "description" : "Marriott hotels wishes to open in a new part of Manchester under-served by its existing hotels",
    "approved_landed" : true,
    "referral_source_activity_event" : "Moscow Hotels Expo 2017",
    "fdi_type" : {
      "name" : "Merger",
      "id" : "d290f1ee-6c54-4b01-90e6-d701748f0851"
    },
    "operations_commenced_documents" : "",
    "not_shareable_reason" : "Company has asked us to keep project quiet until official announcement",
    "approved_high_value" : true,
    "referral_source_activity_marketing" : {
      "name" : "Press advertisement",
      "id" : "d290f1ee-6c54-4b01-90e6-d701748f0851"
    },
    "client_contacts" : "",
    "client_relationship_manager" : {
      "last_name" : "Adviser",
      "id" : "d290f1ee-6c54-4b01-90e6-d701748f0851",
      "first_name" : "Annette"
    },
    "id" : "d290f1ee-6c54-4b01-90e6-d701748f0851",
    "approved_non_fdi" : true,
    "sector" : {
      "name" : "Advanced Engineering",
      "id" : "d290f1ee-6c54-4b01-90e6-d701748f0851"
    },
    "fdi_type_documents" : "",
    "approved_commitment_to_invest" : true,
    "phase" : {
      "name" : "Active",
      "id" : "d290f1ee-6c54-4b01-90e6-d701748f0851"
    },
    "approved_fdi" : true,
    "referral_source_activity_website" : {
      "name" : "DIT Regional Website",
      "id" : "d290f1ee-6c54-4b01-90e6-d701748f0851"
    },
    "actual_land_date" : "2018-11-01",
    "investor_company" : "",
    "project_code" : "P-01234567",
    "referral_source_activity" : {
      "name" : "Cold Call",
      "id" : "d290f1ee-6c54-4b01-90e6-d701748f0851"
    },
    "project_shareable" : true,
    "referral_source_advisor" : "",
    "nda_signed" : false,
    "investment_type" : {
      "name" : "FDI",
      "id" : "d290f1ee-6c54-4b01-90e6-d701748f0851"
    },
    "non_fdi_type" : {
      "name" : "Advanced Engineering Supply Chain",
      "id" : "d290f1ee-6c54-4b01-90e6-d701748f0851"
    },
    "name" : "Marriot Hotels - New hotel in Manchester",
    "approved_good_value" : true,
    "actual_land_date_documents" : "",
    "business_activities" : "",
    "intermediate_company" : {
      "name" : "Company Registered Name Ltd",
      "id" : "046b6c7f-0b8a-43b9-b35d-6489e6daee91"
    }
  } ]
};
  if (Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  } else {
    res.end();
  }
}

