'use strict';

exports.addInvestmentTeamMember = function(args, res, next) {
  /**
   * Adds a team member to an investment project
   *
   * investmentId UUID UUID of investment project
   * body InvestmentTeamMember 
   * no response value expected for this operation
   **/
  res.end();
}

exports.archiveCompany = function(args, res, next) {
  /**
   * Archives a company with a reason
   *
   * company_id UUID UUID of company
   * body ArchiveReason 
   * no response value expected for this operation
   **/
  res.end();
}

exports.archiveInvestment = function(args, res, next) {
  /**
   * Archives an investment project with a reason
   *
   * investmentId UUID UUID of investment project
   * body ArchiveReason 
   * no response value expected for this operation
   **/
  res.end();
}

exports.createInvestment = function(args, res, next) {
  /**
   * adds the initial stage of an investment project
   * Creates a new investment project within Data Hub
   *
   * investmentStageOne InvestmentProject Investment to create a skeleton for
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
      "project_assurance_advisor" : "",
      "project_code" : "P-01234567",
      "id" : "d290f1ee-6c54-4b01-90e6-d701748f0851",
      "project_manager" : "",
      "project_manager_team" : {
        "name" : "Sector Advisory Services",
        "id" : "d290f1ee-6c54-4b01-90e6-d701748f0851"
      },
      "project_assurance_team" : ""
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
};
  if (Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  } else {
    res.end();
  }
}

exports.getinvestment = function(args, res, next) {
  /**
   * Returns an investment project from the Data Hub repository
   * Passing in a UUID returns a Data Hub investment object 
   *
   * investmentId UUID UUID for a Data Hub investment project
   * returns InvestmentProject
   **/
  var examples = {};
  examples['application/json'] = {
  "estimated_land_date" : "2017-05-01",
  "total_investment" : 145000000,
  "client_requirements" : "Marriott are looking to expand into a city or town where they do not currently have a presence, or have room for expansion....",
  "approved_landed" : true,
  "non_fdi_r_and_d_budget" : false,
  "foreign_equity_investment_documents" : "",
  "operations_commenced_documents" : "",
  "not_shareable_reason" : "Company has asked us to keep project quiet until official announcement",
  "incomplete_fields" : [ "total_investment" ],
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
  "number_new_jobs" : 100,
  "approved_non_fdi" : true,
  "sector" : {
    "name" : "Advanced Engineering",
    "id" : "d290f1ee-6c54-4b01-90e6-d701748f0851"
  },
  "total_investment_documents" : "",
  "approved_commitment_to_invest" : true,
  "approved_fdi" : true,
  "actual_land_date" : "2018-11-01",
  "investor_company" : "",
  "address_postcode" : "SN1 1AA",
  "project_code" : "P-01234567",
  "referral_source_activity" : {
    "name" : "Cold Call",
    "id" : "d290f1ee-6c54-4b01-90e6-d701748f0851"
  },
  "r_and_d_budget_documents" : "",
  "priority" : "aeiou",
  "project_shareable" : true,
  "foreign_equity_investment" : 100000000,
  "export_revenue_documents" : "",
  "referral_source_advisor" : "",
  "nda_signed" : false,
  "investment_type" : {
    "name" : "FDI",
    "id" : "d290f1ee-6c54-4b01-90e6-d701748f0851"
  },
  "export_revenue" : false,
  "some_new_jobs" : false,
  "uk_company" : "",
  "name" : "Marriot Hotels - New hotel in Manchester",
  "average_salary_documents" : "",
  "client_considering_other_countries" : false,
  "value_complete" : false,
  "actual_land_date_documents" : "",
  "business_activities" : "",
  "requirements_complete" : false,
  "likelihood_of_landing" : 60,
  "description" : "Marriott hotels wishes to open in a new part of Manchester under-served by its existing hotels",
  "referral_source_activity_event" : "Moscow Hotels Expo 2017",
  "fdi_type" : {
    "name" : "Merger",
    "id" : "d290f1ee-6c54-4b01-90e6-d701748f0851"
  },
  "client_cannot_provide_total_investment" : false,
  "uk_region_locations" : "",
  "uk_company_decided" : false,
  "client_cannot_provide_foreign_investment" : false,
  "approved_high_value" : true,
  "strategic_drivers" : "",
  "team_complete" : false,
  "number_safeguarded_jobs_documents" : "",
  "r_and_d_budget" : false,
  "address_line_1" : "19 Railway Cuttings",
  "will_new_jobs_last_two_years" : false,
  "address_line_3" : "Surrey",
  "address_line_2" : "East Cheam",
  "fdi_type_documents" : "",
  "referral_source_activity_website" : {
    "name" : "DIT Regional Website",
    "id" : "d290f1ee-6c54-4b01-90e6-d701748f0851"
  },
  "number_safeguarded_jobs" : 100,
  "new_tech_to_uk_documents" : "",
  "average_salary" : {
    "name" : "£35,000",
    "id" : "d290f1ee-6c54-4b01-90e6-d701748f0851"
  },
  "fdi_value" : {
    "name" : "Good",
    "id" : "d290f1ee-6c54-4b01-90e6-d701748f0851"
  },
  "government_assistance" : false,
  "competitor_countries" : "",
  "stage" : {
    "name" : "Active",
    "id" : "d290f1ee-6c54-4b01-90e6-d701748f0851"
  },
  "new_tech_to_uk" : false,
  "non_fdi_type" : {
    "name" : "Advanced Engineering Supply Chain",
    "id" : "d290f1ee-6c54-4b01-90e6-d701748f0851"
  },
  "team_members" : "",
  "approved_good_value" : true,
  "intermediate_company" : {
    "name" : "Company Registered Name Ltd",
    "id" : "046b6c7f-0b8a-43b9-b35d-6489e6daee91"
  },
  "number_new_jobs_documents" : ""
};
  if (Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  } else {
    res.end();
  }
}

exports.getprojectsforcompany = function(args, res, next) {
  /**
   * returns a summary of investment projects for a company
   * Returns a summary list of investment projects per investor-company ID
   *
   * investor_company_id UUID UUID of a company with investment projects (optional)
   * offset Integer pagination parameter (optional)
   * limit Integer pagination parameter (optional)
   * returns InvestmentProjectsList
   **/
  var examples = {};
  examples['application/json'] = {
  "count" : 30,
  "results" : [ {
    "name" : "Marriot Hotels - New hotel in Manchester",
    "project_assurance_advisor" : "",
    "project_code" : "P-01234567",
    "id" : "d290f1ee-6c54-4b01-90e6-d701748f0851",
    "project_manager" : {
      "last_name" : "Adviser",
      "id" : "d290f1ee-6c54-4b01-90e6-d701748f0851",
      "first_name" : "Annette"
    },
    "project_manager_team" : {
      "name" : "Sector Advisory Services",
      "id" : "d290f1ee-6c54-4b01-90e6-d701748f0851"
    },
    "project_assurance_team" : ""
  } ]
};
  if (Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  } else {
    res.end();
  }
}

exports.patchInvestment = function(args, res, next) {
  /**
   * updates an investment project object, from a partial JSON object
   * Patches an existing investment project object
   *
   * investmentId String UUID for a Data Hub investment project
   * investment InvestmentProject Investment project  data to update
   * no response value expected for this operation
   **/
  res.end();
}

exports.removeInvestmentTeamMember = function(args, res, next) {
  /**
   * Removes a team member from an investment project
   *
   * investmentId UUID UUID of investment project
   * adviserId UUID UUID of adviser
   * no response value expected for this operation
   **/
  res.end();
}

exports.unarchiveCompany = function(args, res, next) {
  /**
   * Unarchives a company
   *
   * company_id UUID UUID of company
   * no response value expected for this operation
   **/
  res.end();
}

exports.unarchiveInvestment = function(args, res, next) {
  /**
   * Unarchives an investment project
   *
   * investmentId UUID UUID of investment project
   * no response value expected for this operation
   **/
  res.end();
}

exports.updateCompany = function(args, res, next) {
  /**
   * updates a company
   * Updates an existing company, only changing fields specified in the request
   *
   * companyId String UUID for a Data Hub company
   * company Company Company data to update
   * archived Boolean Update the company's status to Archived (optional)
   * no response value expected for this operation
   **/
  res.end();
}

