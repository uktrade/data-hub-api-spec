'use strict';

exports.addCompany = function(args, res, next) {
  /**
   * adds a Data Hub company
   * Adds a Data Hub company from a Companies House company
   *
   * company Company Company to add
   * no response value expected for this operation
   **/
  res.end();
}

exports.getchcompany = function(args, res, next) {
  /**
   * Returns a Companies House company from the Data Hub repository
   * Passing in a Companies House company number returns a Data Hub Companies House company object 
   *
   * company_number String Companies House number
   * returns CompaniesHouseCompany
   **/
  var examples = {};
  examples['application/json'] = {
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
};
  if (Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  } else {
    res.end();
  }
}

exports.getcompany = function(args, res, next) {
  /**
   * Returns a company from the Data Hub repository
   * Passing in a company UUID returns a Data Hub company object 
   *
   * companyId UUID UUID for a Data Hub company
   * returns Company
   **/
  var examples = {};
  examples['application/json'] = {
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
    "firstname" : "Alison",
    "id" : "d290f1ee-6c54-4b01-90e6-d701748f0851",
    "lastname" : "Advisor"
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
};
  if (Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  } else {
    res.end();
  }
}

exports.updateCompany = function(args, res, next) {
  /**
   * updates a company, creating a new one if not found
   * Updates an existing company
   *
   * companyId String UUID for a Data Hub company
   * company Company Company data to update
   * archived Boolean Update the company's status to Archived (optional)
   * no response value expected for this operation
   **/
  res.end();
}

