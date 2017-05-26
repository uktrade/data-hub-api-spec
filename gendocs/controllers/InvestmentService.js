'use strict';

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
  "phase" : {
    "name" : "Active",
    "id" : "d290f1ee-6c54-4b01-90e6-d701748f0851"
  },
  "referral_source_activity_website" : {
    "name" : "DIT Regional Website",
    "id" : "d290f1ee-6c54-4b01-90e6-d701748f0851"
  },
  "estimated_land_date" : "2017-05-01",
  "investor_company" : "",
  "description" : "Marriott hotels wishes to open in a new part of Manchester under-served by its existing hotels",
  "project_code" : "P-01234567",
  "referral_source_activity" : {
    "name" : "Cold Call",
    "id" : "d290f1ee-6c54-4b01-90e6-d701748f0851"
  },
  "referral_source_activity_event" : "Moscow Hotels Expo 2017",
  "fdi_type" : {
    "name" : "Merger",
    "id" : "d290f1ee-6c54-4b01-90e6-d701748f0851"
  },
  "project_shareable" : true,
  "referral_source_advisor" : "",
  "nda_signed" : false,
  "investment_type" : {
    "name" : "FDI",
    "id" : "d290f1ee-6c54-4b01-90e6-d701748f0851"
  },
  "not_shareable_reason" : "Company has asked us to keep project quiet until official announcement",
  "non_fdi_type" : {
    "name" : "Advanced Engineering Supply Chain",
    "id" : "d290f1ee-6c54-4b01-90e6-d701748f0851"
  },
  "anonymous_description" : "A large hotel chain wishes to open a hotel in a new part of a large northern city under-served by its existing hotels",
  "name" : "Marriot Hotels - New hotel in Manchester",
  "referral_source_activity_marketing" : {
    "name" : "Press advertisement",
    "id" : "d290f1ee-6c54-4b01-90e6-d701748f0851"
  },
  "client_contacts" : "",
  "client_relationship_manager" : {
    "last_name" : "Advisor",
    "id" : "d290f1ee-6c54-4b01-90e6-d701748f0851",
    "first_name" : "Alison"
  },
  "id" : "d290f1ee-6c54-4b01-90e6-d701748f0851",
  "sector" : {
    "name" : "Advanced Engineering",
    "id" : "d290f1ee-6c54-4b01-90e6-d701748f0851"
  },
  "business_activities" : "",
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

exports.getinvestmentrequirements = function(args, res, next) {
  /**
   * Returns the Requirements information associated with a project @TODO document WHY
   * Passing in the UUID of an investment project returns the value associated with it 
   *
   * investmentId UUID UUID for a Data Hub investment project
   * returns InvestmentRequirements
   **/
  var examples = {};
  examples['application/json'] = {
  "requirements_complete" : false,
  "competitor_countries" : "",
  "client_requirements" : "Marriott are looking to expand into a city or town where they do not currently have a presence, or have room for expansion....",
  "uk_company" : {
    "name" : "Company Registered Name Ltd",
    "id" : "046b6c7f-0b8a-43b9-b35d-6489e6daee91"
  },
  "strategic_drivers" : "",
  "address_line_1" : "19 Railway Cuttings",
  "address_postcode" : "SN1 1AA",
  "client_considering_other_countries" : false,
  "site_decided" : false,
  "address_line_3" : "Surrey",
  "address_line_2" : "East Cheam",
  "uk_region_locations" : ""
};
  if (Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  } else {
    res.end();
  }
}

exports.getinvestmentteam = function(args, res, next) {
  /**
   * Returns the team information associated with a project
   * Passing in the UUID of an investment project returns the team associated with it 
   *
   * investmentId UUID UUID for a Data Hub investment project
   * returns InvestmentTeam
   **/
  var examples = {};
  examples['application/json'] = {
  "project_assurance_advisor" : "",
  "id" : "d290f1ee-6c54-4b01-90e6-d701748f0851",
  "project_manager" : {
    "last_name" : "Advisor",
    "id" : "d290f1ee-6c54-4b01-90e6-d701748f0851",
    "first_name" : "Alison"
  },
  "project_manager_team" : {
    "name" : "Sector Advisory Services",
    "id" : "d290f1ee-6c54-4b01-90e6-d701748f0851"
  },
  "project_assurance_team" : ""
};
  if (Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  } else {
    res.end();
  }
}

exports.getinvestmentvalue = function(args, res, next) {
  /**
   * Returns the Value information associated with a project
   * Passing in the UUID of an investment project returns the value associated with it 
   *
   * investmentId UUID UUID for a Data Hub investment project
   * returns InvestmentValue
   **/
  var examples = {};
  examples['application/json'] = {
  "total_investment" : 145000000,
  "number_safeguarded_jobs" : 100,
  "average_salary" : {
    "name" : "£35,000",
    "id" : "d290f1ee-6c54-4b01-90e6-d701748f0851"
  },
  "client_cannot_provide_total_investment" : false,
  "government_assistance" : false,
  "foreign_equity_investment" : 100000000,
  "non_fdi_r_and_d_budget" : false,
  "client_cannot_provide_foreign_investment" : false,
  "export_revenue" : false,
  "new_tech_to_uk" : false,
  "r_and_d_budget" : false,
  "value_complete" : false,
  "number_new_jobs" : 100
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
  "next" : "http://{HOST}/v3/investment/{companyId}/projects?limit=10&offset=5",
  "previous" : "http://{HOST}/v3/investment/{companyId}/projects?limit=10&offset=5",
  "count" : 30,
  "results" : [ {
    "phase" : {
      "name" : "Active",
      "id" : "d290f1ee-6c54-4b01-90e6-d701748f0851"
    },
    "referral_source_activity_website" : {
      "name" : "DIT Regional Website",
      "id" : "d290f1ee-6c54-4b01-90e6-d701748f0851"
    },
    "estimated_land_date" : "2017-05-01",
    "investor_company" : "",
    "description" : "Marriott hotels wishes to open in a new part of Manchester under-served by its existing hotels",
    "project_code" : "P-01234567",
    "referral_source_activity" : {
      "name" : "Cold Call",
      "id" : "d290f1ee-6c54-4b01-90e6-d701748f0851"
    },
    "referral_source_activity_event" : "Moscow Hotels Expo 2017",
    "fdi_type" : {
      "name" : "Merger",
      "id" : "d290f1ee-6c54-4b01-90e6-d701748f0851"
    },
    "project_shareable" : true,
    "referral_source_advisor" : "",
    "nda_signed" : false,
    "investment_type" : {
      "name" : "FDI",
      "id" : "d290f1ee-6c54-4b01-90e6-d701748f0851"
    },
    "not_shareable_reason" : "Company has asked us to keep project quiet until official announcement",
    "non_fdi_type" : {
      "name" : "Advanced Engineering Supply Chain",
      "id" : "d290f1ee-6c54-4b01-90e6-d701748f0851"
    },
    "anonymous_description" : "A large hotel chain wishes to open a hotel in a new part of a large northern city under-served by its existing hotels",
    "name" : "Marriot Hotels - New hotel in Manchester",
    "referral_source_activity_marketing" : {
      "name" : "Press advertisement",
      "id" : "d290f1ee-6c54-4b01-90e6-d701748f0851"
    },
    "client_contacts" : "",
    "client_relationship_manager" : {
      "last_name" : "Advisor",
      "id" : "d290f1ee-6c54-4b01-90e6-d701748f0851",
      "first_name" : "Alison"
    },
    "id" : "d290f1ee-6c54-4b01-90e6-d701748f0851",
    "sector" : {
      "name" : "Advanced Engineering",
      "id" : "d290f1ee-6c54-4b01-90e6-d701748f0851"
    },
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

exports.metadataBusinessActibvity = function(args, res, next) {
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

exports.patchInvestmentRequirements = function(args, res, next) {
  /**
   * updates an investment requirements object, from a partial JSON object
   * Patches an existing investment requirements object
   *
   * investmentId String UUID for a Data Hub investment project
   * investment InvestmentRequirements Investment project requirements data to update
   * no response value expected for this operation
   **/
  res.end();
}

exports.patchInvestmentTeam = function(args, res, next) {
  /**
   * updates an investment team object, from a partial JSON object
   * Patches an existing investment team object
   *
   * investmentId String UUID for a Data Hub investment project
   * investment InvestmentTeam Investment project  data to update
   * no response value expected for this operation
   **/
  res.end();
}

exports.patchInvestmentValue = function(args, res, next) {
  /**
   * updates an investment project value object, from a partial JSON object
   * Patches an existing investment project value object
   *
   * investmentId String UUID for a Data Hub investment project
   * investment InvestmentValue Investment project value data to update
   * no response value expected for this operation
   **/
  res.end();
}

