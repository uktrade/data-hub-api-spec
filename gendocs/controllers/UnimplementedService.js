'use strict';

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
    "client_relationship_manager_team" : {
      "name" : "Sector Advisory Services",
      "id" : "d290f1ee-6c54-4b01-90e6-d701748f0851"
    },
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
    "investor_company_country" : {
      "name" : "France",
      "id" : "d290f1ee-6c54-4b01-90e6-d701748f0851"
    },
    "name" : "Marriot Hotels - New hotel in Manchester",
    "client_considering_other_countries" : false,
    "value_complete" : false,
    "business_activities" : "",
    "status" : "aeiou",
    "requirements_complete" : false,
    "country_lost_to" : "",
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
    "project_manager_team" : "",
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

