'use strict';

exports.addBusinessActivity = function(args, res, next) {
  /**
   * Adds a custom Business Activity to a project
   * Adds a custom business activity to a project
   *
   * investmentId String UUID for a Data Hub investment project
   * business_activity BusinessActivity The business activity to add
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
  "description" : "Marriott hotels wishes to open in a new part of Manchester under-served by its existing hotels",
  "referral_source_activity_event" : {
    "name" : "Event Name",
    "id" : "d290f1ee-6c54-4b01-90e6-d701748f0851"
  },
  "fdi_type" : {
    "name" : "Merger",
    "id" : "d290f1ee-6c54-4b01-90e6-d701748f0851"
  },
  "not_shareable_reason" : "Company has asked us to keep project quiet until official announcement",
  "anonymous_description" : "A large hotel chain wishes to open a hotel in a new part of a large northern city under-served by its existing hotels",
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
  "document_link" : "https://sp.cdms.ukti.gov.uk/optevia_project/P-30027598",
  "phase" : {
    "name" : "Active",
    "id" : "d290f1ee-6c54-4b01-90e6-d701748f0851"
  },
  "referral_source_activity_website" : {
    "name" : "DIT Regional Website",
    "id" : "d290f1ee-6c54-4b01-90e6-d701748f0851"
  },
  "business_activity" : {
    "name" : "Retail",
    "id" : "d290f1ee-6c54-4b01-90e6-d701748f0851"
  },
  "investor_company" : {
    "name" : "Company Registered Name Ltd",
    "id" : "046b6c7f-0b8a-43b9-b35d-6489e6daee91"
  },
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
  "investment_recipient_company" : "",
  "non_fdi_type" : {
    "name" : "Advanced Engineering Supply Chain",
    "id" : "d290f1ee-6c54-4b01-90e6-d701748f0851"
  },
  "name" : "Marriot Hotels - New hotel in Manchester",
  "intermediate_company" : ""
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
  "competitor_countries" : "",
  "client_requirements" : "Marriott are looking to expand into a city or town where they do not currently have a presence, or have room for expansion....",
  "strategic_drivers" : "",
  "address_line_1" : "19 Railway Cuttings",
  "address_postcode" : "SN1 1AA",
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
  "export_revenue" : false,
  "total_investment" : 145000000,
  "new_tech_to_uk" : false,
  "r_and_d_budget" : false,
  "number_safeguarded_jobs" : 100,
  "average_salary" : {
    "name" : "£35,000",
    "id" : "d290f1ee-6c54-4b01-90e6-d701748f0851"
  },
  "number_new_jobs" : 100,
  "government_assistance" : false,
  "foreign_equity_investment" : 100000000,
  "non_fdi_r_and_d_budget" : false
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

exports.updateInvestment = function(args, res, next) {
  /**
   * updates an investment project, creating a new one if not found
   * Updates an existing investment project
   *
   * investmentId String UUID for a Data Hub investment project
   * investment InvestmentProject Investment project data to update
   * no response value expected for this operation
   **/
  res.end();
}

exports.updateInvestmentRequirements = function(args, res, next) {
  /**
   * updates an investment project requirements object, creating a new one if not found
   * Updates an existing investment project requirements object
   *
   * investmentId String UUID for a Data Hub investment project
   * investment InvestmentRequirements Investment project requirements data to update
   * no response value expected for this operation
   **/
  res.end();
}

exports.updateInvestmentTeam = function(args, res, next) {
  /**
   * updates an investment project team object, creating a new one if not found
   * Updates an existing investment project team object
   *
   * investmentId String UUID for a Data Hub investment project
   * investment InvestmentTeam Investment project team data to update
   * no response value expected for this operation
   **/
  res.end();
}

exports.updateInvestmentValue = function(args, res, next) {
  /**
   * updates an investment project value object, creating a new one if not found
   * Updates an existing investment project value object
   *
   * investmentId String UUID for a Data Hub investment project
   * investment InvestmentValue Investment project value data to update
   * no response value expected for this operation
   **/
  res.end();
}

