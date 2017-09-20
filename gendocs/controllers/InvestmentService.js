'use strict';

exports.addInvestmentDocument = function(args, res, next) {
  /**
   * Requests a signed URI for S3 from the back end
   *
   * investmentId UUID UUID of investment project
   * document Document object that contains the document filename and which the name of which section it belongs to
   * returns DocumentLocation
   **/
  var examples = {};
  examples['application/json'] = {
  "signed_url" : "aeiou",
  "filename" : "press_release.pdf",
  "signed_upload_url" : "aeiou",
  "project" : {
    "name" : "New hotel in Manchester",
    "id" : "d290f1ee-6c54-4b01-90e6-d701748f0851"
  },
  "id" : "d290f1ee-6c54-4b01-90e6-d701748f0851",
  "doc_type" : "new_tech_to_uk_documents"
};
  if (Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  } else {
    res.end();
  }
}

exports.addInvestmentDocument_0 = function(args, res, next) {
  /**
   * Tells the back end to forget a document associated with a project and a field
   *
   * documentId UUID id of the document to remove
   * no response value expected for this operation
   **/
  res.end();
}

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

exports.getInvestmentAudit = function(args, res, next) {
  /**
   * Get audit log
   * Returns the audit log for a specified investment project 
   *
   * investmentId UUID UUID of an investment project
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

exports.getInvestmentDocument = function(args, res, next) {
  /**
   * Retrieves a document associated with an investment project
   *
   * documentId UUID id of the document to remove
   * investmentId UUID UUID of investment project
   * returns DocumentLocation
   **/
  var examples = {};
  examples['application/json'] = {
  "signed_url" : "aeiou",
  "filename" : "press_release.pdf",
  "signed_upload_url" : "aeiou",
  "project" : {
    "name" : "New hotel in Manchester",
    "id" : "d290f1ee-6c54-4b01-90e6-d701748f0851"
  },
  "id" : "d290f1ee-6c54-4b01-90e6-d701748f0851",
  "doc_type" : "new_tech_to_uk_documents"
};
  if (Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  } else {
    res.end();
  }
}

exports.getInvestmentDocument_0 = function(args, res, next) {
  /**
   * tells the server a document has been uploaded
   *
   * documentId UUID id of the document to remove
   * investmentId UUID UUID of investment project
   * response Response 
   * no response value expected for this operation
   **/
  res.end();
}

exports.getInvestmentDocuments = function(args, res, next) {
  /**
   * Returns a list of all documenst associated with a project
   *
   * investmentId UUID UUID of investment project
   * returns DocumentLocationList
   **/
  var examples = {};
  examples['application/json'] = {
  "next" : "aeiou",
  "previous" : "aeiou",
  "count" : 123,
  "results" : [ {
    "signed_url" : "aeiou",
    "filename" : "press_release.pdf",
    "signed_upload_url" : "aeiou",
    "project" : {
      "name" : "New hotel in Manchester",
      "id" : "d290f1ee-6c54-4b01-90e6-d701748f0851"
    },
    "id" : "d290f1ee-6c54-4b01-90e6-d701748f0851",
    "doc_type" : "new_tech_to_uk_documents"
  } ]
};
  if (Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  } else {
    res.end();
  }
}

exports.getInvestmentTeamMember = function(args, res, next) {
  /**
   * Gets a team member's role
   *
   * investmentId UUID UUID of investment project
   * adviserId UUID UUID of adviser
   * body InvestmentTeamMember 
   * returns InvestmentTeamMember
   **/
  var examples = {};
  examples['application/json'] = {
  "role" : "Sector adviser",
  "adviser" : {
    "name" : "Annette Adviser",
    "last_name" : "Adviser",
    "id" : "d290f1ee-6c54-4b01-90e6-d701748f0851",
    "first_name" : "Annette"
  }
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
  "date_abandoned" : "2018-11-01",
  "quotable_as_public_case_study" : false,
  "approved_landed" : true,
  "non_fdi_r_and_d_budget" : false,
  "project_assurance_adviser" : "",
  "not_shareable_reason" : "Company has asked us to keep project quiet until official announcement",
  "incomplete_fields" : [ "total_investment" ],
  "referral_source_activity_marketing" : {
    "name" : "Press advertisement",
    "id" : "d290f1ee-6c54-4b01-90e6-d701748f0851"
  },
  "client_contacts" : "",
  "client_relationship_manager" : {
    "name" : "Annette Adviser",
    "last_name" : "Adviser",
    "id" : "d290f1ee-6c54-4b01-90e6-d701748f0851",
    "first_name" : "Annette"
  },
  "id" : "d290f1ee-6c54-4b01-90e6-d701748f0851",
  "project_manager" : "",
  "number_new_jobs" : 100,
  "approved_non_fdi" : true,
  "sector" : {
    "name" : "Advanced Engineering",
    "id" : "d290f1ee-6c54-4b01-90e6-d701748f0851"
  },
  "other_business_activity" : "aeiou",
  "project_assurance_team" : "",
  "approved_commitment_to_invest" : true,
  "approved_fdi" : true,
  "reason_abandoned" : "Funding lost",
  "actual_land_date" : "2018-11-01",
  "investor_company" : "",
  "address_postcode" : "SN1 1AA",
  "project_code" : "P-01234567",
  "referral_source_activity" : {
    "name" : "Cold Call",
    "id" : "d290f1ee-6c54-4b01-90e6-d701748f0851"
  },
  "priority" : "aeiou",
  "project_shareable" : true,
  "foreign_equity_investment" : 100000000,
  "referral_source_advisor" : "",
  "nda_signed" : false,
  "investment_type" : {
    "name" : "FDI",
    "id" : "d290f1ee-6c54-4b01-90e6-d701748f0851"
  },
  "date_lost" : "2018-11-01",
  "export_revenue" : false,
  "some_new_jobs" : false,
  "uk_company" : "",
  "name" : "Marriot Hotels - New hotel in Manchester",
  "client_considering_other_countries" : false,
  "value_complete" : false,
  "business_activities" : "",
  "status" : "aeiou",
  "requirements_complete" : false,
  "country_lost_to" : {
    "name" : "France",
    "id" : "d290f1ee-6c54-4b01-90e6-d701748f0851"
  },
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
  "r_and_d_budget" : false,
  "address_line_1" : "19 Railway Cuttings",
  "will_new_jobs_last_two_years" : false,
  "address_line_3" : "Surrey",
  "address_line_2" : "East Cheam",
  "reason_delayed" : "Problems getting planning permission",
  "reason_lost" : "Cheaper in other country",
  "referral_source_activity_website" : {
    "name" : "DIT Regional Website",
    "id" : "d290f1ee-6c54-4b01-90e6-d701748f0851"
  },
  "number_safeguarded_jobs" : 100,
  "average_salary" : {
    "name" : "£35,000",
    "id" : "d290f1ee-6c54-4b01-90e6-d701748f0851"
  },
  "fdi_value" : {
    "name" : "Good",
    "id" : "d290f1ee-6c54-4b01-90e6-d701748f0851"
  },
  "project_manager_team" : {
    "name" : "Sector Advisory Services",
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
  }
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
    "project_code" : "P-01234567",
    "id" : "d290f1ee-6c54-4b01-90e6-d701748f0851"
  } ]
};
  if (Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  } else {
    res.end();
  }
}

exports.getprojectssincetime = function(args, res, next) {
  /**
   * returns a list of investment projects that have changed since a given time
   * Returns a list of investment projects that have been modified since the _from_ time; this API should *not* paginate as it is intended solely for the user of MI to ingest changes to FDI projects
   *
   * time Date RFC3339 formatted date time string
   * returns InvestmentProjectsListFull
   **/
  var examples = {};
  examples['application/json'] = {
  "count" : 30,
  "results" : [ {
    "estimated_land_date" : "2017-05-01",
    "total_investment" : 145000000,
    "client_requirements" : "Marriott are looking to expand into a city or town where they do not currently have a presence, or have room for expansion....",
    "date_abandoned" : "2018-11-01",
    "quotable_as_public_case_study" : false,
    "approved_landed" : true,
    "non_fdi_r_and_d_budget" : false,
    "project_assurance_adviser" : "",
    "not_shareable_reason" : "Company has asked us to keep project quiet until official announcement",
    "incomplete_fields" : [ "total_investment" ],
    "referral_source_activity_marketing" : {
      "name" : "Press advertisement",
      "id" : "d290f1ee-6c54-4b01-90e6-d701748f0851"
    },
    "client_contacts" : "",
    "client_relationship_manager" : {
      "name" : "Annette Adviser",
      "last_name" : "Adviser",
      "id" : "d290f1ee-6c54-4b01-90e6-d701748f0851",
      "first_name" : "Annette"
    },
    "id" : "d290f1ee-6c54-4b01-90e6-d701748f0851",
    "project_manager" : "",
    "number_new_jobs" : 100,
    "approved_non_fdi" : true,
    "sector" : {
      "name" : "Advanced Engineering",
      "id" : "d290f1ee-6c54-4b01-90e6-d701748f0851"
    },
    "other_business_activity" : "aeiou",
    "project_assurance_team" : "",
    "approved_commitment_to_invest" : true,
    "approved_fdi" : true,
    "reason_abandoned" : "Funding lost",
    "actual_land_date" : "2018-11-01",
    "investor_company" : "",
    "address_postcode" : "SN1 1AA",
    "project_code" : "P-01234567",
    "referral_source_activity" : {
      "name" : "Cold Call",
      "id" : "d290f1ee-6c54-4b01-90e6-d701748f0851"
    },
    "priority" : "aeiou",
    "project_shareable" : true,
    "foreign_equity_investment" : 100000000,
    "referral_source_advisor" : "",
    "nda_signed" : false,
    "investment_type" : {
      "name" : "FDI",
      "id" : "d290f1ee-6c54-4b01-90e6-d701748f0851"
    },
    "date_lost" : "2018-11-01",
    "export_revenue" : false,
    "some_new_jobs" : false,
    "uk_company" : "",
    "name" : "Marriot Hotels - New hotel in Manchester",
    "client_considering_other_countries" : false,
    "value_complete" : false,
    "business_activities" : "",
    "status" : "aeiou",
    "requirements_complete" : false,
    "country_lost_to" : {
      "name" : "France",
      "id" : "d290f1ee-6c54-4b01-90e6-d701748f0851"
    },
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
    "r_and_d_budget" : false,
    "address_line_1" : "19 Railway Cuttings",
    "will_new_jobs_last_two_years" : false,
    "address_line_3" : "Surrey",
    "address_line_2" : "East Cheam",
    "reason_delayed" : "Problems getting planning permission",
    "reason_lost" : "Cheaper in other country",
    "referral_source_activity_website" : {
      "name" : "DIT Regional Website",
      "id" : "d290f1ee-6c54-4b01-90e6-d701748f0851"
    },
    "number_safeguarded_jobs" : 100,
    "average_salary" : {
      "name" : "£35,000",
      "id" : "d290f1ee-6c54-4b01-90e6-d701748f0851"
    },
    "fdi_value" : {
      "name" : "Good",
      "id" : "d290f1ee-6c54-4b01-90e6-d701748f0851"
    },
    "project_manager_team" : {
      "name" : "Sector Advisory Services",
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

exports.removeAllInvestmentTeamMember = function(args, res, next) {
  /**
   * Removes all team members from an investment project
   *
   * investmentId UUID UUID of investment project
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

exports.unarchiveInvestment = function(args, res, next) {
  /**
   * Unarchives an investment project
   *
   * investmentId UUID UUID of investment project
   * no response value expected for this operation
   **/
  res.end();
}

exports.updateInvestmentTeamMember = function(args, res, next) {
  /**
   * Updates a team member role
   *
   * investmentId UUID UUID of investment project
   * adviserId UUID UUID of adviser
   * body InvestmentTeamMember 
   * no response value expected for this operation
   **/
  res.end();
}

