'use strict';

exports.addInvestmentDocument = function(args, res, next) {
  /**
   * Tells the back end that a document has successfully uploaded and where to find it
   *
   * investmentId UUID UUID of investment project
   * document Document object that contains the document URL and which the id of which section it belongs to
   * no response value expected for this operation
   **/
  res.end();
}

exports.addInvestmentDocument_0 = function(args, res, next) {
  /**
   * Tells the back end to forget a docuemtn associated with a project and a field
   *
   * documentId UUID id of the document to remove
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
  "client_cannot_provide_foreign_investment" : false,
  "approved_high_value" : true,
  "strategic_drivers" : "",
  "number_safeguarded_jobs_documents" : "",
  "r_and_d_budget" : false,
  "address_line_1" : "19 Railway Cuttings",
  "site_decided" : false,
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
    "team_complete" : false,
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

exports.unarchiveInvestment = function(args, res, next) {
  /**
   * Unarchives an investment project
   *
   * investmentId UUID UUID of investment project
   * no response value expected for this operation
   **/
  res.end();
}

